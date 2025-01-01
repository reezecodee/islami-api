import { Request, Response, NextFunction } from "express";

const validateMethodType = (req: Request, res: Response, next: NextFunction) => {
  if (req.method !== "GET") {
    res.status(400).json({
      statusCode: 400,
      message: "Only GET method supported",
    });
  }
  next();
};

export default validateMethodType;