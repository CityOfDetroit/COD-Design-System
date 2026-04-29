import '../components/ComboBox/cod-combo-box.js';

// Sample data for stories
const fruitOptions = [
  { value: 'apple', text: 'Apple' },
  { value: 'apricot', text: 'Apricot' },
  { value: 'banana', text: 'Banana' },
  { value: 'blackberry', text: 'Blackberry' },
  { value: 'blueberry', text: 'Blueberry' },
  { value: 'cherry', text: 'Cherry' },
  { value: 'cranberry', text: 'Cranberry' },
  { value: 'grape', text: 'Grape' },
  { value: 'kiwi', text: 'Kiwi' },
  { value: 'lemon', text: 'Lemon' },
  { value: 'lime', text: 'Lime' },
  { value: 'mango', text: 'Mango' },
  { value: 'orange', text: 'Orange' },
  { value: 'papaya', text: 'Papaya' },
  { value: 'peach', text: 'Peach' },
  { value: 'pear', text: 'Pear' },
  { value: 'pineapple', text: 'Pineapple' },
  { value: 'raspberry', text: 'Raspberry' },
  { value: 'strawberry', text: 'Strawberry' },
  { value: 'watermelon', text: 'Watermelon' },
];

const colorOptions = [
  { value: 'red', text: 'Red' },
  { value: 'blue', text: 'Blue' },
  { value: 'green', text: 'Green' },
  { value: 'yellow', text: 'Yellow' },
  { value: 'orange', text: 'Orange' },
  { value: 'purple', text: 'Purple' },
  { value: 'pink', text: 'Pink' },
  { value: 'brown', text: 'Brown' },
  { value: 'black', text: 'Black' },
  { value: 'white', text: 'White' },
  { value: 'gray', text: 'Gray' },
  { value: 'cyan', text: 'Cyan' },
  { value: 'magenta', text: 'Magenta' },
  { value: 'lime', text: 'Lime' },
  { value: 'navy', text: 'Navy' },
  { value: 'teal', text: 'Teal' },
  { value: 'silver', text: 'Silver' },
  { value: 'gold', text: 'Gold' },
];

