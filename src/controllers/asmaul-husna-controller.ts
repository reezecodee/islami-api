import { Request, Response } from "express";
import { asmaulHusna } from "../utils/data/asmaul-husna";

const AsmaulHusnaController = {
  all: (res: Response) => {
    res.status(200).json({
      statusCode: 200,
      message: "success",
      data: asmaulHusna,
    });
  },
  urutan: (req: Request, res: Response) => {
    const urutan: number = parseInt(req.params.urutan, 10);
    const found = asmaulHusna.find((item) => item.urutan === urutan);

    if (found) {
      res.status(200).json({
        statusCode: 200,
        message: "success",
        data: found,
      });
    } else {
      res.status(404).json({
        statusCode: 404,
        message: "not found",
      });
    }
  },
};

export default AsmaulHusnaController;
