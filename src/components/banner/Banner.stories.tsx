import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from 'components/button/Button';
import FirstLawImage from 'img/1Law.png';
import Banner from './Banner';

export default {
  title: 'Components/Banner',
  component: Banner,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => (
  <Banner {...args}>
    <Banner.Image src={FirstLawImage} alt='image' />
    <Banner.Title title='First Law' />
    <Banner.Desc
      className='text-description'
      desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    />
    <Banner.Footer>
      <Button label='Saber Más' />
    </Banner.Footer>
  </Banner>
);

export const Default = Template.bind({});
