import { Story, Meta } from '@storybook/react';
import MarkdownEditor, { MarkdownEditorProps } from '../app/components/MarkdownEditor';

export default {
  title: 'Component/MarkdownEditor',
  component: MarkdownEditor,
} as Meta<MarkdownEditorProps>;

const Template: Story<MarkdownEditorProps> = (args) => <MarkdownEditor {...args} />;

export const Default = Template.bind({});
Default.args = {};
