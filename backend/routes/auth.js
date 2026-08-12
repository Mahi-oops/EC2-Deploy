const express = require("express");
const bcrypt = require("bcryptjs");
const pool = require("../db");

const router = express.Router();

// ==========================
// SIGNUP
// ==========================
router.post("/signup", async (req, res) => {
  try {
    const { username, email, dob, password } = req.body;

    // Validate required fields
    if (!username || !email || !dob || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Check if username or email already exists
    const existingUser = await pool.query(
      "SELECT id FROM users WHERE username = $1 OR email = $2",
      [username, email]
    );

    if (existingUser.rows.length > 0) {
      return res.status(409).json({
        message: "Username or email already exists",
      });
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Create user
    const result = await pool.query(
      `INSERT INTO users
       (username, email, dob, password_hash)
       VALUES ($1, $2, $3, $4)
       RETURNING id, username, email, dob, created_at`,
      [username, email, dob, passwordHash]
    );

    res.status(201).json({
      message: "Account created successfully",
      user: result.rows[0],
    });

  } catch (error) {
    console.error("Signup error:", error);

    res.status(500).json({
      message: "Internal server error",
    });
  }
});

// ==========================
// LOGIN
// ==========================
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate required fields
    if (!username || !password) {
      return res.status(400).json({
        message: "Username and password are required",
      });
    }

    // Find user by username OR email
    const result = await pool.query(
      "SELECT * FROM users WHERE username = $1 OR email = $1",
      [username]
    );

    // User doesn't exist
    if (result.rows.length === 0) {
      return res.status(401).json({
        message: "Invalid username or password",
      });
    }

    const user = result.rows[0];

    // Compare entered password with stored password hash
    const passwordMatch = await bcrypt.compare(
      password,
      user.password_hash
    );

    // Password incorrect
    if (!passwordMatch) {
      return res.status(401).json({
        message: "Invalid username or password",
      });
    }

    // Login successful
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });

  } catch (error) {
    console.error("Login error:", error);

    res.status(500).json({
      message: "Internal server error",
    });
  }
});

module.exports = router;