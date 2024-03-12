"use strict";(self.webpackChunkcod_design_system=self.webpackChunkcod_design_system||[]).push([[4164],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:function(){return _defineProperty}})},"./src/stories/container.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Container:function(){return container_stories_Container},ContainerColor:function(){return ContainerColor},ContainerElements:function(){return ContainerElements},ContainerExtras:function(){return ContainerExtras},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return container_stories}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),variables=__webpack_require__("./node_modules/raw-loader/dist/cjs.js!./src/shared/variables.css"),themed_bootstrap=__webpack_require__("./node_modules/raw-loader/dist/cjs.js!./src/shared/themed-bootstrap.css");function cov_20b41fbw20(){var path="/home/runner/work/COD-Design-System/COD-Design-System/src/components/atoms/Container/Container.js",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/home/runner/work/COD-Design-System/COD-Design-System/src/components/atoms/Container/Container.js",statementMap:{0:{start:{line:4,column:15},end:{line:4,column:49}},1:{start:{line:5,column:0},end:{line:5,column:41}},2:{start:{line:9,column:4},end:{line:9,column:12}},3:{start:{line:11,column:17},end:{line:13,column:6}},4:{start:{line:14,column:4},end:{line:14,column:57}},5:{start:{line:15,column:4},end:{line:15,column:51}},6:{start:{line:18,column:4},end:{line:25,column:7}},7:{start:{line:21,column:25},end:{line:21,column:50}},8:{start:{line:22,column:6},end:{line:24,column:9}},9:{start:{line:23,column:8},end:{line:23,column:36}},10:{start:{line:28,column:21},end:{line:28,column:52}},11:{start:{line:29,column:4},end:{line:29,column:45}},12:{start:{line:30,column:25},end:{line:30,column:56}},13:{start:{line:31,column:4},end:{line:31,column:43}},14:{start:{line:32,column:26},end:{line:32,column:57}},15:{start:{line:33,column:4},end:{line:33,column:41}},16:{start:{line:34,column:4},end:{line:34,column:44}},17:{start:{line:35,column:4},end:{line:35,column:48}},18:{start:{line:36,column:4},end:{line:36,column:49}},19:{start:{line:40,column:15},end:{line:40,column:45}},20:{start:{line:43,column:15},end:{line:43,column:45}},21:{start:{line:46,column:26},end:{line:46,column:68}},22:{start:{line:49,column:23},end:{line:49,column:62}},23:{start:{line:50,column:4},end:{line:50,column:113}},24:{start:{line:51,column:4},end:{line:51,column:36}},25:{start:{line:52,column:4},end:{line:52,column:48}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:7,column:2},end:{line:7,column:3}},loc:{start:{line:7,column:16},end:{line:26,column:3}},line:7},1:{name:"(anonymous_1)",decl:{start:{line:18,column:42},end:{line:18,column:43}},loc:{start:{line:18,column:48},end:{line:25,column:5}},line:18},2:{name:"(anonymous_2)",decl:{start:{line:22,column:27},end:{line:22,column:28}},loc:{start:{line:22,column:35},end:{line:24,column:7}},line:22},3:{name:"(anonymous_3)",decl:{start:{line:27,column:2},end:{line:27,column:3}},loc:{start:{line:27,column:22},end:{line:53,column:3}},line:27}},branchMap:{0:{loc:{start:{line:50,column:48},end:{line:50,column:69}},type:"binary-expr",locations:[{start:{line:50,column:48},end:{line:50,column:63}},{start:{line:50,column:67},end:{line:50,column:69}}],line:50},1:{loc:{start:{line:50,column:82},end:{line:50,column:100}},type:"binary-expr",locations:[{start:{line:50,column:82},end:{line:50,column:94}},{start:{line:50,column:98},end:{line:50,column:100}}],line:50}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0},f:{0:0,1:0,2:0,3:0},b:{0:[0,0],1:[0,0]},inputSourceMap:{version:3,file:void 0,names:["styles","varStyles","bootstrapStyles","template","document","createElement","innerHTML","Container","HTMLElement","constructor","shadow","attachShadow","mode","appendChild","content","cloneNode","container","addEventListener","ev","tempElements","Array","from","children","forEach","node","append","connectedCallback","bootStyles","textContent","variableStyles","containerStyles","shadowRoot","type","getAttribute","text","backgroundColor","extraClasses","className","concat","join","innerText"],sourceRoot:void 0,sources:["/home/runner/work/COD-Design-System/COD-Design-System/src/components/atoms/Container/Container.js"],sourcesContent:["import styles from '!!raw-loader!./Container.css';\nimport varStyles from '!!raw-loader!../../../shared/variables.css';\nimport bootstrapStyles from '!!raw-loader!../../../shared/themed-bootstrap.css';\n\nconst template = document.createElement('template');\n\ntemplate.innerHTML = `\n<slot></slot>\n`;\n\nexport default class Container extends HTMLElement {\n  constructor() {\n    // Always call super first in constructor\n    super();\n    // Create a shadow root\n    const shadow = this.attachShadow({ mode: 'open' });\n    shadow.appendChild(template.content.cloneNode(true));\n    this.container = document.createElement('div');\n    // TODO: See CityOfDetroit/detroitmi#1099\n    // eslint-disable-next-line no-unused-vars\n    shadow.addEventListener('slotchange', (ev) => {\n      // TODO: See CityOfDetroit/detroitmi#1099\n      // eslint-disable-next-line prefer-const\n      let tempElements = Array.from(this.children);\n      tempElements.forEach((node) => {\n        this.container.append(node);\n      });\n    });\n  }\n\n  connectedCallback() {\n    const bootStyles = document.createElement('style');\n    bootStyles.textContent = bootstrapStyles;\n    const variableStyles = document.createElement('style');\n    variableStyles.textContent = varStyles;\n    const containerStyles = document.createElement('style');\n    containerStyles.textContent = styles;\n    this.shadowRoot.appendChild(bootStyles);\n    this.shadowRoot.appendChild(variableStyles);\n    this.shadowRoot.appendChild(containerStyles);\n    // container attributes\n    // TODO: See CityOfDetroit/detroitmi#1099\n    // eslint-disable-next-line prefer-const\n    let type = this.getAttribute('data-type');\n    // TODO: See CityOfDetroit/detroitmi#1099\n    // eslint-disable-next-line prefer-const\n    let text = this.getAttribute('data-text');\n    // TODO: See CityOfDetroit/detroitmi#1099\n    // eslint-disable-next-line prefer-const\n    let backgroundColor = this.getAttribute('data-background-color');\n    // TODO: See CityOfDetroit/detroitmi#1099\n    // eslint-disable-next-line prefer-const\n    let extraClasses = this.getAttribute('data-extra-classes');\n    this.container.className = [\n      type,\n      `${backgroundColor || ''}`,\n      `${extraClasses || ''}`,\n    ].join(' ');\n    this.container.innerText = text;\n    this.shadowRoot.appendChild(this.container);\n  }\n}\n"],mappings:"AAAA,OAAOA,MAAM,MAAM,8BAA8B;AACjD,OAAOC,SAAS,MAAM,4CAA4C;AAClE,OAAOC,eAAe,MAAM,mDAAmD;AAE/E,IAAMC,QAAQ,GAAGC,QAAQ,CAACC,aAAa,CAAC,UAAU,CAAC;AAEnDF,QAAQ,CAACG,SAAS,sBAEjB;AAED,eAAe,MAAMC,SAAS,SAASC,WAAW,CAAC;EACjDC,WAAWA,CAAA,EAAG;IACZ;IACA,KAAK,EAAE;IACP;IACA,IAAMC,MAAM,GAAG,IAAI,CAACC,YAAY,CAAC;MAAEC,IAAI,EAAE;IAAO,CAAC,CAAC;IAClDF,MAAM,CAACG,WAAW,CAACV,QAAQ,CAACW,OAAO,CAACC,SAAS,CAAC,IAAI,CAAC,CAAC;IACpD,IAAI,CAACC,SAAS,GAAGZ,QAAQ,CAACC,aAAa,CAAC,KAAK,CAAC;IAC9C;IACA;IACAK,MAAM,CAACO,gBAAgB,CAAC,YAAY,EAAGC,EAAE,IAAK;MAC5C;MACA;MACA,IAAIC,YAAY,GAAGC,KAAK,CAACC,IAAI,CAAC,IAAI,CAACC,QAAQ,CAAC;MAC5CH,YAAY,CAACI,OAAO,CAAEC,IAAI,IAAK;QAC7B,IAAI,CAACR,SAAS,CAACS,MAAM,CAACD,IAAI,CAAC;MAC7B,CAAC,CAAC;IACJ,CAAC,CAAC;EACJ;EAEAE,iBAAiBA,CAAA,EAAG;IAClB,IAAMC,UAAU,GAAGvB,QAAQ,CAACC,aAAa,CAAC,OAAO,CAAC;IAClDsB,UAAU,CAACC,WAAW,GAAG1B,eAAe;IACxC,IAAM2B,cAAc,GAAGzB,QAAQ,CAACC,aAAa,CAAC,OAAO,CAAC;IACtDwB,cAAc,CAACD,WAAW,GAAG3B,SAAS;IACtC,IAAM6B,eAAe,GAAG1B,QAAQ,CAACC,aAAa,CAAC,OAAO,CAAC;IACvDyB,eAAe,CAACF,WAAW,GAAG5B,MAAM;IACpC,IAAI,CAAC+B,UAAU,CAAClB,WAAW,CAACc,UAAU,CAAC;IACvC,IAAI,CAACI,UAAU,CAAClB,WAAW,CAACgB,cAAc,CAAC;IAC3C,IAAI,CAACE,UAAU,CAAClB,WAAW,CAACiB,eAAe,CAAC;IAC5C;IACA;IACA;IACA,IAAIE,IAAI,GAAG,IAAI,CAACC,YAAY,CAAC,WAAW,CAAC;IACzC;IACA;IACA,IAAIC,IAAI,GAAG,IAAI,CAACD,YAAY,CAAC,WAAW,CAAC;IACzC;IACA;IACA,IAAIE,eAAe,GAAG,IAAI,CAACF,YAAY,CAAC,uBAAuB,CAAC;IAChE;IACA;IACA,IAAIG,YAAY,GAAG,IAAI,CAACH,YAAY,CAAC,oBAAoB,CAAC;IAC1D,IAAI,CAACjB,SAAS,CAACqB,SAAS,GAAG,CACzBL,IAAI,KAAAM,MAAA,CACDH,eAAe,IAAI,EAAE,MAAAG,MAAA,CACrBF,YAAY,IAAI,EAAE,EACtB,CAACG,IAAI,CAAC,GAAG,CAAC;IACX,IAAI,CAACvB,SAAS,CAACwB,SAAS,GAAGN,IAAI;IAC/B,IAAI,CAACH,UAAU,CAAClB,WAAW,CAAC,IAAI,CAACG,SAAS,CAAC;EAC7C;AACF"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"10713f4efa417ba5d168520cd5c33311fb00fe21"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"10713f4efa417ba5d168520cd5c33311fb00fe21"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_20b41fbw20=function(){return actualCoverage},actualCoverage}cov_20b41fbw20();var _Container$parameters,_Container$parameters2,_ContainerColor$param,_ContainerColor$param2,_ContainerExtras$para,_ContainerExtras$para2,_ContainerElements$pa,_ContainerElements$pa2,template=(cov_20b41fbw20().s[0]++,document.createElement("template"));cov_20b41fbw20().s[1]++,template.innerHTML="\n<slot></slot>\n";class Container extends HTMLElement{constructor(){cov_20b41fbw20().f[0]++,cov_20b41fbw20().s[2]++,super();var shadow=(cov_20b41fbw20().s[3]++,this.attachShadow({mode:"open"}));cov_20b41fbw20().s[4]++,shadow.appendChild(template.content.cloneNode(!0)),cov_20b41fbw20().s[5]++,this.container=document.createElement("div"),cov_20b41fbw20().s[6]++,shadow.addEventListener("slotchange",(ev=>{cov_20b41fbw20().f[1]++;var tempElements=(cov_20b41fbw20().s[7]++,Array.from(this.children));cov_20b41fbw20().s[8]++,tempElements.forEach((node=>{cov_20b41fbw20().f[2]++,cov_20b41fbw20().s[9]++,this.container.append(node)}))}))}connectedCallback(){cov_20b41fbw20().f[3]++;var bootStyles=(cov_20b41fbw20().s[10]++,document.createElement("style"));cov_20b41fbw20().s[11]++,bootStyles.textContent=themed_bootstrap.Z;var variableStyles=(cov_20b41fbw20().s[12]++,document.createElement("style"));cov_20b41fbw20().s[13]++,variableStyles.textContent=variables.Z;var containerStyles=(cov_20b41fbw20().s[14]++,document.createElement("style"));cov_20b41fbw20().s[15]++,containerStyles.textContent=".container.color-1,\n.container-fluid.color-1,\n.container-xxl.color-1,\n.container-xl.color-1,\n.container-lg.color-1,\n.container-md.color-1,\n.container-sm.color-1 {\n  background-color: var(--color-1);\n  color: var(--color-light);\n}\n\n.container.color-2,\n.container-fluid.color-2,\n.container-xxl.color-2,\n.container-xl.color-2,\n.container-lg.color-2,\n.container-md.color-2,\n.container-sm.color-2 {\n  background-color: var(--color-2);\n  color: var(--color-1);\n}\n\n.container.color-3,\n.container-fluid.color-3,\n.container-xxl.color-3,\n.container-xl.color-3,\n.container-lg.color-3,\n.container-md.color-3,\n.container-sm.color-3 {\n  background-color: var(--color-3);\n  color: var(--color-dark);\n}\n\n.container.color-4,\n.container-fluid.color-4,\n.container-xxl.color-4,\n.container-xl.color-4,\n.container-lg.color-4,\n.container-md.color-4,\n.container-sm.color-4 {\n  background-color: var(--color-4);\n  color: var(--color-light);\n}\n\n.container.color-5,\n.container-fluid.color-5,\n.container-xxl.color-5,\n.container-xl.color-5,\n.container-lg.color-5,\n.container-md.color-5,\n.container-sm.color-5 {\n  background-color: var(--color-5);\n  color: var(--color-dark);\n}\n\n.container.color-light,\n.container-fluid.color-light,\n.container-xxl.color-light,\n.container-xl.color-light,\n.container-lg.color-light,\n.container-md.color-light,\n.container-sm.color-light {\n  background-color: var(--color-light);\n  color: var(--color-dark);\n}\n\n.container.color-dark,\n.container-fluid.color-dark,\n.container-xxl.color-dark,\n.container-xl.color-dark,\n.container-lg.color-dark,\n.container-md.color-dark,\n.container-sm.color-dark {\n  background-color: var(--color-dark);\n  color: var(--color-light);\n}\n",cov_20b41fbw20().s[16]++,this.shadowRoot.appendChild(bootStyles),cov_20b41fbw20().s[17]++,this.shadowRoot.appendChild(variableStyles),cov_20b41fbw20().s[18]++,this.shadowRoot.appendChild(containerStyles);var type=(cov_20b41fbw20().s[19]++,this.getAttribute("data-type")),text=(cov_20b41fbw20().s[20]++,this.getAttribute("data-text")),backgroundColor=(cov_20b41fbw20().s[21]++,this.getAttribute("data-background-color")),extraClasses=(cov_20b41fbw20().s[22]++,this.getAttribute("data-extra-classes"));cov_20b41fbw20().s[23]++,this.container.className=[type,"".concat((cov_20b41fbw20().b[0][0]++,backgroundColor||(cov_20b41fbw20().b[0][1]++,""))),"".concat((cov_20b41fbw20().b[1][0]++,extraClasses||(cov_20b41fbw20().b[1][1]++,"")))].join(" "),cov_20b41fbw20().s[24]++,this.container.innerText=text,cov_20b41fbw20().s[25]++,this.shadowRoot.appendChild(this.container)}}function cov_2rioi1oag0(){var path="/home/runner/work/COD-Design-System/COD-Design-System/src/components/atoms/Container/cod-container.js",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/home/runner/work/COD-Design-System/COD-Design-System/src/components/atoms/Container/cod-container.js",statementMap:{0:{start:{line:2,column:0},end:{line:2,column:50}}},fnMap:{},branchMap:{},s:{0:0},f:{},b:{},inputSourceMap:{version:3,file:void 0,names:["Container","customElements","define"],sourceRoot:void 0,sources:["/home/runner/work/COD-Design-System/COD-Design-System/src/components/atoms/Container/cod-container.js"],sourcesContent:["import Container from './Container';\ncustomElements.define('cod-container', Container);\n"],mappings:"AAAA,OAAOA,SAAS,MAAM,aAAa;AACnCC,cAAc,CAACC,MAAM,CAAC,eAAe,EAAEF,SAAS,CAAC"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"c41f844a8562373694f6e83b112b708eaaebeff3"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"c41f844a8562373694f6e83b112b708eaaebeff3"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_2rioi1oag0=function(){return actualCoverage},actualCoverage}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}cov_2rioi1oag0(),cov_2rioi1oag0().s[0]++,customElements.define("cod-container",Container);var container_stories={title:"Components/Atoms/Container",argTypes:{type:{control:{type:"select"},options:["container","container-sm","container-md","container-lg","container-xl","container-xxl","container-fluid"]},backgroundColor:{control:{type:"select"},options:["color-1","color-2","color-3","color-4","color-5","color-light","color-dark"]}}},Template=args=>{var container=document.createElement("cod-container");return container.setAttribute("data-type",args.type),null!=args.elements&&(container.innerHTML=args.elements),args.content&&container.setAttribute("data-text",args.content),container.setAttribute("data-extra-classes",args.extraClasses),container.setAttribute("data-background-color",args.backgroundColor),container},container_stories_Container=Template.bind({});container_stories_Container.args={content:"Basic container",type:"container"};var ContainerColor=Template.bind({});ContainerColor.args={content:"Basic container",type:"container",backgroundColor:"color-1"};var ContainerExtras=Template.bind({});ContainerExtras.args={content:"Container with Extra Classes",type:"container",backgroundColor:"color-1",extraClasses:"text-center p-3"};var ContainerElements=Template.bind({});ContainerElements.args={type:"container",backgroundColor:"color-1",extraClasses:"text-center p-3",elements:"\n  <div>\n  <p>Paragraph 1</p>\n  <p><strong>Paragraph</strong> 2</p>\n  </div>\n  "},container_stories_Container.parameters=_objectSpread(_objectSpread({},container_stories_Container.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Container$parameters=container_stories_Container.parameters)||void 0===_Container$parameters?void 0:_Container$parameters.docs),{},{source:_objectSpread({originalSource:"args => {\n  const container = document.createElement('cod-container');\n  container.setAttribute('data-type', args.type);\n  // TODO: See CityOfDetroit/detroitmi#1099\n  // eslint-disable-next-line eqeqeq\n  if (args.elements != null) {\n    container.innerHTML = args.elements;\n  }\n  if (args.content) {\n    container.setAttribute('data-text', args.content);\n  }\n  container.setAttribute('data-extra-classes', args.extraClasses);\n  container.setAttribute('data-background-color', args.backgroundColor);\n  return container;\n}"},null===(_Container$parameters2=container_stories_Container.parameters)||void 0===_Container$parameters2||null===(_Container$parameters2=_Container$parameters2.docs)||void 0===_Container$parameters2?void 0:_Container$parameters2.source)})}),ContainerColor.parameters=_objectSpread(_objectSpread({},ContainerColor.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ContainerColor$param=ContainerColor.parameters)||void 0===_ContainerColor$param?void 0:_ContainerColor$param.docs),{},{source:_objectSpread({originalSource:"args => {\n  const container = document.createElement('cod-container');\n  container.setAttribute('data-type', args.type);\n  // TODO: See CityOfDetroit/detroitmi#1099\n  // eslint-disable-next-line eqeqeq\n  if (args.elements != null) {\n    container.innerHTML = args.elements;\n  }\n  if (args.content) {\n    container.setAttribute('data-text', args.content);\n  }\n  container.setAttribute('data-extra-classes', args.extraClasses);\n  container.setAttribute('data-background-color', args.backgroundColor);\n  return container;\n}"},null===(_ContainerColor$param2=ContainerColor.parameters)||void 0===_ContainerColor$param2||null===(_ContainerColor$param2=_ContainerColor$param2.docs)||void 0===_ContainerColor$param2?void 0:_ContainerColor$param2.source)})}),ContainerExtras.parameters=_objectSpread(_objectSpread({},ContainerExtras.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ContainerExtras$para=ContainerExtras.parameters)||void 0===_ContainerExtras$para?void 0:_ContainerExtras$para.docs),{},{source:_objectSpread({originalSource:"args => {\n  const container = document.createElement('cod-container');\n  container.setAttribute('data-type', args.type);\n  // TODO: See CityOfDetroit/detroitmi#1099\n  // eslint-disable-next-line eqeqeq\n  if (args.elements != null) {\n    container.innerHTML = args.elements;\n  }\n  if (args.content) {\n    container.setAttribute('data-text', args.content);\n  }\n  container.setAttribute('data-extra-classes', args.extraClasses);\n  container.setAttribute('data-background-color', args.backgroundColor);\n  return container;\n}"},null===(_ContainerExtras$para2=ContainerExtras.parameters)||void 0===_ContainerExtras$para2||null===(_ContainerExtras$para2=_ContainerExtras$para2.docs)||void 0===_ContainerExtras$para2?void 0:_ContainerExtras$para2.source)})}),ContainerElements.parameters=_objectSpread(_objectSpread({},ContainerElements.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ContainerElements$pa=ContainerElements.parameters)||void 0===_ContainerElements$pa?void 0:_ContainerElements$pa.docs),{},{source:_objectSpread({originalSource:"args => {\n  const container = document.createElement('cod-container');\n  container.setAttribute('data-type', args.type);\n  // TODO: See CityOfDetroit/detroitmi#1099\n  // eslint-disable-next-line eqeqeq\n  if (args.elements != null) {\n    container.innerHTML = args.elements;\n  }\n  if (args.content) {\n    container.setAttribute('data-text', args.content);\n  }\n  container.setAttribute('data-extra-classes', args.extraClasses);\n  container.setAttribute('data-background-color', args.backgroundColor);\n  return container;\n}"},null===(_ContainerElements$pa2=ContainerElements.parameters)||void 0===_ContainerElements$pa2||null===(_ContainerElements$pa2=_ContainerElements$pa2.docs)||void 0===_ContainerElements$pa2?void 0:_ContainerElements$pa2.source)})});const __namedExportsOrder=["Container","ContainerColor","ContainerExtras","ContainerElements"]}}]);