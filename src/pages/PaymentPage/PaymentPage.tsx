import React, { FC } from 'react';
import './PaymentPage.scss';

interface PaymentPageProps {}

const PaymentPage: FC<PaymentPageProps> = () => (
  <div className="PaymentPage" data-testid="PaymentPage">
    PaymentPage Component
  </div>
);

export default PaymentPage;
