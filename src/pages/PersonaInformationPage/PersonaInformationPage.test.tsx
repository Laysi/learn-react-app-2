import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PersonaInformationPage from './PersonaInformationPage';

describe('<PersonaInformationPage />', () => {
  test('it should mount', () => {
    render(<PersonaInformationPage />);
    
    const personaInformationPage = screen.getByTestId('PersonaInformationPage');

    expect(personaInformationPage).toBeInTheDocument();
  });
});