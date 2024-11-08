import { render, screen } from '@testing-library/react';  // No need to import act here
import { act } from 'react';  // Import act directly from 'react' now
import App from './App';

test('example test', async () => {
  act(() => {  // No longer deprecated
    render(<App />);
  });
  const headerElement = screen.getByText(/Economy Haircuts/i);
  expect(headerElement).toBeInTheDocument();
});
