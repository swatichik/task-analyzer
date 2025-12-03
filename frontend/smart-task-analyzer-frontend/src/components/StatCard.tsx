import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export default function StatCard({ title, value }: { title: string; value: string | number }) {
  return (
    <Card sx={{ minWidth: 200, margin: 2 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h4">{value}</Typography>
      </CardContent>
    </Card>
  );
}
