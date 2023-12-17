import {
  cellHeaderBlockClass,
  stackedTableClass,
} from '../../../shared/js/utilities';

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
    this.tableCell = document.createElement('td');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line no-unused-vars
    shadow.addEventListener('slotchange', (ev) => {
      const tempElements = ev.target.assignedNodes();
      tempElements.forEach((node) => {
        // Only accept HTMLElements or non-empty text nodes.
        if (
          node.nodeType !== Node.TEXT_NODE ||
          !/^\s*$/.test(node.textContent)
        ) {
          const contentDiv = document.createElement('div');
          contentDiv.classList.add('content');
          contentDiv.appendChild(node);
          this.tableCell.appendChild(contentDiv);
        }
      });
    });
    shadow.appendChild(this.tableCell);
  }

  connectedCallback() {
    // TableCell attributes
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
      ? this.tableCell.classList.add(verticalAlign)
      : 0;
    this.getAttribute('data-scrollable') === 'true'
      ? this.tableCell.classList.add('table-scrollable')
      : 0;
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    stripedRow == 'true' ? this.tableCell.classList.add('table-striped') : 0;
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    stripedCol == 'true'
      ? this.tableCell.classList.add('table-striped-columns')
      : 0;
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    extraClasses != undefined && extraClasses != null
      ? this.tableCell.classList.add(extraClasses)
      : 0;

    const dataLabel = this.getAttribute('data-label');
    if (dataLabel) {
      this.tableCell.setAttribute('data-label', dataLabel);
    }
  }

  setIsStacked(isStacked, isCellHeaderBlock) {
    if (isStacked) {
      this.tableCell.classList.add(stackedTableClass);
    } else {
      this.tableCell.classList.remove(stackedTableClass);
    }

    if (isCellHeaderBlock) {
      this.tableCell.classList.add(cellHeaderBlockClass);
    } else {
      this.tableCell.classList.remove(cellHeaderBlockClass);
    }
  }

  isStacked() {
    return this.tableCell.classList.contains(stackedTableClass);
  }
}
