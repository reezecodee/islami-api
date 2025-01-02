import { Request, Response } from "express";
import { doaHarian } from "../utils/data/doa-harian";

const DoaHarianController = (req: Request, res: Response) => {
  res.status(200).json({
    statusCode: 200,
    message: "success",
    data: doaHarian,
  });
};

export default DoaHarianController;
