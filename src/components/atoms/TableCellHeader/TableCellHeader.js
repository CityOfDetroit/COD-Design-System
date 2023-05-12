import styles from '!!raw-loader!./TableCellHeader.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<slot></slot>
`;


export default class TableCellHeader extends HTMLElement {

  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
    this.tableCellHeader = document.createElement('div');
    this.tableCellHeader.role = 'columnheader';
    shadow.addEventListener( 'slotchange', ev => {  
      let tempElements = Array.from(this.childNodes);
      console.log(this.childNodes);  
      tempElements.forEach((node)=>{
          this.tableCellHeader.appendChild(node);
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

    shadow.appendChild(this.tableCellHeader);
  }

  connectedCallback() {
    // tableCellHeader attributes
    let stripedRow = this.getAttribute('data-striped-row');
    let stripedCol = this.getAttribute('data-striped-col');
    let verticalAlign = this.getAttribute('data-vertical-align');
    let extraClasses = this.getAttribute('data-extra-classes');
    let tableCellHeaderClasses = ['table-cell-header'];
    (verticalAlign != undefined && verticalAlign != null) ? tableCellHeaderClasses.push(verticalAlign) : 0;
    (stripedRow == 'true') ? tableCellHeaderClasses.push('table-striped') : 0;
    (stripedCol == 'true') ? tableCellHeaderClasses.push('table-striped-columns') : 0;
    (extraClasses != undefined && extraClasses != null) ? tableCellHeaderClasses.push(extraClasses) : 0;
    this.tableCellHeader.className = tableCellHeaderClasses.join(' ');
  }
};