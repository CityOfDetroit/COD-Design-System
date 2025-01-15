import { html } from 'lit-html';
import '../../stable/components/organisms/GovBanner/cod-gov-banner';

export default {
  title: 'Organisms/GovBanner',
  tags: ['autodocs'],
};

export const Default = {
  render: () => html`
    <cod-gov-banner>
      <span slot="city-name">CITY OF DETROIT</span>
      <span slot="official-statement"
        >An official website of the City of Detroit.</span
      >
      <span slot="know-statement">Here's how you know.</span>
      <span slot="toggle-icon">▼</span>
      <div slot="content">
        <div class="info-section">
          <div class="info-item">
            <div class="icon">🏛️</div>
            <div>
              <h3>Official websites use .gov</h3>
              <p>
                A .gov website belongs to an official government organization in
                the United States.
              </p>
            </div>
          </div>
          <div class="info-item">
            <div class="icon">🔒</div>
            <div>
              <h3>Secure .gov websites use HTTPS</h3>
              <p>
                A lock or https:// means you've safely connected to the .gov
                website. Share sensitive information only on official, secure
                websites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </cod-gov-banner>
  `,
};
