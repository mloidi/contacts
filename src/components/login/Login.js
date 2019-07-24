import React, { useContext, useState } from 'react';

import './Login.css';
import {
  AuthContext,
  LanguageContext,
  ContactContext,
  LoadingContext,
  GroupContext
} from '../../globalState';
import Icon from '../common/Icon';

const Login = () => {
  const { logIn, isUsernameValid, isPasswordValid, message } = useContext(
    AuthContext
  );
  const { loading, setLoading } = useContext(LoadingContext);
  const { loadContacts, contacts } = useContext(ContactContext);
  const { loadGroups, setSelectedGroup } = useContext(GroupContext);
  const { getText } = useContext(LanguageContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  console.log('login 1', contacts);

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
            disabled={loading}
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
            disabled={loading}
          />
        </div>
        <div>
          <button
            className="App-button"
            onClick={async () => {
              setLoading(true);
              try {
                console.log('login 2', contacts);
                const logged = await logIn(username, password);
                if (logged) {
                  loadContacts();
                  console.log('login 3', contacts);
                  loadGroups();
                  console.log('login 4', contacts);
                  setSelectedGroup(null);
                  console.log('login 5', contacts);
                }
              } catch (error) {
                console.error(error);
              }
              setLoading(false);
            }}
            disabled={!(username && password) || loading}
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
