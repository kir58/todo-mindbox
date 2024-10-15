import { FC, PropsWithChildren } from 'react';
import { StyledButton } from './styled.ts';

type ButtonProps = PropsWithChildren<{
  onClick: () => void;
  isDisabled?: boolean;
  dataTestId?: string;
  isActive?: boolean;
}>;

export const Button: FC<ButtonProps> = ({
  children,
  dataTestId,
  onClick,
  isDisabled,
  isActive,
}) => {
  return (
    <StyledButton
      $isActive={isActive}
      data-testid={dataTestId}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
