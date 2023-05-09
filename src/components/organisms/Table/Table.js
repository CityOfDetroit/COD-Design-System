import styles from '!!raw-loader!./Table.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<slot></slot>
`;


export default class Table extends HTMLElement {
  static get observedAttributes() {
    return ['data-show'];
  }

  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
    this.tableContainer = document.createElement('div');
    this.table = document.createElement('table');
    this.tableHeader = document.createElement('thead');
    this.tableBody = document.createElement('tbody');
    this.tableMobile = document.createElement('div');
    this.tableMobileHeader = document.createElement('div');
    this.tableMobileBody = document.createElement('div');
    this.table.appendChild(this.tableHeader);
    this.table.appendChild(this.tableBody);
    this.tableMobile.appendChild(this.tableMobileHeader);
    this.tableMobile.appendChild(this.tableMobileBody);
    this.tableContainer.appendChild(this.table);
    this.tableContainer.appendChild(this.tableMobile);
  
    shadow.addEventListener('slotchange', e => {
      let tempElements = Array.from(this.children);
      tempElements.forEach((node) => {
        switch (node.tagName) {
          case 'COD-TABLE-HEADER':
            (this.getAttribute('data-show') == 'true') ? node.setAttribute('data-show', true) : 0;
            (this.getAttribute('data-button-dark') == 'true') ? node.setAttribute('data-button-dark', true) : 0;
            this.modalHeader.appendChild(node);
            this.modalContent.appendChild(this.modalHeader);
            break;

          case 'COD-TABLE-BODY':
            this.modalBody.appendChild(node);
            this.modalContent.appendChild(this.modalBody);
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
    let tempClasses = this.modal.className.split(' ');
    let popValue = tempClasses.pop();
    (popValue != 'show') ? tempClasses.push(popValue) : 0;
    if(newValue == 'true'){
      tempClasses.push('show');
      this.modal.style.display = 'block';
      if(this.getAttribute('data-static') != 'true'){
        this.modal.addEventListener('click', this._onClick);
      }
      this.modal.className = tempClasses.join(' ');
    }else{
      this.modal.className = tempClasses.join(' ');
      setTimeout(() => {  this.modal.style.display = 'none'; }, 500);
    }
    
  }

  connectedCallback() {
    // Table attributes
    
    let id = this.getAttribute('data-id');
    let stripedRow = this.getAttribute('data-striped-row');
    let stripedCol = this.getAttribute('data-striped-col');
    let size = this.getAttribute('data-size');
    let verticalAlign = this.getAttribute('data-vertical-align');
    let extraClasses = this.getAttribute('data-extra-classes');
    let tableClasses = ['table'];
    let tableMobileClasses = ['table mobile'];
    if(extraClasses != undefined && extraClasses != null) {
        tableClasses.push(extraClasses);
        tableMobileClasses.push(extraClasses);
    }
    (size != undefined && size != null) ? modalDialogClasses.push(`modal-${size}`) : 0;
    (verticalCentered == 'true') ? modalDialogClasses.push('modal-dialog-centered') : 0;
    if (fullScreen != undefined && fullScreen != null){
        (fullScreen == 'always') ? modalDialogClasses.push('modal-fullscreen') : modalDialogClasses.push(`modal-fullscreen-${fullScreen}-down`);
    }
    if (bStatic == 'true'){
        this.modal.setAttribute('data-bs-backdrop', 'static');
        this.modal.setAttribute('data-bs-keyboard', 'false');
    }
    if (show == 'true') {
      this.modalClasses.push('show');
      this.modal.setAttribute('aria-modal', `true`);
    } else {
      this.modal.setAttribute('aria-modal', `false`);
    }
    (id != undefined && id != null) ? this.modal.id = id : 0;
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

  _onClick(e) {
    this.getRootNode().host.setAttribute('data-show', 'false');
  }
};