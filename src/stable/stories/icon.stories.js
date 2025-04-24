import '../components/Icon/cod-icon';
import { COMMON_STORY_ARGS } from '../../shared/js/storybook/args-utils';

export default {
  title: 'Components/Icon/Inheritance',
  argTypes: {
    icon: COMMON_STORY_ARGS.icon,
    parentSize: {
      control: { type: 'select' },
      options: ['default', 'small', 'medium', 'large', 'x-large', '16px', '24px', '36px', '48px', '64px'],
      defaultValue: 'default',
      description: 'Font size set on parent container',
    },
    iconSize: {
      control: { type: 'select' },
      options: ['inherit', 'small', 'medium', 'large', 'x-large', '16', '24', '36', '48', '64'],
      defaultValue: 'inherit',
      description: 'Size attribute set directly on icon',
    },
    parentColor: {
      control: { type: 'color' },
      defaultValue: '#000000',
      description: 'Color set on parent container',
    },
    iconColor: {
      control: { type: 'color' }, 
      defaultValue: 'inherit',
      description: 'Color set directly on icon (via CSS variable)',
    },
    library: {
      control: { type: 'select' },
      options: ['fontawesome', 'bootstrapicons', 'material'],
      defaultValue: 'fontawesome',
    },
    isHighlighted: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
};

// Template for inheritance demonstration
const Template = (args) => {
  // Create parent container to demonstrate inheritance
  const container = document.createElement('div');
  container.style.padding = '20px';
  container.style.border = '1px dashed #ccc';
  container.style.display = 'inline-block';
  
  // Apply parent styles based on args
  if (args.parentSize !== 'default') {
    container.style.fontSize = args.parentSize.endsWith('px') ? 
      args.parentSize : 
      `${args.parentSize}px`;
  }
  container.style.color = args.parentColor;
  
  // Create info text
  const infoText = document.createElement('div');
  infoText.style.marginBottom = '10px';
  infoText.style.fontSize = '14px';
  infoText.innerHTML = `<strong>Parent Container:</strong> font-size: ${args.parentSize}, color: ${args.parentColor}`;
  container.appendChild(infoText);
  
  // Create the icon
  const icon = document.createElement('cod-icon');
  icon.setAttribute('data-icon', args.icon);
  if (args.iconSize !== 'inherit') {
    icon.setAttribute('data-size', args.iconSize);
  }
  icon.setAttribute('library', args.library);
  
  // Apply direct color to icon if not inheriting
  if (args.iconColor !== 'inherit') {
    icon.style.setProperty('--icon-color', args.iconColor);
  }
  
  if (args.isHighlighted) {
    icon.setAttribute('is-highlighted', '');
  } else {
    icon.removeAttribute('is-highlighted');
  }
  
  // Create icon info
  const iconInfo = document.createElement('div');
  iconInfo.style.marginTop = '10px';
  iconInfo.style.fontSize = '14px';
  iconInfo.innerHTML = `<strong>Icon:</strong> size: ${args.iconSize}, color: ${args.iconColor === 'inherit' ? 'inherited' : args.iconColor}`;
  
  // Append both to container
  container.appendChild(icon);
  container.appendChild(iconInfo);
  
  return container;
};

export const SizeInheritance = Template.bind({});
SizeInheritance.args = {
  icon: 'house',
  parentSize: '48px', 
  iconSize: 'inherit',
  parentColor: '#000000',
  iconColor: 'inherit',
  library: 'fontawesome',
  isHighlighted: false,
};

export const ColorInheritance = Template.bind({});
ColorInheritance.args = {
  icon: 'heart',
  parentSize: 'default',
  iconSize: 'large',
  parentColor: '#FF5733',
  iconColor: 'inherit',
  library: 'fontawesome',
  isHighlighted: false,
};

export const BothInheritance = Template.bind({});
BothInheritance.args = {
  icon: 'star',
  parentSize: '64px',
  iconSize: 'inherit',
  parentColor: '#3366FF',
  iconColor: 'inherit',
  library: 'fontawesome',
  isHighlighted: false,
};

export const NoInheritance = Template.bind({});
NoInheritance.args = {
  icon: 'check',
  parentSize: '64px',
  iconSize: 'small',
  parentColor: '#3366FF',
  iconColor: '#33CC33',
  library: 'fontawesome',
  isHighlighted: false,
};

export const HighlightedWithInheritance = Template.bind({});
HighlightedWithInheritance.args = {
  icon: 'bell',
  parentSize: '48px',
  iconSize: 'inherit',
  parentColor: '#6633CC',
  iconColor: 'inherit',
  library: 'fontawesome',
  isHighlighted: true,
};