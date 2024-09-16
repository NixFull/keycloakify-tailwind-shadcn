"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[7149],{"./node_modules/keycloakify/login/pages/LoginOauthGrant.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>LoginOauthGrant});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_login_lib_kcClsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/keycloakify/login/lib/kcClsx.js");function LoginOauthGrant(props){const{kcContext,i18n,doUseDefaultCss,classes,Template}=props,{url,oauth,client}=kcContext,{msg,msgStr,advancedMsg,advancedMsgStr}=i18n,{kcClsx}=(0,_login_lib_kcClsx__WEBPACK_IMPORTED_MODULE_1__.z)({doUseDefaultCss,classes});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Template,Object.assign({kcContext,i18n,doUseDefaultCss,classes,bodyClassName:"oauth",headerNode:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[client.attributes.logoUri&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:client.attributes.logoUri}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:client.name?msg("oauthGrantTitle",advancedMsgStr(client.name)):msg("oauthGrantTitle",client.clientId)})]})},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",Object.assign({id:"kc-oauth",className:"content-area"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3",{children:msg("oauthGrantRequest")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",{children:oauth.clientScopesRequested.map((clientScope=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{children:[advancedMsg(clientScope.consentScreenText),clientScope.dynamicScopeParameter&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[": ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b",{children:clientScope.dynamicScopeParameter})]})]})},clientScope.consentScreenText)))}),client.attributes.policyUri||client.attributes.tosUri&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3",{children:[client.name?msg("oauthGrantInformation",advancedMsgStr(client.name)):msg("oauthGrantInformation",client.clientId),client.attributes.tosUri&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[msg("oauthGrantReview"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",Object.assign({href:client.attributes.tosUri,target:"_blank"},{children:msg("oauthGrantTos")}))]}),client.attributes.policyUri&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[msg("oauthGrantReview"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",Object.assign({href:client.attributes.policyUri,target:"_blank"},{children:msg("oauthGrantPolicy")}))]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form",Object.assign({className:"form-actions",action:url.oauthAction,method:"POST"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"hidden",name:"code",value:oauth.code}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",Object.assign({className:kcClsx("kcFormGroupClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",Object.assign({id:"kc-form-options"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:kcClsx("kcFormOptionsWrapperClass")})})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",Object.assign({id:"kc-form-buttons"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",Object.assign({className:kcClsx("kcFormButtonsWrapperClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{className:kcClsx("kcButtonClass","kcButtonPrimaryClass","kcButtonLargeClass"),name:"accept",id:"kc-login",type:"submit",value:msgStr("doYes")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{className:kcClsx("kcButtonClass","kcButtonDefaultClass","kcButtonLargeClass"),name:"cancel",id:"kc-cancel",type:"submit",value:msgStr("doNo")})]}))}))]}))]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"clearfix"})]}))}))}}}]);