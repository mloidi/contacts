import React, { useContext, useState } from 'react';

import './Login.css';
import {
  AuthContext,
  LanguageContext,
  ContactContext
} from '../../globalState';
import Icon from '../common/Icon';

const Login = () => {
  const { logIn, isUsernameValid, isPasswordValid, message } = useContext(
    AuthContext
  );
  const { load } = useContext(ContactContext);
  const { getText } = useContext(LanguageContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    if (name === 'username') {
      setUsername(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <div className="App-login">
      <div className="App-login-area">
        <div className="App-title">{getText('loginTitle')}</div>
        <div className="App-form-field ">
          <input
            type="text"
            className={
              isUsernameValid
                ? 'App-input-text'
                : 'App-input-text App-input-text-error'
            }
            id="username"
            name="username"
            placeholder={getText('userName')}
            value={username}
            onChange={handleInputChange}
          />
        </div>
        <div className="App-form-field ">
          <input
            type="password"
            className={
              isPasswordValid
                ? 'App-input-text'
                : 'App-input-text App-input-text-error'
            }
            id="password"
            name="password"
            placeholder={getText('password')}
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button
            className="App-button"
            onClick={async () => {
              const logged = await logIn(username, password);
              if (logged) {
                load();
              }
            }}
            disabled={!(username && password)}
          >
            <Icon icon="faSignInAlt" /> {' ' + getText('login')}
          </button>
        </div>
      </div>
      <div className="App-login-error">
        {message ? (
          <div className="App-login-error-message">{message}</div>
        ) : (
          <div className="App-login-no-error">{'a'}</div>
        )}
      </div>
    </div>
  );
};

export default Login;
