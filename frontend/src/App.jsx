import { useState, useEffect } from 'react'
import './App.css'
import DailyQuestionnaire from './components/DailyQuestionnaire'
import LogHistory from './components/LogHistory'
import Summary from './components/Summary'
import axios from 'axios'

const API_URL = 'http://localhost:5001/api'

function App() {
  const [sessionId, setSessionId] = useState(null)
  const [activeView, setActiveView] = useState('questionnaire')
  const [logs, setLogs] = useState([])

  useEffect(() => {
    let storedSessionId = localStorage.getItem('sleeplog_session_id')
    
    if (!storedSessionId) {
      axios.get(`${API_URL}/session`)
        .then(response => {
          storedSessionId = response.data.sessionId
          localStorage.setItem('sleeplog_session_id', storedSessionId)
          setSessionId(storedSessionId)
        })
        .catch(error => {
          console.error('Error creating session:', error)
        })
    } else {
      setSessionId(storedSessionId)
    }
  }, [])

  useEffect(() => {
    if (sessionId) {
      fetchLogs()
    }
  }, [sessionId])

  const fetchLogs = async () => {
    try {
      const response = await axios.get(`${API_URL}/logs/${sessionId}`)
      setLogs(response.data.logs)
    } catch (error) {
      console.error('Error fetching logs:', error)
    }
  }

  const handleLogSubmitted = () => {
    fetchLogs()
    setActiveView('history')
  }

  const resetSession = () => {
    if (confirm('Are you sure you want to start a new session? This will clear your current data from view.')) {
      localStorage.removeItem('sleeplog_session_id')
      window.location.reload()
    }
  }

  if (!sessionId) {
    return <div className="loading">Loading session...</div>
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🌙 Sleep Log Tracker</h1>
        <p className="subtitle">2-Week Stanford Sleep Log Protocol</p>
        <div className="session-info">
          <span>Session: {sessionId.substring(0, 8)}...</span>
          <button onClick={resetSession} className="btn-small">New Session</button>
        </div>
      </header>

      <nav className="navigation">
        <button 
          className={activeView === 'questionnaire' ? 'active' : ''}
          onClick={() => setActiveView('questionnaire')}
        >
          Daily Log
        </button>
        <button 
          className={activeView === 'history' ? 'active' : ''}
          onClick={() => setActiveView('history')}
        >
          History ({logs.length})
        </button>
        <button 
          className={activeView === 'summary' ? 'active' : ''}
          onClick={() => setActiveView('summary')}
        >
          Summary
        </button>
      </nav>

      <main className="content">
        {activeView === 'questionnaire' && (
          <DailyQuestionnaire 
            sessionId={sessionId} 
            onSubmitted={handleLogSubmitted}
          />
        )}
        
        {activeView === 'history' && (
          <LogHistory 
            sessionId={sessionId}
            logs={logs}
          />
        )}
        
        {activeView === 'summary' && (
          <Summary sessionId={sessionId} />
        )}
      </main>

      <footer className="app-footer">
        <p>Track your sleep for 14 days • No login required • Data stored locally</p>
      </footer>
    </div>
  )
}

export default App
