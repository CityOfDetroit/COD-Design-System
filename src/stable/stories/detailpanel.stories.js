import '../components/DetailPanel/cod-detail-panel';

export default {
  tags: ['stable'],
  title: 'Components/Detail Panel',
  component: 'cod-detail-panel',
  parameters: {
    docs: {
      source: {
        format: 'html',
      },
    },
  },
  argTypes: {
    expanded: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Whether the panel is initially expanded',
    },
    bordered: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Adds enhanced border styling',
    },
    allowMultiple: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Allows multiple panels to be expanded simultaneously',
    },
    heading: {
      control: { type: 'text' },
      defaultValue: 'Panel Heading',
      description: 'The heading text for the panel',
    },
    content: {
      control: { type: 'text' },
      defaultValue:
        'This is the panel content that can be expanded and collapsed.',
      description: 'The main content of the panel',
    },
  },
};

const Template = (args) => {
  const panel = document.createElement('cod-detail-panel');

  // Set attributes
  if (args.expanded) {
    panel.setAttribute('expanded', '');
  }
  if (args.bordered) {
    panel.setAttribute('bordered', '');
  }
  if (args.allowMultiple) {
    panel.setAttribute('allow-multiple', '');
  }

  // Set heading content
  if (args.heading) {
    const heading = document.createElement('span');
    heading.setAttribute('slot', 'heading');
    heading.style.fontWeight = 'bold';
    heading.textContent = args.heading;
    panel.appendChild(heading);
  }

  // Set main content
  if (args.content) {
    const content = document.createElement('p');
    content.textContent = args.content;
    panel.appendChild(content);
  }

  return panel;
};

export const Default = {
  render: Template.bind({}),
  args: {
    heading: 'First Amendment',
    content:
      'Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.',
  },
};

export const Expanded = {
  render: Template.bind({}),
  args: {
    expanded: true,
    heading: 'Panel Initially Expanded',
    content:
      'This panel starts in an expanded state, showing its content immediately upon page load.',
  },
};

export const Bordered = {
  render: Template.bind({}),
  args: {
    bordered: true,
    heading: 'Bordered Panel',
    content:
      'This panel uses the bordered variant with enhanced styling including thicker borders and subtle shadow effects.',
  },
};

export const WithHeadingLevels = {
  render: () => {
    const container = document.createElement('div');

    // Create panels with different heading levels
    const levels = ['h4', 'h4', 'h4', 'h4'];
    levels.forEach((level) => {
      const panel = document.createElement('cod-detail-panel');

      const heading = document.createElement(level);
      heading.setAttribute('slot', 'heading');
      heading.style.marginBottom = '0';
      heading.textContent = `${level.toUpperCase()} Heading Level`;
      panel.appendChild(heading);

      const content = document.createElement('p');
      content.textContent = `This panel uses an ${level.toUpperCase()} element for semantic heading structure.`;
      panel.appendChild(content);

      container.appendChild(panel);
    });

    return container;
  },
  args: {},
};

export const MultipleExpanded = {
  render: () => {
    const container = document.createElement('div');

    // Create multiple panels that can be expanded simultaneously
    for (let i = 1; i <= 3; i++) {
      const panel = document.createElement('cod-detail-panel');
      panel.setAttribute('allow-multiple', '');

      if (i === 1) {
        panel.setAttribute('expanded', '');
      }

      const heading = document.createElement('span');
      heading.setAttribute('slot', 'heading');
      heading.style.fontWeight = 'bold';
      heading.textContent = `Panel ${i}`;
      panel.appendChild(heading);

      const content = document.createElement('p');
      content.textContent = `This is the content for panel ${i}. Multiple panels can be expanded at the same time with the allow-multiple attribute.`;
      panel.appendChild(content);

      container.appendChild(panel);
    }

    return container;
  },
  args: {},
};

export const AccordionGroup = {
  render: () => {
    const container = document.createElement('div');

    // Create multiple panels that work as an accordion (single expansion)
    for (let i = 1; i <= 4; i++) {
      const panel = document.createElement('cod-detail-panel');

      if (i === 2) {
        panel.setAttribute('expanded', '');
      }

      const heading = document.createElement('span');
      heading.setAttribute('slot', 'heading');
      heading.style.fontWeight = 'bold';
      heading.textContent = `Frequently Asked Question ${i}`;
      panel.appendChild(heading);

      const content = document.createElement('div');
      content.innerHTML = `
        <p>This is the answer to frequently asked question ${i}. Only one panel can be expanded at a time in accordion mode.</p>
        <p>Additional content can include <strong>formatted text</strong>, <a href="#" onclick="return false;">links</a>, and other HTML elements.</p>
      `;
      panel.appendChild(content);

      container.appendChild(panel);
    }

    return container;
  },
  args: {},
};

export const RichContent = {
  render: () => {
    const panel = document.createElement('cod-detail-panel');

    const heading = document.createElement('span');
    heading.setAttribute('slot', 'heading');
    heading.style.fontWeight = 'bold';
    heading.textContent = 'Rich Content Example';
    panel.appendChild(heading);

    const content = document.createElement('div');
    content.innerHTML = `
      <p>This panel contains rich HTML content including:</p>
      <ul>
        <li><strong>Bold text</strong> and <em>italic text</em></li>
        <li><a href="https://example.com" target="_blank">Interactive links</a></li>
        <li>Formatted lists and paragraphs</li>
      </ul>
      <blockquote style="margin: 1em 0; padding: 0.5em 1em; border-left: 4px solid #ccc; background: #f9f9f9;">
        "Panels can contain complex content structures while maintaining accessibility and semantic markup."
      </blockquote>
      <p>The content area is flexible and supports various HTML elements and structures.</p>
    `;
    panel.appendChild(content);

    return panel;
  },
  args: {},
};
