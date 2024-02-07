import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HistoricalOrdersPage from './HistoricalOrdersPage';

describe('<HistoricalOrdersPage />', () => {
  test('it should mount', () => {
    render(<HistoricalOrdersPage />);
    
    const historicalOrdersPage = screen.getByTestId('HistoricalOrdersPage');

    expect(historicalOrdersPage).toBeInTheDocument();
  });
});