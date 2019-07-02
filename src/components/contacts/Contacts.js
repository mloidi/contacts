import React, { useContext } from 'react';

import './Contacts.css';
import { LanguageContext, ContactContext } from '../../globalState';
import ContactCard from './ContactCard';
import Icon from '../common/Icon';
import NewContact from './NewContact';
import ViewContact from './ViewContact';

const Contacts = () => {
  const { getText } = useContext(LanguageContext);
  const {
    contacts,
    showNewContact,
    setShowNewContact,
    showViewContact,
    showEditContact
  } = useContext(ContactContext);

  return (
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
                <ContactCard key={contact.id} contact={contact} />
              ))}
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Contacts;
