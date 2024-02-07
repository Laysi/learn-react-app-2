import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PickupPage from './PickupPage';

describe('<PickupPage />', () => {
  test('it should mount', () => {
    render(<PickupPage />);
    
    const pickupPage = screen.getByTestId('PickupPage');

    expect(pickupPage).toBeInTheDocument();
  });
});