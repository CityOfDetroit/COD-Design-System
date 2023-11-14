import styles from '!!raw-loader!./TableCellHeader.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';
import {
  cellHeaderBlockClass,
  stackedTableClass,
} from '../../../shared/js/utilities';

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
    this.tableCellHeader = document.createElement('th');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line no-unused-vars
    shadow.addEventListener('slotchange', (ev) => {
      // TODO: See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line prefer-const
      let tempElements = Array.from(this.childNodes);
      tempElements.forEach((node) => {
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
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let stripedRow = this.getAttribute('data-striped-row');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let stripedCol = this.getAttribute('data-striped-col');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let verticalAlign = this.getAttribute('data-vertical-align');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let extraClasses = this.getAttribute('data-extra-classes');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    verticalAlign != undefined && verticalAlign != null
      ? this.tableCellHeader.classList.add(verticalAlign)
      : 0;
    this.getAttribute('data-scrollable') === 'true'
      ? this.tableCellHeader.classList.add('table-scrollable')
      : 0;
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    stripedRow == 'true'
      ? this.tableCellHeader.classList.add('table-striped')
      : 0;
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    stripedCol == 'true'
      ? this.tableCellHeader.classList.add('table-striped-columns')
      : 0;
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    extraClasses != undefined && extraClasses != null
      ? this.tableCellHeader.classList.add(extraClasses)
      : 0;
  }

  setIsStacked(isStacked, isCellHeaderBlock) {
    if (isStacked) {
      this.tableCellHeader.classList.add(stackedTableClass);
    } else {
      this.tableCellHeader.classList.remove(stackedTableClass);
    }

    if (isCellHeaderBlock) {
      this.tableCellHeader.classList.add(cellHeaderBlockClass);
    } else {
      this.tableCellHeader.classList.remove(cellHeaderBlockClass);
    }
  }

  isStacked() {
    return this.tableCellHeader.classList.contains(stackedTableClass);
  }
}
