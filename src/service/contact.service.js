import { GET, POST, PATCH, DELETE, setRequestOptions } from './service.util.js';

import { getToken } from '../lib/utils';

const baseURL = process.env.REACT_APP_BACKEND_URL + '/contact';

export const ContactService = {
  get: async () => {
    const token = getToken();
    if (token) {
      const url = baseURL + '/';
      const requestOptions = setRequestOptions({
        method: GET,
        token
      });
      const req = new Request(url, requestOptions);
      const response = await fetch(req);
      return await response.json();
    } else {
      console.log('no token');
      return null;
    }
  },
  save: async (contact, isNew) => {
    const token = getToken();
    const url = baseURL + '/';
    const requestOptions = setRequestOptions({
      method: isNew ? POST : PATCH,
      token,
      body: { contact }
    });
    const req = new Request(url, requestOptions);
    const response = await fetch(req);
    return await response.json();
  },
  delete: async id => {
    const token = getToken();
    const url = baseURL + '/' + id;
    const requestOptions = setRequestOptions({
      method: DELETE,
      token
    });
    const req = new Request(url, requestOptions);
    const response = await fetch(req);
    return await response.json();
  }
};