export default {
  title: 'Components/Combo Box',
  component: 'cod-combo-box',
  parameters: {
    docs: {
      description: {
        component: `
The ComboBox component allows users to select from a large list of options with filtering capabilities. 
It's ideal for scenarios with more than 15 options where users need to search or filter to find their selection.

Includes full keyboard navigation and accessibility support.
        `,
      },
      source: {
        format: 'html',
      },
    },
  },
  argTypes: {
    placeholder: {
      name: 'placeholder',
      control: { type: 'text' },
      description: 'Placeholder text shown when no value is selected.',
      table: {
        defaultValue: { summary: '' },
      },
    },
    defaultValue: {
      name: 'default',
      control: { type: 'text' },
      description: 'Default value to select when the component loads.',
      table: {
        defaultValue: { summary: '' },
      },
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the combo box is required.',
      table: {
        defaultValue: { summary: false },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the combo box is disabled.',
      table: {
        defaultValue: { summary: false },
      },
    },
    name: {
      control: { type: 'text' },
      description: 'Name attribute for form submission.',
      table: {
        defaultValue: { summary: '' },
      },
    },
    label: {
      control: { type: 'text' },
      description: 'Label text for the combo box.',
    },
    options: {
      control: { type: 'object' },
      description: 'Array of option objects with value and text properties.',
      table: {
        type: { summary: 'Array<{value: string, text: string}>' },
      },
    },
  },
  args: {
    placeholder: 'Select or search...',
    defaultValue: '',
    required: false,
    disabled: false,
    name: 'combobox',
    label: 'Choose an option',
    options: fruitOptions.slice(0, 10), // Use first 10 fruits for default
  },
};

// Helper function to create options
const createOptions = (comboBox, options) => {
  options.forEach((option) => {
    const optionElement = document.createElement('option');
    optionElement.value = option.value;
    optionElement.textContent = option.text;
    comboBox.appendChild(optionElement);
  });
};

// Template for the story
const Template = (args) => {
  const container = document.createElement('div');
  container.style.width = '300px';

  const comboBox = document.createElement('cod-combo-box');

  // Set attributes from args
  if (args.placeholder) comboBox.setAttribute('placeholder', args.placeholder);
  if (args.defaultValue) comboBox.setAttribute('default', args.defaultValue);
  if (args.required) comboBox.setAttribute('required', '');
  if (args.disabled) comboBox.setAttribute('disabled', '');
  if (args.name) comboBox.setAttribute('name', args.name);

  // Add label
  if (args.label) {
    const label = document.createElement('span');
    label.setAttribute('slot', 'label');
    label.textContent = args.label;
    comboBox.appendChild(label);
  }

  // Add options
  if (args.options) {
    createOptions(comboBox, args.options);
  }

  container.appendChild(comboBox);
  return container;
};

export const Usage = Template.bind({});
Usage.tags = ['!dev'];

// Story: Basic Example
export const BasicExample = () => {
  const container = document.createElement('div');
  container.style.width = '300px';

  const comboBox = document.createElement('cod-combo-box');
  comboBox.setAttribute('placeholder', 'Choose a fruit...');
  comboBox.setAttribute('name', 'fruit');

  const label = document.createElement('span');
  label.setAttribute('slot', 'label');
  label.textContent = 'Favorite Fruit';
  comboBox.appendChild(label);

  createOptions(comboBox, fruitOptions);

  container.appendChild(comboBox);
  return container;
};

BasicExample.storyName = 'Basic Example';
BasicExample.parameters = {
  docs: {
    description: {
      story:
        'A basic combo box with fruit options. Type to filter the list or use arrow keys to navigate.',
    },
  },
};

// Story: With Default Value
export const WithDefaultValue = () => {
  const container = document.createElement('div');
  container.style.width = '300px';

  const comboBox = document.createElement('cod-combo-box');
  comboBox.setAttribute('placeholder', 'Choose a color...');
  comboBox.setAttribute('default', 'blue');
  comboBox.setAttribute('name', 'color');

  const label = document.createElement('span');
  label.setAttribute('slot', 'label');
  label.textContent = 'Favorite Color';
  comboBox.appendChild(label);

  createOptions(comboBox, colorOptions);

  container.appendChild(comboBox);
  return container;
};

WithDefaultValue.storyName = 'With Default Value';
WithDefaultValue.parameters = {
  docs: {
    description: {
      story: 'Example with a default value pre-selected using `default`.',
    },
  },
};

// Story: Required
export const Required = () => {
  const container = document.createElement('div');
  container.style.width = '300px';

  const comboBox = document.createElement('cod-combo-box');
  comboBox.setAttribute('placeholder', 'This field is required');
  comboBox.setAttribute('required', '');
  comboBox.setAttribute('name', 'required-field');

  const label = document.createElement('span');
  label.setAttribute('slot', 'label');
  label.textContent = 'Required Field *';
  comboBox.appendChild(label);

  createOptions(comboBox, fruitOptions.slice(0, 8));

  container.appendChild(comboBox);
  return container;
};

Required.storyName = 'Required Field';
Required.parameters = {
  docs: {
    description: {
      story:
        'Use the `required` attribute to make the field required for form validation.',
    },
  },
};

// Story: Disabled
export const Disabled = () => {
  const container = document.createElement('div');
  container.style.width = '300px';

  const comboBox = document.createElement('cod-combo-box');
  comboBox.setAttribute('placeholder', 'This field is disabled');
  comboBox.setAttribute('disabled', '');
  comboBox.setAttribute('name', 'disabled-field');

  const label = document.createElement('span');
  label.setAttribute('slot', 'label');
  label.textContent = 'Disabled Field';
  comboBox.appendChild(label);

  createOptions(comboBox, fruitOptions.slice(0, 5));

  container.appendChild(comboBox);
  return container;
};

Disabled.storyName = 'Disabled State';
Disabled.parameters = {
  docs: {
    description: {
      story: 'Use the `disabled` attribute to disable the combo box.',
    },
  },
};

// Story: Custom Filter
export const CustomFilter = () => {
  const container = document.createElement('div');
  container.style.width = '300px';

  // Create a custom filter function
  const script = document.createElement('script');
  script.textContent = `
    window.customFruitFilter = function(options, query) {
      if (!query) return options;
      return options.filter(option => 
        option.text.toLowerCase().startsWith(query.toLowerCase()) ||
        option.value.toLowerCase().startsWith(query.toLowerCase())
      );
    };
  `;
  container.appendChild(script);

  const comboBox = document.createElement('cod-combo-box');
  comboBox.setAttribute('placeholder', 'Start typing...');
  comboBox.setAttribute('filter', 'customFruitFilter');
  comboBox.setAttribute('name', 'custom-filter');

  const label = document.createElement('span');
  label.setAttribute('slot', 'label');
  label.textContent = 'Custom Filter (starts with)';
  comboBox.appendChild(label);

  createOptions(comboBox, fruitOptions);

  container.appendChild(comboBox);
  return container;
};

CustomFilter.storyName = 'Custom Filtering';
CustomFilter.parameters = {
  docs: {
    description: {
      story:
        'Use the `filter` attribute to specify a custom filter function. This example filters by "starts with" instead of "contains".',
    },
  },
};

// Story: Form Integration
export const FormIntegration = () => {
  const container = document.createElement('div');
  container.style.width = '400px';

  const form = document.createElement('form');
  form.style.display = 'flex';
  form.style.flexDirection = 'column';
  form.style.gap = '16px';

  // Fruit combo box
  const fruitComboBox = document.createElement('cod-combo-box');
  fruitComboBox.setAttribute('placeholder', 'Choose your favorite...');
  fruitComboBox.setAttribute('name', 'fruit');
  fruitComboBox.setAttribute('required', '');

  const fruitLabel = document.createElement('span');
  fruitLabel.setAttribute('slot', 'label');
  fruitLabel.textContent = 'Favorite Fruit *';
  fruitComboBox.appendChild(fruitLabel);

  createOptions(fruitComboBox, fruitOptions);

  // Color combo box
  const colorComboBox = document.createElement('cod-combo-box');
  colorComboBox.setAttribute('placeholder', 'Optional selection...');
  colorComboBox.setAttribute('name', 'color');

  const colorLabel = document.createElement('span');
  colorLabel.setAttribute('slot', 'label');
  colorLabel.textContent = 'Favorite Color';
  colorComboBox.appendChild(colorLabel);

  createOptions(colorComboBox, colorOptions);

  // Submit button
  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.textContent = 'Submit Form';
  submitBtn.style.padding = '8px 16px';
  submitBtn.style.marginTop = '8px';

  // Output div
  const output = document.createElement('div');
  output.style.marginTop = '16px';
  output.style.padding = '12px';
  output.style.backgroundColor = '#f8f9fa';
  output.style.borderRadius = '4px';
  output.style.fontSize = '14px';
  output.textContent = 'Form data will appear here when submitted.';

  // Form submission handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    output.innerHTML = `<strong>Form Data:</strong><br><pre>${JSON.stringify(
      data,
      null,
      2,
    )}</pre>`;
  });

  form.appendChild(fruitComboBox);
  form.appendChild(colorComboBox);
  form.appendChild(submitBtn);

  container.appendChild(form);
  container.appendChild(output);

  return container;
};

FormIntegration.storyName = 'Form Integration';
FormIntegration.parameters = {
  docs: {
    description: {
      story:
        'Example showing how combo boxes integrate with forms. The selected values are included in form submission.',
    },
  },
};
