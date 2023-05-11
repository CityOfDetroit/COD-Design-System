import styles from '!!raw-loader!./TableCell.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<slot></slot>
`;


export default class TableCell extends HTMLElement {

  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
    this.tableCell = document.createElement('div');
    this.tableCell.role = 'cell';
    shadow.addEventListener( 'slotchange', ev => {  
      let tempElements = Array.from(this.childNodes);
      console.log(this.childNodes);  
      tempElements.forEach((node)=>{
          this.tableCell.appendChild(node);
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

    shadow.appendChild(this.tableCell);
  }

  connectedCallback() {
    // TableCell attributes
    let stripedCol = this.getAttribute('data-striped-col');
    let extraClasses = this.getAttribute('data-extra-classes');
    let tableCellClasses = ['table-cell'];
    (stripedCol == 'true') ? tableCellClasses.push('table-striped-columns') : 0;
    (extraClasses != undefined && extraClasses != null) ? tableCellClasses.push(extraClasses) : 0;
    this.tableCell.className = tableCellClasses.join(' ');
  }
};