import './alert';

export default {
  title: 'COD/Atoms/Alert',
  argTypes: {
    icon: {
        control: { type: 'select' },
        options: ['house', 'house-fill', 'exclamation-circle', 'exclamation-circle-fill', 'exclamation-triangle', 'check-circle', 'check-circle-fill']
    },
    iconOrder: {
        control: { type: 'select' },
        options: ['left', 'right']
    },
    iconSize: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'x-large']
    },
    backgroundColor: { 
        control: { type: 'select' },
        options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'],
    },
  },
};
// Template
const Template = (args) => {
  const alert = document.createElement('cod-alert');
  alert.setAttribute('data-type', args.type);
  if(args.elements == undefined){
    alert.setAttribute('data-text', args.content);
  }else{
    alert.setAttribute('data-elements', args.elements);
  }
  alert.setAttribute('data-icon', args.icon);
  alert.setAttribute('data-icon-order', args.iconOrder);
  alert.setAttribute('data-icon-size', args.iconSize);
  alert.setAttribute('data-extra-classes', args.extraClasses);
  alert.setAttribute('data-background-color', args.backgroundColor);
  return alert;
}

export const Alert = Template.bind({});
Alert.args = {
  content: 'Basic alert',
  backgroundColor: 'primary'
};

export const AlertExtras = Template.bind({});
AlertExtras.args = {
  content: 'Alert with Extra Classes',
  backgroundColor: 'primary',
  extraClasses: 'text-center p-3'
};

export const AlertElements = Template.bind({});
AlertElements.args = {
  content: 'Container with Extra Classes',
  backgroundColor: 'primary',
  extraClasses: 'text-center p-3',
  elements: JSON.stringify([
    {
      tag: 'p',
      content: 'Simple paragraph.'
  },
    {
        tag: 'article',
        content: 'Article with <a href="https://google.com">link</a>'
    }
  ])
};

export const AlertIcon = Template.bind({});
AlertIcon.args = {
  content: 'Container with Extra Classes',
  backgroundColor: 'primary',
  icon: 'house',
  iconOrder: 'left',
  iconSize: 'small',
  elements: JSON.stringify(
    {
        tag: 'article',
        content: 'Article with <a href="#">link</a>'
    }
  )
};