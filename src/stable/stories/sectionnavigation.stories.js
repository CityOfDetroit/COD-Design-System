import { html } from 'lit-html';
import { expect } from '@storybook/test';
import { userEvent, waitFor } from '@storybook/test';
import '../../stable/components/SectionNavigation/cod-section-navigation';

export default {
  tags: ['stable'],
  title: 'Components/Section Navigation',
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
        font-weight: 700;
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

    // Wait for component to initialize
    await waitFor(() => {
      expect(sectionNav.shadowRoot).not.toBeNull();
      expect(
        sectionNav.shadowRoot.querySelector('.section-container'),
      ).not.toBeNull();
    });

    const shadow = sectionNav.shadowRoot;

    // Test basic structure exists
    const container = shadow.querySelector('.section-container');
    expect(container).not.toBeNull();

    const header = shadow.querySelector('.section-header');
    expect(header).not.toBeNull();

    const nav = shadow.querySelector('.section-nav');
    expect(nav).not.toBeNull();

    // Test slots exist
    const headerSlot = shadow.querySelector('slot[name="header"]');
    const navItemsSlot = shadow.querySelector('slot[name="nav-items"]');
    expect(headerSlot).not.toBeNull();
    expect(navItemsSlot).not.toBeNull();

    // Test slotted content is assigned
    expect(headerSlot.assignedElements().length).toBeGreaterThan(0);
    expect(navItemsSlot.assignedElements().length).toBeGreaterThan(0);

    // Check if we're in mobile or desktop mode
    const isMobile = container.classList.contains('mobile-version');
    const isDesktop = container.classList.contains('desktop-version');

    // One of them should be true
    expect(isMobile || isDesktop).toBe(true);

    if (isMobile) {
      // Mobile tests
      expect(header.tagName).toBe('BUTTON');
      expect(header.getAttribute('aria-expanded')).toBe('false');

      const chevron = shadow.querySelector('.chevron-icon');
      expect(chevron).not.toBeNull();

      // Test toggle functionality
      await userEvent.click(header);
      expect(header.getAttribute('aria-expanded')).toBe('true');
      expect(container.classList.contains('expanded')).toBe(true);

      await userEvent.click(header);
      expect(header.getAttribute('aria-expanded')).toBe('false');
      expect(container.classList.contains('expanded')).toBe(false);
    } else {
      // Desktop tests
      expect(header.tagName).toBe('DIV');
      expect(header.getAttribute('aria-expanded')).toBeNull();

      const chevron = shadow.querySelector('.chevron-icon');
      expect(chevron).toBeNull();
    }
  },
};
