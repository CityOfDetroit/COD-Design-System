import { html } from 'lit-html';
import '../components/molecules/Nav/cod-nav';

export default {
  title: 'Components/Molecules/Nav',
};

export const Basic = () => html`
  <cod-nav>
    <nav class="no-wc navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            <a class="nav-link" href="#">Features</a>
            <a class="nav-link" href="#">Pricing</a>
            <a class="nav-link disabled">Disabled</a>
          </div>
        </div>
      </div>
    </nav>
    <a class="nav-link active" aria-current="page" href="#">Active</a>
    <a class="nav-link" href="#">Link</a>
    <a class="nav-link" href="#">Link</a>
    <a class="nav-link disabled">Disabled</a>
  </cod-nav>
`;

export const HorizontalAlignment = () => html`
  <cod-nav data-horizontal-alignment="center">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
    <a class="nav-link" href="#">Link</a>
    <a class="nav-link" href="#">Link</a>
    <a class="nav-link disabled">Disabled</a>
  </cod-nav>

  <cod-nav data-horizontal-alignment="end">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
    <a class="nav-link" href="#">Link</a>
    <a class="nav-link" href="#">Link</a>
    <a class="nav-link disabled">Disabled</a>
  </cod-nav>
`;

export const Vertical = () => html`
  <cod-nav data-vertical="true">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
    <a class="nav-link" href="#">Link</a>
    <a class="nav-link" href="#">Link</a>
    <a class="nav-link disabled">Disabled</a>
  </cod-nav>
`;

export const Tabs = () => html`
  <cod-nav data-tabs="true">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
    <a class="nav-link" href="#">Link</a>
    <a class="nav-link" href="#">Link</a>
    <a class="nav-link disabled">Disabled</a>
  </cod-nav>
`;

export const Pills = () => html`
  <cod-nav data-pills="true">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
    <a class="nav-link" href="#">Link</a>
    <a class="nav-link" href="#">Link</a>
    <a class="nav-link disabled">Disabled</a>
  </cod-nav>
`;

export const Underline = () => html`
  <cod-nav data-underline="true">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
    <a class="nav-link" href="#">Link</a>
    <a class="nav-link" href="#">Link</a>
    <a class="nav-link disabled">Disabled</a>
  </cod-nav>
`;

export const FillJustify = () => html`
  <cod-nav data-pills="true" data-fill="true">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
    <a class="nav-link" href="#">Much longer nav link</a>
    <a class="nav-link" href="#">Link</a>
    <a class="nav-link disabled">Disabled</a>
  </cod-nav>
  <br />
  <cod-nav data-pills="true" data-justified="true">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
    <a class="nav-link" href="#">Much longer nav link</a>
    <a class="nav-link" href="#">Link</a>
    <a class="nav-link disabled">Disabled</a>
  </cod-nav>
`;

export const TabsDropdowns = () => html`
  <cod-nav data-tabs="true">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
    <cod-dropdown data-split="false">
      <cod-button
        data-label="Dropdown"
        data-primary="true"
        data-img-alt=""
        data-icon=""
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-extra-classes="dropdown-toggle"
      ></cod-button>
      <cod-dropdown-menu>
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li>
          <a class="dropdown-item" href="#">Something else here</a>
        </li>
      </cod-dropdown-menu>
    </cod-dropdown>
    <a class="nav-link" href="#">Link</a>
    <a class="nav-link disabled">Disabled</a>
  </cod-nav>
`;

export const PillssDropdowns = () => html`
  <cod-nav data-pills="true">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
    <cod-dropdown data-split="false">
      <cod-button
        data-label="Dropdown"
        data-primary="true"
        data-img-alt=""
        data-icon=""
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-extra-classes="dropdown-toggle"
      ></cod-button>
      <cod-dropdown-menu>
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li>
          <a class="dropdown-item" href="#">Something else here</a>
        </li>
      </cod-dropdown-menu>
    </cod-dropdown>
    <a class="nav-link" href="#">Link</a>
    <a class="nav-link disabled">Disabled</a>
  </cod-nav>
`;
