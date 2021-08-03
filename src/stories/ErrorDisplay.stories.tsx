import { Story, Meta } from '@storybook/react';
import ErrorDisplay, { ErrorDisplayProps } from '../app/components/ErrorDisplay/ErrorDisplay';

export default {
  title: 'Component/ErrorDisplay',
  component: ErrorDisplay,
} as Meta<ErrorDisplayProps>;

const Template: Story<ErrorDisplayProps> = (args) => <ErrorDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: 'Houve um erro'
};

export const CustomMessage = Template.bind({});
CustomMessage.args = {
  title: 'Houve um erro',
  message: 'Falha na comunicação com o servidor',
};

export const Small = Template.bind({});
Small.args = {
  title: 'Houve um erro',
  message: 'Falha na comunicação com o servidor',
  small: true
};
