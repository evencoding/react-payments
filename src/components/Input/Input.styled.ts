import styled from 'styled-components';
import { InputProps } from '../../types/props';

const InputWidth = {
  xl: '100%',
  l: '20%',
  m: '80px',
  s: '35px',
  xs: '45px',
};

export const Input = styled.input<InputProps>`
  width: ${(props) => InputWidth[props.width]};
  height: 45px;

  background-color: #e5e5e5;

  border-radius: 10px;
  border: none;

  font-weight: 600;
  font-size: ${(props) => (props.type === 'password' ? '24px' : '18px')};
  letter-spacing: 2px;
  text-align: ${(props) => props.center && 'center'};
`;