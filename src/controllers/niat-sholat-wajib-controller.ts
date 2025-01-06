import { Request, Response } from "express";
import { niatSholatWajib } from "../utils/data/niat-sholat-wajib";

const NiatSholatWajibController = (req: Request, res: Response) => {
  res.status(200).json({
    statusCode: 200,
    message: "success",
    data: niatSholatWajib,
  });
};

export default NiatSholatWajibController;
