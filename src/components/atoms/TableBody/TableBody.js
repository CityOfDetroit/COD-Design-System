import {
  cellHeaderBlockClass,
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
    console.log(`TableBody.js | constructor() | Creating table body...`);
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
    this.tableBody = document.createElement('tbody');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line no-unused-vars
    shadow.addEventListener('slotchange', (ev) => {
      // TODO: See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line prefer-const
      let tempElements = Array.from(this.children);
      console.log(`TableBody.js | slotchange()`);
      console.log(tempElements);
      tempElements.forEach((node, index) => {
        if (index === 0) {
          node.setIsFirst();
        } else if (index % 2 !== 0) {
          node.setIsOdd();
        }
        // TODO: See CityOfDetroit/detroitmi#1099
        // eslint-disable-next-line eqeqeq
        this.getAttribute('data-striped-row') == 'true' && index % 2 == 0
          ? node.setAttribute('data-striped-row', 'true')
          : 0;
        // TODO: See CityOfDetroit/detroitmi#1099
        // eslint-disable-next-line eqeqeq
        this.getAttribute('data-hover') == 'true'
          ? node.setAttribute('data-hover', 'true')
          : 0;
        // TODO: See CityOfDetroit/detroitmi#1099
        // eslint-disable-next-line eqeqeq
        this.getAttribute('data-striped-col') == 'true'
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

        console.log(`TableBody.js | slotChange() | tableStacked=${this.isStacked()}`);
        if (this.isStacked()) {
          node.setIsStacked(true /* isStacked */, this.isCellHeaderBlock());
        }

        this.tableBody.append(node);
      });
    });
  }

  connectedCallback() {
    console.log(`TableBody.js | connectedCallback()`);
    this.shadowRoot.appendChild(this.tableBody);
  }

  setIsStacked(isStacked, isCellHeaderBlock) {
    console.log(`TableBody.js | setIsStacked() | isStacked=${isStacked}`);
    if (isStacked) {
      this.tableBody.classList.add(stackedTableClass);
    } else {
      this.tableBody.classList.remove(stackedTableClass);
    }

    if (isCellHeaderBlock) {
      this.tableBody.classList.add(cellHeaderBlockClass);
    } else {
      this.tableBody.classList.remove(cellHeaderBlockClass);
    }
  }

  isStacked() {
    return this.tableBody.classList.contains(stackedTableClass);
  }

  isCellHeaderBlock() {
    return this.tableBody.classList.contains(cellHeaderBlockClass);
  }
}
