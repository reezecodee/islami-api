import express, { Application } from "express";
import cors from "cors";
import router from "./routes/api";
import validateMethodType from "./utils/helpers/method";

let app: Application = express();

app.use(cors());
app.use(express.json());
app.use(validateMethodType);
app.use("/api", router);

const PORT: number = 8000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
