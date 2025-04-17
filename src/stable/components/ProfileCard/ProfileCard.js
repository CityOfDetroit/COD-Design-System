// import styles from '!!raw-loader!./ProfileCard.css';

// const template = document.createElement('template');
// template.innerHTML = `
// <style>
// ${styles}
// </style>
// <a class="profile-card">
//  <img class="profile-image" alt="Profile Image">
//  <div class="profile-details">
//  <slot name="name"></slot>
//  <slot name="title-primary"></slot>
//  <slot name="title-secondary"></slot>
//  </div>
// </a>
// `;
// class ProfileCard extends HTMLElement {
//   constructor() {
//     super();
//     const shadow = this.attachShadow({ mode: 'open' });
//     shadow.appendChild(template.content.cloneNode(true));
//   }
//   static get observedAttributes() {
//     return ['src', 'href'];
//   }
//   attributeChangedCallback(name, oldValue, newValue) {
//     if (name === 'src') {
//       this._updateImage(newValue);
//     }
//     if (name === 'href') {
//       this._updateLink(newValue);
//     }
//   }
//   connectedCallback() {
//     this._updateImage(this.getAttribute('src'));
//     this._updateLink(this.getAttribute('href'));
//     this._validateNameSlot();
//   }

//   getValidationError() {
//     return this._validationError;
//   }

//   _updateImage(newValue) {
//     const img = this.shadowRoot.querySelector('.profile-image');
//     if (img) {
//       img.src = newValue || '';
//     }
//   }

//   _validateNameSlot() {
//     const slot = this.shadowRoot.querySelector('slot[name="name"]');
//     if (slot) {
//       slot.addEventListener('slotchange', () => {
//         this._validateSlotContent();
//       });

//       this._validateSlotContent();
//     }
//   }

//   _validateSlotContent() {
//     const slot = this.shadowRoot.querySelector('slot[name="name"]');
//     if (!slot) return;

//     const assignedNodes = slot.assignedNodes({ flatten: true });

//     if (assignedNodes.length > 0) {
//       const firstElement = assignedNodes.find(
//         (node) => node.nodeType === Node.ELEMENT_NODE,
//       );

//       if (
//         firstElement &&
//         !(
//           firstElement instanceof HTMLSpanElement ||
//           firstElement instanceof HTMLAnchorElement
//         )
//       ) {
//         throw new Error(
//           'ProfileCard: The "name" slot should contain either a <span> or an <a> element.',
//         );
//       }
//     }
//   }

//   _updateLink(newValue) {
//     const card = this.shadowRoot.querySelector('.profile-card');
//     if (card) {
//       if (newValue) {
//         card.href = newValue;
//         card.target = '_blank';
//         card.rel = 'noopener noreferrer';
//       } else {
//         card.removeAttribute('href');
//       }
//     }
//   }
// }
// export { ProfileCard as default };

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
    this._validateNameSlot();
  }

  getValidationError() {
    return this._validationError;
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
