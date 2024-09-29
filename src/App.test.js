import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Learning CI/CD on AWS link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learning CI\/CD on AWS for React App using AWS Amplify/i);
  expect(linkElement).toBeInTheDocument();
});
