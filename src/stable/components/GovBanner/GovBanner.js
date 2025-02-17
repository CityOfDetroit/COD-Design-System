import styles from '!!raw-loader!./GovBanner.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

const template = document.createElement('template');
template.innerHTML = `
  <style>
    ${styles}
  </style>
<div class="banner-container">
  <header class="banner-header">
    <div class="title-section">
      <span class="city-name">
        <span>City of</span>
        <span>Detroit</span>
      </span>
      <div class="official-text">
        An official website of the City of Detroit.
        <button class="know-text" aria-expanded="false" aria-controls="content">
        Here's how you know  
        <span class="chevron-container">                
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
            </svg>
            </span>
          </button>     
      </div>
    </div>
  </header>
  <div id="content" class="content-container" hidden>
    <div class="info-section">
      <div class="info-item">
        <div class="icon-circle">
          <span class="gov-icon">🏛️</span>
        </div>
        <div>
          <span class="info-title">Official websites use .gov</span>
          <p>A <b>.gov</b> website belongs to an official government organization in the United States.</p>
        </div>
      </div>
      <div class="info-item">
        <div class="icon-circle">
          <span class="lock-icon">🔒</span>
        </div>
        <div>
          <span class="info-title">Secure .gov websites use HTTPS</span>
          <p>A <b>lock</b> (🔒) or <b>https://</b> means you've safely connected to the .gov website. Share sensitive information only on official, secure websites.</p>
        </div>
      </div>
    </div>
  </div>
</div> 
`;

class GovBanner extends HTMLElement {
  static get observedAttributes() {
    return ['expanded'];
  }

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
    this.expanded = false;
  }

  get expanded() {
    return this.hasAttribute('expanded');
  }

  set expanded(value) {
    const isExpanded = Boolean(value);

    if (isExpanded === this.expanded) {
      return;
    }

    if (isExpanded) {
      this.setAttribute('expanded', '');
    } else {
      this.removeAttribute('expanded');
    }

    this.dispatchEvent(
      new CustomEvent('expandedchange', {
        detail: { expanded: isExpanded },
        bubbles: true,
      }),
    );
  }

  connectedCallback() {
    this._setupListeners();
    this._updateExpandedState(this.expanded);
  }

  disconnectedCallback() {
    const toggle = this.shadowRoot.querySelector('.chevron-container');
    toggle.removeEventListener('click', this._handleToggle);
  }

  attributeChangedCallback(name) {
    if (name === 'expanded') {
      this._updateExpandedState(this.hasAttribute('expanded'));
    }
  }

  _setupListeners() {
    const toggleButton = this.shadowRoot.querySelector('.know-text');
    if (toggleButton) {
      toggleButton.addEventListener('click', this._handleToggle.bind(this));
    }
  }
  _handleToggle() {
    this.expanded = !this.expanded;
  }

  _updateExpandedState(isExpanded) {
    const content = this.shadowRoot.querySelector('#content');
    const button = this.shadowRoot.querySelector('.know-text');

    if (content && button) {
      button.setAttribute('aria-expanded', isExpanded);
      content.hidden = !isExpanded;
    }
  }
}

export { GovBanner as default };
