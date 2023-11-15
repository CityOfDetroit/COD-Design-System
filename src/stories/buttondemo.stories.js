import { html } from 'lit-html';
import '../components/molecules/ButtonGroupDemo/cod-button-group-demo';
import '../components/atoms/ButtonDemo/cod-button-demo';

export default {
  title: 'Components/Atoms/ButtonDemo',
};

export const BasicButton = () => html`
  <cod-button-demo
    data-label="Left"
    data-background-color="primary"
    data-primary="true"
  >
  </cod-button-demo>
`;

export const BasicGroup = () => html`
  <cod-button-group-demo data-type="group" data-label="basic example">
    <cod-button-demo
      data-label="Left"
      data-background-color="primary"
      data-primary="true"
    ></cod-button-demo>
    <cod-button-demo
      data-label="Middle"
      data-background-color="primary"
      data-primary="true"
    ></cod-button-demo>
    <cod-button-demo
      data-label="Right"
      data-background-color="primary"
      data-primary="true"
    ></cod-button-demo>
  </cod-button-group-demo>
`;