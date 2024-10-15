import { ItemType, VisibilityFilter } from '../model/types.ts';

export const getFilteredTodos = (todos: ItemType[], visibilityFilter: VisibilityFilter) =>
  todos.filter((todo) => {
    if (visibilityFilter === 'active') return !todo.isCompleted;
    if (visibilityFilter === 'completed') return todo.isCompleted;
    return true;
  });
