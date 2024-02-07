import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PaymentPage from './PaymentPage';

describe('<PaymentPage />', () => {
  test('it should mount', () => {
    render(<PaymentPage />);
    
    const paymentPage = screen.getByTestId('PaymentPage');

    expect(paymentPage).toBeInTheDocument();
  });
});