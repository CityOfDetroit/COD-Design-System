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

    // Internal properties for state management
    this._name = '';
    this._library = 'fontawesome';
    this._size = '24';
  }

  // Only observe the properties we want to be non-reflective
  static get observedAttributes() {
    return ['name', 'library', 'size', 'is-highlighted'];
  }

  // Getters only (no setters to prevent property-to-attribute reflection)
  get name() {
    return this._name;
  }

  get library() {
    return this._library;
  }

  get size() {
    return this._size;
  }

  connectedCallback() {
    // Initialize internal properties from attributes
    if (this.hasAttribute('name')) {
      this._name = this.getAttribute('name');
    }

    if (this.hasAttribute('library')) {
      this._library = this.getAttribute('library');
    }

    if (this.hasAttribute('size')) {
      this._size = this.getAttribute('size');
    } else if (this.hasAttribute('data-size')) {
      this._size = this.getAttribute('data-size');
    }

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

    // Use internal properties for rendering
    const icon = this._name || this.getAttribute('data-icon');
    const label = this.getAttribute('label') || icon;
    let size = this._size || '24'; // Default to 24 if no size provided
    const library = this._library || 'fontawesome';

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
          if (isNaN(parseInt(size))) {
            size = '24';
          }
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
    if (this.hasAttribute('is-highlighted')) {
      container.classList.add('highlighted');
    } else {
      container.classList.remove('highlighted');
    }
  }

  // Handle attribute changes for observed attributes
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }

    // Update internal properties when attributes change
    switch (name) {
      case 'name':
        this._name = newValue || '';
        break;
      case 'library':
        this._library = newValue || 'fontawesome';
        break;
      case 'size':
        this._size = newValue || '24';
        break;
    }

    // Re-render with updated internal properties
    this._renderIcon();
  }
}

export { Icon as default };
