import { styled } from 'styled-components';

export const StyledItem = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;
  border-bottom: ${({ theme }) => `1px solid ${theme.palette.grey[600]}`};
`;

export const Text = styled.span<{ $isChecked: boolean }>`
  text-decoration: ${({ $isChecked }) => ($isChecked ? 'line-through' : 'none')};
  color: ${({ $isChecked, theme }) => ($isChecked ? theme.palette.grey[600] : 'inherit')};
`;
