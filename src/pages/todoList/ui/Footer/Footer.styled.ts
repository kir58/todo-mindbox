import { styled } from 'styled-components';

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const CounterText = styled.div<{ $isVisible: boolean }>`
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
  color: ${({ theme }) => theme.palette.secondary.main};
`;
