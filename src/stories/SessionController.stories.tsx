import { Story, Meta } from '@storybook/react';
import SessionController, { SessionControllerProps } from '../components/SessionController/SessionController';

export default {
  title: 'Component/SessionController',
  component: SessionController,
  argTypes: {
    onLogout: {
      action: 'logout',
    }
  },
} as Meta<SessionControllerProps>;

const Template: Story<SessionControllerProps> = (args) => <SessionController {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Cristiano Moreira Silveira Marques',
  description: 'editor há 2 anos',
  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU',
};
