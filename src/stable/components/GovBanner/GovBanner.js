import styles from '!!raw-loader!./GovBanner.css';

// Translation object for supported languages
const translations = {
  en: {
    cityOf: 'City of',
    cityName: 'Detroit',
    officialWebsite: 'An official website of the City of Detroit.',
    hereHowYouKnow: "Here's how you know",
    officialWebsitesUseGov: 'Official websites use .gov',
    govWebsiteDescription: 'A <b>.gov</b> website belongs to an official government organization in the United States.',
    secureGovWebsites: 'Secure .gov websites use HTTPS',
    httpsDescription: 'A <b>lock</b> (🔒) or <b>https://</b> means you\'ve safely connected to the .gov website. Share sensitive information only on official, secure websites.'
  },
  es: {
    cityOf: 'Ciudad de',
    cityName: 'Detroit',
    officialWebsite: 'Un sitio web oficial de la Ciudad de Detroit.',
    hereHowYouKnow: 'Así es como lo sabes',
    officialWebsitesUseGov: 'Los sitios web oficiales usan .gov',
    govWebsiteDescription: 'Un sitio web <b>.gov</b> pertenece a una organización gubernamental oficial de los Estados Unidos.',
    secureGovWebsites: 'Los sitios web .gov seguros usan HTTPS',
    httpsDescription: 'Un <b>candado</b> (🔒) o <b>https://</b> significa que te has conectado de forma segura al sitio web .gov. Comparte información confidencial solo en sitios web oficiales y seguros.'
  },
  ar: {
    cityOf: 'مدينة',
    cityName: 'ديترويت',
    officialWebsite: 'موقع إلكتروني رسمي لمدينة ديترويت.',
    hereHowYouKnow: 'إليك كيف تعرف',
    officialWebsitesUseGov: 'المواقع الرسمية تستخدم .gov',
    govWebsiteDescription: 'موقع <b>.gov</b> ينتمي إلى منظمة حكومية رسمية في الولايات المتحدة.',
    secureGovWebsites: 'المواقع الآمنة .gov تستخدم HTTPS',
    httpsDescription: '<b>القفل</b> (🔒) أو <b>https://</b> يعني أنك اتصلت بأمان بموقع .gov. شارك المعلومات الحساسة فقط على المواقع الرسمية والآمنة.'
  },
  bn: {
    cityOf: 'শহর',
    cityName: 'ডেট্রয়েট',
    officialWebsite: 'ডেট্রয়েট শহরের একটি সরকারি ওয়েবসাইট।',
    hereHowYouKnow: 'আপনি কীভাবে জানবেন',
    officialWebsitesUseGov: 'সরকারি ওয়েবসাইটগুলি .gov ব্যবহার করে',
    govWebsiteDescription: 'একটি <b>.gov</b> ওয়েবসাইট মার্কিন যুক্তরাষ্ট্রের একটি সরকারি সংস্থার অন্তর্গত।',
    secureGovWebsites: 'নিরাপদ .gov ওয়েবসাইটগুলি HTTPS ব্যবহার করে',
    httpsDescription: 'একটি <b>তালা</b> (🔒) বা <b>https://</b> মানে আপনি .gov ওয়েবসাইটের সাথে নিরাপদে সংযুক্ত হয়েছেন। শুধুমাত্র সরকারি, নিরাপদ ওয়েবসাইটে সংবেদনশীল তথ্য শেয়ার করুন।'
  }
};

class GovBanner extends HTMLElement {
  static get observedAttributes() {
    return ['expanded', 'lang', 'dir'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._expanded = false;
    this._lang = 'en';
    this._dir = 'ltr';
    this._renderTemplate();
  }

  get expanded() {
    return this._expanded;
  }

  set expanded(value) {
    const isExpanded = Boolean(value);

    if (isExpanded === this._expanded) {
      return;
    }

    this._expanded = isExpanded;

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

    this._updateExpandedState(isExpanded);
  }

  get lang() {
    return this.getAttribute('lang') || 'en';
  }

  set lang(value) {
    if (value) {
      this.setAttribute('lang', value);
    } else {
      this.removeAttribute('lang');
    }
  }

  get dir() {
    return this.getAttribute('dir') || 'ltr';
  }

  set dir(value) {
    if (value) {
      this.setAttribute('dir', value);
    } else {
      this.removeAttribute('dir');
    }
  }

  _renderTemplate() {
    const currentLang = this.lang;
    const currentDir = this.dir;
    const t = translations[currentLang] || translations.en;
    
    this.shadowRoot.innerHTML = `
      <style>
        ${styles}
      </style>
    <div class="banner-container" dir="${currentDir}">
      <header class="banner-header">
        <div class="title-section">
          <span class="city-name">
            <span>${t.cityOf}</span>
            <span>${t.cityName}</span>
          </span>
          <div class="official-text">
            ${t.officialWebsite}
            <button class="know-text" aria-expanded="false" aria-controls="content">
            ${t.hereHowYouKnow}
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
              <span class="info-title">${t.officialWebsitesUseGov}</span>
              <p>${t.govWebsiteDescription}</p>
            </div>
          </div>
          <div class="info-item">
            <div class="icon-circle">
              <span class="lock-icon">🔒</span>
            </div>
            <div>
              <span class="info-title">${t.secureGovWebsites}</span>
              <p>${t.httpsDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div> 
    `;
  }

  connectedCallback() {
    // Initialize expanded state from attribute if present
    if (this.hasAttribute('expanded')) {
      this._expanded = true;
    }
    this._setupListeners();
    this._updateExpandedState(this._expanded);
  }

  disconnectedCallback() {
    const toggleButton = this.shadowRoot.querySelector('.know-text');
    if (toggleButton && this._handleToggle) {
      toggleButton.removeEventListener('click', this._handleToggle);
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'expanded') {
      // Only update internal state if it differs from attribute state
      const hasAttribute = this.hasAttribute('expanded');
      if (this._expanded !== hasAttribute) {
        this._expanded = hasAttribute;
        this._updateExpandedState(this._expanded);
      }
    } else if (name === 'lang' || name === 'dir') {
      // Re-render the template when language or direction changes
      if (oldValue !== newValue) {
        this._renderTemplate();
        // Re-setup listeners and state after re-rendering
        this._setupListeners();
        this._updateExpandedState(this._expanded);
      }
    }
  }

  _setupListeners() {
    const toggleButton = this.shadowRoot.querySelector('.know-text');
    if (toggleButton && !toggleButton._govBannerListenerAttached) {
      this._handleToggle = this._handleToggle.bind(this);
      toggleButton.addEventListener('click', this._handleToggle);
      toggleButton._govBannerListenerAttached = true;
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