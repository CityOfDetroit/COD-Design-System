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

    // // Test for title and subtitle
    // const title = shadow.querySelector('.title slot');
    // const subtitle = shadow.querySelector('.subtitle slot');
    // await expect(title.assignedNodes()[0].textContent).toBe('Apply for a Job');
    // await expect(subtitle.assignedNodes()[0].textContent).toBe(
    //   'View job postings for the City of Detroit or our partners.',
    // );

    test('Check title and subtitle', async () => {
      // Wait for the shadow DOM to be available
      await page.waitForSelector('service-button');
    
      const serviceButton = await page.evaluateHandle(() => document.querySelector('service-button'));
      const shadow = await serviceButton.evaluateHandle(el => el.shadowRoot);
    
      // Wait for content to load
      await page.waitForSelector('.title slot');
      await page.waitForSelector('.subtitle slot');
    
      // Use more robust selectors (assuming you've added data-testid attributes)
      const title = await shadow.querySelector('[data-testid="title"] slot');
      const subtitle = await shadow.querySelector('[data-testid="subtitle"] slot');
    
      // Debug logging
      console.log('Title content:', await title.evaluate(el => el.assignedNodes()[0]?.textContent));
      console.log('Subtitle content:', await subtitle.evaluate(el => el.assignedNodes()[0]?.textContent));
    
      // Check for non-empty slots
      const titleNodes = await title.evaluate(el => el.assignedNodes());
      const subtitleNodes = await subtitle.evaluate(el => el.assignedNodes());
    
      expect(titleNodes.length).toBeGreaterThan(0);
      expect(subtitleNodes.length).toBeGreaterThan(0);
    
      // Assert content
      await expect(title.evaluate(el => el.assignedNodes()[0].textContent)).resolves.toBe('Apply for a Job');
      await expect(subtitle.evaluate(el => el.assignedNodes()[0].textContent)).resolves.toBe(
        'View job postings for the City of Detroit or our partners.'
      );
    }, 30000); // Increased timeout
    

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
    serviceButton.remove();
  },
};
