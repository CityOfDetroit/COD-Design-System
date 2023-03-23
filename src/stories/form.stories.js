import './form';

export default {
  title: 'COD/Atoms/Forms/FormValidation',
  argTypes: {
    backgroundColor: { 
        control: { type: 'select' },
        options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'],
    }
  },
};
// Template
const Template = (args) => {
  const form = document.createElement('cod-form');
  form.setAttribute('data-background-color', args.backgroundColor);
  form.setAttribute('data-id', args.id);
  form.setAttribute('data-extra-classes', args.extraClasses);
  form.addEventListener('submit', (e)=>{
    args.submitForm(e)
  });
  return form;
}

export const Form = () => {
    let tempForm = document.createElement('cod-form');
    tempForm.setAttribute('data-id', 'simple-form');
    let label1 = document.createElement('cod-form-label');
    label1.setAttribute('data-input-id', 'first-name');
    label1.setAttribute('data-text', 'First Name');
    label1.setAttribute('data-required', true);
    return tempForm;
}

export const WithInteraction = Template.bind({});
WithInteraction.args = {
    id: 'interaction-input',
    placeholder: 'enter text here',
    keydown: (e) => {console.log(e)},
};

// WithInteraction.play = async ({ args, canvasElement }) => {
//   // Assigns canvas to the component root element
//   const canvas = within(canvasElement);
//   await userEvent.click(canvas.getByTestId('interaction'));
//   await expect(console.log);
// }