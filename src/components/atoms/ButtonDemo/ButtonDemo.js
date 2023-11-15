import styles from '!!raw-loader!./ButtonDemo.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

export default class ButtonDemo extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    this.attachShadow({ mode: 'open' });

    // Inserting styles
    const bootStyles = document.createElement('style');
    bootStyles.textContent = bootstrapStyles;
    this.shadowRoot.appendChild(bootStyles);
    const variableStyles = document.createElement('style');
    variableStyles.textContent = varStyles;
    this.shadowRoot.appendChild(variableStyles);
    const btnStyles = document.createElement('style');
    btnStyles.textContent = styles;
    this.shadowRoot.appendChild(btnStyles);
  }

  connectedCallback() {
    // ButtonDemo attributes
    const btnID = this.getAttribute('data-id');
    const label = this.getAttribute('data-label');
    const primary = this.getAttribute('data-primary');
    const backgroundColor = this.getAttribute('data-background-color');
    // Building ButtonDemo component
    const btn = document.createElement('button');
    const btnClasses = ['btn'];
    btn.type = 'button';
    if (btnID) {
      btn.id = btnID;
    }
    if (primary === 'true') {
      btnClasses.push(`btn-${backgroundColor}`);
    } else if (primary === 'false') {
      btnClasses.push(`btn-outline-${backgroundColor}`);
    }
    btn.className = btnClasses.join(' ');
    btn.innerText = label;

    if (!this.shadowRoot.querySelector('button')) {
      this.shadowRoot.appendChild(btn);
      const ghostBtn = this.appendChild(document.createElement('button'));
      this.onclick = () => ghostBtn.click();
    }
  }
}
