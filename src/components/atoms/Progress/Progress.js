import styles from '!!raw-loader!./Progress.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';
export default class Progress extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line no-unused-vars
    const shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // setting up styles
    const bootStyles = document.createElement('style');
    bootStyles.textContent = bootstrapStyles;
    const variableStyles = document.createElement('style');
    variableStyles.textContent = varStyles;
    const progressStyles = document.createElement('style');
    progressStyles.textContent = styles;
    this.shadowRoot.appendChild(bootStyles);
    this.shadowRoot.appendChild(variableStyles);
    this.shadowRoot.appendChild(progressStyles);
    // progress attributes
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let striped = this.getAttribute('data-type');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let label = this.getAttribute('data-label');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let ariaLabel = this.getAttribute('data-aria-label');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let animated = this.getAttribute('data-animated');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let value = this.getAttribute('data-value');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let backgroundColor = this.getAttribute('data-background-color');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let stacked = this.getAttribute('data-multi-bars');
    const progressContainer = document.createElement('div');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (stacked == 'undefined' || stacked == 'null') {
      const bar = document.createElement('div');
      bar.role = 'progressbar';
      bar.setAttribute('aria-label', ariaLabel);
      bar.setAttribute('aria-valuenow', value);
      bar.className = 'progress';
      const barBody = document.createElement('div');
      barBody.style = `width: ${value}%`;
      // TODO: See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line eqeqeq
      if (label != 'undefined' && label != 'null') {
        barBody.innerText = label;
      }
      barBody.className = [
        'progress-bar',
        `progress-bar-${animated || ''}`,
        `progress-bar-${striped || ''}`,
        `bg-${backgroundColor || ''}`,
      ].join(' ');
      bar.appendChild(barBody);
      progressContainer.appendChild(bar);
    } else {
      progressContainer.className = 'progress-stacked';
      this.buildBar(JSON.parse(stacked), progressContainer);
    }
    this.shadowRoot.appendChild(progressContainer);
  }

  buildBar(bars, barContainer) {
    bars.forEach((bar) => {
      // TODO: See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line prefer-const
      let tempBar = document.createElement('div');
      tempBar.role = 'progressbar';
      tempBar.setAttribute('aria-label', bar.ariaLabel);
      tempBar.setAttribute('aria-valuenow', bar.value);
      tempBar.setAttribute('aria-valuemin', '0');
      tempBar.setAttribute('aria-valuemax', '100');
      tempBar.className = 'progress';
      const barBody = document.createElement('div');
      tempBar.style = `width: ${bar.value}%`;
      // TODO: See CityOfDetroit/detroitmi#1099
      // eslint-disable-next-line eqeqeq
      bar.label == undefined || bar.label == null
        ? ''
        : (barBody.innerText = bar.label);
      barBody.className = [
        'progress-bar',
        `progress-bar-${bar.animated || ''}`,
        `progress-bar-${bar.striped || ''}`,
        `bg-${bar.backgroundColor || ''}`,
      ].join(' ');
      tempBar.appendChild(barBody);
      barContainer.appendChild(tempBar);
    });
  }
}
