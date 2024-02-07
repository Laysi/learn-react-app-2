import React, { lazy, Suspense } from 'react';

const LazyNotifyPage = lazy(() => import('./NotifyPage'));

const NotifyPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyNotifyPage {...props} />
  </Suspense>
);

export default NotifyPage;
