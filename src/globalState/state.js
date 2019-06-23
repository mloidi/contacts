import React from 'react';

import { AuthProvider, LanguageProvider } from '.';

function ProviderComposer({ context, children }) {
  return context.reduceRight(
    (kids, parent) => React.cloneElement(parent, { children: kids }),
    children
  );
}

function ContextProvider({ children }) {
  return (
    <ProviderComposer context={[<AuthProvider />, <LanguageProvider/>]}>{children}</ProviderComposer>
  );
}

export { ContextProvider };
