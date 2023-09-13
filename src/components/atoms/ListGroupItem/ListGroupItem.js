import styles from '!!raw-loader!./ListGroupItem.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<slot></slot>
`;

export default class ListGroupItem extends HTMLElement {
  static get observedAttributes() {
    return ['data-order', 'data-parent-classes', 'data-order-index'];
  }

  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
    this.listGroupItem = null;

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
      case 'data-order':
        // See CityOfDetroit/detroitmi#1099
        // eslint-disable-next-line eqeqeq
        if (newValue != null) {
          this.listGroupItem.className = `${this.listGroupItem.className} ${newValue}`;
        }
        break;

      case 'data-parent-classes':
        // See CityOfDetroit/detroitmi#1099
        // eslint-disable-next-line eqeqeq
        if (newValue != null) {
          this.listGroupItem.className = `${this.listGroupItem.className} ${newValue}`;
        }
        break;

      case 'data-order-index':
        // See CityOfDetroit/detroitmi#1099
        // eslint-disable-next-line no-console
        console.log(newValue);
        // See CityOfDetroit/detroitmi#1099
        // eslint-disable-next-line eqeqeq
        if (newValue != null) {
          this.listGroupItem.innerHTML = `${newValue}. ${this.listGroupItem.innerHTML}`;
          // See CityOfDetroit/detroitmi#1099
          // eslint-disable-next-line prefer-const
          let tempElements = Array.from(this.children);
          tempElements.forEach((node) => {
            this.listGroupItem.append(node);
          });
        }
        break;

      default:
        break;
    }
  }

  connectedCallback() {
    // badge attributes
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let tag = this.getAttribute('data-tag');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let backgroundColor = this.getAttribute('data-background-color');
    let current = this.getAttribute('data-current');
    let disabled = this.getAttribute('data-disabled');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let text = this.getAttribute('data-text');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let extraClasses = this.getAttribute('data-extra-classes');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let url = this.getAttribute('data-url');
    this.listGroupItem = document.createElement(tag);
    let actionItem = '';
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    tag == 'a' || tag == 'button' ? (actionItem = 'list-group-item-action') : 0;
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (text != undefined || text != null) {
      this.listGroupItem.innerText = text;
    }
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (url != undefined || url != null) {
      this.listGroupItem.href = url;
    }
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (current == 'true') {
      this.listGroupItem.setAttribute('aria-current', 'true');
      current = 'active';
    }
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (disabled == 'true') {
      this.listGroupItem.setAttribute('aria-disabled', 'true');
      disabled = 'disabled';
    }
    this.listGroupItem.className = [
      'list-group-item',
      `list-group-item-${backgroundColor || ''}`,
      `${current || ''}`,
      `${disabled || ''}`,
      `${actionItem || ''}`,
      `${extraClasses || ''}`,
    ].join(' ');

    if (!this.shadowRoot.querySelector(tag)) {
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line no-unused-vars
      this.shadowRoot.addEventListener('slotchange', (ev) => {
        // See CityOfDetroit/detroitmi#1099
        // eslint-disable-next-line prefer-const
        let tempElements = Array.from(this.children);
        tempElements.forEach((node) => {
          this.listGroupItem.append(node);
        });
      });
      this.shadowRoot.appendChild(this.listGroupItem);
    }
  }
}
