import { fireEvent, render, screen } from '@testing-library/react';
import { App } from './App.tsx';
import { describe, it, expect } from 'vitest';

const inputText = 'new Task';
describe('App', () => {
  it('renders headline', () => {
    render(<App />);

    // const headline = screen.getByText(/todos/i);
    //
    // expect(headline).toBeDefined();

    const input = screen.getByTestId('addFormInput');
    fireEvent.change(input, { target: { value: inputText } });

    fireEvent.submit(screen.getByTestId('addForm'));

    const addedTask = screen.getByText(inputText);
    expect(addedTask).toBeDefined();
  });
});
