import { html } from 'lit-html';
import '../components/ProfileCard/cod-profile-card';
import { expect } from '@storybook/test';

export default {
  tags: ['stable', 'autodocs'],
  title: 'Components/ProfileCard',
  argTypes: {
    src: { control: 'text', name: 'Image Source' },
    name: { control: 'text', name: 'Name' },
    titlePrimary: { control: 'text', name: 'Primary Title' },
    titleSecondary: { control: 'text', name: 'Secondary Title' },
    href: { control: 'text', name: 'Profile Link' },
  },
};

export const Default = (args) => html`
  <cod-profile-card src=${args.src} href=${args.href}>
    <span slot="name">${args.name}</span>
    <span slot="title-primary">${args.titlePrimary}</span>
    <span slot="title-secondary">${args.titleSecondary}</span>
  </cod-profile-card>
`;

Default.args = {
  src: 'https://placehold.co/400',
  name: 'Jane Doe',
  titlePrimary: 'Frontend Engineer',
  titleSecondary: 'Frontend Developer',
  href: 'https://example.com',
};
// Login needed to run tests now?
// export const Test = {
//   tags: ['!dev'],
//   render: () => html`
//     <cod-profile-card
//       image-src="https://placehold.co/400"
//       link-href="https://example.com"
//     >
//       <span slot="name">Jane Doe</span>
//       <span slot="title-primary">Frontend Engineer</span>
//       <span slot="title-secondary">Frontend Developer</span>
//     </cod-profile-card>
//   `,
//   play: async ({ canvasElement }) => {
//     const profileCard = canvasElement.querySelector('cod-profile-card');
//     const shadow = profileCard.shadowRoot;

//     // ===== TEST 1: Image Presence Test =====
//     const img = shadow.querySelector('.profile-image');
//     expect(img).not.toBeNull();
//     expect(img.tagName).toBe('IMG');
//     expect(img.src).toContain('https://placehold.co/400');

//     // ===== TEST 2: Slot Content Test =====
//     const nameSlot = shadow.querySelector('slot[name="name"]');
//     const titlePrimarySlot = shadow.querySelector('slot[name="title-primary"]');
//     const titleSecondarySlot = shadow.querySelector(
//       'slot[name="title-secondary"]',
//     );

//     // Check that slots exist
//     expect(nameSlot).not.toBeNull();
//     expect(titlePrimarySlot).not.toBeNull();
//     expect(titleSecondarySlot).not.toBeNull();

//     // Check slot content
//     const nameNodes = nameSlot.assignedNodes({ flatten: true });
//     const titlePrimaryNodes = titlePrimarySlot.assignedNodes({ flatten: true });
//     const titleSecondaryNodes = titleSecondarySlot.assignedNodes({
//       flatten: true,
//     });

//     expect(nameNodes.length).toBeGreaterThan(0);
//     expect(titlePrimaryNodes.length).toBeGreaterThan(0);
//     expect(titleSecondaryNodes.length).toBeGreaterThan(0);

//     expect(nameNodes[0].textContent).toBe('Jane Doe');
//     expect(titlePrimaryNodes[0].textContent).toBe('Frontend Engineer');
//     expect(titleSecondaryNodes[0].textContent).toBe('Frontend Developer');

//     // ===== TEST 3: Link Element Test =====
//     const link = shadow.querySelector('.profile-card');
//     expect(link).not.toBeNull();
//     expect(link.tagName).toBe('A');

//     // Verify the href attribute
//     expect(link.hasAttribute('href')).toBe(true);
//     expect(link.getAttribute('href')).toBe(profileCard.getAttribute('link-href'));

//     // Verify the target and rel attributes
//     expect(link.getAttribute('target')).toBe('_blank');
//     expect(link.getAttribute('rel')).toBe('noopener noreferrer');

//     // ===== TEST 4: Error Handling Test =====
//     try {
//       const invalidNameSlotContent = document.createElement('div');
//       nameSlot.appendChild(invalidNameSlotContent);
//       throw new Error(
//         'Expected an error to be thrown for invalid slot content.',
//       );
//     } catch (error) {
//       expect(error.message).toContain(
//         'ProfileCard: The "name" slot should contain either a <span> or an <a> element.',
//       );
//     }
//   },
// };