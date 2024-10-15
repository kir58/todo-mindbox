import { screen, fireEvent, waitFor } from '@testing-library/react';
import { TodoList } from '../TodoList';
import { test, expect, describe } from 'vitest';
import { renderWithProviders } from '../../../../../tests/utils.tsx';

const tasks = ['task1', 'task2', 'task3'];
const task1 = tasks[0];
const task2 = tasks[1];

describe('todo list', () => {
  test('add todo item', () => {
    renderWithProviders(<TodoList />);

    const input = screen.getByTestId('addFormInput');

    fireEvent.change(input, { target: { value: task1 } });

    fireEvent.submit(screen.getByTestId('addForm'));

    const addedTask = screen.getByText(task1);
    expect(addedTask).toBeDefined();
  });

  test('clear completed items', async () => {
    const { queryByTestId } = renderWithProviders(<TodoList />);

    const input = screen.getByTestId('addFormInput');

    tasks.forEach((task) => {
      fireEvent.change(input, { target: { value: task } });
      fireEvent.submit(screen.getByTestId('addForm'));
    });

    fireEvent.click(screen.getByTestId(task1));

    const clearCompletedBtn = screen.getByTestId('clearButton');
    fireEvent.click(clearCompletedBtn);

    await waitFor(() => {
      expect(queryByTestId(task1)).toBeNull();
    });
  });

  test('show all items', async () => {
    const { queryByTestId } = renderWithProviders(<TodoList />);
    const input = screen.getByTestId('addFormInput');

    tasks.forEach((task) => {
      fireEvent.change(input, { target: { value: task } });
      fireEvent.submit(screen.getByTestId('addForm'));
    });

    fireEvent.click(screen.getByTestId(task1));
    const activeButton = screen.getByTestId('activeButton');

    fireEvent.click(activeButton);
    await waitFor(() => {
      expect(queryByTestId(task1)).toBeNull();
    });

    const allButton = screen.getByTestId('allButton');
    fireEvent.click(allButton);

    await waitFor(() => {
      expect(queryByTestId(task1)).toBeDefined();
      expect(queryByTestId(task2)).toBeDefined();
    });
  });

  test('show active items', async () => {
    const { queryByTestId } = renderWithProviders(<TodoList />);
    const input = screen.getByTestId('addFormInput');

    tasks.forEach((task) => {
      fireEvent.change(input, { target: { value: task } });
      fireEvent.submit(screen.getByTestId('addForm'));
    });

    fireEvent.click(screen.getByTestId(task1));

    const activeButton = screen.getByTestId('activeButton');
    fireEvent.click(activeButton);

    await waitFor(() => {
      expect(queryByTestId(task1)).toBeNull();
      expect(queryByTestId(task2)).toBeDefined();
    });
  });

  test('show completed items', async () => {
    const { queryByTestId } = renderWithProviders(<TodoList />);
    const input = screen.getByTestId('addFormInput');

    tasks.forEach((task) => {
      fireEvent.change(input, { target: { value: task } });
      fireEvent.submit(screen.getByTestId('addForm'));
    });

    fireEvent.click(screen.getByTestId(task1));
    const completedButton = screen.getByTestId('completedButton');

    fireEvent.click(completedButton);

    await waitFor(() => {
      expect(queryByTestId(task1)).toBeDefined();

      expect(queryByTestId(task2)).toBeNull();
    });
  });
});
