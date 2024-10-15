import { styled, css } from 'styled-components';

const borderStyle = css`
  border: ${({ theme }) => `1px solid ${theme.palette.primary.main}`};
  border-radius: 4px;
`;
export const StyledButton = styled.button<{ $isActive?: boolean }>`
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
    opacity: 0.8;
  }

  &:active {
    ${borderStyle};
  }
  &:disabled {
    cursor: not-allowed;
  }
  ${({ $isActive }) =>
    $isActive &&
    css`
      ${borderStyle};
    `}
`;
