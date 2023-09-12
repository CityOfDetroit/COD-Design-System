import styles from '!!raw-loader!./Range.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';
export default class Range extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line no-unused-vars
    const shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // setting up styles
    const bootStyles = document.createElement('style');
    bootStyles.textContent = bootstrapStyles;
    const variableStyles = document.createElement('style');
    variableStyles.textContent = varStyles;
    const rangeStyles = document.createElement('style');
    rangeStyles.textContent = styles;
    this.shadowRoot.appendChild(bootStyles);
    this.shadowRoot.appendChild(variableStyles);
    this.shadowRoot.appendChild(rangeStyles);
    // progress attributes
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line no-unused-vars
    let id = this.getAttribute('data-id');
    let disabled = this.getAttribute('data-disabled');
    let min = this.getAttribute('data-min');
    let max = this.getAttribute('data-max');
    let step = this.getAttribute('data-step');
    const range = document.createElement('input');
    range.type = 'range';
    range.className = 'form-range';
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (disabled == 'true') {
      range.disabled = true;
    }
    console.log(min);
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (min != undefined || min != null) {
      range.setAttribute('min', min);
    }
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (max != undefined || max != null) {
      range.setAttribute('max', max);
    }
    // See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (step != undefined || step != null) {
      range.setAttribute('step', step);
    }
    this.shadowRoot.appendChild(range);
  }
}
