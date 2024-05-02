import '../components/atoms/Progress/cod-progress';

export default {
  title: 'Components/Atoms/Progress',
  argTypes: {
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
  },
};
// Template
const Template = (args) => {
  const progress = document.createElement('cod-progress');
  if (args.backgroundColor) {
    progress.setAttribute('color', args.backgroundColor);
  }
  if (args.value) {
    progress.setAttribute('value', args.value);
  }
  if (args.label) {
    const label = document.createElement('span');
    label.setAttribute('slot', 'label');
    label.innerText = args.label;
    progress.appendChild(label);
  }
  if (args.ariaLabel) {
    progress.setAttribute('aria-label', args.ariaLabel);
  }
  if (args.striped) {
    progress.setAttribute('striped', '');
  }
  if (args.animated) {
    progress.setAttribute('animated', '');
  }
  progress.setAttribute('data-multi-bars', args.multiBars);
  return progress;
};

export const ProgressBar = Template.bind({});
ProgressBar.args = {
  backgroundColor: 'primary',
  value: '25',
  ariaLabel: 'simple test',
};

export const StripedBar = Template.bind({});
StripedBar.args = {
  backgroundColor: 'primary',
  value: '25',
  ariaLabel: 'simple test',
  striped: 'striped',
};

export const StripedBarAnimated = Template.bind({});
StripedBarAnimated.args = {
  backgroundColor: 'primary',
  value: '25',
  ariaLabel: 'simple test',
  striped: 'striped',
  animated: 'animated',
};

export const StripedBarLabel = Template.bind({});
StripedBarLabel.args = {
  backgroundColor: 'primary',
  value: '25',
  ariaLabel: 'simple test',
  striped: 'striped',
  animated: 'animated',
  label: 'this 25%',
};
