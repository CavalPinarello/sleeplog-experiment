import { useState } from 'react'
import axios from 'axios'
import './DailyQuestionnaire.css'

const API_URL = 'http://localhost:5001/api'

const questions = [
  {
    id: 'sleepQuality',
    label: '1. Sleep Quality',
    description: 'How would you rate your overall sleep quality last night?',
    scale: 'Poor - Excellent'
  },
  {
    id: 'bedroomEnvironment',
    label: '2. Bedroom Environment',
    description: 'How comfortable was your sleeping environment?',
    scale: 'Very Uncomfortable - Very Comfortable'
  },
  {
    id: 'mentalHealth',
    label: '3. Mental Health',
    description: 'How would you rate your mental well-being today?',
    scale: 'Very Poor - Excellent'
  },
  {
    id: 'cognitiveHealth',
    label: '4. Cognitive Health',
    description: 'How clear and focused do you feel mentally?',
    scale: 'Very Foggy - Very Clear'
  },
  {
    id: 'memory',
    label: '5. Memory',
    description: 'How is your memory functioning today?',
    scale: 'Very Poor - Excellent'
  },
  {
    id: 'diet',
    label: '6. Diet',
    description: 'How would you rate your eating habits yesterday?',
    scale: 'Very Poor - Excellent'
  },
  {
    id: 'nutrition',
    label: '7. Nutrition',
    description: 'How nutritious was your food intake yesterday?',
    scale: 'Very Poor - Excellent'
  }
]

function DailyQuestionnaire({ sessionId, onSubmitted }) {
  const [formData, setFormData] = useState({
    sleepQuality: 5,
    bedroomEnvironment: 5,
    mentalHealth: 5,
    cognitiveHealth: 5,
    memory: 5,
    diet: 5,
    nutrition: 5,
    notes: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState(null)

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: parseInt(value)
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setMessage(null)

    try {
      const payload = {
        sessionId,
        date: new Date().toISOString().split('T')[0],
        ...formData
      }

      await axios.post(`${API_URL}/log`, payload)
      
      setMessage({ type: 'success', text: 'Sleep log saved successfully!' })
      
      setFormData({
        sleepQuality: 5,
        bedroomEnvironment: 5,
        mentalHealth: 5,
        cognitiveHealth: 5,
        memory: 5,
        diet: 5,
        nutrition: 5,
        notes: ''
      })

      setTimeout(() => {
        onSubmitted()
      }, 1500)

    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: error.response?.data?.error || 'Failed to save log. Please try again.' 
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="questionnaire">
      <div className="questionnaire-header">
        <h2>Daily Sleep Log</h2>
        <p className="date">Today: {new Date().toLocaleDateString()}</p>
      </div>

      {message && (
        <div className={`message ${message.type}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {questions.map(question => (
          <div key={question.id} className="question-block">
            <label className="question-label">
              {question.label}
            </label>
            <p className="question-description">{question.description}</p>
            
            <div className="scale-container">
              <span className="scale-label">1</span>
              <input
                type="range"
                min="1"
                max="10"
                value={formData[question.id]}
                onChange={(e) => handleChange(question.id, e.target.value)}
                className="slider"
              />
              <span className="scale-label">10</span>
            </div>
            
            <div className="scale-value">
              Score: <strong>{formData[question.id]}</strong> / 10
            </div>
            
            <p className="scale-description">{question.scale}</p>
          </div>
        ))}

        <div className="question-block">
          <label className="question-label">Additional Notes (Optional)</label>
          <textarea
            value={formData.notes}
            onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
            placeholder="Any additional observations about your sleep, health, or diet..."
            rows="4"
            className="notes-textarea"
          />
        </div>

        <button 
          type="submit" 
          className="submit-button"
          disabled={submitting}
        >
          {submitting ? 'Saving...' : 'Save Daily Log'}
        </button>
      </form>
    </div>
  )
}

export default DailyQuestionnaire
