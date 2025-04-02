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
    <span class="fw-bold display-5" slot="label">Basic Header</span>
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
      <span class="fw-bold display-5" slot="label">Scroll Header</span>
      <div style="height: 150vh; border: dashed 2px grey; padding: 0 1rem;">
        <p>Scroll down to give it a try! 👇</p>
      </div>
    </cod-drawer>
    <p>
      Try scrolling on the body of the document while the drawer is open. 👇
    </p>
  </div>
`;

export const Contained = () => html`
  <div
    style="position: relative; overflow: hidden; border: solid 2px grey; height: 300px; padding: 1rem; margin-bottom: 1rem;"
  >
    The drawer will be contained to this box. This content won't shift or be
    affected in any way when the drawer opens.

    <button
      onclick="(function(){const offcanvas = this.nextElementSibling; offcanvas.setAttribute('open', '')}).call(this); return false;"
      class="btn btn-primary"
      type="button"
    >
      Toggle Contained Drawer
    </button>

    <cod-drawer
      id="containedExample"
      contained
      style="--cod-offcanvas-width: 50%;"
    >
      <span class="fw-bold display-5" slot="label">Contained Drawer</span>
      <div style="padding: 0 1rem;">
        <p>This drawer is contained within its parent element.</p>
        <p>Unlike normal drawers, contained drawers:</p>
        <ul>
          <li>Are not modal</li>
          <li>Do not show an overlay</li>
          <li>Do not trap focus</li>
          <li>Are not dismissible with Escape</li>
        </ul>
        <p>This allows users to interact with elements outside the drawer.</p>
      </div>
    </cod-drawer>
  </div>
`;
