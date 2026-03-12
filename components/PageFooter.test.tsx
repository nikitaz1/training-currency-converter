import { render, screen } from '@testing-library/react';
import PageFooter from './PageFooter';

describe('PageFooter', () => {
  it('should render exchange rates update message', () => {
    render(<PageFooter />);
    expect(screen.getByText('Exchange rates are updated hourly')).toBeInTheDocument();
  });

  it('should render copyright notice with current year', () => {
    render(<PageFooter />);
    const year = new Date().getFullYear();
    expect(
      screen.getByText(`© ${year} Godel Technologies. All rights reserved.`)
    ).toBeInTheDocument();
  });

  it('should not render last updated when lastUpdated is not provided', () => {
    render(<PageFooter />);
    expect(screen.queryByText(/Last updated:/)).not.toBeInTheDocument();
  });

  it('should render last updated timestamp when lastUpdated is provided', () => {
    const timestamp = new Date('2026-01-01T12:00:00Z').getTime();
    render(<PageFooter lastUpdated={timestamp} />);
    expect(screen.getByText(/Last updated:/)).toBeInTheDocument();
  });
});
