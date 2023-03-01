'use strict';
import Display from './Display';
import DataLoader from './DataLoader';
import Map from './Map';
customElements.define('app-display', Display);
customElements.define('app-data-loader', DataLoader);
customElements.define('app-map', Map);

export default class MyHomeInfo extends HTMLElement {
    static get observedAttributes() {
        return ['data-app-state', 'data-parcel-id', 'data-map-state'];
    }

    constructor() {
        // Always call super first in constructor
        super();

        // Create a shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        // Create result section
        const app = document.getElementsByTagName('my-home-info');
        let tempState = app[0].getAttribute('data-app-state');

        const appWrapper = document.createElement('section');
        appWrapper.id = 'app-wrapper';
        const display = document.createElement('app-display');
        if(tempState == 'active-screen'){
            display.setAttribute('data-display-type', 'active');
        }else{
            display.setAttribute('data-display-type', 'welcome');
        }
        appWrapper.appendChild(display);
        shadow.appendChild(appWrapper);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        const shadow = this.shadowRoot;
        const app = document.getElementsByTagName('my-home-info');
        const appMode = app[0].getAttribute('data-app-mode');
        // console.log(`App - attribute: ${name}, old: ${oldValue}, new: ${newValue}`);
        switch (name) {
            case 'data-app-state':
                if (oldValue != null) {
                    this.clearApp(this);
                    this.loadApp(this);
                }
                break;

            case 'data-parcel-id':
                if (newValue != 'none') {
                    this.setAttribute('data-app-state', 'loading-screen');
                } else {
                    if(appMode == 'my-home-info'){
                        this.setAttribute('data-app-state', 'welcome-screen');
                    }
                }
                break;
            
            case 'data-map-state':
                break;

            default:
                console.log('not catched');
                break;
        }
    }

    clearApp(app) {
        const shadow = app.shadowRoot;
        while (shadow.firstChild) {
            shadow.removeChild(shadow.firstChild);
        }
    }

    loadApp(app) {
        const shadow = app.shadowRoot;
        const appWrapper = document.createElement('div');
        appWrapper.id = 'app-wrapper';
        const display = document.createElement('app-display');
        const dataLoader = document.createElement('app-data-loader');
        switch (app.getAttribute('data-app-state')) {
            case 'welcome-screen':
                display.setAttribute('data-display-type', 'welcome');
                appWrapper.appendChild(display);
                break;

            case 'active-screen':
                display.setAttribute('data-display-type', 'active');
                appWrapper.appendChild(display);
                break;

            case 'loading-screen':
                display.setAttribute('data-display-type', 'loading');
                dataLoader.setAttribute('data-loader-state', 'active');
                appWrapper.appendChild(display);
                break;

            case 'results':
                display.setAttribute('data-display-type', 'results');
                appWrapper.appendChild(display);
                break;

            case 'map':
                const map = document.createElement('app-map');
                map.id='app-map';
                map.setAttribute('data-map-state', 'init');
                appWrapper.appendChild(map);
                break;

            case 'error':
                display.setAttribute('data-display-type', 'error');
                appWrapper.appendChild(display);
                break;

            case 'print':
                display.setAttribute('data-display-type', 'print');
                appWrapper.appendChild(display);
                break;

            default:
                break;
        }
        if (shadow.firstChild == null) {
            shadow.appendChild(appWrapper);
        }
    }
}
