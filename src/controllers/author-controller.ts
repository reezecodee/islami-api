import { Request, Response } from "express";
import { author } from "../utils/data/info-author";

const AuthorController = (req: Request, res: Response) => {
    res.status(200).json({
        statusCode: 200,
        message: 'success',
        data: author
    })
};

export default AuthorController;
