import styles from '!!raw-loader!./ProcessList.css';

const template = document.createElement('template');

template.innerHTML = `
<ol class="cod-process-list" part="base">
  <slot></slot>
</ol>
`;

export default class ProcessList extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));

    const listStyles = document.createElement('style');
    listStyles.textContent = styles;
    shadow.appendChild(listStyles);
  }

  connectedCallback() {
    this.setAttribute('role', 'list');
    const items = this.querySelectorAll('cod-process-list-item');
    if (items.length > 0) {
      items[items.length - 1].setAttribute('data-hide-connector', '');
    }
  }
}