import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LogInPage from './LogInPage';

describe('<LogInPage />', () => {
  test('it should mount', () => {
    render(<LogInPage />);
    
    const logInPage = screen.getByTestId('LogInPage');

    expect(logInPage).toBeInTheDocument();
  });
});