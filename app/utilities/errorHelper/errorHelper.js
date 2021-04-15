import { getReasonPhrase } from 'http-status-codes';

const getRequestId = () => {
  // TODO: get request id from user
  const id = '123';
  return id;
};

const buildError = (
  // takes an error code: eg 404
  errorCode,
  // any additional info you want to give in an ARRAY
  details
) => {
  const error = {
    error: {
      httpStatus: getReasonPhrase(errorCode),
      errorCode,
      details,
      requestId: getRequestId(),
    },
  };
  return error;
};

export default buildError;
