import { AxiosInstance } from "axios";
import { TRequestValues } from "./api";

export type TMovieData = {
  adult?: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TCategoryItem = {
  name: string;
  value: number[];
};

export type TMovieApiConstructPayload = {
  api: AxiosInstance;
  method: string;
  path: string | null;
  params?: any;
  query?: {
    api_key?: {
      required: boolean;
      default: string;
    },
    page?: {
      required: boolean;
    },
    with_genres?: {
      required: boolean;
    }
  },
  body?: any;
  config?: any;
};

export type TGetMovieGenresRequestValues = {
  query?: {
    with_genres: string | null;
    page: number;
  },
  body?: TRequestValues;
}
