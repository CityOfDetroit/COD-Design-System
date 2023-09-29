import styles from '!!raw-loader!./ModalHeader.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<slot></slot>
`;

export default class ModalHeader extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
    this.modalHeader = document.createElement('div');
    this.modalTitle = document.createElement('div');
    this.closeBtn = document.createElement('cod-button');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line no-unused-vars
    this.shadowRoot.addEventListener('slotchange', (ev) => {
      // TODO: See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line prefer-const
      let tempElements = Array.from(this.children);
      tempElements.forEach((node) => {
        this.modalTitle.appendChild(node);
      });
    });
    this.modalHeader.appendChild(this.modalTitle);
    this.modalHeader.appendChild(this.closeBtn);

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
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let parentID = this.getAttribute('data-parent-id');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let btnDark = this.getAttribute('data-button-dark');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let extraClasses = this.getAttribute('data-extra-classes');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let modalHeaderClasses = ['modal-header'];
    this.modalTitle.className = 'modal-title';
    this.modalTitle.id = `${parentID}-label`;
    this.closeBtn.setAttribute('data-img-alt', '');
    this.closeBtn.setAttribute('data-icon', '');
    this.closeBtn.setAttribute('data-close', 'true');
    this.closeBtn.setAttribute('data-bs-dismiss', 'modal');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    extraClasses != undefined && extraClasses != null
      ? modalHeaderClasses.push(extraClasses)
      : 0;
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    btnDark == 'true'
      ? this.closeBtn.setAttribute('data-extra-classes', 'btn-close-white')
      : 0;
    this.modalHeader.className = modalHeaderClasses.join(' ');
    this.closeBtn.addEventListener('click', this._onClick);
    if (!this.shadowRoot.querySelector('div')) {
      this.shadowRoot.appendChild(this.modalHeader);
    }
  }

  disconnectedCallback() {
    this.removeEventListener('click', this._onClick.bind(this));
  }

  // TODO: See CityOfDetroit/detroitmi#1099
  // eslint-disable-next-line no-unused-vars
  _onClick(e) {
    this.getRootNode()
      .host.getRootNode()
      .host.setAttribute('data-show', 'false');
  }
}
