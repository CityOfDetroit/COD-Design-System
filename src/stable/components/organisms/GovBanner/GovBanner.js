import styles from '!!raw-loader!./GovBanner.css';
import varStyles from '!!raw-loader!../../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../../shared/themed-bootstrap.css';

const template = document.createElement('template');

template.innerHTML = `
  <style>
    ${bootstrapStyles}
    ${varStyles}
    ${styles}
  </style>
  <div part="container" class="banner-container">
    <header part="header" class="banner-header">
      <div part="title-section" class="title-section">
        <slot name="city-name">CITY OF DETROIT</slot>
        <div part="official-text" class="official-text">
          <slot name="official-statement">An official website of the City of Detroit.</slot>
          <span part="know-text" class="know-text">
            <slot name="know-statement">Here's how you know.</slot>
          </span>
        </div>
      </div>
      <button part="toggle" class="chevron-container" aria-expanded="false" aria-controls="content">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
        </svg>
      </button>
    </header>
    <div id="content" part="content" class="content-container" hidden>
      <slot name="content"></slot>
    </div>
  </div>
`;

class GovBanner extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    this._setupListeners();
  }

  disconnectedCallback() {
    // TODO: Confirm this is working correctly.
    const toggle = this.shadowRoot.querySelector('[part="toggle"]');
    toggle.removeEventListener('click', this._handleToggle);
  }

  _setupListeners() {
    const toggle = this.shadowRoot.querySelector('[part="toggle"]');
    if (toggle) {
      toggle.addEventListener('click', this._handleToggle.bind(this));
    }
  }

  _handleToggle() {
    console.log('I was clicked.');
  }
}

export { GovBanner as default };