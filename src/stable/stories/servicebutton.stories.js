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

// export const Default = {
//   render: () => html`
//     <cod-service-button>
//       <span slot="title">Apply for a Job</span>
//       <span slot="subtitle"
//         >View job postings for the City of Detroit or our partners.</span
//       >
//     </cod-service-button>
//   `,
//   play: async ({ canvasElement }) => {
//     const serviceButton = canvasElement.querySelector('cod-service-button');
//     const shadow = serviceButton.shadowRoot;
//     // Test for title and subtitle
//     const title = shadow.querySelector('.title slot');
//     const subtitle = shadow.querySelector('.subtitle slot');

//     await expect(title.assignedNodes()[0].textContent).toBe('Apply for a Job');
//     await expect(subtitle.assignedNodes()[0].textContent).toBe(
//       'View job postings for the City of Detroit or our partners.',
//     );

//     // Test for hover
//     const button = shadow.querySelector('button');
//     const initialColor = getComputedStyle(button).backgroundColor;

//     await userEvent.hover(button);
//     const hoverColor = getComputedStyle(button).backgroundColor;
//     await expect(hoverColor).not.toBe(initialColor);

//     // Check for overlay effect on hover (if applicable)
//     const initialOpacity = getComputedStyle(button).opacity;
//     await expect(getComputedStyle(button).opacity).not.toBe(initialOpacity);

//     // Test for icon visibility (if applicable)
//     const icon = shadow.querySelector('.icon'); // Adjust selector as needed
//     if (icon) {
//       const initialIconVisibility = getComputedStyle(icon).visibility;
//       await userEvent.hover(button);
//       const hoverIconVisibility = getComputedStyle(icon).visibility;
//       await expect(hoverIconVisibility).not.toBe(initialIconVisibility);
//     }

//     // Test disconnectedCallback (if applicable)
//     serviceButton.remove();
//     // Add any specific tests for disconnectedCallback behavior here
//   },
// };

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

    // Test for title and subtitle
    const title = shadow.querySelector('.title slot');
    const subtitle = shadow.querySelector('.subtitle slot');

    await expect(title.assignedNodes()[0].textContent).toBe('Apply for a Job');
    await expect(subtitle.assignedNodes()[0].textContent).toBe(
      'View job postings for the City of Detroit or our partners.',
    );

    // Test for hover overlay effect
    const button = shadow.querySelector('button');

    // Ensure the button exists before proceeding
    expect(button).not.toBeNull();

    // Add a small delay to ensure the component has fully rendered
    await new Promise((resolve) => setTimeout(resolve, 100));

    const initialOverlayOpacity = window
      .getComputedStyle(button, '::before')
      .getPropertyValue('opacity');

    await userEvent.hover(button);

    // Add another small delay to allow for any transitions
    await new Promise((resolve) => setTimeout(resolve, 250));

    const hoverOverlayOpacity = window
      .getComputedStyle(button, '::before')
      .getPropertyValue('opacity');

    // Check if there's a change in the overlay opacity after hover
    expect(parseFloat(hoverOverlayOpacity)).toBeGreaterThan(
      parseFloat(initialOverlayOpacity),
    );

    // Alternative test for overall style change
    const initialStyle = window.getComputedStyle(button).cssText;
    await userEvent.hover(button);
    await new Promise((resolve) => setTimeout(resolve, 250));
    const hoverStyle = window.getComputedStyle(button).cssText;
    expect(hoverStyle).not.toBe(initialStyle);

    // Test for icon visibility (if applicable)
    const icon = shadow.querySelector('.icon'); // Adjust selector as needed
    if (icon) {
      const initialIconVisibility = getComputedStyle(icon).visibility;
      await userEvent.hover(button);
      const hoverIconVisibility = getComputedStyle(icon).visibility;
      expect(hoverIconVisibility).not.toBe(initialIconVisibility);
    }

    // Test disconnectedCallback (if applicable)
    serviceButton.remove();
    // Add any specific tests for disconnectedCallback behavior here
  },
};
