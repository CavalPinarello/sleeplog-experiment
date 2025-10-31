# Sleep Log Experiment Web App

A 2-week sleep tracking web application based on Stanford Sleep Log guidelines.

## Features

- **Daily Questionnaire**: 7 categories of sleep-related questions
  1. Sleep Quality
  2. Bedroom Environment
  3. Mental Health
  4. Cognitive Health
  5. Memory
  6. Diet
  7. Nutrition

- **Session-Based Tracking**: No login required, uses browser sessions
- **2-Week Duration**: Track sleep patterns over 14 days
- **Data Visualization**: View your sleep log summary

## Tech Stack

- **Frontend**: React + Vite
- **Backend**: Python Flask
- **Database**: SQLite
- **Session Management**: Browser-based sessions

## Setup Instructions

### Backend Setup

```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

Backend runs on `http://localhost:5001`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

## Usage

1. Start the backend server
2. Start the frontend development server
3. Open `http://localhost:5173` in your browser
4. Answer the daily questionnaire
5. View your 2-week progress

## API Endpoints

- `GET /api/health` - Health check
- `GET /api/session` - Generate new session ID
- `POST /api/log` - Submit daily sleep log entry
- `GET /api/logs/:sessionId` - Get all logs for a session
- `GET /api/summary/:sessionId` - Get 2-week summary

## Testing

Run automated API tests:

```bash
# Start the backend server first
cd backend
source venv/bin/activate
python app.py

# In another terminal, run tests
./backend/venv/bin/python test_api.py
```

All 5 API endpoints are tested automatically.

## Development

This is an experimental project for testing sleep tracking methodologies.
