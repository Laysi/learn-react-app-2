import React, { lazy, Suspense } from 'react';

const LazyLogInPage = lazy(() => import('./LogInPage'));

const LogInPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLogInPage {...props} />
  </Suspense>
);

export default LogInPage;
