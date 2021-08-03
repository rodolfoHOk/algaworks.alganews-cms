import { Story, Meta } from '@storybook/react';
import Input, { InputProps } from '../app/components/Input/Input';

export default {
  title: 'Component/Input',
  component: Input,
} as Meta<InputProps>;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'e.g.: John Doe'
};

export const WithLabelAndPlaceholder = Template.bind({});
WithLabelAndPlaceholder.args = {
  label: 'Name',
  placeholder: 'e.g.: John Doe'
};

export const WithLabelAndContent = Template.bind({});
WithLabelAndContent.args = {
  label: 'Name',
  value: 'John Doe'
};

export const WithContent = Template.bind({});
WithContent.args = {
  value: 'John Doe'
};
