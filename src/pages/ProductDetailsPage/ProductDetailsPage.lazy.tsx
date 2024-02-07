import React, { lazy, Suspense } from 'react';

const LazyProductDetailsPage = lazy(() => import('./ProductDetailsPage'));

const ProductDetailsPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyProductDetailsPage {...props} />
  </Suspense>
);

export default ProductDetailsPage;
