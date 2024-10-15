import React from 'react';
import { StyledItem, Text } from './Item.styled.ts';
import { Checkbox } from '../../../../shared/ui';
import { ItemType } from '../../model/types.ts';

interface TodoItemProps {
  data: ItemType;
  toggleTodo: (id: number) => void;
}

export const Item: React.FC<TodoItemProps> = ({ data: { isCompleted, text, id }, toggleTodo }) => (
  <StyledItem>
    <Checkbox
      dataTestId={text}
      checked={isCompleted}
      onChange={() => toggleTodo(id)}
      label={<Text $isChecked={isCompleted}>{text}</Text>}
    />
  </StyledItem>
);
