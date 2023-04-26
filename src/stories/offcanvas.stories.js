import { html } from 'lit-html';
import '../components/atoms/OffcanvasHeader/cod-offcanvas-header';
import '../components/atoms/OffcanvasBody/cod-offcanvas-body';
import '../components/organisms/Offcanvas/cod-offcanvas';

export default {
  title: 'COD/Organisms/Offcanvas',
};

export const Basic = () => html`
<button onclick="(function(){var offcanvas = document.querySelector('cod-offcanvas'); offcanvas.setAttribute('data-show','true')})(); return false;" class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  Button with data-bs-target
</button>
<cod-offcanvas data-id="offcanvasExample">
    <cod-offcanvas-header>
    <h5>Offcanvas</h5>
    </cod-offcanvas-header>
    <cod-offcanvas-body>
    <p>Try scrolling the rest of the page to see this option in action.</p>
    </cod-offcanvas-body>
</cod-offcanvas>
`;