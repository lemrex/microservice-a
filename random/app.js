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
  const randomNumber = Math.floor(Math.random() * 100);
  logger.info(`Random number generated: ${randomNumber}`);
  res.json({ randomNumber });
});

app.listen(port, () => {
  logger.info(`Random number service running on port ${port}`);
});
