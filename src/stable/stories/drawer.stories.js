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
    <h2 slot="label">Drawer Header</h2>
    <div style="height: 150vh; border: dashed 2px grey; padding: 0 1rem;">
      <p>Scroll down to give it a try! 👇</p>
    </div>
  </cod-drawer>
`;

export const Scroll = () => html`
  <div style="height: 150vh; border: dashed 2px grey; padding: 0 1rem;">
    <button
      onclick="(function(){const offcanvas = document.querySelector('cod-drawer'); offcanvas.setAttribute('open', '')})(); return false;"
      class="btn btn-primary"
      type="button"
    >
      Button with data-bs-target
    </button>
    <cod-drawer id="offcanvasExample" scroll>
      <h2 slot="label">Drawer Header</h2>
      <div style="height: 150vh; border: dashed 2px grey; padding: 0 1rem;">
        <p>Scroll down to give it a try! 👇</p>
      </div>
    </cod-drawer>
    <p>Try scrolling on the body of the document while the drawer is open. 👇</p>
  </div>
`;
