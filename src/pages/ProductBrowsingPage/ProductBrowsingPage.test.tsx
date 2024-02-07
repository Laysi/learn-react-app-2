import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductBrowsingPage from './ProductBrowsingPage';

describe('<ProductBrowsingPage />', () => {
  test('it should mount', () => {
    render(<ProductBrowsingPage />);
    
    const productBrowsingPage = screen.getByTestId('ProductBrowsingPage');

    expect(productBrowsingPage).toBeInTheDocument();
  });
});