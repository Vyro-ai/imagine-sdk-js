import createError from "http-errors";

export const ErrInvalidParameter = (message: string) =>
  createError(422, message);

export const ErrNotFound = (message: string) => createError(404, message);

export const ErrDynamic = (status: number, message: string) =>
  createError(status, message);
