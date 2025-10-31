import './LogHistory.css'

function LogHistory({ logs }) {
  if (logs.length === 0) {
    return (
      <div className="log-history">
        <h2>Log History</h2>
        <p className="empty-state">No logs yet. Start by completing your daily questionnaire!</p>
      </div>
    )
  }

  const categories = [
    { key: 'sleepQuality', label: 'Sleep Quality' },
    { key: 'bedroomEnvironment', label: 'Bedroom' },
    { key: 'mentalHealth', label: 'Mental Health' },
    { key: 'cognitiveHealth', label: 'Cognitive' },
    { key: 'memory', label: 'Memory' },
    { key: 'diet', label: 'Diet' },
    { key: 'nutrition', label: 'Nutrition' }
  ]

  return (
    <div className="log-history">
      <h2>Your Sleep Logs ({logs.length} entries)</h2>
      
      <div className="logs-container">
        {logs.map(log => (
          <div key={log.id} className="log-card">
            <div className="log-header">
              <h3>{new Date(log.date).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</h3>
              <span className="log-time">
                {new Date(log.createdAt).toLocaleTimeString()}
              </span>
            </div>
            
            <div className="log-scores">
              {categories.map(cat => (
                <div key={cat.key} className="score-item">
                  <span className="score-label">{cat.label}</span>
                  <div className="score-bar-container">
                    <div 
                      className="score-bar"
                      style={{ width: `${log[cat.key] * 10}%` }}
                    />
                  </div>
                  <span className="score-value">{log[cat.key]}/10</span>
                </div>
              ))}
            </div>

            {log.notes && (
              <div className="log-notes">
                <strong>Notes:</strong> {log.notes}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogHistory
