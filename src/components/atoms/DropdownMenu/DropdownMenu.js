import styles from '!!raw-loader!./DropdownMenu.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<slot></slot>
`;

export default class DropdownMenu extends HTMLElement {
  static get observedAttributes() {
    return ['data-show'];
  }

  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
    this.dropdownMenu = document.createElement('ul');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line no-unused-vars
    this.shadowRoot.addEventListener('slotchange', (ev) => {
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line prefer-const
      let tempElements = Array.from(this.children);
      tempElements.forEach((node) => {
        this.dropdownMenu.append(node);
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
    // eslint-disable-next-line prefer-const
    let tempClasses = this.dropdownMenu.className.split(' ');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let popValue = tempClasses.pop();
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    popValue != 'show' ? tempClasses.push(popValue) : 0;
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line no-console
    console.log(tempClasses);
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (newValue == 'true') {
      tempClasses.push('show');
    }
    this.dropdownMenu.className = tempClasses.join(' ');
  }

  connectedCallback() {
    // badge attributes
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let darkMode = this.getAttribute('data-dark-mode');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let alignment = this.getAttribute('data-alignment');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let show = this.getAttribute('data-show');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let classList = ['dropdown-menu'];
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    darkMode == 'true' ? classList.push('dropdown-menu-dark') : 0;
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    alignment != undefined && alignment != null
      ? classList.push(`dropdown-menu-${alignment}`)
      : 0;
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    show == 'true' ? classList.push('show') : 0;
    this.dropdownMenu.className = classList.join(' ');

    if (!this.shadowRoot.querySelector('ul')) {
      this.shadowRoot.appendChild(this.dropdownMenu);
    }
  }
}
