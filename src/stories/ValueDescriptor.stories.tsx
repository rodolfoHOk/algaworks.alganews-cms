import { Story, Meta } from '@storybook/react';
import ValueDescriptor, { ValueDescriptorProps } from '../app/components/ValueDescriptor/ValueDescriptor';

export default {
  title: 'Component/ValueDescriptor',
  component: ValueDescriptor,
} as Meta<ValueDescriptorProps>;

const Template: Story<ValueDescriptorProps> = (args) => <ValueDescriptor {...args} />;

export const Default = Template.bind({});
Default.args = {
  description: 'ganhos do mês',
  value: 560322.02,
  color: 'default'
};

export const DefaultCurrency = Template.bind({});
DefaultCurrency.args = {
  description: 'ganhos do mês',
  value: 560322.02,
  color: 'default',
  isCurrency: true
};

export const Primary = Template.bind({});
Primary.args = {
  description: 'ganhos do mês',
  value: 560322.02,
  color: 'primary'
};

export const PrimaryCurrency = Template.bind({});
PrimaryCurrency.args = {
  description: 'ganhos do mês',
  value: 560322.02,
  color: 'primary',
  isCurrency: true
};
