import styles from '!!raw-loader!./PhotoButton.css';

const template = document.createElement('template');

template.innerHTML = `
<a class="photo-btn btn btn-primary" part="base">
  <slot class="button-img" part="image" name="image"></slot>
  <div class="button-body" part="body">
    <slot></slot>
  </div>
</a>
`;

export default class Card extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));

    // Add styles
    const itemStyles = document.createElement('style');
    itemStyles.textContent = styles;
    shadow.appendChild(itemStyles);
  }

  static get observedAttributes() {
    return ['href', 'rel', 'target'];
  }

  get href() {
    return this.getAttribute('href');
  }

  get rel() {
    return this.getAttribute('rel');
  }

  get target() {
    return this.getAttribute('target');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const anchor = this.shadowRoot.querySelector('a');
    if (anchor) {
      anchor.setAttribute(name, newValue || '');
    }
  }

  connectedCallback() {
    // Set initial values if attributes exist
    const anchor = this.shadowRoot.querySelector('a');
    if (this.href) anchor.setAttribute('href', this.href);
    if (this.rel) anchor.setAttribute('rel', this.rel);
    if (this.target) anchor.setAttribute('target', this.target);
  }
}
