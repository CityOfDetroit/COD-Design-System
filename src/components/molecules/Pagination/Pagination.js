import styles from '!!raw-loader!./Pagination.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<slot></slot>
`;

export default class Pagination extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
    this.paginationContainer = document.createElement('nav');
    this.pagination = document.createElement('ul');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line no-unused-vars
    this.shadowRoot.addEventListener('slotchange', (ev) => {
      let tempElements = Array.from(this.children);
      tempElements.forEach((node, index) => {
        let paginationItem = document.createElement('li');
        let paginationItemClasses = ['page-item'];
        // See CityOfDetroit/detroitmi#1099
        // eslint-disable-next-line eqeqeq
        if (node.getAttribute('data-active') == 'true') {
          paginationItemClasses.push('active');
          paginationItem.setAttribute('aria-current', 'page');
        }
        // See CityOfDetroit/detroitmi#1099
        // eslint-disable-next-line eqeqeq
        if (node.getAttribute('data-disabled') == 'true') {
          paginationItemClasses.push('disabled');
          paginationItem.setAttribute('tabindex', '-1');
        }
        paginationItem.className = paginationItemClasses.join(' ');
        node.setAttribute('data-index', index);
        paginationItem.appendChild(node);
        let nodeClasses = node.className.split(' ');
        nodeClasses.includes('no-wc')
          ? node.remove()
          : this.pagination.append(paginationItem);
      });
    });
    this.paginationContainer.appendChild(this.pagination);

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
    // Nav attributes
    let label = this.getAttribute('data-label');
    let id = this.getAttribute('data-id');
    let size = this.getAttribute('data-size');
    let extraClasses = this.getAttribute('data-extra-classes');
    let paginationClasses = ['pagination'];
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    size != undefined && size != null
      ? paginationClasses.push(`pagination-${size}`)
      : 0;
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    extraClasses != undefined && extraClasses != null
      ? paginationClasses.push(extraClasses)
      : 0;
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    id != undefined && id != null ? (this.paginationContainer.id = id) : 0;
    this.paginationContainer.setAttribute('aria-label', label);
    this.pagination.className = paginationClasses.join(' ');
    if (!this.shadowRoot.querySelector('nav')) {
      this.shadowRoot.appendChild(this.paginationContainer);
    }
  }
}
