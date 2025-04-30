import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('notes-md')).toBeInTheDocument();
  });

  it('displays the default markdown in the preview', () => {
    render(<App />);
    expect(screen.getByText('Hello, Markdown!')).toBeInTheDocument();
  });

  it('updates the preview when editing the markdown', () => {
    render(<App />);
    
    // Get the textarea
    const textarea = screen.getByRole('textbox');
    
    // Change the content
    fireEvent.change(textarea, { target: { value: '# Test Heading\n\nThis is a test paragraph.' } });
    
    // Check that the preview updates
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
    expect(screen.getByText('This is a test paragraph.')).toBeInTheDocument();
  });
});