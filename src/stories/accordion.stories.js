import { html } from 'lit-html';
import '../components/atoms/AccordionItem/cod-accordion-item';
import '../components/molecules/Accordion/cod-accordion';

export default {
  title: 'Components/Molecules/Accordion',
};

export const Basic = () => html`
  <cod-accordion data-id="accordionExample1">
    <cod-accordion-item>
      <span slot="header">Accordion Item #1</span>
      <p slot="body">
        <strong>This is the first item's accordion body.</strong> It is shown by
        default, until the collapse plugin adds the appropriate classes that we
        use to style each element. These classes control the overall appearance,
        as well as the showing and hiding via CSS transitions. You can modify
        any of this with custom CSS or overriding our default variables. It's
        also worth noting that just about any HTML can go within the
        <code>.accordion-body</code>, though the transition does limit overflow.
      </p>
    </cod-accordion-item>
    <cod-accordion-item>
      <span slot="header">Accordion Item #2</span>
      <p slot="body">
        <strong>This is the second item's accordion body.</strong> It is hidden
        by default, until the collapse plugin adds the appropriate classes that
        we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit
        overflow.
      </p>
    </cod-accordion-item>
  </cod-accordion>
`;
