import { Story, Meta } from '@storybook/react';
import ImageUpload, { ImageUploadProps } from '../components/ImageUpload';

export default {
  title: 'Component/ImageUpload',
  component: ImageUpload,
} as Meta<ImageUploadProps>;

const Template: Story<ImageUploadProps> = (args) => <ImageUpload {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Thumbnail do post'
};
