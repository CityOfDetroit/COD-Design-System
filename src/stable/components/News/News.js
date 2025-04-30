import styles from '!!raw-loader!./News.css';

const template = document.createElement('template');
template.innerHTML = `
<style>
${styles}
</style>

<div>

</div>
`;

class News extends HTMLElement {
  constructor() {
    super();
  }
}

export { News as default };
