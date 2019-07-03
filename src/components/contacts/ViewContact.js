import React, { useContext } from 'react';

import { LanguageContext, ContactContext } from '../../globalState';
import Icon from '../common/Icon';

const ViewContact = () => {
  const { getText } = useContext(LanguageContext);
  const { contact, backViewContact } = useContext(ContactContext);

  return (
    <div className="App-contact-view">
      <div className="App-contact-view-field">
        {contact.avatar ? (
          <img
            className="App-contact-view-avatar"
            src={contact.avatar}
            alt={contact.firstName}
          />
        ) : (
          <div className="App-contact-view-avatar">
            <Icon icon="faUser" />
          </div>
        )}
        <div>
          <div>{contact.firstName}</div>
          <div>{contact.lastName}</div>
          <div>{contact.department}</div>
        </div>
      </div>
      <div className="App-contact-view-field-list">
        <label className="App-contact-view-field-list-label">
          <Icon icon="faEnvelope" />
        </label>
        <div className="App-contact-view-table-header ">
          <div>{getText('emailType')}</div>
          <div>{getText('email')}</div>
          <div />
        </div>
        {contact.emails.map(item => (
          <div key={item.id} className="App-contact-view-table-row ">
            <div>{item.emailType}</div>
            <div>
              <a
                className="App-contact-card-email"
                href={'mailto:' + item.email}
                target="_top"
              >
                <Icon icon="faEnvelope" /> {item.email}
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="App-contact-view-field-list">
        <label className="App-contact-view-field-list-label">
          <Icon icon="faPhone" />
        </label>
        <div className="App-contact-view-table-header ">
          <div>{getText('phoneType')}</div>
          <div>{getText('phone')}</div>
          <div />
        </div>
        {contact.phones.map(item => (
          <div key={item.id} className="App-contact-view-table-row ">
            <div>{item.phoneType}</div>
            <div>{item.phoneNumber}</div>
          </div>
        ))}
      </div>
      <div className="App-contact-view-buttons">
        <button
          className="App-contact-button"
          onClick={() => {
            backViewContact();
          }}
        >
          <Icon icon="faArrowLeft" /> {' ' + getText('back')}
        </button>
      </div>
    </div>
  );
};

export default ViewContact;
