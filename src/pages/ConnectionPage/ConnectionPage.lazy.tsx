import React, { lazy, Suspense } from 'react';

const LazyConnectionPage = lazy(() => import('./ConnectionPage'));

const ConnectionPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyConnectionPage {...props} />
  </Suspense>
);

export default ConnectionPage;
