import styles from '!!raw-loader!./Modal.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<slot></slot>
`;

export default class Modal extends HTMLElement {
  static get observedAttributes() {
    return ['data-show'];
  }

  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
    this.modal = document.createElement('div');
    this.modalDialog = document.createElement('div');
    this.modalContent = document.createElement('div');
    this.modalHeader = document.createElement('div');
    this.modalBody = document.createElement('div');
    this.modalFooter = document.createElement('div');
    this.modalDialog.appendChild(this.modalContent);
    this.modal.appendChild(this.modalDialog);

    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line no-unused-vars
    shadow.addEventListener('slotchange', (e) => {
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line prefer-const
      let tempElements = Array.from(this.children);
      tempElements.forEach((node) => {
        switch (node.tagName) {
          case 'COD-MODAL-HEADER':
            // See CityOfDetroit/detroitmi#1099
            // eslint-disable-next-line eqeqeq
            this.getAttribute('data-show') == 'true'
              ? node.setAttribute('data-show', true)
              : 0;
            // See CityOfDetroit/detroitmi#1099
            // eslint-disable-next-line eqeqeq
            this.getAttribute('data-button-dark') == 'true'
              ? node.setAttribute('data-button-dark', true)
              : 0;
            this.modalHeader.appendChild(node);
            this.modalContent.appendChild(this.modalHeader);
            break;

          case 'COD-MODAL-BODY':
            this.modalBody.appendChild(node);
            this.modalContent.appendChild(this.modalBody);
            break;

          case 'COD-MODAL-FOOTER':
            this.modalFooter.appendChild(node);
            this.modalContent.appendChild(this.modalFooter);
            break;

          default:
            break;
        }
      });
    });

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

  attributeChangedCallback(name, oldValue, newValue) {
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let tempClasses = this.modal.className.split(' ');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let popValue = tempClasses.pop();
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    popValue != 'show' ? tempClasses.push(popValue) : 0;
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (newValue == 'true') {
      tempClasses.push('show');
      this.modal.style.display = 'block';
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line eqeqeq
      if (this.getAttribute('data-static') != 'true') {
        this.modal.addEventListener('click', this._onClick);
      }
      this.modal.className = tempClasses.join(' ');
    } else {
      this.modal.className = tempClasses.join(' ');
      setTimeout(() => {
        this.modal.style.display = 'none';
      }, 500);
    }
  }

  connectedCallback() {
    // Modal attributes
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let bStatic = this.getAttribute('data-static');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let id = this.getAttribute('data-id');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let show = this.getAttribute('data-show');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let verticalCentered = this.getAttribute('data-vertical-centered');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let size = this.getAttribute('data-size');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let fullScreen = this.getAttribute('data-full-screen');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let extraClasses = this.getAttribute('data-extra-classes');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let modalClasses = ['modal fade'];
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let modalDialogClasses = ['modal-dialog'];
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let modalContentClasses = ['modal-content'];
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    extraClasses != undefined && extraClasses != null
      ? modalClasses.push(extraClasses)
      : 0;
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    size != undefined && size != null
      ? modalDialogClasses.push(`modal-${size}`)
      : 0;
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    verticalCentered == 'true'
      ? modalDialogClasses.push('modal-dialog-centered')
      : 0;
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (fullScreen != undefined && fullScreen != null) {
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line eqeqeq
      fullScreen == 'always'
        ? modalDialogClasses.push('modal-fullscreen')
        : modalDialogClasses.push(`modal-fullscreen-${fullScreen}-down`);
    }
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (bStatic == 'true') {
      this.modal.setAttribute('data-bs-backdrop', 'static');
      this.modal.setAttribute('data-bs-keyboard', 'false');
    }
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (show == 'true') {
      this.modalClasses.push('show');
      this.modal.setAttribute('aria-modal', `true`);
    } else {
      this.modal.setAttribute('aria-modal', `false`);
    }
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    id != undefined && id != null ? (this.modal.id = id) : 0;
    this.modal.setAttribute('tabindex', -1);
    this.modal.className = modalClasses.join(' ');
    this.modalDialog.className = modalDialogClasses.join(' ');
    this.modalContent.className = modalContentClasses.join(' ');
    if (!this.shadowRoot.querySelector('div')) {
      this.shadowRoot.appendChild(this.modal);
    }
  }

  disconnectedCallback() {
    this.removeEventListener('click', this._onClick.bind(this));
  }

  // See CityOfDetroit/detroitmi#1099
  // eslint-disable-next-line no-unused-vars
  _onClick(e) {
    this.getRootNode().host.setAttribute('data-show', 'false');
  }
}
