import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductDetailsPage from './ProductDetailsPage';

describe('<ProductDetailsPage />', () => {
  test('it should mount', () => {
    render(<ProductDetailsPage />);
    
    const productDetailsPage = screen.getByTestId('ProductDetailsPage');

    expect(productDetailsPage).toBeInTheDocument();
  });
});