import styles from '!!raw-loader!./FormLabel.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';
export default class FormLabel extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line no-unused-vars
    const shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // progress attributes
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let inputID = this.getAttribute('data-input-id');
    let hidden = this.getAttribute('data-hidden');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let textColor = this.getAttribute('data-color');
    let required = this.getAttribute('data-required');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let text = this.getAttribute('data-text');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let extraClasses = this.getAttribute('data-extra-classes');
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (hidden == 'true') {
      hidden = 'visually-hidden';
    } else {
      hidden = '';
    }
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (required == 'true') {
      required = 'required-field';
    }
    const label = document.createElement('label');
    label.innerText = text;
    label.setAttribute('for', inputID);
    label.className = [
      'form-label',
      hidden,
      required,
      `${extraClasses || ''}`,
      `text-${textColor || ''}`,
    ].join(' ');
    if (!this.shadowRoot.querySelector('label')) {
      // setting up styles
      const bootStyles = document.createElement('style');
      bootStyles.textContent = bootstrapStyles;
      const variableStyles = document.createElement('style');
      variableStyles.textContent = varStyles;
      const formLabelStyles = document.createElement('style');
      formLabelStyles.textContent = styles;
      this.shadowRoot.appendChild(bootStyles);
      this.shadowRoot.appendChild(variableStyles);
      this.shadowRoot.appendChild(formLabelStyles);
      this.shadowRoot.appendChild(label);
    }
  }
}
