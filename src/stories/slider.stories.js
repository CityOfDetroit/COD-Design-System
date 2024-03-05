import { html } from 'lit-html';
import img1 from './assets/example-image.svg';
import img2 from './assets/example-image2.svg';
import '../components/organisms/Slider/cod-slider';

export default {
  title: 'Components/Organisms/Slider',
};

export const Basic = () => html`
  <cod-slider
    label-text="Use the slider to control the visibility of the two images."
  >
    <img
      slot="image-1"
      alt="A friendly illustrated cloud character with eyes on a red-pink background."
      src="${img1}"
      width="1600"
      height="900"
    />
    <img
      slot="image-2"
      alt="A friendly illustrated cloud character with eyes surrounded by a variety of icons (including check marks, stars, code brackets, buttons, hearts, a checkbox, and many more) on a blue background."
      src="${img2}"
      width="1600"
      height="900"
    />
  </cod-slider>
`;
