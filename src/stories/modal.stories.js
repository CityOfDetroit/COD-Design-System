import { html } from 'lit-html';
import '../components/atoms/ModalHeader/cod-modal-header';
import '../components/atoms/ModalBody/cod-modal-body';
import '../components/atoms/ModalFooter/cod-modal-footer';
import '../components/organisms/Modal/cod-modal';

export default {
  title: 'COD/Organisms/Modal',
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