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
    return ['src', 'href'];
  }

  get src() {
    return this.getAttribute('src');
  }

  set src(value) {
    this.setAttribute('src', value);
  }

  get href() {
    return this.getAttribute('href');
  }

  set href(value) {
    this.setAttribute('href', value);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'src') {
      this._updateImage(newValue);
    }
    if (name === 'href') {
      this._updateLink(newValue);
    }
  }

  connectedCallback() {
    this._updateImage(this.src);
    this._updateLink(this.href);
  }

  _updateImage(newValue) {
    const img = this.shadowRoot.querySelector('.profile-image');
    if (img) {
      img.src = newValue || '';
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
      }
    }
  }
}

export { ProfileCard as default };
