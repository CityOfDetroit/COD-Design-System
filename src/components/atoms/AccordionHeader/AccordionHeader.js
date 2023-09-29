import styles from '!!raw-loader!./AccordionHeader.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<slot></slot>
`;

export default class AccordionHeader extends HTMLElement {
  static get observedAttributes() {
    return ['data-expanded'];
  }

  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
    this.accordionHeader = document.createElement('div');
    this.accordionBtn = document.createElement('button');
    this.accordionHeader.appendChild(this.accordionBtn);
    this.shadowRoot.addEventListener('slotchange', (ev) => {
      // TODO: See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line prefer-const
      let tempElements = ev.target.assignedElements();
      tempElements.forEach((node) => {
        this.accordionBtn.append(node);
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
    this.accordionBtn.setAttribute('aria-expanded', newValue);
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let tempClasses = this.accordionBtn.className.split(' ');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let popValue = tempClasses.pop();
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    popValue != 'collapsed' ? tempClasses.push(popValue) : 0;
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (newValue == 'false') {
      tempClasses.push('collapsed');
    }
    this.accordionBtn.className = tempClasses.join(' ');
  }

  connectedCallback() {
    // Nav attributes
    // TODO: Refactor attribute and class handling.
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let parentID = this.getAttribute('data-parent-id');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let expanded = this.getAttribute('data-expanded');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let extraClasses = this.getAttribute('data-extra-classes');
    const isListItem = this.getAttribute('data-li');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let accordionBtnClasses = ['accordion-button'];
    if (isListItem !== null) {
      accordionBtnClasses.push('data-li');
    }
    this.accordionBtn.setAttribute('type', 'button');
    this.accordionBtn.setAttribute('data-bs-toggle', 'collapse');
    this.accordionBtn.setAttribute('aria-controls', parentID);
    this.accordionBtn.setAttribute('data-bs-target', `#${parentID}`);
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (expanded == 'true') {
      this.accordionBtn.setAttribute('aria-expanded', 'true');
    } else {
      accordionBtnClasses.push('collapsed');
      this.accordionBtn.setAttribute('aria-expanded', 'false');
    }
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    extraClasses != undefined && extraClasses != null
      ? accordionBtnClasses.push(extraClasses)
      : 0;
    this.accordionBtn.className = accordionBtnClasses.join(' ');
    if (!this.shadowRoot.querySelector('div')) {
      this.shadowRoot.appendChild(this.accordionHeader);
    }
  }

  addListNumber(index, extraClasses) {
    const numberBox = document.createElement('div');
    numberBox.innerText = `${index + 1}`;
    extraClasses.push('li-num-box');
    numberBox.className = extraClasses.join(' ');
    this.accordionBtn.prepend(numberBox);
  }
}
