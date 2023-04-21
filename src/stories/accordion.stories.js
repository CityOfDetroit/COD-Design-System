import { html } from 'lit-html';
import '../components/atoms/AccordionHeader/cod-accordion-header';
import '../components/atoms/AccordionBody/cod-accordion-body';
import '../components/atoms/AccordionItem/cod-accordion-item';
import '../components/molecules/Accordion/cod-accordion';

export default {
  title: 'COD/Molecules/Accordion',
};

export const Basic = () => html`
<cod-accordion
  data-id="accordionExample">
  <cod-accordion-item>
    <cod-accordion-header>
        <span>Accordion Item #1</span>
    </cod-accordion-header>
    <cod-accordion-body>
        <p><strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</p>
    </cod-accordion-body>
  </cod-accordion-item>
  <cod-accordion-item>
    <cod-accordion-header>
        <span>Accordion Item #2</span>
    </cod-accordion-header>
    <cod-accordion-body>
        <p><strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</p>
    </cod-accordion-body>
  </cod-accordion-item>
  <cod-accordion-item>
    <cod-accordion-header>
        <span>Accordion Item #3</span>
    </cod-accordion-header>
    <cod-accordion-body>
        <p><strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</p>
    </cod-accordion-body>
  </cod-accordion-item>
</cod-accordion>
`;

export const Flush = () => html`
<cod-accordion
  data-id="accordionFlushExample" data-flush="true">
  <cod-accordion-item>
    <cod-accordion-header>
        <span>Accordion Item #1</span>
    </cod-accordion-header>
    <cod-accordion-body>
        <p><strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</p>
    </cod-accordion-body>
  </cod-accordion-item>
  <cod-accordion-item>
    <cod-accordion-header>
        <span>Accordion Item #2</span>
    </cod-accordion-header>
    <cod-accordion-body>
        <p><strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</p>
    </cod-accordion-body>
  </cod-accordion-item>
  <cod-accordion-item>
    <cod-accordion-header>
        <span>Accordion Item #3</span>
    </cod-accordion-header>
    <cod-accordion-body>
        <p><strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</p>
    </cod-accordion-body>
  </cod-accordion-item>
</cod-accordion>
`;

export const Custom = () => html`
<cod-accordion
  data-id="accordionFlushExample" data-flush="true">
  <cod-accordion-item>
    <cod-accordion-header data-extra-classes="bg-info text-light">
        <span>Accordion Item #1</span>
    </cod-accordion-header>
    <cod-accordion-body data-extra-classes="bg-success">
        <p><strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</p>
    </cod-accordion-body>
  </cod-accordion-item>
  <cod-accordion-item>
    <cod-accordion-header data-extra-classes="bg-warning text-dark">
        <span>Accordion Item #2</span>
    </cod-accordion-header>
    <cod-accordion-body>
        <p><strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</p>
    </cod-accordion-body>
  </cod-accordion-item>
  <cod-accordion-item>
    <cod-accordion-header data-extra-classes="bg-danger text-light">
        <span>Accordion Item #3</span>
    </cod-accordion-header>
    <cod-accordion-body>
        <p><strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</p>
    </cod-accordion-body>
  </cod-accordion-item>
</cod-accordion>
`;