import '../components/Tag/cod-tag';

export default {
  title: 'Stable/Tag',
  argTypes: {
    label: { control: 'text', defaultValue: 'Label' },
  },
};

// Template
const Template = (args) => {
  const tag = document.createElement('cod-tag');

  // Create a span element for the label, set its slot name and text content
  const label = document.createElement('span');
  label.slot = 'label';
  label.textContent = args.label;

  // Append the label to the tag element
  tag.appendChild(label);

  return tag;
};

export const Default = Template.bind({});
Default.args = {
  label: "Mayor's Office",
};
