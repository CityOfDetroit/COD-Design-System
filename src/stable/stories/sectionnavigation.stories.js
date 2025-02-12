import { html } from 'lit-html';
import { expect } from '@storybook/jest';
import { userEvent, waitFor } from '@storybook/testing-library';
import jest from 'jest-mock';
import '../../stable/components/SectionNavigation/cod-section-navigation';

export default {
  title: 'Stable/SectionNavigation',
  tags: ['autodocs'],
};

export const SectionNavigation = {
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
        const navItems = shadow.querySelectorAll('slot[name="nav-items"] a');
        expect(navItems.length).toBe(3);
        expect(navItems[0].textContent).toBe('Services');
        expect(navItems[0].getAttribute('href')).toBe('#services');
      },
    };