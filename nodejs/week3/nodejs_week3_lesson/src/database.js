import knex from "knex";

export const knexInstance = knex({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3307,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "Nersesyan01",
    database: process.env.DB_NAME || "nodejs_database",
  },
});
