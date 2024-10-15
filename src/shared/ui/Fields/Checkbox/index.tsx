import { InputHTMLAttributes, useId } from 'react';
import { CheckboxContainer } from './styled.ts';

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'checkbox' | 'onChange'> & {
  label?: React.ReactNode;
  onChange: (newValue: boolean) => void;
};

export const Checkbox = ({ label, onChange, ...restProps }: InputProps) => {
  const id = useId();

  return (
    <CheckboxContainer>
      <input
        id={id}
        type="checkbox"
        onChange={(event) => onChange(event.target.checked)}
        {...restProps}
      />
      <label htmlFor={id}>{label}</label>
    </CheckboxContainer>
  );
};
