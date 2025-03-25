import { html } from 'lit-html';
import '../components/Drawer/cod-drawer';

export default {
  tags: ['stable'],
  title: 'Components/Drawer',
};

export const Basic = () => html`
  <button
    onclick="(function(){const offcanvas = document.querySelector('cod-drawer'); offcanvas.setAttribute('open', '')})(); return false;"
    class="btn btn-primary"
    type="button"
  >
    Button with data-bs-target
  </button>
  <cod-drawer id="offcanvasExample">
    <div style="height: 150vh; border: dashed 2px grey; padding: 0 1rem;">
      <p>Scroll down to give it a try! 👇</p>
    </div>
  </cod-drawer>
`;
