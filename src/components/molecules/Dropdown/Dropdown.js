import styles from '!!raw-loader!./Dropdown.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<slot></slot>
`;

export default class Dropdown extends HTMLElement {
  static get observedAttributes() {
    return ['data-show'];
  }

  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
    this.dropdown = document.createElement('div');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line no-unused-vars
    this.shadowRoot.addEventListener('slotchange', (ev) => {
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line prefer-const
      let tempElements = Array.from(this.children);
      tempElements.forEach((node) => {
        // See CityOfDetroit/detroitmi#1099
        // eslint-disable-next-line prefer-const
        let nodeClasses = node.className.split(' ');
        nodeClasses.includes('no-wc')
          ? node.remove()
          : this.dropdown.append(node);
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
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line no-console
    console.log(newValue);
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line no-console
    console.log(this.dropdownMenu);
  }

  connectedCallback() {
    // badge attributes
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line no-unused-vars, prefer-const
    let show = this.getAttribute('data-show');
    let split = this.getAttribute('data-split');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    split == 'true' ? (split = 'btn-group') : (split = 'dropdown');
    this.dropdown.className = split;
    if (this.querySelector('cod-button[data-bs-toggle="dropdown"]')) {
      this.querySelector(
        'cod-button[data-bs-toggle="dropdown"]',
      ).addEventListener('click', this._onClick);
    }
    if (!this.shadowRoot.querySelector('div')) {
      this.shadowRoot.appendChild(this.dropdown);
    }
  }

  disconnectedCallback() {
    this.removeEventListener('click', this._onClick.bind(this));
  }

  _onClick(e) {
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line no-console
    console.log(this.parentElement.querySelector('cod-dropdown-menu'));
    if (e.target.getAttribute('data-bs-toggle') === 'dropdown') {
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line no-console
      console.log('changing dropdown state');
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line eqeqeq
      if (this.getAttribute('aria-expanded') == 'true') {
        this.setAttribute('aria-expanded', 'false');
        this.parentElement
          .querySelector('cod-dropdown-menu')
          .setAttribute('data-show', 'false');
      } else {
        this.setAttribute('aria-expanded', 'true');
        this.parentElement
          .querySelector('cod-dropdown-menu')
          .setAttribute('data-show', 'true');
      }
    }
  }
}
