import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <div>
    <h2>SMALL</h2>
    <div>
      <Button variant='text' label='Primary' color='primary' size='small' />
      <Button variant='text' label='Secondary' color='secondary' size='small' />
      <Button variant='text' label='Warning' color='warning' size='small' />
      <Button variant='text' label='Error' color='error' size='small' />
      <Button
        disabled
        label='Disabled'
        variant='text'
        color='error'
        size='small'
      />
      <br />
      <br />
      <Button
        variant='contained'
        label='Primary'
        color='primary'
        size='small'
      />
      <Button
        variant='contained'
        label='Secondary'
        color='secondary'
        size='small'
      />
      <Button
        variant='contained'
        label='Warning'
        color='warning'
        size='small'
      />
      <Button variant='contained' label='Error' color='error' size='small' />
      <Button
        disabled
        label='Disabled'
        variant='contained'
        color='error'
        size='small'
      />
      <br />
      <br />
      <Button variant='outlined' label='Primary' color='primary' size='small' />
      <Button
        variant='outlined'
        label='Secondary'
        color='secondary'
        size='small'
      />
      <Button variant='outlined' label='Warning' color='warning' size='small' />
      <Button variant='outlined' label='Error' color='error' size='small' />
      <Button
        disabled
        label='Disabled'
        variant='outlined'
        color='error'
        size='small'
      />
      <br />
      <br />
    </div>
    <h2>NORMAL</h2>
    <div>
      <Button variant='text' label='Primary' color='primary' />
      <Button variant='text' label='Secondary' color='secondary' />
      <Button variant='text' label='Warning' color='warning' />
      <Button variant='text' label='Error' color='error' />
      <br />
      <br />
      <Button variant='contained' label='Primary' color='primary' />
      <Button variant='contained' label='Secondary' color='secondary' />
      <Button variant='contained' label='Warning' color='warning' />
      <Button variant='contained' label='Error' color='error' />
      <br />
      <br />
      <Button variant='outlined' label='Primary' color='primary' />
      <Button variant='outlined' label='Secondary' color='secondary' />
      <Button variant='outlined' label='Warning' color='warning' />
      <Button variant='outlined' label='Error' color='error' />
      <br />
      <br />
    </div>
    <h2>LARGE</h2>
    <div>
      <Button variant='text' label='Primary' color='primary' size='large' />
      <Button variant='text' label='Secondary' color='secondary' size='large' />
      <Button variant='text' label='Warning' color='warning' size='large' />
      <Button variant='text' label='Error' color='error' size='large' />
      <br />
      <br />
      <Button
        variant='contained'
        label='Primary'
        color='primary'
        size='large'
      />
      <Button
        variant='contained'
        label='Secondary'
        color='secondary'
        size='large'
      />
      <Button
        variant='contained'
        label='Warning'
        color='warning'
        size='large'
      />
      <Button variant='contained' label='Error' color='error' size='large' />
      <br />
      <br />
      <Button variant='outlined' label='Primary' color='primary' size='large' />
      <Button
        variant='outlined'
        label='Secondary'
        color='secondary'
        size='large'
      />
      <Button variant='outlined' label='Warning' color='warning' size='large' />
      <Button variant='outlined' label='Error' color='error' size='large' />
      <br />
      <br />
    </div>
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
