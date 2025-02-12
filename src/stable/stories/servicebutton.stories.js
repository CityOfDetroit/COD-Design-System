import { html } from 'lit-html';
import '../../stable/components/ServiceButton/cod-service-button';

export default {
  title: 'Stable/ServiceButton',
  tags: ['autodocs'],
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
};
