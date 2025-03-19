import { html } from 'lit-html';
import { expect } from '@storybook/test';
import { userEvent, waitFor } from '@storybook/test';
import '../../stable/components/SectionNavigation/cod-section-navigation';

export default {
  tags: ['stable'],
  title: 'Components/SectionNavigation',
};

export const SectionNavigation = {
  tags: ['autodocs'],
  render: () => html`
    <style>
      .section-nav-link {
        text-decoration: none;
        color: #000;
      }

      .section-header {
        white-space: nowrap;
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: bold;
      }
    </style>
    <cod-section-navigation>
      <span slot="header" class="section-header">On This Page</span>
      <a slot="nav-items" href="#services" class="section-nav-link">Services</a>
      <a slot="nav-items" href="#council-sessions" class="section-nav-link"
        >Council Sessions</a
      >
      <a slot="nav-items" href="#community-events" class="section-nav-link"
        >Community Events</a
      >
      <a slot="nav-items" href="#news" class="section-nav-link">News</a>
      <a slot="nav-items" href="#council-members" class="section-nav-link"
        >Council Members</a
      >
      <a slot="nav-items" href="#standing-committees" class="section-nav-link"
        >Standing Committees</a
      >
      <a slot="nav-items" href="#departments" class="section-nav-link"
        >Departments, Contacts & More</a
      >
    </cod-section-navigation>
  `,
};

export const Test = {
  tags: ['!dev'],
  render: () => html`
    <style>
      .section-nav-link,
      .nav-item a {
        text-decoration: none;
        color: inherit;
      }
    </style>
    <cod-section-navigation>
      <span slot="header">On This Page</span>
      <a slot="nav-items" href="#services" class="section-nav-link">Services</a>
      <a slot="nav-items" href="#council-sessions" class="section-nav-link"
        >Council Sessions</a
      >
      <a slot="nav-items" href="#community-events" class="section-nav-link"
        >Community Events</a
      >
      <a slot="nav-items" href="#news" class="section-nav-link">News</a>
      <a slot="nav-items" href="#council-members" class="section-nav-link"
        >Council Members</a
      >
      <a slot="nav-items" href="#standing-committees" class="section-nav-link"
        >Standing Committees</a
      >
      <a slot="nav-items" href="#departments" class="section-nav-link"
        >Departments, Contacts & More</a
      >
    </cod-section-navigation>
  `,
  play: async ({ canvasElement }) => {
    const sectionNav = canvasElement.querySelector('cod-section-navigation');
    const shadow = sectionNav.shadowRoot;

    // Helper function to check expanded state
    const checkExpandedState = (isExpanded) => {
      const container = shadow.querySelector('.section-container');
      const button = shadow.querySelector('.toggle-button');

      expect(container.classList.contains('expanded')).toBe(isExpanded);
      expect(button.getAttribute('aria-expanded')).toBe(isExpanded.toString());
    };

    // Test initial state
    checkExpandedState(false);

    // Test button click to expand
    const toggleButton = shadow.querySelector('.toggle-button');
    await userEvent.click(toggleButton);
    checkExpandedState(true);

    // Test button click to collapse
    await userEvent.click(toggleButton);
    checkExpandedState(false);

    // Test slotted elements
    await waitFor(() => {
      const slot = shadow.querySelector('slot[name="nav-items"]');
      const navItems = slot.assignedElements();

      navItems.forEach((item) => {
        if (item.tagName === 'A') {
          // Test <a> elements are wrapped in <li>
          const parentLi = item.closest('li');
          expect(parentLi).not.toBeNull();
          expect(parentLi.classList.contains('nav-item')).toBe(true);
          expect(parentLi.getAttribute('slot')).toBe('nav-items');
          expect(item.getAttribute('slot')).toBe(null);
        } else if (item.tagName === 'LI') {
          // Test <li> elements
          expect(item.classList.contains('nav-item')).toBe(true);
          const anchor = item.querySelector('a');
          if (anchor) {
            // Test <li> with anchor
            expect(item.getAttribute('slot')).toBe('nav-items');
          } else {
            // Test <li> by itself
            expect(item.classList.contains('nav-item')).toBe(true);
          }
        } else {
          // Test non-<a> and non-<li> elements are not rendered
          const renderedItems = shadow.querySelectorAll('.nav-item');
          const isRendered = Array.from(renderedItems).some((renderedItem) =>
            renderedItem.contains(item),
          );
          expect(isRendered).toBe(false);
        }
      });
    });
  },
};
