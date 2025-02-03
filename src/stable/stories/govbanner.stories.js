import { html } from 'lit-html';
import { expect } from '@storybook/jest';
import { within, userEvent } from '@storybook/testing-library';
import '../components/GovBanner/cod-gov-banner';

export default {
  title: 'Stable/GovBanner',
  tags: ['autodocs'],
};

export const Default = {
  render: () => html` <cod-gov-banner> </cod-gov-banner> `,
};

export const ExpandedBehavior = {
  render: () => html` <cod-gov-banner> </cod-gov-banner> `,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const govBanner = canvasElement.querySelector('cod-gov-banner');
    const shadow = govBanner.shadowRoot;

    // Helper function to check expanded state
    const checkExpandedState = (isExpanded) => {
      const content = shadow.querySelector('#content');
      const button = shadow.querySelector('.chevron-container');
      expect(content.hidden).toBe(!isExpanded);
      expect(button.getAttribute('aria-expanded')).toBe(isExpanded.toString());
    };

    // Test initial state
    await expect(govBanner.expanded).toBe(false);
    checkExpandedState(false);

    // Test clicking the header
    const toggle = shadow.querySelector('.chevron-container');
    await userEvent.click(toggle);
    await expect(govBanner.expanded).toBe(true);
    checkExpandedState(true);

    // Test clicking again to close
    await userEvent.click(toggle);
    await expect(govBanner.expanded).toBe(false);
    checkExpandedState(false);

    // Test changing expanded property
    govBanner.expanded = true;
    await expect(govBanner.expanded).toBe(true);
    checkExpandedState(true);

    // Test changing expanded attribute
    govBanner.setAttribute('expanded', 'false');
    await expect(govBanner.expanded).toBe(false);
    checkExpandedState(false);
  },
};