import { html } from 'lit-html';
import '../components/atoms/Breadcrumb/cod-breadcrumb';

export default {
  title: 'COD/Atoms/Breadcrumb',
};

export const Basic = () => html`
<cod-breadcrumb>
<li class="breadcrumb-item active" aria-current="page">Home</li>
</cod-breadcrumb>
<cod-breadcrumb>
<li class="breadcrumb-item"><a href="#">Home</a></li>
<li class="breadcrumb-item active" aria-current="page">Library</li>
</cod-breadcrumb>
<cod-breadcrumb>
<li class="breadcrumb-item"><a href="#">Home</a></li>
<li class="breadcrumb-item"><a href="#">Library</a></li>
<li class="breadcrumb-item active" aria-current="page">Data</li>
</cod-breadcrumb>
`;

export const NoDivider = () => html`
<cod-breadcrumb
data-no-divider="true">
<li class="breadcrumb-item"><a href="#">Home</a></li>
<li class="breadcrumb-item active" aria-current="page">Library</li>
</cod-breadcrumb>
`;

export const SVG = () => html`
<cod-breadcrumb
data-svg-divider="&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;">
<li class="breadcrumb-item"><a href="#">Home</a></li>
<li class="breadcrumb-item active" aria-current="page">Library</li>
</cod-breadcrumb>
`;