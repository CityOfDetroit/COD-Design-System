import { html } from 'lit-html';
import { expect } from '@storybook/test';
import { userEvent } from '@storybook/test';
import '../components/GovBanner/cod-gov-banner';

export default {
  tags: ['stable'],
  title: 'Components/Gov Banner',
  argTypes: {
    lang: {
      control: 'select',
      options: ['en', 'es', 'ar', 'bn'],
      description: 'Language code for the banner content',
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'Text direction (left-to-right or right-to-left)',
    },
    expanded: {
      control: 'boolean',
      description: 'Whether the info section is expanded',
    },
  },
};

export const GovBanner = {
  tags: ['autodocs'],
  args: {
    lang: 'en',
    dir: 'ltr',
    expanded: false,
  },
  render: ({ lang, dir, expanded }) => html`
    <cod-gov-banner lang="${lang}" dir="${dir}" ?expanded="${expanded}">
    </cod-gov-banner>
  `,
};

export const English = {
  render: () => html` <cod-gov-banner lang="en" dir="ltr"> </cod-gov-banner> `,
};

export const Spanish = {
  render: () => html` <cod-gov-banner lang="es" dir="ltr"> </cod-gov-banner> `,
};

export const Arabic = {
  render: () => html` <cod-gov-banner lang="ar" dir="rtl"> </cod-gov-banner> `,
};

export const Bengali = {
  render: () => html` <cod-gov-banner lang="bn" dir="ltr"> </cod-gov-banner> `,
};

export const Test = {
  tags: ['!dev'],
  render: () => html` <cod-gov-banner> </cod-gov-banner> `,
  play: async ({ canvasElement }) => {
    const govBanner = canvasElement.querySelector('cod-gov-banner');
    const shadow = govBanner.shadowRoot;

    // Helper function to check expanded state
    const checkExpandedState = (isExpanded) => {
      const content = shadow.querySelector('#content');
      const button = shadow.querySelector('.know-text');
      expect(content.hidden).toBe(!isExpanded);
      expect(button.getAttribute('aria-expanded')).toBe(isExpanded.toString());
    };

    // Test initial state
    await expect(govBanner.expanded).toBe(false);
    checkExpandedState(false);

    // Test clicking the header
    const toggle = shadow.querySelector('.know-text');

    // Test event dispatch on click
    const clickEventPromise = new Promise((resolve) => {
      govBanner.addEventListener('expandedchange', (e) => resolve(e.detail));
    });
    await userEvent.click(toggle);
    const clickEventDetail = await clickEventPromise;
    expect(clickEventDetail.expanded).toBe(true);

    await expect(govBanner.expanded).toBe(true);
    checkExpandedState(true);

    // Test clicking again to close
    await userEvent.click(toggle);
    await expect(govBanner.expanded).toBe(false);
    checkExpandedState(false);

    // Test changing expanded property and event dispatch
    const propertyEventPromise = new Promise((resolve) => {
      govBanner.addEventListener('expandedchange', (e) => resolve(e.detail));
    });
    govBanner.expanded = true;
    const propertyEventDetail = await propertyEventPromise;
    expect(propertyEventDetail.expanded).toBe(true);

    await expect(govBanner.expanded).toBe(true);
    checkExpandedState(true);
    expect(govBanner.getAttribute('expanded')).toBe('');

    // Test setting same value (should not trigger event)
    govBanner.expanded = true;
    await expect(govBanner.expanded).toBe(true);
    checkExpandedState(true);

    govBanner.expanded = false;

    govBanner.expanded = false;
    await expect(govBanner.expanded).toBe(false);
    checkExpandedState(false);

    // Test language switching
    govBanner.lang = 'es';
    expect(govBanner.lang).toBe('es');

    govBanner.lang = 'ar';
    expect(govBanner.lang).toBe('ar');

    govBanner.dir = 'rtl';
    expect(govBanner.dir).toBe('rtl');

    // Test disconnectedCallback
    govBanner.remove();

    // Test setting same value (should not trigger event)
    govBanner.expanded = false;
    await expect(govBanner.expanded).toBe(false);
  },
};
