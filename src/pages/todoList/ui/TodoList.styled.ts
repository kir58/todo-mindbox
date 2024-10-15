import { styled } from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.palette.grey['700']};
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const BottomStyled = styled.div<{ $percentWidth: number }>`
  height: 10px;
  background: ${({ theme }) => theme.palette.grey['900']};
  width: ${({ $percentWidth }) => `${$percentWidth}%`};
  box-shadow: ${({ theme }) => `5px 5px 10px ${theme.palette.grey['500']};`};
  border-top: none;
`;

export const WrapList = styled.div`
  background: ${({ theme }) => theme.palette.grey['900']};
  width: 50%;
  height: fit-content;
  overflow: hidden;
  max-height: 90vh;
  margin-top: 20px;
  box-shadow: ${({ theme }) => `5px 5px 10px ${theme.palette.grey['500']};`};
`;

export const Title = styled.h3`
  font-size: 4rem;
  font-weight: 100;
  color: ${({ theme }) => theme.palette.primary.light};
  text-align: center;
  margin: 0;
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  max-height: 60vh;
  overflow-y: auto;
`;

export const NoData = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.palette.secondary.main};
`;
