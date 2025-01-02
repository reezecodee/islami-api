import express, { Application } from "express";
import cors from "cors";
import router from "./routes/api";
import validateMethodType from "./utils/helpers/method";
import dotenv from "dotenv";

let app: Application = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(validateMethodType);
app.use("/api", router);

const PORT: number | string = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
