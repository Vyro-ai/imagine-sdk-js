/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Status } from "../enums/statuses";
import { ErrDynamic } from "../errors";

import { Err } from "./error";

export interface Result<T> {
  status(): Status;
  data(): T | null;
  getOrThrow(): T;
  getOrElse(defaultValue: T): T;
  errorOrThrow(): Err;
}

export const error = <T>(err: Err, code: Status): Result<T> => {
  const status = (): Status => code;
  const data = (): T | null => null;
  const getOrThrow = (): T => {
    throw ErrDynamic(
      code,
      `Response data is not available in the response object. Status Response: ${code}`
    );
  };

  const getOrElse = (defaultValue: T): T => defaultValue;
  const errorOrThrow = (): Err => err;

  return {
    status,
    data,
    getOrThrow,
    getOrElse,
    errorOrThrow,
  };
};

export const success = <T>(content: T): Result<T> => {
  const status = (): Status => Status.OK;
  const data = (): T | null => content;
  const getOrThrow = (): T => content;
  const getOrElse = (_: T): T => content;
  const errorOrThrow = (): Err => {
    throw ErrDynamic(
      Status.OK,
      `Response data is not available in the response object. Status Response: ${Status.OK}`
    );
  };

  return {
    status,
    data,
    getOrThrow,
    getOrElse,
    errorOrThrow,
  };
};
