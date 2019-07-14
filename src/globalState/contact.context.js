import React, { createContext, useState, useEffect } from 'react';

import { ContactService } from '../service/contact.service';

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState();

  useEffect(() => {
    if (!contacts) {
      ContactService.get().then(response => {
        setContacts(response);
      });
    }
  }, [contacts]);

  const [showNewContact, setShowNewContact] = useState(false);
  const [showViewContact, setShowViewContact] = useState(false);
  const [showEditContact, setShowEditContact] = useState(false);

  const [contact, setContact] = useState(null);

  const getById = id => {
    return contacts.find(contact => {
      return contact.id === id;
    });
  };

  const load = () => {
    ContactService.get().then(response => {
      setContacts(response);
    });
  };

  const add = async contactToAdd => {
    const contactsCopy = [...contacts];
    contactToAdd.id = contactsCopy.length + 1;
    contactsCopy.push(contactToAdd);
    await ContactService.save(contactToAdd, true);
    setContacts(contactsCopy);
    setShowNewContact(false);
  };

  const edit = async contactToEdit => {
    const contactsCopy = [...contacts];
    await ContactService.save(contactToEdit, false);
    setContacts(
      contactsCopy.map(item => {
        if (item.id === contactToEdit.id) {
          item = { ...contactToEdit };
        }
        return item;
      })
    );
    setShowEditContact(false);
  };

  const editContact = contact => {
    setContact(contact);
    setShowEditContact(true);
  };

  const backEditContact = () => {
    setContact(null);
    setShowEditContact(false);
  };

  const viewContact = contact => {
    setContact(contact);
    setShowViewContact(true);
  };

  const backViewContact = () => {
    setContact(null);
    setShowViewContact(false);
  };

  return (
    <ContactContext.Provider
      value={{
        contacts,
        setContacts,
        load,
        contact,
        getById,
        add,
        showNewContact,
        setShowNewContact,
        showViewContact,
        viewContact,
        backViewContact,
        edit,
        showEditContact,
        editContact,
        backEditContact
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
