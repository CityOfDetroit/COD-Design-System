import '../components/Button/cod-button.js';

const variants = ['default', 'primary', 'accent-primary', 'accent-secondary', 'success', 'neutral', 'warning', 'danger', 'text'];

export default {
  title: 'Components/Button',
  component: 'cod-button',
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        format: 'html',
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: variants,
      description: 'The button\'s variant.',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The button\'s size.',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    outline: {
      control: { type: 'boolean' },
      description: 'Whether to show the button with an outline style.',
      table: {
        defaultValue: { summary: false },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled.',
      table: {
        defaultValue: { summary: false },
      },
    },
    caret: {
      control: { type: 'boolean' },
      description: 'Whether to show a caret (dropdown arrow).',
      table: {
        defaultValue: { summary: false },
      },
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Whether the button is in a loading state.',
      table: {
        defaultValue: { summary: false },
      },
    },
    href: {
      control: { type: 'text' },
      description: 'When set, renders as an <a> element with this URL.',
      table: {
        defaultValue: { summary: '' },
      },
    },
    target: {
      control: { type: 'text' },
      description: 'Where to display the linked URL (only used with href).',
      table: {
        defaultValue: { summary: '' },
      },
    },
    label: {
      control: { type: 'text' },
      description: 'The button\'s label.',
    },
  },
  args: {
    variant: 'default',
    size: 'medium',
    outline: false,
    disabled: false,
    caret: false,
    loading: false,
    href: '',
    target: '',
    label: 'Button',
  },
};

// Template for the story
const Template = (args) => {
  const button = document.createElement('cod-button');
  
  // Set attributes from args
  if (args.variant) button.setAttribute('variant', args.variant);
  if (args.size) button.setAttribute('size', args.size);
  if (args.outline) button.setAttribute('outline', '');
  if (args.disabled) button.setAttribute('disabled', '');
  if (args.caret) button.setAttribute('caret', '');
  if (args.loading) button.setAttribute('loading', '');
  if (args.href) button.setAttribute('href', args.href);
  if (args.target) button.setAttribute('target', args.target);
  
  // Set content
  button.textContent = args.label;
  
  return button;
};

export const Usage = Template.bind({});
Usage.tags = ['!dev'];

// Story: Variants
export const Variants = () => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.gap = '8px';
  container.style.flexWrap = 'wrap';
  
  variants.filter((val) => val !== 'text').forEach(variant => {
    const button = document.createElement('cod-button');
    button.setAttribute('variant', variant);
    button.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
    container.appendChild(button);
  });
  
  return container;
};

Variants.storyName = 'Variants';
Variants.parameters = {
  docs: {
    description: {
      story: 'Use the `variant` attribute to set the button\'s variant.',
    },
  },
};

// Story: Sizes
export const Sizes = () => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.gap = '8px';
  container.style.alignItems = 'center';
  
  const sizes = ['small', 'medium', 'large'];
  
  sizes.forEach(size => {
    const button = document.createElement('cod-button');
    button.setAttribute('size', size);
    button.textContent = size.charAt(0).toUpperCase() + size.slice(1);
    container.appendChild(button);
  });
  
  return container;
};

Sizes.storyName = 'Sizes';
Sizes.parameters = {
  docs: {
    description: {
      story: 'Use the `size` attribute to change a button\'s size.',
    },
  },
};

// Story: Outline
export const Outline = () => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.gap = '8px';
  container.style.flexWrap = 'wrap';
  
  variants.filter((val) => val !== 'text').forEach(variant => {
    const button = document.createElement('cod-button');
    button.setAttribute('variant', variant);
    button.setAttribute('outline', '');
    button.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
    container.appendChild(button);
  });
  
  return container;
};

Outline.storyName = 'Outline Buttons';
Outline.parameters = {
  docs: {
    description: {
      story: 'Use the `outline` attribute to draw outlined buttons with transparent backgrounds.',
    },
  },
};

// Story: Text
export const Text = () => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.gap = '8px';
  container.style.alignItems = 'center';
  
  const sizes = ['small', 'medium', 'large'];
  
  sizes.forEach(size => {
    const button = document.createElement('cod-button');
    button.setAttribute('variant', 'text');
    button.setAttribute('size', size);
    button.textContent = 'Text';
    container.appendChild(button);
  });
  
  return container;
};

Text.storyName = 'Text Buttons';
Text.parameters = {
  docs: {
    description: {
      story: 'Use the `variant="text"` attribute to create text buttons that share the same size as regular buttons but don\'t have backgrounds or borders.',
    },
  },
};

// Story: Link
export const Link = () => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.gap = '8px';
  container.style.flexWrap = 'wrap';
  
  // Regular link
  const link1 = document.createElement('cod-button');
  link1.setAttribute('href', 'https://example.com/');
  link1.textContent = 'Link';
  
  // New window
  const link2 = document.createElement('cod-button');
  link2.setAttribute('href', 'https://example.com/');
  link2.setAttribute('target', '_blank');
  link2.textContent = 'New Window';
  
  // Download
  const link3 = document.createElement('cod-button');
  link3.setAttribute('href', '/assets/images/logo.svg');
  link3.setAttribute('download', 'logo.svg');
  link3.textContent = 'Download';
  
  // Disabled
  const link4 = document.createElement('cod-button');
  link4.setAttribute('href', 'https://example.com/');
  link4.setAttribute('disabled', '');
  link4.textContent = 'Disabled';
  
  container.appendChild(link1);
  container.appendChild(link2);
  container.appendChild(link3);
  container.appendChild(link4);
  
  return container;
};

