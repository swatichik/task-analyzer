// src/pages/Dashboard.tsx
import React from "react";
import { Grid, Paper, Typography, Box, Button } from "@mui/material";
import { toast } from "react-toastify";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", tasks: 5 },
  { day: "Tue", tasks: 8 },
  { day: "Wed", tasks: 6 },
  { day: "Thu", tasks: 10 },
  { day: "Fri", tasks: 7 },
];

export default function Dashboard() {
  const handleAddTask = () => {
    toast.success("Task added successfully!");
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard Overview
      </Typography>

      {/* Summary cards */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              background: "linear-gradient(135deg, #1976d2, #00bcd4)",
              color: "#fff",
            }}
          >
            <Typography variant="h6">Tasks Completed</Typography>
            <Typography variant="h4">42</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              background: "linear-gradient(135deg, #ff4081, #9c27b0)",
              color: "#fff",
            }}
          >
            <Typography variant="h6">Pending Tasks</Typography>
            <Typography variant="h4">8</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              background: "linear-gradient(135deg, #4caf50, #ff9800)",
              color: "#fff",
            }}
          >
            <Typography variant="h6">Analytics Score</Typography>
            <Typography variant="h4">87%</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Chart */}
      <Box mt={4}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="day" stroke="#333" />
            <YAxis stroke="#333" />
            <Tooltip />
            <Line type="monotone" dataKey="tasks" stroke="#1976d2" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}
