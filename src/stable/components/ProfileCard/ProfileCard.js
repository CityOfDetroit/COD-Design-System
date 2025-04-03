import styles from '!!raw-loader!./ProfileCard.css';

const template = document.createElement('template');
template.innerHTML = `
<style>
${styles}
</style>

<a class="profile-card">
 <img class="profile-image" alt="Profile Image">
 <div class="profile-details">
 <slot name="name"></slot>
 <slot name="title-primary"></slot>
 <slot name="title-secondary"></slot>
 </div>
</a>
`;

class ProfileCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ['image-src', 'link-href'];
  }

  attributeChangedCallback(name, newValue) {
    if (name === 'image-src') {
      this._updateImage(newValue);
    }
    if (name === 'link-href') {
      this._updateLink(newValue);
    }
  }

  connectedCallback() {
    this._updateImage(this.getAttribute('image-src'));
    this._updateLink(this.getAttribute('link-href'));
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

  _updateLink(newValue) {
    const card = this.shadowRoot.querySelector('.profile-card');
    if (card) {
      if (newValue) {
        card.href = newValue;
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
      } else {
        card.removeAttribute('href');
      }
    }
  }
}

export { ProfileCard as default };
