# Linear Authentication & Issue Creation Guide

## Important Note About Linear CLI

The `@linear/cli` package I installed is a simplified CLI that requires a Linear API key. Here are your options:

---

## Option 1: Use Linear Web Interface (Easiest)

### Step 1: Go to Linear
Visit your Linear workspace: https://linear.app/

### Step 2: Create Issues Manually
Use the templates from `LINEAR_SETUP_INSTRUCTIONS.md` to create each of the 5 tasks.

**Quick Template for Copy-Paste:**

#### Task 11: End-to-End Testing
```
Title: End-to-End Testing
Priority: High
Estimate: 3 points (or 3 hours)
Labels: testing, qa

Description:
Test complete user workflow:
- Verify session persistence across page refreshes
- Test all API endpoints (health, session, log, logs, summary)
- Validate data storage in SQLite database
- Test responsive design on mobile devices
- Cross-browser testing (Chrome, Firefox, Safari)
- Test complete 14-day tracking flow

Acceptance Criteria:
- All user workflows function correctly
- Session data persists properly
- API endpoints return expected responses
- UI works on mobile/tablet/desktop
- No console errors in any browser
```

Then repeat for Tasks 12-15 (see LINEAR_SETUP_INSTRUCTIONS.md for details).

---

## Option 2: Use Linear API with Personal Token

### Step 1: Get Your Linear API Key

1. Go to https://linear.app/settings/api
2. Click "Create new personal API key"
3. Give it a name (e.g., "Sleep Log Project")
4. Copy the API key

### Step 2: Save API Key

```bash
export LINEAR_API_KEY="lin_api_YOUR_KEY_HERE"
```

Or save it permanently:
```bash
echo 'export LINEAR_API_KEY="lin_api_YOUR_KEY_HERE"' >> ~/.zshrc
source ~/.zshrc
```

### Step 3: Use the API Creation Script

I'll create a Python script that uses the Linear API directly to create issues.

---

## Option 3: Use Droid to Create Issues via API

Once you have your Linear API key, you can tell Droid:

```
"My Linear API key is lin_api_xxxxx. Create the 5 pending Linear issues using the API."
```

Droid can then make API calls directly to Linear to create the issues programmatically.

---

## Recommended Approach

**For now, the fastest way is Option 1** (manual creation via web interface):

1. Open Linear in your browser
2. Create a new project called "Sleep Log Experiment"
3. Copy-paste each of the 5 task templates from `LINEAR_SETUP_INSTRUCTIONS.md`
4. Takes about 5-10 minutes

**For automation, use Option 3:**

1. Get your Linear API key
2. Share it with Droid (securely in this session)
3. Droid will create all issues automatically

---

## What's Next?

Choose your preferred method and let me know:

- **"I'll create the issues manually in Linear"** - I'll provide you optimized templates
- **"Here's my Linear API key: [key]"** - I'll create issues programmatically
- **"Can you help me get the API key?"** - I'll guide you through the process

---

## Security Note

⚠️ Never commit API keys to git or share them publicly. API keys should be:
- Stored in environment variables
- Kept in `.env` files (added to .gitignore)
- Treated as passwords
