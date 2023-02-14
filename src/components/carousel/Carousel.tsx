import { ReactNode } from 'react';
import styled from 'styled-components';

import cx from 'classnames';

type Props = {
  id?: string;
  className?: string;
  children?: ReactNode;
};

function Carousel({ id = 'carouselExample', children, className }: Props) {
  return (
    <div id={id} className={['carousel slide', className].join(' ')}>
      <div className='carousel-inner'>{children}</div>
      <CarouselButton id={id} label='prev' />
      <CarouselButton id={id} label='next' />
    </div>
  );
}

Carousel.Image = function CarouselImage({
  active,
  className,
  image,
}: {
  active?: boolean;
  className?: string;
  image: string;
}) {
  return (
    <img
      src={image}
      className={cx('carousel-item', className, {
        active,
      })}></img>
  );
};

const CarouselButton = ({ id, label }: { id: string; label: string }) => {
  return (
    <button
      className={`carousel-control-${label}`}
      type='button'
      data-bs-target={`#${id}`}
      data-bs-slide={label}>
      <span
        className={`carousel-control-${label}-icon`}
        aria-hidden='true'></span>
      <span className='visually-hidden'>{label}</span>
    </button>
  );
};

export default Carousel;
