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
    const close = this.getAttribute('data-close');
    const link = this.getAttribute('data-link');
    const btnID = this.getAttribute('data-id');
    const ariaLabel = this.getAttribute('data-aria-label');
    const primary = this.getAttribute('data-primary');
    const backgroundColor = this.getAttribute('data-background-color');
    const shape = this.getAttribute('data-shape');
    const icon = this.getAttribute('data-icon');
    const iconSize = this.getAttribute('data-icon-size');
    const iconOrder = this.getAttribute('data-icon-order');
    const hiddenLabel = this.getAttribute('data-hidden-label');
    const imgSrc = this.getAttribute('data-img');
    const imgAlt = this.getAttribute('data-img-alt');
    const size = this.getAttribute('data-size');
    const extraClasses = this.getAttribute('data-extra-classes');
    const label = this.getAttribute('data-label');
    const disableStatus = this.getAttribute('data-disable');
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
