import '../components/Event/cod-event';
import '../components/Tag/cod-tag';
import { html } from 'lit-html';
import { expect } from '@storybook/test';

export default {
  title: 'Components/Event',
  argTypes: {
    title: { control: 'text' },
    when: { control: 'date' },
    virutalEvent: { control: 'boolean' },
    location: { control: 'text' },
    tag: { control: 'text' },
  },
};

const Template = (args) => {
  const event = document.createElement('cod-event');

  // Title
  const title = document.createElement('a');
  title.setAttribute('href', 'https://www.example.com');
  title.slot = 'event-title';
  title.textContent = args.title;
  event.appendChild(title);

  // Datetime
  const eventDate = args.when;
  event.setAttribute('datetime', eventDate);

  // Default Datetime
  if (!args.when) {
    const defaultDate = Date.now();
    event.setAttribute('datetime', defaultDate);
  }

  // Location
  const location = document.createElement('span');
  location.slot = 'event-location';

  // Virtual Event
  if (args.virutalEvent === true) {
    location.textContent = 'Virtual Event';
  } else {
    location.textContent = args.location;
  }
  event.appendChild(location);

  // Tag
  const tagSpan = document.createElement('span');
  tagSpan.innerHTML = `
  <cod-tag><span slot="label">${args.tag}</span></cod-tag>
  `;
  tagSpan.slot = 'event-tag';
  event.appendChild(tagSpan);

  return event;
};

export const Default = Template.bind({});

Default.args = {
  title: 'DDOT Virtual Community Input Meeting',
  location: 'Conference Room',
  tag: 'Meeting',
};

export const TagLink = {
  tags: ['!dev'],
  render: () => {
    return html`
      <cod-event datetime="1747248282510">
        <a href="https://www.example.com" slot="event-title"
          >DDOT Virtual Community Input Meeting</a
        >
        <span slot="event-location">Conference Room</span>
        <span slot="event-tag"
          ><cod-tag
            ><a href="https://www.example.com" slot="label"
              >Click Me</a
            ></cod-tag
          ></span
        >
      </cod-event>
    `;
  },
};

export const Test = {
  tags: ['!dev'],
  render: () => {
    return html`
      <cod-event datetime="1747248282510"
        ><a href="https://www.example.com" slot="event-title"
          >DDOT Virtual Community Input Meeting</a
        ><span slot="event-location">Conference Room</span
        ><span slot="event-type">
          <cod-tag><span slot="label">Meeting</span></cod-tag>
        </span></cod-event
      >
    `;
  },
  play: async ({ canvasElement }) => {
    const event = canvasElement.querySelector('cod-event');
    const eventShadowRoot = event.shadowRoot;
    const titleSlot = eventShadowRoot.querySelector('slot[name="event-title"]');

    // Tests if title slot is empty
    expect(titleSlot).not.toBeNull();

    // Test if title is a link
    const titleLink = titleSlot.assignedElements()[0];
    expect(titleLink.tagName).toBe('A');
  },
};
