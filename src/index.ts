import express from "express";
import dotenv from "dotenv";

import rootRouter from "./routes/root-routes";
import authRoutes from "./routes/auth-routes";
import { validationErrorHandler } from "./middlewares/validation-error-middleware";
import { errorHandler, notFoundHandler } from "./middlewares/error-handler";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/", rootRouter);
app.use("/api/auth", authRoutes);
app.use(notFoundHandler);
app.use(validationErrorHandler);
app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
