import { html } from 'lit-html';
import '../components/atoms/ListGroupItem/cod-listgroup-item';
import '../components/molecules/ListGroup/cod-listgroup';

export default {
  title: 'COD/Molecules/ListGroup',
};

export const Basic = () => html`
<cod-listgroup data-tag="ul">
<li class="list-group-item">An item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>
<li class="list-group-item">A fourth item</li>
<li class="list-group-item">And a fifth one</li>
</cod-listgroup>
`;

export const Active = () => html`
<cod-listgroup data-tag="ul">
<li class="list-group-item active" aria-current="true">An active item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>
<li class="list-group-item">A fourth item</li>
<li class="list-group-item">And a fifth one</li>
</cod-listgroup>
`;

export const Disabled = () => html`
<cod-listgroup data-tag="ul">
<li class="list-group-item disabled" aria-disabled="true">A disabled item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>
<li class="list-group-item">A fourth item</li>
<li class="list-group-item">And a fifth one</li>
</cod-listgroup>
`;

export const Links = () => html`
<cod-listgroup data-tag="div">
<a href="#" class="list-group-item list-group-item-action active" aria-current="true">
The current link item
</a>
<a href="#" class="list-group-item list-group-item-action">A second link item</a>
<a href="#" class="list-group-item list-group-item-action">A third link item</a>
<a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
<a class="list-group-item list-group-item-action disabled">A disabled link item</a>
</cod-listgroup>
`;

export const Button = () => html`
<cod-listgroup data-tag="div">
<button type="button" class="list-group-item list-group-item-action active" aria-current="true">
The current button
</button>
<button type="button" class="list-group-item list-group-item-action">A second button item</button>
<button type="button" class="list-group-item list-group-item-action">A third button item</button>
<button type="button" class="list-group-item list-group-item-action">A fourth button item</button>
<button type="button" class="list-group-item list-group-item-action" disabled>A disabled button item</button>
</cod-listgroup>
`;

export const Flushed = () => html`
<cod-listgroup data-tag="ul" data-flushed="true">
<li class="list-group-item">An item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>
<li class="list-group-item">A fourth item</li>
<li class="list-group-item">And a fifth one</li>
</cod-listgroup>
`;

export const Numbered = () => html`
<cod-listgroup data-tag="ul" data-numbered="true">
<li class="list-group-item">A list item</li>
<li class="list-group-item">A list item</li>
<li class="list-group-item">A list item</li>
</cod-listgroup>
`;

export const NumberedCustom = () => html`
<cod-listgroup data-tag="ul" data-numbered="true">
<li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <cod-badge data-tag="span" data-background-color="primary" data-text="14"></cod-badge>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <cod-badge data-tag="span" data-background-color="primary" data-text="14"></cod-badge>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Content for list item
    </div>
    <cod-badge data-tag="span" data-background-color="primary" data-text="14"></cod-badge>
  </li>
</cod-listgroup>
`;

export const Horizontal = () => html`
<cod-listgroup data-tag="ul" data-horizontal="true">
<li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
</cod-listgroup>
`;