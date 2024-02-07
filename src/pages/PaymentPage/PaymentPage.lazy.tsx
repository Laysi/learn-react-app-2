import React, { lazy, Suspense } from 'react';

const LazyPaymentPage = lazy(() => import('./PaymentPage'));

const PaymentPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPaymentPage {...props} />
  </Suspense>
);

export default PaymentPage;
