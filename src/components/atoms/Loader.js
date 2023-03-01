export default class Loader extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const loaderStyles = document.createElement('style');
    loaderStyles.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;700&display=swap')
        .loader-box{
            display: flex;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, .75);
            position: absolute;
            left: -0.2em;
            top: -0.2em;
        }
        .cod-loader-container{
          display: flex;
          margin: auto;
        }
        .cod-loader-container article{
          margin:auto;
        }
        .cod-loader-container article p { 
          text-align: center; 
          font-family: 'Montserrat', 
          sans-serif; 
          margin-left: 0.5em;
        }
        .cod-loader-bars {
            position: relative;
            width: 75px;
            height: 100px;
       }

       .cod-loader.cod-loader--color-1 .cod-loader-container article .cod-loader-bars .cod-loader__bar{
        background: #004445;
       }

       .cod-loader.cod-loader--color-2 .cod-loader-container article .cod-loader-bars .cod-loader__bar{
        background: #9FD5B3;
       }

       .cod-loader.cod-loader--color-3 .cod-loader-container article .cod-loader-bars .cod-loader__bar{
        background: #feb70d;
       }

       .cod-loader.cod-loader--color-4 .cod-loader-container article .cod-loader-bars .cod-loader__bar{
        background: #b3393b;
       }

       .cod-loader.cod-loader--color-5 .cod-loader-container article .cod-loader-bars .cod-loader__bar{
        background: #e6e6e6;
       }
        .cod-loader__bar {
            position: absolute;
            bottom: 0;
            width: 10px;
            height: 50%;
            transform-origin: center bottom;
            box-shadow: 1px 1px 0 rgba(0, 0, 0, .2);
       }
        .cod-loader__bar:nth-child(1) {
            left: 0px;
            transform: scale(1, 0.2);
            animation: barUp1 4s infinite;
       }
        .cod-loader__bar:nth-child(2) {
            left: 20px;
            transform: scale(1, 0.4);
            animation: barUp2 4s infinite;
       }
        .cod-loader__bar:nth-child(3) {
            left: 40px;
            transform: scale(1, 0.6);
            animation: barUp3 4s infinite;
       }
        .cod-loader__bar:nth-child(4) {
            left: 60px;
            transform: scale(1, 0.8);
            animation: barUp4 4s infinite;
       }
        .cod-loader__bar:nth-child(5) {
            left: 80px;
            transform: scale(1, 1);
            animation: barUp5 4s infinite;
       }
        .cod-loader__ball {
            position: absolute;
            bottom: 10px;
            left: 0;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            animation: ball 4s infinite;
       }
       .cod-loader.cod-loader--color-1 .cod-loader-container article .cod-loader-bars .cod-loader__ball{
        background: #004445;
       }

       .cod-loader.cod-loader--color-2 .cod-loader-container article .cod-loader-bars .cod-loader__ball{
        background: #9FD5B3;
       }

       .cod-loader.cod-loader--color-3 .cod-loader-container article .cod-loader-bars .cod-loader__ball{
        background: #feb70d;
       }

       .cod-loader.cod-loader--color-4 .cod-loader-container article .cod-loader-bars .cod-loader__ball{
        background: #b3393b;
       }

       .cod-loader.cod-loader--color-5 .cod-loader-container article .cod-loader-bars .cod-loader__ball{
        background: #e6e6e6;
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
    // Loader attributes
    this.shadowRoot.appendChild(loaderStyles);
    const loader = document.createElement('article');
    let color = this.getAttribute('data-color');
    loader.className = ['cod-loader', `cod-loader--${color || 'color-1'}`].join(' ');
    loader.innerHTML = `
    <article class="cod-loader-container">
        <article>
        <div class="cod-loader-bars">
            <div class="cod-loader__bar"></div>
            <div class="cod-loader__bar"></div>
            <div class="cod-loader__bar"></div>
            <div class="cod-loader__bar"></div>
            <div class="cod-loader__bar"></div>
            <div class="cod-loader__ball"></div>
        </div>
        <p>LOADING</p>
        </article>
    </article>`;
    this.shadowRoot.appendChild(loader);
  }
};