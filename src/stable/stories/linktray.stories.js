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
        .linktray [slot='tray-title'] { 
        font-size: 20px; 
        font-weight: 700;
        }
        .linktray [slot='tray-link'] {
        :hover svg {
      transform: translate(3px, 0px);
    }  
          a {
            text-decoration: none !important;
            color: #000 !important;
            }
            }


      }
    </style>
    <cod-linktray class="linktray">
      <span slot="tray-title"> More from Mayor's Office </span>

      <a slot="tray-link" href="https://www.example.com">State of the city</a>
      <a slot="tray-link" href="https://www.example.com">Properties</a>
      <a slot="tray-link" href="https://www.example.com">Special Events</a>
      <a slot="tray-link" href="https://www.example.com">Correspondence</a>
      <a slot="tray-link" href="https://www.example.com">Renew Detroit Home Repair Program</a>
      <a slot="tray-link" href="https://www.example.com">Michigan State Fair Grounds Development</a>
      <a slot="tray-link" href="https://www.example.com">Detroit Neighborhood Initiatve</a>
      <a slot="tray-link" href="https://www.example.com">LEAN</a>
      <a slot="tray-link" href="https://www.example.com">Detroit Opportunities</a>
      <a slot="tray-link" href="https://www.example.com">Mayor's Help Desk</a>
      <a slot="tray-link" href="https://www.example.com">Executive Orders</a>
    </cod-linktray>
  `,
};
