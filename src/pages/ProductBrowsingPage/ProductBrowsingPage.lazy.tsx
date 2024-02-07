import React, { lazy, Suspense } from 'react';

const LazyProductBrowsingPage = lazy(() => import('./ProductBrowsingPage'));

const ProductBrowsingPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyProductBrowsingPage {...props} />
  </Suspense>
);

export default ProductBrowsingPage;
