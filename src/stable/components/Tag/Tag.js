import styles from '!!raw-loader!./Tag.css';

// Define a template element to hold the structure and style of the custom element
const template = document.createElement('template');
template.innerHTML = `
  <div class="tag-container">
  <style>
    ${styles}
  </style>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tags-fill" viewBox="0 0 16 16">
        <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
        <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043z"/>
      </svg>
    <slot name="label"></slot>
  </div>
`;

class Tag extends HTMLElement {
  constructor() {
    super();
    // Create a shadow root and append the template content to it
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    // Setup slot event listener when the element is added to the DOM
    this._setupSlot();
  }

  _setupSlot() {
    // Find the slot element and add an event listener for the slotchange event
    const slot = this.shadowRoot.querySelector('slot[name="label"]');

    slot.addEventListener('slotchange', () => {
      // Get the elements assigned to the slot
      const elements = slot.assignedElements();
      // Define allowed tags
      const allowedTags = ['SPAN', 'A'];

      // Iterate over the assigned elements
      elements.forEach((element, index) => {
        if (!allowedTags.includes(element.tagName)) {
          // If the element is not allowed, replace it with a span element
          const spanElement = document.createElement('span');
          spanElement.slot = 'label';
          // Removing <br> and newlines
          spanElement.innerText = element.innerText
            .replace(/<br>/g, '')
            .replace(/\n/g, '');

          element.replaceWith(spanElement);
        } else {
          // Append a comma if more than one label
          if (index < elements.length - 1) {
            element.innerText += ', ';
          }
        }
      });
    });
  }
}

export default Tag;
