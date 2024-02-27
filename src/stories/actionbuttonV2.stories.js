import { html } from 'lit-html';
import '../components/atoms/ActionButtonV2/cod-action-button-v2';
import '../components/atoms/Icon/cod-icon';
import IconStory from './icon.stories';

export default {
  component: 'cod-action-button-v2',
  title: 'Components/Atoms/ActionButtonV2',
  // 👇 Creates specific argTypes
  argTypes: {
    buttonColor: {
      options: [
        'btn-outline-primary',
        'btn-outline-secondary',
        'btn-outline-success',
      ],
      control: 'select',
    },
    icon: IconStory.argTypes.icon,
    'primary-text': {
      control: 'text',
    },
    'secondary-text': {
      control: 'text',
    },
  },  
};

// Template
const Template = (args) => {
  const aButton = document.createElement('cod-action-button-v2');
  aButton.setAttribute('btn-color', args.buttonColor);
  aButton.setAttribute('icon', args.icon);
  aButton.setAttribute('primary-text', args['primary-text']);
  aButton.setAttribute('secondary-text', args['secondary-text']);
  aButton.setAttribute('href', 'https://example.com');
  
  const slotElt1 = document.createElement('h1');
  slotElt1.innerText = args['primary-text'];
  aButton.appendChild(slotElt1);

  const slotElt2 = document.createElement('h2');
  slotElt2.innerText = args['secondary-text'];
  aButton.appendChild(slotElt2);

  return aButton;
};

export const ActionButtonV2 = Template.bind({});

export const ActionButtonV2RichBody = () => html`
  <div style="width: 300px; height: 300px">
    <cod-action-button-v2
      btn-color="btn-outline-primary"
      icon="house"
      primary-text="Do Something"
      href="https://example.com"
      target="_blank"
    >
      <p>
        Anything can go inside an action button but it's best to keep to simple
        text.
      </p>
      <img
        src="https://placehold.co/800x400/000000/FFF"
        alt="..."
        width="100"
        height="50"
      />
    </cod-action-button-v2>
  </div>
`;

export const ActionButtonV2Grid = () => html`
  <div class="container-fluid">
    <div class="row my-3">
      <div class="col-sm-4">
        <cod-action-button-v2
          btn-color="btn-outline-primary"
          icon="house"
          primary-text="Do Something"
          href="https://example.com"
          target="_blank"
        >
          <p>Like Click on This Button</p>
        </cod-action-button-v2>
      </div>
      <div class="col-sm-4">
        <cod-action-button-v2
          btn-color="btn-outline-primary"
          icon="house"
          primary-text="Do Something"
          href="https://example.com"
          target="_blank"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            luctus eros sit amet augue tempus sollicitudin. Mauris lacinia ante
            et.
          </p>
        </cod-action-button-v2>
      </div>
      <div class="col-sm-4">
        <cod-action-button-v2
          btn-color="btn-outline-primary"
          icon="house"
          primary-text="Do Something"
          href="https://example.com"
          target="_blank"
        >
          <p>Like Click on This Button</p>
        </cod-action-button-v2>
      </div>
    </div>
    <div class="row my-3">
      <div class="col-sm-4">
        <cod-action-button-v2
          btn-color="btn-outline-primary"
          icon="house"
          primary-text="Do Something"
          href="https://example.com"
          target="_blank"
        >
          <p>Like Click on This Button</p>
        </cod-action-button-v2>
      </div>
      <div class="col-sm-4">
        <cod-action-button-v2
          btn-color="btn-outline-primary"
          icon="house"
          primary-text="Do Something"
          href="https://example.com"
          target="_blank"
        >
          <p>Like Click on This Button</p>
        </cod-action-button-v2>
      </div>
      <div class="col-sm-4">
        <cod-action-button-v2
          btn-color="btn-outline-primary"
          icon="house"
          primary-text="Do Something"
          href="https://example.com"
          target="_blank"
        >
          <p>Like Click on This Button</p>
        </cod-action-button-v2>
      </div>
    </div>
  </div>
`;
