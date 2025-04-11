import { html } from 'lit-html';
import '../components/ProfileCard/cod-profile-card';
import { expect } from '@storybook/test';

export default {
  tags: ['stable'],
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

export const Test = {
  render: () => html`
    <cod-profile-card
      src="https://placehold.co/400"
      href="https://example.com"
    >
      <span slot="name">Jane Doe</span>
      <span slot="title-primary">Frontend Engineer</span>
      <span slot="title-secondary">Frontend Developer</span>
    </cod-profile-card>
  `,
  
  parameters: {
    test: {
      // Tell Storybook to ignore unhandled errors for this test
      dangerouslyIgnoreUnhandledErrors: true
    }
  },
  
  play: async ({ canvasElement }) => {
    const profileCard = canvasElement.querySelector('cod-profile-card');
    const shadow = profileCard.shadowRoot;
    
    // ===== TEST 1: Image Presence Test =====
    const img = shadow.querySelector('.profile-image');
    expect(img).not.toBeNull();
    expect(img.tagName).toBe('IMG');
    expect(img.src).toContain('https://placehold.co/400');
    
    // ===== TEST 2: Slot Content Test =====
    const nameSlot = shadow.querySelector('slot[name="name"]');
    const titlePrimarySlot = shadow.querySelector('slot[name="title-primary"]');
    const titleSecondarySlot = shadow.querySelector(
      'slot[name="title-secondary"]',
    );
    
    // Check that slots exist
    expect(nameSlot).not.toBeNull();
    expect(titlePrimarySlot).not.toBeNull();
    expect(titleSecondarySlot).not.toBeNull();
    
    // Check slot content
    const nameNodes = nameSlot.assignedNodes({ flatten: true });
    const titlePrimaryNodes = titlePrimarySlot.assignedNodes({ flatten: true });
    const titleSecondaryNodes = titleSecondarySlot.assignedNodes({
      flatten: true,
    });
    
    expect(nameNodes.length).toBeGreaterThan(0);
    expect(titlePrimaryNodes.length).toBeGreaterThan(0);
    expect(titleSecondaryNodes.length).toBeGreaterThan(0);
    expect(nameNodes[0].textContent).toBe('Jane Doe');
    expect(titlePrimaryNodes[0].textContent).toBe('Frontend Engineer');
    expect(titleSecondaryNodes[0].textContent).toBe('Frontend Developer');
    
    // ===== TEST 3: Link Element Test =====
    const link = shadow.querySelector('.profile-card');
    expect(link).not.toBeNull();
    expect(link.tagName).toBe('A');
    
    // Verify the href attribute
    expect(link.hasAttribute('href')).toBe(true);
    expect(link.getAttribute('href')).toBe(profileCard.getAttribute('href'));
    
    // Verify the target and rel attributes
    expect(link.getAttribute('target')).toBe('_blank');
    expect(link.getAttribute('rel')).toBe('noopener noreferrer');

    // ===== TEST 4: Error Handling Test =====
// We need to test that the validation function works directly
const testValidationLogic = () => {
  // 1. Create a component instance
  const testCard = document.createElement('cod-profile-card');
  document.body.appendChild(testCard);
  
  // 2. Get a reference to the component's validation method
  const validateMethod = testCard._validateSlotContent;
  
  // 3. Create an invalid element and add it to the slot
  const invalidElement = document.createElement('div');
  invalidElement.slot = "name";
  invalidElement.textContent = "Invalid Element";
  testCard.appendChild(invalidElement);
  
  // 4. Try to validate manually and expect an error
  try {
    // Call validation directly
    testCard._validateSlotContent();
    
    // If we get here, the validation didn't throw an error (test should fail)
    expect(false).toBe(true, 'Expected validation error was not thrown');
  } catch (error) {
    // This is what we expect - validation should throw an error
    expect(error.message).toContain(
      'ProfileCard: The "name" slot should contain either a <span> or an <a> element.'
    );
  } finally {
    // Clean up
    document.body.removeChild(testCard);
  }
};

// Run the validation test
testValidationLogic();
  }
};