import styles from '!!raw-loader!./ServiceButton.css';

const template = document.createElement('template');

template.innerHTML = `
<style>
${styles}
</style>
<a href="www.example.com" class="service-button">
  <div class="title">
    <slot name="title" id="titleSlot"></slot>
  </div>
  <div class="subtitle">
    <slot name="subtitle" id="subtitleSlot"></slot>
  </div>
</a>
`;

class ServiceButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));

    // Get references to slots
    const titleSlot = shadow.querySelector('#titleSlot');
    const subtitleSlot = shadow.querySelector('#subtitleSlot');

    // Listen for slotchange events
    titleSlot.addEventListener('slotchange', () => {
      const elements = titleSlot.assignedElements();
      if (elements.length > 0) {
        const text = elements[0].textContent;
        elements[0].textContent = text;
      }
    });

    subtitleSlot.addEventListener('slotchange', () => {
      const elements = subtitleSlot.assignedElements();
      if (elements.length > 0) {
        const text = elements[0].textContent;
        elements[0].textContent = text;
      }
    });
  }
}

export { ServiceButton as default };
