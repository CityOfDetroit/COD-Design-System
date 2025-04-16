import styles from '!!raw-loader!./PhotoButton.css';

const template = document.createElement('template');

template.innerHTML = `
<a class="photo-btn btn btn-primary" part="base">
  <slot class="button-img" part="image" name="image"></slot>
  <div class="button-body" part="body">
    <slot></slot>
  </div>
</a>
`;

export default class Card extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));

    // Add styles
    const itemStyles = document.createElement('style');
    itemStyles.textContent = styles;
    shadow.appendChild(itemStyles);
  }

  connectedCallback() {}
}
