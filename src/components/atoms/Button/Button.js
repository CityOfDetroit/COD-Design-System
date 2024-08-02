import styles from '!!raw-loader!./Button.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

export default class Button extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // Button attributes
    const close = this.hasAttribute('close');
    const link = this.getAttribute('link');
    const btnID = this.getAttribute('id');
    const ariaLabel = this.getAttribute('aria-label');
    const primary = this.hasAttribute('primary');
    const backgroundColor = this.getAttribute('background-color');
    const shape = this.getAttribute('shape');
    const icon = this.getAttribute('icon');
    const iconSize = this.getAttribute('icon-size');
    const iconOrder = this.getAttribute('icon-order');
    const hiddenLabel = this.getAttribute('hidden-label');
    const imgSrc = this.getAttribute('img');
    const imgAlt = this.getAttribute('img-alt');
    const size = this.getAttribute('size');
    const extraClasses = this.getAttribute('extra-classes');
    const label = this.getAttribute('label');
    const disableStatus = this.hasAttribute('disabled');
    // Building Button component
    const btn = document.createElement('button');
    const btnClasses = ['btn'];
    btn.type = 'button';
    if (btnID) {
      btn.id = btnID;
    }
    disableStatus === 'true' ? (btn.disabled = true) : (btn.disabled = false);
    btn.setAttribute('aria-label', `${ariaLabel || ''}`);
    if (primary === 'true') {
      btnClasses.push(`btn-${backgroundColor}`);
    } else if (primary === 'false') {
      btnClasses.push(`btn-outline-${backgroundColor}`);
    }
    shape === 'square'
      ? btnClasses.push('cod-button--square')
      : btnClasses.push('cod-button-fluid');
    size !== null ? btnClasses.push(`btn-${size}`) : 0;
    extraClasses !== null ? btnClasses.push(extraClasses) : 0;
    imgAlt
      ? btnClasses.push('cod-button--img')
      : btnClasses.push('cod-button--not-img');
    close === 'true' ? btnClasses.push('btn-close') : 0;
    btn.className = btnClasses.join(' ');

    if (icon) {
      // Loading icon
      const iconContainer = document.createElement('span');
      const activeIcon = document.createElement('cod-icon');
      activeIcon.setAttribute('data-icon', icon);
      activeIcon.setAttribute('data-size', iconSize);
      iconContainer.appendChild(activeIcon);
      btn.innerText = label;
      if (iconOrder === 'left') {
        btn.insertBefore(iconContainer, btn.firstChild);
      } else {
        btn.appendChild(iconContainer);
      }
    } else if (imgAlt) {
      // Loading image
      btn.innerText = label;
      const btnIcon = document.createElement('img');
      btnIcon.src = imgSrc;
      btnIcon.setAttribute('alt', imgAlt);
      btn.appendChild(btnIcon);
    } else {
      btn.innerText = label;
    }
    // Create hidden label
    if (hiddenLabel !== null) {
      const hLabel = document.createElement('span');
      hLabel.className = 'visually-hidden';
      hLabel.innerText = hiddenLabel;
      btn.appendChild(hLabel);
    }
    if (!this.shadowRoot.querySelector('button')) {
      // Inserting styles
      const bootStyles = document.createElement('style');
      bootStyles.textContent = bootstrapStyles;
      this.shadowRoot.appendChild(bootStyles);
      const variableStyles = document.createElement('style');
      variableStyles.textContent = varStyles;
      this.shadowRoot.appendChild(variableStyles);
      const btnStyles = document.createElement('style');
      btnStyles.textContent = styles;
      this.shadowRoot.appendChild(btnStyles);
      if (link) {
        const btnLink = document.createElement('a');
        btnLink.href = link;
        btnLink.appendChild(btn);
        this.shadowRoot.appendChild(btnLink);
      } else {
        this.shadowRoot.appendChild(btn);
        const ghostBtn = this.appendChild(document.createElement('button'));
        this.onclick = () => ghostBtn.click();
      }
    }
  }
}
