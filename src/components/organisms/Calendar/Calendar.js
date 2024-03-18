import styles from '!!raw-loader!./Calendar.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

import observedAttributeMixin from '../../../shared/js/observed-attribute-mixin';

import { Calendar as FullCalendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

const template = document.createElement('template');
template.innerHTML = `
<div id="calendar">
</div>
`;

class Calendar extends HTMLElement {
  static observedAttributeCbs = {
    events: (component, _oldValue, newEventsJSON) => {
      if (component.calendar === null) {
        // Guard against attribute initialization being
        // called before component connected.
        return;
      }
      component.updateEventArraySource(newEventsJSON);
    },
  };
  static observedAttributes = Object.keys(this.observedAttributeCbs);

  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // Create variable for calendar instance
    this.calendar = null;

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
    this.calendar = new FullCalendar(calendarEl, {
      plugins: [dayGridPlugin],
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'title',
        center: '',
        right: 'prev,next today',
      },
      eventSources: [eventArraySource],
    });
    this.calendar.render();
  }

  /**
   * Build an events source object from the JSON list of events
   * provided by the user of the component.
   * @param {string} [eventsJSON=null] A JSON serialized array of pre-parsed
   *        event objects. See https://fullcalendar.io/docs/event-parsing. If null, events
   *        will be fetched from the 'events' attribute on the component.
   * @returns an EventSource object using an array of events.
   *          See https://fullcalendar.io/docs/event-source-object.
   */
  buildEventArraySource(eventsJSON = null) {
    if (eventsJSON === null) {
      eventsJSON = this.getAttribute('events');
    }
    let events = [];
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
    };
    return eventSource;
  }

  /**
   * Replaces the 'eventsArray' event source with a new event source.
   *
   * @param {string} newEventsJSON - A JSON serialized array of pre-parsed
   *        event objects. See https://fullcalendar.io/docs/event-parsing. If null, events
   *        will be fetched from the 'events' attribute on the component instead.
   */
  updateEventArraySource(newEventsJSON = null) {
    this.calendar.pauseRendering();
    const newEventSource = this.buildEventArraySource(newEventsJSON);
    this.calendar.getEventSourceById('eventsArray')?.remove();
    this.calendar.addEventSource(newEventSource);
    this.calendar.resumeRendering();
  }

  /**
   * Checks if the calendar is already connected to the Shadow DOM.
   * @returns true if the calendar element is already connected to
   *          the Shadow DOM, and false otherwise.
   */
  calendarIsConnected() {
    return this.shadowRoot.getElementById('calendar').childElementCount > 0;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name in Calendar.observedAttributeCbs) {
      this.handleObservedAttribute(
        oldValue,
        newValue,
        Calendar.observedAttributeCbs[name],
      );
    }
  }
}

// Apply mixins.
Object.assign(Calendar.prototype, observedAttributeMixin);

export { Calendar as default };
