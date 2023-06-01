import { html } from 'lit-html';
import '../components/atoms/CardHeader/cod-card-header';
import '../components/atoms/CardBody/cod-card-body';
import '../components/atoms/CardFooter/cod-card-footer';
import '../components/atoms/CardOverlay/cod-card-overlay';
import '../components/organisms/Card/cod-card';

export default {
  title: 'Components/Organisms/Card',
};

export const Basic = () => html`
<cod-card data-id="card-example" data-width="18em">
<div class="card no-wc" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<img src="https://placehold.co/800x400/000000/FFF" class="card-img-top w-100" alt="...">
    <cod-card-body>
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <cod-button data-primary="true" data-disable="false" data-label="Link" data-background-color="primary" data-img="" data-img-alt="" data-icon="" data-icon-order="" data-icon-size="" data-shape="fluid" data-aria-label="" data-link="https://detroitmi.gov"></cod-button>
    </cod-card-body>
</cod-card>
`;

export const BodyOnly = () => html`
<cod-card data-id="card-body-only">
    <cod-card-body>
    <p>This is some text within a card body.</p>
    </cod-card-body>
</cod-card>
`;

export const TitleTextLinks = () => html`
<cod-card data-id="card-t" data-width="18em">
    <cod-card-body>
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
    </cod-card-body>
</cod-card>
`;

export const KitchenSink = () => html`
<cod-card data-id="card-body-only" data-width="18em">
<img src="https://placehold.co/800x400/000000/FFF" class="card-img-top w-100" alt="...">
<cod-card-body>
<h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</cod-card-body>
<cod-card-body>
<a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
</cod-card-body>
</cod-card>
`;

export const Header = () => html`
<cod-card data-id="card-body-only">
<cod-card-header>
<h5>Featured</h5>
</cod-card-header>
<cod-card-body>
<h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
</cod-card-body>
</cod-card>
`;

export const HeaderFooter = () => html`
<cod-card data-id="card-body-only" data-extra-classes="text-center">
    <cod-card-header>
        <h5>Featured</h5>
    </cod-card-header>
    <cod-card-body>
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </cod-card-body>
    <cod-card-footer>
        <p>2 days ago</p>
    </cod-card-footer>
</cod-card>
`;

export const ImageBottom = () => html`
<cod-card data-id="card-image-bottom" data-width="18em">
    <cod-card-body>
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    </cod-card-body>
    <img src="https://placehold.co/800x400/000000/FFF" class="card-img-bottom w-100" alt="...">
</cod-card>
`;

export const ImageOverlay = () => html`
<cod-card data-id="card-image-bottom" data-extra-classes="text-bg-dark">
    <img src="https://placehold.co/800x400/000000/FFF" class="card-img-top w-100" alt="...">
    <cod-card-overlay>
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small>Last updated 3 mins ago</small></p>
    </cod-card-overlay>
</cod-card>
`;

export const NavigationTabs = () => html`
<cod-card data-id="card-image-bottom" data-extra-classes="text-center">
    <cod-card-header data-extra-classes="pb-0">
        <cod-nav data-tabs="true" data-extra-classes="border-0">
        <a class="nav-link active" aria-current="page" href="#">Active</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link disabled">Disabled</a>
        </cod-nav>
    </cod-card-header>
    <cod-card-body>
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </cod-card-body>
</cod-card>
`;

export const NavigationPills = () => html`
<cod-card data-id="card-image-bottom" data-extra-classes="text-center">
    <cod-card-header>
        <cod-nav data-pills="true">
        <a class="nav-link active" aria-current="page" href="#">Active</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link disabled">Disabled</a>
        </cod-nav>
    </cod-card-header>
    <cod-card-body>
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </cod-card-body>
</cod-card>
`;

