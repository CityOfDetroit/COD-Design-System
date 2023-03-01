'use strict';
import Geocoder from './Geocoder';
import NavigationTools from './NavigationTools';
import Loader from './atoms/Loader';
customElements.define('cod-loader', Loader);
customElements.define('app-geocoder', Geocoder);
customElements.define('app-nav-tools', NavigationTools);
export default class Display extends HTMLElement {
  static get observedAttributes() {
    return ['data-display-type'];
  }

  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    // Creating images
    this.neighborhoodImage = document.createElement('img');
    this.neighborhoodImage.src = 'https://detroitmi.gov/sites/detroitmi.localhost/files/2023-01/neighborhood.png'; //neighborhoodImage;
    this.neighborhoodImage.setAttribute('alt', '');

    // Creating display styles
    this.welcomeStyle = document.createElement('style');
    this.welcomeStyle.textContent = `
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;700&display=swap')
          #display-wrapper { display: flex; padding: 1em; flex-wrap: wrap; font-family: 'Montserrat', sans-serif;}
          #display-wrapper #welcome-img-wrapper { display: flex; }
          #display-wrapper #welcome-img-wrapper img { height: 10em; margin: auto }
          #display-wrapper p { text-align: center; font-family: 'Montserrat', sans-serif;}
          #display-wrapper button { padding: 1em 3em;  background-color: #004445; color: #fff; border: none; cursor: pointer; margin: auto; width: 100%;}
          p.display-title { font-weight: bold; font-size: 1.25em; }
          app-geocoder { width: 100%}
          .btn-group { display:flex; width: 100%; }
          @media all and (min-width: 551px) {
            #display-wrapper{ display: flex; }
            #display-wrapper #welcome-img-wrapper img { width: 15em; height: auto; }
            #display-wrapper article { flex: 1; padding: 1em; }
          }
        `;

