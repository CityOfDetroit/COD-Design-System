import './formcontrol';

export default {
  title: 'COD/Atoms/Forms/FormControl',
  argTypes: {
    tag: {
        control: { type: 'select' },
        options: ['input', 'textarea'],
        defaultValue: 'input',
    },
    backgroundColor: { 
        control: { type: 'select' },
        options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md'
    },
    type: {
        control: { type: 'select' },
        options: ['text', 'number', 'email', 'color', 'tel', 'password'],
        defaultValue: 'text',
    },
    required: { 
      control: { type: 'select' },
      options: ['true', 'false'],
      defaultValue: 'false'
    }
  },
};
// Template
const Template = (args) => {
  const fcontrol = document.createElement('cod-form-control');
  fcontrol.setAttribute('data-valid-msg', args.validMsg);
  fcontrol.setAttribute('data-invalid-msg', args.invalidMsg);
  fcontrol.setAttribute('data-tag', args.tag);
  fcontrol.setAttribute('data-size', args.size);
  fcontrol.setAttribute('data-background-color', args.backgroundColor);
  fcontrol.setAttribute('data-id', args.id);
  fcontrol.setAttribute('data-type', args.type);
  fcontrol.setAttribute('data-value', args.value);
  fcontrol.setAttribute('data-rows', args.rows);
  fcontrol.setAttribute('data-plain-txt', args.plainText);
  fcontrol.setAttribute('data-disabled', args.disabled);
  fcontrol.setAttribute('data-read-only', args.readOnly);
  fcontrol.setAttribute('data-required', args.required);
  fcontrol.setAttribute('data-placeholder-txt', args.placeholder);
  fcontrol.addEventListener('keydown', (e)=>{
    args.keydown(e)
  })
  return fcontrol;
}

export const Input = Template.bind({});
Input.args = {
  id: 'simple-input',
  placeholder: 'enter text here',
  validMsg: 'Looks good!',
  invalidMsg: 'Nope!'
};

export const SpecialInput = Template.bind({});
Input.args = {
  id: 'simple-input',
  placeholder: 'enter text here',
  validMsg: 'Looks good!',
  invalidMsg: 'Nope!'
};

export const Textarea = Template.bind({});
Textarea.args = {
  id: 'simple-textarea',
  placeholder: 'enter text here',
  tag: 'textarea',
  rows: '5',
  validMsg: 'Looks good!',
  invalidMsg: 'Nope!'
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'disabled-input',
  placeholder: 'This input is disabled',
  disabled: 'true',
  validMsg: 'Looks good!',
  invalidMsg: 'Nope!'
};

export const WithInteraction = Template.bind({});
WithInteraction.args = {
    id: 'interaction-input',
    placeholder: 'enter text here',
    keydown: (e) => {console.log(e)},
    validMsg: 'Looks good!',
    invalidMsg: 'Nope!'
};

// WithInteraction.play = async ({ args, canvasElement }) => {
//   // Assigns canvas to the component root element
//   const canvas = within(canvasElement);
//   await userEvent.click(canvas.getByTestId('interaction'));
//   await expect(console.log);
// }