import React, { lazy, Suspense } from 'react';

const LazyShoppingCartPage = lazy(() => import('./ShoppingCartPage'));

const ShoppingCartPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyShoppingCartPage {...props} />
  </Suspense>
);

export default ShoppingCartPage;
