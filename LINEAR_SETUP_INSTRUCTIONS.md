# Linear Setup Instructions

## Quick Start: Create Linear Issues

I've prepared everything for you to create Linear issues. Follow these simple steps:

### Step 1: Authenticate with Linear

Run this command to login to Linear:

```bash
npx @linear/cli auth login
```

This will:
1. Open your browser
2. Ask you to authorize the CLI
3. Save your credentials locally

### Step 2: Run the Script

Once authenticated, run:

```bash
cd /Users/martinkawalski/sleeplog_experiments
./create_linear_issues.sh
```

This will automatically create all 5 pending tasks in your Linear workspace:

1. ✅ **Task 11:** End-to-End Testing (High Priority, 3h)
2. ✅ **Task 12:** Add Error Handling (Medium Priority, 2h)
3. ✅ **Task 13:** Add Data Export Feature (Low Priority, 3h)
4. ✅ **Task 14:** Add Data Visualization Charts (Low Priority, 4h)
5. ✅ **Task 15:** Deployment Setup (Low Priority, 4h)

### Step 3: View Your Issues

Visit your Linear workspace or run:

```bash
npx @linear/cli issue list
```

---

## What Each Issue Contains

Each Linear issue includes:
- ✅ **Clear Title**: Descriptive task name
- ✅ **Detailed Description**: What needs to be done
- ✅ **Acceptance Criteria**: How to know it's complete
- ✅ **Priority Level**: 1 (High), 2 (Medium), 3 (Low)
- ✅ **Time Estimate**: Hours to complete
- ✅ **Labels**: Categorization (testing, frontend, backend, etc.)

---

## Manual Alternative

If you prefer to create issues manually via Linear's web interface:

### Task 11: End-to-End Testing
**Priority:** High | **Estimate:** 3 hours | **Labels:** testing, qa

**Description:**
Test complete user workflow:
- Verify session persistence across page refreshes
- Test all API endpoints (health, session, log, logs, summary)
- Validate data storage in SQLite database
- Test responsive design on mobile devices
- Cross-browser testing (Chrome, Firefox, Safari)
- Test complete 14-day tracking flow

---

### Task 12: Add Error Handling
**Priority:** Medium | **Estimate:** 2 hours | **Labels:** backend, frontend, bug-prevention

**Description:**
Implement comprehensive error handling:
- Proper error messages for API failures
- Validation for duplicate daily entries (one per day)
- Graceful handling of network errors
- Loading states for all async operations
- Retry logic for failed requests

---

### Task 13: Add Data Export Feature
**Priority:** Low | **Estimate:** 3 hours | **Labels:** feature, enhancement

**Description:**
Enable users to export their sleep log data:
- Export all logs to CSV format
- Export summary report to PDF
- Download complete session data as JSON

---

### Task 14: Add Data Visualization Charts
**Priority:** Low | **Estimate:** 4 hours | **Labels:** frontend, feature, analytics

**Description:**
Add interactive charts to visualize sleep trends:
- Line charts showing score trends over time
- Category comparison radar/bar charts
- Progress charts for 2-week tracking
- Use Chart.js or Recharts library

---

### Task 15: Deployment Setup
**Priority:** Low | **Estimate:** 4 hours | **Labels:** deployment, devops

**Description:**
Deploy application to production:
- Containerize with Docker
- Set up production environment variables
- Deploy backend to cloud service (Heroku/Railway/Render)
- Deploy frontend to Vercel or Netlify
- Configure CORS for production URLs

---

## Troubleshooting

### Issue: "Command not found: linear"
**Solution:** Use `npx @linear/cli` instead of `linear`

### Issue: "Not authenticated"
**Solution:** Run `npx @linear/cli auth login` first

### Issue: "API token invalid"
**Solution:** Re-authenticate with `npx @linear/cli auth logout` then `npx @linear/cli auth login`

---

## Next Steps After Creating Issues

1. **Organize in Linear:**
   - Create a project board
   - Add issues to the board
   - Set up workflows (Todo, In Progress, Done)

2. **Start Working:**
   - Begin with Task 11 (End-to-End Testing)
   - Use Droid to help implement each task
   - Reference Linear issue IDs in git commits

3. **Link Commits:**
   ```bash
   git commit -m "Add error handling for API failures

   Implements validation for duplicate entries and network error handling.
   
   Fixes LINEAR-123"
   ```

4. **Track Progress:**
   - Update issue status as you work
   - Add comments with progress notes
   - Close issues when complete

---

## Using Droid with Linear

Once issues are created, you can ask Droid:

```
"Work on Linear issue PROJECT-123"
"Show me details of the testing task"
"Implement the error handling feature"
"Mark the testing task as complete"
```

Droid can help you:
- Implement features for each Linear issue
- Write tests and documentation
- Debug issues
- Update Linear with progress

---

## Summary

**Total Tasks:** 5 pending
**Total Estimate:** 16 hours
**Priority Breakdown:**
- 1 High priority (3h)
- 1 Medium priority (2h)
- 3 Low priority (11h)

All tasks are well-defined and ready to work on!
