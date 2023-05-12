import { html } from 'lit-html';
import '../components/atoms/TableHeader/cod-table-header';
import '../components/atoms/TableBody/cod-table-body';
import '../components/atoms/TableRow/cod-table-row';
import '../components/atoms/TableCell/cod-table-cell';
import '../components/atoms/TableCellHeader/cod-table-cell-header';
import '../components/organisms/Table/cod-table';

export default {
  title: 'COD/Organisms/Table',
};

export const Basic = () => html`
<cod-table data-id="basicTable">
    <cod-table-header>
        <cod-table-row>
        <cod-table-cell-header scope="col">#</cod-table-cell-header>
        <cod-table-cell-header scope="col">First</cod-table-cell-header>
        <cod-table-cell-header scope="col">Last</cod-table-cell-header>
        <cod-table-cell-header scope="col">Handle</cod-table-cell-header>
        </cod-table-row>
    </cod-table-header>
    <cod-table-body>
        <cod-table-row>
        <cod-table-cell scope="row">1</cod-table-cell>
        <cod-table-cell>Mark</cod-table-cell>
        <cod-table-cell>Otto</cod-table-cell>
        <cod-table-cell>@mdo</cod-table-cell>
        </cod-table-row>
        <cod-table-row>
        <cod-table-cell scope="row">2</cod-table-cell>
        <cod-table-cell>Jacob</cod-table-cell>
        <cod-table-cell>Thornton</cod-table-cell>
        <cod-table-cell>@fat</cod-table-cell>
        </cod-table-row>
        <cod-table-row>
        <cod-table-cell scope="row">3</cod-table-cell>
        <cod-table-cell colspan="2">Larry the Bird</cod-table-cell>
        <cod-table-cell>@twitter</cod-table-cell>
        </cod-table-row>
    </cod-table-body>
</cod-table>
`;

export const StripedRows = () => html`
<cod-table data-id="striped-row" data-striped-row="true">
    <cod-table-header>
        <cod-table-row>
        <cod-table-cell-header scope="col">#</cod-table-cell-header>
        <cod-table-cell-header scope="col">First</cod-table-cell-header>
        <cod-table-cell-header scope="col">Last</cod-table-cell-header>
        <cod-table-cell-header scope="col">Handle</cod-table-cell-header>
        </cod-table-row>
    </cod-table-header>
    <cod-table-body>
        <cod-table-row>
        <cod-table-cell scope="row">1</cod-table-cell>
        <cod-table-cell>Mark</cod-table-cell>
        <cod-table-cell>Otto</cod-table-cell>
        <cod-table-cell>@mdo</cod-table-cell>
        </cod-table-row>
        <cod-table-row>
        <cod-table-cell scope="row">2</cod-table-cell>
        <cod-table-cell>Jacob</cod-table-cell>
        <cod-table-cell>Thornton</cod-table-cell>
        <cod-table-cell>@fat</cod-table-cell>
        </cod-table-row>
        <cod-table-row>
        <cod-table-cell scope="row">3</cod-table-cell>
        <cod-table-cell colspan="2">Larry the Bird</cod-table-cell>
        <cod-table-cell>@twitter</cod-table-cell>
        </cod-table-row>
    </cod-table-body>
</cod-table>
`;