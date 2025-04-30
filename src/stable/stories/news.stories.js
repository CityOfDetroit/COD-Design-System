import { html } from 'lit-html';
import '../components/News/cod-news';

export default {
  tags: ['stable'],
  title: 'Components/News',
};

export const News = {
  tags: ['autodocs'],
  render: () => html`<cod-news></cod-news>`,
};
