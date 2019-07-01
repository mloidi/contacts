import React, { useContext, useState } from 'react';

import {
  LanguageContext,
  AlertContext,
  ContactContext
} from '../../globalState';
import Icon from '../common/Icon';
import FileDropzone from '../common/FileDropzone';
import { ImageService } from '../../service/image.service';

const NewContact = () => {
  const { getText } = useContext(LanguageContext);
  const { sendSuccess, sendError } = useContext(AlertContext);
  const { add, setShowNewContact } = useContext(ContactContext);

  const [avatar, setAvatar] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [department, setDepartment] = useState('');
  const [emails, setEmails] = useState([]);
  const [email, setEmail] = useState('');
  const [emailType, setEmailType] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [phones, setPhones] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneType, setPhoneType] = useState('');
  const [phoneError, setPhoneError] = useState(false);

  const handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    if (name === 'firstName') {
      setFirstName(value);
    }
    if (name === 'lastName') {
      setLastName(value);
    }
    if (name === 'department') {
      setDepartment(value);
    }
    if (name === 'emailType') {
      setEmailType(value);
    }
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'phoneType') {
      setPhoneType(value);
    }
    if (name === 'phoneNumber') {
      setPhoneNumber(value);
    }
  };

  const uploadFile = async file => {
    const response = await ImageService.uploadFile(file);
    setAvatar(await response);
  };

  const validatePhone = phoneToValidate => {
    return phoneToValidate.match(
      /^(\+34|0034|34)?[ -]*(6|7|8|9)[ -]*([0-9][ -]*){8}$/i
    );
  };
  const validateEmail = emailToValidate => {
    return emailToValidate.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
  };

  const disabledSaveButton = () => {
    const isFirstName = firstName.length > 0;
    const isLastName = lastName.length > 0;
    const isDepartmentName = department.length > 0;
    const isOneEmail = emails.length > 0;
    const isOnePhone = phones.length > 0;
    return (
      !isFirstName ||
      !isLastName ||
      !isDepartmentName ||
      !isOneEmail ||
      !isOnePhone
    );
  };

  return (
    <div className="App-contact-new">
      <div className="App-contact-new-field">
        <div>
          <label className="App-contact-new-label">
            {getText('avatar') + ' '}
          </label>
          <span className="App-required">(*)</span>
        </div>
        <FileDropzone
          type="file"
          id="file"
          name="file"
          uploadFile={uploadFile}
          avatar={avatar}
        />
      </div>
      <div className="App-contact-new-field">
        <label>
          {getText('firstName') + ' '}
          <span className="App-required">(*)</span>
        </label>

        <input
          type="text"
          className="App-input-text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={handleInputChange}
        />
      </div>
      <div className="App-contact-new-field">
        <label>
          {getText('lastName') + ' '}
          <span className="App-required">(*)</span>
        </label>
        <input
          type="text"
          className="App-input-text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={handleInputChange}
        />
      </div>
      <div className="App-contact-new-field">
        <label>
          {getText('department') + ' '}
          <span className="App-required">(*)</span>
        </label>
        <input
          type="text"
          className="App-input-text"
          id="department"
          name="department"
          value={department}
          onChange={handleInputChange}
        />
      </div>
      <div className="App-contact-new-field-list">
        <label className="App-contact-new-field-list-label">
          <Icon icon="faEnvelope" />
        </label>
        <div>
          <span className="App-required">
            (*) {' ' + getText('emailRequired')}
          </span>
        </div>
        <div className="App-contact-new-table-header ">
          <div>{getText('emailType')}</div>
          <div>{getText('email')}</div>
          <div />
        </div>
        {emails.map(item => (
          <div key={item.id} className="App-contact-new-table-row ">
            <div>{item.type}</div>
            <div>{item.email}</div>
            <button
              className="App-contact-new-button"
              onClick={() => {
                const emailsCopy = [...emails];
                setEmails(
                  emailsCopy.filter(itemCopy => {
                    return itemCopy.id !== item.id;
                  })
                );
              }}
            >
              <Icon icon="faMinus" />
            </button>
          </div>
        ))}
        <div className="App-contact-new-field-list-row">
          <input
            type="text"
            className={
              emailError ? 'App-input-text App-error' : 'App-input-text'
            }
            id="emailType"
            name="emailType"
            value={emailType}
            onChange={handleInputChange}
          />
          <input
            type="email"
            className={
              emailError ? 'App-input-text App-error' : 'App-input-text'
            }
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          <button
            className="App-contact-new-button"
            onClick={() => {
              if (validateEmail(email) && emailType.length > 0) {
                const emailsCopy = [...emails];
                const id =
                  emailsCopy.length === 0
                    ? 1
                    : emailsCopy[emailsCopy.length - 1].id + 1;
                emailsCopy.push({ id, type: emailType, email });
                setEmail('');
                setEmailType('');
                setEmails(emailsCopy);
                setEmailError(false);
              } else {
                setEmailError(true);
                sendError(getText('emailErrorMessage'));
              }
            }}
          >
            <Icon icon="faPlus" />
          </button>
        </div>
      </div>
      <div className="App-contact-new-field-list">
        <label className="App-contact-new-field-list-label">
          <Icon icon="faPhone" />
        </label>
        <span className="App-required">
          (*) {' ' + getText('phoneRequired')}
        </span>
        <div className="App-contact-new-table-header ">
          <div>{getText('phoneType')}</div>
          <div>{getText('phone')}</div>
          <div />
        </div>
        {phones.map(item => (
          <div key={item.id} className="App-contact-new-table-row ">
            <div>{item.type}</div>
            <div>{item.phoneNumber}</div>
            <button
              className="App-contact-new-button"
              onClick={() => {
                const phonesCopy = [...phones];
                setPhones(
                  phonesCopy.filter(itemCopy => {
                    return itemCopy.id !== item.id;
                  })
                );
              }}
            >
              <Icon icon="faMinus" />
            </button>
          </div>
        ))}
        <div className="App-contact-new-field-list-row">
          <input
            type="text"
            className={
              phoneError ? 'App-input-text App-error' : 'App-input-text'
            }
            id="phoneType"
            name="phoneType"
            value={phoneType}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className={
              phoneError ? 'App-input-text App-error' : 'App-input-text'
            }
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleInputChange}
          />
          <button
            className="App-contact-new-button"
            onClick={() => {
              if (validatePhone(phoneNumber) && phoneType.length > 0) {
                const phonesCopy = [...phones];
                const id =
                  phonesCopy.length === 0
                    ? 1
                    : phonesCopy[phonesCopy.length - 1].id + 1;
                phonesCopy.push({ id, type: phoneType, phoneNumber });
                setPhoneNumber('');
                setPhoneType('');
                setPhones(phonesCopy);
                setPhoneError(false);
              } else {
                setPhoneError(true);
                sendError(getText('phoneErrorMessage'));
              }
            }}
          >
            <Icon icon="faPlus" />
          </button>
        </div>
      </div>
      <div className="App-contact-new-buttons">
        <button
          className="App-contact-button"
          onClick={() => {
            setShowNewContact(false);
          }}
        >
          <Icon icon="faTimes" /> {' ' + getText('cancel')}
        </button>
        <button
          className="App-contact-button"
          onClick={async () => {
            add({
              avatar,
              firstName,
              lastName,
              department,
              emails,
              phones
            });
            sendSuccess(
              firstName + ' ' + lastName + ' ' + getText('contactAdded')
            );
          }}
          disabled={disabledSaveButton()}
        >
          <Icon icon="faSave" /> {' ' + getText('save')}
        </button>
      </div>
    </div>
  );
};

export default NewContact;
