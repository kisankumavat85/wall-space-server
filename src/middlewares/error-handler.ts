import { ErrorRequestHandler, RequestHandler } from "express";

import HttpError from "../utils/http-error-util";

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }
  res.status(error.code || 500).json({
    message: error.message || "An unknown error occurred",
    code: error.code || 500,
  });
};

export const notFoundHandler: RequestHandler = (req, res, next) => {
  const error = new HttpError(404, "Not Found");
  return next(error);
};
