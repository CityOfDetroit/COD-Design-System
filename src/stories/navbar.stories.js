import { html } from 'lit-html';
import '../components/atoms/NavbarBrand/cod-navbar-brand';
import '../components/atoms/NavbarCollapse/cod-navbar-collapse';
import '../components/atoms/NavbarToggle/cod-navbar-toggle';
import '../components/organisms/Navbar/cod-navbar';

export default {
  title: 'COD/Organisms/Navbar',
};

export const Basic = () => html`
<cod-navbar data-id="navbarSupportedContent">
    <cod-navbar-brand data-url="#" data-text="Navbar">
    </cod-navbar-brand>
    <cod-navbar-toggle>
    </cod-navbar-toggle>
    <cod-navbar-collapse>
        <cod-nav>
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            <a class="nav-link" href="#">Link</a>
            <cod-dropdown data-split="false">
                <cod-button data-label="Dropdown" data-primary="true" data-img-alt="" data-icon="" data-bs-toggle="dropdown" aria-expanded="false" data-extra-classes="dropdown-toggle"></cod-button>
                <cod-dropdown-menu>
                <li><a class="dropdown-item" href="#">Link</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </cod-dropdown-menu>
            </cod-dropdown>
            <a class="nav-link disabled">Disabled</a>
        </cod-nav>
    </cod-navbar-collapse>
</cod-navbar>
`;