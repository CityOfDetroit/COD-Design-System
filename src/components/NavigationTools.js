'use strict';
import Button from './atoms/Button';
customElements.define('cod-button', Button);
export default class NavigationTools extends HTMLElement {

    constructor() {
        // Always call super first in constructor
        super();
    
        // Create a shadow root
        const shadow = this.attachShadow({mode: 'open'});

        // Creating display styles
        this.navToolsStyle = document.createElement('style');
        this.navToolsStyle.textContent = `
            #nav-tools-wrapper { display: flex; flex-direction: column;}
            button.clear { font-size: 1.25em; width: 2.5em; height: 2.5em; background-color: #FEB70D; cursor: pointer; border: none; }
            button.nav { width: 3.75em; height: 3.75em; border: none; cursor: pointer;background: #fff; }
            button.nav:hover { background-color: #e6e6e6; transition: all 500ms cubic-bezier(.64,.09,.08,1); }
            button.nav.active { background-color: #9fd5b3; }
            button.nav img { width: 100%; }
        `;

        // Start loading display content
        this.loadNavTools(this);
    }

    clearDisplay(display) {
        const shadow = display.shadowRoot;
        while (shadow.firstChild) {
            shadow.removeChild(shadow.firstChild);
        }
    }

    loadNavTools(navTools) {
        const app = document.getElementsByTagName('my-home-info');
        const appStatus = app[0].getAttribute('data-app-state');
        const appMode = app[0].getAttribute('data-app-mode');
        const initialSets = app[0].getAttribute('data-inital-sets');
        const shadow = navTools.shadowRoot;
        shadow.appendChild(navTools.navToolsStyle);
        const navToolsWrapper = document.createElement('section');
        navToolsWrapper.id = 'nav-tools-wrapper';
        navToolsWrapper.setAttribute('role', 'navigation');
        navToolsWrapper.setAttribute('aria-label', 'Data Navigation');
        const clearResultsBtn = document.createElement('cod-button');
        clearResultsBtn.addEventListener('click', (ev)=>{
            if(app[0].getAttribute('data-app-mode') == 'my-home-info'){
                app[0].setAttribute('data-app-state', 'welcome-screen');
                app[0].setAttribute('data-active-sets', 'assessors-data,neighborhood,recycling,rental-data,rental-cert,demo-status,blight-data,permit-data,DWSDBackupProtection');
            }else{
                app[0].setAttribute('data-app-state', 'active-screen');
                app[0].setAttribute('data-active-sets', initialSets);
            }
            app[0].setAttribute('data-parcel-id', 'none');
            app[0].setAttribute('data-api-stored-datasets', '{}');
            app[0].setAttribute('data-api-active-datasets', 'none');
            app[0].setAttribute('data-active-section', 'property');
        });
        clearResultsBtn.setAttribute('data-primary', true);
        clearResultsBtn.setAttribute('data-label', 'x');
        clearResultsBtn.setAttribute('data-size', 'large');
        clearResultsBtn.setAttribute('data-hover', false);
        clearResultsBtn.setAttribute('data-background-color', 'color-3');
        clearResultsBtn.setAttribute('data-img', '');
        clearResultsBtn.setAttribute('data-img-alt', '');
        clearResultsBtn.setAttribute('data-shape', 'square');
        navToolsWrapper.appendChild(clearResultsBtn);

        if (appMode == 'my-home-info' && appStatus != 'error'){
        const propertyDataBtn = document.createElement('cod-button');
        propertyDataBtn.setAttribute('data-label', '');
        propertyDataBtn.setAttribute('data-size', 'large');
        propertyDataBtn.setAttribute('data-img', 'https://detroitmi.gov/sites/detroitmi.localhost/files/2023-01/home.png');
        propertyDataBtn.setAttribute('data-img-alt', 'about this property');
        propertyDataBtn.setAttribute('data-shape', 'square');
        propertyDataBtn.setAttribute('data-nav-value', 'about this property');
        if(app[0].getAttribute('data-active-section') == 'about this property'){
            propertyDataBtn.setAttribute('data-background-color', 'color-2');
            propertyDataBtn.setAttribute('data-primary', true);
        }else{
            propertyDataBtn.setAttribute('data-background-color', 'color-5');
            propertyDataBtn.setAttribute('data-primary', false);
            propertyDataBtn.addEventListener('click', (ev)=>{
                if(app[0].getAttribute('data-api-active-datasets') != 'none'){
                    let storedData = JSON.parse(app[0].getAttribute('data-api-stored-datasets'));
                    let activeData = JSON.parse(app[0].getAttribute('data-api-active-datasets'));
                    for (const key in activeData) {
                        if(!(key in storedData)){
                            storedData[key] = activeData[key];
                        }
                    }
                    app[0].setAttribute('data-api-stored-datasets', JSON.stringify(storedData));
                }
                app[0].setAttribute('data-api-active-datasets', 'none');
                app[0].setAttribute('data-active-sets', 'assessors-data,neighborhood,recycling,rental-data,rental-cert,demo-status,blight-data,permit-data,DWSDBackupProtection');
                app[0].setAttribute('data-map-available', 'false');
                app[0].setAttribute('data-active-section', 'about this property');
                app[0].setAttribute('data-app-state', 'loading-screen');
            })
        }
        navToolsWrapper.appendChild(propertyDataBtn);

        const govDataBtn = document.createElement('cod-button');
        govDataBtn.setAttribute('data-label', '');
        govDataBtn.setAttribute('data-size', 'large');
        govDataBtn.setAttribute('data-img', 'https://detroitmi.gov/sites/detroitmi.localhost/files/2023-01/government.png');
        govDataBtn.setAttribute('data-img-alt', 'government officials');
        govDataBtn.setAttribute('data-shape', 'square');
        govDataBtn.setAttribute('data-nav-value', 'government officials');
        if(app[0].getAttribute('data-active-section') == 'government officials'){
            govDataBtn.setAttribute('data-background-color', 'color-2');
            govDataBtn.setAttribute('data-primary', true);
        }else{
            govDataBtn.setAttribute('data-background-color', 'color-5');
            govDataBtn.setAttribute('data-primary', false);
            govDataBtn.addEventListener('click', (ev) => {
                if(app[0].getAttribute('data-api-active-datasets') != 'none'){
                    let storedData = JSON.parse(app[0].getAttribute('data-api-stored-datasets'));
                    let activeData = JSON.parse(app[0].getAttribute('data-api-active-datasets'));
                    for (const key in activeData) {
                        if(!(key in storedData)){
                            storedData[key] = activeData[key];
                        }
                    }
                    app[0].setAttribute('data-api-stored-datasets', JSON.stringify(storedData));
                }
                app[0].setAttribute('data-api-active-datasets', 'none');
                app[0].setAttribute('data-active-sets', 'council,council-members,district-managers,business-liaison,district-inspectors,npo');
                app[0].setAttribute('data-map-available', 'false');
                app[0].setAttribute('data-active-section', 'government officials');
                app[0].setAttribute('data-app-state', 'loading-screen');
            });
        }
        navToolsWrapper.appendChild(govDataBtn);

        const zoneDataBtn = document.createElement('cod-button');
        zoneDataBtn.setAttribute('data-label', '');
        zoneDataBtn.setAttribute('data-size', 'large');
        zoneDataBtn.setAttribute('data-img', 'https://detroitmi.gov/sites/detroitmi.localhost/files/2023-01/zone.png');
        zoneDataBtn.setAttribute('data-img-alt', 'special areas and zones');
        zoneDataBtn.setAttribute('data-shape', 'square');
        zoneDataBtn.setAttribute('data-nav-value', 'special areas and zones');
        if(app[0].getAttribute('data-active-section') == 'special areas and zones'){
            zoneDataBtn.setAttribute('data-background-color', 'color-2');
            zoneDataBtn.setAttribute('data-primary', true);
        }else{
            zoneDataBtn.setAttribute('data-background-color', 'color-5');
            zoneDataBtn.setAttribute('data-primary', false);
            zoneDataBtn.addEventListener('click', (ev) => {
                if(app[0].getAttribute('data-api-active-datasets') != 'none'){
                    let storedData = JSON.parse(app[0].getAttribute('data-api-stored-datasets'));
                    let activeData = JSON.parse(app[0].getAttribute('data-api-active-datasets'));
                    for (const key in activeData) {
                        if(!(key in storedData)){
                            storedData[key] = activeData[key];
                        }
                    }
                    app[0].setAttribute('data-api-stored-datasets', JSON.stringify(storedData));
                }
                app[0].setAttribute('data-api-active-datasets', 'none');
                app[0].setAttribute('data-active-sets', 'nez,nrsa,historicDistrict');
                app[0].setAttribute('data-map-available', 'false');
                app[0].setAttribute('data-active-section', 'special areas and zones');
                app[0].setAttribute('data-app-state', 'loading-screen');
            });
        }
        navToolsWrapper.appendChild(zoneDataBtn);
        
        const nearDataBtn = document.createElement('cod-button');
        nearDataBtn.setAttribute('data-label', '');
        nearDataBtn.setAttribute('data-size', 'large');
        nearDataBtn.setAttribute('data-img', 'https://detroitmi.gov/sites/detroitmi.localhost/files/2023-01/nearby.png');
        nearDataBtn.setAttribute('data-img-alt', 'things nearby');
        nearDataBtn.setAttribute('data-shape', 'square');
        nearDataBtn.setAttribute('data-nav-value', 'things nearby');
        if(app[0].getAttribute('data-active-section') == 'things nearby'){
            nearDataBtn.setAttribute('data-background-color', 'color-2');
            nearDataBtn.setAttribute('data-primary', true);
        }else{
            nearDataBtn.setAttribute('data-background-color', 'color-5');
            nearDataBtn.setAttribute('data-primary', false);
            nearDataBtn.addEventListener('click', (ev) => {
                if(app[0].getAttribute('data-api-active-datasets') != 'none'){
                    let storedData = JSON.parse(app[0].getAttribute('data-api-stored-datasets'));
                    let activeData = JSON.parse(app[0].getAttribute('data-api-active-datasets'));
                    for (const key in activeData) {
                        if(!(key in storedData)){
                            storedData[key] = activeData[key];
                        }
                    }
                    app[0].setAttribute('data-api-stored-datasets', JSON.stringify(storedData));
                }
                app[0].setAttribute('data-api-active-datasets', 'none');
                app[0].setAttribute('data-active-sets', 'schools,demos-data,stabilization-data,improve-det');
                app[0].setAttribute('data-active-section', 'things nearby');
                app[0].setAttribute('data-map-available', 'true');
                app[0].setAttribute('data-app-state', 'loading-screen');
            });
        }
        navToolsWrapper.appendChild(nearDataBtn);

        const printBtn = document.createElement('cod-button');
        printBtn.setAttribute('data-label', '');
        printBtn.setAttribute('data-size', 'large');
        printBtn.setAttribute('data-img', 'https://detroitmi.gov/sites/detroitmi.localhost/files/2023-01/print.png');
        printBtn.setAttribute('data-img-alt', 'print');
        printBtn.setAttribute('data-shape', 'square');
        printBtn.setAttribute('data-nav-value', 'print');
        if(app[0].getAttribute('data-active-section') == 'print'){
            printBtn.setAttribute('data-background-color', 'color-2');
            printBtn.setAttribute('data-primary', true);
        }else{
            printBtn.setAttribute('data-background-color', 'color-5');
            printBtn.setAttribute('data-primary', false);
            printBtn.addEventListener('click', (ev) => {
                app[0].setAttribute('data-app-state', 'print');
            });
        }
        navToolsWrapper.appendChild(printBtn);
        }

        shadow.appendChild(navToolsWrapper);
    }

}
