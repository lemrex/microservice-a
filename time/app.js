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
  const time = new Date().toISOString().split("T")[1].split(".")[0];
  logger.info(`Time requested: ${time}`);
  res.json({ time });
});

app.listen(port, () => {
  logger.info(`Time service running on port ${port}`);
});
