import './codloader';

export default {
  title: 'COD/Atoms/Loader',
  argTypes: {
    backgroundColor: { 
      control: { type: 'select' },
      options: ['color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-light', 'color-dark'],
      defaultValue: 'color-1'
    },
  }
};

// Template
const Template = (args) => {
  const loader = document.createElement('cod-loader');
  loader.setAttribute('data-color', args.backgroundColor);
  return loader;
}

export const Loader = Template.bind({});