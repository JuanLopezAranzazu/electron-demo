const { config } = require("dotenv");
config();

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/db-mongo-videos";

module.exports = { MONGODB_URI };
