import styles from '!!raw-loader!./Button.css';

const template = document.createElement('template');
template.innerHTML = `
<button class="btn" part="base">
  <slot name="prefix"></slot>
  <slot></slot>
  <slot name="suffix"></slot>
  <span class="caret-container">
    <span class="caret" aria-hidden="true"></span>
  </span>
  <cod-spinner data-background-color="primary" data-type="border" role="status" aria-hidden="true"></cod-spinner>
</button>
`;

export default class Button extends HTMLElement {
  static get observedAttributes() {
    return [
      'variant',
      'size',
      'outline',
      'disabled',
      'caret',
      'loading',
      'href',
      'data-label',
      'target',
      'download',
      'rel',
      'square',
    ];
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
      variant: 'default',
      size: 'medium',
      outline: false,
      disabled: false,
      caret: false,
      loading: false,
      href: '',
      target: '',
      download: '',
      rel: '',
      square: false,
    };

    // Bind event handlers
    this._handleClick = this._handleClick.bind(this);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // Early return if value hasn't changed
    if (oldValue === newValue) return;

    switch (name) {
      case 'variant':
        this._state.variant = newValue || 'default';
        break;
      case 'size':
        this._state.size = newValue || 'medium';
        break;
      case 'outline':
        this._state.outline = newValue !== null;
        break;
      case 'disabled':
        this._state.disabled = newValue !== null;
        break;
      case 'caret':
        this._state.caret = newValue !== null;
        break;
      case 'loading':
        this._state.loading = newValue !== null;
        break;
      case 'href':
        this._state.href = newValue || '';
        break;
      case 'data-label':
        this.shadowRoot.querySelector('a').setAttribute('aria-label', newValue);
        break;
      case 'target':
        this._state.target = newValue || '';
        break;
      case 'download':
        this._state.download = newValue || '';
        break;
      case 'rel':
        this._state.rel = newValue || '';
        break;
      case 'square':
        this._state.square = newValue !== null;
        break;
      case 'square':
        this._state.square = newValue !== null;
        break;
    }

