"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[7130],{"./node_modules/keycloakify/login/pages/LoginUsername.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>LoginUsername});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_tools_clsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/keycloakify/tools/clsx.js"),_login_lib_kcClsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/keycloakify/login/lib/kcClsx.js");function LoginUsername(props){var _a;const{kcContext,i18n,doUseDefaultCss,Template,classes}=props,{kcClsx}=(0,_login_lib_kcClsx__WEBPACK_IMPORTED_MODULE_3__.z)({doUseDefaultCss,classes}),{social,realm,url,usernameHidden,login,registrationDisabled,messagesPerField}=kcContext,{msg,msgStr}=i18n,[isLoginButtonDisabled,setIsLoginButtonDisabled]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Template,Object.assign({kcContext,i18n,doUseDefaultCss,classes,displayMessage:!messagesPerField.existsError("username"),displayInfo:realm.password&&realm.registrationAllowed&&!registrationDisabled,infoNode:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",Object.assign({id:"kc-registration"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{children:[msg("noAccount"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",Object.assign({tabIndex:6,href:url.registrationUrl},{children:msg("doRegister")}))]})})),headerNode:msg("doLogIn"),socialProvidersNode:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:realm.password&&void 0!==social.providers&&0!==social.providers.length&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",Object.assign({id:"kc-social-providers",className:kcClsx("kcFormSocialAccountSectionClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{children:msg("identity-provider-login-label")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul",Object.assign({className:kcClsx("kcFormSocialAccountListClass",social.providers.length>3&&"kcFormSocialAccountListGridClass")},{children:social.providers.map(((...[p,,providers])=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",Object.assign({id:`social-${p.alias}`,className:kcClsx("kcFormSocialAccountListButtonClass",providers.length>3&&"kcFormSocialAccountGridItem"),type:"button",href:p.loginUrl},{children:[p.iconClasses&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i",{className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_2__.$)(kcClsx("kcCommonLogoIdP"),p.iconClasses),"aria-hidden":"true"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",Object.assign({className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_2__.$)(kcClsx("kcFormSocialAccountNameClass"),p.iconClasses&&"kc-social-icon-text")},{children:p.displayName}))]}))},p.alias)))}))]}))})},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",Object.assign({id:"kc-form"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",Object.assign({id:"kc-form-wrapper"},{children:realm.password&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form",Object.assign({id:"kc-form-login",onSubmit:()=>(setIsLoginButtonDisabled(!0),!0),action:url.loginAction,method:"post"},{children:[!usernameHidden&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",Object.assign({className:kcClsx("kcFormGroupClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",Object.assign({htmlFor:"username",className:kcClsx("kcLabelClass")},{children:realm.loginWithEmailAllowed?realm.registrationEmailAsUsername?msg("email"):msg("usernameOrEmail"):msg("username")})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{tabIndex:2,id:"username",className:kcClsx("kcInputClass"),name:"username",defaultValue:null!==(_a=login.username)&&void 0!==_a?_a:"",type:"text",autoFocus:!0,autoComplete:"off","aria-invalid":messagesPerField.existsError("username")}),messagesPerField.existsError("username")&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",Object.assign({id:"input-error",className:kcClsx("kcInputErrorMessageClass"),"aria-live":"polite"},{children:messagesPerField.getFirstError("username")}))]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",Object.assign({className:kcClsx("kcFormGroupClass","kcFormSettingClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",Object.assign({id:"kc-form-options"},{children:realm.rememberMe&&!usernameHidden&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",Object.assign({className:"checkbox"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{tabIndex:3,id:"rememberMe",name:"rememberMe",type:"checkbox",defaultChecked:!!login.rememberMe})," ",msg("rememberMe")]})}))}))})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",Object.assign({id:"kc-form-buttons",className:kcClsx("kcFormGroupClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{tabIndex:4,disabled:isLoginButtonDisabled,className:kcClsx("kcButtonClass","kcButtonPrimaryClass","kcButtonBlockClass","kcButtonLargeClass"),name:"login",id:"kc-login",type:"submit",value:msgStr("doLogIn")})}))]}))}))}))}))}}}]);