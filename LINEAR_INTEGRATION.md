# Linear Integration Guide

This document explains how to create Linear issues for the Sleep Log Experiment project.

## Project Structure

The project has been organized into clear phases and tasks as documented in `.github/LINEAR_TASKS.md`.

## Creating Linear Issues

Since you have Linear integrated with Droid, you can create issues in several ways:

### Option 1: Using Linear CLI (if installed)

```bash
# Install Linear CLI if not already installed
npm install -g @linear/cli

# Login to Linear
linear login

# Create issues from the task list
linear issue create \
  --title "End-to-End Testing" \
  --description "Test complete user workflow including session persistence, API endpoints, data storage, and responsive design" \
  --priority high \
  --project "Sleep Log Experiment"
```

### Option 2: Using Linear's GitHub Integration

If you push this repository to GitHub and have Linear's GitHub integration enabled:

1. Push to GitHub:
```bash
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Linear will automatically sync and you can reference commits with Linear issue IDs (e.g., `PROJECT-123`)

### Option 3: Manual Creation via Linear Web App

Visit your Linear workspace and create issues based on `.github/LINEAR_TASKS.md`:

**Completed Tasks (for documentation):**
1. ✅ Initialize Project Structure
2. ✅ Set Up Python Flask Backend
3. ✅ Build REST API Endpoints
4. ✅ Set Up React Frontend with Vite
5. ✅ Create Daily Questionnaire Component
6. ✅ Implement Session Management
7. ✅ Build Log History View
8. ✅ Create Summary Dashboard
9. ✅ Style and Polish UI
10. ✅ Write Documentation

**Pending Tasks (create these):**
11. ⏳ End-to-End Testing
12. ⏳ Add Error Handling
13. ⏳ Add Data Export Feature
14. ⏳ Add Data Visualization Charts
15. ⏳ Deployment Setup

## Task Details

All task details including:
- Status
- Description
- Labels
- Priority
- Time Estimates

Are documented in `.github/LINEAR_TASKS.md`

## Linking Commits to Linear

Once you have Linear issues created, reference them in commits:

```bash
git commit -m "Fix session persistence bug

Resolves PROJECT-123"
```

Linear will automatically link the commit to the issue.

## Project Stats

- **Total Tasks**: 15
- **Completed**: 10
- **Pending**: 5
- **Estimated Hours**: 40 total (24 completed, 16 remaining)

## Next Steps

1. Create Linear issues for pending tasks (11-15)
2. Set up Linear project board
3. Begin testing phase
4. Track progress in Linear
