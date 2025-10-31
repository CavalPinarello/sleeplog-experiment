from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import json
from datetime import datetime
import uuid

app = Flask(__name__)
CORS(app)

DATABASE = 'sleeplog.db'

def get_db():
    """Create database connection"""
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    """Initialize database with schema"""
    conn = get_db()
    cursor = conn.cursor()
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS sleep_logs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            session_id TEXT NOT NULL,
            date TEXT NOT NULL,
            sleep_quality INTEGER NOT NULL,
            bedroom_environment INTEGER NOT NULL,
            mental_health INTEGER NOT NULL,
            cognitive_health INTEGER NOT NULL,
            memory INTEGER NOT NULL,
            diet INTEGER NOT NULL,
            nutrition INTEGER NOT NULL,
            notes TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    cursor.execute('''
        CREATE INDEX IF NOT EXISTS idx_session_id ON sleep_logs(session_id)
    ''')
    
    conn.commit()
    conn.close()

@app.route('/api/health', methods=['GET'])
def health():
    """Health check endpoint"""
    return jsonify({'status': 'healthy', 'service': 'sleeplog-api'})

@app.route('/api/session', methods=['GET'])
def create_session():
    """Generate a new session ID"""
    session_id = str(uuid.uuid4())
    return jsonify({'sessionId': session_id})

@app.route('/api/log', methods=['POST'])
def create_log():
    """Create a new sleep log entry"""
    data = request.json
    
    required_fields = [
        'sessionId', 'date', 'sleepQuality', 'bedroomEnvironment',
        'mentalHealth', 'cognitiveHealth', 'memory', 'diet', 'nutrition'
    ]
    
    for field in required_fields:
        if field not in data:
            return jsonify({'error': f'Missing required field: {field}'}), 400
    
    conn = get_db()
    cursor = conn.cursor()
    
    try:
        cursor.execute('''
            INSERT INTO sleep_logs (
                session_id, date, sleep_quality, bedroom_environment,
                mental_health, cognitive_health, memory, diet, nutrition, notes
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (
            data['sessionId'],
            data['date'],
            data['sleepQuality'],
            data['bedroomEnvironment'],
            data['mentalHealth'],
            data['cognitiveHealth'],
            data['memory'],
            data['diet'],
            data['nutrition'],
            data.get('notes', '')
        ))
        
        conn.commit()
        log_id = cursor.lastrowid
        
        return jsonify({
            'success': True,
            'logId': log_id,
            'message': 'Sleep log saved successfully'
        }), 201
        
    except sqlite3.IntegrityError as e:
        return jsonify({'error': str(e)}), 400
    finally:
        conn.close()

@app.route('/api/logs/<session_id>', methods=['GET'])
def get_logs(session_id):
    """Get all logs for a session"""
    conn = get_db()
    cursor = conn.cursor()
    
    cursor.execute('''
        SELECT * FROM sleep_logs
        WHERE session_id = ?
        ORDER BY date DESC
    ''', (session_id,))
    
    rows = cursor.fetchall()
    conn.close()
    
    logs = []
    for row in rows:
        logs.append({
            'id': row['id'],
            'sessionId': row['session_id'],
            'date': row['date'],
            'sleepQuality': row['sleep_quality'],
            'bedroomEnvironment': row['bedroom_environment'],
            'mentalHealth': row['mental_health'],
            'cognitiveHealth': row['cognitive_health'],
            'memory': row['memory'],
            'diet': row['diet'],
            'nutrition': row['nutrition'],
            'notes': row['notes'],
            'createdAt': row['created_at']
        })
    
    return jsonify({'logs': logs, 'count': len(logs)})

@app.route('/api/summary/<session_id>', methods=['GET'])
def get_summary(session_id):
    """Get summary statistics for a session"""
    conn = get_db()
    cursor = conn.cursor()
    
    cursor.execute('''
        SELECT 
            COUNT(*) as total_entries,
            AVG(sleep_quality) as avg_sleep_quality,
            AVG(bedroom_environment) as avg_bedroom,
            AVG(mental_health) as avg_mental_health,
            AVG(cognitive_health) as avg_cognitive_health,
            AVG(memory) as avg_memory,
            AVG(diet) as avg_diet,
            AVG(nutrition) as avg_nutrition,
            MIN(date) as first_entry,
            MAX(date) as last_entry
        FROM sleep_logs
        WHERE session_id = ?
    ''', (session_id,))
    
    row = cursor.fetchone()
    conn.close()
    
    if row['total_entries'] == 0:
        return jsonify({'error': 'No logs found for this session'}), 404
    
    summary = {
        'totalEntries': row['total_entries'],
        'averages': {
            'sleepQuality': round(row['avg_sleep_quality'], 1),
            'bedroomEnvironment': round(row['avg_bedroom'], 1),
            'mentalHealth': round(row['avg_mental_health'], 1),
            'cognitiveHealth': round(row['avg_cognitive_health'], 1),
            'memory': round(row['avg_memory'], 1),
            'diet': round(row['avg_diet'], 1),
            'nutrition': round(row['avg_nutrition'], 1)
        },
        'period': {
            'firstEntry': row['first_entry'],
            'lastEntry': row['last_entry']
        }
    }
    
    return jsonify(summary)

if __name__ == '__main__':
    init_db()
    print("🌙 Sleep Log API starting...")
    print("📊 Database initialized")
    print("🚀 Server running on http://localhost:5000")
    app.run(debug=True, port=5000)
