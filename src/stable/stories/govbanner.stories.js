import { html } from 'lit-html';
import { expect } from '@storybook/test';
import { userEvent } from '@storybook/test';
import '../components/GovBanner/cod-gov-banner';

export default {
  tags: ['stable'],
  title: 'Components/Gov Banner',
};

export const GovBanner = {
  tags: ['autodocs'],
  render: () => html` <cod-gov-banner> </cod-gov-banner> `,
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
      const chevron = shadow.querySelector('.chevron-container svg');

      // Check if content has the 'visible' class
      expect(content.classList.contains('visible')).toBe(isExpanded);

      // Check if the button's aria-expanded matches the expected state
      expect(button.getAttribute('aria-expanded')).toBe(isExpanded.toString());

      // Check if the chevron's aria-expanded matches the expected state
      expect(chevron.getAttribute('aria-expanded')).toBe(isExpanded.toString());
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

    // Test disconnectedCallback
    govBanner.remove();

    // Test setting same value (should not trigger event)
    govBanner.expanded = false;
    await expect(govBanner.expanded).toBe(false);
    checkExpandedState(false);
  },
};
