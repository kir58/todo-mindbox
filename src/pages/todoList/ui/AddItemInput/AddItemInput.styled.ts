import { styled } from 'styled-components';

export const Arrow = styled.div`
  height: 50px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.palette.grey['600']};
  transform: rotate(90deg);
  padding-bottom: 30px;
`;
