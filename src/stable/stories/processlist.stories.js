import { html } from 'lit-html';
import '../components/ProcessList/cod-process-list';
import '../components/ProcessListItem/cod-process-list-item';

export default {
  tags: ['stable'],
  title: 'Components/Process List',
  component: 'cod-process-list',
  parameters: {
    layout: 'padded',
    docs: {
      source: {
        format: 'html',
      },
    },
  },
  argTypes: {
    step1Title: {
      control: { type: 'text' },
      description: 'Title for the first step.',
    },
    step1Content: {
      control: { type: 'text' },
      description: 'Content for the first step.',
    },
    step2Title: {
      control: { type: 'text' },
      description: 'Title for the second step.',
    },
    step2Content: {
      control: { type: 'text' },
      description: 'Content for the second step.',
    },
    step3Title: {
      control: { type: 'text' },
      description: 'Title for the third step.',
    },
    step3Content: {
      control: { type: 'text' },
      description: 'Content for the third step.',
    },
    maxWidth: {
      control: { type: 'text' },
      description: 'Maximum width of the process list.',
    },
  },
  args: {
    step1Title: 'Start a process',
    step1Content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque.',
    step2Title: 'Proceed to the second step',
    step2Content:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis.',
    step3Title: 'Complete the step-by-step process',
    step3Content:
      'Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit.',
    maxWidth: '600px',
  },
};

// Template for the usage story with controls
const Template = (args) => {
  return html`
    <div class="process-list-container" style="max-width: ${args.maxWidth};">
      <cod-process-list>
        <cod-process-list-item>
          <h4 slot="heading">${args.step1Title}</h4>
          <p>${args.step1Content}</p>
        </cod-process-list-item>

        <cod-process-list-item>
          <h4 slot="heading">${args.step2Title}</h4>
          <p>${args.step2Content}</p>
        </cod-process-list-item>

        <cod-process-list-item>
          <h4 slot="heading">${args.step3Title}</h4>
          <p>${args.step3Content}</p>
        </cod-process-list-item>
      </cod-process-list>
    </div>
  `;
};

export const Usage = Template.bind({});
Usage.args = {};
Usage.tags = ['!dev'];

export const Default = () => html`
  <div style="max-width: 600px;">
    <cod-process-list>
      <cod-process-list-item>
        <h4 slot="heading">Start a process</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi
          commodo, ipsum sed pharetra gravida, orci magna rhoncus neque.
        </p>
        <ul>
          <li>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi
            commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id
            pulvinar odio lorem non turpis.
          </li>
          <li>
            Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat
            condimentum.
          </li>
          <li>Aliquam erat volutpat. Sed quis velit.</li>
        </ul>
      </cod-process-list-item>

      <cod-process-list-item>
        <h4 slot="heading">Proceed to the second step</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi
          commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id
          pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id
          velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed
          quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere
          sapien.
        </p>
      </cod-process-list-item>

      <cod-process-list-item>
        <h4 slot="heading">Complete the step-by-step process</h4>
        <p>
          Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat
          condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi.
          Nulla libero. Vivamus pharetra posuere sapien.
        </p>
      </cod-process-list-item>
    </cod-process-list>
  </div>
`;

Default.storyName = 'Default';
Default.parameters = {
  docs: {
    description: {
      story:
        'The default process list displays steps with numbered square indicators and connecting lines.',
    },
  },
};

export const NoTextCustomSizing = () => html`
  <div style="max-width: 600px;">
    <cod-process-list class="custom-sizing-no-text">
      <cod-process-list-item>
        <p
          slot="heading"
          style="font-size: 1.5rem; line-height: 1.2; margin: 0;"
        >
          Start a process.
        </p>
      </cod-process-list-item>

      <cod-process-list-item>
        <p
          slot="heading"
          style="font-size: 1.5rem; line-height: 1.2; margin: 0;"
        >
          Proceed to the second step.
        </p>
      </cod-process-list-item>

      <cod-process-list-item>
        <p
          slot="heading"
          style="font-size: 1.5rem; line-height: 1.2; margin: 0;"
        >
          Complete the step-by-step process.
        </p>
      </cod-process-list-item>
    </cod-process-list>
  </div>
`;

NoTextCustomSizing.storyName = 'No text and custom sizing';
NoTextCustomSizing.parameters = {
  docs: {
    description: {
      story:
        'Process list with only headings and custom sizing for a more minimal appearance.',
    },
  },
};

