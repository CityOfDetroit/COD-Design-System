import styles from '!!raw-loader!./Icon.css';
import { getIcon } from './icon-helpers.js';

const template = document.createElement('template');
template.innerHTML = `
  <style>
    ${styles}
  </style>
  <div class="icon-container">
    <slot class="icon"></slot>
  </div>
`;

class Icon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    if (this.isIconConnected()) {
      return;
    }
    this._renderIcon();
  }

  isIconConnected() {
    return this.shadowRoot.querySelector('.icon').innerHTML !== '';
  }

  _renderIcon() {
    const container = this.shadowRoot.querySelector('.icon-container');
    const iconElement = this.shadowRoot.querySelector('.icon');

    // Get attributes
    const icon = this.getAttribute('name') || this.getAttribute('data-icon');
    const label =
      this.getAttribute('label') || icon;
    let size =
      this.getAttribute('size') || this.getAttribute('data-size') || '24';
    const library = this.getAttribute('library') || 'fontawesome';

    // Check if slot has content
    const slotContent = this.querySelector('svg');
    if (slotContent) {
      // just return if the SVG is provided (it will render automatically)
      return;
    }

    switch (size) {
      case 'small':
        size = '16';
        break;
      case 'medium':
        size = '24';
        break;
      case 'large':
        size = '36';
        break;
      case 'x-large':
        size = '54';
        break;
      default:
        size = '24';
    }

    // Set label for accessibility
    if (label) {
      container.setAttribute('aria-label', label);
    }

    // Set icon using getIcon()
    iconElement.innerHTML = getIcon(icon, size, library);

    // Handle boolean attribute
    if (this.hasAttribute('is-highlighted')) {
      container.classList.add('highlighted');
    }
  }
}

export { Icon as default };
