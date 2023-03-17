import './formselect';

export default {
  title: 'COD/Atoms/Forms/FormSelect',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md'
    },
    required: { 
      control: { type: 'select' },
      options: ['true', 'false'],
      defaultValue: 'false'
    },
    disabled: { 
        control: { type: 'select' },
        options: ['true', 'false'],
        defaultValue: 'false'
    }
  },
};
// Template
const Template = (args) => {
  const select = document.createElement('cod-form-select');
  select.setAttribute('data-id', args.id);
  select.setAttribute('data-value', args.value);
  select.setAttribute('data-size', args.size);
  select.setAttribute('data-multiple', args.multiple);
  select.setAttribute('data-display-multiple', args.displayMultiple);
  select.setAttribute('data-id', args.id);
  select.setAttribute('data-aria-label', args.ariaLabel);
  select.setAttribute('data-extra-classes', args.extraClasses);
  select.setAttribute('data-options', args.options);
  select.setAttribute('data-disabled', args.disabled);
  select.setAttribute('data-required', args.required);
  select.addEventListener('click', (e)=>{
    args.selectChange(e)
  })
  return select;
}

export const Select = Template.bind({});
Select.args = {
  id: 'simple-select',
  ariaLabel: 'Simple select example',
  options: JSON.stringify([
    {
        default: true,
        text: 'Open this select menu'
    }
  ]),
};

export const Multiple = Template.bind({});
Multiple.args = {
  id: 'simple-select',
  ariaLabel: 'Simple select example',
  options: JSON.stringify([
    {
        default: true,
        text: 'Open this select menu'
    },
    {
        value: 1,
        default: false,
        text: 'Option 1'
    },
    {
        value: 2,
        default: false,
        text: 'Option 2'
    },
    {
        value: 3,
        default: false,
        text: 'Option 3'
    }
  ]),
  multiple: 'true',
  selectChange: (e) => {
    console.log(e.target.shadowRoot.querySelectorAll('select option:checked'));
  },
};

export const MultipleShowOnly = Template.bind({});
MultipleShowOnly.args = {
  id: 'simple-select',
  ariaLabel: 'Simple select example',
  options: JSON.stringify([
    {
        default: true,
        text: 'Open this select menu'
    },
    {
        value: 1,
        default: false,
        text: 'Option 1'
    },
    {
        value: 2,
        default: false,
        text: 'Option 2'
    },
    {
        value: 3,
        default: false,
        text: 'Option 3'
    }
  ]),
  multiple: 'true',
  selectChange: (e) => {
    console.log(e.target.shadowRoot.querySelectorAll('select option:checked'));
  },
  displayMultiple: '2'
};

export const WithInteraction = Template.bind({});
WithInteraction.args = {
    id: 'interaction-input',
    ariaLabel: 'Interaction select example',
    value: null,
    options: JSON.stringify([
        {
            default: true,
            text: 'Open this select menu'
        },
        {
            value: 1,
            default: false,
            text: 'Option 1'
        },
        {
            value: 2,
            default: false,
            text: 'Option 2'
        }
    ]),
    selectChange: (e) => {
        console.log(e.target.shadowRoot.querySelector('select').value);
    },
};

// WithInteraction.play = async ({ args, canvasElement }) => {
//   // Assigns canvas to the component root element
//   const canvas = within(canvasElement);
//   await userEvent.click(canvas.getByTestId('interaction'));
//   await expect(console.log);
// }