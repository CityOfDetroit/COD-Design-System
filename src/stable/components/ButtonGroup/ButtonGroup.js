import styles from '!!raw-loader!./ButtonGroup.css';

const template = document.createElement('template');
template.innerHTML = `
<div class="btn-group" role="group" part="base">
  <slot></slot>
</div>
`;

export default class ButtonGroup extends HTMLElement {
  static get observedAttributes() {
    return ['label'];
  }

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));

    // Add styles
    const itemStyles = document.createElement('style');
    itemStyles.textContent = styles;
    shadow.appendChild(itemStyles);

    // Initialize properties with defaults
    this._state = {
      label: '',
    };
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // Early return if value hasn't changed
    if (oldValue === newValue) return;

    if (name === 'label') {
      this._state.label = newValue || '';
      this._render();
    }
  }

  connectedCallback() {
    // Initialize state from attributes
    this._state.label = this.getAttribute('label') || '';

    // Initial render
    this._render();
  }

  _render() {
    const btnGroup = this.shadowRoot.querySelector('.btn-group');

    // Apply ARIA label if provided
    if (this._state.label) {
      btnGroup.setAttribute('aria-label', this._state.label);
    } else {
      btnGroup.removeAttribute('aria-label');
    }
  }

  // Getters and setters
  get label() {
    return this._state.label;
  }

  set label(value) {
    this.setAttribute('label', value);
  }
}
