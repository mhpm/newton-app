import { HTMLProps } from 'react';
import { Container } from './Button.styles';

type Props = {
  label?: string;
} & HTMLProps<HTMLButtonElement>;

const Button = ({ onClick, label, className, children }: Props) => {
  return (
    <Container className={['button', className].join(' ')} onClick={onClick}>
      {label || children}
    </Container>
  );
};

export default Button;
