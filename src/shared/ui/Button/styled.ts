import { styled, css } from 'styled-components';

const borderStyle = css`
  border: ${({ theme }) => `1px solid ${theme.palette.primary.main}`};
  border-radius: 4px;
`;
export const StyledButton = styled.button`
  padding: 4px 8px;
  border: 1px solid transparent;
  background-color: transparent;
  color: ${({ theme }) => theme.palette.secondary.main};
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;
  &:hover {
    ${borderStyle};
  }
  &:focus {
    ${borderStyle};
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
