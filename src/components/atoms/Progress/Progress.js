import styles from '!!raw-loader!./Progress.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
<div class="progress" role="progressbar">
  <div class="progress-bar">
    <slot name="label"></slot>
  <div>
</div>
`;

export default class Progress extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

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
    const ariaLabel = this.getAttribute('aria-label');
    const animated = this.hasAttribute('animated');
    const striped = this.hasAttribute('striped');
    const value = this.getAttribute('value');
    const backgroundColor = this.getAttribute('color');

    const bar = this.shadowRoot.querySelector('.progress');
    bar.setAttribute('aria-label', ariaLabel);
    bar.setAttribute('aria-valuenow', value);

    const barBody = this.shadowRoot.querySelector('.progress-bar');
    barBody.style = `width: ${value}%`;

    this._addBarClasses(barBody, animated, striped, backgroundColor);
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
