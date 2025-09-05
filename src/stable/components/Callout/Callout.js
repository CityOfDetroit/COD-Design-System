import styles from '!!raw-loader!./Callout.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');
template.innerHTML = `
<div class="cod-callout" part="base" role="region">
  <div class="cod-callout__content">
    <div class="cod-callout__icon" part="icon" aria-hidden="true"></div>
    <div class="cod-callout__body" part="body">
      <h4 class="cod-callout__heading" part="heading"><slot name="heading"></slot></h4>
      <div class="cod-callout__text" part="text">
        <slot></slot>
      </div>
    </div>
  </div>
</div>
`;

// Icon SVGs from Bootstrap Icons
const ICONS = {
  info: `<svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
  </svg>`,
  success: `<svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
    <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
  </svg>`,
  warning: `<svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
  </svg>`,
  error: `<svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
  </svg>`,
  emergency: `<svg viewBox="0 0 16 16" fill="currentColor">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
  </svg>`
};

export default class Callout extends HTMLElement {
  static get observedAttributes() {
    return ['variant', 'slim', 'no-icon'];
  }

  constructor() {
    super();
    this._state = {
      variant: 'info',
      slim: false,
      noIcon: false
    };

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));

    this._callout = shadow.querySelector('.cod-callout');
    this._content = shadow.querySelector('.cod-callout__content');
    this._icon = shadow.querySelector('.cod-callout__icon');
    this._heading = shadow.querySelector('.cod-callout__heading');
    this._text = shadow.querySelector('.cod-callout__text');
  }

  connectedCallback() {
    this._injectStyles();
    this._updateFromAttributes();
    this._updateClasses();
    this._updateAriaRole();
    this._updateIcon();
    this._hideEmptyHeading();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this._updateFromAttributes();
      this._updateClasses();
      this._updateAriaRole();
      this._updateIcon();
    }
  }

  _injectStyles() {
    const bootStyles = document.createElement('style');
    bootStyles.textContent = bootstrapStyles;
    const variableStyles = document.createElement('style');
    variableStyles.textContent = varStyles;
    const calloutStyles = document.createElement('style');
    calloutStyles.textContent = styles;
    
    this.shadowRoot.appendChild(bootStyles);
    this.shadowRoot.appendChild(variableStyles);
    this.shadowRoot.appendChild(calloutStyles);
  }

  _updateFromAttributes() {
    this._state.variant = this.getAttribute('variant') || 'info';
    this._state.slim = this.hasAttribute('slim');
    this._state.noIcon = this.hasAttribute('no-icon');
  }

  _updateClasses() {
    const classes = ['cod-callout'];
    
    // Add variant class
    if (this._state.variant && this._state.variant !== 'info') {
      classes.push(`cod-callout--${this._state.variant}`);
    }
    
    // Add modifier classes
    if (this._state.slim) {
      classes.push('cod-callout--slim');
    }
    
    if (this._state.noIcon) {
      classes.push('cod-callout--no-icon');
    }

    this._callout.className = classes.join(' ');
  }

  _updateAriaRole() {
    // Set appropriate ARIA role based on variant
    switch (this._state.variant) {
      case 'error':
      case 'emergency':
        this._callout.setAttribute('role', 'alert');
        this._callout.setAttribute('aria-live', 'assertive');
        break;
      case 'warning':
        this._callout.setAttribute('role', 'alert');
        this._callout.setAttribute('aria-live', 'polite');
        break;
      case 'success':
        this._callout.setAttribute('role', 'status');
        this._callout.setAttribute('aria-live', 'polite');
        break;
      default:
        this._callout.setAttribute('role', 'region');
        this._callout.removeAttribute('aria-live');
    }
  }

  _updateIcon() {
    // Hide icon if no-icon attribute is set
    if (this._state.noIcon) {
      this._icon.style.display = 'none';
      return;
    }

    // Show icon and set content based on variant
    this._icon.style.display = 'block';
    const iconSvg = ICONS[this._state.variant] || ICONS.info;
    this._icon.innerHTML = iconSvg;
  }

  _hideEmptyHeading() {
    const headingSlot = this.shadowRoot.querySelector('slot[name="heading"]');
    const hasHeadingContent = headingSlot.assignedNodes().length > 0;
    
    if (!hasHeadingContent) {
      this._heading.style.display = 'none';
    }
  }

  // Property getters and setters
  get variant() {
    return this._state.variant;
  }

  set variant(value) {
    if (value !== this._state.variant) {
      this.setAttribute('variant', value);
    }
  }

  get slim() {
    return this._state.slim;
  }

  set slim(value) {
    if (value) {
      this.setAttribute('slim', '');
    } else {
      this.removeAttribute('slim');
    }
  }

  get noIcon() {
    return this._state.noIcon;
  }

  set noIcon(value) {
    if (value) {
      this.setAttribute('no-icon', '');
    } else {
      this.removeAttribute('no-icon');
    }
  }
}