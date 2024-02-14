import { html } from 'lit-html';
import '../components/atoms/ActionButton/cod-action-button';
import '../components/atoms/Icon/cod-icon';
import IconStory from './icon.stories';

export default {
  component: 'cod-action-button',
  title: 'Components/Atoms/ActionButton',
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
    title: {
      control: 'text',
    },
    body: {
      control: 'text',
    },
  },
  args: {
    buttonColor: 'btn-outline-primary',
    title: 'Do Something',
    body: 'Like click on this card',
    icon: 'house-fill',
  },
};

// Template
const Template = (args) => {
  const aButton = document.createElement('cod-action-button');
  aButton.setAttribute('btn-color', args.buttonColor);
  aButton.setAttribute('icon', args.icon);
  aButton.setAttribute('title', args.title);
  aButton.setAttribute('body', args.body);
  aButton.setAttribute('href', 'https://example.com');
  return aButton;
};

export const ActionButton = Template.bind({});

export const ActionButtonGrid = () => html`
  <div class="container-fluid">
    <div class="row my-3">
      <div class="col-sm-4">
        <cod-action-button
          btn-color="btn-outline-primary"
          icon="house"
          title="Do Something"
          body="Like Click on This Button"
          href="https://example.com"
          target="_blank"
        >
        </cod-action-button>
      </div>
      <div class="col-sm-4">
        <cod-action-button
          btn-color="btn-outline-primary"
          icon="house"
          title="Do Something"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus eros sit amet augue tempus sollicitudin. Mauris lacinia ante et."
          href="https://example.com"
          target="_blank"
        >
        </cod-action-button>
      </div>
      <div class="col-sm-4">
        <cod-action-button
          btn-color="btn-outline-primary"
          icon="house"
          title="Do Something"
          body="Like Click on This Button"
          href="https://example.com"
          target="_blank"
        >
        </cod-action-button>
      </div>
    </div>
    <div class="row my-3">
      <div class="col-sm-4">
        <cod-action-button
          btn-color="btn-outline-primary"
          icon="house"
          title="Do Something"
          body="Like Click on This Button"
          href="https://example.com"
          target="_blank"
        >
        </cod-action-button>
      </div>
      <div class="col-sm-4">
        <cod-action-button
          btn-color="btn-outline-primary"
          icon="house"
          title="Do Something"
          body="Like Click on This Button"
          href="https://example.com"
          target="_blank"
        >
        </cod-action-button>
      </div>
      <div class="col-sm-4">
        <cod-action-button
          btn-color="btn-outline-primary"
          icon="house"
          title="Do Something"
          body="Like Click on This Button"
          href="https://example.com"
          target="_blank"
        >
        </cod-action-button>
      </div>
    </div>
  </div>
`;
