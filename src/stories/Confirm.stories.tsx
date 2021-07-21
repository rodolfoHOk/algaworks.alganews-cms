import { Story, Meta } from '@storybook/react';
import Confirm, { ConfirmProps } from '../components/Confirm/Confirm';

export default {
  title: 'Component/Confirm',
  component: Confirm,
} as Meta<ConfirmProps>;

const Template: Story<ConfirmProps> = (args) => <Confirm {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Deseja realmente sair?'
};
