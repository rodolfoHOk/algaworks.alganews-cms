import { Story, Meta } from '@storybook/react';
import Profile, { ProfileProps } from '../app/components/Profile/Profile';

export default {
  title: 'Component/Profile',
  component: Profile,
} as Meta<ProfileProps>;

const Template: Story<ProfileProps> = (args) => <Profile {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Felipe Hash',
  description: 'criador de conteúdo a 3 anos',
  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU'
};
