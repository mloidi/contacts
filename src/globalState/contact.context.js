import React, { createContext, useState } from 'react';

import { ContactService } from '../service/contact.service';

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState();
  const [allContacts, setAllContacts] = useState();

  const [showNewContact, setShowNewContact] = useState(false);
  const [showViewContact, setShowViewContact] = useState(false);
  const [showEditContact, setShowEditContact] = useState(false);

  const [contact, setContact] = useState(null);

  const getById = id => {
    return contacts.find(contact => {
      return contact.id === id;
    });
  };

  const loadContacts = async () => {
    setAllContacts(await ContactService.get());
    setContacts(allContacts);
  };

  const unloadContacts = async () => {
    return new Promise((resolve, reject) => {
      setAllContacts(null);
      setContacts(null);
      setShowNewContact(false);
      setShowViewContact(false);
      setShowEditContact(false);
      setContact(null);
      resolve(true);
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

  const filterContacts = contactsToShow => {
    if (contactsToShow) {
      setContacts(contactsToShow);
    } else {
      setContacts(allContacts);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        contacts,
        setContacts,
        loadContacts,
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
        backEditContact,
        filterContacts,
        unloadContacts
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
