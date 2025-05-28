import styles from '!!raw-loader!./event.css';

const template = document.createElement('template');
template.innerHTML = `
  <style>
    ${styles}
  </style>
  <div class="event-container">
        <div class="date-info"> 
          <div class="event-date"></div>
          <div class="event-year"></div>
        </div>
      <div class="event-info">
        <div id="event-title" class="event-title">
            <slot name="event-title"></slot>
<span class="event-chevron">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>
</span>
            </div>
        <div class="info-row">
          <div class="info-item event-time">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
          </svg>
          </div>
          <div class="info-item event-location">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-map-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8z"/>
              <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
            </svg>
            <slot name="location-icon"></slot>
            <slot name="event-location"></slot>
          </div>
          <div class="info-item event-tag">
            <slot name="event-tag"></slot>
          </div>
        </div>
      </div>
  </div>

`;

class Event extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    this.setupDatetime();
  }

  setupDatetime() {
    // Get args.when (Date)
    const dateInfo = this.getAttribute('datetime');
    const numFromString = Number(dateInfo);
    const dateISO = new Date(numFromString).toISOString();
    // Month & Day
    const dateFormat = new Date(dateISO).toLocaleDateString('en-DE', {
      month: 'short',
      day: 'numeric',
    });
    const dateSpan = document.createElement('span');
    dateSpan.innerText = dateFormat + '\n';
    const eventDate = this.shadowRoot.querySelector('.event-date');
    eventDate.appendChild(dateSpan);

    // Year
    const year = new Date(dateISO).toLocaleDateString('en-DE', {
      year: 'numeric',
    });
    const yearSpan = document.createElement('span');
    yearSpan.innerText = year;
    const eventYear = this.shadowRoot.querySelector('.event-year');
    eventYear.appendChild(yearSpan);

    // Get Time
    const locTime = new Date(dateISO).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
    const timeSpan = document.createElement('span');
    timeSpan.innerText = locTime;
    const eventTime = this.shadowRoot.querySelector('.event-time');
    eventTime.appendChild(timeSpan);
  }

}

export default Event;