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
    titleSlot.addEventListener('slotchange', this.handleSlotChange.bind(this));
    subtitleSlot.addEventListener(
      'slotchange',
      this.handleSlotChange.bind(this),
    );
  }

  handleSlotChange(event) {
    const slot = event.target;
    const elements = slot.assignedElements();

    if (elements.length > 0) {
      const element = elements[0];
      if (element.tagName !== 'SPAN') {
        const span = document.createElement('span');
        span.textContent = element.textContent;
        element.replaceWith(span);
      }
    }
  }
}

export { ServiceButton as default };
