console.log("🚀 Server.js is running!");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Debug: check if env loaded
console.log("MONGO_URI is:", process.env.MONGO_URI);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/tasks", require("./routes/tasks"));

app.get("/", (req, res) => res.send("Backend is running!"));

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
