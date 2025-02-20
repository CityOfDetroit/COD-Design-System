import { html } from 'lit-html';
import { expect } from '@storybook/jest';
import '../components/Tag/cod-tag';

export default {
  title: 'Stable/Tag',
  tags: ['autodocs'],
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

export const IncorrectSlotElement = {
  render: () => {
    return html`<cod-tag><h1 slot="label">Incorrect Element</h1></cod-tag>`;
  },
  play: async ({ canvasElement }) => {
    const tag = canvasElement.querySelector('cod-tag');
    const tagShadowRoot = tag.shadowRoot;
    const slot = tagShadowRoot.querySelector('slot[name="label"]');
    const slottedElt = slot.assignedElements()[0];
    // Test that even though the incorrect element was passed to
    // the slot, it was replaced with a span.
    expect(slottedElt.tagName).toBe('SPAN');
  },
};