import express from "express";

import { getNodeVersion } from "./get-version.js";

import { statuscode } from "http-status-codes";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(statuscode.OK).send("Hello Class!");
});

app.get("/info", (req, res) => {
  res.send(getNodeVersion());
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
n;
