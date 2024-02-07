import React, { lazy, Suspense } from 'react';

const LazyPersonaInformationPage = lazy(() => import('./PersonaInformationPage'));

const PersonaInformationPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPersonaInformationPage {...props} />
  </Suspense>
);

export default PersonaInformationPage;
