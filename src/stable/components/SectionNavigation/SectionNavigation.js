import styles from '!!raw-loader!./SectionNavigation.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');
template.innerHTML = `
<style>
${bootstrapStyles}
${varStyles}
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
    // declares a function named wrapLinks
    const wrapLinks = () => {
      // gets all the elements currently assigned to the slot
      const assignedElements = slot.assignedElements();
      //  starts a loop that will process each assigned element
      assignedElements.forEach((element) => {
        //  checks if the current element is an <a> tag and if its parent doesn't already have the class 'nav-item'
        if (
          element.tagName === 'A' &&
          !element.parentElement.tagName !== 'LI'
        ) {
          // If the condition is met, this creates a new <li> element
          const li = document.createElement('li');
          // adds the 'nav-item' class to the newly created <li> element
          li.classList.add('nav-item');
          li.setAttribute('slot', 'nav-items');
          element.removeAttribute('slot');
          // inserts the new <li> element into the DOM, right before the current <a> element
          element.parentNode.insertBefore(li, element);
          // moves the <a> element to be a child of the new <li> element
          li.appendChild(element);
        }
      });
    };

    // Listen for dynamically added links
    slot.addEventListener('slotchange', wrapLinks);
  }
}

export { SectionNavigation as default };
