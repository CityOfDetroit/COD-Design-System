import '../components/ButtonGroup/cod-button-group.js';
import '../components/Button/cod-button.js';
import '../../experimental/components/atoms/Icon/cod-icon.js';

export default {
  title: 'Components/Button Group',
  component: 'cod-button-group',
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        format: 'html',
      },
    },
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Accessible label for the button group',
      table: {
        defaultValue: { summary: '' },
      },
    },
  },
  args: {
    label: 'Button Group',
  },
};

// Template for the story
const Template = (args) => {
  const buttonGroup = document.createElement('cod-button-group');

  // Set attributes from args
  if (args.label) buttonGroup.setAttribute('label', args.label);

  // Add default buttons
  const button1 = document.createElement('cod-button');
  button1.textContent = 'Left';

  const button2 = document.createElement('cod-button');
  button2.textContent = 'Middle';

  const button3 = document.createElement('cod-button');
  button3.textContent = 'Right';

  buttonGroup.appendChild(button1);
  buttonGroup.appendChild(button2);
  buttonGroup.appendChild(button3);

  return buttonGroup;
};

export const Usage = Template.bind({});
Usage.tags = ['!dev'];

// Story: Basic
export const Basic = () => {
  const buttonGroup = document.createElement('cod-button-group');
  buttonGroup.setAttribute('label', 'Basic Button Group');

  const button1 = document.createElement('cod-button');
  button1.textContent = 'Left';

  const button2 = document.createElement('cod-button');
  button2.textContent = 'Middle';

  const button3 = document.createElement('cod-button');
  button3.textContent = 'Right';

  buttonGroup.appendChild(button1);
  buttonGroup.appendChild(button2);
  buttonGroup.appendChild(button3);

  return buttonGroup;
};

Basic.storyName = 'Basic';
Basic.parameters = {
  docs: {
    description: {
      story: 'A basic button group with three buttons.',
    },
  },
};

// Story: Variants
export const Variants = () => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.gap = '16px';

  const variants = [
    'primary',
    'accent-primary',
    'success',
    'warning',
    'danger',
  ];

  variants.forEach((variant) => {
    const buttonGroup = document.createElement('cod-button-group');
    buttonGroup.setAttribute('label', `${variant} Button Group`);

    const button1 = document.createElement('cod-button');
    button1.setAttribute('variant', variant);
    button1.textContent = 'Left';

    const button2 = document.createElement('cod-button');
    button2.setAttribute('variant', variant);
    button2.textContent = 'Middle';

    const button3 = document.createElement('cod-button');
    button3.setAttribute('variant', variant);
    button3.textContent = 'Right';

    buttonGroup.appendChild(button1);
    buttonGroup.appendChild(button2);
    buttonGroup.appendChild(button3);

    container.appendChild(buttonGroup);
  });

  return container;
};

Variants.storyName = 'Variants';
Variants.parameters = {
  docs: {
    description: {
      story:
        'Button groups with different variants. All buttons within a group should use the same variant.',
    },
  },
};

// Story: Sizes
export const Sizes = () => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.gap = '16px';

  const sizes = ['small', 'medium', 'large'];

  sizes.forEach((size) => {
    const buttonGroup = document.createElement('cod-button-group');
    buttonGroup.setAttribute('label', `${size} Button Group`);

    const button1 = document.createElement('cod-button');
    button1.setAttribute('size', size);
    button1.textContent = 'Left';

    const button2 = document.createElement('cod-button');
    button2.setAttribute('size', size);
    button2.textContent = 'Middle';

    const button3 = document.createElement('cod-button');
    button3.setAttribute('size', size);
    button3.textContent = 'Right';

    buttonGroup.appendChild(button1);
    buttonGroup.appendChild(button2);
    buttonGroup.appendChild(button3);

    container.appendChild(buttonGroup);
  });

  return container;
};

Sizes.storyName = 'Sizes';
Sizes.parameters = {
  docs: {
    description: {
      story:
        'Button groups with different sizes. All buttons within a group should use the same size.',
    },
  },
};

// Story: Outline
export const Outline = () => {
  const buttonGroup = document.createElement('cod-button-group');
  buttonGroup.setAttribute('label', 'Outline Button Group');

  const button1 = document.createElement('cod-button');
  button1.setAttribute('variant', 'primary');
  button1.setAttribute('outline', '');
  button1.textContent = 'Left';

  const button2 = document.createElement('cod-button');
  button2.setAttribute('variant', 'primary');
  button2.setAttribute('outline', '');
  button2.textContent = 'Middle';

  const button3 = document.createElement('cod-button');
  button3.setAttribute('variant', 'primary');
  button3.setAttribute('outline', '');
  button3.textContent = 'Right';

  buttonGroup.appendChild(button1);
  buttonGroup.appendChild(button2);
  buttonGroup.appendChild(button3);

  return buttonGroup;
};

Outline.storyName = 'Outline';
Outline.parameters = {
  docs: {
    description: {
      story: 'Button groups with outline style.',
    },
  },
};

// Story: With Icons
export const WithIcons = () => {
  const buttonGroup = document.createElement('cod-button-group');
  buttonGroup.setAttribute('label', 'Text Formatting Button Group');

  const button1 = document.createElement('cod-button');
  const icon1 = document.createElement('cod-icon');
  icon1.setAttribute('data-icon', 'house');
  icon1.setAttribute('data-size', 'small');
  button1.appendChild(icon1);

  const button2 = document.createElement('cod-button');
  const icon2 = document.createElement('cod-icon');
  icon2.setAttribute('data-icon', 'file-earmark');
  icon2.setAttribute('data-size', 'small');
  button2.appendChild(icon2);

  const button3 = document.createElement('cod-button');
  const icon3 = document.createElement('cod-icon');
  icon3.setAttribute('data-icon', 'calendar');
  icon3.setAttribute('data-size', 'small');
  button3.appendChild(icon3);

  buttonGroup.appendChild(button1);
  buttonGroup.appendChild(button2);
  buttonGroup.appendChild(button3);

  return buttonGroup;
};

WithIcons.storyName = 'With Icons';
WithIcons.parameters = {
  docs: {
    description: {
      story: 'Button groups with icon buttons, commonly used for toolbars.',
    },
  },
};

// Story: Mixed Content
export const MixedContent = () => {
  const buttonGroup = document.createElement('cod-button-group');
  buttonGroup.setAttribute('label', 'Mixed Content Button Group');

  const button1 = document.createElement('cod-button');
  const icon1 = document.createElement('cod-icon');
  icon1.setAttribute('data-icon', 'list-task');
  icon1.setAttribute('data-size', 'small');
  icon1.setAttribute('slot', 'prefix');
  button1.appendChild(icon1);
  button1.appendChild(document.createTextNode('List'));

  const button2 = document.createElement('cod-button');
  const icon2 = document.createElement('cod-icon');
  icon2.setAttribute('data-icon', 'bounding-box');
  icon2.setAttribute('data-size', 'small');
  icon2.setAttribute('slot', 'prefix');
  button2.appendChild(icon2);
  button2.appendChild(document.createTextNode('Grid'));

  buttonGroup.appendChild(button1);
  buttonGroup.appendChild(button2);

  return buttonGroup;
};

MixedContent.storyName = 'Mixed Content';
MixedContent.parameters = {
  docs: {
    description: {
      story: 'Button groups with buttons that contain both icons and text.',
    },
  },
};
