// import { html } from 'lit-html';
// import '../components/News/cod-news';
// import '../components/Tag/cod-tag';

// export default {
//   tags: ['stable'],
//   title: 'Components/News',
// };

// export const Basic = {
//   render: () => html`
//     <cod-news datetime="June 9, 2025">
//       <span slot="news-title"
//         >Today's Headlines: Lorem ipsum dolor sit amet, consectetur adipiscing
//         elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
//         ut aliquip ex ea commodo consequat.</span
//       >
//       <cod-tag slot="tags"><span slot="label">Breaking News</span></cod-tag>
//     </cod-news>
//   `,
// };
import { html } from 'lit-html';
import { expect } from '@storybook/test';
import { userEvent } from '@storybook/test';
import { waitFor } from '@storybook/test';
import '../components/News/cod-news.js';
import '../components/Tag/cod-tag.js';

export default {
  title: 'Components/News',
  tags: ['stable'],
};

export const Basic = {
  render: () => html`
    <style>
      a {
        color: inherit; /* or your custom color */
        text-decoration: none; /* optional: remove underline */
      }
    </style>

    <cod-news datetime="June 9, 2025">
      <a slot="news-title" href="https://example.com/article">
        Today's Headlines: Lorem ipsum dolor sit amet.
      </a>
      <cod-tag slot="tags">
        <span slot="label">Breaking News</span>
      </cod-tag>
    </cod-news>
  `,
  // ✅ Click handler version:
  play: async ({ canvasElement }) => {
    const news = canvasElement.querySelector('cod-news');
    expect(news).toBeTruthy();

    await waitFor(() => {
      if (!news.shadowRoot) throw new Error('Shadow root not ready');
    });

    const shadow = news.shadowRoot;

    const slot = shadow.querySelector('#newsTitleSlot');
    expect(slot).toBeTruthy();

    await waitFor(() => {
      if (slot.assignedNodes().length === 0) {
        throw new Error('Slot has no assigned nodes');
      }
    });

    const assigned = slot.assignedNodes({ flatten: true });
    const link = assigned.find((n) => n.nodeType === Node.ELEMENT_NODE);
    expect(link).toBeTruthy();
    expect(link.tagName).toBe('A');
    expect(link.getAttribute('href')).toBe('https://example.com/article');
    expect(link.textContent).toContain("Today's Headlines");

    // ✅ Prevent default to stay on Storybook page:
    link.addEventListener('click', (e) => e.preventDefault());

    await userEvent.click(link);

    const dateEl = shadow.querySelector('#news-date');
    expect(dateEl).toBeTruthy();
    expect(dateEl.textContent).toBe('June 9, 2025');

    const tagsSlot = shadow.querySelector('#tagsSlot');
    expect(tagsSlot).toBeTruthy();
    await waitFor(() => {
      if (tagsSlot.assignedNodes().length === 0) {
        throw new Error('Tags slot empty');
      }
    });

    const tagNode = tagsSlot
      .assignedNodes()
      .find((n) => n.nodeType === Node.ELEMENT_NODE);
    expect(tagNode).toBeTruthy();
    expect(tagNode.tagName).toBe('COD-TAG');
  },
};
