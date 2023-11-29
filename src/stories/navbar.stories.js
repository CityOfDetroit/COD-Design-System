import { html } from 'lit-html';
import '../components/atoms/NavbarBrand/cod-navbar-brand';
import '../components/atoms/NavbarCollapse/cod-navbar-collapse';
import '../components/atoms/NavbarToggle/cod-navbar-toggle';
import '../components/organisms/Navbar/cod-navbar';
import '../components/molecules/Nav/cod-nav';
import '../components/molecules/Dropdown/cod-dropdown';
import '../components/atoms/DropdownMenu/cod-dropdown-menu';
import '../components/atoms/Button/cod-button';

export default {
  title: 'Components/Organisms/Navbar',
};

export const Basic = () => html`
  <cod-navbar
    data-id="navbarSupportedContent"
    data-container-classes="container-fluid"
    data-expand="md"
    data-extra-classes="bg-body-tertiary"
  >
    <nav class="no-wc navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">Action</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Another action</a>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <cod-navbar-brand data-url="#" data-text="Navbar"> </cod-navbar-brand>
    <cod-navbar-toggle data-mode="default"> </cod-navbar-toggle>
    <cod-navbar-collapse>
      <cod-nav>
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Link</a>
        <cod-dropdown data-split="false">
          <cod-button
            data-label="Dropdown"
            data-primary="true"
            data-img-alt=""
            data-icon=""
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-extra-classes="dropdown-toggle text-primary"
          ></cod-button>
          <cod-dropdown-menu>
            <li><a class="dropdown-item" href="#">Link</a></li>
            <li>
              <a class="dropdown-item" href="#">Another action</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Something else here</a>
            </li>
          </cod-dropdown-menu>
        </cod-dropdown>
        <a class="nav-link disabled">Disabled</a>
      </cod-nav>
    </cod-navbar-collapse>
  </cod-navbar>
`;

export const Brand = () => html`
  <cod-navbar
    data-id="navbarBrandText"
    data-container-classes="container-fluid"
    data-expand="md"
  >
    <cod-navbar-brand data-url="#" data-text="Navbar"> </cod-navbar-brand>
    <cod-navbar-toggle data-mode="default"> </cod-navbar-toggle>
    <cod-navbar-collapse>
      <cod-nav>
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Link</a>
        <cod-dropdown data-split="false">
          <cod-button
            data-label="Dropdown"
            data-primary="true"
            data-img-alt=""
            data-icon=""
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-extra-classes="dropdown-toggle text-primary"
          ></cod-button>
          <cod-dropdown-menu>
            <li><a class="dropdown-item" href="#">Link</a></li>
            <li>
              <a class="dropdown-item" href="#">Another action</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Something else here</a>
            </li>
          </cod-dropdown-menu>
        </cod-dropdown>
        <a class="nav-link disabled">Disabled</a>
      </cod-nav>
    </cod-navbar-collapse>
  </cod-navbar>
  <cod-navbar
    data-id="navbarBrandTextBold"
    data-container-classes="container-fluid"
    data-expand="md"
  >
    <cod-navbar-brand
      data-url="#"
      data-text="Navbar"
      data-text-classes="navbar-brand mb-0 me-0 h1"
    >
    </cod-navbar-brand>
    <cod-navbar-toggle data-mode="default"> </cod-navbar-toggle>
    <cod-navbar-collapse>
      <cod-nav>
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Link</a>
        <cod-dropdown data-split="false">
          <cod-button
            data-label="Dropdown"
            data-primary="true"
            data-img-alt=""
            data-icon=""
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-extra-classes="dropdown-toggle text-primary"
          ></cod-button>
          <cod-dropdown-menu>
            <li><a class="dropdown-item" href="#">Link</a></li>
            <li>
              <a class="dropdown-item" href="#">Another action</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Something else here</a>
            </li>
          </cod-dropdown-menu>
        </cod-dropdown>
        <a class="nav-link disabled">Disabled</a>
      </cod-nav>
    </cod-navbar-collapse>
  </cod-navbar>
  <cod-navbar
    data-id="navbarBrandLogo"
    data-container-classes="container-fluid"
    data-expand="md"
  >
    <cod-navbar-brand
      data-url="#"
      data-img="https://detroitmi.gov/themes/custom/detroitmi/logo.png"
      data-img-alt="City of Detroit"
      data-img-size="50"
    >
    </cod-navbar-brand>
    <cod-navbar-toggle data-mode="default"> </cod-navbar-toggle>
    <cod-navbar-collapse>
      <cod-nav>
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Link</a>
        <cod-dropdown data-split="false">
          <cod-button
            data-label="Dropdown"
            data-primary="true"
            data-img-alt=""
            data-icon=""
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-extra-classes="dropdown-toggle text-primary"
          ></cod-button>
          <cod-dropdown-menu>
            <li><a class="dropdown-item" href="#">Link</a></li>
            <li>
              <a class="dropdown-item" href="#">Another action</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Something else here</a>
            </li>
          </cod-dropdown-menu>
        </cod-dropdown>
        <a class="nav-link disabled">Disabled</a>
      </cod-nav>
    </cod-navbar-collapse>
  </cod-navbar>
  <cod-navbar
    data-id="navbarBrandLogoText"
    data-container-classes="container-fluid"
    data-expand="md"
  >
    <cod-navbar-brand
      data-url="#"
      data-text="City of Detroit"
      data-img="https://detroitmi.gov/themes/custom/detroitmi/logo.png"
      data-img-alt="City of Detroit"
      data-img-size="50"
    >
    </cod-navbar-brand>
    <cod-navbar-toggle data-mode="default"> </cod-navbar-toggle>
    <cod-navbar-collapse>
      <cod-nav>
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Link</a>
        <cod-dropdown data-split="false">
          <cod-button
            data-label="Dropdown"
            data-primary="true"
            data-img-alt=""
            data-icon=""
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-extra-classes="dropdown-toggle text-primary"
          ></cod-button>
          <cod-dropdown-menu>
            <li><a class="dropdown-item" href="#">Link</a></li>
            <li>
              <a class="dropdown-item" href="#">Another action</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Something else here</a>
            </li>
          </cod-dropdown-menu>
        </cod-dropdown>
        <a class="nav-link disabled">Disabled</a>
      </cod-nav>
    </cod-navbar-collapse>
  </cod-navbar>
`;

