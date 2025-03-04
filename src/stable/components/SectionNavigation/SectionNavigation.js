import styles from '!!raw-loader!./SectionNavigation.css';

const template = document.createElement('template');
template.innerHTML = `
<style>
${styles}
</style>
<div class="section-container">
  <div class="section-header">
    <slot name="header">On This Page</slot>
    <button type="button" class="toggle-button" aria-label="Toggle navigation" aria-expanded="false">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
      </svg>
    </button>
  </div>
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

  connectedCallback() {
    this._setupListeners();
    this._wrapSlottedLinks();
  }

  disconnectedCallback() {
    const toggle = this.shadowRoot.querySelector('.toggle-button');
    toggle.removeEventListener('click', this._handleToggle);
  }

  _setupListeners() {
    const toggle = this.shadowRoot.querySelector('.toggle-button');
    if (toggle) {
      toggle.addEventListener('click', this._handleToggle.bind(this));
    }
  }

  _handleToggle() {
    const button = this.shadowRoot.querySelector('.toggle-button');
    const container = this.shadowRoot.querySelector('.section-container');
    if (button && container) {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', (!isExpanded).toString());
      container.classList.toggle('expanded');
    }
  }
  _wrapSlottedLinks() {
    const slot = this.shadowRoot.querySelector('slot[name="nav-items"]');
    if (!slot) return;

    const wrapLinks = () => {
      const assignedElements = slot.assignedElements();
      assignedElements.forEach((element) => {
        if (element.tagName === 'A' && element.parentElement.tagName !== 'LI') {
          const li = document.createElement('li');
          li.classList.add('nav-item');
          li.setAttribute('slot', 'nav-items');
          element.removeAttribute('slot');
          element.parentNode.insertBefore(li, element);
          li.appendChild(element);
        } else if (element.tagName === 'LI') {
          // Handle li with anchor or li by itself
          if (element.querySelector('a')) {
            // li with anchor: ensure it has the correct class and slot
            element.classList.add('nav-item');
            element.setAttribute('slot', 'nav-items');
          } 
        } else if (element.tagName === 'A') {
          // Handle anchor by itself
          const li = document.createElement('li');
          li.classList.add('nav-item');
          li.setAttribute('slot', 'nav-items');
          element.removeAttribute('slot');
          element.parentNode.insertBefore(li, element);
          li.appendChild(element);
        } else {
          // Remove any other elements that are not li or a
          element.remove();
        }
      });
    };

    // Listen for dynamically added links
    slot.addEventListener('slotchange', wrapLinks);
  }
}

export { SectionNavigation as default };
