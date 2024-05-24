import '../components/atoms/Spinner/cod-spinner';

export default {
  title: 'Components/Atoms/Spinner',
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['border', 'grow'],
    },
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
  },
};
// Template
const Template = (args) => {
  const spinner = document.createElement('cod-spinner');
  spinner.setAttribute('type', args.type);
  spinner.setAttribute('background-color', args.backgroundColor);
  if (args.size){
    spinner.setAttribute('size', args.size);
  } else {
    delete spinner.size;
  }
  if (args.displayType){
    spinner.setAttribute('display-type', args.displayType);
  } else {
    delete spinner.displayType;
  }
  return spinner;
};

export const Spinner = Template.bind({});
Spinner.args = {
  type: 'border',
  backgroundColor: 'primary',
};
