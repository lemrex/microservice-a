const express = require("express");
const winston = require("winston");
const cors = require("cors");

const app = express();
// Enable CORS for all origins
app.use(cors());
const port = 3000;

const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
});

app.get("/", (req, res) => {
  const date = new Date().toISOString().split("T")[0];
  logger.info(`Date requested: ${date}`);
  res.json({ date });
});

app.listen(port, () => {
  logger.info(`Date service running on port ${port}`);
});
