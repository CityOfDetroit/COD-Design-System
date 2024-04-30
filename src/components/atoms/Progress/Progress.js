import styles from '!!raw-loader!./Progress.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';
export default class Progress extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    this.attachShadow({ mode: 'open' });
    // Setting up styles
    const bootStyles = document.createElement('style');
    bootStyles.textContent = bootstrapStyles;
    const variableStyles = document.createElement('style');
    variableStyles.textContent = varStyles;
    const progressStyles = document.createElement('style');
    progressStyles.textContent = styles;
    this.shadowRoot.appendChild(bootStyles);
    this.shadowRoot.appendChild(variableStyles);
    this.shadowRoot.appendChild(progressStyles);
  }

  connectedCallback() {
    // Handle attributes
    // TODO: Make me a slotted attribute.
    const label = this.getAttribute('data-label');
    const ariaLabel = this.getAttribute('data-aria-label');
    const animated = this.hasAttribute('animated');
    const striped = this.hasAttribute('striped');
    const value = this.getAttribute('value');
    const backgroundColor = this.getAttribute('color');
    const stacked = this.getAttribute('data-multi-bars');

    const progressContainer = document.createElement('div');

    // TODO: Fix old ESLint errors - see issue #1099
    // eslint-disable-next-line eqeqeq
    if (stacked == 'undefined' || stacked == 'null') {
      const bar = document.createElement('div');
      bar.role = 'progressbar';
      bar.setAttribute('aria-label', ariaLabel);
      bar.setAttribute('aria-valuenow', value);
      bar.classList.add('progress');
      const barBody = document.createElement('div');
      barBody.style = `width: ${value}%`;

      // TODO: Fix old ESLint errors - see issue #1099
      // eslint-disable-next-line eqeqeq
      if (label != 'undefined' && label != 'null') {
        barBody.innerText = label;
      }
      this._addBarClasses(barBody, animated, striped, backgroundColor);
      bar.appendChild(barBody);
      progressContainer.appendChild(bar);
    } else {
      progressContainer.classList.add('progress-stacked');
      this.buildBar(JSON.parse(stacked), progressContainer);
    }
    this.shadowRoot.appendChild(progressContainer);
  }

  buildBar(bars, barContainer) {
    bars.forEach((bar) => {
      const tempBar = document.createElement('div');
      tempBar.role = 'progressbar';
      tempBar.setAttribute('aria-label', bar.ariaLabel);
      tempBar.setAttribute('aria-valuenow', bar.value);
      tempBar.setAttribute('aria-valuemin', '0');
      tempBar.setAttribute('aria-valuemax', '100');
      tempBar.classList.add('progress');
      const barBody = document.createElement('div');
      tempBar.style = `width: ${bar.value}%`;

      // TODO: Fix old ESLint errors - see issue #1099
      // eslint-disable-next-line eqeqeq
      bar.label == undefined || bar.label == null
        ? ''
        : (barBody.innerText = bar.label);
      this._addBarClasses(
        barBody,
        bar.animated,
        bar.striped,
        bar.backgroundColor,
      );
      tempBar.appendChild(barBody);
      barContainer.appendChild(tempBar);
    });
  }

  _addBarClasses(barElement, isAnimated, isStriped, bgColor) {
    const barClasses = [
      'progress-bar',
      isAnimated ? 'progress-bar-animated' : null,
      isStriped ? 'progress-bar-striped' : null,
      bgColor ? `bg-${bgColor}` : null,
    ].filter((value) => value !== null);
    barElement.classList.add(...barClasses);
  }
}
