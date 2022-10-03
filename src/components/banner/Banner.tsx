import { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  children?: ReactNode;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 450px;
  width: 200px;
  border-radius: 7px;
  background-color: #282828;
  overflow: hidden;
  color: white;
`;

const Image = styled.img``;

const Title = styled.div`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: uppercase;
  font-family: sans-serif;
  margin-top: 10px;
`;

const Desc = styled.p`
  text-align: start;
  font-size: 16px;
  font-weight: 400;
  font-family: sans-serif;
  margin: 15px;
  color: #7c7c7c;
  overflow: hidden;
`;

function Banner({ children, className }: Props) {
  return (
    <Container className={['banner', className].join(' ')}>
      {children}
    </Container>
  );
}

Banner.Image = function BannerImage({
  src,
  alt,
  className,
}: { src: string; alt: string } & Props) {
  return (
    <Image
      src={src}
      alt={alt}
      className={['banner_image', className].join(' ')}
    />
  );
};

Banner.Title = function ({ title, className }: { title: string } & Props) {
  return (
    <Title className={['banner_title', className].join(' ')}>{title}</Title>
  );
};

Banner.Desc = function ({ desc, className }: { desc: string } & Props) {
  return <Desc className={['banner_desc', className].join(' ')}>{desc}</Desc>;
};

export default Banner;
