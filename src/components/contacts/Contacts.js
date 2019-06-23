import React, { useState, useContext } from 'react';

import './Contacts.css';
import { LanguageContext } from '../../globalState';
import ContactCard from './ContactCard';
import Icon from '../common/Icon';
import NewContact from './NewContact';

const Contacts = () => {
  const { getText } = useContext(LanguageContext);
  const [contacts, setContacts] = useState(() => {
    return [
      {
        id: 1,
        avatar: null,
        firstName: 'AAAA',
        lastName: 'AAAA AAAA',
        department: 'Human Resources',
        emails: [{ id: 1, type: 'work', email: 'work@aaa.com' }],
        phones: [{ id: 1, type: 'work', phoneNumber: '111111111' }]
      },
      {
        id: 2,
        avatar: null,
        firstName: 'BBBB',
        lastName: 'BBBB BBBB',
        department: 'Human Resources',
        emails: [{ id: 1, type: 'work', email: 'work@bbb.com' }],
        phones: [{ id: 1, type: 'work', phoneNumber: '222222222' }]
      },
      {
        id: 3,
        avatar: null,
        firstName: 'CCCC',
        lastName: 'CCCC CCCC',
        department: 'Human Resources',
        emails: [{ id: 1, type: 'work', email: 'work@ccc.com' }],
        phones: [{ id: 1, type: 'work', phoneNumber: '333333333' }]
      },
      {
        id: 4,
        avatar: null,
        firstName: 'ZZZZ',
        lastName: 'ZZZZ ZZZZ',
        department: 'Human Resources',
        emails: [
          { id: 1, type: 'home', email: 'home@ZZZ.com' },
          { id: 2, type: 'work', email: 'work@ZZZ.com' }
        ],
        phones: [{ id: 1, type: 'work', phoneNumber: '444444444' }]
      }
    ];
  });
  const [showNewContact, setShowNewContact] = useState(false);

  const addNewContact = newContact => {
    const contactsCopy = [...contacts];
    const id = contactsCopy.length + 1;
    newContact.id = id;
    contactsCopy.push(newContact);
    setContacts(contactsCopy);
    setShowNewContact(false);
  };

  const cancel = () => {
    setShowNewContact(false);
  };

  return (
    <React.Fragment>
      {/* <div className="App-title">{getText('myContacts')}</div> */}
      {showNewContact ? (
        <NewContact save={addNewContact} cancel={cancel} />
      ) : (
        <React.Fragment>
          <div className="App-contact-options">
            <button
              className="App-button"
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
