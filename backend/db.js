const { Pool } = require("pg");

const pool = new Pool({
  user: "traveller",
  host: "localhost",
  database: "devops_traveller",
  password: "traveller123",
  port: 5432,
});

module.exports = pool;