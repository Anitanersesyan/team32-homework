import express from "express";
import { StatusCodes } from "http-status-codes";

import { knexInstance } from "../database.js";

export const router = express.Router();
const domain = "users";

router.get("/users", async (req, res) => {
  const users = await knexInstance.select().from("users");
  res.status(StatusCodes.OK).json(users);
});

router.post("/users", async (req, res) => {
  knexInstance.insert(req.body).into("users");
  res.status(StatusCodes.CREATED).json({});
});
