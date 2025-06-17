import { html } from 'lit-html';
import '../components/News/cod-news';
import '../components/Tag/cod-tag';

export default {
  tags: ['stable'],
  title: 'Components/News',
};

export const Basic = {
  render: () => html`
    <cod-news datetime="June 9, 2025">
      <span slot="news-title"
        >Today's Headlines: Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.</span
      >
      <cod-tag slot="tags"><span slot="label">Breaking News</span></cod-tag>
    </cod-news>
  `,
};
