import styles from '!!raw-loader!./NavbarToggle.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

export default class NavbarToggle extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    // Add styles
    const bootStyles = document.createElement('style');
    bootStyles.textContent = bootstrapStyles;
    const variableStyles = document.createElement('style');
    variableStyles.textContent = varStyles;
    const itemStyles = document.createElement('style');
    itemStyles.textContent = styles;
    shadow.appendChild(bootStyles);
    shadow.appendChild(variableStyles);
    shadow.appendChild(itemStyles);
  }

  connectedCallback() {
    // Navbar Brand attributes
    let darkBtn = this.getAttribute('data-button-dark');
    let mode = this.getAttribute('data-mode');
    let extraClasses = this.getAttribute('data-extra-classes');
    let toggleBtn = document.createElement('button');
    let navbarToggleClasses = [''];
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (mode == 'default') {
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line eqeqeq
      darkBtn == 'true' ? toggleBtn.setAttribute('data-bs-theme', 'dark') : 0;
      let toggleIcon = document.createElement('span');
      navbarToggleClasses.push('navbar-toggler-icon');
      toggleBtn.appendChild(toggleIcon);
    }
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    extraClasses != undefined && extraClasses != null
      ? navbarToggleClasses.push(extraClasses)
      : 0;
    toggleBtn.className = navbarToggleClasses.join(' ');
    if (!this.shadowRoot.querySelector('button')) {
      toggleBtn.addEventListener('click', this._onClick.bind(this));
      this.shadowRoot.appendChild(toggleBtn);
    }
  }

  disconnectedCallback() {
    this.removeEventListener('click', this._onClick.bind(this));
  }

  // See CityOfDetroit/detroitmi#1099
  // eslint-disable-next-line no-unused-vars
  _onClick(e) {
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (this.getAttribute('data-show') == 'true') {
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line eqeqeq
      this.getAttribute('data-target-toggle') == 'offcanvas'
        ? this.getRootNode()
            .querySelector('cod-offcanvas')
            .setAttribute('data-show', 'false')
        : this.getRootNode().host.setAttribute('data-show', 'false');
    } else {
      // See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line eqeqeq
      this.getAttribute('data-target-toggle') == 'offcanvas'
        ? this.getRootNode()
            .querySelector('cod-offcanvas')
            .setAttribute('data-show', 'true')
        : this.getRootNode().host.setAttribute('data-show', 'true');
    }
  }
}
