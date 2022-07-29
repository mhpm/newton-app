import styled from 'styled-components';
import { Link } from 'react-router-dom';

type Props = {
  children?: string;
  to: string;
};

const Container = styled(Link)`
  font-size: 16px;
  color: #7c7c7c;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function LinkRouter({ to, children }: Props) {
  return <Container to={to}>{children}</Container>;
}

export default LinkRouter;
