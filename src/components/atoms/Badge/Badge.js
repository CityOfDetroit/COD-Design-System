import styles from '!!raw-loader!./Badge.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';
export default class Badge extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line no-unused-vars
    const shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const bootStyles = document.createElement('style');
    bootStyles.textContent = bootstrapStyles;
    const variableStyles = document.createElement('style');
    variableStyles.textContent = varStyles;
    const badgeStyles = document.createElement('style');
    badgeStyles.textContent = styles;
    this.shadowRoot.appendChild(bootStyles);
    this.shadowRoot.appendChild(variableStyles);
    this.shadowRoot.appendChild(badgeStyles);
    // badge attributes
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let tag = this.getAttribute('data-tag');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let backgroundColor = this.getAttribute('data-background-color');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let text = this.getAttribute('data-text');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let hiddenText = this.getAttribute('data-hidden-text');
    let pill = this.getAttribute('data-pill');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let url = this.getAttribute('data-url');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line prefer-const
    let extraClasses = this.getAttribute('data-extra-classes');
    let badge = null;
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    pill == 'true' ? (pill = 'rounded-pill') : (pill = '');
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (url != undefined || url != null) {
      badge = document.createElement('a');
      badge.href = url;
    } else {
      badge = document.createElement(tag);
    }
    badge.innerText = text;
    // TODO: See CityOfDetroit/detroitmi#1099
    // eslint-disable-next-line eqeqeq
    if (hiddenText != undefined || hiddenText != null) {
      const hiddenBadge = document.createElement('span');
      hiddenBadge.className = 'visually-hidden';
      hiddenBadge.innerText = hiddenText;
      badge.appendChild(hiddenBadge);
    }
    badge.className = [
      'badge',
      `text-bg-${backgroundColor || ''}`,
      `${pill || ''}`,
      `${extraClasses || ''}`,
    ].join(' ');
    if (!this.shadowRoot.querySelector(tag)) {
      this.shadowRoot.appendChild(badge);
    }
  }
}
