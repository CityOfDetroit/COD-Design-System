"use strict";(self.webpackChunkcod_design_system=self.webpackChunkcod_design_system||[]).push([[4379],{"./node_modules/@storybook/addon-docs/dist/DocsRenderer-3PUGWF3O.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{DocsRenderer:function(){return _chunk_S4VUQJ4A_mjs__WEBPACK_IMPORTED_MODULE_0__.r}});var _chunk_S4VUQJ4A_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs")},"./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react=__webpack_require__("./node_modules/react/index.js"),client=__webpack_require__("./node_modules/react-dom/client.js"),nodes=new Map,WithCallback=({callback:callback,children:children})=>{let once=(0,react.useRef)();return(0,react.useLayoutEffect)((()=>{once.current!==callback&&(once.current=callback,callback())}),[callback]),children},getReactRoot=async el=>{let root=nodes.get(el);return root||(root=client.createRoot(el),nodes.set(el,root)),root},dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:dist.bD,a:dist.Ct,...dist.lO},ErrorBoundary=class extends react.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException:showException}=this.props;showException(err)}render(){let{hasError:hasError}=this.state,{children:children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=dist.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(9433).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider:MDXProvider})=>(async(node,el)=>{let root=await getReactRoot(el);return new Promise((resolve=>{root.render(react.createElement(WithCallback,{callback:()=>resolve(null)},node))}))})(react.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react.createElement(MDXProvider,{components:components},react.createElement(TDocs,{context:context,docsParameter:docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{((el,shouldUseNewRootApi)=>{let root=nodes.get(el);root&&(root.unmount(),nodes.delete(el))})(element)}}}},"./node_modules/react-dom/client.js":function(__unused_webpack_module,exports,__webpack_require__){var m=__webpack_require__("./node_modules/react-dom/index.js");exports.createRoot=m.createRoot,exports.hydrateRoot=m.hydrateRoot}}]);