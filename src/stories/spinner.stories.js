import '../components/atoms/Spinner/cod-spinner';

export default {
  title: 'COD/Atoms/Spinner',
  argTypes: {
    type: {
        control: { type: 'select' },
        options: ['border', 'grow']
    },
    size: {
        control: { type: 'select' },
        options: ['sm', '']
    },
    backgroundColor: { 
        control: { type: 'select' },
        options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'],
    },
  },
};
// Template
const Template = (args) => {
  const spinner = document.createElement('cod-spinner');
  spinner.setAttribute('data-type', args.type);
  spinner.setAttribute('data-background-color', args.backgroundColor);
  spinner.setAttribute('data-size', args.size);
  spinner.setAttribute('data-display-type', args.displayType);
  return spinner;
}

export const Spinner = Template.bind({});
Spinner.args = {
  type: 'border',
  backgroundColor: 'primary'
};
