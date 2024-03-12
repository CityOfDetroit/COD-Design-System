"use strict";(self.webpackChunkcod_design_system=self.webpackChunkcod_design_system||[]).push([[8441],{"./src/stories/dropdown.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:function(){return Basic},DarkMode:function(){return DarkMode},Split:function(){return Split},Variations:function(){return Variations},__namedExportsOrder:function(){return __namedExportsOrder}});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_Basic$parameters,_Basic$parameters2,_Variations$parameter,_Variations$parameter2,_Split$parameters,_Split$parameters2,_DarkMode$parameters,_DarkMode$parameters2,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),lit_html__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lit-html/lit-html.js");__webpack_require__("./src/components/molecules/Dropdown/cod-dropdown.js"),__webpack_require__("./src/components/atoms/DropdownMenu/cod-dropdown-menu.js"),__webpack_require__("./src/components/atoms/Button/cod-button.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}__webpack_exports__.default={title:"Components/Molecules/Dropdown"};var Basic=()=>(0,lit_html__WEBPACK_IMPORTED_MODULE_1__.dy)(_templateObject||(_templateObject=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.Z)(['\n  <cod-dropdown data-split="false">\n    <div class="no-wc dropdown">\n      <button\n        class="btn btn-secondary dropdown-toggle"\n        type="button"\n        data-bs-toggle="dropdown"\n        aria-expanded="false"\n      >\n        Dropdown button\n      </button>\n      <ul class="dropdown-menu">\n        <li><a class="dropdown-item" href="#">Action</a></li>\n        <li><a class="dropdown-item" href="#">Another action</a></li>\n        <li>\n          <a class="dropdown-item" href="#">Something else here</a>\n        </li>\n      </ul>\n    </div>\n    <cod-button\n      data-label="Dropdown button"\n      data-background-color="primary"\n      data-primary="true"\n      data-img-alt=""\n      data-icon=""\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-extra-classes="dropdown-toggle"\n    ></cod-button>\n    <cod-dropdown-menu>\n      <li><a class="dropdown-item" href="#">Action</a></li>\n      <li><a class="dropdown-item" href="#">Another action</a></li>\n      <li><a class="dropdown-item" href="#">Something else here</a></li>\n    </cod-dropdown-menu>\n  </cod-dropdown>\n']))),Variations=()=>(0,lit_html__WEBPACK_IMPORTED_MODULE_1__.dy)(_templateObject2||(_templateObject2=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.Z)(['\n  <cod-dropdown data-split="false">\n    <cod-button\n      data-label="Dropdown button"\n      data-background-color="primary"\n      data-primary="true"\n      data-img-alt=""\n      data-icon=""\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-extra-classes="dropdown-toggle"\n    ></cod-button>\n    <cod-dropdown-menu>\n      <li><a class="dropdown-item" href="#">Action</a></li>\n      <li><a class="dropdown-item" href="#">Another action</a></li>\n      <li><a class="dropdown-item" href="#">Something else here</a></li>\n      <li><hr class="dropdown-divider" /></li>\n      <li><a class="dropdown-item" href="#">Separated link</a></li>\n    </cod-dropdown-menu>\n  </cod-dropdown>\n  <cod-dropdown data-split="false">\n    <cod-button\n      data-label="Dropdown button"\n      data-background-color="secondary"\n      data-primary="true"\n      data-img-alt=""\n      data-icon=""\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-extra-classes="dropdown-toggle"\n    ></cod-button>\n    <cod-dropdown-menu>\n      <li><a class="dropdown-item" href="#">Action</a></li>\n      <li><a class="dropdown-item" href="#">Another action</a></li>\n      <li><a class="dropdown-item" href="#">Something else here</a></li>\n      <li><hr class="dropdown-divider" /></li>\n      <li><a class="dropdown-item" href="#">Separated link</a></li>\n    </cod-dropdown-menu>\n  </cod-dropdown>\n  <cod-dropdown data-split="false">\n    <cod-button\n      data-label="Dropdown button"\n      data-background-color="success"\n      data-primary="true"\n      data-img-alt=""\n      data-icon=""\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-extra-classes="dropdown-toggle"\n    ></cod-button>\n    <cod-dropdown-menu>\n      <li><a class="dropdown-item" href="#">Action</a></li>\n      <li><a class="dropdown-item" href="#">Another action</a></li>\n      <li><a class="dropdown-item" href="#">Something else here</a></li>\n      <li><hr class="dropdown-divider" /></li>\n      <li><a class="dropdown-item" href="#">Separated link</a></li>\n    </cod-dropdown-menu>\n  </cod-dropdown>\n  <cod-dropdown data-split="false">\n    <cod-button\n      data-label="Dropdown button"\n      data-background-color="info"\n      data-primary="true"\n      data-img-alt=""\n      data-icon=""\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-extra-classes="dropdown-toggle"\n    ></cod-button>\n    <cod-dropdown-menu>\n      <li><a class="dropdown-item" href="#">Action</a></li>\n      <li><a class="dropdown-item" href="#">Another action</a></li>\n      <li><a class="dropdown-item" href="#">Something else here</a></li>\n      <li><hr class="dropdown-divider" /></li>\n      <li><a class="dropdown-item" href="#">Separated link</a></li>\n    </cod-dropdown-menu>\n  </cod-dropdown>\n  <cod-dropdown data-split="false">\n    <cod-button\n      data-label="Dropdown button"\n      data-background-color="warning"\n      data-primary="true"\n      data-img-alt=""\n      data-icon=""\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-extra-classes="dropdown-toggle"\n    ></cod-button>\n    <cod-dropdown-menu>\n      <li><a class="dropdown-item" href="#">Action</a></li>\n      <li><a class="dropdown-item" href="#">Another action</a></li>\n      <li><a class="dropdown-item" href="#">Something else here</a></li>\n      <li><hr class="dropdown-divider" /></li>\n      <li><a class="dropdown-item" href="#">Separated link</a></li>\n    </cod-dropdown-menu>\n  </cod-dropdown>\n  <cod-dropdown data-split="false">\n    <cod-button\n      data-label="Dropdown button"\n      data-background-color="danger"\n      data-primary="true"\n      data-img-alt=""\n      data-icon=""\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-extra-classes="dropdown-toggle"\n    ></cod-button>\n    <cod-dropdown-menu>\n      <li><a class="dropdown-item" href="#">Action</a></li>\n      <li><a class="dropdown-item" href="#">Another action</a></li>\n      <li><a class="dropdown-item" href="#">Something else here</a></li>\n      <li><hr class="dropdown-divider" /></li>\n      <li><a class="dropdown-item" href="#">Separated link</a></li>\n    </cod-dropdown-menu>\n  </cod-dropdown>\n']))),Split=()=>(0,lit_html__WEBPACK_IMPORTED_MODULE_1__.dy)(_templateObject3||(_templateObject3=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.Z)(['\n  <cod-dropdown data-split="true">\n    <cod-button\n      data-label="Dropdown button"\n      data-background-color="primary"\n      data-primary="true"\n      data-img-alt=""\n      data-icon=""\n    ></cod-button>\n    <cod-button\n      data-label=""\n      data-background-color="primary"\n      data-primary="true"\n      data-img-alt=""\n      data-icon=""\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-extra-classes="dropdown-toggle dropdown-toggle-split"\n    >\n      <span class="visually-hidden">Toggle Dropdown</span>\n    </cod-button>\n    <cod-dropdown-menu>\n      <li><a class="dropdown-item" href="#">Action</a></li>\n      <li><a class="dropdown-item" href="#">Another action</a></li>\n      <li><a class="dropdown-item" href="#">Something else here</a></li>\n      <li><hr class="dropdown-divider" /></li>\n      <li><a class="dropdown-item" href="#">Separated link</a></li>\n    </cod-dropdown-menu>\n  </cod-dropdown>\n']))),DarkMode=()=>(0,lit_html__WEBPACK_IMPORTED_MODULE_1__.dy)(_templateObject4||(_templateObject4=(0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__.Z)(['\n  <cod-dropdown data-split="false">\n    <cod-button\n      data-label="Dropdown button"\n      data-background-color="primary"\n      data-primary="true"\n      data-img-alt=""\n      data-icon=""\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-extra-classes="dropdown-toggle"\n    ></cod-button>\n    <cod-dropdown-menu data-dark-mode="true">\n      <li><a class="dropdown-item" href="#">Action</a></li>\n      <li><a class="dropdown-item" href="#">Another action</a></li>\n      <li><a class="dropdown-item" href="#">Something else here</a></li>\n      <li><hr class="dropdown-divider" /></li>\n      <li><a class="dropdown-item" href="#">Separated link</a></li>\n    </cod-dropdown-menu>\n  </cod-dropdown>\n'])));Basic.parameters=_objectSpread(_objectSpread({},Basic.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Basic$parameters=Basic.parameters)||void 0===_Basic$parameters?void 0:_Basic$parameters.docs),{},{source:_objectSpread({originalSource:'() => html`\n  <cod-dropdown data-split="false">\n    <div class="no-wc dropdown">\n      <button\n        class="btn btn-secondary dropdown-toggle"\n        type="button"\n        data-bs-toggle="dropdown"\n        aria-expanded="false"\n      >\n        Dropdown button\n      </button>\n      <ul class="dropdown-menu">\n        <li><a class="dropdown-item" href="#">Action</a></li>\n        <li><a class="dropdown-item" href="#">Another action</a></li>\n        <li>\n          <a class="dropdown-item" href="#">Something else here</a>\n        </li>\n      </ul>\n    </div>\n    <cod-button\n      data-label="Dropdown button"\n      data-background-color="primary"\n      data-primary="true"\n      data-img-alt=""\n      data-icon=""\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-extra-classes="dropdown-toggle"\n    ></cod-button>\n    <cod-dropdown-menu>\n      <li><a class="dropdown-item" href="#">Action</a></li>\n      <li><a class="dropdown-item" href="#">Another action</a></li>\n      <li><a class="dropdown-item" href="#">Something else here</a></li>\n    </cod-dropdown-menu>\n  </cod-dropdown>\n`'},null===(_Basic$parameters2=Basic.parameters)||void 0===_Basic$parameters2||null===(_Basic$parameters2=_Basic$parameters2.docs)||void 0===_Basic$parameters2?void 0:_Basic$parameters2.source)})}),Variations.parameters=_objectSpread(_objectSpread({},Variations.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Variations$parameter=Variations.parameters)||void 0===_Variations$parameter?void 0:_Variations$parameter.docs),{},{source:_objectSpread({originalSource:'() => html`\n  <cod-dropdown data-split="false">\n    <cod-button\n      data-label="Dropdown button"\n      data-background-color="primary"\n      data-primary="true"\n      data-img-alt=""\n      data-icon=""\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-extra-classes="dropdown-toggle"\n    ></cod-button>\n    <cod-dropdown-menu>\n      <li><a class="dropdown-item" href="#">Action</a></li>\n      <li><a class="dropdown-item" href="#">Another action</a></li>\n      <li><a class="dropdown-item" href="#">Something else here</a></li>\n      <li><hr class="dropdown-divider" /></li>\n      <li><a class="dropdown-item" href="#">Separated link</a></li>\n    </cod-dropdown-menu>\n  </cod-dropdown>\n  <cod-dropdown data-split="false">\n    <cod-button\n      data-label="Dropdown button"\n      data-background-color="secondary"\n      data-primary="true"\n      data-img-alt=""\n      data-icon=""\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-extra-classes="dropdown-toggle"\n    ></cod-button>\n    <cod-dropdown-menu>\n      <li><a class="dropdown-item" href="#">Action</a></li>\n      <li><a class="dropdown-item" href="#">Another action</a></li>\n      <li><a class="dropdown-item" href="#">Something else here</a></li>\n      <li><hr class="dropdown-divider" /></li>\n      <li><a class="dropdown-item" href="#">Separated link</a></li>\n    </cod-dropdown-menu>\n  </cod-dropdown>\n  <cod-dropdown data-split="false">\n    <cod-button\n      data-label="Dropdown button"\n      data-background-color="success"\n      data-primary="true"\n      data-img-alt=""\n      data-icon=""\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-extra-classes="dropdown-toggle"\n    ></cod-button>\n    <cod-dropdown-menu>\n      <li><a class="dropdown-item" href="#">Action</a></li>\n      <li><a class="dropdown-item" href="#">Another action</a></li>\n      <li><a class="dropdown-item" href="#">Something else here</a></li>\n      <li><hr class="dropdown-divider" /></li>\n      <li><a class="dropdown-item" href="#">Separated link</a></li>\n    </cod-dropdown-menu>\n  </cod-dropdown>\n  <cod-dropdown data-split="false">\n    <cod-button\n      data-label="Dropdown button"\n      data-background-color="info"\n      data-primary="true"\n      data-img-alt=""\n      data-icon=""\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-extra-classes="dropdown-toggle"\n    ></cod-button>\n    <cod-dropdown-menu>\n      <li><a class="dropdown-item" href="#">Action</a></li>\n      <li><a class="dropdown-item" href="#">Another action</a></li>\n      <li><a class="dropdown-item" href="#">Something else here</a></li>\n      <li><hr class="dropdown-divider" /></li>\n      <li><a class="dropdown-item" href="#">Separated link</a></li>\n    </cod-dropdown-menu>\n  </cod-dropdown>\n  <cod-dropdown data-split="false">\n    <cod-button\n      data-label="Dropdown button"\n      data-background-color="warning"\n      data-primary="true"\n      data-img-alt=""\n      data-icon=""\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-extra-classes="dropdown-toggle"\n    ></cod-button>\n    <cod-dropdown-menu>\n      <li><a class="dropdown-item" href="#">Action</a></li>\n      <li><a class="dropdown-item" href="#">Another action</a></li>\n      <li><a class="dropdown-item" href="#">Something else here</a></li>\n      <li><hr class="dropdown-divider" /></li>\n      <li><a class="dropdown-item" href="#">Separated link</a></li>\n    </cod-dropdown-menu>\n  </cod-dropdown>\n  <cod-dropdown data-split="false">\n    <cod-button\n      data-label="Dropdown button"\n      data-background-color="danger"\n      data-primary="true"\n      data-img-alt=""\n      data-icon=""\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-extra-classes="dropdown-toggle"\n    ></cod-button>\n    <cod-dropdown-menu>\n      <li><a class="dropdown-item" href="#">Action</a></li>\n      <li><a class="dropdown-item" href="#">Another action</a></li>\n      <li><a class="dropdown-item" href="#">Something else here</a></li>\n      <li><hr class="dropdown-divider" /></li>\n      <li><a class="dropdown-item" href="#">Separated link</a></li>\n    </cod-dropdown-menu>\n  </cod-dropdown>\n`'},null===(_Variations$parameter2=Variations.parameters)||void 0===_Variations$parameter2||null===(_Variations$parameter2=_Variations$parameter2.docs)||void 0===_Variations$parameter2?void 0:_Variations$parameter2.source)})}),Split.parameters=_objectSpread(_objectSpread({},Split.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Split$parameters=Split.parameters)||void 0===_Split$parameters?void 0:_Split$parameters.docs),{},{source:_objectSpread({originalSource:'() => html`\n  <cod-dropdown data-split="true">\n    <cod-button\n      data-label="Dropdown button"\n      data-background-color="primary"\n      data-primary="true"\n      data-img-alt=""\n      data-icon=""\n    ></cod-button>\n    <cod-button\n      data-label=""\n      data-background-color="primary"\n      data-primary="true"\n      data-img-alt=""\n      data-icon=""\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-extra-classes="dropdown-toggle dropdown-toggle-split"\n    >\n      <span class="visually-hidden">Toggle Dropdown</span>\n    </cod-button>\n    <cod-dropdown-menu>\n      <li><a class="dropdown-item" href="#">Action</a></li>\n      <li><a class="dropdown-item" href="#">Another action</a></li>\n      <li><a class="dropdown-item" href="#">Something else here</a></li>\n      <li><hr class="dropdown-divider" /></li>\n      <li><a class="dropdown-item" href="#">Separated link</a></li>\n    </cod-dropdown-menu>\n  </cod-dropdown>\n`'},null===(_Split$parameters2=Split.parameters)||void 0===_Split$parameters2||null===(_Split$parameters2=_Split$parameters2.docs)||void 0===_Split$parameters2?void 0:_Split$parameters2.source)})}),DarkMode.parameters=_objectSpread(_objectSpread({},DarkMode.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_DarkMode$parameters=DarkMode.parameters)||void 0===_DarkMode$parameters?void 0:_DarkMode$parameters.docs),{},{source:_objectSpread({originalSource:'() => html`\n  <cod-dropdown data-split="false">\n    <cod-button\n      data-label="Dropdown button"\n      data-background-color="primary"\n      data-primary="true"\n      data-img-alt=""\n      data-icon=""\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-extra-classes="dropdown-toggle"\n    ></cod-button>\n    <cod-dropdown-menu data-dark-mode="true">\n      <li><a class="dropdown-item" href="#">Action</a></li>\n      <li><a class="dropdown-item" href="#">Another action</a></li>\n      <li><a class="dropdown-item" href="#">Something else here</a></li>\n      <li><hr class="dropdown-divider" /></li>\n      <li><a class="dropdown-item" href="#">Separated link</a></li>\n    </cod-dropdown-menu>\n  </cod-dropdown>\n`'},null===(_DarkMode$parameters2=DarkMode.parameters)||void 0===_DarkMode$parameters2||null===(_DarkMode$parameters2=_DarkMode$parameters2.docs)||void 0===_DarkMode$parameters2?void 0:_DarkMode$parameters2.source)})});const __namedExportsOrder=["Basic","Variations","Split","DarkMode"]}}]);