// src/components/TaskFormModal.tsx
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

interface Task {
  id?: number;
  title: string;
  dueDate: string;
  hours: number;
  importance: number;
}

export default function TaskFormModal({
  open,
  onClose,
  onSave,
}: {
  open: boolean;
  onClose: () => void;
  onSave: (task: Task) => void;
}) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [hours, setHours] = useState<number>(0);
  const [importance, setImportance] = useState<number>(0);

  const handleSave = () => {
    if (!title || !dueDate) return;
    onSave({ title, dueDate, hours, importance });
    setTitle("");
    setDueDate("");
    setHours(0);
    setImportance(0);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Task</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Due Date"
          type="date"
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Hours"
          type="number"
          fullWidth
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
        />
        <TextField
          margin="dense"
          label="Importance (1–10)"
          type="number"
          fullWidth
          value={importance}
          onChange={(e) => setImportance(Number(e.target.value))}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
