import React, { useContext, useState } from 'react';

import { LanguageContext } from '../../globalState';
import Icon from '../common/Icon';
import FileDropzone from '../common/FileDropzone';
import { ImageService } from '../../service/image.service';

const NewContact = ({ save, cancel }) => {
  const { getText } = useContext(LanguageContext);

  const [avatar, setAvatar] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [department, setDepartment] = useState('');
  const [emails, setEmails] = useState([]);
  const [email, setEmail] = useState('');
  const [phones, setPhones] = useState([]);
  const [phone, setPhone] = useState('');

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
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'phone') {
      setPhone(value);
    }
  };

  const uploadFile = async file => {
    const response = await ImageService.uploadFile(file);
    setAvatar(await response);
  };

  return (
    <React.Fragment>
      <div className="App-contact-new">
        <div>
          <div className="App-contact-new-field">
            <label className="App-contact-new-label">{getText('avatar')}</label>
            <FileDropzone
              type="file"
              id="file"
              name="file"
              uploadFile={uploadFile}
              avatar={avatar}
            />
          </div>
        </div>
        <div>
          <div className="App-contact-new-field">
            <label>{getText('firstName')}</label>
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
            <label>{getText('lastName')}</label>
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
            <label>{getText('department')}</label>
            <input
              type="text"
              className="App-input-text"
              id="department"
              name="department"
              value={department}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="App-contact-new-field-list">
          <label className="App-contact-new-field-list-label App-contact-new-field-list-label-email">
            {getText('emails')}
          </label>
          <div className="App-contact-new-field-list-row">
            <input
              type="email"
              className="App-input-text"
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            <input
              type="email"
              className="App-input-text"
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            <button
              className="App-contact-new-button"
              onClick={() => {
                const emailsCopy = [...emails];
                const id = emailsCopy.length + 1;
                emailsCopy.push({ id, type: 'work', email });
                setEmail('');
                setEmails(emailsCopy);
              }}
            >
              <Icon icon="faPlus" />
            </button>
          </div>
          {emails.map(item => (
            <div>
              {item.type} - {item.email}
            </div>
          ))}
        </div>
        <div className="App-contact-new-field-list">
          <label className="App-contact-new-field-list-label App-contact-new-field-list-label-phone">
            {getText('phones')}
          </label>
          <div className="App-contact-new-field-list-row">
            <input
              type="text"
              className="App-input-text"
              id="phone"
              name="phone"
              value={phone}
              onChange={handleInputChange}
            />
            <input
              type="text"
              className="App-input-text"
              id="phone"
              name="phone"
              value={phone}
              onChange={handleInputChange}
            />
            <button
              className="App-contact-new-button"
              onClick={() => {
                const phonesCopy = [...phones];
                phonesCopy.push(phone);
                setPhone('');
                setPhones(phonesCopy);
              }}
            >
              <Icon icon="faPlus" />
            </button>
          </div>
        </div>
      </div>
      <div className="App-contact-new-buttons">
        <button
          className="App-button"
          onClick={() => {
            cancel();
          }}
        >
          <Icon icon="faTimes" /> {' ' + getText('cancel')}
        </button>
        <button
          className="App-button"
          onClick={async () => {
            const NewContact = {
              avatar,
              firstName,
              lastName,
              department,
              emails: [
                { id: 1, type: 'home', email: 'home@ddd.com' },
                { id: 2, type: 'work', email: 'work@ddd.com' }
              ],
              phones: [{ id: 1, type: 'work', phoneNumber: '444444444' }]
            };
            save(NewContact);
          }}
        >
          <Icon icon="faSave" /> {' ' + getText('save')}
        </button>
      </div>
    </React.Fragment>
  );
};

export default NewContact;
