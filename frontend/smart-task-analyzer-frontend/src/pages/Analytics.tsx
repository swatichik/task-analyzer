// src/pages/Analytics.tsx
import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
} from "recharts";

const taskCompletionData = [
  { day: "Mon", completed: 4, pending: 2 },
  { day: "Tue", completed: 6, pending: 1 },
  { day: "Wed", completed: 3, pending: 3 },
  { day: "Thu", completed: 7, pending: 2 },
  { day: "Fri", completed: 5, pending: 4 },
];

const productivityTrend = [
  { week: "Week 1", tasks: 12 },
  { week: "Week 2", tasks: 18 },
  { week: "Week 3", tasks: 15 },
  { week: "Week 4", tasks: 20 },
];

const strategyDistribution = [
  { name: "Smart Balance", value: 40 },
  { name: "Fastest Wins", value: 25 },
  { name: "High Impact", value: 20 },
  { name: "Deadline Driven", value: 15 },
];

// Mixed neon colors consistent with your theme
const COLORS = ["#1976d2", "#ff4081", "#4caf50", "#ff9800", "#00bcd4"];

export default function Analytics() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Analytics
      </Typography>

      <Grid container spacing={3}>
        {/* Bar Chart: Completed vs Pending */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
              background: "linear-gradient(135deg, #1976d2, #00bcd4)",
              color: "#fff",
            }}
          >
            <CardContent>
              <Typography variant="h6">Task Completion (Daily)</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={taskCompletionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                  <XAxis dataKey="day" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="completed" fill="#1976d2" />
                  <Bar dataKey="pending" fill="#ff9800" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Line Chart: Productivity Trend */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
              background: "linear-gradient(135deg, #ff4081, #9c27b0)",
              color: "#fff",
            }}
          >
            <CardContent>
              <Typography variant="h6">Productivity Trend (Weekly)</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={productivityTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                  <XAxis dataKey="week" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="tasks"
                    stroke="#ff4081"
                    strokeWidth={3}
                    dot={{ r: 5, fill: "#00bcd4" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Pie Chart: Strategy Distribution */}
        <Grid item xs={12}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
              background: "linear-gradient(135deg, #4caf50, #ff9800)",
              color: "#fff",
            }}
          >
            <CardContent>
              <Typography variant="h6">Strategy Usage Distribution</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={strategyDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                    outerRadius={120}
                    dataKey="value"
                  >
                    {strategyDistribution.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
