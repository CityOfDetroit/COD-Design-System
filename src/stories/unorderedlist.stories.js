import { html } from 'lit-html';
import '../components/atoms/Icon/cod-icon';
import '../components/atoms/UnorderedList/cod-ul';

export default {
  title: 'Components/Atoms/UnorderedList',
  argTypes: {
    icon: {
      description: 'Determines the icon used in the list in place of a list bullet.',
      control: { type: 'select' },
      options: [
        'chevron-right',
        'chevron-right-circle',
        'chevron-right-circle-fill',
        'chevron-left',
        'chevron-left-circle',
        'chevron-left-circle-fill',
        'chevron-up',
        'chevron-up-circle',
        'chevron-up-circle-fill',
        'chevron-down',
        'chevron-down-circle',
        'chevron-down-circle-fill',
        'house',
        'house-fill',
        'exclamation-circle',
        'exclamation-circle-fill',
        'exclamation-triangle',
        'check-circle',
        'check-circle-fill',
        'calendar',
        'calendar-fill',
        'calendar-date',
        'calendar-date-fill',
        'newspaper',
        'building',
        'building-fill',
        'buildings',
        'buildings-fill',
        'currency-dollar',
        'file-earmark',
        'list-task',
        'journals',
      ].sort(),
    },
  },
  args: {
    icon: 'list-task',
  },
};

export const Default = (args) => {
  const codList = document.createElement('cod-ul');
  codList.setAttribute('icon', args.icon);
  ['Item 1', 'Item 2', 'Item 3'].forEach((innerText) => {
    const listItem = document.createElement('li');
    listItem.innerText = innerText;
    listItem.setAttribute('slot', 'list-item');
    codList.appendChild(listItem);

    // Create an inner element to demo style 
    // change for inner list items.
    const innerList = document.createElement('ul');
    const innerListItem = document.createElement('li');
    innerListItem.innerText = 'Inner list';
    innerList.appendChild(innerListItem);
    listItem.appendChild(innerList);
  });
  return codList;
}

// export const StaticIcon = () => html`
// <cod-ul icon="checkmark-fill">
//   <li slot="list-item">
//     Item 1
//     <ul> <li>Inner element </li></ul>
//   </li>
//   <li slot="list-item">Item 2</li>
// </cod-ul>
// `;