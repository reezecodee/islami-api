import { Request, Response } from "express";
import { niatSholatWajib } from "../utils/data/niat-sholat-wajib";

const NiatSholatWajibController = {
  all: (req: Request, res: Response) => {
    res.status(200).json({
      statusCode: 200,
      message: "success",
      data: niatSholatWajib,
    });
  },
  niat: (req: Request, res: Response) => {
    const niat: string = req.params.niat.toLowerCase();
    const found = niatSholatWajib.filter((item) => item.jenisSholat.toLowerCase() === niat);
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

export default NiatSholatWajibController;