    this.loadingStyle = document.createElement('style');
    this.loadingStyle.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;700&display=swap')
        p { text-align: center; font-family: 'Montserrat', sans-serif;}
        .loader-box{
            display: flex;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, .75);
            position: absolute;
            left: -0.2em;
            top: -0.2em;
        }
        .loader-container{
          display: flex;
          margin: auto;
        }
        .loader-container article{
          margin:auto;
        }
        .loader {
            position: relative;
            width: 75px;
            height: 100px;
       }
        .loader__bar {
            position: absolute;
            bottom: 0;
            width: 10px;
            height: 50%;
            background: #ea4961;
            transform-origin: center bottom;
            box-shadow: 1px 1px 0 rgba(0, 0, 0, .2);
       }
        .loader__bar:nth-child(1) {
            left: 0px;
            transform: scale(1, 0.2);
            animation: barUp1 4s infinite;
       }
        .loader__bar:nth-child(2) {
            left: 20px;
            transform: scale(1, 0.4);
            animation: barUp2 4s infinite;
       }
        .loader__bar:nth-child(3) {
            left: 40px;
            transform: scale(1, 0.6);
            animation: barUp3 4s infinite;
       }
        .loader__bar:nth-child(4) {
            left: 60px;
            transform: scale(1, 0.8);
            animation: barUp4 4s infinite;
       }
        .loader__bar:nth-child(5) {
            left: 80px;
            transform: scale(1, 1);
            animation: barUp5 4s infinite;
       }
        .loader__ball {
            position: absolute;
            bottom: 10px;
            left: 0;
            width: 10px;
            height: 10px;
            background: #ea4961;
            border-radius: 50%;
            animation: ball 4s infinite;
       }
        @keyframes ball {
            0% {
                transform: translate(0, 0);
           }
            5% {
                transform: translate(10px, -14px);
           }
            10% {
                transform: translate(20px, -10px);
           }
            17% {
                transform: translate(30px, -24px);
           }
            20% {
                transform: translate(40px, -20px);
           }
            27% {
                transform: translate(50px, -34px);
           }
            30% {
                transform: translate(60px, -30px);
           }
            37% {
                transform: translate(70px, -44px);
           }
            40% {
                transform: translate(80px, -40px);
           }
            50% {
                transform: translate(80px, 0);
           }
            57% {
                transform: translate(70px, -14px);
           }
            60% {
                transform: translate(60px, -10px);
           }
            67% {
                transform: translate(50px, -24px);
           }
            70% {
                transform: translate(40px, -20px);
           }
            77% {
                transform: translate(30px, -34px);
           }
            80% {
                transform: translate(20px, -30px);
           }
            87% {
                transform: translate(10px, -44px);
           }
            90% {
                transform: translate(0, -40px);
           }
            100% {
                transform: translate(0, 0);
           }
       }
        @keyframes barUp1 {
            0% {
                transform: scale(1, 0.2);
           }
            40% {
                transform: scale(1, 0.2);
           }
            50% {
                transform: scale(1, 1);
           }
            90% {
                transform: scale(1, 1);
           }
            100% {
                transform: scale(1, 0.2);
           }
       }
        @keyframes barUp2 {
            0% {
                transform: scale(1, 0.4);
           }
            40% {
                transform: scale(1, 0.4);
           }
            50% {
                transform: scale(1, 0.8);
           }
            90% {
                transform: scale(1, 0.8);
           }
            100% {
                transform: scale(1, 0.4);
           }
       }
        @keyframes barUp3 {
            0% {
                transform: scale(1, 0.6);
           }
            100% {
                transform: scale(1, 0.6);
           }
       }
        @keyframes barUp4 {
            0% {
                transform: scale(1, 0.8);
           }
            40% {
                transform: scale(1, 0.8);
           }
            50% {
                transform: scale(1, 0.4);
           }
            90% {
                transform: scale(1, 0.4);
           }
            100% {
                transform: scale(1, 0.8);
           }
       }
        @keyframes barUp5 {
            0% {
                transform: scale(1, 1);
           }
            40% {
                transform: scale(1, 1);
           }
            50% {
                transform: scale(1, 0.2);
           }
            90% {
                transform: scale(1, 0.2);
           }
            100% {
                transform: scale(1, 1);
           }
       }       
        `;

    this.resultsStyle = document.createElement('style');
    this.resultsStyle.textContent = `
          .results-container{ display: flex; }
          #data-results { background-color: #e6e6e6; padding: 1em; height: 40em; overflow-y: auto; }
          .data-title { font-weight: bold; border-left: solid .2em #FEB70D; padding: .5em; margin: 0 0 1em 0; font-family: 'Montserrat', sans-serif;}
          .result-address {background-color: #fff; border: solid 0.1em #e6e6e6; padding: 1.04em 0.6em; font-family: 'Montserrat', sans-serif;}
          .data-block-title { padding: .5em; background-color: #FEB70D; margin: 0; font-weight: bold; font-family: 'Montserrat', sans-serif; display: flex;}
          .data-block-title span { flex: 1 }
          .data-block-content { padding: .5em; margin-bottom: .5em; background-color: #fff; }
          .data-block-content p { margin: 0; font-family: 'Montserrat', sans-serif;}
          .dataset-results {flex: 1;}
          .critical-text { color: #CF3234; }
          .error-result { padding: 1em; }
          .data-block-title button { background-color: #fff; border: none; padding: 0.25em 0.5em; box-shadow: 1px 1px 3px 0px rgb(0 0 0 / 75%);}
          .data-block-title button img { height: 1em; }
          @media all and (min-width: 551px) {
            #data-results { height: auto; }
            #data-blocks { column-count: 2; }
            #data-blocks .data-block {     -webkit-column-break-inside: avoid; page-break-inside: avoid; break-inside: avoid; }
          }

          @media all and (min-width: 1024px) {
            #data-results { height: auto; }
            #data-blocks { column-count: 3; }
            #data-blocks .data-block {     -webkit-column-break-inside: avoid; page-break-inside: avoid; break-inside: avoid; }
          }
        `;

    // Start loading display content
    this.loadDisplay(this);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // console.log(`Display - attribute: ${name}, old: ${oldValue}, new: ${newValue}`);
    if (newValue == 'results') {
      this.clearDisplay(this);
    }
    this.loadDisplay(this);
  }

  clearDisplay(display) {
    const shadow = display.shadowRoot;
    while (shadow.firstChild) {
      shadow.removeChild(shadow.firstChild);
    }
  }

  formatDate(value) {
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const tempDate = new Date(value);
    return `${month[tempDate.getMonth()]} ${tempDate.getDate()}, ${tempDate.getFullYear()}`;
  }

  buildCouncil(value) {
    let siteURL = window.location.hostname;
    let dataParsing = { title: "Council District", content: null };
    dataParsing.content = `
        <p><strong>District Number:</strong> ${value.data.district}</p>
        <p><strong>Council Member:</strong> <a href="http://${siteURL}${value.data.url}" target="_blank">${value.data.name}</a></p>
        <p><strong>Council Member Phone:</strong> ${value.data.phone}</p>
      `;
    return dataParsing;
  }

  buildDistrictManagers(value) {
    let dataParsing = { title: "District Managers", content: null };
    if (value && Object.keys(value.data).length != 0 && value.data.constructor === Object && value.data.detail !== "Not found.") {
      dataParsing.content = `
          <p><strong>District Manager:</strong> <a href="${value.data.manager.url}" target="_blank">${value.data.manager.name}</a></p>
          <p><strong>Manager Phone:</strong> ${value.data.manager.phone}</p>
          <p><strong>Deputy Manager:</strong> <a href="${value.data.deputy.url}" target="_blank">${value.data.deputy.name}</a></p>
          <p><strong>Deputy Manager Phone:</strong> ${value.data.deputy.phone}</p>
          `;
    } else {
      dataParsing.content = `
            <p>No data found</p>
          `;
    }
    return dataParsing;
  }

  buildBusinessLiaison(value) {
    let dataParsing = { title: "Business Liaison", content: null };
    if (value && Object.keys(value.data).length != 0 && value.data.constructor === Object && value.data.detail !== "Not found.") {
      dataParsing.content = `
          <p><strong>Liaison:</strong> ${value.data.name}</p>
          <p><strong>Liaison Phone:</strong> ${value.data.email}</p>
          `;
    } else {
      dataParsing.content = `
            <p>No data found</p>
          `;
    }
    return dataParsing;
  }

  buildInspector(value) {
    let dataParsing = { title: "Enforcement Inspector", content: null };
    if (value && Object.keys(value.data).length != 0 && value.data.constructor === Object && value.data.detail !== "Not found.") {
      dataParsing.content = `
          <p><strong>Inspector:</strong> ${value.data.name}</p>
          <p><strong>Inspector Phone:</strong> ${value.data.phone}</p>
          `;
    } else {
      dataParsing.content = `
            <p>No data found</p>
          `;
    }
    return dataParsing;
  }

  buildNeighborhood(value) {
    let dataParsing = { title: "Neighborhood", content: null };
    if (value && Object.keys(value.data).length != 0 && value.data.constructor === Object && value.data.detail !== "Not found.") {
      dataParsing.content = `
            <p><strong>Neighborhood name:</strong> ${value.data.attributes.neighborhood_name}</p>
          `;
    } else {
      dataParsing.content = `
            <p>No neighborhood found</p>
          `;
    }
    return dataParsing;
  }

  buildDWSDBackupProtection(values) {
    let validNeighborhoods = ['Aviation Sub', 'Barton-McFarland', 'Chadsey Condon', 'Cornerstone Village', 'East English Village', 'Morningside', 'Jefferson Chalmers', 'Warrendale', 'Victoria Park', 'Moross-Morang', 'Garden View'];
    let dataParsing = { title: "DWSD Basement Backup Protection Program", content: null };
    if (values && values.data.attributes.neighborhood_name) {
      if (validNeighborhoods.includes(values.data.attributes.neighborhood_name)) {
        dataParsing.content = `
        <p>This property qualifies for the DWSD Basement Backup Protection Program.</p>
        <a href="https://app.smartsheet.com/b/form/509cb1e905a74948bce7b0135da53277?Property%20Street%20Address=${values.data.address}&Property%20City=Detroit&Property%20Zip%20Code=${values.data.attributes.Postal}&Neighborhood=${values.data.attributes.neighborhood_name}" target="_blank"><button>Apply Now</button></a>
        `;
      }else{
        dataParsing.content = `
        <p>This property doesn't qualify for the Basement Backup Protection Program. To learn more please <a href="https://detroitmi.gov/departments/water-and-sewerage-department/dwsd-resources/basement-flooding-protection">visit our page.</a></p>
        `;
      }
    } else {
      dataParsing.content = `
        <p>This property doesn't qualify for the Basement Backup Protection Program. To learn more please <a href="https://detroitmi.gov/departments/water-and-sewerage-department/dwsd-resources/basement-flooding-protection">visit our page.</a></p>
        `;
    }
    return dataParsing;
  }

  buildHistoricDistrict(value, display) {
    let dataParsing = { title: "NEZ Homestead Zone", content: null };
    if (Object.keys(value.data).length != 0 && value.data.constructor === Object && value.data.features.length > 0) {
      dataParsing.content = `
          <p><strong>NAME:</strong> ${value.data.features[0].attributes.Name}</p>
          <p><strong>DESIGNATED ON:</strong> ${display.formatDate(value.data.features[0].attributes.Year_Enacted).format('MMM DD, YYYY')}</p>
          `;
    } else {
      dataParsing.content = `
          <p>This property is not in a historic district.</p>
          `;
    }
    return dataParsing;
  }

  buildNEZ(nez) {
    let dataParsing = { title: "NEZ Homestead Zone", content: null };
    if (Object.keys(nez.data).length != 0 && nez.data.constructor === Object && nez.data.features.length > 0) {
      dataParsing.content = `
          <p><strong>Name:</strong> ${nez.data.features[0].attributes.RNNAME}</p>
          <p><strong>ID:</strong> ${nez.data.features[0].attributes.RID}</p>
          <p class="noprint"><a href="https://data.detroitmi.gov/datasets/proposed-nez-homestead-2021/explore" target="_blank">View Map</a></p>
          `;
    } else {
      dataParsing.content = `
          <p>This property is not on a NEZ Homestead zone.</p>
          <p class="noprint"><a href="https://data.detroitmi.gov/datasets/nez-h-districts/explore" target="_blank">View Map</a></p>
          `;
    }
    return dataParsing;
  }

  buildNRSA(value) {
    let dataParsing = { title: "Neighborhood Revitalization Strategy Areas (NRSA)", content: null };
    if (Object.keys(value.data).length != 0 && value.data.constructor === Object && value.data.features.length > 0) {
      dataParsing.content = `
          <p><strong>Name:</strong> ${value.data.features[0].attributes.Name}</p>
          `;
    } else {
      dataParsing.content = `
          <p>This property is not on a NRSA.</p>
          `;
    }
    return dataParsing;
  }

  buildNPO(value) {
    let dataParsing = { title: "Police", content: null };
    if (value && value.data.features.length) {
      dataParsing.content = `
          <p><strong>PRECINCT</strong></p>
          <p><strong>Number:</strong> ${value.data.features[0].attributes.precinct}</p>
          <p><strong>Address:</strong> ${value.data.features[0].attributes.precinct_location}</p>
          <br>
          <p><strong>NEIGHBORHOOD POLICE OFFICER (NPO)</strong></p>
          <p><strong>Name:</strong> ${value.data.features[0].attributes.police_officer}</p>
          <p><strong>Phone:</strong> ${value.data.features[0].attributes.phone_number}</p>
          <p><strong>Email:</strong> ${value.data.features[0].attributes.email}</p>
          `;
    } else {
      dataParsing.content = `<p>No police info found</p>`;
    }
    return dataParsing;
  }

  checkRecyclingStatus(data) {
    try {
      if (data.next_pickups['yard waste']) {
        let yardStart = null;
        let yardEnd = null;
        data.details.forEach((item) => {
          if (item.type == 'start-date' && item.service == 'yard waste') {
            if (item.normalDay != null) {
              yardStart = item.normalDay;
            } else {
              yardStart = item.newDay;
            }
          }
          if (item.type == 'end-date' && item.service == 'yard waste') {
            if (item.normalDay != null) {
              yardEnd = item.normalDay;
            } else {
              yardEnd = item.newDay;
            }
          }
        });
        if (moment(data.next_pickups['yard waste'].next_pickup).isBetween(yardStart, yardEnd)) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }

  buildRecycling(value, display) {
    let dataParsing = { title: "Trash & Recycling", content: null };
    if (value && Object.keys(value.data).length != 0 && value.data.constructor === Object) {
      let contractorInfo = {
        name: null,
        url: null,
        phone: null
      };
      if (value.data.next_pickups.trash.contractor === 'GFL') {
        contractorInfo.name = 'GFL';
        contractorInfo.url = 'http://gflusa.com/residential/detroit/';
        contractorInfo.phone = '(844) 464-3587';
      } else {
        contractorInfo.name = 'WM';
        contractorInfo.url = 'http://www.advanceddisposal.com/mi/detroit/detroit-residential-collection';
        contractorInfo.phone = ' (844) 233-8764';
      }
      dataParsing.content = `
            <p><strong>Provider:</strong> <a href="${contractorInfo.url}" target="_blank">${contractorInfo.name}</a> ${contractorInfo.phone}</p>
            <p><strong>Next Trash:</strong> ${display.formatDate(value.data.next_pickups.trash.next_pickup)}</p>
            <p><strong>Next Recycling:</strong> ${display.formatDate(value.data.next_pickups.recycling.next_pickup)}</p>
            <p><strong>Next Bulk:</strong> ${display.formatDate(value.data.next_pickups.bulk.next_pickup)}</p>
            ${(display.checkRecyclingStatus(value.data)) ? tempHTML += `<p><strong>Next Yard:</strong> ${display.formatDate(value.data.next_pickups['yard waste'].next_pickup)}</p>` : ``}
          `;
    } else {
      dataParsing.content = `<p>No data found</p>`;
    }
    return dataParsing;
  }

  buildAssessors(value) {
    let dataParsing = { title: "Assessor's Data", content: null };
    if (value && Object.keys(value.data).length != 0 && value.data.constructor === Object && value.data.detail !== "Not found.") {
      let property = {
        year: null,
        value: null,
        floor: null,
        buildingClass: null
      }
      dataParsing.content = `
            <p><strong>Owner's address:</strong> ${value.data.ownerstreetaddr}</p>
            <p><strong>Owner's city:</strong> ${value.data.ownercity}</p>
            <p><strong>Owner's state:</strong> ${value.data.ownerstate}</p>
            <p><strong>Owner's zip:</strong> ${value.data.ownerzip}</p>
          `;
      if (value.data.resb_bldgclass === 0) {
        property.year = value.data.cib_yearbuilt;
        property.value = value.data.cib_value;
        property.floor = value.data.cib_yearbuilt;
        property.buildingClass = value.data.cib_yearbuilt;
      } else {
        property.year = value.data.resb_yearbuilt;
        property.value = value.data.resb_value;
        property.floor = value.data.resb_floorarea;
        property.buildingClass = value.data.resb_bldgclass;
      }
      dataParsing.content += `
            <p><strong>Parcel number:</strong> ${value.data.pnum}</p>
            <p><strong>Year build:</strong> ${property.year}</p>
            <p><strong>Calculated value:</strong> $${property.value.toLocaleString()}</p>
            <p><strong>Floor area:</strong> ${property.floor.toLocaleString()} SQFT</p>
            <p><strong>Building class:</strong> ${property.buildingClass}</p>
          `;
    } else {
      dataParsing.content = `<p>No data found</p>`;
    }
    return dataParsing;
  }

  buildRental(value, display) {
    let app = document.getElementsByTagName('my-home-info');
    let apiDataSets = JSON.parse(app[0].getAttribute('data-api-active-datasets'));
    let dataParsing = { title: "Rental Enforcement Status", content: null };
    if ((value && value.data.features.length) || (apiDataSets['rental-cert-data'] && apiDataSets['rental-cert-data'].data.features.length)) {
      dataParsing.content = `
            <p><strong>Registered:</strong> ${value.data.features.length ? `${display.formatDate(value.data.features[0].attributes.date_status)}` : `Not registered`}</p>
            <p><strong>Certified:</strong> ${apiDataSets['rental-cert-data'].data.features.length ? `${display.formatDate(apiDataSets['rental-cert-data'].data.features[0].attributes.issued_date)}` : `Not certified`}</p>
          `;
    } else {
      dataParsing.content = `
          <p><strong>Registered:</strong> Not registered</p>
          <p><strong>Certified:</strong> Not certified</p>
          `;
    }
    return dataParsing;
  }

  buildFireEscrow(value) {
    let tempHTML = '';
    if (value && value.data.features.length) {
      tempHTML += `
            <article class="info-section">
            <span>FIRE ESCROW</span>
            <div>
              <p><strong>STATUS:</strong> Fire Escrow found</p>
              <p><a href="https://detroitmi.gov/taxonomy/term/8501"><button>Start Process</button></a></p>
            </div>
            </article>`;
    } else {
      tempHTML += `
          <article class="info-section">
            <span>FIRE ESCROW</span>
            <div>
              <p><strong>STATUS:</strong> Fire Escrow not found</p>
            </div>
            </article>`;
    }
    return tempHTML;
  }

  buildBlight(value, display) {
    let dataParsing = { title: "Blight Tickets", content: null };
    if (value && value.data.features.length) {
      dataParsing.content = `
            <p><strong>Ticket ID:</strong> ${value.attributes.ticket_number}</p>
            <p><strong>Fine Amount:</strong> $${value.attributes.fine_amount}</p>
            <p><strong>Agency name:</strong> ${value.attributes.agency_name}</p>
            <p><strong>Disposition:</strong> ${value.attributes.disposition}</p>
            <p><strong>Description:</strong> ${value.attributes.violation_description}</p>
            <p><strong>Hearing Date:</strong> ${display.formatDate(value.attributes.hearing_date)}</p>
            <p><strong>Hearing Time:</strong> ${value.attributes.hearing_time}</p>
          `;
    } else {
      dataParsing.content = `<p>No blight tickets found</p>`;
    }
    return dataParsing;
  }

  buildSchools(value, display) {
    let dataParsing = { title: "Schools", content: null };
    if (value && value.data.features.length) {
      value.data.features.forEach(function (value, index) {
        if (index == 0) {
          dataParsing.content = `
              <p><strong>Name:</strong> ${value.properties.EntityOfficialName}</p>
              <p><strong>EntityActualGrades:</strong> ${value.properties.EntityActualGrades}</p>
              <p><strong>Type:</strong> ${value.properties.EntityTypeName}</p>
              <p><strong>Address:</strong> ${value.properties.EntityPhysicalStreet}</p>
              <br>
              `;
        } else {
          dataParsing.content += `
              <p><strong>Name:</strong> ${value.properties.EntityOfficialName}</p>
              <p><strong>EntityActualGrades:</strong> ${value.properties.EntityActualGrades}</p>
              <p><strong>Type:</strong> ${value.properties.EntityTypeName}</p>
              <p><strong>Address:</strong> ${value.properties.EntityPhysicalStreet}</p>
              <br>
              `;
        }
      });
    } else {
      dataParsing.content = `<p>No schools nearby.</p>`;
    }
    return dataParsing;
  }

  buildPermit(value, display) {
    let dataParsing = { title: "Building Permits", content: null };
    if (value && value.data.features.length) {
      dataParsing.content = `
          <p><strong>PERMIT NUMBER:</strong> ${value.attributes.record_id}</p>
          <p><strong>PERMIT TYPE:</strong> ${value.attributes.permit_type}</p>
          <p><strong>PERMIT BUILDING TYPE:</strong> ${value.attributes.permit_type}</p>
          <p><strong>PERMIT STATUS:</strong> ${value.attributes.status}</p>
          <p><strong>PERMIT ISSUED:</strong> ${display.formatDate(value.attributes.issued_date)}</p>
          <p><strong>PERMIT DESCRIPTION:</strong> ${value.attributes.description_of_work}</p>
          `;
    } else {
      dataParsing.content = `<p>No building permits found</p>`;
    }
    return dataParsing;
  }

  buildDemoStatus(value, display) {
    let app = document.getElementsByTagName('my-home-info');
    let parcelData = JSON.parse(app[0].getAttribute('data-parcel-id'));
    let tempAddress = parcelData.address.replace(' ', '%2520');
    tempAddress = tempAddress.replace(',', '%252C');
    let dataParsing = { title: "Demolition Status", content: null };
    if (value && value.data.features.length) {
      dataParsing.content = `
            <p class="critical-text"><strong>WARNIG!</strong></p>
            <p>THIS PROPERTY IS SCHEDULED FOR DEMOLITION</p> 
            ${(value.data.features[0].attributes.demolish_by_date == null) ? `<p><strong>Date to be determined</strong></p>` : `<p><strong>${display.formatDate(value.attributes.demolish_by_date)}</stron></p>
            <p><a href="https://detroitmi.maps.arcgis.com/apps/instant/nearby/index.html?appid=41ba8dd946d842b9ba632ecc0a5d2556&sliderDistance=1&find=${tempAddress}" target="_blank">Expand your demo search</a></p>
            `}
          `;
    } else {
      dataParsing.content = `
          <p>This property is not on the demolition list</p>
          <p><a href="https://detroitmi.maps.arcgis.com/apps/instant/nearby/index.html?appid=41ba8dd946d842b9ba632ecc0a5d2556&sliderDistance=1&find=${tempAddress}" target="_blank">Expand your demo search</a></p>`;
    }
    return dataParsing;
  }

  buildDemosNear(value, display) {
    let dataParsing = { title: "Demolitions Nearby", content: null };
    if (value && value.data.features.length) {
      value.data.features.forEach(function (value, index) {

        if (index == 0) {
          dataParsing.content = `
              <p><strong>Address:</strong> ${value.properties.address}</p>
              <p><strong>Commercial:</strong> ${value.properties.commercial_building}</p>
              <p><strong>Price:</strong> $${parseInt(value.properties.price).toLocaleString()}</p>
              <p><strong>Parcel:</strong> ${value.properties.parcel_id}</p>
              <p><strong>Contractor:</strong> ${value.properties.contractor_name}</p>
              <p><strong>Council District:</strong> ${value.properties.council_district}</p>
              <p><strong>Neighborhood:</strong> ${value.properties.neighborhood}</p>
              ${(value.properties.demolish_by_date == undefined || value.properties.demolish_by_date == null) ? `<p><p><strong>Expected Date:</strong> Date to be determined</p>` : `<p><strong>Expected Date:</strong>${display.formatDate(value.attributes.demolish_by_date)}</stron></p>
              <p><strong>Expected Date:</strong> ${display.formatDate(value.properties.demolish_by_date)}</p>`}
              <br>
              `;
        } else {
          dataParsing.content += `
              <p><strong>Address:</strong> ${value.properties.address}</p>
              <p><strong>Commercial:</strong> ${value.properties.commercial_building}</p>
              <p><strong>Price:</strong> $${parseInt(value.properties.price).toLocaleString()}</p>
              <p><strong>Parcel:</strong> ${value.properties.parcel_id}</p>
              <p><strong>Contractor:</strong> ${value.properties.contractor_name}</p>
              <p><strong>Council District:</strong> ${value.properties.council_district}</p>
              <p><strong>Neighborhood:</strong> ${value.properties.neighborhood}</p>
              ${(value.properties.demolish_by_date == null) ? `<p><p><strong>Expected Date:</strong> Date to be determined</p>` : `<p><strong>Expected Date:</strong>${display.formatDate(value.attributes.demolish_by_date)}</stron></p>
              <p><strong>Expected Date:</strong> ${display.formatDate(value.properties.demolish_by_date)}</p>`}
              <br>
              `;
        }
      });

    } else {
      dataParsing.content = `<p>No demolitions are happening nearby.</p>`;
    }
    return dataParsing;
  }

  buildStabilizationsNear(value, display) {
    let dataParsing = { title: "Stabilizations Nearby", content: null };
    if (value && value.data.features.length) {
      value.data.features.forEach(function (value, index) {

        if (index == 0) {
          dataParsing.content = `
              <p><strong>Address:</strong> ${value.properties.address}</p>
              <p><strong>Parcel:</strong> ${value.properties.parcel_id}</p>
              <p><strong>Council District:</strong> ${value.properties.council_district}</p>
              <p><strong>Neighborhood:</strong> ${value.properties.neighborhood}</p>
              <p><strong>Status:</strong> ${value.properties.rehab_status}</p>
              <br>
              `;
        } else {
          dataParsing.content += `
          <p><strong>Address:</strong> ${value.properties.address}</p>
          <p><strong>Parcel:</strong> ${value.properties.parcel_id}</p>
          <p><strong>Council District:</strong> ${value.properties.council_district}</p>
          <p><strong>Neighborhood:</strong> ${value.properties.neighborhood}</p>
          <p><strong>Status:</strong> ${value.properties.rehab_status}</p>
              <br>
              `;
        }
      });

    } else {
      dataParsing.content = `<p>No demolitions are happening nearby.</p>`;
    }
    return dataParsing;
  }

  buildImproveDet(value, display) {
    let dataParsing = { title: "Improve Detroit Issues Nearby", content: null };
    if (value && value.data.features.length) {
      value.data.features.forEach(function (value, index) {
        if (index == 0) {
          dataParsing.content = `
              <p><strong>ID:</strong> <a href="${value.properties.web_url}" target="_blank">${value.properties.id}</a></p>
              <p><strong>Type:</strong> ${value.properties.request_type_title}</p>
              <p><strong>Status:</strong> ${value.properties.status}</p>
              <p><strong>Reported on:</strong> ${display.formatDate(value.properties.created_at)}</p>
              <br>
              `;
        } else {
          dataParsing.content += `
              <p><strong>ID:</strong> <a href="${value.properties.web_url}" target="_blank">${value.properties.id}</a></p>
              <p><strong>Type:</strong> ${value.properties.request_type_title}</p>
              <p><strong>Status:</strong> ${value.properties.status}</p>
              <p><strong>Reported on:</strong> ${display.formatDate(value.properties.created_at)}</p>
              <br>
              `;
        }
      });

    } else {
      dataParsing.content = `<p>No active issues nearby.</p>`;
    }
    return dataParsing;
  }

  selectDataBlockType(display, value) {
    switch (value.id) {
      case 'council-members':
        try {
          return display.buildCouncil(value);
        } catch (error) {
          // console.log(error);
          return '';
        }
        break;

      case 'district-managers':
        try {
          return display.buildDistrictManagers(value);
        } catch (error) {
          // console.log(error);
          return '';
        }
        break;

      case 'business-liaison':
        try {
          return display.buildBusinessLiaison(value);
        } catch (error) {
          // console.log(error);
          return '';
        }
        break;

      case 'district-inspectors':
        try {
          return display.buildInspector(value);
        } catch (error) {
          // console.log(error);
          return '';
        }
        break;

      case 'neighborhood':
        try {
          return display.buildNeighborhood(value);
        } catch (error) {
          // console.log(error);
          return '';
        }
        break;

      case 'nez':
        try {
          return display.buildNEZ(value);
        } catch (error) {
          // console.log(error);
          return '';
        }
        break;

      case 'nrsa':
        try {
          return display.buildNRSA(value);
        } catch (error) {
          // console.log(error);
          return '';
        }
        break;

      case 'assessors-data':
        try {
          return display.buildAssessors(value);
        } catch (error) {
          // console.log(error);
          return '';
        }
        break;

      case 'permit-data':
        try {
          return display.buildPermit(value, display);
        } catch (error) {
          // console.log(error);
          return '';
        }
        break;

      case 'rental-data':
        try {
          return display.buildRental(value, display);
        } catch (error) {
          // console.log(error);
          return '';
        }
        break;

      case 'blight-data':
        try {
          return display.buildBlight(value, display);
        } catch (error) {
          // console.log(error);
          return '';
        }
        break;

      case 'demos-data':
        try {
          return display.buildDemosNear(value, display);
        } catch (error) {
          // console.log(error);
          return '';
        }
        break;

      case 'stabilization-data':
        try {
          return display.buildStabilizationsNear(value, display);
        } catch (error) {
          // console.log(error);
          return '';
        }
        break;

      case 'demo-status':
        try {
          return display.buildDemoStatus(value);
        } catch (error) {
          // console.log(error);
          return '';
        }
        break;

      case 'npo':
        try {
          return display.buildNPO(value);
        } catch (error) {
          // console.log(error);
          return '';
        }
        break;

      case 'improve-det':
        try {
          return display.buildImproveDet(value, display);
        } catch (error) {
          // console.log(error);
          return '';
        }
        break;

      case 'schools':
        try {
          return display.buildSchools(value, display);
        } catch (error) {
          // console.log(error);
          return '';
        }
        break;

      case 'recycling':
        try {
          return display.buildRecycling(value, display);
        } catch (error) {
          // console.log(error);
          return '';
        }
        break;

      case 'historicDistrict':
        try {
          return display.buildHistoricDistrict(value);
        } catch (error) {
          // console.log(error);
          return '';
        }
        break;

      case 'fireEscrow':
        try {
          return display.buildFireEscrow(value);
        } catch (error) {
          // console.log(error);
          return '';
        }
        break;

      case 'DWSDBackupProtection':
        try {
          return display.buildDWSDBackupProtection(value);
        } catch (error) {
          return '';
        }
        break;

      default:
        return '';
        break;
    }
  }

  printInfo(display) {
    let divContents = display.buildDataSection(display);
    let a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write('<head><style>@media print {.noprint { visibility: hidden;} p.data-block-title{border-bottom: 1px solid;} .data-block-title button { display: none; } body { column-count: 2;} .data-block {     -webkit-column-break-inside: avoid; page-break-inside: avoid; break-inside: avoid; } }</style></head>');
    a.document.write('<body >');
    a.document.write(divContents.children[1].innerHTML);
    a.document.write('</body>');
    a.document.close();
    a.print();
  }

  buildDataBlock(display, dataSet) {
    const app = document.getElementsByTagName('my-home-info');
    const mapAvailable = app[0].getAttribute('data-map-available');
    const dataBlock = document.createElement('article');
    dataBlock.className = 'data-block';
    let datasetValues = display.selectDataBlockType(display, dataSet);
    if (datasetValues == undefined || datasetValues.content == null) {
      return null;
    } else {
      const dataBlockTitle = document.createElement('p');
      dataBlockTitle.className = 'data-block-title';
      if (mapAvailable == 'true') {
        const text = document.createElement('span');
        text.innerText = datasetValues.title;
        const mapButton = document.createElement('cod-button');
        mapButton.setAttribute('data-map-active-data', dataSet.id);
        mapButton.setAttribute('data-label', 'View Map');
        mapButton.setAttribute('data-size', 'xsmall');
        mapButton.setAttribute('data-img', 'https://detroitmi.gov/sites/detroitmi.localhost/files/2023-02/map.png');
        mapButton.setAttribute('data-img-alt', 'map');
        mapButton.setAttribute('data-shape', '');
        mapButton.setAttribute('data-hover', false);
        mapButton.setAttribute('data-background-color', 'color-light');
        mapButton.setAttribute('data-primary', true);
        mapButton.addEventListener('click', (ev) => {
          app[0].setAttribute('data-map-active-data', ev.target.getAttribute('data-map-active-data'));
          app[0].setAttribute('data-app-state', 'map');
        });
        dataBlockTitle.appendChild(text);
        dataBlockTitle.appendChild(mapButton);
      } else {
        dataBlockTitle.innerText = datasetValues.title;
      }
      dataBlock.appendChild(dataBlockTitle);
      const dataBlockContent = document.createElement('article');
      dataBlockContent.className = 'data-block-content';
      dataBlockContent.innerHTML = datasetValues.content;
      dataBlock.appendChild(dataBlockContent);
      return dataBlock;
    }
  }

  buildDataSection(display) {
    const app = document.getElementsByTagName('my-home-info');
    const appMode = app[0].getAttribute('data-app-mode');
    const results = document.createElement('section');
    results.id = 'data-results';
    if (appMode == 'my-home-info') {
      const sectionTitle = document.createElement('p');
      sectionTitle.className = 'data-title';
      sectionTitle.innerText = app[0].getAttribute('data-active-section').toUpperCase();
      results.appendChild(sectionTitle);
    }
    const dataBlocks = document.createElement('div');
    dataBlocks.id = 'data-blocks';
    results.appendChild(dataBlocks);

    const apiDataSets = JSON.parse(app[0].getAttribute('data-api-active-datasets'));
    for (const dataSet in apiDataSets) {
      if (Object.hasOwnProperty.call(apiDataSets, dataSet)) {
        if (display.buildDataBlock(display, apiDataSets[dataSet]) != null) {
          dataBlocks.appendChild(display.buildDataBlock(display, apiDataSets[dataSet]));
        }
      }
    }
    return results;
  }

  loadDisplay(display) {
    const shadow = display.shadowRoot;
    const displayWrapper = document.createElement('section');
    const geocoder = document.createElement('app-geocoder');
    const navTools = document.createElement('app-nav-tools');
    const app = document.getElementsByTagName('my-home-info');
    navTools.printInfo = display.printInfo;
    displayWrapper.id = 'display-wrapper';
    switch (this.getAttribute('data-display-type')) {
      case 'welcome':
        shadow.appendChild(display.welcomeStyle);
        const imageWrapper = document.createElement('div');
        imageWrapper.id = 'welcome-img-wrapper';
        imageWrapper.appendChild(this.neighborhoodImage);
        displayWrapper.appendChild(imageWrapper);
        const textWrapperWelcome = document.createElement('article');
        displayWrapper.appendChild(textWrapperWelcome);
        const titleWelcome = document.createElement('p');
        titleWelcome.setAttribute('aria-label', 'title');
        titleWelcome.innerText = 'It’s all here. All in one place.';
        titleWelcome.className = 'display-title';
        textWrapperWelcome.appendChild(titleWelcome)
        const textWelcome = document.createElement('p');
        textWelcome.innerText = 'Enter your home address to find out your city councilmember and neighborhood district manager, along with local information about trash/recycling, your neighborhood police officer, city issues reported in your neighborhood, and more.';
        textWrapperWelcome.appendChild(textWelcome);
        textWrapperWelcome.appendChild(geocoder);
        shadow.appendChild(displayWrapper);
        break;

      case 'active':
        shadow.appendChild(display.welcomeStyle);
        displayWrapper.appendChild(geocoder);
        shadow.appendChild(displayWrapper);
        break;

      case 'loading':
        const loader = document.createElement('cod-loader');
        loader.setAttribute('data-color', 'color-3');
        displayWrapper.appendChild(loader);
        shadow.appendChild(displayWrapper);
        break;

      case 'results':
        let parcelData = JSON.parse(app[0].getAttribute('data-parcel-id'));
        shadow.appendChild(display.resultsStyle);
        let resultsContainer = document.createElement('section');
        resultsContainer.className = 'results-container';
        resultsContainer.appendChild(navTools);
        let dataSetResults = document.createElement('article');
        dataSetResults.className = 'dataset-results';
        let addressBox = document.createElement('article');
        addressBox.className = 'result-address';
        addressBox.innerText = parcelData.address;
        dataSetResults.appendChild(addressBox);
        let results = display.buildDataSection(display);
        dataSetResults.appendChild(results);
        resultsContainer.appendChild(dataSetResults);
        displayWrapper.appendChild(resultsContainer);
        shadow.appendChild(displayWrapper);
        break;

      case 'error':
        let errorContainer = document.createElement('section');
        shadow.appendChild(display.resultsStyle);
        errorContainer.className = 'results-container';
        errorContainer.appendChild(navTools);
        let errorBox = document.createElement('article');
        errorBox.className = 'error-result';
        errorBox.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="70" viewBox="0 0 100 68">
          <g id="large">
            <path fill="none" stroke="#F44" d="M55.8 38.5l6.2-1.2c0-1.8-.1-3.5-.4-5.3l-6.3-.2c-.5-2-1.2-4-2.1-6l4.8-4c-.9-1.6-1.9-3-3-4.4l-5.6 3c-1.3-1.6-3-3-4.7-4.1l2-6A30 30 0 0 0 42 8l-3.3 5.4c-2-.7-4.2-1-6.2-1.2L31.3 6c-1.8 0-3.5.1-5.3.4l-.2 6.3c-2 .5-4 1.2-6 2.1l-4-4.8c-1.6.9-3 1.9-4.4 3l3 5.6c-1.6 1.3-3 3-4.1 4.7l-6-2A32.5 32.5 0 0 0 2 26l5.4 3.3c-.7 2-1 4.2-1.2 6.2L0 36.7c0 1.8.1 3.5.4 5.3l6.3.2c.5 2 1.2 4 2.1 6l-4.8 4c.9 1.6 1.9 3 3 4.4l5.6-3c1.4 1.6 3 3 4.7 4.1l-2 6A30.5 30.5 0 0 0 20 66l3.4-5.4c2 .7 4 1 6.1 1.2l1.2 6.2c1.8 0 3.5-.1 5.3-.4l.2-6.3c2-.5 4-1.2 6-2.1l4 4.8c1.6-.9 3-1.9 4.4-3l-3-5.6c1.6-1.3 3-3 4.1-4.7l6 2A32 32 0 0 0 60 48l-5.4-3.3c.7-2 1-4.2 1.2-6.2zm-13.5 4a12.5 12.5 0 1 1-22.6-11 12.5 12.5 0 0 1 22.6 11z"/>
            <animateTransform attributeName="transform" begin="0s" dur="3s" from="0 31 37" repeatCount="indefinite" to="360 31 37" type="rotate"/>
          </g>
          <g id="small">
            <path fill="none" stroke="#F44" d="M93 19.3l6-3c-.4-1.6-1-3.2-1.7-4.8L90.8 13c-.9-1.4-2-2.7-3.4-3.8l2.1-6.3A21.8 21.8 0 0 0 85 .7l-3.6 5.5c-1.7-.4-3.4-.5-5.1-.3l-3-5.9c-1.6.4-3.2 1-4.7 1.7L70 8c-1.5 1-2.8 2-3.9 3.5L60 9.4a20.6 20.6 0 0 0-2.2 4.6l5.5 3.6a15 15 0 0 0-.3 5.1l-5.9 3c.4 1.6 1 3.2 1.7 4.7L65 29c1 1.5 2.1 2.8 3.5 3.9l-2.1 6.3a21 21 0 0 0 4.5 2.2l3.6-5.6c1.7.4 3.5.5 5.2.3l2.9 5.9c1.6-.4 3.2-1 4.8-1.7L86 34c1.4-1 2.7-2.1 3.8-3.5l6.3 2.1a21.5 21.5 0 0 0 2.2-4.5l-5.6-3.6c.4-1.7.5-3.5.3-5.1zM84.5 24a7 7 0 1 1-12.8-6.2 7 7 0 0 1 12.8 6.2z"/>
            <animateTransform attributeName="transform" begin="0s" dur="2s" from="0 78 21" repeatCount="indefinite" to="-360 78 21" type="rotate"/>
          </g>
        </svg>
        <h3>No Information found on this address. Please close and try again.</h3>
        `;
        errorContainer.appendChild(errorBox);
        displayWrapper.appendChild(errorContainer);
        shadow.appendChild(displayWrapper);
        break;

      case 'print':
        parcelData = JSON.parse(app[0].getAttribute('data-parcel-id'));
        shadow.appendChild(display.resultsStyle);
        resultsContainer = document.createElement('section');
        resultsContainer.className = 'results-container';
        resultsContainer.appendChild(navTools);
        dataSetResults = document.createElement('article');
        dataSetResults.className = 'dataset-results';
        addressBox = document.createElement('article');
        addressBox.className = 'result-address';
        addressBox.innerText = parcelData.address;
        dataSetResults.appendChild(addressBox);
        results = display.buildDataSection(display);
        dataSetResults.appendChild(results);
        resultsContainer.appendChild(dataSetResults);
        displayWrapper.appendChild(resultsContainer);
        shadow.appendChild(displayWrapper);
        display.printInfo(display);
        break;

      default:
        break;
    }
  }

}
