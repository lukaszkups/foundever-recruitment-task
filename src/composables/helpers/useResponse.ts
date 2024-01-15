import { TRequestResponse, TUseResponsePayload } from "@/types/api";

const useResponse = async ({ method, path , exec }: TUseResponsePayload): Promise<TRequestResponse> => {
  let response: TRequestResponse = {};

  if (typeof exec === 'function') {
    try {
      const requestHTTP: TRequestResponse = await exec();
      if (typeof requestHTTP === 'object') {
        if (!requestHTTP.errors) {
          response.status = requestHTTP.status || 200;
          response.data = requestHTTP.data || requestHTTP;
          response.isSuccess = true;
        } else {
          if (!requestHTTP.status) requestHTTP.status = 403;
          response.errors = requestHTTP.errors;
          response.isSuccess = false;
        }
      } else {
        response.status = 200;
        response.data = requestHTTP;
        response.isSuccess = true;
      }
      console.log('◄◄◄',method.toUpperCase(), path, response);
      return response;
    } catch (e: any) {
      console.error(e);
      response.data = e.response.data;
      response.status = e.response.status;
      response.isSuccess = false;
      console.log(method.toUpperCase(), path, response);
      return response;
    };
  } else {
    console.error('Request function is not a function');
    return {
      status: '???',
      isSuccess: false,
    }
  }
};

export default useResponse;
