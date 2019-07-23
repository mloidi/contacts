import React, { useContext } from 'react';

import './Contacts.css';
import {
  AuthContext,
  LanguageContext,
  ContactContext,
  LoadingContext,
  GroupContext
} from '../../globalState';
import ContactCard from './ContactCard';
import Icon from '../common/Icon';
import NewContact from './NewContact';
import ViewContact from './ViewContact';
import Groups from '../groups/Groups';

const Contacts = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { setLoading } = useContext(LoadingContext);
  const { getText } = useContext(LanguageContext);
  const {
    contacts,
    loadContacts,
    showNewContact,
    setShowNewContact,
    showViewContact,
    showEditContact
  } = useContext(ContactContext);
  const { loadGroups, selectedGroup } = useContext(GroupContext);

  if (isAuthenticated() && !contacts) {
    setLoading(true);
    loadContacts();
    loadGroups();
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
            <div className="App-contact-layout">
              <div className="App-contact-groups">
                <Groups />
              </div>
              <div>
                <div className="App-contact-options">
                  {selectedGroup ? (
                    <div className="App-contacts-title">
                      {selectedGroup.name} contacts
                    </div>
                  ) : (
                    <div className="App-contacts-title">All contacts</div>
                  )}
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
              </div>
            </div>
          )}
        </React.Fragment>
      ) : (
        <div>Something goes wrong!!</div>
      )}
    </React.Fragment>
  );
};

export default Contacts;
