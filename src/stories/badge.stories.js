import './badge';

export default {
  title: 'COD/Atoms/Badge',
  argTypes: {
    tag: {
        control: { type: 'select' },
        options: ['span', 'div', 'a'],
        defaultValue: 'span'
    },
    backgroundColor: { 
        control: { type: 'select' },
        options: ['color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-light', 'color-dark'],
        defaultValue: 'color-1'
    },
    url:  {
        control: { type: 'string' },
        defaultValue: '',
    },
    content:  {
        control: { type: 'string' },
        defaultValue: '',
    },
  },
};
// Template
const Template = (args) => {
  const badge = document.createElement('cod-badge');
  badge.setAttribute('data-tag', args.tag);
  badge.setAttribute('data-background-color', args.backgroundColor);
  badge.setAttribute('data-url', args.url);
  badge.setAttribute('data-content', args.content);
  return badge;
}

export const Badge = Template.bind({});
Badge.args = {
  content: 'Badge',
  url: ''
};

export const BadgeLink = Template.bind({});
BadgeLink.args = {
  content: 'Badge Link',
  url: 'https://google.com'
};