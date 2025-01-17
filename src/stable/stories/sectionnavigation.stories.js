import { html } from 'lit-html';
import '../../stable/components/organisms/SectionNavigation/cod-section-navigation';

export default {
  title: 'Organisms/SectionNavigation',
  tags: ['autodocs'],
};

export const Default = {
  render: () => html`
    <cod-section-navigation>
      <a slot="nav-items" href="#services">Services</a>
      <a slot="nav-items" href="#council-sessions">Council Sessions</a>
      <a slot="nav-items" href="#community-events">Community Events</a>
      <a slot="nav-items" href="#news">News</a>
      <a slot="nav-items" href="#council-members">Council Members</a>
      <a slot="nav-items" href="#standing-committees">Standing Committees</a>
      <a slot="nav-items" href="#departments">Departments, Contacts & More</a>
    </cod-section-navigation>
  `,
};
