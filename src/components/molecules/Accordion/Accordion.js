import styles from '!!raw-loader!./Accordion.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<div class="accordion">
</div>
`;

export default class Accordion extends HTMLElement {
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

  connectedCallback() {
    // Handle accordion attributes
    const accordionContainer = this.shadowRoot.querySelector('div.accordion');

    const id = this.getAttribute('data-id');
    accordionContainer.id = id;

    const extraClasses = this.getAttribute('data-extra-classes');
    if (extraClasses !== null) {
      accordionContainer.classList.add(...extraClasses.split(' '));
    }
    [...this.children].forEach((element, index) => {
      element.setAttribute('data-parent-id', id);
      element.setAttribute('data-index', index);
      accordionContainer.append(element);
    });
  }
}
