import React from 'react';
import { render, screen } from '@testing-library/react';
import Products1 from './products1.js';


test('renders hello world', () => {
  render(<Products1 />);
  const headingElement = screen.getByText(/Products Page/i);
  expect(headingElement).toBeInTheDocument();
});
