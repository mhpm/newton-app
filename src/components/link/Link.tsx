import styled from 'styled-components';
import { HTMLProps } from 'react';

type Props = {
  children?: string;
} & HTMLProps<HTMLAnchorElement>;

const Container = styled.a`
  font-size: 16px;
  color: #7c7c7c;

  &:hover {
    color: var(--primary-color);
  }
`;

function Link({ rel, href, target, children, className }: Props) {
  return (
    <Container
      className={`link ${className}`}
      rel={rel}
      href={href}
      target={target}>
      {children}
    </Container>
  );
}

export default Link;
