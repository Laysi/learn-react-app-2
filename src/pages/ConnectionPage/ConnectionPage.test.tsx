import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ConnectionPage from './ConnectionPage';

describe('<ConnectionPage />', () => {
  test('it should mount', () => {
    render(<ConnectionPage />);
    
    const connectionPage = screen.getByTestId('ConnectionPage');

    expect(connectionPage).toBeInTheDocument();
  });
});