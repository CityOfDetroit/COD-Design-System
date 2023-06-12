import { html } from 'lit-html';
import '../components/atoms/PaginationItem/cod-pagination-item';
import '../components/molecules/Pagination/cod-pagination';

export default {
  title: 'Components/Molecules/Pagination',
};

export const Basic = () => html`
<cod-pagination
  data-label="Page navigation example">
  <nav class="no-wc" aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item"><a class="page-link" href="#">Previous</a></li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
  </nav>
  <cod-pagination-item data-url="#" data-text="Previous">
  </cod-pagination-item>
  <cod-pagination-item data-url="#" data-text="1">
  </cod-pagination-item>
  <cod-pagination-item data-url="#" data-text="2">
  </cod-pagination-item>
  <cod-pagination-item data-url="#" data-text="3">
  </cod-pagination-item>
  <cod-pagination-item data-url="#" data-text="Next">
  </cod-pagination-item>
</cod-pagination>
`;

export const Icons = () => html`
<cod-pagination
  data-label="Page navigation example">
  <cod-pagination-item data-url="#" data-special="first" data-label="Previous">
  </cod-pagination-item>
  <cod-pagination-item data-url="#" data-text="1">
  </cod-pagination-item>
  <cod-pagination-item data-url="#" data-text="2">
  </cod-pagination-item>
  <cod-pagination-item data-url="#" data-text="3">
  </cod-pagination-item>
  <cod-pagination-item data-url="#" data-special="last" data-label="Next">
  </cod-pagination-item>
</cod-pagination>
`;

export const DisabledActive = () => html`
<cod-pagination
  data-label="Page navigation example">
  <cod-pagination-item data-url="#" data-text="Previous" data-disabled="true">
  </cod-pagination-item>
  <cod-pagination-item data-url="#" data-text="1">
  </cod-pagination-item>
  <cod-pagination-item data-url="#" data-text="2" data-active="true">
  </cod-pagination-item>
  <cod-pagination-item data-url="#" data-text="3">
  </cod-pagination-item>
  <cod-pagination-item data-url="#" data-text="Next">
  </cod-pagination-item>
</cod-pagination>
`;

export const Sizing = () => html`
<cod-pagination
  data-label="Page navigation example" data-size="lg">
  <cod-pagination-item data-url="#" data-text="1">
  </cod-pagination-item>
  <cod-pagination-item data-url="#" data-text="2">
  </cod-pagination-item>
  <cod-pagination-item data-url="#" data-text="3">
  </cod-pagination-item>
</cod-pagination>
<cod-pagination
  data-label="Page navigation example" data-size="sm">
  <cod-pagination-item data-url="#" data-text="1">
  </cod-pagination-item>
  <cod-pagination-item data-url="#" data-text="2">
  </cod-pagination-item>
  <cod-pagination-item data-url="#" data-text="3">
  </cod-pagination-item>
</cod-pagination>
`;

export const Alignment = () => html`
<cod-pagination
  data-label="Page navigation example" data-extra-classes="justify-content-center">
  <cod-pagination-item data-url="#" data-text="Previous" data-disabled="true">
  </cod-pagination-item>
  <cod-pagination-item data-url="#" data-text="1">
  </cod-pagination-item>
  <cod-pagination-item data-url="#" data-text="2">
  </cod-pagination-item>
  <cod-pagination-item data-url="#" data-text="3">
  </cod-pagination-item>
  <cod-pagination-item data-url="#" data-text="Next">
  </cod-pagination-item>
</cod-pagination>

<cod-pagination
  data-label="Page navigation example" data-extra-classes="justify-content-end">
  <cod-pagination-item data-url="#" data-text="Previous" data-disabled="true">
  </cod-pagination-item>
  <cod-pagination-item data-url="#" data-text="1">
  </cod-pagination-item>
  <cod-pagination-item data-url="#" data-text="2">
  </cod-pagination-item>
  <cod-pagination-item data-url="#" data-text="3">
  </cod-pagination-item>
  <cod-pagination-item data-url="#" data-text="Next">
  </cod-pagination-item>
</cod-pagination>
`;

export const Custom = () => html`
<cod-pagination
  data-label="Page navigation example">
  <cod-pagination-item data-url="#" data-text="Previous" data-extra-classes="text-warning">
  </cod-pagination-item>
  <cod-pagination-item data-url="#" data-text="1">
  </cod-pagination-item>
  <cod-pagination-item data-url="#" data-text="2" data-extra-classes="text-danger">
  </cod-pagination-item>
  <cod-pagination-item data-url="#" data-text="3" data-extra-classes="text-success bg-primary">
  </cod-pagination-item>
  <cod-pagination-item data-url="#" data-text="Next" data-extra-classes="text-secondary bg-dark">
  </cod-pagination-item>
</cod-pagination>
`;