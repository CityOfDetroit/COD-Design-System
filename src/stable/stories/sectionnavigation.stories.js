import { html } from 'lit-html';
import '../../stable/components/organisms/SectionNavigation/cod-section-navigation';

export default {
  title: 'Organisms/SectionNavigation',
  tags: ['autodocs'],
};

export const Default = {
  render: () => html`
    <cod-section-navigation>
      <nav slot="nav-items">
        <a href="#services">Services</a>
        <a href="#council-sessions">Council Sessions</a>
        <a href="#community-events">Community Events</a>
        <a href="#news">News</a>
        <a href="#council-members">Council Members</a>
        <a href="#standing-committees">Standing Committees</a>
        <a href="#departments">Departments, Contacts & More</a>
      </nav>
    </cod-section-navigation>
  `,
};
