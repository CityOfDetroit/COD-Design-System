import styles from '!!raw-loader!./ActionButton.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<div class="action-button-container">
  <a class="btn" role="button" href="">
    <div class="abutton">
      <div class="w-100 top-icon">
        <cod-icon data-icon="" data-size="x-large">
        </cod-icon>
      </div>
      <div class="abutton-body">
        <h4 class="abutton-title"></h4>
        <slot></slot>
      </div>
    </div>
  </a>
</div>
`;

class ActionButton extends HTMLElement {
  static observedAttributes = [];

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
    // Update the title.
    const title = this.getAttribute('title');
    const titleElt = this.shadowRoot.querySelector('h4.abutton-title');
    titleElt.innerText = title;

    // Update the icon.
    const icon = this.getAttribute('icon');
    const iconElt = this.shadowRoot.querySelector('cod-icon');
    iconElt.setAttribute('data-icon', icon);

    // Update the button link and style.
    const btnColor = this.getAttribute('btn-color') ?? 'btn-outline-primary';
    const href = this.getAttribute('href');
    const target = this.getAttribute('target');
    const aElt = this.shadowRoot.querySelector('a.btn');
    aElt.classList.add('btn', btnColor);
    aElt.setAttribute('href', href);
    if (target) {
      aElt.setAttribute('target', target);
    }
  }
}

export { ActionButton as default };
