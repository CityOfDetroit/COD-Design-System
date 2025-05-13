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
      <span class="chevron"></span>
    </div>
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
    this._alt = this.getAttribute('alt') || 'Profile Image';
    this._target = this.getAttribute('target') || '_blank';
    this._rel = this.getAttribute('rel') || 'noopener noreferrer';
  }

  static get observedAttributes() {
    return ['src', 'href', 'alt', 'target', 'rel'];
  }

  get href() {
    return this._href;
  }
  get src() {
    return this._src;
  }
  get alt() {
    return this._alt;
  }
  get target() {
    return this._target;
  }
  get rel() {
    return this._rel;
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
    if (name === 'alt' && newValue !== oldValue) {
      this._alt = newValue;
      this._updateImage();
    }
    if (name === 'target' && newValue !== oldValue) {
      this._target = newValue;
      this._updateLink();
    }

    if (name === 'rel' && newValue !== oldValue) {
      this._rel = newValue;
      this._updateLink();
    }
  }

  connectedCallback() {
    this._updateImage(this.src);
    this._updateLink(this.href);
  }

  _updateImage() {
    const img = this.shadowRoot.querySelector('.profile-image');
    if (img) {
      img.src = this._src || '';
      img.alt = this._alt || 'Profile Image';
    }
  }

  _updateLink() {
    const card = this.shadowRoot.querySelector('.profile-card');
    if (card) {
      if (this._href) {
        card.href = this._href;
        card.target = this._target || '_blank';
        card.rel = this._rel || 'noopener noreferrer';
      } else {
        card.removeAttribute('href');
        card.removeAttribute('target');
        card.removeAttribute('rel');
      }
    }
  }
}

export { ProfileCard as default };
