import styles from '!!raw-loader!./AccordionItem.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<div class="accordion-item">
  <div class="accordion-header">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" aria-expanded="false">
      <slot name="header"></slot>
    </button>
  </h2>
  <div class="accordion-collapse collapse">
    <div class="accordion-body">
      <slot name="body"></slot>
    </div>
  </div>
</div>
`;

export default class AccordionItem extends HTMLElement {
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
    // Handle accordion item attributes
    const bodyContainer =
      this.shadowRoot.querySelector('div.accordion-body').parentElement;
    const parentID = this.getAttribute('parent-id');
    const index = this.getAttribute('index');
    const itemID = `${parentID}-${index}`;
    bodyContainer.id = itemID;

    const accordionButton = this.shadowRoot.querySelector(
      'button.accordion-button',
    );
    accordionButton.setAttribute('data-bs-target', `#${itemID}`);
    accordionButton.setAttribute('aria-controls', `${itemID}`);
    accordionButton.addEventListener('click', this._toggleAccordion);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this._toggleAccordion);
  }

  _toggleAccordion(clickEvent) {
    const buttonClicked = clickEvent.currentTarget;
    const bodyContainer = buttonClicked
      .getRootNode()
      .querySelector('div.accordion-body').parentElement;
    if (buttonClicked.classList.contains('collapsed')) {
      buttonClicked.classList.remove('collapsed');
      buttonClicked.setAttribute('aria-expanded', true);
      bodyContainer.classList.add('show');
    } else {
      buttonClicked.classList.add('collapsed');
      buttonClicked.setAttribute('aria-expanded', false);
      bodyContainer.classList.remove('show');
    }
  }
}
