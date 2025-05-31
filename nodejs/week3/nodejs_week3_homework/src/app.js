import knex from "knex";
const knexInstance = knex({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3307,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "my-secret-pw",
    database: process.env.DB_NAME || "hyf_node_week3_warmup",
    multipleStatements: true,
  },
});

import express from "express";
const app = express();
const port = process.env.PORT || 3001;

const allowedColumns = ["first_name", "last_name", "email", "phone"];
const allowedDirections = ["ASC", "DESC"];

app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);

contactsAPIRouter.get("/", async (req, res) => {
  try {
    let query = knexInstance.select("*").from("contacts");

    if (req.query.sort) {
      const sortContacts = req.query.sort.toString().trim();
      const [column, direction = "ASC"] = sortContacts.split(/\s+/);

      if (
        allowedColumns.includes(column) &&
        allowedDirections.includes(direction?.toUpperCase())
      ) {
        query = query.orderBy(column, direction.toUpperCase());
      } else {
        return res.status(400).json({ error: "Invalid sort parameter" });
      }
    }
    const data = await query;
    res.json({ data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
