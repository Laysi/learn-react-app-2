import React, { lazy, Suspense } from 'react';

const LazyPickupPage = lazy(() => import('./PickupPage'));

const PickupPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPickupPage {...props} />
  </Suspense>
);

export default PickupPage;
