import styles from '!!raw-loader!./ActionButtonV2.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<div class="action-button-container">
  <a class="btn" role="button" href="">
    <div class="abutton">
      <div class="top-icon">
        <cod-icon data-icon="" data-size="x-large">
        </cod-icon>
      </div>
      <div class="abutton-body">  
        <slot></slot>
      <slot name="primary"></slot>
      <slot name="secondary"></slot> 
      </div>
    </div>
  </a>
</div>
`;

class ActionButtonV2 extends HTMLElement {
  static observedAttributes = ['icon'];

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
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
    const icon = this.getAttribute('icon') || 'default-icon';
    const iconElt = this.shadowRoot.querySelector('cod-icon');
    iconElt.setAttribute('data-icon', icon);

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

export { ActionButtonV2 as default };
