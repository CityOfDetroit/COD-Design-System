'use strict';
import maplibregl from 'maplibre-gl';
import mapStyle from './style.json';
import styles from '!!raw-loader!./Map.css';
import maplibreStyles from '!!raw-loader!../../../../node_modules/maplibre-gl/dist/maplibre-gl.css';
export default class Map extends HTMLElement {
  static get observedAttributes() {
    return ['data-map-state', 'data-map-mode'];
  }

  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    // Creating styles
    this.styles = document.createElement('style');
    this.styles.textContent = styles;
    // Adding maplibre styles
    this.maplibreStyles = document.createElement('style');
    this.maplibreStyles.textContent = maplibreStyles;
    shadow.appendChild(this.maplibreStyles);
    shadow.appendChild(this.styles);

    // Attach the created element to the shadow DOM
    this.mapWrapper = document.createElement('section');
    this.mapWrapper.id = 'map-wrapper';
    const mapContainer = document.createElement('article');
    mapContainer.id = 'map';
    this.mapWrapper.appendChild(mapContainer);
    shadow.appendChild(this.mapWrapper);

    this.map = new maplibregl.Map({
      container: mapContainer,
      style: mapStyle,
      center: [-83.1, 42.36],
      zoom: 9,
    });
  }

  // TODO: See CityOfDetroit/detroitmi#1099
  // eslint-disable-next-line no-unused-vars
  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'data-map-state': {
        const locationPoint = JSON.parse(this.getAttribute('data-location'));
        const coord = [locationPoint.location.x, locationPoint.location.y];
        this.map.addControl(new maplibregl.NavigationControl());
        this.map.on('style.load', () => {
          this.map.resize();

          if (locationPoint) {
            const marker = new maplibregl.Marker();
            marker.setLngLat(coord);
            marker.addTo(this.map);
            this.map.flyTo({
              // These options control the ending camera position: centered at
              // the target, at zoom level 9, and north up.
              center: coord,
              zoom: 12,
              bearing: 0,

              // These options control the flight curve, making it move
              // slowly and zoom out almost completely before starting
              // to pan.
              speed: 1.5, // make the flying slow
              curve: 1, // change the speed at which it zooms out

              // This can be any easing function: it takes a number between
              // 0 and 1 and returns another number between 0 and 1.
              easing: function (t) {
                return t;
              },

              // this animation is considered essential with respect to prefers-reduced-motion
              essential: true,
            });
          }

          const mapData = JSON.parse(this.getAttribute('data-map-data'));
          if(mapData){
            this.map.addSource('data-points', {
              type: 'geojson',
              data: mapData.data,
            });
            this.map.addLayer({
              id: 'data-points',
              type: 'circle',
              source: 'data-points',
              paint: {
                'circle-radius': {
                  base: 5,
                  stops: [
                    [12, 5],
                    [22, 120],
                  ],
                },
                'circle-color': '#004544',
              },
            });
          }
          
        });
        // Creating this temp variable for workaround with dealing with "this" encapsulation
        // TODO: See CityOfDetroit/detroitmi#1099
        // eslint-disable-next-line no-case-declarations
        const tempMap = this;
        this.map.on('click', 'data-points', function (e) {
          const activeData = tempMap.getAttribute('data-map-active-data');
          tempMap.buildPopup(activeData, e.features[0], tempMap, e);
        });
        this.map.on('mouseenter', 'data-points', function () {
          tempMap.map.getCanvas().style.cursor = 'pointer';
        });

        // Change it back to a pointer when it leaves.
        this.map.on('mouseleave', 'data-points', function () {
          tempMap.map.getCanvas().style.cursor = '';
        });
        break;
      }

      case 'data-map-mode': {
        // Get map mode
        const mapMode = this.getAttribute('data-map-mode');
        switch (mapMode) {
          case 'my-home-info': {
            const parentComponentName = this.getAttribute('data-parent-component');
            const app = document.getElementsByTagName(parentComponentName);
            const closeMapBtn = document.createElement('cod-button');
            closeMapBtn.addEventListener('click', () => {
              (app[0]) ? app[0].setAttribute('data-app-state', 'results') : 0;
            });
            closeMapBtn.setAttribute('data-primary', true);
            closeMapBtn.setAttribute('data-label', 'x');
            closeMapBtn.setAttribute('data-size', 'large');
            closeMapBtn.setAttribute('data-hover', false);
            closeMapBtn.setAttribute('data-background-color', 'warning');
            closeMapBtn.setAttribute('data-img', '');
            closeMapBtn.setAttribute('data-img-alt', '');
            closeMapBtn.setAttribute('data-icon', '');
            closeMapBtn.setAttribute('data-shape', 'square');
            this.mapWrapper.appendChild(closeMapBtn);
            (app[0]) ? app[0].setAttribute('data-map-state', 'init') : 0;
            break;
          }

          case 'single-location': {
            break;
          }

          default:
            break;
        }
        break;
      }

      default:
        break;
    }
  }

  buildPopup(dataType, data, map, e) {
    switch (dataType) {
      case 'schools':
        new maplibregl.Popup()
          .setLngLat(e.lngLat)
          .setHTML(
            `<strong>School Name:</strong> ${e.features[0].properties.EntityOfficialName}`,
          )
          .addTo(map.map);
        break;

      case 'demos-data':
        new maplibregl.Popup()
          .setLngLat(e.lngLat)
          .setHTML(
            `<strong>Demo Address:</strong> ${e.features[0].properties.address}`,
          )
          .addTo(map.map);
        break;

      case 'stabilization-data':
        new maplibregl.Popup()
          .setLngLat(e.lngLat)
          .setHTML(
            `<strong>Stabilization Address:</strong> ${e.features[0].properties.address}`,
          )
          .addTo(map.map);
        break;

      case 'improve-det':
        new maplibregl.Popup()
          .setLngLat(e.lngLat)
          .setHTML(
            `<strong>Issue type:</strong> ${e.features[0].properties.request_type_title}`,
          )
          .addTo(map.map);
        break;

      default:
        break;
    }
  }
}
