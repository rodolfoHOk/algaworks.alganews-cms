import { Story, Meta } from '@storybook/react';
import CircleChart, { CircleChartProps } from '../app/components/CircleChart';

export default {
  title: 'Component/CircleChart',
  component: CircleChart,
  argTypes: {
    progress: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
      }
    }
  },
} as Meta<CircleChartProps>;

const Template: Story<CircleChartProps> = (args) => <CircleChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  progress: 62,
  size: 88,
  caption: 'web',
  theme: 'default',
};

export const Primary = Template.bind({});
Primary.args = {
  progress: 81,
  size: 88,
  caption: 'android',
  theme: 'primary',
};
