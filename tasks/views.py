from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .scoring import calculate_priority

# POST /api/tasks/analyze/
@api_view(['POST'])
def analyze_tasks(request):
    tasks = request.data.get("tasks", [])
    strategy = request.data.get("strategy", "smart_balance")

    analyzed = []
    for task in tasks:
        result = calculate_priority(task, strategy)
        task["score"] = result["score"]
        task["explanation"] = result["explanation"]
        analyzed.append(task)

    # sort by score (highest first)
    analyzed = sorted(analyzed, key=lambda x: x["score"], reverse=True)
    return Response(analyzed)


# GET /api/tasks/suggest/
@api_view(['GET'])
def suggest_tasks(request):
    tasks = request.data.get("tasks", [])
    strategy = request.data.get("strategy", "smart_balance")

    analyzed = []
    for task in tasks:
        result = calculate_priority(task, strategy)
        task["score"] = result["score"]
        task["explanation"] = result["explanation"]
        analyzed.append(task)

    # sort and return top 3
    analyzed = sorted(analyzed, key=lambda x: x["score"], reverse=True)[:3]
    return Response(analyzed)
