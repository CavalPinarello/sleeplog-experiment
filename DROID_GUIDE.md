# Working with Droid - A Practical Guide

This guide shows you how to work with Droid using this Sleep Log project as an example.

## What Just Happened?

You asked Droid to create a sleep tracking web app, and here's what Droid did:

### 1. **Analyzed Requirements**
- Understood you need a 2-week tracking system
- Identified 7 question categories
- Recognized no login was needed (session-based)
- Determined appropriate tech stack for beginners

### 2. **Made Technology Decisions**
- **React + Vite**: Modern, fast, beginner-friendly frontend
- **Flask**: Simple Python backend, easy to understand
- **SQLite**: No database server needed, file-based storage
- **localStorage**: Browser session management

### 3. **Built Complete System**
- Created 23 files across backend and frontend
- Wrote ~4,700 lines of working code
- Implemented 5 API endpoints
- Built 3 main React components
- Styled entire UI with custom CSS

### 4. **Documented Everything**
- README with setup instructions
- Linear task breakdown (15 tasks)
- This guide you're reading now

### 5. **Version Control**
- Initialized git repository
- Made 2 organized commits
- Ready for GitHub/Linear integration

## How to Work with Droid

### Pattern 1: Starting a New Project

**What you did:**
```
"I would like to build a web app that tracks sleep over 2 weeks..."
```

**What Droid did:**
1. Asked clarifying questions about tech stack
2. Suggested appropriate frameworks
3. Created complete project structure
4. Built all necessary components
5. Documented the work

**Tip:** Be specific about what you want, but don't worry about the "how" - Droid will figure that out.

---

### Pattern 2: Making Changes to Code

**Example commands you can give:**

```
"Add a dark mode toggle to the app"
"Change the color scheme to blue and green"
"Add a delete button to each log entry"
"Make the questionnaire save automatically as I type"
```

**What Droid will do:**
1. Read existing code to understand structure
2. Find the right files to modify
3. Make changes matching existing style
4. Test that changes work
5. Update documentation if needed

---

### Pattern 3: Debugging Issues

**Example commands:**

```
"The backend won't start, here's the error: [paste error]"
"Why isn't my session ID persisting?"
"The summary page shows NaN for all scores"
```

**What Droid will do:**
1. Read relevant code files
2. Analyze the error
3. Identify the root cause
4. Implement fix
5. Verify solution works

---

### Pattern 4: Adding Features

**Example commands:**

```
"Add a feature to export logs as CSV"
"Add charts showing sleep trends over time"
"Add email reminders for daily logging"
```

**What Droid will do:**
1. Break down feature into tasks
2. Create todo list for tracking
3. Implement incrementally
4. Test each part
5. Update documentation

---

### Pattern 5: Understanding Code

**Example commands:**

```
"Explain how the session management works"
"Walk me through the API endpoints"
"What does the Summary component do?"
```

**What Droid will do:**
1. Read relevant files
2. Explain in clear language
3. Show code examples
4. Answer follow-up questions

---

## Droid's Work Style

### What Droid Does Automatically:
- ✅ Follows existing code style and patterns
- ✅ Creates necessary files and folders
- ✅ Runs tests to verify changes
- ✅ Uses version control (git)
- ✅ Documents changes
- ✅ Checks for errors before finishing

### What Droid Does NOT Do (Unless Asked):
- ❌ Suggest unrelated improvements
- ❌ Add features you didn't request
- ❌ Over-engineer solutions
- ❌ Make assumptions without asking
- ❌ Push code to remote repositories (will ask first)

---

## Best Practices for Working with Droid

### 1. Be Clear About What You Want
**Good:** "Add a dark mode toggle to the header"
**Less Good:** "Make it look better"

### 2. One Task at a Time
**Good:** "Add CSV export feature"
**Then:** "Now add PDF export"
**Less Good:** "Add CSV and PDF export, and also email and SMS notifications, and..."

### 3. Point Out Issues Quickly
**Good:** "That didn't work, here's the error..."
**Droid will:** Debug and fix immediately

### 4. Ask for Explanations
**Good:** "Can you explain how this works before implementing?"
**Droid will:** Explain approach first, then ask if you want to proceed

### 5. Reference Existing Patterns
**Good:** "Add a new page like the Summary component"
**Droid will:** Match the existing style and structure

---

## Common Droid Commands

### File Operations
```
"Read the App.jsx file"
"Create a new component called UserProfile"
"Edit the Summary component to show more details"
"Delete the old config file"
```

### Code Search
```
"Find all files that use the sessionId"
"Search for the API_URL constant"
"Show me all CSS files"
```

### Running Commands
```
"Start the backend server"
"Run npm install"
"Run the tests"
"Check for linting errors"
```

### Git Operations
```
"Show me what changed"
"Create a commit with message X"
"Create a new branch called feature-xyz"
"Show the git log"
```

### Analysis
```
"Analyze the project structure"
"Find potential bugs in the API code"
"Review the Summary component for improvements"
```

---

## Next Steps with This Project

Now that your Sleep Log app is built, here are things you can ask Droid to do:

### Testing
```
"Test the application end-to-end"
"Check if the API handles errors properly"
"Test on mobile screen sizes"
```

### Features
```
"Add a data export to CSV feature"
"Add line charts showing trends"
"Add ability to edit past entries"
"Add email reminders"
```

### Polish
```
"Improve the mobile responsiveness"
"Add loading animations"
"Add better error messages"
```

### Deployment
```
"Help me deploy this to Vercel"
"Create a Docker setup"
"Set up environment variables for production"
```

---

## How to Start the App

### Quick Start (Automated)
```bash
./setup.sh
```

### Manual Start

**Terminal 1 - Backend:**
```bash
cd backend
source venv/bin/activate
python app.py
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

Then open: http://localhost:5173

---

## Getting Help from Droid

Anytime you're stuck or want to add something:

1. **Describe what you want** in plain English
2. **Droid will ask** if anything is unclear
3. **Droid will implement** the solution
4. **You review and test**
5. **Ask for changes** if needed

Droid is here to help you build exactly what you need!

---

## Linear Integration

All project tasks have been documented in `.github/LINEAR_TASKS.md`:
- ✅ 10 completed tasks (24 hours of work)
- ⏳ 5 pending tasks (16 hours estimated)

See `LINEAR_INTEGRATION.md` for details on creating Linear issues from these tasks.

---

**Remember:** Droid is your coding partner. Be specific about what you want, and Droid will handle the technical details!
