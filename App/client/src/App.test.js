//==============================================================================================================
// FileName: App.test.js
// Date: 13 March, 2021
// Description: This file contains the tests for the web application 
// Author: Abdullah Najjar
//==============================================================================================================

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
