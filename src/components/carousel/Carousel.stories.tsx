import { ComponentStory, ComponentMeta } from '@storybook/react';

import Carousel from './Carousel';
import image1 from 'img/biography/0.jpg';
import image2 from 'img/biography/2.jpg';
import image3 from 'img/biography/5.jpg';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Carousel',
  component: Carousel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Carousel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Carousel> = (args) => (
  <div className='w-50'>
    <Carousel id='bio' {...args}>
      <Carousel.Image active={true} image={image1} />
      <Carousel.Image image={image2} />
      <Carousel.Image image={image3} />
      <Carousel.Image image={image2} />
      <Carousel.Image image={image3} />
      <Carousel.Image image={image2} />
      <Carousel.Image image={image3} />
    </Carousel>
    <Carousel id='bio2' {...args}>
      <Carousel.Image active={true} image={image1} />
      <Carousel.Image image={image2} />
      <Carousel.Image image={image3} />
      <Carousel.Image image={image2} />
      <Carousel.Image image={image3} />
      <Carousel.Image image={image2} />
      <Carousel.Image image={image3} />
    </Carousel>
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
