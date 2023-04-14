import { html } from 'lit-html';
import '../components/molecules/Dropdown/cod-dropdown';
import '../components/atoms/DropdownMenu/cod-dropdown-menu';

export default {
  title: 'COD/Molecules/Dropdown',
};

export const Basic = () => html`
<cod-dropdown
  data-split="false">
  <cod-button data-label="Dropdown button" data-background-color="color-1" data-primary="true" data-img-alt="" data-icon="" data-bs-toggle="dropdown" aria-expanded="false" data-extra-classes="dropdown-toggle"></cod-button>
  <cod-dropdown-menu>
  <li><a class="dropdown-item" href="#">Action</a></li>
  <li><a class="dropdown-item" href="#">Another action</a></li>
  <li><a class="dropdown-item" href="#">Something else here</a></li>
  </cod-dropdown-menu>
</cod-dropdown>
`;