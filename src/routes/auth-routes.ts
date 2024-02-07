import express from "express";
import { login, registerUser } from "../controllers/auth-controller";
import validate from "../libs/ajv-lib";
import { loginSchema, registerUserSchema } from "../validations/auth-schema";

const authRoutes = express.Router();

authRoutes.post(
  "/register",
  validate({ body: registerUserSchema }),
  registerUser
);

authRoutes.post("/login", validate({ body: loginSchema }), login);

export default authRoutes;
