import '../components/atoms/Spinner/cod-spinner';
import { COMMON_STORY_ARGS } from '../shared/js/storybook/args-utils';

export default {
  title: 'Components/Atoms/Spinner',
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['border', 'grow'],
    },
    // TODO: Add support for lg and xl to make size
    // consistent. Issue #202.
    size: {
      control: { type: 'select' },
      options: ['sm', 'md'],
    },
    backgroundColor: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'success',
        'info',
        'warning',
        'danger',
        'light',
        'dark',
      ],
    },
    backgroundColor: COMMON_STORY_ARGS.bootstrapColor,
  },
};
// Template
const Template = (args) => {
  const spinner = document.createElement('cod-spinner');
  spinner.setAttribute('type', args.type);
  spinner.setAttribute('background-color', args.backgroundColor);
  if (args.size){
    spinner.setAttribute('size', args.size);
  }
  if (args.displayType){
    spinner.setAttribute('display-type', args.displayType);
  }
  return spinner;
};

export const Spinner = Template.bind({});
Spinner.args = {
  type: 'border',
  backgroundColor: 'primary',
};
