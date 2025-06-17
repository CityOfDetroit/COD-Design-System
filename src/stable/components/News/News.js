import styles from '!!raw-loader!./News.css';

const template = document.createElement('template');
template.innerHTML = `
<style>
${styles}
</style>

<div class="news-card">

<div class="news-header">
<h3 class="news-title">
  <slot name="news-title" id="newsTitleSlot">Default news title: Lorem ipsum dolor sit amet.</slot>
</h3><svg class="chevron-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
    <polyline points="9 6 15 12 9 18"></polyline>
  </svg>
<span class="chevron"></span>
</div>

<div class="news-meta">
   <span id="news-date"></span>
      <span class="news-tags">
        <slot name="tags" id="tagsSlot"></slot>
      </span>
</div>

</div>
`;

class News extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ['datetime'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'datetime') {
      this.formatDate(newValue);
    }
  }

  connectedCallback() {
    const date = this.getAttribute('datetime');
    this.formatDate(date);
  }

  formatDate(dateStr) {
    // Parse the string into a Date object
    const date = new Date(dateStr);

    // Validate the date
    if (isNaN(date.getTime())) {
      this.shadowRoot.querySelector('#news-date').textContent = 'Invalid date';
      return;
    }

    // Format the date — e.g., "June 1, 2024"
    const formatted = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    // Insert the formatted date into the DOM
    const dateElement = this.shadowRoot.querySelector('#news-date');
    if (dateElement) {
      dateElement.textContent = formatted;
    }
  }
}

export { News as default };
