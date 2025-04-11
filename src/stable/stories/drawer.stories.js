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

export const SiteMenu = () => html`
  <style>
    #mainSiteMenuDrawer::part(body) {
      padding: 0;
    }

  </style>
  <div id="mainSiteMenu">
    <cod-button
      onclick="(function(){const offcanvas = this.nextElementSibling; offcanvas.setAttribute('open', '')}).call(this); return false;"
      variant="accent-primary"
      square=""
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="black"
        class="bi bi-list"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
        ></path>
      </svg>
      <span class="visually-hidden">Menu</span>
    </cod-button>
    <cod-drawer
      id="mainSiteMenuDrawer"
      scroll=""
      placement="end"
      backdrop="true"
    >
      <span class="fw-bold display-5" slot="label">City of Detroit</span>
      <div class="position-relative">
        <ul class="list-unstyled">
          <li>
            <cod-button-group label="Government" class="w-100">
              <cod-button
                href="/government"
                size="medium"
                class="btn--align-left"
              >
                Government
              </cod-button>
              <cod-button
                square=""
                onclick="(function(){const offcanvas = document.querySelector('#mainSiteSubMenu-0-1'); offcanvas.setAttribute('open', '')}).call(this); return false;"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="black"
                  class="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                  ></path>
                </svg>
              </cod-button>
            </cod-button-group>
            <cod-drawer id="mainSiteSubMenu-0-1" contained="" placement="end">
              <span class="fw-bold display-6" slot="label">Government</span>
              <div>
                <ul class="list-unstyled">
                  <li>
                    <cod-button
                      href="/government/boards"
                      size="medium"
                      class="w-100 btn--w100 btn--align-left"
                      >Boards</cod-button
                    >
                  </li>
                  <li>
                    <cod-button
                      href="/government/city-clerk"
                      size="medium"
                      class="w-100 btn--w100 btn--align-left"
                      >City Clerk</cod-button
                    >
                  </li>
                  <li>
                    <cod-button
                      href="/government/city-council"
                      size="medium"
                      class="w-100 btn--w100 btn--align-left"
                      >City Council</cod-button
                    >
                  </li>
                  <li>
                    <cod-button
                      href="/government/commissions"
                      size="medium"
                      class="w-100 btn--w100 btn--align-left"
                      >Commissions</cod-button
                    >
                  </li>
                  <li>
                    <cod-button
                      href="/government/mayors-office"
                      size="medium"
                      class="w-100 btn--w100 btn--align-left"
                      >Mayor's Office</cod-button
                    >
                  </li>
                  <li>
                    <cod-button
                      href="/government/office-inspector-general"
                      size="medium"
                      class="w-100 btn--w100 btn--align-left"
                      >Office of Inspector General</cod-button
                    >
                  </li>
                  <li>
                    <cod-button
                      href="/government/office-auditor-general"
                      size="medium"
                      class="w-100 btn--w100 btn--align-left"
                      >Office of the Auditor General</cod-button
                    >
                  </li>
                  <li>
                    <cod-button
                      href="/government/ombudsman"
                      size="medium"
                      class="w-100 btn--w100 btn--align-left"
                      >Ombudsman</cod-button
                    >
                  </li>
                </ul>
              </div>
            </cod-drawer>
          </li>
        </ul>
      </div>
    </cod-drawer>
  </div>
`;