import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import { ContextProvider } from './globalState/state';
import { AuthContext } from './globalState';
import Login from './components/login/Login';
import Menu from './components/menu/Menu';
import Admin from './components/admin/Admin';
import NotFound from './components/notFound/NotFound';
import Contacts from './components/contacts/Contacts';

function App() {
  return (
    <ContextProvider>
      <AuthContext.Consumer>
        {authContext =>
          authContext.isAuthenticated() ? (
            <React.Fragment>
              {authContext.user && (
                <Router>
                  <Menu />
                  <Switch>
                    <Route exact path="/" component={Contacts} />
                    <Route exact path="/admin" component={Admin} />
                    <Route component={NotFound} />
                  </Switch>
                </Router>
              )}
            </React.Fragment>
          ) : (
            <Login />
          )
        }
      </AuthContext.Consumer>
    </ContextProvider>
  );
}

export default App;
