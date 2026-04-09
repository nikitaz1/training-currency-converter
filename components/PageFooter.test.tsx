import { render, screen } from '@testing-library/react';
import PageFooter from './PageFooter';

describe('PageFooter', () => {
  it('should display the exchange rates update notice', () => {
    render(<PageFooter />);
    expect(screen.getByText('Exchange rates are updated hourly')).toBeInTheDocument();
  });

  it('should display the copyright notice', () => {
    render(<PageFooter />);
    expect(
      screen.getByText('© 2026 Godel Technologies. All rights reserved.')
    ).toBeInTheDocument();
  });

  it('should not display last updated when lastUpdated is not provided', () => {
    render(<PageFooter />);
    expect(screen.queryByText(/Last updated:/)).not.toBeInTheDocument();
  });

  it('should display last updated timestamp when provided', () => {
    const timestamp = new Date('2026-01-01T12:00:00Z').getTime();
    render(<PageFooter lastUpdated={timestamp} />);
    expect(screen.getByText(/Last updated:/)).toBeInTheDocument();
  });
});
