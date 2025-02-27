import { html } from 'lit-html';
import '../../stable/components/ServiceButton/cod-service-button';
import { expect } from '@storybook/jest';

export default {
  title: 'Stable/ServiceButton',
  component: 'cod-service-button',
  tags: ['autodocs'],
};

export const ServiceButton = {
  render: () => html`
    <cod-service-button>
      <span slot="title">Apply for a Job</span>
      <span slot="subtitle"
        >View job postings for the City of Detroit or our partners.</span
      >
    </cod-service-button>
  `,
};

export const Default = {
  render: () => html`
    <cod-service-button>
      <span slot="title">Apply for a Job</span>
      <span slot="subtitle"
        >View job postings for the City of Detroit or our partners.</span
      >
    </cod-service-button>
  `,
  play: async ({ canvasElement }) => {
    const serviceButton = canvasElement.querySelector('cod-service-button');
    const shadow = serviceButton.shadowRoot;

    // ===== TEST 1: Slot Content Test =====
    // Verifies that title and subtitle slots exist and contain expected content
    const titleSlot = shadow.querySelector('.title slot');
    const subtitleSlot = shadow.querySelector('.subtitle slot');

    // Check that slots exist
    expect(titleSlot).not.toBeNull();
    expect(subtitleSlot).not.toBeNull();

    // Check slot content
    const titleNodes = titleSlot.assignedNodes();
    const subtitleNodes = subtitleSlot.assignedNodes();

    expect(titleNodes.length).toBeGreaterThan(0);
    expect(subtitleNodes.length).toBeGreaterThan(0);

    expect(titleNodes[0].textContent).toBe('Apply for a Job');
    expect(subtitleNodes[0].textContent).toBe(
      'View job postings for the City of Detroit or our partners.',
    );

    // ===== TEST 2: Link Element Test =====
    // Verifies that the component contains a link element with href attribute
    const link = shadow.querySelector('a');
    expect(link).not.toBeNull();
    expect(link.tagName).toBe('A');
    expect(link.hasAttribute('href')).toBe(true);
  },
};
