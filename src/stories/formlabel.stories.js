import './formlabel';

export default {
  title: 'COD/Atoms/Forms/FormLabel',
  argTypes: {
    required: { 
        control: { type: 'select' },
        options: ['true', 'false'],
        defaultValue: 'false'
    },
    color: { 
        control: { type: 'select' },
        options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'],
    }
  },
};
// Template
const Template = (args) => {
  const label = document.createElement('cod-form-label');
  label.setAttribute('data-color', args.color);
  label.setAttribute('data-input-id', args.inputID);
  label.setAttribute('data-text', args.text);
  label.setAttribute('data-hidden', args.hidden);
  label.setAttribute('data-required', args.required);
  label.setAttribute('data-extra-classes', args.extraClasses);
  return label;
}

export const Label = Template.bind({});
Label.args = {
  inputID: 'basic-label',
  text: 'Basic label'
};

export const Hidden = Template.bind({});
Hidden.args = {
  inputID: 'hidden-label',
  text: 'Hidden label',
  hidden: 'true'
};

export const ExtraClasses = Template.bind({});
ExtraClasses.args = {
  inputID: 'hidden-label',
  text: 'Hidden label',
  extraClasses: 'p-5 text-bg-warning'
};
