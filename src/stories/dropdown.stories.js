import { html } from 'lit-html';
import '../components/molecules/Dropdown/cod-dropdown';
import '../components/atoms/DropdownMenu/cod-dropdown-menu';

export default {
  title: 'Components/Molecules/Dropdown',
};

export const Basic = () => html`
<cod-dropdown
  data-split="false">
  <cod-button data-label="Dropdown button" data-background-color="primary" data-primary="true" data-img-alt="" data-icon="" data-bs-toggle="dropdown" aria-expanded="false" data-extra-classes="dropdown-toggle"></cod-button>
  <cod-dropdown-menu>
  <li><a class="dropdown-item" href="#">Action</a></li>
  <li><a class="dropdown-item" href="#">Another action</a></li>
  <li><a class="dropdown-item" href="#">Something else here</a></li>
  </cod-dropdown-menu>
</cod-dropdown>
`;

export const Variations = () => html`
<cod-dropdown
  data-split="false">
  <cod-button data-label="Dropdown button" data-background-color="primary" data-primary="true" data-img-alt="" data-icon="" data-bs-toggle="dropdown" aria-expanded="false" data-extra-classes="dropdown-toggle"></cod-button>
  <cod-dropdown-menu>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </cod-dropdown-menu>
</cod-dropdown>
<cod-dropdown
  data-split="false">
  <cod-button data-label="Dropdown button" data-background-color="secondary" data-primary="true" data-img-alt="" data-icon="" data-bs-toggle="dropdown" aria-expanded="false" data-extra-classes="dropdown-toggle"></cod-button>
  <cod-dropdown-menu>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </cod-dropdown-menu>
</cod-dropdown>
<cod-dropdown
  data-split="false">
  <cod-button data-label="Dropdown button" data-background-color="success" data-primary="true" data-img-alt="" data-icon="" data-bs-toggle="dropdown" aria-expanded="false" data-extra-classes="dropdown-toggle"></cod-button>
  <cod-dropdown-menu>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </cod-dropdown-menu>
</cod-dropdown>
<cod-dropdown
  data-split="false">
  <cod-button data-label="Dropdown button" data-background-color="info" data-primary="true" data-img-alt="" data-icon="" data-bs-toggle="dropdown" aria-expanded="false" data-extra-classes="dropdown-toggle"></cod-button>
  <cod-dropdown-menu>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </cod-dropdown-menu>
</cod-dropdown>
<cod-dropdown
  data-split="false">
  <cod-button data-label="Dropdown button" data-background-color="warning" data-primary="true" data-img-alt="" data-icon="" data-bs-toggle="dropdown" aria-expanded="false" data-extra-classes="dropdown-toggle"></cod-button>
  <cod-dropdown-menu>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </cod-dropdown-menu>
</cod-dropdown>
<cod-dropdown
  data-split="false">
  <cod-button data-label="Dropdown button" data-background-color="danger" data-primary="true" data-img-alt="" data-icon="" data-bs-toggle="dropdown" aria-expanded="false" data-extra-classes="dropdown-toggle"></cod-button>
  <cod-dropdown-menu>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </cod-dropdown-menu>
</cod-dropdown>
`;

export const Split = () => html`
<cod-dropdown
  data-split="true">
  <cod-button data-label="Dropdown button" data-background-color="primary" data-primary="true" data-img-alt="" data-icon=""></cod-button>
  <cod-button data-label="" data-background-color="primary" data-primary="true" data-img-alt="" data-icon="" data-bs-toggle="dropdown" aria-expanded="false" data-extra-classes="dropdown-toggle dropdown-toggle-split">
  <span class="visually-hidden">Toggle Dropdown</span>
  </cod-button>
  <cod-dropdown-menu>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </cod-dropdown-menu>
</cod-dropdown>
`;

export const DarkMode = () => html`
<cod-dropdown
  data-split="false">
  <cod-button data-label="Dropdown button" data-background-color="primary" data-primary="true" data-img-alt="" data-icon="" data-bs-toggle="dropdown" aria-expanded="false" data-extra-classes="dropdown-toggle"></cod-button>
  <cod-dropdown-menu data-dark-mode="true">
  <li><a class="dropdown-item" href="#">Action</a></li>
<li><a class="dropdown-item" href="#">Another action</a></li>
<li><a class="dropdown-item" href="#">Something else here</a></li>
<li><hr class="dropdown-divider"></li>
<li><a class="dropdown-item" href="#">Separated link</a></li>
  </cod-dropdown-menu>
</cod-dropdown>
`;