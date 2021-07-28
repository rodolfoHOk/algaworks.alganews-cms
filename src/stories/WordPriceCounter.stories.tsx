import { Story, Meta } from '@storybook/react';
import WordPriceCounter, { WordPriceCounterProps } from '../components/WordPriceCounter';

export default {
  title: 'Component/WordPriceCounter',
  component: WordPriceCounter,
} as Meta<WordPriceCounterProps>;

const Template: Story<WordPriceCounterProps> = (args) => <WordPriceCounter {...args} />;

export const Default = Template.bind({});
Default.args = {
  pricePerWord: 0.25,
  wordCount: 17,
};
