import { html } from 'lit-html';
import '../components/atoms/ModalHeader/cod-modal-header';
import '../components/atoms/ModalBody/cod-modal-body';
import '../components/atoms/ModalFooter/cod-modal-footer';
import '../components/organisms/Modal/cod-modal';

export default {
  title: 'Components/Organisms/Modal',
};

export const Basic = () => html`
<button onclick="(function(){var modal = document.querySelector('cod-modal'); modal.setAttribute('data-show','true')})(); return false;" class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" >
  Launch demo modal
</button>
<cod-modal data-id="exampleModal">
    <cod-modal-header>
    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
    </cod-modal-header>
    <cod-modal-body>
    <p>Woo-hoo, you're reading this text in a modal!</p>
    </cod-modal-body>
    <cod-modal-footer data-button-extra-classes="btn-primary">
    </cod-modal-footer>
</cod-offcanvas>
`;

export const StaticBackdrop = () => html`
<button onclick="(function(){var modal = document.querySelector('cod-modal'); modal.setAttribute('data-show','true')})(); return false;" class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
  Launch demo modal
</button>
<cod-modal data-id="staticBackdrop" data-static="true">
    <cod-modal-header>
    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
    </cod-modal-header>
    <cod-modal-body>
    <p>I will not close if you click outside of me. Don't even try to press escape key.</p>
    </cod-modal-body>
    <cod-modal-footer data-button-extra-classes="btn-primary">
    </cod-modal-footer>
</cod-offcanvas>
`;

export const VerticalCentered = () => html`
<button onclick="(function(){var modal = document.querySelector('cod-modal'); modal.setAttribute('data-show','true')})(); return false;" class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#contained-modal-title-vcenter" >
  Launch demo modal
</button>
<cod-modal data-id="contained-modal-title-vcenter" data-vertical-centered="true">
    <cod-modal-header>
    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
    </cod-modal-header>
    <cod-modal-body>
    <p>This is a vertically centered modal.</p>
    </cod-modal-body>
    <cod-modal-footer data-button-extra-classes="btn-primary">
    </cod-modal-footer>
</cod-offcanvas>
`;

export const UsingGrid = () => html`
<button onclick="(function(){var modal = document.querySelector('cod-modal'); modal.setAttribute('data-show','true')})(); return false;" class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#modal-grid" >
  Launch demo modal
</button>
<cod-modal data-id="modal-grid">
    <cod-modal-header>
    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
    </cod-modal-header>
    <cod-modal-body>
    <div class="container-fluid">
    <div class="row mb-2">
      <div class="col-md-4 bg-success p-4">.col-md-4</div>
      <div class="col-md-4 ms-auto bg-success">.col-md-4 .ms-auto</div>
    </div>
    <div class="row mb-2">
      <div class="col-md-3 ms-auto bg-success p-4">.col-md-3 .ms-auto</div>
      <div class="col-md-2 ms-auto bg-success p-4">.col-md-2 .ms-auto</div>
    </div>
    <div class="row mb-2">
      <div class="col-md-6 ms-auto bg-success p-4">.col-md-6 .ms-auto</div>
    </div>
    <div class="row">
      <div class="col-sm-9 bg-success p-2">
        Level 1: .col-sm-9
        <div class="row">
          <div class="col-8 col-sm-6 bg-primary p-4">
            Level 2: .col-8 .col-sm-6
          </div>
          <div class="col-4 col-sm-6 bg-primary p-4">
            Level 2: .col-4 .col-sm-6
          </div>
        </div>
      </div>
    </div>
  </div>
    </cod-modal-body>
    <cod-modal-footer data-button-extra-classes="btn-primary">
    </cod-modal-footer>
</cod-offcanvas>
`;

export const Sizes = () => html`
<button onclick="(function(){var modal = document.querySelector('cod-modal'); modal.setAttribute('data-show','true')})(); return false;" class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModalSize" >
  Launch demo modal
</button>
<cod-modal data-id="exampleModalSize" data-size="lg">
    <cod-modal-header>
    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
    </cod-modal-header>
    <cod-modal-body>
    <p>Woo-hoo, you're reading this text in a modal!</p>
    </cod-modal-body>
    <cod-modal-footer data-button-extra-classes="btn-primary">
    </cod-modal-footer>
</cod-offcanvas>
`;

export const Fullscreen = () => html`
<button onclick="(function(){var modal = document.querySelector('cod-modal'); modal.setAttribute('data-show','true')})(); return false;" class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreen" >
  Launch demo modal
</button>
<cod-modal data-id="exampleModalFullscreen" data-full-screen="always">
    <cod-modal-header>
    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
    </cod-modal-header>
    <cod-modal-body>
    <p>Woo-hoo, you're reading this text in a modal!</p>
    </cod-modal-body>
    <cod-modal-footer data-button-extra-classes="btn-primary">
    </cod-modal-footer>
</cod-offcanvas>
`;