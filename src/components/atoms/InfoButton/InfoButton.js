import styles from '!!raw-loader!./InfoButton.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

class InfoButton extends HTMLElement {
  static observedAttributes = [];

  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    this.div = document.createElement('div');
    this.div.classList.add('info-button-container');

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
    // Build the img for the top of the card.
    const imgSrc = this.getAttribute('img-src');
    const imgAlt = this.getAttribute('img-alt');
    const imgElt = document.createElement('img');
    imgElt.setAttribute('src', imgSrc);
    imgElt.setAttribute('alt', imgAlt);
    imgElt.classList.add('card-img-top', 'img-fluid');

    // Build the title section.
    const titlePrim = this.getAttribute('title-primary');
    let titleContainer = null;
    if (titlePrim) {
      titleContainer = document.createElement('div');
      titleContainer.classList.add('d-flex', 'justify-content-between', 'flex-wrap');

      const titlePrimElt = document.createElement('h5');
      titlePrimElt.innerText = titlePrim;
      titlePrimElt.classList.add('info-btn-title', 'me-2');
      titleContainer.appendChild(titlePrimElt);

      const titleSec = this.getAttribute('title-secondary');
      if (titleSec) {
        const titleSecElt = document.createElement('h5');
        titleSecElt.innerText = titleSec;
        titleSecElt.classList.add('info-btn-title', 'text-warning', 'text-end');
        titleContainer.appendChild(titleSecElt);
      }
    }

    // Build the body section.
    const body = this.getAttribute('body');
    const bodyElt = document.createElement('p');
    bodyElt.classList.add('card-text', 'pe-3');
    bodyElt.innerText = body;
    const chevronElt = document.createElement('cod-icon');
    chevronElt.setAttribute('data-icon', 'chevron-right-circle');
    chevronElt.setAttribute('data-size', 'medium');
    const bodyContainer = document.createElement('div');
    bodyContainer.classList.add(
      'd-flex',
      'justify-content-between',
      'align-items-center',
    );
    bodyContainer.appendChild(bodyElt);
    bodyContainer.appendChild(chevronElt);

    // Build the card body.
    const cardBodyElt = document.createElement('div');
    cardBodyElt.classList.add('card-body', 'text-light');
    if (titleContainer) {
      cardBodyElt.appendChild(titleContainer);
    }
    cardBodyElt.appendChild(bodyContainer);

    // Build the card.
    const cardElt = document.createElement('div');
    cardElt.classList.add('card');
    cardElt.appendChild(imgElt);
    cardElt.appendChild(cardBodyElt);

    // Build clickable wrapper.
    const href = this.getAttribute('href');
    const target = this.getAttribute('target');
    const clickableContainer = document.createElement('a');
    clickableContainer.classList.add('btn', 'btn-primary');
    clickableContainer.setAttribute('role', 'button');
    clickableContainer.setAttribute('href', href);
    if (target) {
      clickableContainer.setAttribute('target', target);
    }
    clickableContainer.appendChild(cardElt);

    this.div.appendChild(clickableContainer);
    this.shadowRoot.appendChild(this.div);
  }
}

export { InfoButton as default };
