import express from "express";
const app = express();
const port = process.env.PORT || 3000;

import fs from "fs";
const loadDocuments = () =>
  JSON.parse(fs.readFileSync("documents.json", "utf-8"));

// Support parsing JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

/* GET /search
This endpoint will accept a query parameter called q, short for query. A bit confusing to have a query parameter called q(uery) but hang in there 💪

If q is not provided, the endpoint should return all documents.
If q is provided, the endpoint should return the documents with some field that matches the value of q.*/

app.get("/search", (req, res) => {
  try {
    const q = req.query.q;
    const documents = loadDocuments();
    console.log("Loaded documents:", documents);

    if (!q) {
      return res.status(200).json(documents);
    }

    if (typeof q !== "string") {
      return res.status(400).json({ error: "q must be a string." });
    }

    const lowerCaseQ = q.toLowerCase();
    const filteredDocuments = documents.filter((document) => {
      // Object.values gets all values of the document's properties and some() checks if at least one value matches the condition
      return Object.values(document).some(
        (val) =>
          typeof val === "string" && val.toLowerCase().includes(lowerCaseQ)
      );
    });

    if (filteredDocuments.length === 0) {
      return res.status(404).send("No documents found.");
    }
    return res.status(200).json(filteredDocuments);
  } catch (error) {
    console.error("Error in /search:", error);
    res.status(500).json({ error: "Server error" });
  }
});

/* GET /documents/:id
This endpoint is simple: find and respond with the document matching the id parameter. If there is no such document, respond with a 404 Not Found. You can assume that the document IDs are unique so there's no need to handle duplicates. */

app.get("/documents/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const documents = loadDocuments();

    const document = documents.find((document) => document.id === id);

    if (document) {
      res.status(200).json(document);
    } else {
      res.status(404).send({ error: "Document not found" });
    }
  } catch (error) {
    console.error("Error in /documents/:id:", error);
    res.status(500).send("Server error");
  }
});

/* POST /search
This endpoint is sort of like GET /search.

It also accepts a query parameter called q and it should behave just like GET /search. But it also accepts a field called fields in the JSON request body. fields is an object where it will be possible to filter by specific fields.
If both q (query parameter) and fields (in body) are provided, we should respond with status 400 Bad Request and explain that both can't be provided*/

app.post("/search", (req, res) => {
  try {
    const q = req.query.q;
    const { fields } = req.body || {}; // otherwise const q = req.query.q is crushing the server
    const documents = loadDocuments();
    console.log("Loaded documents:", documents);

    if (q && fields) {
      return res
        .status(400)
        .json({ error: "Both q and fields can't be provided." });
    }

    if (!q && !fields) {
      return res
        .status(400)
        .json({ error: "Please provide either q or fields." });
    }

    if (q) {
      if (typeof q !== "string") {
        return res.status(400).json({ error: "q must be a string." });
      }

      const lowerCaseQ = q.toLowerCase();
      const filteredDocuments = documents.filter((document) => {
        // Object.values gets all values of the document's properties and some() checks if at least one value matches the condition
        return Object.values(document).some(
          (val) =>
            typeof val === "string" && val.toLowerCase().includes(lowerCaseQ)
        );
      });

      if (filteredDocuments.length === 0) {
        return res.status(404).send({ error: "No documents found." });
      }
      return res.status(200).json(filteredDocuments);
    }

    if (fields) {
      if (
        typeof fields !== "object" ||
        fields === null ||
        Array.isArray(fields)
      ) {
        return res
          .status(400)
          .json({ error: "Fields must be a non-null object." });
      }

      const filteredDocuments = documents.filter((document) => {
        // every() checks if all key-value pairs in fields satisfy the condition
        return Object.keys(fields).every((key) => {
          // Check if the document has the key and its value exactly equals the fields value
          return document[key] === fields[key];
        });
      });

      if (filteredDocuments.length > 0) {
        return res.status(200).json(filteredDocuments);
      } else {
        return res.status(404).send({ error: "No documents found." });
      }
    }
  } catch (error) {
    console.error("Error in /search:", error);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
