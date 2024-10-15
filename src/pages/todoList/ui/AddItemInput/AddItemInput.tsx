import React, { FormEvent, useState } from 'react';
import { Input } from '../../../../shared/ui';
import { Arrow } from './AddItemInput.styled.ts';

interface TodoInputProps {
  onAddTodo: (text: string) => void;
}

export const AddItemInput: React.FC<TodoInputProps> = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      return;
    }

    onAddTodo(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleAddTodo} data-testid="addForm">
      <Input
        addon={<Arrow>›</Arrow>}
        data-testid="addFormInput"
        placeholder="What needs to be done?"
        value={inputValue}
        onChange={setInputValue}
      />
    </form>
  );
};
