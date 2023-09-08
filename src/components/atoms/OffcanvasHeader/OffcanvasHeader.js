import styles from '!!raw-loader!./OffcanvasHeader.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<slot></slot>
`;

export default class OffcanvasHeader extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
    this.offcanvasHeader = document.createElement('div');
    this.offcanvasTitle = document.createElement('div');
    this.closeBtn = document.createElement('cod-button');
    this.shadowRoot.addEventListener('slotchange', (ev) => {
      let tempElements = Array.from(this.children);
      tempElements.forEach((node) => {
        this.offcanvasTitle.appendChild(node);
      });
    });
    this.offcanvasHeader.appendChild(this.offcanvasTitle);
    this.offcanvasHeader.appendChild(this.closeBtn);

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
    // Nav attributes
    let parentID = this.getAttribute('data-parent-id');
    let btnDark = this.getAttribute('data-button-dark');
    let extraClasses = this.getAttribute('data-extra-classes');
    let offcanvasHeaderClasses = ['offcanvas-header'];
    this.offcanvasTitle.className = 'offcanvas-title';
    this.offcanvasTitle.id = `${parentID}-label`;
    this.closeBtn.setAttribute('data-img-alt', '');
    this.closeBtn.setAttribute('data-icon', '');
    this.closeBtn.setAttribute('data-close', 'true');
    this.closeBtn.setAttribute('data-bs-dismiss', parentID);
    extraClasses != undefined && extraClasses != null
      ? offcanvasHeaderClasses.push(extraClasses)
      : 0;
    btnDark == 'true'
      ? this.closeBtn.setAttribute('data-extra-classes', 'btn-close-white')
      : 0;
    this.offcanvasHeader.className = offcanvasHeaderClasses.join(' ');
    this.closeBtn.addEventListener('click', this._onClick);
    if (!this.shadowRoot.querySelector('div')) {
      this.shadowRoot.appendChild(this.offcanvasHeader);
    }
  }

  disconnectedCallback() {
    this.removeEventListener('click', this._onClick.bind(this));
  }

  _onClick(e) {
    this.getRootNode()
      .host.getRootNode()
      .host.setAttribute('data-show', 'false');
  }
}
