import { html } from 'lit-html';
import '../components/atoms/TableHeader/cod-table-header';
import '../components/atoms/TableBody/cod-table-body';
import '../components/atoms/TableRow/cod-table-row';
import '../components/atoms/TableCell/cod-table-cell';
import '../components/atoms/TableCellHeader/cod-table-cell-header';
import '../components/organisms/Table/cod-table';

export default {
  title: 'Components/Organisms/Table',
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

export const StripedColumns = () => html`
<cod-table data-id="striped-col" data-striped-col="true">
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

export const Hover = () => html`
<cod-table data-id="table-hover" data-hover="true">
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

export const Dark = () => html`
<cod-table data-id="table-dark" data-hover="true" data-extra-classes="table-dark">
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

export const Custom = () => html`
<cod-table data-id="table-custom-1" data-hover="true" data-extra-classes="bg-success">
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

<cod-table data-id="table-custom-2" data-hover="true" data-extra-classes="bg-warning">
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

export const Responsive = () => html`
<cod-table data-id="table-responsive" data-legacy-responsive="true">
    <cod-table-header>
        <cod-table-row>
        <cod-table-cell-header scope="col">#</cod-table-cell-header>
        <cod-table-cell-header scope="col">Table heading</cod-table-cell-header>
        <cod-table-cell-header scope="col">Table heading</cod-table-cell-header>
        <cod-table-cell-header scope="col">Table heading</cod-table-cell-header>
        <cod-table-cell-header scope="col">Table heading</cod-table-cell-header>
        <cod-table-cell-header scope="col">Table heading</cod-table-cell-header>
        <cod-table-cell-header scope="col">Table heading</cod-table-cell-header>
        <cod-table-cell-header scope="col">Table heading</cod-table-cell-header>
        <cod-table-cell-header scope="col">Table heading</cod-table-cell-header>
        <cod-table-cell-header scope="col">Table heading</cod-table-cell-header>
        <cod-table-cell-header scope="col">Table heading</cod-table-cell-header>
        <cod-table-cell-header scope="col">Table heading</cod-table-cell-header>
        <cod-table-cell-header scope="col">Table heading</cod-table-cell-header>
        </cod-table-row>
    </cod-table-header>
    <cod-table-body>
        <cod-table-row>
        <cod-table-cell scope="row">1</cod-table-cell>
        <cod-table-cell>Table cell 1</cod-table-cell>
        <cod-table-cell>Table cell 2</cod-table-cell>
        <cod-table-cell>Table cell 3</cod-table-cell>
        <cod-table-cell>Table cell 4</cod-table-cell>
        <cod-table-cell>Table cell 5</cod-table-cell>
        <cod-table-cell>Table cell 6</cod-table-cell>
        <cod-table-cell>Table cell 7</cod-table-cell>
        <cod-table-cell>Table cell 8</cod-table-cell>
        <cod-table-cell>Table cell 9</cod-table-cell>
        <cod-table-cell>Table cell 10</cod-table-cell>
        <cod-table-cell>Table cell 11</cod-table-cell>
        <cod-table-cell>Table cell 12</cod-table-cell>
        </cod-table-row>
        <cod-table-row>
        <cod-table-cell scope="row">2</cod-table-cell>
        <cod-table-cell>Table cell 1</cod-table-cell>
        <cod-table-cell>Table cell 2</cod-table-cell>
        <cod-table-cell>Table cell 3</cod-table-cell>
        <cod-table-cell>Table cell 4</cod-table-cell>
        <cod-table-cell>Table cell 5</cod-table-cell>
        <cod-table-cell>Table cell 6</cod-table-cell>
        <cod-table-cell>Table cell 7</cod-table-cell>
        <cod-table-cell>Table cell 8</cod-table-cell>
        <cod-table-cell>Table cell 9</cod-table-cell>
        <cod-table-cell>Table cell 10</cod-table-cell>
        <cod-table-cell>Table cell 11</cod-table-cell>
        <cod-table-cell>Table cell 12</cod-table-cell>
        </cod-table-row>
        <cod-table-row>
        <cod-table-cell scope="row">3</cod-table-cell>
        <cod-table-cell>Table cell 1</cod-table-cell>
        <cod-table-cell>Table cell 2</cod-table-cell>
        <cod-table-cell>Table cell 3</cod-table-cell>
        <cod-table-cell>Table cell 4</cod-table-cell>
        <cod-table-cell>Table cell 5</cod-table-cell>
        <cod-table-cell>Table cell 6</cod-table-cell>
        <cod-table-cell>Table cell 7</cod-table-cell>
        <cod-table-cell>Table cell 8</cod-table-cell>
        <cod-table-cell>Table cell 9</cod-table-cell>
        <cod-table-cell>Table cell 10</cod-table-cell>
        <cod-table-cell>Table cell 11</cod-table-cell>
        <cod-table-cell>Table cell 12</cod-table-cell>
        </cod-table-row>
    </cod-table-body>
</cod-table>
`;