import { html } from 'lit-html';
import '../../stable/components/SectionNavigation/cod-section-navigation';

export default {
  title: 'Stable/SectionNavigation',
  tags: ['autodocs'],
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
};
