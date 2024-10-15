import { FC, PropsWithChildren } from 'react';
import { StyledButton } from './styled.ts';

type ButtonProps = PropsWithChildren<{
  onClick: () => void;
  disabled?: boolean;
  dataTestId?: string;
}>;

export const Button: FC<ButtonProps> = ({ children, dataTestId, onClick, disabled }) => {
  return (
    <StyledButton data-testid={dataTestId} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
