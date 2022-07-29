import styled from 'styled-components';
import { HTMLProps } from 'react';

type Props = {
  children?: string;
} & HTMLProps<HTMLAnchorElement>;

const Container = styled.a`
  font-size: 16px;
  color: #7c7c7c;
  &:hover {
    cursor: pointer;
  }
`;

function Link({ rel, href, target, children }: Props) {
  return (
    <Container rel={rel} href={href} target={target}>
      {children}
    </Container>
  );
}

export default Link;
