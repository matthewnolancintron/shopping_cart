import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

/**
 * Make sure to test your app thoroughly
 *  using the React Testing Library. 
 * Take care that you don’t 
 * directly test react-router-dom, 
 * since it is an external library and the 
 * developers working on it must have tested 
 * the library already.
 * 
 * I don't know what to test so for now I'm 
 * just leaving this as is.
 */