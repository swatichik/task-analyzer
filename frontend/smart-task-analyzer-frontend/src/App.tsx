// src/App.tsx
import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import themeBase from "./theme";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Docs from "./pages/Docs";   // ✅ Import Docs page
import Toast from "./components/Toast";

export default function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const theme = useMemo(() => {
    const t = { ...themeBase };
    t.palette = { ...themeBase.palette, mode };
    return t;
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar
          onToggleMode={() =>
            setMode((m) => (m === "light" ? "dark" : "light"))
          }
          onMenuClick={() => setSidebarOpen(true)}
        />

        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main style={{ padding: "24px", marginTop: "64px" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route
              path="/settings"
              element={
                <Settings
                  mode={mode}
                  onToggleMode={() =>
                    setMode((m) => (m === "light" ? "dark" : "light"))
                  }
                />
              }
            />
            <Route path="/docs" element={<Docs />} />   {/* ✅ Docs route */}
          </Routes>
        </main>

        <Toast />
      </Router>
    </ThemeProvider>
  );
}
