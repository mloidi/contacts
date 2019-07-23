import React from 'react';

import {
  AuthProvider,
  LanguageProvider,
  AlertProvider,
  ContactProvider,
  LoadingProvider,
  GroupProvider
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
        <ContactProvider />,
        <LoadingProvider />,
        <GroupProvider />
      ]}
    >
      {children}
    </ProviderComposer>
  );
}

export { ContextProvider };
