import {
    GET,
    POST,
    statusOK,
    setRequestOptions
  } from './service.util.js';
  
  const Bearer = 'Bearer ';
  
  export const AuthService = {
    login: async (username, password) => {
      const url = process.env.REACT_APP_BACKEND_URL + '/login';
      const requestOptions = setRequestOptions({
        method: POST,
        body: {
          email: username,
          password
        }
      });
      const req = new Request(url, requestOptions);
      const { success, user, token } = await fetch(req).then(async response => {
        if (!statusOK(response.status)) {
          throw await response.json();
        }
        return await response.json();
      });
      if (success) {
        return { user, token: Bearer + token };
      }
    },
    logout: async token => {
      const url = process.env.REACT_APP_BACKEND_URL + '/logout';
      const requestOptions = setRequestOptions({
        method: POST,
        token,
        body: {}
      });
  
      const req = new Request(url, requestOptions);
      const { logout } = await fetch(req).then(async response => {
        return await response.json();
      });
      return logout;
    },
    getUser: token => {
      const url = process.env.REACT_APP_BACKEND_URL + '/user';
      const requestOptions = setRequestOptions({
        method: GET,
        token
      });
      const req = new Request(url, requestOptions);
      return fetch(req).then(response => {
        if (!statusOK(response.status)) {
          throw response.json();
        }
        return response.json();
      });
    }
  };
  