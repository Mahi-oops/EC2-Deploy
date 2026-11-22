const pool = require("./db");
const authRoutes = require("./routes/auth");
const express = require("express");
const cors = require("cors");
const { register } = require("./metrics");
require("dotenv").config();kube
// Basic health endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    service: "devops-traveller-backend"
  });
});

// Database test
app.get("/api/db-test", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");

    res.json({
      status: "connected",
      database: "devops_traveller",
      time: result.rows[0].now
    });

  } catch (error) {
    console.error("Database connection error:", error);

    res.status(500).json({
      status: "error",
      message: "Database connection failed"
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});

app.get("/metrics", async (req, res) => {
    res.set("Content-Type", register.contentType);
    res.end(await register.metrics());
});