const pool = require("./db");
const authRoutes = require("./routes/auth");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Authentication routes
app.use("/api/auth", authRoutes);

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