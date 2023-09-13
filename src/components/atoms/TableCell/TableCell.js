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
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line no-unused-vars
    shadow.addEventListener('slotchange', (ev) => {
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line prefer-const
      let tempElements = Array.from(this.childNodes);
      tempElements.forEach((node) => {
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
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let stripedRow = this.getAttribute('data-striped-row');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let stripedCol = this.getAttribute('data-striped-col');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let legacyResponsive = this.getAttribute('data-legacy-responsive');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let verticalAlign = this.getAttribute('data-vertical-align');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let extraClasses = this.getAttribute('data-extra-classes');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let tableCellClasses = ['table-cell'];
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    verticalAlign != undefined && verticalAlign != null
      ? tableCellClasses.push(verticalAlign)
      : 0;
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    legacyResponsive == 'true'
      ? tableCellClasses.push('table-legacy-responsive')
      : 0;
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    stripedRow == 'true' ? tableCellClasses.push('table-striped') : 0;
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    stripedCol == 'true' ? tableCellClasses.push('table-striped-columns') : 0;
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    extraClasses != undefined && extraClasses != null
      ? tableCellClasses.push(extraClasses)
      : 0;
    this.tableCell.className = tableCellClasses.join(' ');
  }
}
