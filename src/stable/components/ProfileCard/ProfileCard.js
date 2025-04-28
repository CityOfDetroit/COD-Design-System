import styles from '!!raw-loader!./ProfileCard.css';

const template = document.createElement('template');
template.innerHTML = `
<style>
${styles}
</style>
<a class="profile-card">
  <img class="profile-image" alt="Profile Image">
  <div class="profile-details">
    <div class="name-container">
      <slot name="name"></slot>
      <span class="chevron">›</span>
    </div>
    <slot name="title"></slot>
    <slot name="title"></slot>
  </div>
</a>
`;

class ProfileCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));

    // Internal properties
    this._href = this.getAttribute('href') || '';
    this._src = this.getAttribute('src') || '';
  }

  static get observedAttributes() {
    return ['src', 'href'];
  }

  get href() {
    return this._href;
  }

  get src() {
    return this._src;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'src' && newValue !== oldValue) {
      this._src = newValue;
      this._updateImage(newValue);
    }

    if (name === 'href' && newValue !== oldValue) {
      this._href = newValue;
      this._updateLink(newValue);
    }
  }

  connectedCallback() {
    this._updateImage(this.src);
    this._updateLink(this.href);
  }

  _updateImage(src) {
    const img = this.shadowRoot.querySelector('.profile-image');
    if (img) {
      img.src = src || ""; // Fallback image if src is invalid
    }
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
        card.removeAttribute('target');
        card.removeAttribute('rel');
      }
    }
  }
}

export { ProfileCard as default };
