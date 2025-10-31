import { useState, useEffect } from 'react'
import axios from 'axios'
import './Summary.css'

const API_URL = 'http://localhost:5000/api'

function Summary({ sessionId }) {
  const [summary, setSummary] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchSummary()
  }, [sessionId])

  const fetchSummary = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${API_URL}/summary/${sessionId}`)
      setSummary(response.data)
      setError(null)
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to load summary')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="summary loading">Loading summary...</div>
  }

  if (error) {
    return (
      <div className="summary">
        <h2>2-Week Summary</h2>
        <p className="error-message">{error}</p>
      </div>
    )
  }

  const categories = [
    { key: 'sleepQuality', label: 'Sleep Quality', icon: '😴' },
    { key: 'bedroomEnvironment', label: 'Bedroom Environment', icon: '🛏️' },
    { key: 'mentalHealth', label: 'Mental Health', icon: '🧠' },
    { key: 'cognitiveHealth', label: 'Cognitive Health', icon: '💭' },
    { key: 'memory', label: 'Memory', icon: '🎯' },
    { key: 'diet', label: 'Diet', icon: '🍽️' },
    { key: 'nutrition', label: 'Nutrition', icon: '🥗' }
  ]

  const getScoreColor = (score) => {
    if (score >= 8) return 'excellent'
    if (score >= 6) return 'good'
    if (score >= 4) return 'fair'
    return 'poor'
  }

  const daysTracked = summary.totalEntries
  const daysRemaining = Math.max(0, 14 - daysTracked)
  const progressPercentage = (daysTracked / 14) * 100

  return (
    <div className="summary">
      <h2>📊 Your 2-Week Summary</h2>

      <div className="progress-section">
        <h3>Tracking Progress</h3>
        <div className="progress-stats">
          <div className="stat">
            <span className="stat-value">{daysTracked}</span>
            <span className="stat-label">Days Logged</span>
          </div>
          <div className="stat">
            <span className="stat-value">{daysRemaining}</span>
            <span className="stat-label">Days Remaining</span>
          </div>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <p className="progress-text">{Math.round(progressPercentage)}% Complete</p>
      </div>

      <div className="period-info">
        <p><strong>First Entry:</strong> {new Date(summary.period.firstEntry).toLocaleDateString()}</p>
        <p><strong>Latest Entry:</strong> {new Date(summary.period.lastEntry).toLocaleDateString()}</p>
      </div>

      <h3>Average Scores</h3>
      <div className="summary-cards">
        {categories.map(cat => {
          const score = summary.averages[cat.key]
          const scoreClass = getScoreColor(score)
          
          return (
            <div key={cat.key} className={`summary-card ${scoreClass}`}>
              <div className="card-icon">{cat.icon}</div>
              <div className="card-content">
                <h4>{cat.label}</h4>
                <div className="card-score">{score} / 10</div>
                <div className="card-bar">
                  <div 
                    className="card-bar-fill"
                    style={{ width: `${score * 10}%` }}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="insights">
        <h3>💡 Insights</h3>
        <ul>
          {summary.averages.sleepQuality < 6 && (
            <li>Your sleep quality could be improved. Consider reviewing your bedtime routine.</li>
          )}
          {summary.averages.bedroomEnvironment < 7 && (
            <li>Your bedroom environment may need optimization for better sleep.</li>
          )}
          {summary.averages.mentalHealth >= 8 && (
            <li>Great job maintaining positive mental health! 🎉</li>
          )}
          {summary.averages.diet < 6 && (
            <li>Focus on improving your diet - it can significantly impact sleep quality.</li>
          )}
          {daysTracked < 14 && (
            <li>Keep logging daily to complete your 2-week tracking period!</li>
          )}
          {daysTracked >= 14 && (
            <li>🎉 Congratulations! You've completed the 2-week tracking period!</li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Summary
