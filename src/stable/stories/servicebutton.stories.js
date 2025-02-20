import { html } from 'lit-html';
import '../../stable/components/ServiceButton/cod-service-button';
import { expect } from '@storybook/jest';
import { userEvent } from '@storybook/testing-library';

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
    // Allow initial render
    await new Promise((resolve) => setTimeout(resolve, 100));

    const serviceButton = canvasElement.querySelector('cod-service-button');
    const shadow = serviceButton.shadowRoot;

    // Test for title and subtitle
    const title = shadow.querySelector('.title slot');
    const subtitle = shadow.querySelector('.subtitle slot');
    await expect(title.assignedNodes()[0].textContent).toBe('Apply for a Job');
    await expect(subtitle.assignedNodes()[0].textContent).toBe(
      'View job postings for the City of Detroit or our partners.',
    );

    // Test for hover effect
    const button = shadow.querySelector('button');
    expect(button).not.toBeNull();

    // Create a MutationObserver to track style changes
    let styleChanged = false;
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'style'
        ) {
          styleChanged = true;
        }
      });
    });

    observer.observe(button, {
      attributes: true,
      attributeFilter: ['style', 'class'],
    });

    // Trigger hover
    await userEvent.hover(button);

    // Wait for any transitions/animations
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Test for style changes
    const computedStyle = window.getComputedStyle(button);
    const hoverState = button.matches(':hover');

    // Check if any of these conditions are met
    const styleChangeDetected =
      styleChanged && // MutationObserver detected change
      hoverState && // Element is in hover state
      computedStyle.getPropertyValue('--hover-opacity') !== '' && // Custom property changed
      parseFloat(computedStyle.getPropertyValue('opacity')) > 0; // Opacity changed

    expect(styleChangeDetected).toBe(true);

    // Cleanup
    observer.disconnect();

    // Test icon is present
    const icon = shadow.querySelector('.icon');
    if (icon) {
      const initialVisibility = window.getComputedStyle(icon).visibility;
      await userEvent.hover(button);
      await new Promise((resolve) => setTimeout(resolve, 300));
      const hoverVisibility = window.getComputedStyle(icon).visibility;
      expect(hoverVisibility).not.toBe(initialVisibility);
    }

    // Test component cleanup
    serviceButton.remove();
  },
};
