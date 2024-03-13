import styles from '!!raw-loader!./Calendar.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

import { Calendar as FullCalendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

const template = document.createElement('template');
template.innerHTML = `
<div id="calendar">
</div>
`;

class Calendar extends HTMLElement {
  static observedAttributes = [];

  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // Add styles
    const bootStyles = document.createElement('style');
    bootStyles.textContent = bootstrapStyles;
    const variableStyles = document.createElement('style');
    variableStyles.textContent = varStyles;
    const itemStyles = document.createElement('style');
    itemStyles.textContent = styles;
    this.shadowRoot.appendChild(bootStyles);
    this.shadowRoot.appendChild(variableStyles);
    this.shadowRoot.appendChild(itemStyles);
  }

  connectedCallback() {
    if (this.calendarIsConnected()) {
      return;
    }

    const calendarEl = this.shadowRoot.getElementById('calendar');
    const eventArraySource = this.buildEventArraySource();
    const calendar = new FullCalendar(calendarEl, {
      plugins: [dayGridPlugin],
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'title',
        center: '',
        right: 'prev,next today',
      },
      eventSources: [eventArraySource],
    });
    calendar.render();
  }

  /**
   * Build an events source object from the JSON list of events
   * provided by the user of the component.
   * @returns an EventSource object using an array of events.
   *          See https://fullcalendar.io/docs/event-source-object.
   */
  buildEventArraySource() {
    let events = [];
    const eventsJSON = this.getAttribute('events');
    try {
      events = JSON.parse(eventsJSON ?? '[]');
    } catch (error) {
      // TODO: Introduce proper error logging.
      // eslint-disable-next-line no-console
      console.error(`Failed to parse list of events:\n${eventsJSON}`);
    }
    const eventSource = {
      id: 'eventsArray',
      events: events,
      // TODO: customize based on detroitmi theme and associated filters.
      color: 'blue',
      textColor: 'black',
    };
    return eventSource;
  }

  /**
   * Checks if the calendar is already connected to the Shadow DOM.
   * @returns true if the calendar element is already connected to
   *          the Shadow DOM, and false otherwise.
   */
  calendarIsConnected() {
    return this.shadowRoot.getElementById('calendar').childElementCount > 0;
  }

  // TODO: Handle event source changes.
  // attributeChangedCallback(name, oldValue, newValue) {
  // }
}

export { Calendar as default };
