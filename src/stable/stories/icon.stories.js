import '../components/Icon/cod-icon';
import { COMMON_STORY_ARGS } from '../../shared/js/storybook/args-utils';

export default {
  title: 'Components/Icon',
  argTypes: {
    icon: COMMON_STORY_ARGS.icon,
    size: COMMON_STORY_ARGS.longSize,
    library: {
      control: { type: 'text' },
      defaultValue: 'fontawesome',
    },
    isHighlighted: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
};
// Template
const Template = (args) => {
  const icon = document.createElement('cod-icon');
  icon.setAttribute('data-icon', args.icon);
  icon.setAttribute('data-size', args.size);
  icon.setAttribute('library', args.library);
  if (args.isHighlighted) {
    icon.setAttribute('is-highlighted', ''); // Set the attribute if isHighlighted is true
  } else {
    icon.removeAttribute('is-highlighted'); // Remove the attribute if isHighlighted is false
  }
  return icon;
};

export const IconArguments = Template.bind({});
IconArguments.args = {
  icon: 'house',
  size: 'small',
  library: 'fontawesome',
};

export const IconCustom = Template.bind({});
IconCustom.args = {
  icon: 'house',
  size: '120',
  library: 'bootstrapicons',
};
