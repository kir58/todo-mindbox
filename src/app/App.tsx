import { theme } from './theme.ts';

import { TodoList } from '../pages/todoList/ui/TodoList.tsx';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './global.styled.ts';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TodoList />
    </ThemeProvider>
  );
};
