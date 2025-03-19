import { html } from 'lit-html';
import '../../stable/components/ServiceButton/cod-service-button';
import { expect } from '@storybook/test';

export default {
  tags: ['stable'],
  title: 'Components/Service Button',
  component: 'cod-service-button',
};

export const ServiceButton = {
  tags: ['autodocs'],
  render: () => html`
    <cod-service-button
      href="https://www.example.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span slot="title">Apply for a Job</span>
      <span slot="subtitle"
        >View job postings for the City of Detroit or our partners.</span
      >
    </cod-service-button>
  `,
};
export const Test = {
  tags: ['!dev'],
  render: () => html`
    <cod-service-button
      <cod-service-button
      href="https://www.example.com"
      target="_blank"
      rel="noopener noreferrer"
    >
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
    const link = shadow.querySelector('a');

    expect(link).not.toBeNull();
    expect(link.tagName).toBe('A');

    // Verify the href attribute
    expect(link.hasAttribute('href')).toBe(true);
    expect(link.getAttribute('href')).toBe(serviceButton.getAttribute('href'));

    // Verify the target attribute (if present on the component)
    if (serviceButton.hasAttribute('target')) {
      expect(link.getAttribute('target')).toBe(
        serviceButton.getAttribute('target'),
      );
    }

    // Verify the rel attribute (if present on the component)
    if (serviceButton.hasAttribute('rel')) {
      expect(link.getAttribute('rel')).toBe(serviceButton.getAttribute('rel'));
    }
  },
};
