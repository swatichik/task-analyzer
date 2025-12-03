// src/pages/Tasks.tsx
import React, { useState } from "react";
import {
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import TaskFormModal from "../components/TaskFormModal";

interface Task {
  id: number;
  title: string;
  dueDate: string;
  hours: number;
  importance: number;
}

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Finish report", dueDate: "2025-11-30", hours: 3, importance: 8 },
    { id: 2, title: "Team meeting", dueDate: "2025-12-01", hours: 2, importance: 6 },
  ]);

  const [open, setOpen] = useState(false);

  const handleAddTask = (task: Task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Tasks
      </Typography>

      <Button
        variant="contained"
        sx={{
          background: "linear-gradient(45deg, #1976d2, #00bcd4)",
          color: "#fff",
        }}
        onClick={() => setOpen(true)}
      >
        Add Task
      </Button>

      <TaskFormModal open={open} onClose={() => setOpen(false)} onSave={handleAddTask} />

      <TableContainer
        component={Paper}
        sx={{
          marginTop: 3,
          borderRadius: 3,
          boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
        }}
      >
        <Table>
          <TableHead>
            <TableRow
              sx={{
                background: "linear-gradient(90deg, #1976d2 0%, #ff4081 50%, #9c27b0 100%)",
              }}
            >
              <TableCell sx={{ color: "#fff", fontWeight: 600 }}>Title</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: 600 }}>Due Date</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: 600 }}>Hours</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: 600 }}>Importance</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: 600 }} align="center">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell>{task.title}</TableCell>
                <TableCell>{task.dueDate}</TableCell>
                <TableCell>{task.hours}</TableCell>
                <TableCell>{task.importance}</TableCell>
                <TableCell align="center">
                  <IconButton color="error" onClick={() => handleDeleteTask(task.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
