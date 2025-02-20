export default {
  title: 'Experimental/molecules/Event',
};

// Template
const Template = () => {
  const event = document.createElement('cod-event');
  event.innerHTML = `
    <style>
      .event-container {
        display: flex;
      }
      .date, .event {
        flex: 1;
      }
      .event a {
        text-decoration: none;
      }
      .info-row {
        display: flex;
      }
      .event-info {
        flex: 1;
      }
    </style>
    <div class="event-container">
      <div class="date">
        <span slot="date" class="start-date">18 OCT 2024</span>
      </div>
      <div class="event">
        <a slot="title" href="#" class="event-title">DDOT Virtual Community Input Meeting</a>
        <hr>
        <div class="info-row">
          <div class="event-info">
            <span slot="event-time" class="event-time">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                </svg> 5:00 pm
            </slot>
          </div>
          <div class="event-info">
            <span slot="event-location" class="event-location">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-map-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8z"/>
                <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
                </svg> Virtual Event
            </slot>
          </div>
          <div class="event-info">
            <span slot="event-tag" class="event-tag">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tags-fill" viewBox="0 0 16 16">
                <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043z"/>
                </svg> Meeting
            </slot>
          </div>
        </div>
      </div>
    </div>
  `;

  return event;
};

export const Default = Template.bind({});
