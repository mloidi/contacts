export const GET = 'GET';
export const POST = 'POST';
export const PATCH = 'PATCH';
export const DELETE = 'DELETE';

export const statusOK = status => {
  if (status !== 200) return false;
  return true;
};

export const setRequestOptions = options => {
  const headers = {
    'Content-Type': 'application/json'
  };

  if (options.token) {
    headers.authorization = options.token;
  }

  const body = options.body;

  const requestOptions = {
    method: options.method,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers,
    redirect: 'follow',
    referrer: 'no-referrer',
    body: JSON.stringify(body)
  };
  return requestOptions;
};
