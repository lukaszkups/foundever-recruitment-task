import useRequest from './helpers/useRequest';
import useResponse from './helpers/useResponse';
import { TRequestBuilderResponse, TRequestConstructorParams, TRequestValues } from '@/types/api';

export default (requestConstructor: TRequestConstructorParams, requestValues: TRequestValues = {}):
  Promise<{ status: string; isSuccess: boolean; data: any; errors: object; } | any> | any => {

  let response;
  let valuesKeys: string[] = requestValues ? Object.keys(requestValues) : [];

  // Shortcut for POST : If no 'params','query','body' keys in requestValues object, so it is 'body' object itself.
  if (valuesKeys.length && !valuesKeys.some((key: any) => ['path', 'params', 'query', 'body'].includes(key))) {
    const body = { ...requestValues };
    requestValues = {};
    requestValues.body = body;
  }

  const request = useRequest(requestConstructor, requestValues);
  console.log('►►►', (request as TRequestBuilderResponse).method.toUpperCase(), (request as TRequestBuilderResponse).path, requestConstructor, requestValues);

  if (request)
    response = useResponse({ 
      method: (request as TRequestBuilderResponse).method, 
      path: (request as TRequestBuilderResponse).path, 
      exec: (request as TRequestBuilderResponse).exec 
    });
  else throw new Error('Something went wront with your API request.');
  return response;
};
