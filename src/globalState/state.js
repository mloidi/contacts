import React from 'react';

import { AuthProvider, LanguageProvider, AlertProvider } from '.';

function ProviderComposer({ context, children }) {
  return context.reduceRight(
    (kids, parent) => React.cloneElement(parent, { children: kids }),
    children
  );
}

function ContextProvider({ children }) {
  return (
    <ProviderComposer
      context={[<AuthProvider />, <LanguageProvider />, <AlertProvider />]}
    >
      {children}
    </ProviderComposer>
  );
}

export { ContextProvider };
