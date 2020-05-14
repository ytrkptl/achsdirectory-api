const knex = require("knex");
const Airtable = require("airtable");
if (process.env.NODE_ENV !== "production") require("dotenv").config();

// for using locally and connecting to pgAdmin as well
// as for making calls to heroku postgres from server
const db = knex({
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  },
});

// use Airtable to allow easy modifying of data for
// school employees who don't know how to use
// databases.
Airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
});
const base = Airtable.base(process.env.AIRTABLE_BASE);

exports.db = db;
exports.base = base;
