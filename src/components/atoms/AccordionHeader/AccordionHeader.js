import styles from '!!raw-loader!./AccordionHeader.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<div>
  <button type="button" class="accordion-button" data-bs-toggle="collapse">
    <slot></slot>
  </button>
</div>
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
    const accordionBtn = this.shadowRoot.querySelector('button');
    accordionBtn.setAttribute('aria-expanded', newValue);
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let tempClasses = accordionBtn.className.split(' ');
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
    accordionBtn.className = tempClasses.join(' ');
  }

  connectedCallback() {
    const accordionBtn = this.shadowRoot.querySelector('button');
    // Set classes.
    const extraClasses = this.getAttribute('data-extra-classes');
    const isListItem = this.getAttribute('data-li');
    if (isListItem !== null) {
      accordionBtn.classList.add('data-li');
    }
    if (extraClasses) {
      accordionBtn.classList.add(...extraClasses.split(' '));
    }

    // Set attributes.
    const parentID = this.getAttribute('data-parent-id');
    accordionBtn.setAttribute('aria-controls', parentID);
    accordionBtn.setAttribute('data-bs-target', `#${parentID}`);
    const expanded = this.getAttribute('data-expanded');
    if (expanded === 'true') {
      accordionBtn.classList.remove('collapsed');
      accordionBtn.setAttribute('aria-expanded', 'true');
    } else {
      accordionBtn.classList.add('collapsed');
      accordionBtn.setAttribute('aria-expanded', 'false');
    }
  }

  addListNumber(index, extraClasses) {
    const accordionBtn = this.shadowRoot.querySelector('button');
    const numberBox = document.createElement('div');
    numberBox.innerText = `${index + 1}`;
    extraClasses.push('li-num-box');
    numberBox.className = extraClasses.join(' ');
    accordionBtn.prepend(numberBox);
  }
}
