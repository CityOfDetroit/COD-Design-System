import '../components/atoms/Icon/cod-icon';

export default {
  title: 'Components/Atoms/Icon',
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: [
        'chevron-right',
        'chevron-left',
        'chevron-up',
        'chevron-down',
        'house',
        'house-fill',
        'exclamation-circle',
        'exclamation-circle-fill',
        'exclamation-triangle',
        'check-circle',
        'check-circle-fill',
        'calendar',
        'calendar-fill',
        'calendar-date',
        'calendar-date-fill',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'x-large'],
    },
  },
};
// Template
const Template = (args) => {
  const icon = document.createElement('cod-icon');
  icon.setAttribute('data-icon', args.icon);
  icon.setAttribute('data-size', args.size);
  return icon;
};

export const Icon = Template.bind({});
Icon.args = {
  icon: 'house',
  size: 'small',
};

export const IconCustom = Template.bind({});
IconCustom.args = {
  icon: 'house',
  size: '120',
};
