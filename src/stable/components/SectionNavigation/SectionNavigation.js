import styles from '!!raw-loader!./SectionNavigation.css';

const template = document.createElement('template');
template.innerHTML = `
<style>
${styles}
</style>
<div class="section-container">
<button type="button" class="section-header" aria-label="Toggle navigation" aria-expanded="false">
  <slot name="header">On This Page</slot>
  <span class="chevron-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
      </svg>
  </span>
</button>

  <nav class="section-nav" aria-labelledby="section-heading">
  <ul>
    <slot name="nav-items"></slot>
  </ul>
  </nav>
</div>
`;

class SectionNavigation extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ['expanded'];
  }

  attributeChangedCallback(name) {
    if (name === 'expanded') {
      this._updateExpansion();
    }
  }

  connectedCallback() {
    if (!this.hasAttribute('expanded')) {
      this.setAttribute('expanded', 'false');
    }
    this._setupListeners();
    this._wrapSlottedLinks();
  }

  disconnectedCallback() {
    const toggle = this.shadowRoot.querySelector('.toggle-button');
    toggle.removeEventListener('click', this._handleToggle);
  }

  _setupListeners() {
    const toggle = this.shadowRoot.querySelector('button.section-header');

    if (toggle) {
      toggle.addEventListener('click', this._handleToggle.bind(this));
    }
  }

  _handleToggle() {
    const isExpanded = this.getAttribute('expanded') === 'true';
    this.setAttribute('expanded', (!isExpanded).toString());
  }

  _updateExpansion() {
    const button = this.shadowRoot.querySelector('button.section-header');
    const container = this.shadowRoot.querySelector('.section-container');
    const isExpanded = this.getAttribute('expanded') === 'true';

    if (button) {
      button.setAttribute('aria-expanded', isExpanded.toString());
    }
    if (container) {
      container.classList.toggle('expanded', isExpanded);
    }
  }

  _wrapSlottedLinks() {
    const slot = this.shadowRoot.querySelector('slot[name="nav-items"]');
    if (!slot) return;

    const wrapLinks = () => {
      const assignedElements = slot.assignedElements();
      assignedElements.forEach((element) => {
        if (element.tagName === 'A') {
          // Wrap the 'a' element in an 'li'
          const li = document.createElement('li');
          li.classList.add('nav-item');
          li.setAttribute('slot', 'nav-items');
          element.removeAttribute('slot');
          element.parentNode.insertBefore(li, element);
          li.appendChild(element);
        } else if (element.tagName === 'LI') {
          if (element.querySelector('a')) {
            // Ensure li with anchor has the correct class and slot
            element.classList.add('nav-item');
            element.setAttribute('slot', 'nav-items');
          } else {
            // Remove li without anchor
            element.remove();
          }
        } else {
          // Remove any other elements
          element.remove();
        }
      });
    };

    wrapLinks();

    // Listen for dynamically added links
    slot.addEventListener('slotchange', wrapLinks);
  }
}
export { SectionNavigation as default };
