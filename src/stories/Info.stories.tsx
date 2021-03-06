import { Story, Meta } from '@storybook/react';
import Info, { InfoProps } from '../app/components/Info/Info';

export default {
  title: 'Component/Info',
  component: Info,
} as Meta<InfoProps>;

const Template: Story<InfoProps> = (args) => <Info {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Post não encontrado',
  description: 'Este post não foi encontrado. Você está sendo redirecionado(a) para a lista de posts.',
};
