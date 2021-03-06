import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [languageOption, setLanguageOption] = useState(() => {
    const userLang = navigator.language || navigator.userLanguage;
    return [
      { id: 'es', name: 'ES', selected: false },
      { id: 'en', name: 'EN', selected: false }
    ].map(item => {
      item.selected = item.id === userLang.split('-')[0];
      return item;
    });
  });

  const [texts] = useState([
    {
      id: 'login',
      values: [
        { lang: 'es', value: 'Iniciar' },
        { lang: 'en', value: 'Log in' }
      ]
    },
    {
      id: 'loginTitle',
      values: [
        { lang: 'es', value: 'iniciar sesion' },
        { lang: 'en', value: 'login' }
      ]
    },
    {
      id: 'userName',
      values: [
        { lang: 'es', value: 'Nombre de usuario' },
        { lang: 'en', value: 'User name' }
      ]
    },
    {
      id: 'password',
      values: [
        { lang: 'es', value: 'Contraseña' },
        { lang: 'en', value: 'Password' }
      ]
    },
    {
      id: 'logout',
      values: [{ lang: 'es', value: 'Salir' }, { lang: 'en', value: 'Log Out' }]
    },
    {
      id: 'contactsLogo',
      values: [
        { lang: 'es', value: 'contactos' },
        { lang: 'en', value: "contact's" }
      ]
    },
    {
      id: 'contacts',
      values: [
        { lang: 'es', value: 'contactos' },
        { lang: 'en', value: 'contacts' }
      ]
    },
    {
      id: 'allContacts',
      values: [
        { lang: 'es', value: 'Todos los contactos' },
        { lang: 'en', value: 'All contacts' }
      ]
    },
    {
      id: 'admin',
      values: [
        { lang: 'es', value: 'administrar' },
        { lang: 'en', value: 'admin' }
      ]
    },
    {
      id: 'myContacts',
      values: [
        { lang: 'es', value: 'mis contactos' },
        { lang: 'en', value: 'my contacts' }
      ]
    },
    {
      id: 'new',
      values: [
        { lang: 'es', value: 'Nuevo contacto' },
        { lang: 'en', value: 'New contact' }
      ]
    },
    {
      id: 'view',
      values: [{ lang: 'es', value: 'Ver' }, { lang: 'en', value: 'View' }]
    },
    {
      id: 'edit',
      values: [{ lang: 'es', value: 'Editar' }, { lang: 'en', value: 'Edit' }]
    },
    {
      id: 'save',
      values: [{ lang: 'es', value: 'Guardar' }, { lang: 'en', value: 'Save' }]
    },
    {
      id: 'cancel',
      values: [
        { lang: 'es', value: 'Cancelar' },
        { lang: 'en', value: 'Cancel' }
      ]
    },
    {
      id: 'avatar',
      values: [{ lang: 'es', value: 'Avatar' }, { lang: 'en', value: 'Avatar' }]
    },
    {
      id: 'firstName',
      values: [
        { lang: 'es', value: 'Nombre' },
        { lang: 'en', value: 'First Name' }
      ]
    },
    {
      id: 'lastName',
      values: [
        { lang: 'es', value: 'Apellidos' },
        { lang: 'en', value: 'Last Name' }
      ]
    },
    {
      id: 'department',
      values: [
        { lang: 'es', value: 'Departamento' },
        { lang: 'en', value: 'Department' }
      ]
    },
    {
      id: 'emails',
      values: [
        { lang: 'es', value: 'Correos electronicos' },
        { lang: 'en', value: 'Emails' }
      ]
    },
    {
      id: 'email',
      values: [
        { lang: 'es', value: 'Correo electronico' },
        { lang: 'en', value: 'Email' }
      ]
    },
    {
      id: 'emailType',
      values: [
        { lang: 'es', value: 'Tipo de correo electronico' },
        { lang: 'en', value: 'Email type' }
      ]
    },
    {
      id: 'emailRequired',
      values: [
        { lang: 'es', value: 'Minimo un correo electronico' },
        { lang: 'en', value: 'Minimum one email' }
      ]
    },
    {
      id: 'emailErrorMessage',
      values: [
        { lang: 'es', value: 'Minimo un correo electronico' },
        { lang: 'en', value: 'Minimum one email' }
      ]
    },
    {
      id: 'phones',
      values: [
        { lang: 'es', value: 'Telefonos' },
        { lang: 'en', value: 'Phone numbers' }
      ]
    },
    {
      id: 'phone',
      values: [
        { lang: 'es', value: 'Telefono' },
        { lang: 'en', value: 'Phone number' }
      ]
    },
    {
      id: 'phoneType',
      values: [
        { lang: 'es', value: 'Tipo de telefono' },
        { lang: 'en', value: 'Phone number type' }
      ]
    },
    {
      id: 'phoneRequired',
      values: [
        { lang: 'es', value: 'Minimo un telefono' },
        { lang: 'en', value: 'Minimum one phone' }
      ]
    },
    {
      id: 'phoneErrorMessage',
      values: [
        { lang: 'es', value: 'Minimo un telefono' },
        { lang: 'en', value: 'Minimum one phone' }
      ]
    },
    {
      id: 'contactAdded',
      values: [
        { lang: 'es', value: 'añadido como contacto' },
        { lang: 'en', value: 'contact added' }
      ]
    },
    {
      id: 'contactEdited',
      values: [
        { lang: 'es', value: 'contacto editado' },
        { lang: 'en', value: 'contact edited' }
      ]
    },
    {
      id: 'back',
      values: [{ lang: 'es', value: 'volver' }, { lang: 'en', value: 'back' }]
    },
    {
      id: 'myGroups',
      values: [
        { lang: 'es', value: 'Mis grupos' },
        { lang: 'en', value: 'My Groups' }
      ]
    },
    {
      id: 'newGroup',
      values: [
        { lang: 'es', value: 'Nuevo grupo' },
        { lang: 'en', value: 'New group' }
      ]
    },
    {
      id: 'editGroup',
      values: [
        { lang: 'es', value: 'Editar grupo' },
        { lang: 'en', value: 'Edit group' }
      ]
    },
    {
      id: 'removeGroup',
      values: [
        { lang: 'es', value: 'Borrar grupo' },
        { lang: 'en', value: 'Remove grupo' }
      ]
    },
    {
      id: 'saveGroup',
      values: [
        { lang: 'es', value: 'Guardar grupo' },
        { lang: 'en', value: 'Save group' }
      ]
    }
  ]);

  const getText = id => {
    const language = languageOption.find(item => {
      return item.selected;
    });
    const text = texts.find(item => {
      return item.id === id;
    });
    const value = text.values.find(item => {
      return item.lang === language.id;
    });
    return value.value;
  };

  const getSelectedLanguage = () => {
    return languageOption.find(item => {
      return item.selected;
    }).id;
  };

  return (
    <LanguageContext.Provider
      value={{
        languageOption,
        setLanguageOption,
        getText,
        getSelectedLanguage
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
