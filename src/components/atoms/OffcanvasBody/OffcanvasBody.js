import styles from '!!raw-loader!./OffcanvasBody.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<slot></slot>
`;

export default class OffcanvasBody extends HTMLElement {
  static observedAttributes = ['data-expand'];

  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
    this.body = document.createElement('div');
    this.shadowRoot.addEventListener('slotchange', () => {
      const tempElements = Array.from(this.children);
      tempElements.forEach((node) => {
        if (node.tagName === 'COD-NAV') {
          node.setAttribute('data-extra-classes', 'navbar-nav');
        }
        const expand = this.getAttribute('data-expand');
        if (expand) {
          node.setAttribute('data-expand', expand);
        }
        this.body.append(node);
      });
    });

    // Add styles
    const bootStyles = document.createElement('style');
    bootStyles.textContent = bootstrapStyles;
    const variableStyles = document.createElement('style');
    variableStyles.textContent = varStyles;
    const itemStyles = document.createElement('style');
    itemStyles.textContent = styles;
    shadow.appendChild(bootStyles);
    shadow.appendChild(variableStyles);
    shadow.appendChild(itemStyles);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'data-expand': {
        if (newValue) {
          this.shadowRoot
            .querySelector('cod-nav')
            .setAttribute('data-expand', newValue);
        }
      }
    }
  }

  connectedCallback() {
    // OffcanvasBody attributes
    const extraClasses = this.getAttribute('data-extra-classes');
    const bodyClasses = ['offcanvas-body'];
    extraClasses ? bodyClasses.push(extraClasses) : 0;
    const expand = this.getAttribute('data-expand');
    if (expand) {
      expand === 'always'
        ? bodyClasses.push('navbar-expand')
        : bodyClasses.push(`navbar-expand-${expand}`);
    }
    this.body.className = bodyClasses.join(' ');
    if (!this.shadowRoot.querySelector('div')) {
      this.shadowRoot.appendChild(this.body);
    }
  }
}
