import { render, screen } from '@testing-library/react';
import App from '../../App';
import { BrowserRouter as Router } from "react-router-dom";

test('renders dashboard', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const headerTitle = screen.getByText(/Impressions/);
  expect(headerTitle).toBeInTheDocument();
});