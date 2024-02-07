import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NotifyPage from './NotifyPage';

describe('<NotifyPage />', () => {
  test('it should mount', () => {
    render(<NotifyPage />);
    
    const notifyPage = screen.getByTestId('NotifyPage');

    expect(notifyPage).toBeInTheDocument();
  });
});