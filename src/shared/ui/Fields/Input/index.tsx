import { InputHTMLAttributes, ReactNode } from 'react';
import { Container, StyledInput } from './styled.ts';

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> & {
  onChange: (newValue: string) => void;
  addon?: ReactNode;
};

export const Input = ({ onChange, addon, ...restProps }: InputProps) => {
  return (
    <Container>
      {addon}
      <StyledInput type="text" {...restProps} onChange={(e) => onChange(e.target.value)} />
    </Container>
  );
};
