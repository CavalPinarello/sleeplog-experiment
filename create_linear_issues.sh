#!/bin/bash

echo "🎯 Creating Linear Issues for Sleep Log Experiment"
echo "=================================================="
echo ""

# Check if Linear CLI is authenticated
if ! npx @linear/cli auth status &>/dev/null; then
    echo "⚠️  You need to authenticate with Linear first."
    echo ""
    echo "Run: npx @linear/cli auth login"
    echo ""
    echo "Then run this script again."
    exit 1
fi

echo "✅ Linear CLI authenticated"
echo ""

# Task 11: End-to-End Testing
echo "Creating Task 11: End-to-End Testing..."
npx @linear/cli issue create \
  --title "End-to-End Testing" \
  --description "Test complete user workflow:
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
- No console errors in any browser" \
  --priority 1 \
  --estimate 3 \
  --label testing \
  --label qa

echo ""

# Task 12: Add Error Handling
echo "Creating Task 12: Add Error Handling..."
npx @linear/cli issue create \
  --title "Add Error Handling" \
  --description "Implement comprehensive error handling:
- Proper error messages for API failures
- Validation for duplicate daily entries (one per day)
- Graceful handling of network errors
- Loading states for all async operations
- Retry logic for failed requests

Acceptance Criteria:
- User-friendly error messages displayed
- No duplicate entries for same day allowed
- Offline/network errors handled gracefully
- Loading spinners shown during requests
- Failed requests can be retried" \
  --priority 2 \
  --estimate 2 \
  --label backend \
  --label frontend \
  --label bug-prevention

echo ""

# Task 13: Add Data Export Feature
echo "Creating Task 13: Add Data Export Feature..."
npx @linear/cli issue create \
  --title "Add Data Export Feature" \
  --description "Enable users to export their sleep log data:
- Export all logs to CSV format
- Export summary report to PDF
- Download complete session data as JSON

Implementation:
- Add export buttons to UI
- Generate CSV with all log entries and scores
- Create formatted PDF summary report
- Include charts/visualizations in PDF

Acceptance Criteria:
- CSV export includes all fields with proper headers
- PDF includes summary statistics and insights
- JSON export contains complete session data
- Downloads work in all browsers" \
  --priority 3 \
  --estimate 3 \
  --label feature \
  --label enhancement

echo ""

# Task 14: Add Data Visualization Charts
echo "Creating Task 14: Add Data Visualization Charts..."
npx @linear/cli issue create \
  --title "Add Data Visualization Charts" \
  --description "Add interactive charts to visualize sleep trends:
- Line charts showing score trends over time
- Category comparison radar/bar charts
- Progress charts for 2-week tracking

Implementation:
- Install Chart.js or Recharts library
- Create Charts component
- Add chart views to Summary page
- Make charts interactive and responsive

Acceptance Criteria:
- Line chart shows all 7 categories over time
- Comparison chart shows average scores
- Charts are interactive (hover for details)
- Responsive design on mobile devices
- Smooth animations and transitions" \
  --priority 3 \
  --estimate 4 \
  --label frontend \
  --label feature \
  --label analytics

echo ""

# Task 15: Deployment Setup
echo "Creating Task 15: Deployment Setup..."
npx @linear/cli issue create \
  --title "Deployment Setup" \
  --description "Deploy application to production:
- Containerize with Docker (Dockerfile for backend/frontend)
- Set up production environment variables
- Deploy backend to cloud service (Heroku/Railway/Render)
- Deploy frontend to Vercel or Netlify
- Configure CORS for production URLs

Deliverables:
- Docker configuration files
- Production environment setup
- Deployed backend with database
- Deployed frontend application
- Documentation for deployment process

Acceptance Criteria:
- Application accessible via public URLs
- Database persists data in production
- CORS configured correctly
- Environment variables secured
- Deployment documented in README" \
  --priority 3 \
  --estimate 4 \
  --label deployment \
  --label devops

echo ""
echo "✅ All 5 Linear issues created successfully!"
echo ""
echo "Next steps:"
echo "1. Visit your Linear workspace to view the issues"
echo "2. Organize issues into your project board"
echo "3. Start working on high-priority tasks first"
echo ""
echo "Run 'npx @linear/cli issue list' to see all issues"