export const FiveSteps = () => html`
  <div style="max-width: 600px;">
    <cod-process-list>
      <cod-process-list-item>
        <h4 slot="heading">Research requirements</h4>
        <p>
          Understand what permits and documentation you need for your project.
        </p>
      </cod-process-list-item>

      <cod-process-list-item>
        <h4 slot="heading">Gather documents</h4>
        <p>
          Collect all necessary paperwork, including plans, specifications, and
          proof of insurance.
        </p>
      </cod-process-list-item>

      <cod-process-list-item>
        <h4 slot="heading">Submit application</h4>
        <p>
          Complete the application form and submit with all required documents
          and fees.
        </p>
      </cod-process-list-item>

      <cod-process-list-item>
        <h4 slot="heading">Review process</h4>
        <p>
          City staff will review your application and may request additional
          information.
        </p>
      </cod-process-list-item>

      <cod-process-list-item>
        <h4 slot="heading">Receive permit</h4>
        <p>
          Once approved, you'll receive your permit and can begin your project.
        </p>
      </cod-process-list-item>
    </cod-process-list>
  </div>
`;

FiveSteps.storyName = 'Five steps';
FiveSteps.parameters = {
  docs: {
    description: {
      story:
        'A more complex process with five steps showing how the component scales.',
    },
  },
};

export const WithComplexContent = () => html`
  <div style="max-width: 650px;">
    <cod-process-list>
      <cod-process-list-item>
        <h4 slot="heading">Plan your project</h4>
        <p>Before starting, make sure you have:</p>
        <ul>
          <li>
            <strong>Property survey</strong> - Shows exact boundaries and
            easements
          </li>
          <li>
            <strong>Site plan</strong> - Detailed drawing of proposed changes
          </li>
          <li>
            <strong>Budget estimate</strong> - Including materials and labor
            costs
          </li>
        </ul>
        <p>
          <em>Note: Some projects may require additional documentation.</em>
        </p>
      </cod-process-list-item>

      <cod-process-list-item>
        <h4 slot="heading">Submit your application</h4>
        <p>Applications can be submitted:</p>
        <ul>
          <li>
            Online through our
            <a href="#" style="color: #005ea2;">permit portal</a>
          </li>
          <li>In person at City Hall (Monday-Friday, 8AM-5PM)</li>
          <li>
            By mail to: Permits Department, 123 Main St, Detroit, MI 48201
          </li>
        </ul>
        <p>
          <strong>Processing time:</strong> 5-10 business days for standard
          applications.
        </p>
      </cod-process-list-item>

      <cod-process-list-item>
        <h4 slot="heading">Begin construction</h4>
        <p>Once your permit is approved:</p>
        <ol>
          <li>Schedule required inspections</li>
          <li>Post permit in visible location</li>
          <li>Begin work within 6 months</li>
        </ol>
        <p
          style="background: #fcfcfcff; padding: 1rem; border-left: 4px solid #d3d3d3ff; margin-top: 1rem;"
        >
          <strong>Important:</strong> Work must be completed within one year of
          permit issuance.
        </p>
      </cod-process-list-item>
    </cod-process-list>
  </div>
`;

WithComplexContent.storyName = 'With complex content';
WithComplexContent.parameters = {
  docs: {
    description: {
      story:
        'Process list with rich content including lists, links, emphasis, and callout boxes.',
    },
  },
};

export const CustomCounterColors = () => html`
  <div style="max-width: 600px;">
    <cod-process-list>
      <cod-process-list-item class="step-planning">
        <h4 slot="heading">Planning Phase</h4>
        <p>
          Research requirements and gather necessary documentation for your
          project.
        </p>
      </cod-process-list-item>

      <cod-process-list-item class="step-application">
        <h4 slot="heading">Application Phase</h4>
        <p>
          Submit your completed application with all required materials and
          fees.
        </p>
      </cod-process-list-item>

      <cod-process-list-item class="step-review">
        <h4 slot="heading">Review Phase</h4>
        <p>
          City staff will review your submission and may request additional
          information.
        </p>
      </cod-process-list-item>

      <cod-process-list-item class="step-approval">
        <h4 slot="heading">Approval Phase</h4>
        <p>
          Once approved, you'll receive your permit and can begin your project.
        </p>
      </cod-process-list-item>
    </cod-process-list>
  </div>

  <style>
    .step-planning::part(counter) {
      background-color: #dc2626;
      color: white;
    }

    .step-application::part(counter) {
      background-color: #ea580c;
      color: white;
    }

    .step-review::part(counter) {
      background-color: #ca8a04;
      color: white;
    }

    .step-approval::part(counter) {
      background-color: #fff;
      color: black;
    }
  </style>
`;

CustomCounterColors.storyName = 'Custom counter colors';
CustomCounterColors.parameters = {
  docs: {
    description: {
      story:
        'Process list with different colored counter backgrounds for each step using CSS parts.',
    },
  },
};
