import styles from '!!raw-loader!./Clickable.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

// A space for some clickable content.
template.innerHTML = `
<slot></slot>
`;

export default class Clickable extends HTMLElement {
  constructor() {
    // Always call super constructor.
    super();

    // Create a shadow root.
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.addEventListener('slotchange', (ev) => {
      const elements = ev.target.assignedElements();
      elements.forEach((element) => {
        if (typeof element.setIsClickable === 'function') {
          const btnColor = this.getAttribute('data-btn-color');
          element.setIsClickable(true, btnColor);
        }
      });
      this.clickable.append(...elements);
    });

    // Create component.
    this.clickable = document.createElement('a');

    // Add styles.
    const bootStyles = document.createElement('style');
    bootStyles.textContent = bootstrapStyles;
    const variableStyles = document.createElement('style');
    variableStyles.textContent = varStyles;
    const itemStyles = document.createElement('style');
    itemStyles.textContent = styles;
    this.shadowRoot.appendChild(bootStyles);
    this.shadowRoot.appendChild(variableStyles);
    this.shadowRoot.appendChild(itemStyles);

    // Set attributes on node.
    const href = this.getAttribute('href');
    this.clickable.setAttribute('href', href);
    const target = this.getAttribute('target');
    this.clickable.setAttribute('target', target);

    // Set bootstrap classes.
    const btnColor = this.getAttribute('data-btn-color');
    this.clickable.classList.add('btn', btnColor);

    // Add slot to clickable area.
    this.clickable.appendChild(template.content.cloneNode(true));
    this.shadowRoot.appendChild(this.clickable);
  }
}
