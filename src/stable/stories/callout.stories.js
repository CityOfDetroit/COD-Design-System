import '../components/Callout/cod-callout';

export default {
  tags: ['stable'],
  title: 'Components/Callout',
  component: 'cod-callout',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error', 'emergency'],
      defaultValue: 'info',
      description: 'The type of callout to display',
    },
    slim: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Makes the callout more compact',
    },
    noIcon: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Removes the left border bar',
    },
    heading: {
      control: { type: 'text' },
      defaultValue: 'Callout Heading',
      description: 'The heading text for the callout',
    },
    content: {
      control: { type: 'text' },
      defaultValue:
        'This is the callout content. It provides important information to the user.',
      description: 'The main content of the callout',
    },
  },
};

const Template = (args) => {
  const callout = document.createElement('cod-callout');

  // Set attributes
  if (args.variant && args.variant !== 'info') {
    callout.setAttribute('variant', args.variant);
  }
  if (args.slim) {
    callout.setAttribute('slim', '');
  }
  if (args.noIcon) {
    callout.setAttribute('no-icon', '');
  }

  // Set content
  if (args.heading) {
    const heading = document.createElement('span');
    heading.setAttribute('slot', 'heading');
    heading.textContent = args.heading;
    callout.appendChild(heading);
  }

  if (args.content) {
    const content = document.createElement('p');
    content.textContent = args.content;
    callout.appendChild(content);
  }

  return callout;
};

export const Default = {
  render: Template.bind({}),
  args: {
    variant: 'info',
    heading: 'Information',
    content:
      'This is an informational callout with important details for the user.',
  },
};

export const Success = {
  render: Template.bind({}),
  args: {
    variant: 'success',
    heading: 'Success',
    content: 'Your action has been completed successfully.',
  },
};

export const Warning = {
  render: Template.bind({}),
  args: {
    variant: 'warning',
    heading: 'Warning',
    content: 'Please review this information carefully before proceeding.',
  },
};

export const Error = {
  render: Template.bind({}),
  args: {
    variant: 'error',
    heading: 'Error',
    content: 'An error has occurred. Please check your input and try again.',
  },
};

export const Emergency = {
  render: Template.bind({}),
  args: {
    variant: 'emergency',
    heading: 'Emergency Alert',
    content: 'This is an urgent message that requires immediate attention.',
  },
};

export const Slim = {
  render: Template.bind({}),
  args: {
    variant: 'info',
    slim: true,
    heading: 'Compact Callout',
    content: 'This is a slim version of the callout with reduced padding.',
  },
};

export const NoIcon = {
  render: Template.bind({}),
  args: {
    variant: 'warning',
    noIcon: true,
    heading: 'No Left Border',
    content: 'This callout has no left border bar for a cleaner look.',
  },
};

export const NoHeading = {
  render: Template.bind({}),
  args: {
    variant: 'success',
    heading: '',
    content: 'This callout has no heading, just the main content text.',
  },
};

export const RichContent = {
  render: (args) => {
    const callout = document.createElement('cod-callout');

    if (args.variant && args.variant !== 'info') {
      callout.setAttribute('variant', args.variant);
    }

    const heading = document.createElement('span');
    heading.setAttribute('slot', 'heading');
    heading.textContent = 'Rich Content Example';
    callout.appendChild(heading);

    const content = document.createElement('div');
    content.innerHTML = `
      <p>This callout contains rich content including:</p>
      <ul>
        <li>Bulleted lists</li>
        <li><strong>Bold text</strong> and <em>italic text</em></li>
        <li><a href="#" onclick="return false;">Links</a></li>
      </ul>
      <p>Multiple paragraphs are also supported for longer content.</p>
    `;
    callout.appendChild(content);

    return callout;
  },
  args: {
    variant: 'info',
  },
};
