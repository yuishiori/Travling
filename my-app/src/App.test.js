import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders a stylish header', () => {
  render(<App />);
  const header = screen.getByRole('banner');
  expect(header).toBeInTheDocument();
  expect(header).toHaveStyle(`
    background: linear-gradient(90deg, #1e3c72 0%, #2a5298 100%);
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 2px;
    box-shadow: 0 4px 20px rgba(30,60,114,0.2);
  `);
});