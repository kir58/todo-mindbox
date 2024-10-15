import { styled } from 'styled-components';

export const CheckboxContainer = styled.div`
  label {
    position: relative;
    display: flex;
    align-items: center;
  }

  input[type='checkbox'] {
    padding: 0;
    height: initial;
    width: initial;
    margin-bottom: 0;
    display: none;
    cursor: pointer;
  }

  label::before {
    content: '';
    width: 24px;
    height: 24px;
    border: 2px solid #ccc;
    /* Серая окружность */
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer;
    position: relative;
    display: inline-block;
  }

  input:checked + label::after {
    content: '';
    display: block;
    position: absolute;
    top: 4px;
    left: 10px;
    width: 6px;
    height: 14px;
    border: solid #0079bf;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  input:checked + label {
    opacity: 0.9;
  }
`;
