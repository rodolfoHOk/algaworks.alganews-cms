import { Story, Meta } from '@storybook/react';
import NoData, { NoDataProps } from '../app/components/NoData/NoData';

export default {
  title: 'Component/NoData',
  component: NoData,
} as Meta<NoDataProps>;

const Template: Story<NoDataProps> = (args) => <NoData {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const FixedHeight = Template.bind({});
FixedHeight.args = {
  height: 240
};
