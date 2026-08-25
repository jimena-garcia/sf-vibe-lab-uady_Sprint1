import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders local account data', () => {
  render(<App />);
  expect(screen.getByText('Northstar Logistics')).toBeInTheDocument();
  expect(screen.getByText('Transportation')).toBeInTheDocument();
  expect(screen.getByText('+1 (415) 555-0142')).toBeInTheDocument();
});

test('filters accounts by name and shows an empty state', () => {
  render(<App />);
  const searchInput = screen.getByRole('searchbox', { name: /search accounts/i });

  userEvent.type(searchInput, 'brightline');
  expect(screen.getByText('Brightline Health')).toBeInTheDocument();
  expect(screen.queryByText('Northstar Logistics')).not.toBeInTheDocument();

  userEvent.clear(searchInput);
  userEvent.type(searchInput, 'does not exist');
  expect(screen.getByRole('status')).toHaveTextContent('No accounts found');
});
