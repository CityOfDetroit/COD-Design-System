import '../components/atoms/FormSelect/cod-formselect';

export default {
  title: 'Forms/FormSelect',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md',
    },
    required: {
      control: { type: 'select' },
      options: ['true', 'false'],
      defaultValue: 'false',
    },
    disabled: {
      control: { type: 'select' },
      options: ['true', 'false'],
      defaultValue: 'false',
    },
  },
};
// Template
const Template = (args) => {
  const select = document.createElement('cod-form-select');
  select.innerHTML = `
    <option value="">Select something</option>
    <option value="1">Options 1</option>
    <option value="2">Options 2</option>
    <option value="3">Options 3</option>
  `;
  // See CityOfDetroit/detroitmi#1099
  // eslint-disable-next-line eqeqeq
  if (args.id != null) {
    select.setAttribute('data-id', args.id);
  }
  // See CityOfDetroit/detroitmi#1099
  // eslint-disable-next-line eqeqeq
  if (args.value != null) {
    select.setAttribute('data-value', args.value);
  }
  // See CityOfDetroit/detroitmi#1099
  // eslint-disable-next-line eqeqeq
  if (args.size != null) {
    select.setAttribute('data-size', args.size);
  }
  // See CityOfDetroit/detroitmi#1099
  // eslint-disable-next-line eqeqeq
  if (args.multiple != null) {
    select.setAttribute('data-multiple', args.multiple);
  }
  // See CityOfDetroit/detroitmi#1099
  // eslint-disable-next-line eqeqeq
  if (args.displayMultiple != null) {
    select.setAttribute('data-display-multiple', args.displayMultiple);
  }
  // See CityOfDetroit/detroitmi#1099
  // eslint-disable-next-line eqeqeq
  if (args.extraClasses != null) {
    select.setAttribute('data-extra-classes', args.extraClasses);
  }
  select.setAttribute('data-aria-label', args.ariaLabel);
  select.setAttribute('data-disabled', args.disabled);
  select.setAttribute('data-required', args.required);
  // See CityOfDetroit/detroitmi#1099
  // eslint-disable-next-line eqeqeq
  if (args.selectChange != null) {
    select.addEventListener('click', (e) => {
      args.selectChange(e);
    });
  }

  return select;
};

export const Select = Template.bind({});
Select.args = {
  id: 'simple-select',
  ariaLabel: 'Simple select example',
};

export const Multiple = Template.bind({});
Multiple.args = {
  id: 'simple-select',
  ariaLabel: 'Simple select example',
  multiple: 'true',
};

export const MultipleShowOnly = Template.bind({});
MultipleShowOnly.args = {
  id: 'simple-select',
  ariaLabel: 'Simple select example',
  multiple: 'true',
  displayMultiple: '2',
};

export const WithInteraction = Template.bind({});
WithInteraction.args = {
  id: 'interaction-input',
  ariaLabel: 'Interaction select example',
  selectChange: (e) => {
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line no-console
    console.log(e.target.shadowRoot.querySelector('select').value);
  },
};

// WithInteraction.play = async ({ args, canvasElement }) => {
//   // Assigns canvas to the component root element
//   const canvas = within(canvasElement);
//   await userEvent.click(canvas.getByTestId('interaction'));
//   await expect(console.log);
// }
