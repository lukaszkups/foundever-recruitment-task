import { AxiosInstance, AxiosRequestConfig } from "axios";
import { TGetMovieGenresRequestValues } from "./movies";

export type TRequestValues = TGetMovieGenresRequestValues | { body?: TRequestValues };

export type TRequestResponse = {
  status?: number | string;
  isSuccess?: boolean;
  data?: TRequestResponse;
  errors?: object;
};

export type TUseResponsePayload = {
  method: string;
  path: string;
  exec?: Function;
};

export type TRequestConstructorParams = {
  api: AxiosInstance;
  method: string;
  path?: string | null;
  params?: Record<string, any>;
  query?: Record<string, any>;
  body?: Record<string, any>;
  config?: AxiosRequestConfig;
};

export type TRequestConstructorValues = {
  path?: string | null;
  params?: Record<string, any>;
  query?: Record<string, any>;
  body?: Record<string, any>;
  config?: AxiosRequestConfig;
};

export type TRequestBuilderResponse = {
  method: string;
  path: string;
  body: string;
  exec: Function;
};

export type  TBuildRequestContructorParams = {
  api: AxiosInstance;
  method: string;
  path: string;
  params: Record<string, any>;
  paramsBuilder?: Record<string, any>;
  query: Record<string, any>;
  queryBuilder?: Record<string, any>;
  body: Record<string, any>;
  bodyBuilder?: Record<string, any>;
  config: Record<string, any>;
};

export type  TBuildRequestContructorValues = {
  path: string;
  forcedPath?: string;
  params: Record<string, any>;
  paramsValue?: Record<string, any>;
  query: Record<string, any>;
  queryValue?: Record<string, any>;
  body: Record<string, any>;
  bodyValue?: Record<string, any>;
  config: Record<string, any>;
  configRequest?: Record<string, any>;
};

