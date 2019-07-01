import React, { useContext } from 'react';

import { LanguageContext, ContactContext } from '../../globalState';
import Icon from '../common/Icon';

const ContactCard = ({ contact }) => {
  const { getText } = useContext(LanguageContext);
  const { viewContact } = useContext(ContactContext);

  return (
    <div className="App-contact-card">
      <div>
        {contact.avatar ? (
          <img
            className="App-contact-card-avatar"
            src={contact.avatar}
            alt={contact.firstName}
          />
        ) : (
          <div className="App-contact-card-avatar">
            <Icon icon="faUser" />
          </div>
        )}
        <div className="App-contact-card-name">
          {contact.firstName} {contact.lastName}
        </div>
        <div className="App-contact-card-department">{contact.department}</div>
        <div className="App-contact-card-details">
          <a
            className="App-contact-card-email"
            href={'mailto:' + contact.emails[0].email}
            target="_top"
          >
            <Icon icon="faEnvelope" /> {contact.emails[0].email}
          </a>
          {' - '}
          <Icon icon="faPhone" /> {contact.phones[0].phoneNumber}
        </div>
      </div>
      <div className="App-contact-card-buttons">
        <button
          className="App-contact-button"
          onClick={() => {
            viewContact(contact);
          }}
        >
          <Icon icon="faAddressCard" /> {' ' + getText('view')}
        </button>
        <button
          className="App-contact-button"
          onClick={() => {
            alert('edit');
          }}
        >
          <Icon icon="faUserEdit" /> {' ' + getText('edit')}
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
