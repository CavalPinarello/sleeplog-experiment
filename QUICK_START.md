# 🚀 Quick Start Guide

## Create Linear Issues (2 Steps)

### Step 1: Authenticate
```bash
npx @linear/cli auth login
```

### Step 2: Create Issues
```bash
cd /Users/martinkawalski/sleeplog_experiments
./create_linear_issues.sh
```

**Done!** All 5 tasks will be created in your Linear workspace.

---

## Start the Application (2 Commands)

### Option 1: Automated Setup
```bash
./setup.sh
```

### Option 2: Manual Start

**Terminal 1 (Backend):**
```bash
cd backend
source venv/bin/activate
python app.py
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run dev
```

**Open:** http://localhost:5173

---

## Project Structure

```
sleeplog_experiments/
├── backend/              # Flask API + SQLite
├── frontend/             # React + Vite
├── .github/              # Linear task details
└── [Documentation]       # README, guides, etc.
```

---

## The 5 Linear Tasks

1. **End-to-End Testing** (High, 3h) - Test everything
2. **Add Error Handling** (Medium, 2h) - Better error messages
3. **Add Data Export** (Low, 3h) - CSV/PDF export
4. **Add Charts** (Low, 4h) - Visualize trends
5. **Deployment** (Low, 4h) - Deploy to production

---

## Ask Droid For Help

```
"Start working on the testing task"
"Add CSV export feature"
"Fix the error handling"
"Deploy to Vercel"
"Show me the API endpoints"
```

---

## Documentation Index

- **LINEAR_SETUP_INSTRUCTIONS.md** - Detailed Linear setup
- **DROID_GUIDE.md** - How to work with Droid
- **PROJECT_SUMMARY.md** - Complete project overview
- **README.md** - Basic setup instructions

---

## Useful Commands

```bash
# View Linear issues
npx @linear/cli issue list

# Git log
git log --oneline

# Run backend tests (when added)
cd backend && pytest

# Check frontend for errors
cd frontend && npm run lint
```

---

**Need help?** Just ask Droid! 🤖
