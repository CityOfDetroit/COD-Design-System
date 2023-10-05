import { html } from 'lit-html';
import '../components/atoms/Clickable/cod-clickable';
import '../components/organisms/Card/cod-card';
import '../components/atoms/CardIconContainer/cod-card-icon-container';
import '../components/atoms/Icon/cod-icon';
import '../components/atoms/CardBody/cod-card-body';

export default {
  title: 'Components/Atoms/Clickable',
};

export const ActionButton = () => html`
  <cod-clickable href="https://example.com" target="_blank" data-btn-color="btn-primary">
    <cod-card
      data-id="card-as-action-button"
      data-width="18em"
    >
      <cod-card-icon-container>
        <cod-icon data-icon="house" data-size="x-large" />
      </cod-card-icon-container>
      <cod-card-body>
        <h5 class="card-title">Do Something</h5>
        <p class="card-text">Like click on this card.</p>
      </cod-card-body>
    </cod-card>
  </clickable>
`;

export const ActionButtonSuccess = () => html`
  <cod-clickable href="https://example.com" target="_blank" data-btn-color="btn-success">
    <cod-card
      data-id="card-as-action-button"
      data-width="18em"
    >
      <cod-card-icon-container>
        <cod-icon data-icon="house" data-size="x-large" />
      </cod-card-icon-container>
      <cod-card-body>
        <h5 class="card-title">Do Something</h5>
        <p class="card-text">Like click on this card.</p>
      </cod-card-body>
    </cod-card>
  </clickable>
`;
