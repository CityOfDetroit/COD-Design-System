import styles from '!!raw-loader!./ActionButton.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

class ActionButton extends HTMLElement {
  static observedAttributes = [];

  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    this.div = document.createElement('div');

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
    // Build card body.
    const title = this.getAttribute('title');
    const titleElt = document.createElement('h4');
    titleElt.classList.add('card-title');
    titleElt.style.textTransform = 'uppercase';
    titleElt.style.fontWeight = '900';
    titleElt.innerText = title;
    const body = this.getAttribute('body');
    const bodyElt = document.createElement('p');
    bodyElt.classList.add('card-text');
    bodyElt.innerText = body;
    const cardBody = document.createElement('cod-card-body');
    cardBody.appendChild(titleElt);
    cardBody.appendChild(bodyElt);

    // Build card top icon.
    const icon = this.getAttribute('icon');
    const iconElt = document.createElement('cod-icon');
    iconElt.setAttribute('data-icon', icon);
    iconElt.setAttribute('data-size', 'x-large');
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('w-100', 'top-icon');
    iconContainer.appendChild(iconElt);

    // Build card.
    const cardElt = document.createElement('cod-card');
    cardElt.appendChild(iconContainer);
    cardElt.appendChild(cardBody);

    // Build clickable wrapper.
    const href = this.getAttribute('href');
    const target = this.getAttribute('target');
    const btnColor = this.getAttribute('btn-color');
    const clickableContainer = document.createElement('cod-clickable');
    clickableContainer.setAttribute('href', href);
    clickableContainer.setAttribute('target', target);
    clickableContainer.setAttribute('data-btn-color', btnColor);
    clickableContainer.appendChild(cardElt);

    // Append to shadow root.
    this.div.appendChild(clickableContainer);
    this.shadowRoot.appendChild(this.div);
  }
}

export { ActionButton as default };
