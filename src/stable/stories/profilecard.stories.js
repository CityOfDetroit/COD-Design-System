import { html } from 'lit-html';
import '../components/ProfileCard/cod-profile-card';

export default {
  tags: ['stable'],
  title: 'Components/ProfileCard',
};

export const ProfileCard = {
  tags: ['autodocs'],
  render: () => html`<cod-profile-card></cod-profile-card>`,
};
