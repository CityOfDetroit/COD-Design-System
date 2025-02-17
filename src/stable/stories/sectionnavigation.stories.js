import { html } from 'lit-html';
import { expect } from '@storybook/jest';
import { userEvent, waitFor } from '@storybook/testing-library';
import '../../stable/components/SectionNavigation/cod-section-navigation';

export default {
  title: 'Stable/SectionNavigation',
  tags: ['autodocs'],
};

export const SectionNavigation = {
  render: () => html`
<style>
      .section-header {
        white-space: nowrap;
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: bold;
        margin: 0;
        position: relative;
        padding-left: 0.75rem;
      }

      .section-header::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 4px;
        height: 1rem;
        background-color: #ffc107;
      }

      .section-nav-link {
        color: #000;
        text-decoration: none;
        border-bottom: none;
        padding: 0.25rem 0;
        display: block;
      }

      @media (max-width: 992px) {
        .section-header {
          font-size: 1rem;
          padding-left: 0;
          text-transform: none;
          font-weight: 600;
        }

        .section-header::before {
          display: none;
        }

        .section-nav-link {
          display: block;
          padding: 0.75rem 1rem;
          margin: 0;
          border: none;
          color: #000;
          text-decoration: none;
        }
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
};

export const Default = {
  render: () => html`
    <style>
      .section-nav-link {
        text-decoration: none;
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

    // Verify navigation items
    await waitFor(() => {
      const slot = shadow.querySelector('slot[name="nav-items"]');
      const navItems = slot.assignedElements();
      expect(navItems.length).toBe(7);
      expect(navItems[0].textContent).toBe('Services');
      expect(navItems[0].getAttribute('href')).toBe('#services');
    });
  },
};
