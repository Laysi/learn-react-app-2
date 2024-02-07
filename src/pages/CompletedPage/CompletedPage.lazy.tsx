import React, { lazy, Suspense } from 'react';

const LazyCompletedPage = lazy(() => import('./CompletedPage'));

const CompletedPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCompletedPage {...props} />
  </Suspense>
);

export default CompletedPage;
