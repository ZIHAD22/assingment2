import { Response } from "express";

type dataResponseT = any;
type errorResponseT = any;

type BaseInfoT = {
  res: Response;
  success?: boolean;
  messages: string;
  status: number;
};

type ErrorInfoT = BaseInfoT & {
  error: errorResponseT;
  data?: never; // when error found then data should not present
};

type DataInfoT = BaseInfoT & {
  data: dataResponseT;
  error?: never; //when data found then error should not present
};

type Info = ErrorInfoT | DataInfoT;

export { Info };
