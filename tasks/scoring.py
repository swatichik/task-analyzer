from datetime import date

def calculate_priority(task, strategy="smart_balance"):
    """
    Calculate a priority score for a task based on multiple factors.
    Strategies: fastest_wins, high_impact, deadline_driven, smart_balance
    """

    today = date.today()
    score = 0
    explanation = []

    # Urgency
    if task.get("due_date"):
        due_date = date.fromisoformat(task["due_date"])
        days_left = (due_date - today).days
        if days_left < 0:
            score += 5  # overdue boost
            explanation.append("Task is overdue")
        else:
            urgency = max(0, 10 - days_left)
            score += urgency
            explanation.append(f"Due in {days_left} days")

    # Importance
    importance = task.get("importance", 5)
    score += importance
    explanation.append(f"Importance {importance}/10")

    # Effort (lower effort = higher score)
    effort = task.get("estimated_hours", 1)
    quick_win = max(0, 10 - effort)
    score += quick_win
    explanation.append(f"Effort {effort}h (quick win bonus {quick_win})")

    # Dependencies
    deps = task.get("dependencies", [])
    if deps:
        score += len(deps)
        explanation.append(f"Blocks {len(deps)} other tasks")

    # Strategy adjustments
    if strategy == "fastest_wins":
        score += quick_win * 2
    elif strategy == "high_impact":
        score += importance * 2
    elif strategy == "deadline_driven":
        score += urgency * 2 if task.get("due_date") else 0
    # smart_balance is default

    return {"score": score, "explanation": "; ".join(explanation)}
