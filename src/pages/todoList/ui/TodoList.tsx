import { useState } from 'react';
import { AddItemInput } from './AddItemInput/AddItemInput.tsx';
import { List } from './List.tsx';
import { BottomStyled, Container, Title, WrapList } from './TodoList.styled.ts';
import { ItemType, VisibilityFilter } from '../model/types.ts';
import { Footer } from './Footer/Footer.tsx';
import { getFilteredTodos } from '../lib/utils.ts';

export const TodoList = () => {
  const [todos, setTodos] = useState<ItemType[]>([]);
  const [visibilityFilter, setVisibilityFilter] = useState<VisibilityFilter>('all');

  const handleAddTodo = (text: string) => {
    setTodos((prevState) => [...prevState, { id: Date.now(), text, isCompleted: false }]);
  };

  const handleToggleTodo = (id: number) => {
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
  };

  const handleClearCompleted = () => {
    setTodos((prevState) => prevState.filter((todo) => !todo.isCompleted));
  };

  const filteredTodos = getFilteredTodos(todos, visibilityFilter);

  return (
    <Container>
      <Title>todos</Title>
      <WrapList>
        <AddItemInput onAddTodo={handleAddTodo} />
        <List
          todos={filteredTodos}
          toggleTodo={handleToggleTodo}
          visibilityFilter={visibilityFilter}
        />
        <Footer
          todos={todos}
          onSetVisibilityFilter={setVisibilityFilter}
          visibilityFilter={visibilityFilter}
          onClearCompleted={handleClearCompleted}
        />
      </WrapList>
      <BottomStyled $percentWidth={48} />
      <BottomStyled $percentWidth={46} />
    </Container>
  );
};
