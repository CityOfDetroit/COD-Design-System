import styles from '!!raw-loader!./DetailPanel.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');
template.innerHTML = `
<div class="cod-detail-panel" part="base">
  <div class="cod-detail-panel__content">
    <div class="cod-detail-panel__heading" part="heading">
      <button 
        class="cod-detail-panel__button" 
        part="button"
        type="button" 
        aria-expanded="false">
        <span class="cod-detail-panel__button-text">
          <slot name="heading"></slot>
        </span>
        <span class="cod-detail-panel__icon" part="icon" aria-hidden="true"></span>
      </button>
    </div>
    <div class="cod-detail-panel__body" part="body" hidden>
      <slot></slot>
    </div>
  </div>
</div>
`;

// Expand/collapse icons from Bootstrap Icons
const ICONS = {
  collapsed: `<svg viewBox="0 0 16 16" fill="currentColor">
    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
  </svg>`,
  expanded: `<svg viewBox="0 0 16 16" fill="currentColor">
    <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
  </svg>`
};

export default class DetailPanel extends HTMLElement {
  static get observedAttributes() {
    return ['expanded', 'bordered', 'allow-multiple'];
  }

  constructor() {
    super();
    this._state = {
      expanded: false,
      bordered: false,
      allowMultiple: false
    };

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));

    this._panel = shadow.querySelector('.cod-detail-panel');
    this._content = shadow.querySelector('.cod-detail-panel__content');
    this._heading = shadow.querySelector('.cod-detail-panel__heading');
    this._button = shadow.querySelector('.cod-detail-panel__button');
    this._body = shadow.querySelector('.cod-detail-panel__body');
    this._icon = shadow.querySelector('.cod-detail-panel__icon');

    // Generate unique ID for accessibility
    this._panelId = `cod-detail-panel-${Math.random().toString(36).substr(2, 9)}`;
    this._body.id = this._panelId;
    this._button.setAttribute('aria-controls', this._panelId);

    // Bind event handlers
    this._handleClick = this._handleClick.bind(this);
    this._handleKeydown = this._handleKeydown.bind(this);
  }

  connectedCallback() {
    this._injectStyles();
    this._updateFromAttributes();
    this._updateClasses();
    this._updateExpandedState();
    this._updateIcon();
    this._addEventListeners();
  }

  disconnectedCallback() {
    this._removeEventListeners();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this._updateFromAttributes();
      this._updateClasses();
      if (name === 'expanded') {
        this._updateExpandedState();
        this._updateIcon();
      }
    }
  }

  _injectStyles() {
    const bootStyles = document.createElement('style');
    bootStyles.textContent = bootstrapStyles;
    const variableStyles = document.createElement('style');
    variableStyles.textContent = varStyles;
    const panelStyles = document.createElement('style');
    panelStyles.textContent = styles;
    
    this.shadowRoot.appendChild(bootStyles);
    this.shadowRoot.appendChild(variableStyles);
    this.shadowRoot.appendChild(panelStyles);
  }

  _updateFromAttributes() {
    this._state.expanded = this.hasAttribute('expanded');
    this._state.bordered = this.hasAttribute('bordered');
    this._state.allowMultiple = this.hasAttribute('allow-multiple');
  }

  _updateClasses() {
    const classes = ['cod-detail-panel'];
    
    if (this._state.bordered) {
      classes.push('cod-detail-panel--bordered');
    }

    this._panel.className = classes.join(' ');
  }

  _updateExpandedState() {
    this._button.setAttribute('aria-expanded', this._state.expanded.toString());
    
    if (this._state.expanded) {
      this._body.hidden = false;
      this._content.classList.add('cod-detail-panel__content--expanded');
    } else {
      this._body.hidden = true;
      this._content.classList.remove('cod-detail-panel__content--expanded');
    }
  }

  _updateIcon() {
    const iconSvg = this._state.expanded ? ICONS.expanded : ICONS.collapsed;
    this._icon.innerHTML = iconSvg;
  }

  _addEventListeners() {
    this._button.addEventListener('click', this._handleClick);
    this._button.addEventListener('keydown', this._handleKeydown);
  }

  _removeEventListeners() {
    this._button.removeEventListener('click', this._handleClick);
    this._button.removeEventListener('keydown', this._handleKeydown);
  }

  _handleClick() {
    this.toggle();
  }

  _handleKeydown(event) {
    // Handle keyboard navigation
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        this.toggle();
        break;
      case 'ArrowDown':
        if (!this._state.allowMultiple) {
          event.preventDefault();
          this._focusNextPanel();
        }
        break;
      case 'ArrowUp':
        if (!this._state.allowMultiple) {
          event.preventDefault();
          this._focusPreviousPanel();
        }
        break;
    }
  }

  _focusNextPanel() {
    const allPanels = Array.from(document.querySelectorAll('cod-detail-panel'));
    const currentIndex = allPanels.indexOf(this);
    const nextPanel = allPanels[currentIndex + 1] || allPanels[0];
    nextPanel?.shadowRoot?.querySelector('.cod-detail-panel__button')?.focus();
  }

  _focusPreviousPanel() {
    const allPanels = Array.from(document.querySelectorAll('cod-detail-panel'));
    const currentIndex = allPanels.indexOf(this);
    const previousPanel = allPanels[currentIndex - 1] || allPanels[allPanels.length - 1];
    previousPanel?.shadowRoot?.querySelector('.cod-detail-panel__button')?.focus();
  }

  // Public API
  expand() {
    if (!this._state.expanded) {
      this.setAttribute('expanded', '');
    }
  }

  collapse() {
    if (this._state.expanded) {
      this.removeAttribute('expanded');
    }
  }

  toggle() {
    if (this._state.expanded) {
      this.collapse();
    } else {
      // If not in multi-select mode, collapse other panels
      if (!this._state.allowMultiple) {
        this._collapseSiblingPanels();
      }
      this.expand();
    }
  }

  _collapseSiblingPanels() {
    const parent = this.parentElement;
    if (parent) {
      const siblingPanels = parent.querySelectorAll('cod-detail-panel:not([allow-multiple])');
      siblingPanels.forEach(panel => {
        if (panel !== this) {
          panel.collapse();
        }
      });
    }
  }

  // Property getters and setters
  get expanded() {
    return this._state.expanded;
  }

  set expanded(value) {
    if (value) {
      this.setAttribute('expanded', '');
    } else {
      this.removeAttribute('expanded');
    }
  }

  get bordered() {
    return this._state.bordered;
  }

  set bordered(value) {
    if (value) {
      this.setAttribute('bordered', '');
    } else {
      this.removeAttribute('bordered');
    }
  }

  get allowMultiple() {
    return this._state.allowMultiple;
  }

  set allowMultiple(value) {
    if (value) {
      this.setAttribute('allow-multiple', '');
    } else {
      this.removeAttribute('allow-multiple');
    }
  }
}