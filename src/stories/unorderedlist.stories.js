import { html } from 'lit-html';
import '../components/atoms/UnorderedList/cod-ul';

export default {
  title: 'Components/Atoms/UnorderedList',
  argTypes: {
  },
};

export const Default = () => html`
<div>
  <p>To be implemented</p>
  <cod-ul icon="checkmark-fill">
    <li slot="list-item">
      Item 1
      <ul> <li>Inner element </li></ul>
    </li>
    <li slot="list-item">Item 2</li>
  </cod-ul>
</div>`;

