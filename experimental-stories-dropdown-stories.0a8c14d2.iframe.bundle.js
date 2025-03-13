"use strict";(self.webpackChunkcod_design_system=self.webpackChunkcod_design_system||[]).push([[131],{"./src/experimental/stories/dropdown.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:function(){return Basic},DarkMode:function(){return DarkMode},Split:function(){return Split},Variations:function(){return Variations},__namedExportsOrder:function(){return __namedExportsOrder}});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");__webpack_require__("./src/experimental/components/molecules/Dropdown/cod-dropdown.js"),__webpack_require__("./src/experimental/components/atoms/DropdownMenu/cod-dropdown-menu.js"),__webpack_require__("./src/experimental/components/atoms/Button/cod-button.js");__webpack_exports__.default={title:"Experimental/Molecules/Dropdown"};const Basic=()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.dy`
  <cod-dropdown data-split="false">
    <div class="no-wc dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown button
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li>
          <a class="dropdown-item" href="#">Something else here</a>
        </li>
      </ul>
    </div>
    <cod-button
      data-label="Dropdown button"
      data-background-color="primary"
      data-primary="true"
      data-img-alt=""
      data-icon=""
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-extra-classes="dropdown-toggle"
    ></cod-button>
    <cod-dropdown-menu>
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </cod-dropdown-menu>
  </cod-dropdown>
`,Variations=()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.dy`
  <cod-dropdown data-split="false">
    <cod-button
      data-label="Dropdown button"
      data-background-color="primary"
      data-primary="true"
      data-img-alt=""
      data-icon=""
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-extra-classes="dropdown-toggle"
    ></cod-button>
    <cod-dropdown-menu>
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider" /></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </cod-dropdown-menu>
  </cod-dropdown>
  <cod-dropdown data-split="false">
    <cod-button
      data-label="Dropdown button"
      data-background-color="secondary"
      data-primary="true"
      data-img-alt=""
      data-icon=""
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-extra-classes="dropdown-toggle"
    ></cod-button>
    <cod-dropdown-menu>
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider" /></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </cod-dropdown-menu>
  </cod-dropdown>
  <cod-dropdown data-split="false">
    <cod-button
      data-label="Dropdown button"
      data-background-color="success"
      data-primary="true"
      data-img-alt=""
      data-icon=""
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-extra-classes="dropdown-toggle"
    ></cod-button>
    <cod-dropdown-menu>
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider" /></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </cod-dropdown-menu>
  </cod-dropdown>
  <cod-dropdown data-split="false">
    <cod-button
      data-label="Dropdown button"
      data-background-color="info"
      data-primary="true"
      data-img-alt=""
      data-icon=""
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-extra-classes="dropdown-toggle"
    ></cod-button>
    <cod-dropdown-menu>
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider" /></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </cod-dropdown-menu>
  </cod-dropdown>
  <cod-dropdown data-split="false">
    <cod-button
      data-label="Dropdown button"
      data-background-color="warning"
      data-primary="true"
      data-img-alt=""
      data-icon=""
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-extra-classes="dropdown-toggle"
    ></cod-button>
    <cod-dropdown-menu>
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider" /></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </cod-dropdown-menu>
  </cod-dropdown>
  <cod-dropdown data-split="false">
    <cod-button
      data-label="Dropdown button"
      data-background-color="danger"
      data-primary="true"
      data-img-alt=""
      data-icon=""
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-extra-classes="dropdown-toggle"
    ></cod-button>
    <cod-dropdown-menu>
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider" /></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </cod-dropdown-menu>
  </cod-dropdown>
`,Split=()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.dy`
  <cod-dropdown data-split="true">
    <cod-button
      data-label="Dropdown button"
      data-background-color="primary"
      data-primary="true"
      data-img-alt=""
      data-icon=""
    ></cod-button>
    <cod-button
      data-label=""
      data-background-color="primary"
      data-primary="true"
      data-img-alt=""
      data-icon=""
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-extra-classes="dropdown-toggle dropdown-toggle-split"
    >
      <span class="visually-hidden">Toggle Dropdown</span>
    </cod-button>
    <cod-dropdown-menu>
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider" /></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </cod-dropdown-menu>
  </cod-dropdown>
`,DarkMode=()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.dy`
  <cod-dropdown data-split="false">
    <cod-button
      data-label="Dropdown button"
      data-background-color="primary"
      data-primary="true"
      data-img-alt=""
      data-icon=""
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-extra-classes="dropdown-toggle"
    ></cod-button>
    <cod-dropdown-menu data-dark-mode="true">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider" /></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </cod-dropdown-menu>
  </cod-dropdown>
`,__namedExportsOrder=["Basic","Variations","Split","DarkMode"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'() => html`\n  <cod-dropdown data-split="false">\n    <div class="no-wc dropdown">\n      <button\n        class="btn btn-secondary dropdown-toggle"\n        type="button"\n        data-bs-toggle="dropdown"\n        aria-expanded="false"\n      >\n        Dropdown button\n      </button>\n      <ul class="dropdown-menu">\n        <li><a class="dropdown-item" href="#">Action</a></li>\n        <li><a class="dropdown-item" href="#">Another action</a></li>\n        <li>\n          <a class="dropdown-item" href="#">Something else here</a>\n        </li>\n      </ul>\n    </div>\n    <cod-button\n      data-label="Dropdown button"\n      data-background-color="primary"\n      data-primary="true"\n      data-img-alt=""\n      data-icon=""\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-extra-classes="dropdown-toggle"\n    ></cod-button>\n    <cod-dropdown-menu>\n      <li><a class="dropdown-item" href="#">Action</a></li>\n      <li><a class="dropdown-item" href="#">Another action</a></li>\n      <li><a class="dropdown-item" href="#">Something else here</a></li>\n    </cod-dropdown-menu>\n  </cod-dropdown>\n`',...Basic.parameters?.docs?.source}}},Variations.parameters={...Variations.parameters,docs:{...Variations.parameters?.docs,source:{originalSource:'() => html`\n  <cod-dropdown data-split="false">\n    <cod-button\n      data-label="Dropdown button"\n      data-background-color="primary"\n      data-primary="true"\n      data-img-alt=""\n      data-icon=""\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-extra-classes="dropdown-toggle"\n    ></cod-button>\n    <cod-dropdown-menu>\n      <li><a class="dropdown-item" href="#">Action</a></li>\n      <li><a class="dropdown-item" href="#">Another action</a></li>\n      <li><a class="dropdown-item" href="#">Something else here</a></li>\n      <li><hr class="dropdown-divider" /></li>\n      <li><a class="dropdown-item" href="#">Separated link</a></li>\n    </cod-dropdown-menu>\n  </cod-dropdown>\n  <cod-dropdown data-split="false">\n    <cod-button\n      data-label="Dropdown button"\n      data-background-color="secondary"\n      data-primary="true"\n      data-img-alt=""\n      data-icon=""\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-extra-classes="dropdown-toggle"\n    ></cod-button>\n    <cod-dropdown-menu>\n      <li><a class="dropdown-item" href="#">Action</a></li>\n      <li><a class="dropdown-item" href="#">Another action</a></li>\n      <li><a class="dropdown-item" href="#">Something else here</a></li>\n      <li><hr class="dropdown-divider" /></li>\n      <li><a class="dropdown-item" href="#">Separated link</a></li>\n    </cod-dropdown-menu>\n  </cod-dropdown>\n  <cod-dropdown data-split="false">\n    <cod-button\n      data-label="Dropdown button"\n      data-background-color="success"\n      data-primary="true"\n      data-img-alt=""\n      data-icon=""\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-extra-classes="dropdown-toggle"\n    ></cod-button>\n    <cod-dropdown-menu>\n      <li><a class="dropdown-item" href="#">Action</a></li>\n      <li><a class="dropdown-item" href="#">Another action</a></li>\n      <li><a class="dropdown-item" href="#">Something else here</a></li>\n      <li><hr class="dropdown-divider" /></li>\n      <li><a class="dropdown-item" href="#">Separated link</a></li>\n    </cod-dropdown-menu>\n  </cod-dropdown>\n  <cod-dropdown data-split="false">\n    <cod-button\n      data-label="Dropdown button"\n      data-background-color="info"\n      data-primary="true"\n      data-img-alt=""\n      data-icon=""\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-extra-classes="dropdown-toggle"\n    ></cod-button>\n    <cod-dropdown-menu>\n      <li><a class="dropdown-item" href="#">Action</a></li>\n      <li><a class="dropdown-item" href="#">Another action</a></li>\n      <li><a class="dropdown-item" href="#">Something else here</a></li>\n      <li><hr class="dropdown-divider" /></li>\n      <li><a class="dropdown-item" href="#">Separated link</a></li>\n    </cod-dropdown-menu>\n  </cod-dropdown>\n  <cod-dropdown data-split="false">\n    <cod-button\n      data-label="Dropdown button"\n      data-background-color="warning"\n      data-primary="true"\n      data-img-alt=""\n      data-icon=""\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-extra-classes="dropdown-toggle"\n    ></cod-button>\n    <cod-dropdown-menu>\n      <li><a class="dropdown-item" href="#">Action</a></li>\n      <li><a class="dropdown-item" href="#">Another action</a></li>\n      <li><a class="dropdown-item" href="#">Something else here</a></li>\n      <li><hr class="dropdown-divider" /></li>\n      <li><a class="dropdown-item" href="#">Separated link</a></li>\n    </cod-dropdown-menu>\n  </cod-dropdown>\n  <cod-dropdown data-split="false">\n    <cod-button\n      data-label="Dropdown button"\n      data-background-color="danger"\n      data-primary="true"\n      data-img-alt=""\n      data-icon=""\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-extra-classes="dropdown-toggle"\n    ></cod-button>\n    <cod-dropdown-menu>\n      <li><a class="dropdown-item" href="#">Action</a></li>\n      <li><a class="dropdown-item" href="#">Another action</a></li>\n      <li><a class="dropdown-item" href="#">Something else here</a></li>\n      <li><hr class="dropdown-divider" /></li>\n      <li><a class="dropdown-item" href="#">Separated link</a></li>\n    </cod-dropdown-menu>\n  </cod-dropdown>\n`',...Variations.parameters?.docs?.source}}},Split.parameters={...Split.parameters,docs:{...Split.parameters?.docs,source:{originalSource:'() => html`\n  <cod-dropdown data-split="true">\n    <cod-button\n      data-label="Dropdown button"\n      data-background-color="primary"\n      data-primary="true"\n      data-img-alt=""\n      data-icon=""\n    ></cod-button>\n    <cod-button\n      data-label=""\n      data-background-color="primary"\n      data-primary="true"\n      data-img-alt=""\n      data-icon=""\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-extra-classes="dropdown-toggle dropdown-toggle-split"\n    >\n      <span class="visually-hidden">Toggle Dropdown</span>\n    </cod-button>\n    <cod-dropdown-menu>\n      <li><a class="dropdown-item" href="#">Action</a></li>\n      <li><a class="dropdown-item" href="#">Another action</a></li>\n      <li><a class="dropdown-item" href="#">Something else here</a></li>\n      <li><hr class="dropdown-divider" /></li>\n      <li><a class="dropdown-item" href="#">Separated link</a></li>\n    </cod-dropdown-menu>\n  </cod-dropdown>\n`',...Split.parameters?.docs?.source}}},DarkMode.parameters={...DarkMode.parameters,docs:{...DarkMode.parameters?.docs,source:{originalSource:'() => html`\n  <cod-dropdown data-split="false">\n    <cod-button\n      data-label="Dropdown button"\n      data-background-color="primary"\n      data-primary="true"\n      data-img-alt=""\n      data-icon=""\n      data-bs-toggle="dropdown"\n      aria-expanded="false"\n      data-extra-classes="dropdown-toggle"\n    ></cod-button>\n    <cod-dropdown-menu data-dark-mode="true">\n      <li><a class="dropdown-item" href="#">Action</a></li>\n      <li><a class="dropdown-item" href="#">Another action</a></li>\n      <li><a class="dropdown-item" href="#">Something else here</a></li>\n      <li><hr class="dropdown-divider" /></li>\n      <li><a class="dropdown-item" href="#">Separated link</a></li>\n    </cod-dropdown-menu>\n  </cod-dropdown>\n`',...DarkMode.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=experimental-stories-dropdown-stories.0a8c14d2.iframe.bundle.js.map