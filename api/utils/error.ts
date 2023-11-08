import { Request, Response, NextFunction } from "express";

export interface Error {
  statusCode?: number;
  message?: string;
}

export const errorHandlerMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
};

export const errorHandler = (statusCode: number, message: string): Error => {
  const error = new Error() as Error;
  error.statusCode = statusCode;
  error.message = message;
  return error;
};
