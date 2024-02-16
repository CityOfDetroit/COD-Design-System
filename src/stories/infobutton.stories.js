import { html } from 'lit-html';
import '../components/organisms/Card/cod-card';
import '../components/atoms/CardBody/cod-card-body';
import '../components/atoms/Icon/cod-icon';
import '../components/atoms/Clickable/cod-clickable';
import '../components/atoms/InfoButton/cod-info-button';

export default {
  component: 'cod-info-button',
  title: 'Components/Atoms/InfoButton',
  // 👇 Creates specific argTypes
  argTypes: {
    titlePrimary: {
      control: 'text',
      description:
        '(Optional) The text to be used for a primary title. \
        If the attribute is not included or empty string, then the \
        title is omitted.',
    },
    titleSecondary: {
      control: 'text',
      description:
        '(Optional) The text to be used for a secondary title. \
        If the attribute is not included or empty string, and the primary \
        title is also ommitted, then the entire title row is omitted.',
    },
    forceTitleMultiline: {
      control: 'boolean',
      description:
        '(Optional) If this attribute is set, the primary and secondary \
        titles will be forced onto two separate lines even if they would fit \
        onto a single line.',
    },
    body: {
      control: 'text',
      description:
        'The content to be shown in the body of the button. Supports rich HTML.',
    },
  },
  args: {
    titlePrimary: 'See This Info Button',
    titleSecondary: '$90 million',
    body: "This is a longer piece of content but still brief since it's a button.",
  },
};
// Template
const Template = (args) => {
  const infoBtn = document.createElement('cod-info-button');
  infoBtn.setAttribute('img-src', 'https://placehold.co/800x400/000000/FFF');
  infoBtn.setAttribute('img-alt', 'A placeholder image');
  infoBtn.setAttribute('href', 'https://example.com');
  infoBtn.setAttribute('target', '_blank');
  infoBtn.setAttribute('title-primary', args.titlePrimary);
  infoBtn.setAttribute('title-secondary', args.titleSecondary);
  if (args.forceTitleMultiline) {
    infoBtn.setAttribute('force-title-multiline', '');
  }
  const body = document.createElement('p');
  body.innerText = args.body;
  infoBtn.append(body);
  return infoBtn;
};

export const Primary = Template.bind({});

export const InfoButtonGrid = () => html`
  <div class="container-fluid">
    <div class="row my-3">
      <div class="col-sm-4">
        <cod-info-button
          img-src="https://placehold.co/800x400/000000/FFF"
          img-alt="..."
          href="https://example.com"
          target="_blank"
          title-primary="Some Information"
        >
          <p>Commercial demolition and rehab</p>
        </cod-info-button>
      </div>
      <div class="col-sm-4">
        <cod-info-button
          img-src="https://placehold.co/800x400/000000/FFF"
          img-alt="..."
          href="https://example.com"
          target="_blank"
          title-primary="Some Information"
        >
          <p>
            Commercial demolition and rehab but this content is going to spread
            onto multiple lines
          </p>
        </cod-info-button>
      </div>
      <div class="col-sm-4">
        <cod-info-button
          img-src="https://placehold.co/800x400/000000/FFF"
          img-alt="..."
          href="https://example.com"
          target="_blank"
          title-primary="Some Information"
        >
          <p>Commercial demolition and rehab</p>
        </cod-info-button>
      </div>
    </div>
    <div class="row my-3">
      <div class="col-sm-4">
        <cod-info-button
          img-src="https://placehold.co/800x400/000000/FFF"
          img-alt="..."
          href="https://example.com"
          target="_blank"
          title-primary="Some Information"
        >
          <p>Commercial demolition and rehab</p>
        </cod-info-button>
      </div>
      <div class="col-sm-4">
        <cod-info-button
          img-src="https://placehold.co/800x400/000000/FFF"
          img-alt="..."
          href="https://example.com"
          target="_blank"
          title-primary="Some Information"
        >
          <p>Commercial demolition and rehab</p>
        </cod-info-button>
      </div>
      <div class="col-sm-4">
        <cod-info-button
          img-src="https://placehold.co/800x400/000000/FFF"
          img-alt="..."
          href="https://example.com"
          target="_blank"
          title-primary="Some Information"
        >
          <p>Commercial demolition and rehab.</p>
          <p>With an <i>italic flair</i> to demonstrate rich markup ability.</p>
        </cod-info-button>
      </div>
    </div>
  </div>
`;
