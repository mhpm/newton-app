import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HTMLProps } from 'react';

type Props = {
  to: string;
  children?: string;
} & HTMLProps<HTMLAnchorElement>;

const Container = styled(Link)`
  font-size: 16px;
  color: #7c7c7c;
  text-decoration: underline;
  width: fit-content;

  &:hover {
    color: var(--primary-color);
  }
`;

function LinkRouter({ to, className, children }: Props) {
  return (
    <Container className={`link-router ${className}`} to={to}>
      {children}
    </Container>
  );
}

export default LinkRouter;
