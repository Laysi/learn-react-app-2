import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StorePage from './StorePage';

describe('<StorePage />', () => {
  test('it should mount', () => {
    render(<StorePage />);
    
    const storePage = screen.getByTestId('StorePage');

    expect(storePage).toBeInTheDocument();
  });
});