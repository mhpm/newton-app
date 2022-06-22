import { useState } from 'react';
import { ImageContainer, SpriteImage } from './SpriteAnimator.styles';

interface Props {
  image: string;
  speed: number;
}

export const SpriteAnimator = ({ image, speed }: Props) => {

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const getImageSize = ({ target }: any) => {
    const { offsetHeight, offsetWidth } = target;

    setWidth(offsetWidth / speed)
    setHeight(offsetHeight)
  }

  return (
    <>
      {
        width && height
          ? <SpriteImage width={width} height={height} image={image} speed={speed} />
          : <ImageContainer onLoad={getImageSize} src={image} />
      }
    </>
  );
}
