import { html } from 'lit-html';
import '../components/ProfileCard/cod-profile-card';

export default {
  tags: ['stable', 'autodocs'],
  title: 'Components/ProfileCard',
  argTypes: {
    imageSrc: { control: 'text', name: 'Image Source' },
    name: { control: 'text', name: 'Name' },
    titlePrimary: { control: 'text', name: 'Primary Title' },
    titleSecondary: { control: 'text', name: 'Secondary Title' },
    linkHref: { control: 'text', name: 'Profile Link' }, 
  },
};

export const Default = (args) => html`
  <cod-profile-card image-src=${args.imageSrc} link-href=${args.linkHref}>
    <span slot="name">${args.name}</span>
    <span slot="title-primary">${args.titlePrimary}</span>
    <span slot="title-secondary">${args.titleSecondary}</span>
  </cod-profile-card>
`;

Default.args = {
  imageSrc: 'https://placehold.co/400',
  name: 'Jane Doe',
  titlePrimary: 'Frontend Engineer',
  titleSecondary: 'Frontend Developer',
  linkHref: 'https://example.com',
};
