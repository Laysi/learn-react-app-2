import React, { lazy, Suspense } from 'react';

const LazyHistoricalOrdersPage = lazy(() => import('./HistoricalOrdersPage'));

const HistoricalOrdersPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyHistoricalOrdersPage {...props} />
  </Suspense>
);

export default HistoricalOrdersPage;
