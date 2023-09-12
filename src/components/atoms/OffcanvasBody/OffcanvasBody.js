import styles from '!!raw-loader!./OffcanvasBody.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<slot></slot>
`;

export default class OffcanvasBody extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
    this.body = document.createElement('div');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line no-unused-vars
    this.shadowRoot.addEventListener('slotchange', (ev) => {
      let tempElements = Array.from(this.children);
      tempElements.forEach((node) => {
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

  connectedCallback() {
    // OffcanvasBody attributes
    let extraClasses = this.getAttribute('data-extra-classes');
    let bodyClasses = ['offcanvas-body'];
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    extraClasses != undefined && extraClasses != null
      ? bodyClasses.push(extraClasses)
      : 0;
    this.body.className = bodyClasses.join(' ');
    if (!this.shadowRoot.querySelector('div')) {
      this.shadowRoot.appendChild(this.body);
    }
  }
}
