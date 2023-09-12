import styles from '!!raw-loader!./Accordion.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<slot></slot>
`;

export default class Accordion extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
    this.accordion = document.createElement('div');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line no-unused-vars
    this.shadowRoot.addEventListener('slotchange', (ev) => {
      let tempElements = Array.from(this.children);
      tempElements.forEach((node, index) => {
        switch (node.tagName) {
          case 'COD-ACCORDION-ITEM':
            // See CityOfDetroit/detroitmi#1099
            // eslint-disable-next-line no-case-declarations
            let accordionItem = document.createElement('div');
            accordionItem.className = 'accordion-item';
            node.setAttribute('data-parent-id', this.getAttribute('data-id'));
            node.setAttribute('data-index', index);
            accordionItem.appendChild(node);
            this.accordion.append(accordionItem);
            break;

          default:
            // See CityOfDetroit/detroitmi#1099
            // eslint-disable-next-line no-case-declarations
            let nodeClasses = node.className.split(' ');
            nodeClasses.includes('no-wc')
              ? node.remove()
              : this.card.appendChild(node);
            break;
        }
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
    // Nav attributes
    let flush = this.getAttribute('data-flush');
    let id = this.getAttribute('data-id');
    let extraClasses = this.getAttribute('data-extra-classes');
    let accordionClasses = ['accordion'];
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    flush == 'true' ? accordionClasses.push('accordion-flush') : 0;
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    extraClasses != undefined && extraClasses != null
      ? accordionClasses.push(extraClasses)
      : 0;
    this.accordion.className = accordionClasses.join(' ');
    this.accordion.id = id;
    if (!this.shadowRoot.querySelector('div')) {
      this.shadowRoot.appendChild(this.accordion);
    }
  }
}
