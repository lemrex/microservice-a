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
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  logger.info(`IP requested: ${ip}`);
  res.json({ ip });
});

app.listen(port, () => {
  logger.info(`IP service running on port ${port}`);
});
