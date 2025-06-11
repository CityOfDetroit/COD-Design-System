import '../../stable/components/Linktray/cod-linktray';
import { html } from 'lit-html';

export default {
  tags: ['stable'],
  title: 'Components/Linktray',
};

export const Linktray = {
  tags: ['autodocs'],
  render: () => html`
    <style>
        .linktray [slot='tray-title'] { font-size: 20px; font-weight: 700;}

      }
    </style>
    <cod-linktray class="linktray">
      <span slot="tray-title"> More from Mayor's Office </span>

      <a slot="tray-link" href="https://www.example.com">State of the city</a>
      <a slot="tray-link" href="https://www.example.com">Properties</a>
      <a slot="tray-link" href="https://www.example.com">Special Events</a>
      <a slot="tray-link" href="https://www.example.com">Correspondence</a>
      <a slot="tray-link" href="https://www.example.com"
        >Renew Detroit Home Repair Program</a
      >
      <a slot="tray-link" href="https://www.example.com"
        >Michigan State Fair Grounds Development</a
      >
      <a slot="tray-link" href="https://www.example.com"
        >Detroit Neighborhood Initiatve</a
      >
      <a slot="tray-link" href="https://www.example.com">LEAN</a>
      <a slot="tray-link" href="https://www.example.com"
        >Detroit Opportunities</a
      >
      <a slot="tray-link" href="https://www.example.com">Mayor's Help Desk</a>
      <a slot="tray-link" href="https://www.example.com">Executive Orders</a>
    </cod-linktray>
  `,
};

// Slots ----- tray title ---- links
// target tray body to resize ------ mobile 1 column ---- DT 3 col
//      Grid        2 body size options - V or H
//          child depts, related dept, More from this dept   (Depts / More)
//  Col, if more than 10? links
// grid-template-columns: repeat(auto-fit,minmax(132px, 1fr));
//   grid-template-columns: 1fr 1fr 1fr;
// grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

// https://www.w3schools.com/css/css3_flexbox_responsive.asp
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement
