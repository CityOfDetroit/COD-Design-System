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

  // Define reflective properties
  static get observedAttributes() {
    return ['name', 'library', 'data-size', 'label', 'is-highlighted'];
  }

  // Getters and Setters for the attributes
  get name() {
    return this.getAttribute('name');
  }

  set name(value) {
    this.setAttribute('name', value);
  }

  get library() {
    return this.getAttribute('library');
  }

  set library(value) {
    this.setAttribute('library', value);
  }

  get size() {
    return this.getAttribute('data-size');
  }

  set size(value) {
    this.setAttribute('data-size', value);
  }

  get label() {
    return this.getAttribute('label');
  }

  set label(value) {
    this.setAttribute('label', value);
  }

  get isHighlighted() {
    return this.hasAttribute('is-highlighted');
  }

  set isHighlighted(value) {
    if (value) {
      this.setAttribute('is-highlighted', '');
    } else {
      this.removeAttribute('is-highlighted');
    }
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

    // Get attributes (using the getter methods)
    const icon = this.name || this.getAttribute('data-icon');
    const label = this.label || icon;
    let size = this.size || '24'; // Default to 24 if no size provided
    const library = this.library || 'fontawesome';

    // Check if the font-size is set in the light DOM
    const style = window.getComputedStyle(this);
    const lightDomSize = style.fontSize;

    if (lightDomSize && lightDomSize !== 'auto') {
      size = lightDomSize; // Use the font-size from light DOM if set
    } else {
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
    }

    // Check if slot has content (SVG provided by the user)
    const slotContent = this.querySelector('svg');
    if (slotContent) {
      // Return if SVG is provided by the user, as it will render automatically
      return;
    }

    // Set label for accessibility
    if (label) {
      container.setAttribute('aria-label', label);
    }

    // Set icon using getIcon() with the determined size
    iconElement.innerHTML = getIcon(icon, size, library);

    // Handle boolean attribute
    if (this.isHighlighted) {
      container.classList.add('highlighted');
    }
  }

  // Handle attribute changes for reflective properties
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this._renderIcon(); // Re-render the icon if any of the attributes change
    }
  }
}

export { Icon as default };
