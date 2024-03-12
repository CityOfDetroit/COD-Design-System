import '../components/atoms/Icon/cod-icon';


export default {
  title: 'Components/Atoms/Icon',
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: [
        'chevron-right',
        'chevron-right-circle',
        'chevron-right-circle-fill',
        'chevron-left',
        'chevron-left-circle',
        'chevron-left-circle-fill',
        'chevron-up',
        'chevron-up-circle',
        'chevron-up-circle-fill',
        'chevron-down',
        'chevron-down-circle',
        'chevron-down-circle-fill',
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
        'newspaper',
        'building',
        'building-fill',
        'buildings',
        'buildings-fill',
        'currency-dollar',
        'file-earmark',
        'list-task',
        'journals',
      ].sort(),
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'x-large'],
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
  if (args.isHighlighted) {
    icon.setAttribute('is-highlighted', ''); // Set the attribute if isHighlighted is true
  } else {
    icon.removeAttribute('is-highlighted'); // Remove the attribute if isHighlighted is false
  }
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
