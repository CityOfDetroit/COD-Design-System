import styles from '!!raw-loader!./Card.css';

const template = document.createElement('template');

template.innerHTML = `
<div class="card" part="base">
  <slot class="card-img" part="image" name="image"></slot>
  <slot class="card-header" part="header" name="header"></slot>
  <slot class="card-body" part="body"></slot>
  <slot class="card-footer" part="footer" name="footer"></slot>
</div>
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

  connectedCallback() {
    this._handleSlotChange();
    this.shadowRoot.addEventListener('slotchange', () =>
      this._handleSlotChange(),
    );
  }

  _handleSlotChange() {
    // Handle the image slot
    const imageSlot = this.shadowRoot.querySelector('slot[name="image"]');
    const hasImageContent = imageSlot && imageSlot.assignedNodes().length > 0;
    this.shadowRoot.querySelector('.card-img').style.display = hasImageContent
      ? 'block'
      : 'none';

    // Handle the header slot
    const headerSlot = this.shadowRoot.querySelector('slot[name="header"]');
    const hasHeaderContent =
      headerSlot && headerSlot.assignedNodes().length > 0;
    this.shadowRoot.querySelector('.card-header').style.display =
      hasHeaderContent ? 'block' : 'none';

    // Handle the footer slot
    const footerSlot = this.shadowRoot.querySelector('slot[name="footer"]');
    const hasFooterContent =
      footerSlot && footerSlot.assignedNodes().length > 0;
    this.shadowRoot.querySelector('.card-footer').style.display =
      hasFooterContent ? 'block' : 'none';
  }
}
