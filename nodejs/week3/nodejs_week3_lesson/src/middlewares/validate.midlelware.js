import { StatusCodes } from "http-status-codes";

export const validate = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.parseAsync(req.body);

      next();
    } catch (error) {
      return res.status(StatusCodes.BAD_REQUEST).json(error.issues);
    }
  };
};
