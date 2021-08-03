import { Story, Meta } from '@storybook/react';
import ProgressBar, { ProgressBarProps } from '../app/components/ProgressBar/ProgressBar';

export default {
  title: 'Component/ProgressBar',
  component: ProgressBar,
} as Meta<ProgressBarProps>;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'javascript',
  theme: 'default',
  progress: 50,
};

export const Primary = Template.bind({});
Primary.args = {
  title: 'javascript',
  theme: 'primary',
  progress: 50,
};

export const ZeroProgress = Template.bind({});
ZeroProgress.args = {
  title: 'javascript',
  theme: 'primary',
  progress: 0,
};

export const ProgressInHalfOfText = Template.bind({});
ProgressInHalfOfText.args = {
  title: 'javascript',
  theme: 'primary',
  progress: 10,
};
