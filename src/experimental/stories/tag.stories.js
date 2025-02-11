import '../components/atoms/Tag/cod-tag';

// Function to strip HTML tags
function stripHTML(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
}

export default {
  title: 'Experimental/Atoms/Tag',
  argTypes: {
    label: { control: 'text', defaultValue: 'Label' },
  },
};

// Template
const Template = (args) => {
  const tag = document.createElement('cod-tag');

   // Strip HTML tags from args.label
   const strippedLabel = stripHTML(args.label);

  tag.innerHTML = `
    <div class="tag-container d-inline">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tags-fill" viewBox="0 0 16 16">
        <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
        <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043z"/>
      </svg>
      <slot name="label">${strippedLabel}</slot>
  </div>
  `;
  
  tag.setAttribute('label', args.label);

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