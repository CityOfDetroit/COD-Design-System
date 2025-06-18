import { html } from 'lit-html';
import '../../stable/components/ServiceButton/cod-service-button';
import { expect } from '@storybook/test';

export default {
  tags: ['stable'],
  title: 'Components/Service Button',
  component: 'cod-service-button',
};

export const Basic = {
  render: () => html`
    <cod-service-button
      href="https://www.example.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span slot="title">Apply for a Job</span>
      <span slot="subtitle"
        >View job postings for the City of Detroit or our partners.</span
      >
    </cod-service-button>
  `,
};

export const Grid = {
  render: () => html`
    <style>
      [class^="col-"] article {
        height: 100%;
        width: 100%;
      }
      [class^="col-"] cod-service-button {
        height: 100%;
        width: 100%;

        min-width: 0px;
      }
    </style>
    <div
      id="views-bootstrap-dept-gov-services-filterable-block"
      class="grid g-2 views-view-grid row"
    >
      <div class="col-12 col-md-6 col-lg-4">
        <article
          data-history-node-id="94946"
          class="contextual-region node node--promoted service service--teaser"
          about="/node/94946"
        >
          <cod-service-button href="/webapp/dpw-permits" target="_self">
            <span slot="title">
              <span>Pay a Detroit Public Works Permit Invoice</span>
            </span>
            <span slot="subtitle"></span>
          </cod-service-button>
        </article>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <article
          data-history-node-id="94921"
          class="contextual-region node node--promoted service service--teaser"
          about="/node/94921"
        >
          <cod-service-button
            href="/webapp/detroit-fire-marshal-invoices"
            target="_self"
          >
            <span slot="title">
              <span>Pay a Fire Marshall Permit Invoice</span>
            </span>
            <span slot="subtitle"></span>
          </cod-service-button>
        </article>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <article
          data-history-node-id="94961"
          class="contextual-region node node--promoted service service--teaser"
          about="/node/94961"
        >
          <cod-service-button href="/webapp/assessor" target="_self">
            <span slot="title">
              <span>Pay a Property Transfer Affidavit (PTA) Fee</span>
            </span>
            <span slot="subtitle"></span>
          </cod-service-button>
        </article>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <article
          data-history-node-id="94941"
          class="contextual-region node node--promoted service service--teaser"
          about="/node/94941"
        >
          <cod-service-button href="/webapp/airport-fees" target="_self">
            <span slot="title">
              <span>Pay Airport Fees</span>
            </span>
            <span slot="subtitle"></span>
          </cod-service-button>
        </article>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <article
          data-history-node-id="94936"
          class="contextual-region node node--promoted service service--teaser"
          about="/node/94936"
        >
          <cod-service-button href="/webapp/bseed-fee-payments" target="_self">
            <span slot="title">
              <span>Pay BSEED Fees</span>
            </span>
            <span slot="subtitle"
              >Pay fees to the Building Environmental Engineering and Safety
              Department online.</span
            >
          </cod-service-button>
        </article>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <article
          data-history-node-id="94931"
          class="contextual-region node node--promoted service service--teaser"
          about="/node/94931"
        >
          <cod-service-button
            href="/webapp/pay-crio-invoices-online"
            target="_self"
          >
            <span slot="title">
              <span>Pay CRIO Deparment Invoices</span>
            </span>
            <span slot="subtitle"
              >Pay Civil Rights, Inclusion, and Opportunity Department invoices
              online.</span
            >
          </cod-service-button>
        </article>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <article
          data-history-node-id="94956"
          class="contextual-region node node--promoted service service--teaser"
          about="/node/94956"
        >
          <cod-service-button href="/webapp/solid-waste-payment" target="_self">
            <span slot="title">
              <span>Pay for Solid Waste Pickup</span>
            </span>
            <span slot="subtitle"></span>
          </cod-service-button>
        </article>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <article
          data-history-node-id="94976"
          class="contextual-region node node--promoted service service--teaser"
          about="/node/94976"
        >
          <cod-service-button href="" target="_self">
            <span slot="title">
              <span>Pay Property Zoning Hearing Fees</span>
            </span>
            <span slot="subtitle"></span>
          </cod-service-button>
        </article>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <article
          data-history-node-id="94966"
          class="contextual-region node node--promoted service service--teaser"
          about="/node/94966"
        >
          <cod-service-button href="/webapp/police-towing-fees" target="_self">
            <span slot="title">
              <span>Pay Vehicle Towing Fees</span>
            </span>
            <span slot="subtitle"></span>
          </cod-service-button>
        </article>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <article
          data-history-node-id="94896"
          class="contextual-region node node--promoted service service--teaser"
          about="/node/94896"
        >
          <cod-service-button
            href="/departments/office-chief-financial-officer/ocfo-divisions/office-treasury/pay-property-tax"
            target="_self"
          >
            <span slot="title">
              <span>Pay Your Property Taxes</span>
            </span>
            <span slot="subtitle"></span>
          </cod-service-button>
        </article>
      </div>
    </div>
  `,
};
export const Test = {
  tags: ['!dev'],
  render: () => html`
    <cod-service-button
      <cod-service-button
      href="https://www.example.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span slot="title">Apply for a Job</span>
      <span slot="subtitle"
        >View job postings for the City of Detroit or our partners.</span
      >
    </cod-service-button>
  `,
  play: async ({ canvasElement }) => {
    const serviceButton = canvasElement.querySelector('cod-service-button');
    const shadow = serviceButton.shadowRoot;

    // ===== TEST 1: Slot Content Test =====
    const titleSlot = shadow.querySelector('.title slot');
    const subtitleSlot = shadow.querySelector('.subtitle slot');

    // Check that slots exist
    expect(titleSlot).not.toBeNull();
    expect(subtitleSlot).not.toBeNull();

    // Check slot content
    const titleNodes = titleSlot.assignedNodes();
    const subtitleNodes = subtitleSlot.assignedNodes();

    expect(titleNodes.length).toBeGreaterThan(0);
    expect(subtitleNodes.length).toBeGreaterThan(0);

    expect(titleNodes[0].textContent).toBe('Apply for a Job');
    expect(subtitleNodes[0].textContent).toBe(
      'View job postings for the City of Detroit or our partners.',
    );

    // ===== TEST 2: Link Element Test =====
    const link = shadow.querySelector('a');

    expect(link).not.toBeNull();
    expect(link.tagName).toBe('A');

    // Verify the href attribute
    expect(link.hasAttribute('href')).toBe(true);
    expect(link.getAttribute('href')).toBe(serviceButton.getAttribute('href'));

    // Verify the target attribute (if present on the component)
    if (serviceButton.hasAttribute('target')) {
      expect(link.getAttribute('target')).toBe(
        serviceButton.getAttribute('target'),
      );
    }

    // Verify the rel attribute (if present on the component)
    if (serviceButton.hasAttribute('rel')) {
      expect(link.getAttribute('rel')).toBe(serviceButton.getAttribute('rel'));
    }
  },
};