export const TextNonNav = () => html`
  <cod-navbar
    data-id="navbarText"
    data-container-classes="container-fluid"
    data-collapse-classes="justify-content-end"
    data-expand="always"
  >
    <cod-navbar-brand data-url="#" data-text="Navbar"> </cod-navbar-brand>
    <cod-navbar-toggle data-mode="default"> </cod-navbar-toggle>
    <cod-navbar-collapse>
      <span class="navbar-text">
        Signed in as: <a href="#">Edgar Montes</a>
      </span>
    </cod-navbar-collapse>
  </cod-navbar>
`;

export const Color = () => html`
  <cod-navbar
    data-id="navbarColorDark"
    data-container-classes="container-fluid"
    data-expand="md"
    data-extra-classes="bg-dark"
    data-navbar-dark="true"
  >
    <cod-navbar-brand
      data-url="#"
      data-text="Navbar"
      data-text-classes="text-light"
    >
    </cod-navbar-brand>
    <cod-navbar-toggle data-mode="default">
    </cod-navbar-toggle>
    <cod-navbar-collapse>
      <cod-nav>
        <a class="nav-link text-light" href="#">Home</a>
        <a class="nav-link text-light" href="#">Features</a>
        <a class="nav-link text-light" href="#">Pricing</a>
      </cod-nav>
    </cod-navbar-collapse>
  </cod-navbar>
  <br />
  <cod-navbar
    data-id="navbarColorPrimary"
    data-container-classes="container-fluid"
    data-expand="md"
    data-extra-classes="bg-primary"
  >
    <cod-navbar-brand
      data-url="#"
      data-text="Navbar"
      data-text-classes="text-light"
    >
    </cod-navbar-brand>
    <cod-navbar-toggle data-mode="default">
    </cod-navbar-toggle>
    <cod-navbar-collapse>
      <cod-nav>
        <a class="nav-link text-light" href="#">Home</a>
        <a class="nav-link text-light" href="#">Features</a>
        <a class="nav-link text-light" href="#">Pricing</a>
      </cod-nav>
    </cod-navbar-collapse>
  </cod-navbar>
  <br />
  <cod-navbar
    data-id="navbarColorWarning"
    data-container-classes="container-fluid"
    data-expand="md"
    data-extra-classes="bg-warning"
  >
    <cod-navbar-brand
      data-url="#"
      data-text="Navbar"
      data-text-classes="text-dark"
    >
    </cod-navbar-brand>
    <cod-navbar-toggle data-mode="default"> </cod-navbar-toggle>
    <cod-navbar-collapse>
      <cod-nav>
        <a class="nav-link text-dark" href="#">Home</a>
        <a class="nav-link text-dark" href="#">Features</a>
        <a class="nav-link text-dark" href="#">Pricing</a>
      </cod-nav>
    </cod-navbar-collapse>
  </cod-navbar>
`;

