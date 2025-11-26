# Smart Task Analyzer

A full-stack Django project with REST API and frontend interface that scores and prioritizes tasks using urgency, importance, effort, and dependencies.  

## 🚀 Features
- **Backend (Django + REST Framework):**
  - Task model with fields for title, due date, estimated hours, importance, and dependencies.
  - Scoring algorithm (`scoring.py`) that calculates priority based on:
    - Urgency (due date proximity)
    - Importance (impact level)
    - Effort (quick wins vs. long tasks)
    - Dependencies (tasks that unblock others)
  - Multiple strategies:
    - `smart_balance`
    - `fastest_wins`
    - `high_impact`
    - `deadline_driven`
  - API endpoints:
    - `POST /api/tasks/analyze/` → Analyze and sort tasks by score.
    - `GET /api/tasks/suggest/` → Suggest top 3 tasks for today.

- **Frontend (HTML + CSS + JS):**
  - Form to add tasks manually.
  - Textarea to paste JSON tasks.
  - Dropdown to select strategy.
  - Button to analyze tasks → results displayed with scores and explanations.

---

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/task-analyzer.git
   cd task-analyzer/task_analyzer