Link.storyName = 'Link Buttons';
Link.parameters = {
  docs: {
    description: {
      story: 'It\'s often helpful to have a button that works like a link. This is possible by setting the `href` attribute, which will make the component render an `<a>` under the hood.',
    },
  },
};

// Story: CustomWidth
export const CustomWidth = () => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.gap = '8px';
  container.style.width = '100%';
  const style = document.createElement('style');
  style.textContent = `
  .full-width-button::part(base) {
    width: 100%;
  }
    `;
  container.appendChild(style);
  
  const sizes = ['small', 'medium', 'large'];
  
  sizes.forEach(size => {
    const button = document.createElement('cod-button');
    button.setAttribute('size', size);
    button.classList.add('full-width-button');
    button.textContent = size.charAt(0).toUpperCase() + size.slice(1);
    container.appendChild(button);
  });
  
  return container;
};

CustomWidth.storyName = 'Custom Width';
CustomWidth.parameters = {
  docs: {
    description: {
      story: 'Buttons can be given a custom width using inline styles. This is useful for making buttons span the full width of their container.',
    },
  },
};

// Story: Icons
export const Icons = () => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.gap = '16px';
  
  // Create rows for different sizes
  const sizes = ['small', 'medium', 'large'];
  
  sizes.forEach(size => {
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.gap = '8px';
    row.style.flexWrap = 'wrap';
    
    // Prefix icon
    const prefixButton = document.createElement('cod-button');
    prefixButton.setAttribute('size', size);
    
    const prefixIcon = document.createElement('cod-icon');
    prefixIcon.setAttribute('name', 'gear');
    prefixIcon.setAttribute('slot', 'prefix');
    
    prefixButton.appendChild(prefixIcon);
    prefixButton.appendChild(document.createTextNode('Settings'));
    
    // Suffix icon
    const suffixButton = document.createElement('cod-button');
    suffixButton.setAttribute('size', size);
    
    const suffixIcon = document.createElement('cod-icon');
    suffixIcon.setAttribute('name', 'arrow-repeat');
    suffixIcon.setAttribute('slot', 'suffix');
    
    suffixButton.appendChild(document.createTextNode('Refresh'));
    suffixButton.appendChild(suffixIcon);
    
    // Both icons
    const bothButton = document.createElement('cod-button');
    bothButton.setAttribute('size', size);
    
    const prefixIcon2 = document.createElement('cod-icon');
    prefixIcon2.setAttribute('name', 'link');
    prefixIcon2.setAttribute('slot', 'prefix');
    
    const suffixIcon2 = document.createElement('cod-icon');
    suffixIcon2.setAttribute('name', 'box-arrow-up-right');
    suffixIcon2.setAttribute('slot', 'suffix');
    
    bothButton.appendChild(prefixIcon2);
    bothButton.appendChild(document.createTextNode('Open'));
    bothButton.appendChild(suffixIcon2);
    
    row.appendChild(prefixButton);
    row.appendChild(suffixButton);
    row.appendChild(bothButton);
    
    container.appendChild(row);
  });
  
  return container;
};

Icons.storyName = 'Prefix and Suffix Icons';
Icons.parameters = {
  docs: {
    description: {
      story: 'Use the `prefix` and `suffix` slots to add icons to buttons.',
    },
  },
};

// Story: Caret
export const Caret = () => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.gap = '8px';
  container.style.alignItems = 'center';
  
  const sizes = ['small', 'medium', 'large'];
  
  sizes.forEach(size => {
    const button = document.createElement('cod-button');
    button.setAttribute('size', size);
    button.setAttribute('caret', '');
    button.textContent = size.charAt(0).toUpperCase() + size.slice(1);
    container.appendChild(button);
  });
  
  return container;
};

Caret.storyName = 'Caret';
Caret.parameters = {
  docs: {
    description: {
      story: 'Use the `caret` attribute to add a dropdown indicator when a button will trigger a dropdown, menu, or popover.',
    },
  },
};

// Story: Loading
export const Loading = () => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.gap = '8px';
  container.style.flexWrap = 'wrap';
  
  variants.filter((val) => val !== 'text').forEach(variant => {
    const button = document.createElement('cod-button');
    button.setAttribute('variant', variant);
    button.setAttribute('loading', '');
    button.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
    container.appendChild(button);
  });
  
  return container;
};

Loading.storyName = 'Loading';
Loading.parameters = {
  docs: {
    description: {
      story: 'Use the `loading` attribute to make a button busy. The width will remain the same as before, preventing adjacent elements from moving around.',
    },
  },
};

// Story: Disabled
export const Disabled = () => {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.gap = '8px';
  container.style.flexWrap = 'wrap';
  
  variants.filter((val) => val !== 'text').forEach(variant => {
    const button = document.createElement('cod-button');
    button.setAttribute('variant', variant);
    button.setAttribute('disabled', '');
    button.textContent = variant.charAt(0).toUpperCase() + variant.slice(1);
    container.appendChild(button);
  });
  
  return container;
};

Disabled.storyName = 'Disabled';
Disabled.parameters = {
  docs: {
    description: {
      story: 'Use the `disabled` attribute to disable a button.',
    },
  },
};