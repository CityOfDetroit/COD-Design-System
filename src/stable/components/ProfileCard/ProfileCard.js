import styles from '!!raw-loader!./ProfileCard.css';

const template = document.createElement('template');
template.innerHTML = `
<style>
${styles}
</style>

<div class="profile-card">
 <img class="profile-image" alt="Profile Image">
 <div class="profile-details">
 <slot name="name"></slot>
 <slot name="title-primary"></slot>
 <slot name="title-secondary"></slot>
 </div>
</div>
`;

class ProfileCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ['image-src'];
  }

  attributeChangedCallback(name, newValue) {
    if (name === 'image-src') {
      this._updateImage(newValue);
    }
  }

  connectedCallback() {
    this._updateImage(this.getAttribute('image-src'));
    this._validateNameSlot();
  }

  _updateImage(newValue) {
    const img = this.shadowRoot.querySelector('.profile-image');
    if (img) {
      img.src = newValue || '';
    }
  }

  _validateNameSlot() {
    const slot = this.shadowRoot.querySelector('slot[name="name"]');
    slot.addEventListener('slotchange', () => {
      const assignedNodes = slot.assignedNodes({ flatten: true });
      if (assignedNodes.length > 0) {
        const assignedElement = assignedNodes[0];
        if (
          !(
            assignedElement instanceof HTMLSpanElement ||
            assignedElement instanceof HTMLAnchorElement
          )
        ) {
          throw new Error(
            'ProfileCard: The "name" slot should contain either a <span> or an <a> element.',
          );
        }
      }
    });
  }
}

export { ProfileCard as default };
