const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Middleware to calculate latency
app.use((req, res, next) => {
  const startTime = process.hrtime();
  res.on("finish", () => {
    const duration = process.hrtime(startTime);
    const latencyMs = duration[0] * 1000 + duration[1] / 1e6; // Convert nanoseconds to milliseconds
    console.log(`Latency: ${latencyMs.toFixed(2)} ms`);
  });
  next();
});

// API endpoint
app.get("/", (req, res) => {
  const startTime = process.hrtime();
  setTimeout(() => {
    const duration = process.hrtime(startTime);
    const latencyMs = duration[0] * 1000 + duration[1] / 1e6; // Correct unit conversion
    res.json({ message: "Latency API", latency: `${latencyMs.toFixed(2)} ms` });
  }, Math.floor(Math.random() * 500)); // Simulate some delay
});

// Start the server
app.listen(port, () => {
  console.log(`Latency service running on port ${port}`);
});
