import React from 'react';
import { Item } from './Item/Item.tsx';
import { ItemType, VisibilityFilter } from '../model/types.ts';
import { NoData, StyledList } from './TodoList.styled.ts';
import { getNoDataText } from '../lib/utils.ts';

interface TodoListProps {
  todos: ItemType[];
  toggleTodo: (id: number) => void;
  visibilityFilter: VisibilityFilter;
}

export const List: React.FC<TodoListProps> = ({ todos, toggleTodo, visibilityFilter }) => (
  <StyledList data-testid="list">
    {!todos.length && <NoData>{getNoDataText(visibilityFilter)}</NoData>}
    {todos.map((todo) => (
      <Item key={todo.id} data={todo} toggleTodo={toggleTodo} />
    ))}
  </StyledList>
);
