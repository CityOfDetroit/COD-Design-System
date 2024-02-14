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
    this.div.classList.add('action-button-container');

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
    // Build abutton body.
    const title = this.getAttribute('title');
    const titleElt = document.createElement('h4');
    titleElt.classList.add('abutton-title');
    titleElt.innerText = title;
    const body = this.getAttribute('body');
    const bodyElt = document.createElement('p');
    bodyElt.classList.add('abutton-text');
    bodyElt.innerText = body;
    const abuttonBody = document.createElement('div');
    abuttonBody.classList.add('abutton-body');
    abuttonBody.appendChild(titleElt);
    abuttonBody.appendChild(bodyElt);

    // Build abutton top icon.
    const icon = this.getAttribute('icon');
    const iconElt = document.createElement('cod-icon');
    iconElt.setAttribute('data-icon', icon);
    iconElt.setAttribute('data-size', 'x-large');
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('w-100', 'top-icon');
    iconContainer.appendChild(iconElt);

    // Build abutton.
    const abuttonElt = document.createElement('div');
    abuttonElt.classList.add('abutton');
    abuttonElt.appendChild(iconContainer);
    abuttonElt.appendChild(abuttonBody);

    // Build clickable wrapper.
    const btnColor = this.getAttribute('btn-color') ?? 'btn-outline-primary';
    const href = this.getAttribute('href');
    const target = this.getAttribute('target');
    const clickableContainer = document.createElement('a');
    clickableContainer.classList.add('btn', btnColor);
    clickableContainer.setAttribute('role', 'button');
    clickableContainer.setAttribute('href', href);
    if (target) {
      clickableContainer.setAttribute('target', target);
    }
    clickableContainer.appendChild(abuttonElt);

    // Append to shadow root.
    this.div.appendChild(clickableContainer);
    this.shadowRoot.appendChild(this.div);
  }
}

export { ActionButton as default };
