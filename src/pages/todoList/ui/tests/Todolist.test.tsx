import { screen, fireEvent } from '@testing-library/react';
import { TodoList } from '../TodoList';
import { test, expect, describe } from 'vitest';
import { renderWithProviders } from '../../../../../tests/utils.tsx';

const inputText = 'New Task';

describe('app tests', () => {
  test('adds a todo item', () => {
    renderWithProviders(<TodoList />);

    const input = screen.getByTestId('addFormInput');
    fireEvent.change(input, { target: { value: inputText } });

    fireEvent.submit(screen.getByTestId('addForm'));
    const addedTask = screen.getByText(inputText);
    expect(addedTask).toBeDefined();
  });

  test('clear completed items', () => {
    renderWithProviders(<TodoList />);

    const input = screen.getByTestId('addFormInput');
    fireEvent.change(input, { target: { value: inputText } });
    fireEvent.submit(screen.getByTestId('addForm'));

    fireEvent.change(input, { target: { value: 'second task' } });
    fireEvent.submit(screen.getByTestId('addForm'));

    const taskForCompleted = screen.getByText('second task');
    taskForCompleted?.dispatchEvent(new MouseEvent('click'));

    const clearCompletedBtn = screen.getByTestId('clearButton');
    fireEvent.click(clearCompletedBtn);

    expect(taskForCompleted).toBeUndefined();
  });
});
