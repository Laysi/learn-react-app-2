import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CompletedPage from './CompletedPage';

describe('<CompletedPage />', () => {
  test('it should mount', () => {
    render(<CompletedPage />);
    
    const completedPage = screen.getByTestId('CompletedPage');

    expect(completedPage).toBeInTheDocument();
  });
});