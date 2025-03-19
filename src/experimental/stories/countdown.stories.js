import '../components/atoms/Countdown/cod-countdown';
import { COMMON_STORY_ARGS } from '../../shared/js/storybook/args-utils';

export default {
  tags: ['experimental'],
  title: 'Experimental/Countdown',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    text: COMMON_STORY_ARGS.bootstrapColor,
  },
};
// Template
const Template = (args) => {
  const countdown = document.createElement('cod-countdown');
  countdown.setAttribute('data-extra-classes', args.extraClasses);
  countdown.setAttribute('ends', args.end);
  countdown.setAttribute('size', args.size);
  countdown.setAttribute('text', args.text);

  return countdown;
};

export const Countdown = {
  tags: ['autodocs'],
  render: Template.bind({}),
  args: {
    extraClasses: '',
    end: '2024-10-01T19:19',
    size: 'sm',
    text: 'dark',
  },
};
