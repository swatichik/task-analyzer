// src/theme.ts
import { createTheme } from "@mui/material/styles";

const themeBase = createTheme({
  palette: {
    mode: "light", // default, toggled in App.tsx
    primary: {
      main: "#1976d2", // Bright blue
    },
    secondary: {
      main: "#ff4081", // Pink accent
    },
    success: {
      main: "#4caf50", // Green
    },
    warning: {
      main: "#ff9800", // Orange
    },
    error: {
      main: "#e53935", // Deep red
    },
    info: {
      main: "#00bcd4", // Cyan
    },
    background: {
      default: "linear-gradient(135deg, #f0f4f8 0%, #e3f2fd 50%, #fce4ec 100%)",
      paper: "rgba(255,255,255,0.9)",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h4: {
      fontWeight: 700,
      color: "dark grey",
    },
    h6: {
      fontWeight: 600,
      color: "dark grey",
    },
    body1: {
      color: "dark grey",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: "none",
          fontWeight: 600,
          backgroundImage: "linear-gradient(45deg, #1976d2, #00bcd4)",
          color: "#fff",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          boxShadow: "0 6px 24px rgba(0,0,0,0.15)",
          backgroundImage: "linear-gradient(135deg, #ffffff, #f9f9f9)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "linear-gradient(90deg, #1976d2 0%, #ff4081 50%, #9c27b0 100%)",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#1976d2",
          "& .MuiTableCell-root": {
            color: "#fff",
            fontWeight: 600,
          },
        },
      },
    },
  },
});

// Dark mode variant
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00e5ff", // Neon cyan
    },
    secondary: {
      main: "#ff4081", // Neon pink
    },
    success: {
      main: "#69f0ae", // Neon green
    },
    warning: {
      main: "#ff9100", // Neon orange
    },
    error: {
      main: "#ff1744", // Neon red
    },
    background: {
      default: "linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%, #2c003e 100%)",
      paper: "rgba(30,30,30,0.9)",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h4: {
      fontWeight: 700,
      color: "#00e5ff",
    },
    h6: {
      fontWeight: 600,
      color: "#ff4081",
    },
    body1: {
      color: "#e0e0e0",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: "none",
          fontWeight: 600,
          backgroundImage: "linear-gradient(45deg, #00e5ff, #ff4081)",
          color: "#fff",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          boxShadow: "0 6px 24px rgba(0,0,0,0.4)",
          backgroundImage: "linear-gradient(135deg, #1a1a1a, #2c003e)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "linear-gradient(90deg, #00e5ff 0%, #ff4081 50%, #9c27b0 100%)",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#00e5ff",
          "& .MuiTableCell-root": {
            color: "#000",
            fontWeight: 600,
          },
        },
      },
    },
  },
});

export default themeBase;