    // Re-render the component whenever an attribute changes
    this._render();
  }

  connectedCallback() {
    // Set up event listeners
    this.addEventListener('click', this._handleClick);

    // Initialize state from attributes
    this._state.variant = this.getAttribute('variant') || 'default';
    this._state.size = this.getAttribute('size') || 'medium';
    this._state.outline = this.hasAttribute('outline');
    this._state.disabled = this.hasAttribute('disabled');
    this._state.caret = this.hasAttribute('caret');
    this._state.loading = this.hasAttribute('loading');
    this._state.href = this.getAttribute('href') || '';
    this._state.target = this.getAttribute('target') || '';
    this._state.download = this.getAttribute('download') || '';
    this._state.rel = this.getAttribute('rel') || '';
    this._state.square = this.hasAttribute('square');

    // Initial render
    this._render();
  }

  disconnectedCallback() {
    // Clean up event listeners
    this.removeEventListener('click', this._handleClick);
  }

  _render() {
    // Determine if we need to render as a button or an anchor
    const isLink = Boolean(this._state.href);

    if (isLink && this.shadowRoot.querySelector('button')) {
      // Replace button with anchor
      const button = this.shadowRoot.querySelector('button');
      const anchor = document.createElement('a');
      const trash = document.createElement('span');

      // Copy all children from button to anchor
      while (button.firstChild) {
        if(button.firstChild.name != 'suffix' && button.firstChild.name != 'prefix' && button.firstChild.tagName == 'SLOT'){
          anchor.appendChild(button.firstChild);
        }else{
          trash.appendChild(button.firstChild);
        }
      }

      // Copy classes and part attribute
      anchor.className = button.className;
      anchor.setAttribute('part', button.getAttribute('part') || 'base');

      // Replace button with anchor
      button.replaceWith(anchor);
    } else if (!isLink && this.shadowRoot.querySelector('a')) {
      // Replace anchor with button
      const anchor = this.shadowRoot.querySelector('a');
      const button = document.createElement('button');

      // Copy all children from anchor to button
      while (anchor.firstChild) {
        button.appendChild(anchor.firstChild);
      }

      // Copy classes and part attribute
      button.className = anchor.className;
      button.setAttribute('part', anchor.getAttribute('part') || 'base');

      // Replace anchor with button
      anchor.replaceWith(button);
    }

    // Get the current root element (button or anchor)
    const element = isLink
      ? this.shadowRoot.querySelector('a')
      : this.shadowRoot.querySelector('button');

    // Update element classes based on variant and size
    this._renderVariant(element);
    this._renderSize(element);
    this._renderOutline(element);
    this._renderSquare(element);

    // Set attributes for link
    if (isLink) {
      element.href = this._state.href;
      if (this._state.target) {
        element.target = this._state.target;
        // Add rel for security when target="_blank"
        if (this._state.target === '_blank') {
          element.rel = this._state.rel || 'noreferrer noopener';
        } else if (this._state.rel) {
          element.rel = this._state.rel;
        }
      }
      if (this._state.download) {
        element.download = this._state.download;
      }
    }

    // Handle disabled state
    element.disabled = isLink ? false : this._state.disabled;
    element.setAttribute('aria-disabled', this._state.disabled.toString());
    if (isLink && this._state.disabled) {
      element.classList.add('disabled');
      element.setAttribute('tabindex', '-1');
      element.style.pointerEvents = 'none';
    } else if (isLink) {
      element.classList.remove('disabled');
      element.removeAttribute('tabindex');
      element.style.pointerEvents = '';
    }

    // Show/hide caret
    const caretContainer = this.shadowRoot.querySelector('.caret-container');
    if (caretContainer) {
      caretContainer.style.display = this._state.caret
        ? 'inline-block'
        : 'none';
    }

    // Show/hide loading spinner
    const spinner = this.shadowRoot.querySelector('cod-spinner');
    if (spinner) {
      if (this._state.loading) {
        element.classList.add('loading');

        // Ensure the spinner size matches the button size
        if (this._state.size === 'large') {
          spinner.setAttribute('data-size', 'md');
        } else {
          spinner.setAttribute('data-size', 'sm');
        }

        // Set spinner color based on button variant
        if (
          this._state.variant === 'primary' ||
          this._state.variant === 'danger' ||
          this._state.variant === 'dark'
        ) {
          // For variants with light text on dark backgrounds
          spinner.setAttribute('data-background-color', 'light');
        } else {
          // For variants with dark text on light backgrounds
          spinner.setAttribute('data-background-color', 'dark');
        }
      } else {
        element.classList.remove('loading');
      }
    }
  }

  _renderSquare(element) {
    if (this._state.square) {
      element.classList.add('btn-square');
    } else {
      element.classList.remove('btn-square');
    }
  }

  _renderVariant(element) {
    // Remove all variant classes
    element.classList.remove(
      'btn-primary',
      'btn-secondary',
      'btn-success',
      'btn-danger',
      'btn-warning',
      'btn-info',
      'btn-light',
      'btn-dark',
      'btn-link',
      'btn-neutral',
      'btn-text',
    );

    // Map component variant values to Bootstrap classes
    const variantMap = {
      default: '',
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      'accent-primary': 'btn-accent-primary',
      'accent-secondary': 'btn-accent-secondary',
      success: 'btn-success',
      danger: 'btn-danger',
      warning: 'btn-warning',
      info: 'btn-info',
      neutral: 'btn-light',
      text: 'btn-link',
    };

    // Add the appropriate variant class
    if (this._state.variant === 'text') {
      element.classList.add('btn-link');
      // Add additional styling for text buttons
      element.style.padding = '0';
      element.style.verticalAlign = 'baseline';
    } else if (variantMap[this._state.variant]) {
      element.classList.add(variantMap[this._state.variant]);
      element.style.padding = '';
      element.style.verticalAlign = '';
    } else {
      // Default to secondary if variant is not recognized
      element.classList.add('btn-secondary');
      element.style.padding = '';
      element.style.verticalAlign = '';
    }
  }

  _renderSize(element) {
    // Remove all size classes
    element.classList.remove('btn-sm', 'btn-lg');

    // Add the appropriate size class
    if (this._state.size === 'small') {
      element.classList.add('btn-sm');
    } else if (this._state.size === 'large') {
      element.classList.add('btn-lg');
    }
    // Medium is the default size, no class needed
  }

  _renderOutline(element) {
    // Handle outline variant by replacing btn-* with btn-outline-*
    if (this._state.outline && this._state.variant !== 'text') {
      for (const className of Array.from(element.classList)) {
        if (
          className.startsWith('btn-') &&
          !className.startsWith('btn-outline-') &&
          className !== 'btn-link'
        ) {
          element.classList.remove(className);
          element.classList.add(`btn-outline-${className.substring(4)}`);
        }
      }
    } else {
      // Remove outline classes if outline is false
      for (const className of Array.from(element.classList)) {
        if (className.startsWith('btn-outline-')) {
          element.classList.remove(className);
          element.classList.add(`btn-${className.substring(11)}`);
        }
      }
    }
  }

  _handleClick(event) {
    // Prevent default action when disabled or loading
    if (this._state.disabled || this._state.loading) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  // Getters and setters
  get variant() {
    return this._state.variant;
  }

  set variant(value) {
    this.setAttribute('variant', value);
  }

  get square() {
    return this._state.square;
  }

  set square(value) {
    if (value) {
      this.setAttribute('square', '');
    } else {
      this.removeAttribute('square');
    }
  }

  get size() {
    return this._state.size;
  }

  set size(value) {
    this.setAttribute('size', value);
  }

  get outline() {
    return this._state.outline;
  }

  set outline(value) {
    if (value) {
      this.setAttribute('outline', '');
    } else {
      this.removeAttribute('outline');
    }
  }

  get disabled() {
    return this._state.disabled;
  }

  set disabled(value) {
    if (value) {
      this.setAttribute('disabled', '');
    } else {
      this.removeAttribute('disabled');
    }
  }

  get caret() {
    return this._state.caret;
  }

  set caret(value) {
    if (value) {
      this.setAttribute('caret', '');
    } else {
      this.removeAttribute('caret');
    }
  }

  get loading() {
    return this._state.loading;
  }

  set loading(value) {
    if (value) {
      this.setAttribute('loading', '');
    } else {
      this.removeAttribute('loading');
    }
  }
}
