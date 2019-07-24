import React, { useContext } from 'react';
import { NavLink as Link } from 'react-router-dom';

import './Menu.css';
import {
  AuthContext,
  LanguageContext,
  ContactContext
} from '../../globalState';
import Icon from '../common/Icon';

const Menu = () => {
  const { logOut, user } = useContext(AuthContext);
  const { unloadContacts, contacts } = useContext(ContactContext);
  const {
    languageOption,
    setLanguageOption,
    getText,
    getSelectedLanguage
  } = useContext(LanguageContext);
  const menu = [
    { icon: 'faUsers', name: 'contacts', path: '/', role: ['USER1'] },
    { icon: 'faCogs', name: 'admin', path: '/admin', role: ['ADMIN'] }
  ];

  const canSeeMenuOption = (role, roles) => {
    if (role === 'ADMIN') {
      return true;
    }
    if (
      roles.find(item => {
        return item === role;
      })
    ) {
      return true;
    } else {
      return false;
    }
  };

  const getLogo = () => {
    if (getSelectedLanguage() === 'es') {
      return getText('contactsLogo') + ' de ' + user.firstName;
    } else {
      return user.firstName + '  ' + getText('contactsLogo');
    }
  };
  return (
    <div className="App-menu">
      <div className="App-menu-logo ">{getLogo()}</div>
      <div className="App-menu-nav-bar">
        <ul className="App-menu-nav-bar-ul">
          {menu.map(menu => (
            <React.Fragment key={menu.name}>
              {canSeeMenuOption(user.role, menu.role) && (
                <li>
                  <Link
                    className="App-menu-link"
                    activeClassName="App-menu-selected"
                    exact
                    to={menu.path}
                  >
                    <Icon icon={menu.icon} />
                    {' ' + getText(menu.name)}
                  </Link>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
      <div className="App-menu-user">
        {languageOption &&
          languageOption.map(text => (
            <div
              key={text.id}
              className={
                text.selected
                  ? 'App-menu-user-language App-menu-user-language-selected'
                  : 'App-menu-user-language'
              }
              onClick={() => {
                const languageOptionCopy = [...languageOption];
                setLanguageOption(
                  languageOptionCopy.map(item => {
                    item.selected = item.id === text.id;
                    return item;
                  })
                );
              }}
            >
              {text.name}
            </div>
          ))}
        <img className="App-menu-avatar" src={user.image} alt={user.userName} />
        <button
          className="App-menu-button"
          onClick={async () => {
            console.log('1',contacts)
            const logout = await logOut();
            console.log('2',contacts)
            if (logout) {
              console.log('3',contacts)
              await unloadContacts();
              console.log('4',contacts)
            }
          }}
        >
          <Icon icon="faSignOutAlt" />
          {' ' + getText('logout')}
        </button>
      </div>
    </div>
  );
};

export default Menu;
