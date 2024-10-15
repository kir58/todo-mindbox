import { ItemType, VisibilityFilter } from '../model/types.ts';

export const getFilteredTodos = (todos: ItemType[], visibilityFilter: VisibilityFilter) =>
  todos.filter((todo) => {
    if (visibilityFilter === 'active') return !todo.isCompleted;
    if (visibilityFilter === 'completed') return todo.isCompleted;
    return true;
  });

export const getNoDataText = (visibilityFilter: VisibilityFilter) => {
  if (visibilityFilter === 'all') {
    return 'Not Items';
  }

  return visibilityFilter === 'active' ? 'Not Active Items' : 'Not Completed Items';
};
