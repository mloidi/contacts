import React, { useContext } from 'react';

import {
  LanguageContext,
  ContactContext,
  GroupContext
} from '../../globalState';
import Icon from '../common/Icon';

const ContactCard = ({ contact }) => {
  const { getText } = useContext(LanguageContext);
  const { viewContact, editContact, filterContacts } = useContext(
    ContactContext
  );
  const { selectedGroup, deleteContact } = useContext(GroupContext);

  const drag = event => {
    event.dataTransfer.setData('text', event.target.id);
  };

  return (
    <div
      className="App-contact-card"
      id={contact._id}
      draggable="true"
      onDragStart={drag}
    >
      <div>
        {selectedGroup && (
          <div className="App-contact-group-delete">
            <button
              className="App-contact-group-delete-button"
              onClick={async () => {
                const selectedGroupUpdated = await deleteContact(selectedGroup.name, contact._id);
                filterContacts(selectedGroupUpdated.contacts);
              }}
            >
              <Icon icon="faTrash" />
            </button>
          </div>
        )}
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
            draggable="false"
          >
            <Icon icon="faEnvelope" /> {contact.emails[0].email}
          </a>
          <br />
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
            editContact(contact);
          }}
        >
          <Icon icon="faUserEdit" /> {' ' + getText('edit')}
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
