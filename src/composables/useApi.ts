import { TMovieApiConstructPayload } from '@/types/movies';
import { TMovieApiRequestValues, TMovieApiResponse, TUseRequestResult } from '@/types/api';
import useRequest from './helpers/useRequest';
import useResponse from './helpers/useResponse';

export default async (requestConstructor: TMovieApiConstructPayload, requestValues: TMovieApiRequestValues = {}):
  Promise<TMovieApiResponse | any>=> {

  let response: TMovieApiResponse;
  let valuesKeys:string[] = requestValues ? Object.keys(requestValues) : [];

  // Shortcut for POST : If no 'params','query','body' keys in requestValues object, so it is 'body' object itself.
  if (valuesKeys.length && !valuesKeys.some((key: string) => ['path', 'params', 'query', 'body'].includes(key))) {
    const body = { ...requestValues };
    requestValues = {};
    requestValues.body = body;
  }

  const request = useRequest(requestConstructor, requestValues) as TUseRequestResult;
  console.log('►►►', request.method.toUpperCase(), request.path, requestConstructor, requestValues);

  if (request)
    response = await useResponse({ method: request.method, path: request.path, exec: request.exec });
  else throw new Error('Something went wrong with your API request.');
  return response;
};
