import styles from '!!raw-loader!./Drawer.css';

const template = document.createElement('template');

// TODO: Use cod-button instead for close after it's updated
// https://github.com/CityOfDetroit/COD-Design-System/issues/315
template.innerHTML = `
<div class="offcanvas" tabindex="-1" role="dialog" aria-modal="true">
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
    return ['open', 'placement', 'backdrop', 'scroll'];
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
      open: false,
      placement: 'end',
      backdrop: true,
      scroll: false,
    };

    // Bind event handlers
    this._handleClose = this._handleClose.bind(this);
    this._handleKeyDown = this._handleKeyDown.bind(this);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // Early return if value hasn't changed
    if (oldValue === newValue) return;

    switch (name) {
      case 'open':
        this._state.open = newValue !== null;
        break;
      case 'placement':
        this._state.placement = newValue || 'end';
        break;
      case 'backdrop':
        this._state.backdrop =
          newValue === 'true'
            ? true
            : newValue === 'false'
            ? false
            : newValue || true;
        break;
      case 'scroll':
        this._state.scroll = newValue !== null;
        break;
    }

    // Re-render the component whenever an attribute changes
    this._render();
  }

  connectedCallback() {
    const drawer = this.shadowRoot.querySelector('.offcanvas');
    const id = this.getAttribute('id');
    if (id) drawer.id = id;

    // Set the aria-labelledby attribute based on the label slot
    const labelSlot = this.shadowRoot.querySelector('slot[name="label"]');
    if (labelSlot) {
      const labelId = `${id || 'drawer'}-label`;
      drawer.setAttribute('aria-labelledby', labelId);
    }

    // Set up event listeners
    const closeButton = this.shadowRoot.querySelector('.btn-close');
    closeButton.addEventListener('click', this._handleClose);
    document.addEventListener('keydown', this._handleKeyDown);

    // Initialize state from attributes
    this._state.open = this.hasAttribute('open');
    this._state.placement = this.getAttribute('placement') || 'end';
    this._state.backdrop =
      this.getAttribute('backdrop') === 'false'
        ? false
        : this.getAttribute('backdrop') || true;
    this._state.scroll = this.hasAttribute('scroll');

    // Set default attributes if not present
    if (!this.hasAttribute('placement')) this.setAttribute('placement', 'end');
    if (!this.hasAttribute('backdrop')) this.setAttribute('backdrop', 'true');

    // Initial render
    this._render();
  }

  disconnectedCallback() {
    // Clean up event listeners
    const closeButton = this.shadowRoot.querySelector('.btn-close');
    closeButton.removeEventListener('click', this._handleClose);
    document.removeEventListener('keydown', this._handleKeyDown);

    this._removeBackdropEventListener();

    // Make sure we restore body scrolling if the drawer is removed
    this._enableBodyScroll();
  }

  _render() {
    const wasOpen = this.shadowRoot
      .querySelector('.offcanvas')
      .classList.contains('show');
    const willBeOpen = this._state.open;

    this._renderDrawer();
    this._renderBackdrop();
    this._updateBodyScroll();

    // Dispatch events when state changes
    if (!wasOpen && willBeOpen) {
      this.dispatchEvent(new CustomEvent('cod-show', { bubbles: true }));
    } else if (wasOpen && !willBeOpen) {
      this.dispatchEvent(new CustomEvent('cod-hide', { bubbles: true }));
    }
  }

  _renderDrawer() {
    const drawer = this.shadowRoot.querySelector('.offcanvas');

    // Update placement
    drawer.classList.remove(
      'offcanvas-start',
      'offcanvas-end',
      'offcanvas-top',
      'offcanvas-bottom',
    );
    drawer.classList.add(`offcanvas-${this._state.placement}`);

    // Update visibility
    drawer.classList.toggle('show', this._state.open);
  }

  _renderBackdrop() {
    this._removeBackdropEventListener();

    // Remove existing backdrop if present
    const existingBackdrop = this.shadowRoot.querySelector(
      '.offcanvas-backdrop',
    );
    if (existingBackdrop) existingBackdrop.remove();

    // If drawer is closed or backdrop is false, we're done
    if (!this._state.open || this._state.backdrop === false) return;

    // Create new backdrop
    const backdropCopy = backdropTemplate.content.cloneNode(true);
    this.shadowRoot.appendChild(backdropCopy);
    const backdrop = this.shadowRoot.querySelector('.offcanvas-backdrop');
    backdrop.classList.add('show');

    // Add click listener if backdrop is not static
    if (this._state.backdrop !== 'static') {
      backdrop.addEventListener('click', this._handleClose);
    }
  }

  _updateBodyScroll() {
    if (this._state.open && !this._state.scroll) {
      this._disableBodyScroll();
    } else {
      this._enableBodyScroll();
    }
  }

  _disableBodyScroll() {
    // Store current body padding and overflow
    this._bodyPaddingRight = document.body.style.paddingRight;
    this._bodyOverflow = document.body.style.overflow;

    // Calculate scrollbar width to avoid page shift
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    // Apply padding equal to scrollbar width to prevent content shift
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
  }

  _enableBodyScroll() {
    // Restore original body padding and overflow
    document.body.style.paddingRight = this._bodyPaddingRight || '';
    document.body.style.overflow = this._bodyOverflow || '';
  }

  _removeBackdropEventListener() {
    const backdrop = this.shadowRoot.querySelector('.offcanvas-backdrop');
    if (backdrop) {
      backdrop.removeEventListener('click', this._handleClose);
    }
  }

  _handleClose() {
    this.removeAttribute('open');
  }

  _handleKeyDown(event) {
    // Close the drawer when Escape key is pressed
    if (event.key === 'Escape' && this._state.open) {
      this._handleClose();
    }
  }

  // Getters and setters
  get open() {
    return this.hasAttribute('open');
  }

  set open(val) {
    if (val) {
      this.setAttribute('open', '');
    } else {
      this.removeAttribute('open');
    }
  }

  get placement() {
    return this.getAttribute('placement');
  }

  set placement(val) {
    this.setAttribute('placement', val);
  }

  get backdrop() {
    return this.getAttribute('backdrop');
  }

  set backdrop(val) {
    this.setAttribute('backdrop', val);
  }

  get scroll() {
    return this.hasAttribute('scroll');
  }

  set scroll(val) {
    if (val) {
      this.setAttribute('scroll', '');
    } else {
      this.removeAttribute('scroll');
    }
  }
}
