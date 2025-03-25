import styles from '!!raw-loader!./ProfileCard.css';

const template = document.createElement('template');
template.innerHTML = `
<style>
${styles}
</style>

<div>
<p> PROFILE CARD HERE </p>
</div>
`;

class ProfileCard extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({ mode: 'open'});
        shadow.appendChild(template.content.cloneNode(true));
    }
}



export { ProfileCard as default };