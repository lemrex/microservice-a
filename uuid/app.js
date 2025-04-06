const express = require("express");
const winston = require("winston");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");

const app = express();
// Enable CORS for all origins
app.use(cors());
const port = 3000;

const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
});

app.get("/", (req, res) => {
  const uuid = uuidv4();
  logger.info(`UUID generated: ${uuid}`);
  res.json({ uuid });
});

app.listen(port, () => {
  logger.info(`UUID service running on port ${port}`);
});
