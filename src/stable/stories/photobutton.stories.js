import { html } from 'lit-html';
import '../components/PhotoButton/cod-photo-button';
import '../../experimental/components/atoms/Icon/cod-icon';

export default {
  tags: ['stable'],
  title: 'Components/Photo Button',
  component: 'cod-photo-button',
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        format: 'html',
      },
    },
  },
  argTypes: {
    titleText: {
      control: { type: 'text' },
      description: 'A title for the photo button.',
    },
    subtitleText: {
      control: { type: 'text' },
      description: 'A subtitle for the photo button.',
    },
    href: {
      control: { type: 'text' },
      description: 'A link for the photo button.',
    },
    imageSrc: {
      control: { type: 'text' },
      description: 'Image source URL.',
    },
    imageAlt: {
      control: { type: 'text' },
      description: 'Alt text for the image.',
    },
    width: {
      control: { type: 'text' },
      description: 'Optional explicit width for the card.',
    },
  },
  args: {
    titleText: 'The City Solar Program',
    subtitleText: "City's Solar Plans",
    href: 'https://www.example.com',
    imageSrc: '',
    imageAlt: '',
    width: '300px',
  },
};

// Template for the usage story with controls
const Template = (args) => {
  return html`
    <cod-photo-button
      class="photo-button-example"
      href="${args.href}"
      target="_blank"
      rel="noopener noreferrer"
    >
      ${args.imageSrc
        ? html`<img
            slot="image"
            src="${args.imageSrc}"
            alt="${args.imageAlt}"
          />`
        : ''}
      <div>
        <p class="subtitle">${args.subtitleText}</p>
        <div class="program-row">
          <h2 class="title">${args.titleText}</h2>
          <div class="arrow-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-arrow-right-circle"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
              />
            </svg>
          </div>
        </div>
      </div>
    </cod-photo-button>
    <style>
      .photo-button-example {
        max-width: ${args.width};
      }
      .subtitle {
        font-size: 20px;
        font-weight: 400;
        margin: 0 0 0.5rem 0;
        color: white;
      }

      .program-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .title {
        font-size: 24px;
        font-weight: 700;
        margin: 0;
        color: #feb70d;
      }

      .arrow-circle {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        margin-left: 0.5rem;
      }
    </style>
  `;
};

export const Usage = Template.bind({});
Usage.args = {
  imageSrc:
    'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  imageAlt:
    'Solar panels sit in a field with a blue sky and clouds in the background.',
  width: '300px',
};
Usage.tags = ['!dev'];

export const BasicPhotoButton = () => html`
  <cod-photo-button
    class="photo-btn-basic"
    href="https://www.example.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
      alt="Solar panels sit in a field with a blue sky and clouds in the background."
      slot="image"
    />
    This is just a basic card. No fancy styles or content layout. Just your
    content.
  </cod-photo-button>

  <style>
    .photo-btn-basic {
      max-width: 300px;
    }
  </style>
`;

BasicPhotoButton.storyName = 'Basic Photo Button';
BasicPhotoButton.parameters = {
  docs: {
    description: {
      story:
        "Basic cards aren't very exciting, but they can display any content you want them to.",
    },
  },
};
