import React, { useContext, useState } from 'react';

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
import Loading from '../common/Loading';

const Contacts = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { loading, setLoading } = useContext(LoadingContext);
  const { getText } = useContext(LanguageContext);
  const {
    contacts,
    loadContacts,
    showNewContact,
    setShowNewContact,
    showViewContact,
    showEditContact
  } = useContext(ContactContext);
  const { loadGroups, selectedGroup, setSelectedGroup, remove } = useContext(
    GroupContext
  );

  const [editGroup, setEditGroup] = useState(false);

  if (isAuthenticated() && !contacts) {
    setLoading(true);
    loadContacts();
    loadGroups();
    setLoading(false);
  }
  return (
    <React.Fragment>
      {isAuthenticated() && !loading ? (
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
                    <div className="App-contacts-group-title">
                      <div className="App-contacts-title">
                        {selectedGroup.name} {' ' + getText('contacts')}
                      </div>
                      {editGroup ? (
                        <button
                          className="App-contact-button"
                          onClick={() => {
                            setEditGroup(!editGroup);
                          }}
                        >
                          <Icon icon="faSave" /> {' ' + getText('editGroup')}
                        </button>
                      ) : (
                        <button
                          className="App-contact-button"
                          onClick={() => {
                            setEditGroup(!editGroup);
                          }}
                        >
                          <Icon icon="faEdit" /> {' ' + getText('editGroup')}
                        </button>
                      )}
                      <button
                        className="App-contact-button"
                        onClick={() => {
                          remove(selectedGroup._id);
                          loadContacts();
                          setSelectedGroup(null);
                        }}
                      >
                        <Icon icon="faTrash" /> {' ' + getText('removeGroup')}
                      </button>
                    </div>
                  ) : (
                    <div className="App-contacts-title">{getText('allContacts')}</div>
                  )}
                  <div>
                    {selectedGroup && <div className="App-contacts-title" />}
                    <button
                      className="App-contact-button"
                      onClick={() => {
                        setShowNewContact(true);
                      }}
                    >
                      <Icon icon="faUserPlus" /> {' ' + getText('new')}
                    </button>
                  </div>
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
        <Loading />
      )}
    </React.Fragment>
  );
};

export default Contacts;
