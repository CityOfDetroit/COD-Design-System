import { html } from 'lit-html';
import '../components/atoms/CarouselItem/cod-carousel-item';
import '../components/atoms/CarouselCaption/cod-carousel-caption';
import '../components/organisms/Carousel/cod-carousel';

export default {
  title: 'Components/Organisms/Carousel',
};

export const Basic = () => html`
<cod-carousel data-id="carouselExample">
    <cod-carousel-item data-active="true">
        <img src="https://placehold.co/800x400/000000/FFF" class="d-block w-100" alt="...">
    </cod-carousel-item>
    <cod-carousel-item>
        <img src="https://placehold.co/800x400/a9a9a9/fff" class="d-block w-100" alt="...">
    </cod-carousel-item>
    <cod-carousel-item>
        <img src="https://placehold.co/800x400/a3a3a3/000" class="d-block w-100" alt="...">
    </cod-carousel-item>
</cod-carousel>
`;

export const indicator = () => html`
<cod-carousel data-id="carouselExampleIndicators" data-indicator="true">
    <cod-carousel-item data-active="true">
        <img src="https://placehold.co/800x400/000000/FFF" class="d-block w-100" alt="...">
    </cod-carousel-item>
    <cod-carousel-item>
        <img src="https://placehold.co/800x400/a9a9a9/fff" class="d-block w-100" alt="...">
    </cod-carousel-item>
    <cod-carousel-item>
        <img src="https://placehold.co/800x400/a3a3a3/000" class="d-block w-100" alt="...">
    </cod-carousel-item>
</cod-carousel>
`;

export const Caption = () => html`
<cod-carousel data-id="carouselExampleCaptions" data-indicator="true">
    <cod-carousel-item data-active="true">
        <img src="https://placehold.co/800x400/000000/FFF" class="d-block w-100" alt="...">
        <cod-carousel-caption>
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
        </cod-carousel-caption>
    </cod-carousel-item>
    <cod-carousel-item>
        <img src="https://placehold.co/800x400/a9a9a9/fff" class="d-block w-100" alt="...">
        <cod-carousel-caption>
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
        </cod-carousel-caption>
    </cod-carousel-item>
    <cod-carousel-item>
        <img src="https://placehold.co/800x400/a3a3a3/000" class="d-block w-100" alt="...">
        <cod-carousel-caption>
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
        </cod-carousel-caption>
    </cod-carousel-item>
</cod-carousel>
`;

export const Crossfade = () => html`
<cod-carousel data-id="carouselExampleFade" data-crossfade="true">
    <cod-carousel-item data-active="true">
        <img src="https://placehold.co/800x400/000000/FFF" class="d-block w-100" alt="...">
    </cod-carousel-item>
    <cod-carousel-item>
        <img src="https://placehold.co/800x400/a9a9a9/fff" class="d-block w-100" alt="...">
    </cod-carousel-item>
    <cod-carousel-item>
        <img src="https://placehold.co/800x400/a3a3a3/000" class="d-block w-100" alt="...">
    </cod-carousel-item>
</cod-carousel>
`;

export const Dark = () => html`
<cod-carousel data-id="carouselExampleDark" data-extra-classes="carousel-dark">
    <cod-carousel-item data-active="true">
    <img src="https://placehold.co/800x400/a3a3a3/FFF" class="d-block w-100" alt="...">
    <cod-carousel-caption data-extra-classes="text-dark">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
    </cod-carousel-caption>
    </cod-carousel-item>
    <cod-carousel-item>
    <img src="https://placehold.co/800x400/a9a9a9/fff" class="d-block w-100" alt="...">
    <cod-carousel-caption data-extra-classes="text-dark">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
    </cod-carousel-caption>
    </cod-carousel-item>
    <cod-carousel-item>
    <img src="https://placehold.co/800x400/a3a3a3/000" class="d-block w-100" alt="...">
    <cod-carousel-caption data-extra-classes="text-dark">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
    </cod-carousel-caption>
    </cod-carousel-item>
</cod-carousel>
`;