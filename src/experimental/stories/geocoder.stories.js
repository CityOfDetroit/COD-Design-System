import { html } from 'lit-html';
import '../components/organisms/Geocoder/cod-geocoder';

export default {
  tags: ['experimental'],
  title: 'Components/Geocoder',
};

export const loaded = {
  tags: ['autodocs'],
  render: () => html`<cod-geocoder></cod-geocoder>`,
};
