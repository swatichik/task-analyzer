// src/components/Navbar.tsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Tooltip,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Navbar({
  onToggleMode,
  onMenuClick,
}: {
  onToggleMode: () => void;
  onMenuClick: () => void;
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [notifications, setNotifications] = useState<string[]>([
    "Task 'Finish report' is due tomorrow",
    "New analytics report generated",
    "Team meeting scheduled for Monday",
  ]);

  const handleBellClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNotificationClick = (index: number) => {
    alert(`Opening notification: ${notifications[index]}`);
    // remove clicked notification
    setNotifications(notifications.filter((_, i) => i !== index));
    setAnchorEl(null);
  };

  const handleClearNotifications = () => {
    setNotifications([]);
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        {/* Hamburger menu */}
        <IconButton
          color="inherit"
          edge="start"
          onClick={onMenuClick}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        {/* Title */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Smart Task Analyzer
        </Typography>

        {/* Notifications */}
        <IconButton color="inherit" sx={{ mr: 2 }} onClick={handleBellClick}>
          <Badge badgeContent={notifications.length} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        {/* Notifications dropdown */}
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          {notifications.length === 0 ? (
            <MenuItem disabled>No new notifications</MenuItem>
          ) : (
            notifications.map((note, index) => (
              <MenuItem key={index} onClick={() => handleNotificationClick(index)}>
                {note}
              </MenuItem>
            ))
          )}
          {notifications.length > 0 && (
            <MenuItem
              onClick={handleClearNotifications}
              sx={{ fontWeight: "bold", color: "red" }}
            >
              Clear All
            </MenuItem>
          )}
        </Menu>

        {/* Theme toggle (paint palette) */}
        <Tooltip title="Toggle Theme">
          <IconButton color="inherit" onClick={onToggleMode}>
            <ColorLensIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}
