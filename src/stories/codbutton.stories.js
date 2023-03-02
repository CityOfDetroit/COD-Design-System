import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import './codbutton';

export default {
  title: 'COD/Atoms/Button',
  argTypes: {
    primary: {
      control: { type: 'boolean'},
      defaultValue: true,
    },
    backgroundColor: { 
      control: { type: 'select' },
      options: ['color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-light', 'color-dark'],
      defaultValue: 'color-1'
    },
    onClick: { action: 'onClick' },
    size: {
      control: { type: 'select' },
      options: ['xsmall', 'small', 'medium', 'large'],
      defaultValue: 'medium',
    },
    shape: {
      control: { type: 'select' },
      options: ['fluid', 'square'],
      defaultValue: 'fluid',
    },
    hover: {
      control: {type: 'boolean'},
      defaultValue: true,
    }
  },
};
// Template
const Template = (args) => {
  const btn = document.createElement('cod-button');
  btn.addEventListener('click', (e)=>{
    args.onclick(e)
  })
  btn.setAttribute('data-primary', args.primary);
  btn.setAttribute('data-label', args.label);
  btn.setAttribute('data-size', args.size);
  btn.setAttribute('data-background-color', args.backgroundColor);
  btn.setAttribute('data-img', (args.img) ? args.img : '');
  btn.setAttribute('data-img-alt', (args.imgAlt) ? args.imgAlt : '');
  btn.setAttribute('data-hover', args.hover);
  btn.setAttribute('data-shape', args.shape);
  btn.setAttribute('role', args.role);
  return btn;
}

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: 'Secondary',
};

export const NoHover = Template.bind({});
NoHover.args = {
  primary: true,
  label: 'Primary',
  hover: false
};

export const Image = Template.bind({});
Image.args = {
  primary: true,
  label: 'Image',
  backgroundColor: 'color-5',
  img: 'https://detroitmi.gov/sites/detroitmi.localhost/files/2023-02/map.png',
  imgAlt: 'map',
};

export const Square = Template.bind({});
Square.args = {
  primary: true,
  label: 'x',
  shape: 'square',
};

export const SquareImage = Template.bind({});
SquareImage.args = {
  primary: true,
  label: '',
  backgroundColor: 'color-2',
  shape: 'square',
  img: 'https://detroitmi.gov/sites/detroitmi.localhost/files/2023-02/map.png',
  imgAlt: 'map',
};

export const WithInteraction = Template.bind({});
WithInteraction.args = {
  primary: true,
  label: 'Interaction',
  role: 'button',
  onclick: (e) => {console.log(e)}
};

WithInteraction.play = async ({ args, canvasElement }) => {
  // Assigns canvas to the component root element
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button'));
  await expect(console.log);
}