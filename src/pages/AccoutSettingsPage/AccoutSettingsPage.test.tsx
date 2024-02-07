import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AccoutSettingsPage from './AccoutSettingsPage';

describe('<AccoutSettingsPage />', () => {
  test('it should mount', () => {
    render(<AccoutSettingsPage />);
    
    const accoutSettingsPage = screen.getByTestId('AccoutSettingsPage');

    expect(accoutSettingsPage).toBeInTheDocument();
  });
});