import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import TagInput, { TagInputProps } from '../app/components/TagInput';
import { Tag } from 'react-tag-input';

export default {
  title: 'Component/TagInput',
  component: TagInput,
} as Meta<TagInputProps>;

const Template: Story<TagInputProps> = (args) => <TagInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Insira as tags deste post',
  tags: [{ id: '1', text: 'JavaScript' }]
};

export const VariousTags = Template.bind({});
VariousTags.args = {
  placeholder: 'Insira as tags deste post',
  tags: [
    { id: '1', text: 'JavaScript' },
    { id: '2', text: 'C++' },
    { id: '3', text: 'Java' },
    { id: '4', text: 'Ruby on Rails' },
    { id: '5', text: 'Python' },
    { id: '6', text: 'CSS' },
    { id: '7', text: 'HTML' },
  ]
};

export function WorkingLiveExample() {
  const [tags, setTags] = useState<Tag[]>([]);

  return <TagInput
    placeholder={'Insira as tags deste post'}
    tags={tags}
    onAdd={tag => setTags([...tags, tag])}
    onDelete={index => setTags(tags.filter((tag, i) => i !== index))}
  />
}