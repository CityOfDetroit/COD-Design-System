import { html } from 'lit-html';
import '../components/Card/cod-card';
import '../components/Button/cod-button';

export default {
  tags: ['stable'],
  title: 'Components/Card',
  component: 'cod-card',
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        format: 'html',
      },
    },
  },
  argTypes: {
    // No specific properties to control for basic card
    contentText: {
      control: { type: 'text' },
      description: "The card's content text.",
    },
    headerContent: {
      control: { type: 'text' },
      description: "Optional content for the card's header.",
    },
    footerContent: {
      control: { type: 'text' },
      description: "Optional content for the card's footer.",
    },
    imageSrc: {
      control: { type: 'text' },
      description: 'Optional image source URL.',
    },
    imageAlt: {
      control: { type: 'text' },
      description: 'Alt text for the image (if used).',
    },
    width: {
      control: { type: 'text' },
      description: 'Optional explicit width for the card.',
    },
  },
  args: {
    contentText: 'Card content goes here.',
    headerContent: '',
    footerContent: '',
    imageSrc: '',
    imageAlt: '',
    width: '300px',
  },
};

// Template for the usage story with controls
const Template = (args) => {
  return html`
    <style>
      .card-example {
        max-width: ${args.width};
      }
      .card-example [slot='header'] {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .card-example [slot='footer'] {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    </style>
    <cod-card class="card-example">
      ${args.imageSrc
        ? html`<img
            slot="image"
            src="${args.imageSrc}"
            alt="${args.imageAlt}"
          />`
        : ''}
      ${args.headerContent
        ? html`<div slot="header">${args.headerContent}</div>`
        : ''}
      ${args.contentText}
      ${args.footerContent
        ? html`<div slot="footer">${args.footerContent}</div>`
        : ''}
    </cod-card>
  `;
};

export const Usage = Template.bind({});
Usage.args = {
  contentText: 'This card can be customized using the controls below.',
  headerContent: 'Card Header',
  footerContent: 'Card Footer',
  imageSrc:
    'https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
  imageAlt:
    'A kitten sits patiently between a terracotta pot and decorative grasses',
  width: '300px',
};
Usage.tags = ['!dev'];

export const BasicCard = () => html`
  <cod-card class="card-basic">
    This is just a basic card. No image, no header, and no footer. Just your
    content.
  </cod-card>

  <style>
    .card-basic {
      max-width: 300px;
    }
  </style>
`;

BasicCard.storyName = 'Basic Card';
BasicCard.parameters = {
  docs: {
    description: {
      story:
        "Basic cards aren't very exciting, but they can display any content you want them to.",
    },
  },
};

export const CardWithHeader = () => html`
  <cod-card class="card-header">
    <div slot="header">Header Title</div>

    This card has a header. You can put all sorts of things in it!
  </cod-card>

  <style>
    .card-header {
      max-width: 300px;
    }

    .card-header [slot='header'] {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .card-header h3 {
      margin: 0;
    }
  </style>
`;

CardWithHeader.storyName = 'Card with Header';
CardWithHeader.parameters = {
  docs: {
    description: {
      story: 'Headers can be used to display titles and more.',
    },
  },
};

export const CardWithFooter = () => html`
  <cod-card class="card-footer">
    This card has a footer. You can put all sorts of things in it!

    <div slot="footer">
      <cod-rating></cod-rating>
      <cod-button variant="primary">Preview</cod-button>
    </div>
  </cod-card>

  <style>
    .card-footer {
      max-width: 300px;
    }

    .card-footer [slot='footer'] {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  </style>
`;

CardWithFooter.storyName = 'Card with Footer';
CardWithFooter.parameters = {
  docs: {
    description: {
      story:
        'Footers can be used to display actions, summaries, or other relevant content.',
    },
  },
};

export const CardWithImage = () => html`
  <cod-card class="card-image">
    <img
      slot="image"
      src="https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
      alt="A kitten walks towards camera on top of pallet."
    />
    This is a kitten, but not just any kitten. This kitten likes walking along
    pallets.
  </cod-card>

  <style>
    .card-image {
      max-width: 300px;
    }
  </style>
`;

CardWithImage.storyName = 'Card with Image';
CardWithImage.parameters = {
  docs: {
    description: {
      story:
        'Cards accept an `image` slot. The image is displayed atop the card and stretches to fit.',
    },
  },
};

export const CompleteCard = () => html`
  <cod-card class="card-overview">
    <img
      slot="image"
      src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
      alt="A kitten sits patiently between a terracotta pot and decorative grasses."
    />

    <div slot="header">
      <h3>Mittens</h3>
    </div>

    This kitten is as cute as he is playful. Bring him home today!<br />
    <small>6 weeks old</small>

    <div slot="footer">
      <cod-button variant="primary">More Info</cod-button>
      <cod-rating></cod-rating>
    </div>
  </cod-card>

  <style>
    .card-overview {
      max-width: 300px;
    }

    .card-overview small {
      color: var(--cod-color-neutral-500);
    }

    .card-overview [slot='footer'] {
      display: flex;
      justify-content: end;
      align-items: center;
    }

    .card-overview [slot='header'] h3 {
      margin: 0;
    }
  </style>
`;

CompleteCard.storyName = 'Complete Card';
CompleteCard.parameters = {
  docs: {
    description: {
      story:
        'This example shows a card with all available slots: image, header, default content, and footer.',
    },
  },
};

export const CardGroup = () => html`
  <div class="card-group" style="max-width: 800px;">
    <cod-card>
      <img
        slot="image"
        src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
        alt="A small kitten"
      />
      <div slot="header">Card One</div>
      First card in a card group.
      <div slot="footer">
        <cod-button variant="primary" size="small">Action</cod-button>
      </div>
    </cod-card>

    <cod-card>
      <img
        slot="image"
        src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
        alt="Another kitten"
      />
      <div slot="header">Card Two</div>
      Second card in a card group.
      <div slot="footer">
        <cod-button variant="primary" size="small">Action</cod-button>
      </div>
    </cod-card>

    <cod-card>
      <img
        slot="image"
        src="https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?q=80&w=1992&auto=format&fit=crop"
        alt="Yet another kitten"
      />
      <div slot="header">Card Three</div>
      Third card in a card group.
      <div slot="footer">
        <cod-button variant="primary" size="small">Action</cod-button>
      </div>
    </cod-card>
  </div>

  <style>
    .card-group {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .card-group cod-card {
      flex: 1 0 250px;
    }
  </style>
`;

CardGroup.storyName = 'Card Group';
CardGroup.parameters = {
  docs: {
    description: {
      story:
        'Cards can be arranged in groups or grids using flex or grid layouts.',
    },
  },
};