export const CardStyles = () => html`
<cod-card data-id="card-primary" data-extra-classes="text-bg-primary" data-width="18em">
    <cod-card-header>
        <span>Header</span>
    </cod-card-header>
    <cod-card-body>
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </cod-card-body>
</cod-card>
<br>
<cod-card data-id="card-secondary" data-extra-classes="text-bg-secondary" data-width="18em">
    <cod-card-header>
        <span>Header</span>
    </cod-card-header>
    <cod-card-body>
    <h5 class="card-title">Secondary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </cod-card-body>
</cod-card>
<br>
<cod-card data-id="card-success" data-extra-classes="text-bg-success" data-width="18em">
    <cod-card-header>
        <span>Header</span>
    </cod-card-header>
    <cod-card-body>
    <h5 class="card-title">Success card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </cod-card-body>
</cod-card>
<br>
<cod-card data-id="card-danger" data-extra-classes="text-bg-danger" data-width="18em">
    <cod-card-header>
        <span>Header</span>
    </cod-card-header>
    <cod-card-body>
    <h5 class="card-title">Danger card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </cod-card-body>
</cod-card>
<br>
<cod-card data-id="card-warning" data-extra-classes="text-bg-warning" data-width="18em">
    <cod-card-header>
        <span>Header</span>
    </cod-card-header>
    <cod-card-body>
    <h5 class="card-title">Warning card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </cod-card-body>
</cod-card>
<br>
<cod-card data-id="card-info" data-extra-classes="text-bg-info" data-width="18em">
    <cod-card-header>
        <span>Header</span>
    </cod-card-header>
    <cod-card-body>
    <h5 class="card-title">Info card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </cod-card-body>
</cod-card>
<br>
<cod-card data-id="card-light" data-extra-classes="text-bg-light" data-width="18em">
    <cod-card-header>
        <span>Header</span>
    </cod-card-header>
    <cod-card-body>
    <h5 class="card-title">Light card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </cod-card-body>
</cod-card>
<br>
<cod-card data-id="card-dark" data-extra-classes="text-bg-dark" data-width="18em">
    <cod-card-header>
        <span>Header</span>
    </cod-card-header>
    <cod-card-body>
    <h5 class="card-title">Dark card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </cod-card-body>
</cod-card>
`;

export const Border = () => html`
<cod-card data-id="card-border-primary" data-extra-classes="border-primary" data-width="18em">
    <cod-card-header>
        <span>Header</span>
    </cod-card-header>
    <cod-card-body>
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </cod-card-body>
</cod-card>
<br>
<cod-card data-id="card-border-secondary" data-extra-classes="border-secondary" data-width="18em">
    <cod-card-header>
        <span>Header</span>
    </cod-card-header>
    <cod-card-body>
    <h5 class="card-title">Secondary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </cod-card-body>
</cod-card>
<br>
<cod-card data-id="card-border-success" data-extra-classes="border-success" data-width="18em">
    <cod-card-header>
        <span>Header</span>
    </cod-card-header>
    <cod-card-body>
    <h5 class="card-title">Success card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </cod-card-body>
</cod-card>
<br>
<cod-card data-id="card-border-danger" data-extra-classes="border-danger" data-width="18em">
    <cod-card-header>
        <span>Header</span>
    </cod-card-header>
    <cod-card-body>
    <h5 class="card-title">Danger card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </cod-card-body>
</cod-card>
<br>
<cod-card data-id="card-border-warning" data-extra-classes="border-warning" data-width="18em">
    <cod-card-header>
        <span>Header</span>
    </cod-card-header>
    <cod-card-body>
    <h5 class="card-title">Warning card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </cod-card-body>
</cod-card>
<br>
<cod-card data-id="card-border-info" data-extra-classes="border-info" data-width="18em">
    <cod-card-header>
        <span>Header</span>
    </cod-card-header>
    <cod-card-body>
    <h5 class="card-title">Info card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </cod-card-body>
</cod-card>
<br>
<cod-card data-id="card-border-light" data-extra-classes="border-light" data-width="18em">
    <cod-card-header>
        <span>Header</span>
    </cod-card-header>
    <cod-card-body>
    <h5 class="card-title">Light card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </cod-card-body>
</cod-card>
<br>
<cod-card data-id="card-border-dark" data-extra-classes="border-dark" data-width="18em">
    <cod-card-header>
        <span>Header</span>
    </cod-card-header>
    <cod-card-body>
    <h5 class="card-title">Dark card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </cod-card-body>
</cod-card>
`;

export const CardGrid = () => html`
<div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col">
        <cod-card data-id="card-grid-1">
        <img src="https://placehold.co/800x400/000000/FFF" class="card-img-top w-100" alt="...">
            <cod-card-body>
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </cod-card-body>
        </cod-card>
    </div>
    <div class="col">
        <cod-card data-id="card-grid-2">
        <img src="https://placehold.co/800x400/000000/FFF" class="card-img-top w-100" alt="...">
            <cod-card-body>
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </cod-card-body>
        </cod-card>
    </div>
    <div class="col">
        <cod-card data-id="card-grid-3">
        <img src="https://placehold.co/800x400/000000/FFF" class="card-img-top w-100" alt="...">
            <cod-card-body>
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </cod-card-body>
        </cod-card>
    </div>
    <div class="col">
        <cod-card data-id="card-grid-4">
        <img src="https://placehold.co/800x400/000000/FFF" class="card-img-top w-100" alt="...">
            <cod-card-body>
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </cod-card-body>
        </cod-card>
    </div>
</div>
`;