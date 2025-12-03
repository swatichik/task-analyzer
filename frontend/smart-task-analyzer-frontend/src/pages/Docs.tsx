// src/pages/Docs.tsx
import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

export default function Docs() {
  const navigate = useNavigate();

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Documentation
      </Typography>

      {/* Getting Started */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6">Getting Started</Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="body2">
            Smart Task Analyzer helps you manage tasks, view analytics, and customize settings.
            Use the sidebar to navigate between Dashboard, Tasks, Analytics, and Settings.
          </Typography>
        </CardContent>
      </Card>

      {/* Features */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6">Features</Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="body2">• Dashboard overview of tasks and progress</Typography>
          <Typography variant="body2">• Task management with add/delete options</Typography>
          <Typography variant="body2">• Analytics charts for insights</Typography>
          <Typography variant="body2">• Settings for profile, notifications, and help</Typography>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6">Frequently Asked Questions</Typography>
          <Divider sx={{ my: 1 }} />

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>How do I add a new task?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Go to the Tasks page and click the "Add Task" button. Fill in the details and save.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Where can I see analytics?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Navigate to the Analytics page from the sidebar. It shows charts and reports of your tasks.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>How do notifications work?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Notifications appear in the bell icon on the navbar. You can view or clear them anytime.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>

      {/* Support */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6">Support</Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="body2">
            For help, visit the Settings → Help & Support section or contact support@example.com.
          </Typography>
        </CardContent>
      </Card>

      {/* Back to Settings Button */}
      <Button
        variant="contained"
        sx={{
          mt: 2,
          background: "linear-gradient(45deg, #1976d2, #00bcd4)",
          color: "#fff",
        }}
        onClick={() => navigate("/settings")}
      >
        Back to Settings
      </Button>
    </div>
  );
}
