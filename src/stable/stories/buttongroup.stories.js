import { html } from 'lit-html';
import '../components/ButtonGroup/cod-button-group';
import '../components/Button/cod-button';
import '../../experimental/components/atoms/FormCheck/cod-formcheck';

export default {
  tags: ['stable'],
  title: 'Components/ButtonGroup',
};

export const Basic = {
  tags: ['autodocs'], // Only for testing, hidden from sidebar
  render: () => html`
    <cod-button-group data-type="group" data-label="basic example">
      <div class="no-wc btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary">Left</button>
        <button type="button" class="btn btn-primary">Middle</button>
        <button type="button" class="btn btn-primary">Right</button>
      </div>
      <cod-button
        data-label="Left"
        data-background-color="primary"
        data-primary="true"
        data-img-alt=""
        data-icon=""
      ></cod-button>
      <cod-button
        data-label="Middle"
        data-background-color="primary"
        data-primary="true"
        data-img-alt=""
        data-icon=""
      ></cod-button>
      <cod-button
        data-label="Right"
        data-background-color="primary"
        data-primary="true"
        data-img-alt=""
        data-icon=""
      ></cod-button>
    </cod-button-group>
  `,
};