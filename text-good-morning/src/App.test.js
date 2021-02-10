import { render, screen } from '@testing-library/react';
import App from './App';

describe('app loads properly', () => {
  it('renders app component without crashing (smoke test)', () => {
    render(<App />);
  });

  it('renders learn react link with proper class', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveClass('App-link');
  });

  it('renders the logo', () => {
    render(<App />);
    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });

  it('has a button with text button1', () => {
    render(<App />);
    expect(screen.getByText('button1')).toBeInTheDocument();
  });
});

