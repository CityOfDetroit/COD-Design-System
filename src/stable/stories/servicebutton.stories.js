import { html } from 'lit-html';
import '../../stable/components/ServiceButton/cod-service-button';
import { expect } from '@storybook/jest';
import { userEvent } from '@storybook/testing-library';

export default {
  title: 'Stable/ServiceButton',
  tags: ['autodocs'],
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
};

export const TestServiceButton = {
  play: async ({ canvasElement }) => {
    const serviceButton = canvasElement.querySelector('service-button');
    const shadow = serviceButton.shadowRoot;

    // Test for title and subtitle
    const title = shadow.querySelector('.title slot');
    const subtitle = shadow.querySelector('.subtitle slot');

    await expect(title.assignedNodes()[0].textContent).toBe('Expected Title');
    await expect(subtitle.assignedNodes()[0].textContent).toBe(
      'Expected Subtitle',
    );

    // Test for hover
    const button = shadow.querySelector('button');
    const initialColor = getComputedStyle(button).backgroundColor;

    await userEvent.hover(button);
    const hoverColor = getComputedStyle(button).backgroundColor;
    await expect(hoverColor).not.toBe(initialColor);

    // Check for overlay effect on hover (assuming it changes opacity)
    const initialOpacity = getComputedStyle(button).opacity;
    await expect(getComputedStyle(button).opacity).not.toBe(initialOpacity);

    // Test for hover with SVG
    const svg = shadow.querySelector('svg');
    await expect(svg).toBeFalsy(); // SVG should not be visible initially

    await userEvent.hover(button);
    const svgAfterHover = shadow.querySelector('svg');
    await expect(svgAfterHover).toBeTruthy(); // SVG should be visible on hover

    // Check SVG position
    const svgRect = svgAfterHover.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    await expect(svgRect.right).toBeCloseTo(buttonRect.right, 1);
    await expect(svgRect.bottom).toBeCloseTo(buttonRect.bottom, 1);

    // Test disconnectedCallback (if applicable)
    serviceButton.remove();
    // Add any specific tests for disconnectedCallback behavior here
  },
};
