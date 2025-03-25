import styles from '!!raw-loader!./Drawer.css';

const template = document.createElement('template');

template.innerHTML = `
<div class="offcanvas offcanvas-end" tabindex="-1" id="">
  <div class="offcanvas-header">
    <slot name="label"></slot>
    <button type="button" class="btn-close" aria-label="Close">X</button>
  </div>
  <div class="offcanvas-body">
    <slot></slot>
  </div>
</div>
`;

const backdropTemplate = document.createElement('template');
backdropTemplate.innerHTML = `
<div class="offcanvas-backdrop"></div>
`;

export default class Drawer extends HTMLElement {
  static get observedAttributes() {
    return ['show'];
  }

  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));

    // Add styles
    const itemStyles = document.createElement('style');
    itemStyles.textContent = styles;
    shadow.appendChild(itemStyles);
  }

  attributeChangedCallback(name, _oldValue, newValue) {
    switch (name) {
      case 'show': {
        this._toggleDrawer(newValue !== null);
      }
    }
  }

  connectedCallback() {
    // Offcanvas attributes
    const id = this.getAttribute('id');
    // TODO: Make this a reflective property and set default if not set.
    const show = this.getAttribute('show');
    // TODO: Make this a reflective property and set default if not set.
    const placement = this.getAttribute('placement');
    // TODO: Make this a reflective property and use it.
    const label = this.getAttribute('label');
    // TODO: Make this a reflective property and set default if not set.
    const backdrop = this.getAttribute('backdrop');
    // TODO: Make this a reflective property and set default if not set.
    const scroll = this.getAttribute('scroll');

    const drawerContainer = this.shadowRoot.querySelector('.offcanvas');
    drawerContainer.id = id;

    // Register click handler for closing.
    const closeButton = this.shadowRoot.querySelector('.btn-close');
    closeButton.addEventListener('click', this._handleClose.bind(this));
  }

  disconnectedCallback() {
    const closeButton = this.shadowRoot.querySelector('.btn-close');
    closeButton.removeEventListener('click', this._handleClose.bind(this));
    const backdrop = this.shadowRoot.querySelector('.offcanvas-backdrop');
    if (backdrop) {
      backdrop.removeEventListener('click', this._handleClose.bind(this));
    }
  }

  _toggleDrawer(isOpening) {
    const drawer = this.shadowRoot.querySelector('.offcanvas');
    if (isOpening) {
      drawer.classList.toggle('show', true);
      const backdropCopy = backdropTemplate.content.cloneNode(true);
      this.shadowRoot.appendChild(backdropCopy);
      const backdrop = this.shadowRoot.querySelector('.offcanvas-backdrop');
      backdrop.addEventListener('click', this._handleClose.bind(this))
      backdrop.classList.toggle('show', true);
    } else {
      drawer.classList.toggle('show', false);
      const backdrop = this.shadowRoot.querySelector('.offcanvas-backdrop');
      backdrop.classList.toggle('show', false);
      backdrop.removeEventListener('click', this._handleClose.bind(this));
      backdrop.remove();
    }
  }

  _handleClose() {
    this._toggleDrawer(false);
  }
}
