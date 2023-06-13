import styles from '!!raw-loader!./Table.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<slot></slot>
`;


export default class Table extends HTMLElement {

  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
    this.tableContainer = document.createElement('div');
    this.table = document.createElement('div');
    this.table.role = 'table';
    this.tableContainer.appendChild(this.table);
  
    shadow.addEventListener('slotchange', e => {
      let tempElements = Array.from(this.children);
      tempElements.forEach((node) => {
        switch (node.tagName) {
          case 'COD-TABLE-HEADER':
            (this.getAttribute('data-striped-col') == 'true') ? node.setAttribute('data-striped-col', 'true') : 0;
            (this.getAttribute('data-vertical-align') == 'true') ? node.setAttribute('data-vertical-align', 'true') : 0;
            (this.getAttribute('data-legacy-responsive') == 'true') ? node.setAttribute('data-legacy-responsive', 'true') : 0;
            this.table.appendChild(node);
            break;

          case 'COD-TABLE-BODY':
            (this.getAttribute('data-hover') == 'true') ? node.setAttribute('data-hover', 'true') : 0;
            (this.getAttribute('data-striped-row') == 'true') ? node.setAttribute('data-striped-row', 'true') : 0;
            (this.getAttribute('data-striped-col') == 'true') ? node.setAttribute('data-striped-col', 'true') : 0;
            (this.getAttribute('data-vertical-align') == 'true') ? node.setAttribute('data-vertical-align', 'true') : 0;
            (this.getAttribute('data-legacy-responsive') == 'true') ? node.setAttribute('data-legacy-responsive', 'true') : 0;
            this.table.appendChild(node);
            break;

          default:
            let nodeClasses = node.className.split(' ');
            (nodeClasses.includes('no-wc')) ? node.remove() : 0;
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

  connectedCallback() {
    // Table attributes
    let legacyResponsive = this.getAttribute('data-legacy-responsive');
    let id = this.getAttribute('data-id');
    let extraClasses = this.getAttribute('data-extra-classes');
    let tableClasses = ['table'];
    (extraClasses != undefined && extraClasses != null) ? tableClasses.push(extraClasses) : 0;
    (id != undefined && id != null) ? this.table.id = id : 0;
    (legacyResponsive == 'true') ? this.tableContainer.className = 'table-responsive' : 0;
    this.table.className = tableClasses.join(' ');
    if (!this.shadowRoot.querySelector('div')) {
      this.shadowRoot.appendChild(this.tableContainer);
    }
  }
};