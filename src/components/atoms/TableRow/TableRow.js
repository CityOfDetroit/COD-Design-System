import styles from '!!raw-loader!./TableRow.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';
import {
  cellHeaderBlockClass,
  firstClass,
  oddClass,
  stackedTableClass,
} from '../../../shared/js/utilities';

const template = document.createElement('template');

template.innerHTML = `
<slot></slot>
`;

export default class TableBody extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
    this.tableRow = document.createElement('tr');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line no-unused-vars
    shadow.addEventListener('slotchange', (ev) => {
      // TODO: See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line prefer-const
      let tempElements = Array.from(this.children);
      tempElements.forEach((node, index) => {
        // TODO: See CityOfDetroit/detroitmi#1099
        // eslint-disable-next-line eqeqeq
        this.getAttribute('data-striped-row') == 'true'
          ? node.setAttribute('data-striped-row', 'true')
          : 0;
        // TODO: See CityOfDetroit/detroitmi#1099
        // eslint-disable-next-line eqeqeq
        this.getAttribute('data-striped-col') == 'true' && index % 2 != 0
          ? node.setAttribute('data-striped-col', 'true')
          : 0;
        // TODO: See CityOfDetroit/detroitmi#1099
        // eslint-disable-next-line eqeqeq
        this.getAttribute('data-vertical-align') == 'true'
          ? node.setAttribute('data-vertical-align', 'true')
          : 0;
        this.getAttribute('data-scrollable') === 'true'
          ? node.setAttribute('data-scrollable', 'true')
          : 0;

        if (this.isStacked()) {
          node.setIsStacked(true /* isStacked */, this.isCellHeaderBlock());
        }

        this.tableRow.append(node);
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

    shadow.appendChild(this.tableRow);
  }

  connectedCallback() {
    // TableRow attributes
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let extraClasses = this.getAttribute('data-extra-classes');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let hover = this.getAttribute('data-hover');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    hover == 'true' ? this.tableRow.classList.add('table-hover') : 0;
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    extraClasses != undefined && extraClasses != null
      ? this.tableRow.classList.add(extraClasses)
      : 0;
  }

  setIsStacked(isStacked, isCellHeaderBlock) {
    if (isStacked) {
      this.tableRow.classList.add(stackedTableClass);
    } else {
      this.tableRow.classList.remove(stackedTableClass);
    }

    if (isCellHeaderBlock) {
      this.tableRow.classList.add(cellHeaderBlockClass);
    } else {
      this.tableRow.classList.remove(cellHeaderBlockClass);
    }
  }

  isStacked() {
    return this.tableRow.classList.contains(stackedTableClass);
  }

  isCellHeaderBlock() {
    return this.tableRow.classList.contains(cellHeaderBlockClass);
  }

  setIsFirst(isFirst = true) {
    if (isFirst) {
      this.tableRow.classList.add(firstClass);
    } else {
      this.tableRow.classList.remove(firstClass);
    }
  }

  setIsOdd(isOdd = true) {
    if (isOdd) {
      this.tableRow.classList.add(oddClass);
    } else {
      this.tableRow.classList.remove(oddClass);
    }
  }
}
