import { styled } from 'styled-components';

export const Container = styled.div`
  border-bottom: ${({ theme }) => `1px solid ${theme.palette.grey[600]}`};
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 50px;
`;

export const StyledInput = styled.input`
  border: none;
  padding: 10px;
  font-size: 16px;
  color: #333;
  width: 100%;

  font-style: italic;
  &:focus {
    outline: none;
    border: none;
  }
`;
