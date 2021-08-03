import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from '../app/components/Button/Button';

export default {
  title: 'Component/Button',
  component: Button,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'resetar senha'
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  label: 'resetar senha'
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  label: 'resetar senha'
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  label: 'Button',
  disabled: true
};
