import { html } from 'lit-html';
import '../components/organisms/Map/cod-map';

export default {
  title: 'Components/Organisms/Map',
};

export const loaded = () => html`<cod-map data-location="{&quot;address&quot;:&quot;1104 Military St, Detroit, MI, 48209&quot;,&quot;location&quot;:{&quot;x&quot;:-83.103111,&quot;y&quot;:42.31103400000001}}" data-map-state="loaded"></cod-map>`;