export const Placement = () => html`
  <cod-navbar
    data-id="navbarDefault"
    data-container-classes="container-fluid"
    data-expand="md"
  >
    <cod-navbar-brand data-url="#" data-text="Default"> </cod-navbar-brand>
    <cod-navbar-toggle data-mode="default"> </cod-navbar-toggle>
    <cod-navbar-collapse>
      <cod-nav>
        <a class="nav-link" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link text-light" href="#">Pricing</a>
      </cod-nav>
    </cod-navbar-collapse>
  </cod-navbar>
  <br />
  <cod-navbar
    data-id="navbarTop"
    data-container-classes="container-fluid"
    data-expand="md"
    data-position="fixed-top"
  >
    <cod-navbar-brand data-url="#" data-text="Fixed top"> </cod-navbar-brand>
    <cod-navbar-toggle data-mode="default"> </cod-navbar-toggle>
    <cod-navbar-collapse>
      <cod-nav>
        <a class="nav-link" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
      </cod-nav>
    </cod-navbar-collapse>
  </cod-navbar>
  <br />
  <cod-navbar
    data-id="navbarBottom"
    data-container-classes="container-fluid"
    data-expand="md"
    data-position="fixed-bottom"
  >
    <cod-navbar-brand data-url="#" data-text="Fixed bottom"> </cod-navbar-brand>
    <cod-navbar-toggle data-mode="default"> </cod-navbar-toggle>
    <cod-navbar-collapse>
      <cod-nav>
        <a class="nav-link" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
      </cod-nav>
    </cod-navbar-collapse>
  </cod-navbar>
  <br />
  <cod-navbar
    data-id="navbarStickyTop"
    data-container-classes="container-fluid"
    data-expand="md"
    data-position="sticky-top"
  >
    <cod-navbar-brand data-url="#" data-text="Sticky top"> </cod-navbar-brand>
    <cod-navbar-toggle data-mode="default"> </cod-navbar-toggle>
    <cod-navbar-collapse>
      <cod-nav>
        <a class="nav-link" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
      </cod-nav>
    </cod-navbar-collapse>
  </cod-navbar>
  <br />
  <cod-navbar
    data-id="navbarStickyBottom"
    data-container-classes="container-fluid"
    data-expand="md"
    data-position="sticky-bottom"
  >
    <cod-navbar-brand data-url="#" data-text="Sticky bottom">
    </cod-navbar-brand>
    <cod-navbar-toggle data-mode="default"> </cod-navbar-toggle>
    <cod-navbar-collapse>
      <cod-nav>
        <a class="nav-link" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
      </cod-nav>
    </cod-navbar-collapse>
  </cod-navbar>
`;

export const Offcanvas = () => html`
  <cod-navbar
    data-id="navbarSupportedContent"
    data-container-classes="container-fluid"
    data-target-toggle="offcanvas"
  >
    <cod-navbar-brand data-url="#" data-text="Navbar"> </cod-navbar-brand>
    <cod-offcanvas data-id="offcanvasExample">
      <cod-offcanvas-header>
        <h5>Offcanvas</h5>
      </cod-offcanvas-header>
      <cod-offcanvas-body>
        <cod-nav data-vertical="true">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          <a class="nav-link" href="#">Link</a>
          <cod-dropdown data-split="false">
            <cod-button
              data-label="Dropdown"
              data-primary="true"
              data-img-alt=""
              data-icon=""
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-extra-classes="dropdown-toggle text-primary"
            ></cod-button>
            <cod-dropdown-menu>
              <li><a class="dropdown-item" href="#">Link</a></li>
              <li>
                <a class="dropdown-item" href="#">Another action</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Something else here</a>
              </li>
            </cod-dropdown-menu>
          </cod-dropdown>
          <form class="d-flex mt-3" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </cod-nav>
      </cod-offcanvas-body>
    </cod-offcanvas>
    <cod-navbar-toggle data-mode="default"> </cod-navbar-toggle>
  </cod-navbar>
`;

export const OffcanvasColor = () => html`
  <cod-navbar
    data-id="navbarSupportedContent"
    data-container-classes="container-fluid"
    data-target-toggle="offcanvas"
    data-extra-classes="bg-dark"
  >
    <cod-navbar-brand
      data-url="#"
      data-text="Navbar"
      data-text-classes="text-light"
    >
    </cod-navbar-brand>
    <cod-offcanvas data-id="offcanvasExample" data-extra-classes="bg-dark">
      <cod-offcanvas-header data-extra-classes="bg-dark text-light" data-button-dark="true">
        <h5>Offcanvas</h5>
      </cod-offcanvas-header>
      <cod-offcanvas-body data-extra-classes="bg-dark">
        <cod-nav data-vertical="true" data-extra-classes="text-light">
          <a class="nav-link active text-light" aria-current="page" href="#"
            >Home</a
          >
          <a class="nav-link text-light" href="#">Link</a>
          <cod-dropdown data-split="false">
            <cod-button
              data-label="Dropdown"
              data-primary="true"
              data-img-alt=""
              data-icon=""
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-extra-classes="dropdown-toggle text-light"
            ></cod-button>
            <cod-dropdown-menu>
              <li><a class="dropdown-item" href="#">Link</a></li>
              <li>
                <a class="dropdown-item" href="#">Another action</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Something else here</a>
              </li>
            </cod-dropdown-menu>
          </cod-dropdown>
          <form class="d-flex mt-3" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </cod-nav>
      </cod-offcanvas-body>
    </cod-offcanvas>
    <cod-navbar-toggle data-mode="default">
    </cod-navbar-toggle>
  </cod-navbar>
`;
