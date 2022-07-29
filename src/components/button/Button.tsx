import { HTMLProps } from 'react';
import styled from 'styled-components';

interface Props extends HTMLProps<HTMLButtonElement> {
  label: string;
  classes?: string;
}

const Container = styled.button`
  width: auto;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 30px;
  background-color: var(--primary-color);
  color: white;
  font-weight: 500;
  font-size: 1rem;
  box-shadow: 0px 0px 10px var(--primary-color);

  &:active {
    background-color: #0067d5;
  }
`;

const Button = ({ onClick, label, classes }: Props) => {
  return (
    <Container className={['button', classes].join(' ')} onClick={onClick}>
      {label}
    </Container>
  );
};

export default Button;
