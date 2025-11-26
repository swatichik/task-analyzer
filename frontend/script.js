let tasks = [];

document.getElementById("taskForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const task = {
    title: document.getElementById("title").value,
    due_date: document.getElementById("due_date").value,
    estimated_hours: parseInt(document.getElementById("hours").value),
    importance: parseInt(document.getElementById("importance").value),
    dependencies: []
  };
  tasks.push(task);
  alert("Task added!");
});

document.getElementById("analyzeBtn").addEventListener("click", async function() {
  const strategy = document.getElementById("strategy").value;

  const jsonInput = document.getElementById("jsonInput").value;
  if (jsonInput.trim()) {
    tasks = JSON.parse(jsonInput);
  }

  const response = await fetch("/api/tasks/analyze/", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({strategy: strategy, tasks: tasks})
  });

  const data = await response.json();
  displayResults(data);
});

function displayResults(data) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";
  data.forEach(task => {
    const div = document.createElement("div");
    div.className = "task";
    div.innerHTML = `
      <h3>${task.title}</h3>
      <p><strong>Score:</strong> ${task.score}</p>
      <p>${task.explanation}</p>
      <p><strong>Due:</strong> ${task.due_date || "N/A"} |
         <strong>Hours:</strong> ${task.estimated_hours} |
         <strong>Importance:</strong> ${task.importance}</p>
    `;
    resultsDiv.appendChild(div);
  });
}
