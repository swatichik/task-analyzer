// src/pages/Settings.tsx
import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Settings() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>

      {/* Profile Info */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6">Profile Information</Typography>
          <Divider sx={{ my: 1 }} />
          <List>
            <ListItem>
              <ListItemText primary="Username" secondary="Swati" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary="swati@example.com" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Role" secondary="Developer" />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      {/* App Info */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6">Application Information</Typography>
          <Divider sx={{ my: 1 }} />
          <List>
            <ListItem>
              <ListItemText primary="App Name" secondary="Smart Task Analyzer" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Version" secondary="v1.0.0" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Frontend" secondary="React + Vite + MUI" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Backend" secondary="Django REST API" />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      {/* Help & Support Section */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ display: "flex", alignItems: "center" }}>
            <HelpOutlineIcon color="primary" sx={{ fontSize: 30, mr: 1 }} />
            Help & Support
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="body2" sx={{ mb: 2 }}>
            Need assistance? You can reach out to our support team or explore documentation for guidance.
          </Typography>
          <Button
            variant="contained"
            sx={{
              mr: 2,
              background: "linear-gradient(45deg, #1976d2, #00bcd4)",
              color: "#fff",
            }}
            href="mailto:support@example.com"
          >
            Contact Us
          </Button>
          <Button
            variant="outlined"
            sx={{ color: "#1976d2", borderColor: "#1976d2" }}
            href="/docs"   // internal route for documentation page
          >
            Documentation
          </Button>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card>
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
    </div>
  );
}
