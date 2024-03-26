import styles from '!!raw-loader!./Icon.css';
import varStyles from '!!raw-loader!../../../shared/variables.css';
import bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';

export default class Icon extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    // Add styles
    const bootStyles = document.createElement('style');
    bootStyles.textContent = bootstrapStyles;
    const variableStyles = document.createElement('style');
    variableStyles.textContent = varStyles;
    const itemStyles = document.createElement('style');
    itemStyles.textContent = styles;
    shadow.appendChild(bootStyles);
    shadow.appendChild(variableStyles);
    shadow.appendChild(itemStyles);
  }

  connectedCallback() {
    if (this.isIconConnected()) {
      return;
    }

    // Create a container for the icon and circle image
    const container = document.createElement('div');
    container.classList.add('icon-container', 'd-inline-block');

    // Icon attributes
    const icon = this.getAttribute('data-icon');
    let size = this.getAttribute('data-size');

    switch (size) {
      case 'small':
        size = '16';
        break;

      case 'medium':
        size = '24';
        break;

      case 'large':
        size = '36';
        break;

      case 'x-large':
        size = '54';
        break;

      default:
        size = '24';
        break;
    }

    const iconElement = document.createElement('span');
    iconElement.innerHTML = this.getIcon(icon, size);

    // Append the icon element to the container
    container.appendChild(iconElement);

    // Boolean Attribute adds circle if present
    const isHighlighted = this.hasAttribute('is-highlighted');

    // Add the highlighted class if is-highlighted attribute is present
    if (isHighlighted) {
      container.classList.add('highlighted');
    }

    // Append the container to the shadow root
    this.shadowRoot.appendChild(container);
  }

  isIconConnected() {
    return this.shadowRoot.querySelector('span') !== null;
  }

  getIcon(icon, size) {
    switch (icon) {
      case 'bounding-box':
        return `
                <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-bounding-box" viewBox="0 0 16 16">
                  <path d="M5 2V0H0v5h2v6H0v5h5v-2h6v2h5v-5h-2V5h2V0h-5v2zm6 1v2h2v6h-2v2H5v-2H3V5h2V3zm1-2h3v3h-3zm3 11v3h-3v-3zM4 15H1v-3h3zM1 4V1h3v3z"/>
                </svg>`;
      case 'bounding-box-circle':
        return `
                <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-bounding-box-circles" viewBox="0 0 16 16">
                  <path d="M2 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M0 2a2 2 0 0 1 3.937-.5h8.126A2 2 0 1 1 14.5 3.937v8.126a2 2 0 1 1-2.437 2.437H3.937A2 2 0 1 1 1.5 12.063V3.937A2 2 0 0 1 0 2m2.5 1.937v8.126c.703.18 1.256.734 1.437 1.437h8.126a2 2 0 0 1 1.437-1.437V3.937A2 2 0 0 1 12.063 2.5H3.937A2 2 0 0 1 2.5 3.937M14 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M2 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                </svg>`;
      case 'chevron-right':
        return `
                <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>`;

      case 'chevron-right-circle':
        return `
                <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 32 32">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-100.000000, -1087.000000)" fill="currentColor">
                  <path d="M116,1117 C108.268,1117 102,1110.73 102,1103 C102,1095.27 108.268,1089 116,1089 C123.732,1089 130,1095.27 130,1103 C130,1110.73 123.732,1117 116,1117 L116,1117 Z M116,1087 C107.164,1087 100,1094.16 100,1103 C100,1111.84 107.164,1119 116,1119 C124.836,1119 132,1111.84 132,1103 C132,1094.16 124.836,1087 116,1087 L116,1087 Z M120.536,1102.12 L112.879,1094.46 C112.488,1094.07 111.855,1094.07 111.464,1094.46 C111.074,1094.86 111.074,1095.49 111.464,1095.88 L118.586,1103 L111.464,1110.12 C111.074,1110.51 111.074,1111.14 111.464,1111.54 C111.855,1111.93 112.488,1111.93 112.879,1111.54 L120.536,1103.88 C120.775,1103.64 120.85,1103.31 120.795,1103 C120.85,1102.69 120.775,1102.36 120.536,1102.12 L120.536,1102.12 Z" id="chevron-right-circle" sketch:type="MSShapeGroup"></path>
                </g>
                </g>
                </svg>`;

      case 'chevron-right-circle-fill':
        return `
                <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-chevron-right-fill" viewBox="0 0 32 32">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-102.000000, -1089.000000)" fill="#000000">
                  <path d="M122.536,1105.88 L114.879,1113.54 C114.488,1113.93 113.855,1113.93 113.464,1113.54 C113.074,1113.14 113.074,1112.51 113.464,1112.12 L120.586,1105 L113.464,1097.88 C113.074,1097.49 113.074,1096.86 113.464,1096.46 C113.855,1096.07 114.488,1096.07 114.879,1096.46 L122.536,1104.12 C122.775,1104.36 122.85,1104.69 122.795,1105 C122.85,1105.31 122.775,1105.64 122.536,1105.88 L122.536,1105.88 Z M118,1089 C109.164,1089 102,1096.16 102,1105 C102,1113.84 109.164,1121 118,1121 C126.836,1121 134,1113.84 134,1105 C134,1096.16 126.836,1089 118,1089 L118,1089 Z" id="chevron-right-circle" sketch:type="MSShapeGroup"></path>
                </g>
                </g>
                </svg>`;

      case 'chevron-left':
        return `
                <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>`;

      case 'chevron-left-circle':
        return `
                <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 32 32">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-568.000000, -1035.000000)" fill="currentColor">
                  <path d="M584,1065 C576.268,1065 570,1058.73 570,1051 C570,1043.27 576.268,1037 584,1037 C591.732,1037 598,1043.27 598,1051 C598,1058.73 591.732,1065 584,1065 L584,1065 Z M584,1035 C575.163,1035 568,1042.16 568,1051 C568,1059.84 575.163,1067 584,1067 C592.837,1067 600,1059.84 600,1051 C600,1042.16 592.837,1035 584,1035 L584,1035 Z M588.535,1042.46 C588.145,1042.07 587.512,1042.07 587.121,1042.46 L579.465,1050.12 C579.225,1050.36 579.15,1050.69 579.205,1051 C579.15,1051.31 579.225,1051.64 579.465,1051.88 L587.121,1059.54 C587.512,1059.93 588.145,1059.93 588.535,1059.54 C588.926,1059.14 588.926,1058.51 588.535,1058.12 L581.414,1051 L588.535,1043.88 C588.926,1043.49 588.926,1042.86 588.535,1042.46 L588.535,1042.46 Z" id="chevron-left-circle" sketch:type="MSShapeGroup"/>
                </g>
                </g>
                </svg>`;

      case 'chevron-left-circle-fill':
        return `
                <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-chevron-right-fill" viewBox="0 0 32 32">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-570.000000, -1037.000000)" fill="currentColor">
                  <path d="M590.535,1060.12 C590.926,1060.51 590.926,1061.14 590.535,1061.54 C590.145,1061.93 589.512,1061.93 589.121,1061.54 L581.465,1053.88 C581.225,1053.64 581.15,1053.31 581.205,1053 C581.15,1052.69 581.225,1052.36 581.465,1052.12 L589.121,1044.46 C589.512,1044.07 590.145,1044.07 590.535,1044.46 C590.926,1044.86 590.926,1045.49 590.535,1045.88 L583.414,1053 L590.535,1060.12 L590.535,1060.12 Z M586,1037 C577.163,1037 570,1044.16 570,1053 C570,1061.84 577.163,1069 586,1069 C594.837,1069 602,1061.84 602,1053 C602,1044.16 594.837,1037 586,1037 L586,1037 Z" id="chevron-left-circle" sketch:type="MSShapeGroup"/>
                </g>
                </g>
                </svg>`;

      case 'chevron-up':
        return `
                <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                </svg>`;

      case 'chevron-up-circle':
        return `
                <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 32 32">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-152.000000, -1087.000000)" fill="currentColor">
                  <path d="M168,1117 C160.268,1117 154,1110.73 154,1103 C154,1095.27 160.268,1089 168,1089 C175.732,1089 182,1095.27 182,1103 C182,1110.73 175.732,1117 168,1117 L168,1117 Z M168,1087 C159.164,1087 152,1094.16 152,1103 C152,1111.84 159.164,1119 168,1119 C176.836,1119 184,1111.84 184,1103 C184,1094.16 176.836,1087 168,1087 L168,1087 Z M168.879,1098.46 C168.639,1098.22 168.311,1098.15 168,1098.21 C167.689,1098.15 167.361,1098.22 167.121,1098.46 L159.464,1106.12 C159.074,1106.51 159.074,1107.15 159.464,1107.54 C159.855,1107.93 160.488,1107.93 160.879,1107.54 L168,1100.41 L175.121,1107.54 C175.512,1107.93 176.145,1107.93 176.536,1107.54 C176.926,1107.15 176.926,1106.51 176.536,1106.12 L168.879,1098.46 L168.879,1098.46 Z" id="chevron-up-circle" sketch:type="MSShapeGroup"/>
                </g>
                </g>
                </svg>`;

      case 'chevron-up-circle-fill':
        return `
                <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-chevron-up-fill" viewBox="0 0 32 32">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-154.000000, -1089.000000)" fill="currentColor">
                  <path d="M178.536,1109.54 C178.145,1109.93 177.512,1109.93 177.121,1109.54 L170,1102.41 L162.879,1109.54 C162.488,1109.93 161.855,1109.93 161.464,1109.54 C161.074,1109.15 161.074,1108.51 161.464,1108.12 L169.121,1100.46 C169.361,1100.22 169.689,1100.15 170,1100.21 C170.311,1100.15 170.639,1100.22 170.879,1100.46 L178.536,1108.12 C178.926,1108.51 178.926,1109.15 178.536,1109.54 L178.536,1109.54 Z M170,1089 C161.164,1089 154,1096.16 154,1105 C154,1113.84 161.164,1121 170,1121 C178.836,1121 186,1113.84 186,1105 C186,1096.16 178.836,1089 170,1089 L170,1089 Z" id="chevron-up-circle" sketch:type="MSShapeGroup">
                </g>
                </g>
                </svg>`;

      case 'chevron-down':
        return `
                <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>`;

      case 'chevron-down-circle':
        return `
                <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 32 32">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-204.000000, -1087.000000)" fill="currentColor">
                  <path d="M227.121,1098.46 L220,1105.59 L212.879,1098.46 C212.488,1098.07 211.855,1098.07 211.464,1098.46 C211.074,1098.86 211.074,1099.49 211.464,1099.88 L219.122,1107.54 C219.361,1107.78 219.689,1107.85 220,1107.79 C220.311,1107.85 220.639,1107.78 220.879,1107.54 L228.536,1099.88 C228.926,1099.49 228.926,1098.86 228.536,1098.46 C228.145,1098.07 227.512,1098.07 227.121,1098.46 L227.121,1098.46 Z M220,1117 C212.268,1117 206,1110.73 206,1103 C206,1095.27 212.268,1089 220,1089 C227.732,1089 234,1095.27 234,1103 C234,1110.73 227.732,1117 220,1117 L220,1117 Z M220,1087 C211.164,1087 204,1094.16 204,1103 C204,1111.84 211.164,1119 220,1119 C228.837,1119 236,1111.84 236,1103 C236,1094.16 228.837,1087 220,1087 L220,1087 Z" id="chevron-down-circle" sketch:type="MSShapeGroup"/>
                </g>
                </g>
                </svg>`;

      case 'chevron-down-circle-fill':
        return `
                <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-chevron-down-fill" viewBox="0 0 32 32">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-206.000000, -1089.000000)" fill="currentColor">
                  <path d="M230.536,1101.88 L222.879,1109.54 C222.639,1109.78 222.311,1109.85 222,1109.79 C221.689,1109.85 221.361,1109.78 221.122,1109.54 L213.464,1101.88 C213.074,1101.49 213.074,1100.86 213.464,1100.46 C213.855,1100.07 214.488,1100.07 214.879,1100.46 L222,1107.59 L229.121,1100.46 C229.512,1100.07 230.145,1100.07 230.536,1100.46 C230.926,1100.86 230.926,1101.49 230.536,1101.88 L230.536,1101.88 Z M222,1089 C213.164,1089 206,1096.16 206,1105 C206,1113.84 213.164,1121 222,1121 C230.837,1121 238,1113.84 238,1105 C238,1096.16 230.837,1089 222,1089 L222,1089 Z" id="chevron-down-circle" sketch:type="MSShapeGroup"/>
                </g>
                </g>
                </svg>`;

      case 'house':
        return `
                <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                </svg>`;
      case 'house-fill':
        return `
                <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
                    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
                </svg>`;
      case 'exclamation-circle':
        return `
                <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                </svg>`;
      case 'exclamation-circle-fill':
        return `
                <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>`;
      case 'exclamation-triangle':
        return `
                <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
                    <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
                    <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/>
                </svg>`;
      case 'funnel':
        return `
                <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
                  <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z"/>
                </svg>`;
      case 'funnel-fill':
        return `
                <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-funnel-fill" viewBox="0 0 16 16">
                  <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z"/>
                </svg>`;
      case 'check-circle':
        return `
                <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                </svg>`;
      case 'check-circle-fill':
        return `
                <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>`;
      case 'calendar':
        return `
                <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                </svg>`;
      case 'calendar-fill':
        return `
                <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-calendar-fill" viewBox="0 0 16 16">
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z"/>
                </svg>`;
      case 'calendar-date':
        return `
                <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-calendar-date" viewBox="0 0 16 16">
                    <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z"/>
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                </svg>`;

      case 'calendar-date-fill':
        return `
                <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-calendar-date-fill" viewBox="0 0 16 16">
                    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z"/>
                <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z"/>
                </svg>`;

      case 'newspaper':
        return `
                <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-newspaper" viewBox="0 0 16 16">
                  <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z"/>
                  <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z"/>
                </svg>`;

      case 'building':
        return `
                <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
                <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
                <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z"/>
              </svg>`;

      case 'building-fill':
        return `
                <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-building-fill" viewBox="0 0 16 16">
                <path d="M3 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V16h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm1 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5"/>
              </svg>`;

      case 'buildings':
        return `
                <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-buildings" viewBox="0 0 16 16">
                <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z"/>
                <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z"/>
              </svg>`;

      case 'buildings-fill':
        return `
                <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-buildings-fill" viewBox="0 0 16 16">
                <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z"/>
              </svg>`;

      case 'currency-dollar':
        return `
                <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
                <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/>
              </svg>`;

      case 'file-earmark':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size} "fill="currentColor" class="bi bi-file-earmark" viewBox="0 0 16 16">
                  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
                </svg>`;

      case 'list-task':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-list-task" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z"/>
                  <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z"/>
                  <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z"/>
                </svg>`;

      case 'journals':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" class="bi bi-journals" viewBox="0 0 16 16">
                  <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2"/>
                  <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0"/>
                </svg>`;

      default:
        break;
    }
  }
}
