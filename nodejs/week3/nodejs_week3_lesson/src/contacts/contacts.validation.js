import { z } from "zod/v4";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phonenumber: z.string("Phone number is required").min(10).max(15),
});

export const updateContactSchema = contactSchema.partial();
