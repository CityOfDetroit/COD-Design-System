import { html } from 'lit-html';
import '../../stable/components/ServiceButton/cod-service-button';
import { jest, expect } from '@storybook/jest';
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
    const serviceButton = canvasElement.querySelector('cod-service-button');
    const shadow = serviceButton.shadowRoot;

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

    // Test that the button is a link
    const link = shadow.querySelector('a');
    expect(link).not.toBeNull();
    expect(link.tagName).toBe('A');
    expect(link.hasAttribute('href')).toBe(true);

    // Test for hover effect
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

    observer.observe(link, {
      attributes: true,
      attributeFilter: ['style', 'class'],
    });

    // Trigger hover
    await userEvent.hover(link);

    // Wait for any transitions/animations
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Test for style changes
    const computedStyle = window.getComputedStyle(link);
    const hoverState = link.matches(':hover');

    // Check if any of these conditions are met
    const styleChangeDetected =
      styleChanged && // MutationObserver detected change
      hoverState && // Element is in hover state
      computedStyle.getPropertyValue('--hover-opacity') !== '' &&
      parseFloat(computedStyle.getPropertyValue('--hover-opacity')) > 0; // Custom property changed

    expect(styleChangeDetected).toBe(true);

    // Cleanup
    observer.disconnect();

    // Test icon is present
    const icon = shadow.querySelector('.icon');
    if (icon) {
      const initialVisibility = window.getComputedStyle(icon).visibility;
      await userEvent.hover(link);
      await new Promise((resolve) => setTimeout(resolve, 300));
      const hoverVisibility = window.getComputedStyle(icon).visibility;
      expect(hoverVisibility).not.toBe(initialVisibility);
    }

    // Test that the link can be clicked
    const mockClick = jest.fn();
    link.addEventListener('click', mockClick);
    await userEvent.click(link);
    expect(mockClick).toHaveBeenCalledTimes(1);

    // Test non-span elements get converted to spans
    const newServiceButton = document.createElement('cod-service-button');
    newServiceButton.innerHTML = `
      <div slot="title">Non-span Title</div>
      <p slot="subtitle">Non-span Subtitle</p>
    `;
    document.body.appendChild(newServiceButton);

    // Wait for the component to update
    await new Promise((resolve) => setTimeout(resolve, 0));

    const newShadow = newServiceButton.shadowRoot;
    const newTitle = newShadow.querySelector('.title slot');
    const newSubtitle = newShadow.querySelector('.subtitle slot');

    expect(newTitle.assignedNodes()[0].tagName).toBe('SPAN');
    expect(newTitle.assignedNodes()[0].textContent).toBe('Non-span Title');
    expect(newSubtitle.assignedNodes()[0].tagName).toBe('SPAN');
    expect(newSubtitle.assignedNodes()[0].textContent).toBe(
      'Non-span Subtitle',
    );

    // Cleanup
    newServiceButton.remove();
  },
};
