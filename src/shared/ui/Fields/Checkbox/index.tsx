import { InputHTMLAttributes, useId } from 'react';
import { CheckboxContainer } from './styled.ts';

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'checkbox' | 'onChange'> & {
  label?: React.ReactNode;
  onChange: (newValue: boolean) => void;
  dataTestId?: string;
};

export const Checkbox = ({ label, onChange, dataTestId, ...restProps }: InputProps) => {
  const id = useId();

  return (
    <CheckboxContainer>
      <input
        data-testid={dataTestId}
        id={id}
        type="checkbox"
        onChange={(event) => onChange(event.target.checked)}
        {...restProps}
      />
      <label htmlFor={id}>{label}</label>
    </CheckboxContainer>
  );
};
