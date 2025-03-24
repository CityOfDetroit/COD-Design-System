import { html } from 'lit-html';
import { expect } from '@storybook/test';
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

export const HeadingElements = {
  render: () => {
    return html`<cod-tag><h1 slot="label">Heading Element</h1></cod-tag>`;
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

export const ListElements = {
  render: () => {
    return html`<cod-tag>
      <li slot="label">List-item</li>
      <li slot="label">List-item</li>
      <li slot="label">List-item</li>
    </cod-tag>`;
  },
  play: async ({ canvasElement }) => {
    const tag = canvasElement.querySelector('cod-tag');
    const tagShadowRoot = tag.shadowRoot;
    const slot = tagShadowRoot.querySelector('slot[name="label"]');
    const slottedElt = slot.assignedElements()[0];
    
    // Test that the result is a single <span> after the transformation
    expect(slottedElt.tagName).toBe('SPAN');

    // Verify there are no <br> elements or newlines in the content
    expect(slottedElt.innerHTML).not.toContain('<br>');
    expect(slottedElt.innerHTML).not.toContain('\n');

  },
};

 
export const OtherNonAllowedElements = {
  render: () => {
    return html`<cod-tag>
      <p slot="label">Paragraph</p>
      <button slot="label">Button</button>
      <strong slot="label">Bold</strong>
    </cod-tag>`;
  },
  play: async ({ canvasElement }) => {
    const tag = canvasElement.querySelector('cod-tag');
    const tagShadowRoot = tag.shadowRoot;
    const slot = tagShadowRoot.querySelector('slot[name="label"]');
    const slottedElt = slot.assignedElements()[0];

    // Test that the result is a single <span> after the transformation
    expect(slottedElt.tagName).toBe('SPAN');

    // Verify there are no elements or newlines in the content
    expect(slottedElt.innerHTML).not.toContain('');
    expect(slottedElt.innerHTML).not.toContain('\n');

  },
};

export const MultiSpanElements = {
  render: () => {
    return html`<cod-tag>
      <span slot="label">Span</span>
      <span slot="label">Span</span>
      <span slot="label">Span</span>
    </cod-tag>`;
  },
  play: async ({ canvasElement }) => {
    const tag = canvasElement.querySelector('cod-tag');
    const tagShadowRoot = tag.shadowRoot;
    const slot = tagShadowRoot.querySelector('slot[name="label"]');
    const slottedElt = slot.assignedElements()[0];

    // Test that the result is a single <span> after the transformation
    expect(slottedElt.tagName).toBe('SPAN');

    // Verify there are no elements or newlines in the content
    expect(slottedElt.innerHTML).not.toContain('');
    expect(slottedElt.innerHTML).not.toContain('\n');

  },
};