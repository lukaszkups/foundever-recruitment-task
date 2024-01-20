import { AxiosInstance, AxiosRequestConfig } from "axios";
import { TGetMovieGenresRequestValues, TMovieData } from "./movies";

export type TRequestValues = TGetMovieGenresRequestValues | { body?: TRequestValues };

export type TMovieApiRequestValues = {
  query?: {
    with_genres?: string | null;
    page?: number,
  };
  body?: Record<string, any> | TMovieApiRequestValues;
  path?: string | null;
  params?: Record<string, any>;
  config?: Record<string, any>;
  format?: Function;
  [key: string]: boolean | string | null | number | undefined | Record<string, any> | TMovieApiRequestValues | Function; // I would change the usage of object of this type in useApi.ts file so this could be avoid
};

export type TMovieApiResponse = { 
  status?: number | string; 
  isSuccess?: boolean; 
  data?: any; 
  errors?: object;
};

export type TUseResponseResult = {
  status: string;
  isSuccess: boolean;
}

export type TQueryBuilderPayload = {
  default?: boolean;
  required?: boolean;
  with_genres?: string | null;
  page?: number;
  [key: string]: boolean | string | null | number | undefined; // I would change the usage of object of this type in useRequest.ts file so this could be avoid
}

export type TBuildRequestConstructorParams = {
  api: AxiosInstance;
  method: string;
  path?: string | null;
  params?: Record<string, any>;
  query?: Record<string, any> | TQueryBuilderPayload;
  body?: Record<string, any> | TMovieApiRequestValues;
  config?: Record<string, any>;
}

export type  TBuildRequestContructorValues = {
  api?: AxiosInstance;
  path?: string | null;
  params: Record<string, any>;
  query: Record<string, any>;
  body: TMovieApiRequestValues;
  config: Record<string, any>;
};

export type AxiosMethods = 'head' | 'options' | 'put' | 'post' | 'patch' | 'delete' | 'get';

export type TUseRequestResult = {
  method: string;
  path?: string | null;
  exec?: Function;
}

export type TRequestHTTPResponse = {
  errors?: Error[];
  status?: string | number;
  data?: {
    results?: TMovieData[];
    totalPages: number;
  }
}
