import styles from '!!raw-loader!./ProcessListItem.css';

const template = document.createElement('template');

template.innerHTML = `
<li class="cod-process-list__item" part="base">
  <div class="cod-process-list__counter" part="counter"></div>
  <div class="cod-process-list__heading" part="heading">
    <slot name="heading"></slot>
  </div>
  <div class="cod-process-list__content" part="content">
    <slot></slot>
  </div>
</li>
`;

export default class ProcessListItem extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));

    const itemStyles = document.createElement('style');
    itemStyles.textContent = styles;
    shadow.appendChild(itemStyles);
  }
}
