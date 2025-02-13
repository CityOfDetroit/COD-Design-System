// import { html } from 'lit-html';
// import '../../stable/components/ServiceButton/cod-service-button';
// import { expect } from '@storybook/jest';
// import { userEvent } from '@storybook/testing-library';

// export default {
//   title: 'Stable/ServiceButton',
//   component: 'cod-service-button',
//   tags: ['autodocs'],
// };

// export const ServiceButton = {
//   render: () => html`
//     <cod-service-button>
//       <span slot="title">Apply for a Job</span>
//       <span slot="subtitle"
//         >View job postings for the City of Detroit or our partners.</span
//       >
//     </cod-service-button>
//   `,
// };

// export const Default = {
//   play: async ({ canvasElement }) => {
//     const serviceButton = canvasElement.querySelector('cod-service-button');
//     const shadow = serviceButton.shadowRoot;

//     // Test for title and subtitle
//     const title = shadow.querySelector('.title slot');
//     const subtitle = shadow.querySelector('.subtitle slot');

//     await expect(title.assignedNodes()[0].textContent).toBe('Expected Title');
//     await expect(subtitle.assignedNodes()[0].textContent).toBe(
//       'Expected Subtitle',
//     );

//     // Test for hover
//     const button = shadow.querySelector('button');
//     const initialColor = getComputedStyle(button).backgroundColor;

//     await userEvent.hover(button);
//     const hoverColor = getComputedStyle(button).backgroundColor;
//     await expect(hoverColor).not.toBe(initialColor);

//     // Check for overlay effect on hover (assuming it changes opacity)
//     const initialOpacity = getComputedStyle(button).opacity;
//     await expect(getComputedStyle(button).opacity).not.toBe(initialOpacity);

//     // Test for hover with SVG
//     const svg = shadow.querySelector('svg');
//     await expect(svg).toBeFalsy(); // SVG should not be visible initially

//     await userEvent.hover(button);
//     const svgAfterHover = shadow.querySelector('svg');
//     await expect(svgAfterHover).toBeTruthy(); // SVG should be visible on hover

//     // Check SVG position
//     const svgRect = svgAfterHover.getBoundingClientRect();
//     const buttonRect = button.getBoundingClientRect();
//     await expect(svgRect.right).toBeCloseTo(buttonRect.right, 1);
//     await expect(svgRect.bottom).toBeCloseTo(buttonRect.bottom, 1);

//     // Test disconnectedCallback (if applicable)
//     serviceButton.remove();
//     // Add any specific tests for disconnectedCallback behavior here
//   },
// };

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
    const serviceButton = canvasElement.querySelector('cod-service-button');
    const shadow = serviceButton.shadowRoot;
    // Test for title and subtitle
    const title = shadow.querySelector('.title slot');
    const subtitle = shadow.querySelector('.subtitle slot');

    await expect(title.assignedNodes()[0].textContent).toBe('Apply for a Job');
    await expect(subtitle.assignedNodes()[0].textContent).toBe(
      'View job postings for the City of Detroit or our partners.',
    );

    // Test for hover
    const button = shadow.querySelector('button');
    const initialColor = getComputedStyle(button).backgroundColor;

    await userEvent.hover(button);
    const hoverColor = getComputedStyle(button).backgroundColor;
    await expect(hoverColor).not.toBe(initialColor);

    // Check for overlay effect on hover (if applicable)
    const initialOpacity = getComputedStyle(button).opacity;
    await expect(getComputedStyle(button).opacity).not.toBe(initialOpacity);

    // Test for icon visibility (if applicable)
    const icon = shadow.querySelector('.icon'); // Adjust selector as needed
    if (icon) {
      const initialIconVisibility = getComputedStyle(icon).visibility;
      await userEvent.hover(button);
      const hoverIconVisibility = getComputedStyle(icon).visibility;
      await expect(hoverIconVisibility).not.toBe(initialIconVisibility);
    }

    // Test disconnectedCallback (if applicable)
    serviceButton.remove();
    // Add any specific tests for disconnectedCallback behavior here
  },
};
