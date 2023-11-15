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
  </cod-button>
`;