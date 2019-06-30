import React, { createContext, useState } from 'react';

import { ALERT_TYPE } from '../lib/constants';

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [text, setText] = useState();
  const [type, setType] = useState();

  const reset = () => {
    setText();
    setType();
    setShowAlert();
  };
  const sendSuccess = text => {
    setText(text);
    setType(ALERT_TYPE.SUCCESS);
    setShowAlert(true);
  };

  const sendWarning = text => {
    setText(text);
    setType(ALERT_TYPE.WARNING);
    setShowAlert(true);
  };

  const sendError = text => {
    setText(text);
    setType(ALERT_TYPE.ERROR);
    setShowAlert(true);
  };

  return (
    <AlertContext.Provider
      value={{
        showAlert,
        text,
        type,
        reset,
        sendSuccess,
        sendWarning,
        sendError
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
