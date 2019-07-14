import React, { createContext, useState, useEffect } from 'react';

import { AuthService } from '../service/auth.service';

export const cookieName =
  process.env.REACT_APP_NAME + process.env.REACT_APP_TOKEN;

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => {
    const authToken = localStorage.getItem(cookieName);
    if (typeof authToken === 'string' && authToken === 'null') return null;
    return authToken;
  });
  const [user, setUser] = useState();
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [message, setMessage] = useState();

  useEffect(() => {
    if (!user && token) {
      AuthService.getUser(token).then(response => {
        setUser(response);
      });
    }
  });

  const isAuthenticated = () => {
    if (token) return true;
    return false;
  };

  const logOut = () => {
    //  TODO call logout service
    localStorage.removeItem(cookieName);
    setToken();
    setUser();
  };

  const logIn = (username, password) => {
    AuthService.login(username, password)
      .then(response => {
        localStorage.setItem(cookieName, response.token);
        console.log('token saved');
        setToken(response.token);
        setUser(response.user);
        setMessage();
        setIsPasswordValid(true);
        setIsUsernameValid(true);
      })
      .catch(error => {
        setMessage(error.message);
        if (error.message === 'No account found') {
          setIsUsernameValid(false);
          setIsPasswordValid(true);
        }
        if (error.message === 'Password is incorrect') {
          setIsUsernameValid(true);
          setIsPasswordValid(false);
        }
      });
  };

  return (
    <AuthContext.Provider
      value={{
        setToken,
        setUser,
        isAuthenticated,
        logOut,
        logIn,
        user,
        token,
        isUsernameValid,
        isPasswordValid,
        message
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
