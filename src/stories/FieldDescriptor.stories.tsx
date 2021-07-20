import { Story, Meta } from '@storybook/react';
import FieldDescriptor, { FieldDescriptorProps } from '../components/FieldDescriptor/FieldDescriptor';

export default {
  title: 'Component/FieldDescriptor',
  component: FieldDescriptor,
} as Meta<FieldDescriptorProps>;

const Template: Story<FieldDescriptorProps> = (args) => <FieldDescriptor {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'data de nascimento',
  value: '26 de Dezembro de 1997 (22 anos)'
};
