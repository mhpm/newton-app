import { HTMLProps } from 'react';
import styled from 'styled-components';

type Props = {
  label: string;
} & HTMLProps<HTMLButtonElement>;

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

  &:hover {
    filter: brightness(1.1);
  }

  &:active {
    filter: brightness(0.95);
  }
`;

const Button = ({ onClick, label, children, className }: Props) => {
  return (
    <Container className={['button', className].join(' ')} onClick={onClick}>
      {label || children}
    </Container>
  );
};

export default Button;
