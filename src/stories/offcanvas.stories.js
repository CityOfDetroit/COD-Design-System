import { html } from 'lit-html';
import '../components/atoms/OffcanvasHeader/cod-offcanvas-header';
import '../components/atoms/OffcanvasBody/cod-offcanvas-body';
import '../components/organisms/Offcanvas/cod-offcanvas';

export default {
  title: 'COD/Organisms/Offcanvas',
};

export const Basic = () => html`
<button onclick="(function(){var offcanvas = document.querySelector('cod-offcanvas'); offcanvas.setAttribute('data-show','true')})(); return false;" class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" >
  Button with data-bs-target
</button>
<cod-offcanvas data-id="offcanvasExample">
    <cod-offcanvas-header>
    <h5>Offcanvas</h5>
    </cod-offcanvas-header>
    <cod-offcanvas-body>
    <p>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</p>
    </cod-offcanvas-body>
</cod-offcanvas>
`;

export const NoBackdrop = () => html`
<button onclick="(function(){var offcanvas = document.querySelector('cod-offcanvas'); offcanvas.setAttribute('data-show','true')})(); return false;" class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" >
  Button with data-bs-target
</button>
<cod-offcanvas data-id="offcanvasScrolling" data-backdrop="false">
    <cod-offcanvas-header>
    <h5>Offcanvas</h5>
    </cod-offcanvas-header>
    <cod-offcanvas-body>
    <p>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</p>
    </cod-offcanvas-body>
</cod-offcanvas>
`;

export const StaticBackdrop = () => html`
<button onclick="(function(){var offcanvas = document.querySelector('cod-offcanvas'); offcanvas.setAttribute('data-show','true')})(); return false;" class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" >
  Button with data-bs-target
</button>
<cod-offcanvas data-id="offcanvasScrolling" data-static="true">
    <cod-offcanvas-header>
    <h5>Offcanvas</h5>
    </cod-offcanvas-header>
    <cod-offcanvas-body>
    <p>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</p>
    </cod-offcanvas-body>
</cod-offcanvas>
`;

export const Dark = () => html`
<button onclick="(function(){var offcanvas = document.querySelector('cod-offcanvas'); offcanvas.setAttribute('data-show','true')})(); return false;" class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" >
  Button with data-bs-target
</button>
<cod-offcanvas data-id="offcanvasExample" data-extra-classes="text-bg-dark">
    <cod-offcanvas-header data-button-dark="true">
    <h5>Offcanvas</h5>
    </cod-offcanvas-header>
    <cod-offcanvas-body>
    <p>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</p>
    </cod-offcanvas-body>
</cod-offcanvas>
`;

export const Custom = () => html`
<button onclick="(function(){var offcanvas = document.querySelector('cod-offcanvas'); offcanvas.setAttribute('data-show','true')})(); return false;" class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" >
  Button with data-bs-target
</button>
<cod-offcanvas data-id="offcanvasExample" data-extra-classes="text-dark bg-warning" data-backdrop-extra-classes="bg-primary">
    <cod-offcanvas-header data-extra-classes="bg-dark text-light" data-button-dark="true">
    <h5 class="text-align-center">Offcanvas</h5>
    </cod-offcanvas-header>
    <cod-offcanvas-body>
    <p>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</p>
    </cod-offcanvas-body>
</cod-offcanvas>
`;

export const Placement = () => html`
<button onclick="(function(){var offcanvas = document.querySelector('cod-offcanvas[data-id=offcanvasStart]'); offcanvas.setAttribute('data-show','true')})(); return false;" class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasStart" >
  Start
</button>
<button onclick="(function(){var offcanvas = document.querySelector('cod-offcanvas[data-id=offcanvasEnd]'); offcanvas.setAttribute('data-show','true')})(); return false;" class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasEnd" >
  End
</button>
<button onclick="(function(){var offcanvas = document.querySelector('cod-offcanvas[data-id=offcanvasTop]'); offcanvas.setAttribute('data-show','true')})(); return false;" class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" >
  Top
</button>
<button onclick="(function(){var offcanvas = document.querySelector('cod-offcanvas[data-id=offcanvasBottom]'); offcanvas.setAttribute('data-show','true')})(); return false;" class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasButtom" >
  Bottom
</button>
<cod-offcanvas data-id="offcanvasStart" data-placement="start">
    <cod-offcanvas-header>
    <h5>Offcanvas</h5>
    </cod-offcanvas-header>
    <cod-offcanvas-body>
    <p>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</p>
    </cod-offcanvas-body>
</cod-offcanvas>
<cod-offcanvas data-id="offcanvasEnd" data-placement="end">
    <cod-offcanvas-header>
    <h5>Offcanvas</h5>
    </cod-offcanvas-header>
    <cod-offcanvas-body>
    <p>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</p>
    </cod-offcanvas-body>
</cod-offcanvas>
<cod-offcanvas data-id="offcanvasTop" data-placement="top">
    <cod-offcanvas-header>
    <h5>Offcanvas</h5>
    </cod-offcanvas-header>
    <cod-offcanvas-body>
    <p>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</p>
    </cod-offcanvas-body>
</cod-offcanvas>
<cod-offcanvas data-id="offcanvasBottom" data-placement="bottom">
    <cod-offcanvas-header>
    <h5>Offcanvas</h5>
    </cod-offcanvas-header>
    <cod-offcanvas-body>
    <p>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</p>
    </cod-offcanvas-body>
</cod-offcanvas>
`;