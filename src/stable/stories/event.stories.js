import '../components/Event/cod-event';
import '../components/Tag/cod-tag';

export default {
  title: 'Components/Event',
  argTypes: {
    title: { control: 'text' },
    when: { control: 'date' },
    virutalEvent: { control: 'boolean' },
    location: { control: 'text' },
    type: { control: 'text' },
  },
};

const Template = (args) => {
  const event = document.createElement('cod-event');

  // Title
  const title = document.createElement('span');
  title.slot = 'event-title';
  title.textContent = args.title;
  event.appendChild(title);

  // Date
  const eventDate = args.when;
  event.setAttribute('datetime', eventDate);

  // Location
  const location = document.createElement('span');

  // Location Icon
  const locationIcon = document.createElement('span');

  event.appendChild(locationIcon);

  location.slot = 'event-location';
  // Virtual Event
  if (args.virutalEvent === true) {
    location.textContent = 'Virtual Event';
  } else {
    location.textContent = args.location;
  }
  event.appendChild(location);

  // Tag
  const tag = document.createElement('span');
  tag.innerHTML = `
  <cod-tag><span slot="label">${args.type}</span></cod-tag>
  `;
  tag.slot = 'event-type';
  event.appendChild(tag);

  return event;
};

export const Default = Template.bind({});
Default.args = {
  title: 'DDOT Virtual Community Input Meeting',
  location: 'Conference Room',
  type: 'Meeting',
};

