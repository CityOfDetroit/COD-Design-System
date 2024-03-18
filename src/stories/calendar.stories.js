import '../components/organisms/Calendar/cod-calendar';

export default {
  title: 'Components/Organisms/Calendar',
  argTypes: {
    events: {
      control: { type: 'text' },
      description:
        'A JSON array of events conforming to the FullCalenar \
      event model. See: https://fullcalendar.io/docs/event-model.',
    },
  },
  args: {
    events: JSON.stringify([
      {
        title: 'event1',
        start: new Date().toISOString(),
        allDay: true,
      },
    ]),
  },
};

// Template
const Template = (args) => {
  const calendarElt = document.createElement('cod-calendar');
  calendarElt.setAttribute('events', args.events);
  return calendarElt;
};

export const Primary = Template.bind({});
