import styles from '!!raw-loader!./Button.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

export default class Button extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line no-unused-vars
    const shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // Button attributes
    let close = this.getAttribute('data-close');
    let link = this.getAttribute('data-link');
    let btnID = this.getAttribute('data-id');
    let ariaLabel = this.getAttribute('data-aria-label');
    let primary = this.getAttribute('data-primary');
    let backgroundColor = this.getAttribute('data-background-color');
    let shape = this.getAttribute('data-shape');
    let icon = this.getAttribute('data-icon');
    let iconSize = this.getAttribute('data-icon-size');
    let iconOrder = this.getAttribute('data-icon-order');
    let hiddenLabel = this.getAttribute('data-hidden-label');
    let imgSrc = this.getAttribute('data-img');
    let imgAlt = this.getAttribute('data-img-alt');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line no-unused-vars, eqeqeq
    let img = imgAlt != '' ? 'img' : 'not-img';
    let size = this.getAttribute('data-size');
    let extraClasses = this.getAttribute('data-extra-classes');
    let label = this.getAttribute('data-label');
    let disableStatus = this.getAttribute('data-disable');
    // Building Button component
    const btn = document.createElement('button');
    let btnClasses = ['btn'];
    btn.type = 'button';
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (btnID != null && btnID != undefined) {
      btn.id = btnID;
    }
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    disableStatus == 'true' ? (btn.disabled = true) : (btn.disabled = false);
    btn.setAttribute('aria-label', `${ariaLabel || ''}`);
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (primary == 'true') {
      btnClasses.push(`btn-${backgroundColor}`);
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line eqeqeq
    } else if (primary == 'false') {
      btnClasses.push(`btn-outline-${backgroundColor}`);
    }
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    shape == 'square'
      ? btnClasses.push('cod-button--square')
      : btnClasses.push('cod-button-fluid');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    size != undefined && size != null ? btnClasses.push(`btn-${size}`) : 0;
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    extraClasses != undefined && extraClasses != null
      ? btnClasses.push(extraClasses)
      : 0;
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    imgAlt != ''
      ? btnClasses.push('cod-button--img')
      : btnClasses.push('cod-button--not-img');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    close == 'true' ? btnClasses.push('btn-close') : 0;
    btn.className = btnClasses.join(' ');

    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (icon != '') {
      // Loading icon
      let iconContainer = document.createElement('span');
      let activeIcon = document.createElement('cod-icon');
      activeIcon.setAttribute('data-icon', icon);
      activeIcon.setAttribute('data-size', iconSize);
      iconContainer.appendChild(activeIcon);
      btn.innerText = label;
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line eqeqeq
      if (iconOrder == 'left') {
        btn.insertBefore(iconContainer, btn.firstChild);
      } else {
        btn.appendChild(iconContainer);
      }
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line eqeqeq
    } else if (imgAlt != '') {
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
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (hiddenLabel != undefined && hiddenLabel != null) {
      let hLabel = document.createElement('span');
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
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line eqeqeq
      if (link == undefined || link == null) {
        this.shadowRoot.appendChild(btn);
        let ghostBtn = this.appendChild(document.createElement('button'));
        this.onclick = () => ghostBtn.click();
      } else {
        const btnLink = document.createElement('a');
        btnLink.href = link;
        btnLink.appendChild(btn);
        this.shadowRoot.appendChild(btnLink);
      }
    }
  }
}
