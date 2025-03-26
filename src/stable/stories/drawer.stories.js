import { html } from 'lit-html';
import '../components/Drawer/cod-drawer';

export default {
  tags: ['stable'],
  title: 'Components/Drawer',
};

export const Basic = () => html`
  <button
    onclick="(function(){const offcanvas = this.nextElementSibling; offcanvas.setAttribute('open', '')}).call(this); return false;"
    class="btn btn-primary"
    type="button"
  >
    Open Drawer
  </button>
  <cod-drawer id="basicExample">
    <h2 slot="label">Basic Header</h2>
    <div style="height: 150vh; border: dashed 2px grey; padding: 0 1rem;">
      <p>Scroll down to give it a try! 👇</p>
    </div>
  </cod-drawer>
`;

export const Scroll = () => html`
  <div style="height: 150vh; border: dashed 2px grey; padding: 0 1rem;">
    <button
      onclick="(function(){const offcanvas = this.nextElementSibling; offcanvas.setAttribute('open', '')}).call(this); return false;"
      class="btn btn-primary"
      type="button"
    >
      Open Drawer
    </button>
    <cod-drawer id="scrollExample" scroll>
      <h2 slot="label">Scroll Header</h2>
      <div style="height: 150vh; border: dashed 2px grey; padding: 0 1rem;">
        <p>Scroll down to give it a try! 👇</p>
      </div>
    </cod-drawer>
    <p>
      Try scrolling on the body of the document while the drawer is open. 👇
    </p>
  </div>
`;
