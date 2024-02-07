import React, { lazy, Suspense } from 'react';

const LazyAccoutSettingsPage = lazy(() => import('./AccoutSettingsPage'));

const AccoutSettingsPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyAccoutSettingsPage {...props} />
  </Suspense>
);

export default AccoutSettingsPage;
