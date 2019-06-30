import React, { useContext } from 'react';

import './Alert.css';
import { ALERT_TYPE } from '../../lib/constants';
import { AlertContext } from '../../globalState';
import Icon from '../common/Icon';

const Alert = () => {
  const { text, type, reset } = useContext(AlertContext);

  setTimeout(() => {
    reset();
  }, 5000);

  const alertType = () => {
    switch (type) {
      case ALERT_TYPE.SUCCESS:
        return 'App-alert App-alert-success';
      case ALERT_TYPE.WARNING:
        return 'App-alert App-alert-warning';
      case ALERT_TYPE.ERROR:
        return 'App-alert App-alert-error';
      default:
        break;
    }
    return 'App-alert  App-success';
  };

  const buttonType = () => {
    switch (type) {
      case ALERT_TYPE.SUCCESS:
        return 'App-alert-button-success';
      case ALERT_TYPE.WARNING:
        return 'App-alert-button-warning';
      case ALERT_TYPE.ERROR:
        return 'App-alert-button-error';

      default:
        break;
    }
    return 'App-alert-button-success';
  };

  return (
    <div className={alertType()}>
      <div className="App-alert-message-row ">
        <div className="App-alert-icon">
          {type === ALERT_TYPE.SUCCESS ? (
            <Icon icon="faCheckCircle" />
          ) : type === ALERT_TYPE.WARNING ? (
            <Icon icon="faExclamationCircle" />
          ) : (
            <Icon icon="faTimes" />
          )}
        </div>
        <div>{text}</div>
        <div className="App-alert-buttons ">
          <button
            className={buttonType()}
            onClick={() => {
              reset();
            }}
          >
            <Icon icon="faTimes" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
