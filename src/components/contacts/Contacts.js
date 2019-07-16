import React, { useContext } from 'react';

import './Contacts.css';
import {
  AuthContext,
  LanguageContext,
  ContactContext,
  LoadingContext
} from '../../globalState';
import ContactCard from './ContactCard';
import Icon from '../common/Icon';
import NewContact from './NewContact';
import ViewContact from './ViewContact';

const Contacts = () => {
  const { isAuthenticated, user } = useContext(AuthContext);
  const { setLoading } = useContext(LoadingContext);
  const { getText } = useContext(LanguageContext);
  const {
    contacts,
    load,
    showNewContact,
    setShowNewContact,
    showViewContact,
    showEditContact
  } = useContext(ContactContext);
  if (isAuthenticated() && !contacts) {
    setLoading(true);
    load();
    setLoading(false);
  }
  return (
    <React.Fragment>
      {isAuthenticated() ? (
        <React.Fragment>
          {showNewContact ? (
            <NewContact />
          ) : showViewContact ? (
            <ViewContact />
          ) : showEditContact ? (
            <NewContact />
          ) : (
            <React.Fragment>
              <div className="App-contact-options">
                <button
                  className="App-contact-button"
                  onClick={() => {
                    setShowNewContact(true);
                  }}
                >
                  <Icon icon="faUserPlus" /> {' ' + getText('new')}
                </button>
              </div>
              <div className="App-contact">
                {contacts &&
                  contacts.map(contact => (
                    <ContactCard
                      key={contact._id ? contact._id : contact.id}
                      contact={contact}
                    />
                  ))}
              </div>
            </React.Fragment>
          )}
        </React.Fragment>
      ) : (
        <div>Something goes wrong!!</div>
      )}
    </React.Fragment>
  );
};

export default Contacts;
