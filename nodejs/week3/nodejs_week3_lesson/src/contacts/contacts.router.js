import express from "express";
import { StatusCodes } from "http-status-codes";
import { knexInstance } from "../database.js";
import { contactSchema } from "./contacts.validation.js";
import { updateContactSchema } from "./contacts.validation.js";
import { validate } from "../middlewares/validate.midlelware.js";

export const router = express.Router();
const domain = "contacts";

//api/contacts/	GET	Returns all contacts	GET api/contacts/
router.get("/", async (req, res) => {
  try {
    const contacts = await knexInstance.select().from(domain);
    res.status(StatusCodes.OK).json(contacts);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: "Internal server error, failed to fetch contacts",
    });
  }
});

//api/contacts/	POST	Adds a new contact	POST api/contacts/
router.post("/", async (req, res) => {
  try {
    await knexInstance(domain).insert(req.body);
    res.status(StatusCodes.CREATED).json({});
  } catch (error) {
    console.error("Error inserting contact:", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: "Internal server error, failed to add contact",
    });
  }
});

//api/contacts/{id}	GET	Returns contact by id	GET api/contacts/2
router.get("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: "Invalid ID" });
    }

    const contact = await knexInstance(domain).where({ id });

    if (contact.length === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: "Contact not found",
      });
    }

    res.status(StatusCodes.OK).json(contact[0]);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: "Internal server error, failed to fetch contact",
    });
  }
});

// api/contacts/{id}	PUT	Updates contact by id	PUT api/contacts/2
router.put("/:id", validate(updateContactSchema), async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: "Invalid ID" });
    }

    const updatedRows = await knexInstance(domain)
      .where({ id })
      .update(req.body);

    if (updatedRows === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: "Contact not found",
      });
    }

    res
      .status(StatusCodes.OK)
      .json({ message: "Contact updated successfully" });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: "Internal server error, failed to update contact",
    });
  }
});

// api/contacts/{id}	DELETE	Deletes contact by id	DELETE api/contacts/1
router.delete("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: "Invalid ID" });
    }

    const deletedCount = await knexInstance("contacts").where({ id }).del();

    if (deletedCount === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: "Contact not found",
      });
    }

    res
      .status(StatusCodes.OK)
      .json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: "Internal server error, failed to delete contact",
    });
  }
});
