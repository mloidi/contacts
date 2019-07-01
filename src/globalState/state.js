import React from 'react';

import {
  AuthProvider,
  LanguageProvider,
  AlertProvider,
  ContactProvider
} from '.';

function ProviderComposer({ context, children }) {
  return context.reduceRight(
    (kids, parent) => React.cloneElement(parent, { children: kids }),
    children
  );
}

function ContextProvider({ children }) {
  return (
    <ProviderComposer
      context={[
        <AuthProvider />,
        <LanguageProvider />,
        <AlertProvider />,
        <ContactProvider />
      ]}
    >
      {children}
    </ProviderComposer>
  );
}

export { ContextProvider };
