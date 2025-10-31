#!/usr/bin/env python3
"""
Automated API Testing Script for Sleep Log Experiment
Tests all backend endpoints and validates responses
"""

import requests
import json
import sys
from datetime import datetime

API_URL = "http://localhost:5001/api"

class Colors:
    GREEN = '\033[92m'
    RED = '\033[91m'
    YELLOW = '\033[93m'
    BLUE = '\033[94m'
    END = '\033[0m'

def print_test(test_name, passed, message=""):
    status = f"{Colors.GREEN}✓ PASS{Colors.END}" if passed else f"{Colors.RED}✗ FAIL{Colors.END}"
    print(f"{status} - {test_name}")
    if message:
        print(f"    {message}")

def test_health_endpoint():
    """Test /api/health endpoint"""
    try:
        response = requests.get(f"{API_URL}/health", timeout=5)
        data = response.json()
        
        passed = (
            response.status_code == 200 and
            data.get('status') == 'healthy' and
            data.get('service') == 'sleeplog-api'
        )
        
        print_test(
            "Health Check Endpoint",
            passed,
            f"Status: {response.status_code}, Response: {json.dumps(data)}"
        )
        return passed
    except Exception as e:
        print_test("Health Check Endpoint", False, str(e))
        return False

def test_session_creation():
    """Test /api/session endpoint"""
    try:
        response = requests.get(f"{API_URL}/session", timeout=5)
        data = response.json()
        
        passed = (
            response.status_code == 200 and
            'sessionId' in data and
            len(data['sessionId']) > 0
        )
        
        print_test(
            "Session Creation",
            passed,
            f"Session ID: {data.get('sessionId', 'None')[:20]}..."
        )
        return passed, data.get('sessionId') if passed else None
    except Exception as e:
        print_test("Session Creation", False, str(e))
        return False, None

def test_create_log(session_id):
    """Test POST /api/log endpoint"""
    try:
        log_data = {
            "sessionId": session_id,
            "date": datetime.now().strftime("%Y-%m-%d"),
            "sleepQuality": 8,
            "bedroomEnvironment": 7,
            "mentalHealth": 9,
            "cognitiveHealth": 8,
            "memory": 7,
            "diet": 6,
            "nutrition": 7,
            "notes": "Test log entry"
        }
        
        response = requests.post(
            f"{API_URL}/log",
            json=log_data,
            headers={'Content-Type': 'application/json'},
            timeout=5
        )
        data = response.json()
        
        passed = (
            response.status_code == 201 and
            data.get('success') == True and
            'logId' in data
        )
        
        print_test(
            "Create Sleep Log",
            passed,
            f"Log ID: {data.get('logId', 'None')}"
        )
        return passed
    except Exception as e:
        print_test("Create Sleep Log", False, str(e))
        return False

def test_get_logs(session_id):
    """Test GET /api/logs/:sessionId endpoint"""
    try:
        response = requests.get(f"{API_URL}/logs/{session_id}", timeout=5)
        data = response.json()
        
        passed = (
            response.status_code == 200 and
            'logs' in data and
            'count' in data and
            data['count'] > 0
        )
        
        print_test(
            "Get All Logs",
            passed,
            f"Found {data.get('count', 0)} log(s)"
        )
        return passed
    except Exception as e:
        print_test("Get All Logs", False, str(e))
        return False

def test_get_summary(session_id):
    """Test GET /api/summary/:sessionId endpoint"""
    try:
        response = requests.get(f"{API_URL}/summary/{session_id}", timeout=5)
        data = response.json()
        
        passed = (
            response.status_code == 200 and
            'totalEntries' in data and
            'averages' in data and
            'period' in data
        )
        
        avg = data.get('averages', {})
        print_test(
            "Get Summary Statistics",
            passed,
            f"Entries: {data.get('totalEntries', 0)}, Avg Sleep Quality: {avg.get('sleepQuality', 0)}"
        )
        return passed
    except Exception as e:
        print_test("Get Summary Statistics", False, str(e))
        return False

def main():
    print(f"\n{Colors.BLUE}{'='*60}{Colors.END}")
    print(f"{Colors.BLUE}  Sleep Log API - Automated Test Suite{Colors.END}")
    print(f"{Colors.BLUE}{'='*60}{Colors.END}\n")
    
    print(f"{Colors.YELLOW}Testing API at: {API_URL}{Colors.END}\n")
    
    results = []
    
    # Test 1: Health Check
    results.append(test_health_endpoint())
    
    # Test 2: Session Creation
    session_passed, session_id = test_session_creation()
    results.append(session_passed)
    
    if not session_id:
        print(f"\n{Colors.RED}Cannot continue tests without session ID{Colors.END}")
        sys.exit(1)
    
    # Test 3: Create Log
    results.append(test_create_log(session_id))
    
    # Test 4: Get Logs
    results.append(test_get_logs(session_id))
    
    # Test 5: Get Summary
    results.append(test_get_summary(session_id))
    
    # Summary
    passed_count = sum(results)
    total_count = len(results)
    
    print(f"\n{Colors.BLUE}{'='*60}{Colors.END}")
    print(f"{Colors.BLUE}  Test Results{Colors.END}")
    print(f"{Colors.BLUE}{'='*60}{Colors.END}")
    
    if passed_count == total_count:
        print(f"{Colors.GREEN}✓ All {total_count} tests passed!{Colors.END}\n")
        sys.exit(0)
    else:
        print(f"{Colors.RED}✗ {total_count - passed_count} of {total_count} tests failed{Colors.END}\n")
        sys.exit(1)

if __name__ == "__main__":
    main()
