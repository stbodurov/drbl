import { render, screen } from "@testing-library/react";
import App from "../../App";
import { BrowserRouter as Router } from "react-router-dom";

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: jest.fn().mockReturnValue(null),
    unobserve: jest.fn().mockReturnValue(null),
    disconnect: jest.fn().mockReturnValue(null),
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

test("renders dashboard", () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const headerTitle = screen.getByText(/Impressions/);
  expect(headerTitle).toBeInTheDocument();
});
