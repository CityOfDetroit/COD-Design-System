import '../components/atoms/ActionButton/cod-action-button';
import '../components/atoms/Clickable/cod-clickable';
import '../components/atoms/Icon/cod-icon';
import '../components/atoms/CardBody/cod-card-body';
import '../components/organisms/Card/cod-card';
import IconStory from './icon.stories';

export default {
  component: 'cod-action-button',
  title: 'Components/Atoms/ActionButton',
  // 👇 Creates specific argTypes
  argTypes: {
    buttonColor: {
      options: ['btn-primary', 'btn-secondary', 'btn-success'],
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
    buttonColor: 'btn-primary',
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
