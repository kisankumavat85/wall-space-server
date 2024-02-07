import { AllowedSchema } from "express-json-validator-middleware";

export const registerUserSchema: AllowedSchema = {
  type: "object",
  properties: {
    email: {
      type: "string",
      minLength: 7,
      pattern: "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
    },
    password: {
      type: "string",
      minLength: 6,
    },
    firstName: {
      type: "string",
      minLength: 1,
    },
    lastName: {
      type: "string",
      minLength: 1,
    },
  },
  required: ["email", "password", "firstName", "lastName"],
  errorMessage: {
    properties: {
      email: "Please enter a valid Email Id",
      password: "Please enter a valid Password",
      firstName: "Please enter a valid First Name",
      lastName: "Please enter a valid Last Name",
    },
  },
};

export const loginSchema: AllowedSchema = {
  type: "object",
  properties: {
    email: {
      type: "string",
      minLength: 7,
      pattern: "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
    },
    password: {
      type: "string",
      minLength: 6,
    },
  },
  required: ["email", "password"],
  errorMessage: {
    properties: {
      email: "Please enter a valid Email Id",
      password: "Please enter a valid Password",
    },
  },
};
