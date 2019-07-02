import React, { createContext, useState } from 'react';

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState(() => {
    return [
      {
        id: 1,
        avatar: 'https://res.cloudinary.com/mloidi/image/upload/s--HABuvk5u--/v1562087235/contacts/IMG_0014_uvxmfi.jpg',
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
  const [showViewContact, setShowViewContact] = useState(false);
  const [showEditContact, setShowEditContact] = useState(false);

  const [contact, setContact] = useState(null);

  const getById = id => {
    return contacts.find(contact => {
      return contact.id === id;
    });
  };

  const add = contactToAdd => {
    const contactsCopy = [...contacts];
    contactToAdd.id = contactsCopy.length + 1;
    contactsCopy.push(contactToAdd);
    setContacts(contactsCopy);
    setShowNewContact(false);
  };

  const edit = contactToEdit => {
    const contactsCopy = [...contacts];
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
