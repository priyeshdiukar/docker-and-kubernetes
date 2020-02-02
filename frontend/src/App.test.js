import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Test that sigin in link in rendered', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/sign in/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

