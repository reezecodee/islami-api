import { Request, Response } from "express";
import { niatSholatSunnah } from "../utils/data/niat-sholat-sunnah";

const NiatSholatSunnahController = {
  all: (req: Request, res: Response) => {
    res.status(200).json({
      statusCode: 200,
      message: "success",
      data: niatSholatSunnah,
    });
  },
  niat: (req: Request, res: Response) => {
    const niat: string = req.params.niat.toLowerCase();
    const found = niatSholatSunnah.find((item) => item.namaSholat.toLowerCase() == niat);
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

export default NiatSholatSunnahController;
