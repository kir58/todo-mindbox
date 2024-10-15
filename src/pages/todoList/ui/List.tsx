import React from 'react';
import { Item } from './Item/Item.tsx';
import { ItemType } from '../model/types.ts';
import { StyledList } from './TodoList.styled.ts';

interface TodoListProps {
  todos: ItemType[];
  toggleTodo: (id: number) => void;
}

export const List: React.FC<TodoListProps> = ({ todos, toggleTodo }) => (
  <StyledList>
    {todos.map((todo) => (
      <Item key={todo.id} data={todo} toggleTodo={toggleTodo} />
    ))}
  </StyledList>
);
