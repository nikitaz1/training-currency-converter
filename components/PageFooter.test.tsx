import { render, screen } from '@testing-library/react';
import PageFooter from './PageFooter';

describe('PageFooter', () => {
  it('should display the copyright notice', () => {
    render(<PageFooter />);
    expect(
      screen.getByText('© 2026 Godel Technologies. All rights reserved.')
    ).toBeInTheDocument();
  });

  it('should display exchange rates info', () => {
    render(<PageFooter />);
    expect(screen.getByText('Exchange rates are updated hourly')).toBeInTheDocument();
  });

  it('should display last updated when provided', () => {
    const timestamp = new Date('2026-01-01T12:00:00').getTime();
    render(<PageFooter lastUpdated={timestamp} />);
    expect(screen.getByText(/Last updated:/)).toBeInTheDocument();
  });

  it('should not display last updated when not provided', () => {
    render(<PageFooter />);
    expect(screen.queryByText(/Last updated:/)).not.toBeInTheDocument();
  });
});
