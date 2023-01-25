"use strict";(self.webpackChunkimage_builder=self.webpackChunkimage_builder||[]).push([[185],{32185:(e,n,t)=>{t.r(n),t.d(n,{ScalprumComponent:()=>x,ScalprumContext:()=>j,ScalprumProvider:()=>R,default:()=>R,useLoadModule:()=>G,useModule:()=>T,useScalprum:()=>A});var r=t(93264),o=t.n(r),i=function(){return i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},i.apply(this,arguments)},a=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function c(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}u((r=r.apply(e,n||[])).next())}))},c=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},u=function(e,n,t){void 0===t&&(t=!1);var r=window.__scalprum__.factories[e];if(r)if(t||((new Date).getTime()-r.expiration.getTime())/1e3>window.__scalprum__.scalprumOptions.cacheTimeout)delete window.__scalprum__.factories[e];else{var o=r.modules[n];if(n)return o}},l=function(e,n){window.__scalprum__.pendingInjections[e]=n},s=function(e,n,t){return window.__scalprum__.pendingLoading[e+"#"+n]=t,t.then((function(t){return delete window.__scalprum__.pendingLoading[e+"#"+n],t})).catch((function(){delete window.__scalprum__.pendingLoading[e+"#"+n]})),t},f=function(e){var n=e.appsConfig,t=e.api,r=e.options,o=i({cacheTimeout:120},r);window.__scalprum__=i({appsConfig:n,pendingInjections:{},pendingLoading:{},factories:{},scalprumOptions:o},t)},p=function(e){return window.__scalprum__.appsConfig[e]},h=function(e,n,t){var r;void 0===t&&(t=!1);var o=void 0;if(!function(e){var n;return 0===(null===(n=document.querySelectorAll('script[src="'+e+'"]'))||void 0===n?void 0:n.length)}(n))return Promise.resolve([e,null===(r=document.querySelectorAll('script[src="'+n+'"]'))||void 0===r?void 0:r[0]]);var i=new Promise((function(r,i){(o=document.createElement("script")).src=n,o.id=e,t?o.onload=function(){r([e,o])}:l(e,(function(){return r([e,o])})),o.onerror=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];console.log(n),t?i([n,o]):l(e,(function(){return i([n,o])}))}}));return void 0!==o&&document.body.appendChild(o),i};function d(e,n,t,r){return a(this,void 0,void 0,(function(){var o,i;return c(this,(function(a){switch(a.label){case 0:return(o=new Headers).append("Pragma","no-cache"),o.append("Cache-Control","no-cache"),o.append("expires","0"),[4,fetch(e,{method:"GET",headers:o})];case 1:return[4,a.sent().json()];case 2:return i=a.sent(),[2,Promise.all(Object.entries(i).filter((function(e){var n=e[0];return!t||n===t})).flatMap(r||function(e){return e[1].entry||e}).map((function(e){return h(n,e,!0)})))]}}))}))}function v(e,n){return a(this,void 0,void 0,(function(){var r,o,a,u;return c(this,(function(c){switch(c.label){case 0:if(void 0===e||0===e.length)throw new Error("Scope can't be undefined or empty");if(void 0===n||0===n.length)throw new Error("Module can't be undefined or empty");return n.startsWith("./")||console.warn("Your module "+n+" doesn't start with './' this indicates an error"),[4,t.I("default")];case 1:return c.sent(),[4,(r=window[e]).init(t.S.default)];case 2:return c.sent(),[4,window[e].get(n)];case 3:return o=c.sent(),window.__scalprum__.factories[e]||(window.__scalprum__.factories[e]={}),a={init:r.init,modules:i(i({},window.__scalprum__.factories[e].modules),(u={},u[n]=o(),u)),expiration:new Date},window.__scalprum__.factories[e]=a,[2,o()]}}))}))}var m=t(18446),y=t.n(m);const w=function(e){var n=e.error,t=e.errorInfo;return o().createElement("div",null,o().createElement("h2",null,"Error loading component"),(null==n?void 0:n.message)&&o().createElement("p",null,n.message),(null==t?void 0:t.componentStack)?o().createElement("pre",null,null==t?void 0:t.componentStack):(null==n?void 0:n.stack)&&o().createElement("pre",null,n.stack))};var b=function(){return b=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},b.apply(this,arguments)};function g(e,n,t){var r=this;return void 0===t&&(t=w),function(){return i=r,a=void 0,u=function(){var r,i;return function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,v(e,n)];case 1:return r=a.sent(),[3,3];case 2:return i=a.sent(),r={default:function(e){return o().createElement(t,b({},e,{error:i}))}},[3,3];case 3:return[2,r]}}))},new((c=void 0)||(c=Promise))((function(e,n){function t(e){try{o(u.next(e))}catch(e){n(e)}}function r(e){try{o(u.throw(e))}catch(e){n(e)}}function o(n){var o;n.done?e(n.value):(o=n.value,o instanceof c?o:new c((function(e){e(o)}))).then(t,r)}o((u=u.apply(i,a||[])).next())}));var i,a,c,u}}var _,E=(_=function(e,n){return _=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},_(e,n)},function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}_(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),k=function(){return k=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},k.apply(this,arguments)},O=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},C=function(e){var n=e.fallback,t=void 0===n?"loading":n,i=e.appName,a=e.scope,c=e.module,l=e.ErrorComponent,f=e.processor,v=e.innerRef,m=e.skipCache,y=void 0!==m&&m,w=O(e,["fallback","appName","scope","module","ErrorComponent","processor","innerRef","skipCache"]),b=p(i),_=b.scriptLocation,E=b.manifestLocation,C=(0,r.useReducer)((function(e){return e+1}),0),S=C[0],x=C[1],j=(0,r.useState)(void 0),P=j[0],R=j[1];return(0,r.useEffect)((function(){var e=u(a,c,y),n=!0,t=function(){return n&&R((function(){return function(e){return o().createElement(l,k({},e))}}))},r=function(e,n){return window.__scalprum__.pendingLoading[e+"#"+n]}(a,c);if(!e&&r)r.finally((function(){x()}));else if(e)try{n&&R((function(){return e.default}))}catch(e){t()}else if(_){var p=h(i,_).then((function(){n&&R((function(){return o().lazy(g(a,c,l))}))})).catch(t);s(a,c,p)}else if(E){var v=d(E,i,a,f).then((function(){n&&R((function(){return o().lazy(g(a,c,l))}))})).catch(t);s(a,c,v)}return function(){n=!1}}),[i,a,y,S]),o().createElement(r.Suspense,{fallback:t},P?o().createElement(P,k({ref:v},w)):t)},S=function(e){function n(n){var t=e.call(this,n)||this;return t.state={hasError:!1},t.selfRepairAttempt=!1,t}return E(n,e),n.getDerivedStateFromError=function(){return{hasError:!0}},n.prototype.shouldComponentUpdate=function(e,n){return this.state.hasError!==n.hasError||!y()(e,this.props)||!y()(n,this.state)},n.prototype.componentDidCatch=function(e,n){!0===this.selfRepairAttempt?(console.error("Scalprum encountered an error!",e.message),this.setState({error:e,errorInfo:n})):(console.warn("Scalprum failed to render component. Attempting to skip module cache."),this.setState({repairAttempt:!0}))},n.prototype.render=function(){var e=this,n=this.props,t=n.ErrorComponent,r=void 0===t?o().createElement(w,k({},this.state)):t,i=O(n,["ErrorComponent"]),a=function(n){return o().cloneElement(r,k(k({},e.state),n))};return this.state.repairAttempt&&!this.selfRepairAttempt?(this.selfRepairAttempt=!0,o().createElement(C,k({},i,{skipCache:!0,ErrorComponent:a}))):this.state.hasError&&this.selfRepairAttempt?o().cloneElement(r,k({},this.state)):o().createElement(C,k({},i,{ErrorComponent:a}))},n.defaultProps={ErrorComponent:o().createElement(w,null)},n}(o().Component),x=o().forwardRef((function(e,n){return o().createElement(S,k({},e,{innerRef:n}))})),j=(0,r.createContext)({initialized:!1,config:{},api:void 0}),P=function(){return P=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},P.apply(this,arguments)};function R(e){var n=e.config,t=e.children,i=e.api,a=(0,r.useRef)(!1),c=(0,r.useState)({initialized:!1,config:{},api:i}),u=c[0],l=c[1];return(0,r.useEffect)((function(){"object"==typeof n&&(f({appsConfig:n,api:i}),l((function(e){return P(P({},e),{initialized:!0,config:n})})),a.current=!0),"function"==typeof n&&Promise.resolve(n()).then((function(e){l((function(n){return P(P({},n),{initialized:!0,config:e})})),f({appsConfig:e,api:i}),a.current=!0}))}),[n]),(0,r.useEffect)((function(){a.current&&l((function(e){return P(P({},e),{api:i})}))}),[i]),o().createElement(j.Provider,{value:u},t)}function A(e){var n=(0,r.useContext)(j);return"function"==typeof e?e(n):n}var L=function(){return L=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},L.apply(this,arguments)};function T(e,n,t,o){var i=this;void 0===o&&(o={});var a=L({skipCache:!1},o),c=(0,r.useState)(t),l=c[0],s=c[1],f=(0,r.useCallback)((function(){return t=i,r=void 0,c=function(){var t,r;return function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(o){switch(o.label){case 0:if(t=u(e,n,a.skipCache))return[3,5];o.label=1;case 1:return o.trys.push([1,3,,4]),[4,v(e,n)];case 2:return r=o.sent(),[3,4];case 3:return o.sent(),console.error('Module not initialized! Module "'+n+'" was not found in "'+e+'" webpack scope. Make sure the remote container is loaded?'),[3,4];case 4:return[3,6];case 5:r=t,o.label=6;case 6:return s((function(){return r})),[2]}}))},new((o=void 0)||(o=Promise))((function(e,n){function i(e){try{u(c.next(e))}catch(e){n(e)}}function a(e){try{u(c.throw(e))}catch(e){n(e)}}function u(n){var t;n.done?e(n.value):(t=n.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,a)}u((c=c.apply(t,r||[])).next())}));var t,r,o,c}),[e,n]);return(0,r.useEffect)((function(){f()}),[e,n]),l}var z=function(){return z=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},z.apply(this,arguments)},M=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function c(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}u((r=r.apply(e,n||[])).next())}))},I=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};function G(e,n,t){var o=this,i=e.appName,a=e.scope,c=e.module,l=e.processor;void 0===t&&(t={});var s=z({skipCache:!1},t),f=p(i||a),m=f.scriptLocation,y=f.manifestLocation,w=(0,r.useState)(n),b=w[0],g=w[1],_=(0,r.useState)(),E=_[0],k=_[1],O=u(a,c,s.skipCache),C=(0,r.useRef)(!0);return(0,r.useEffect)((function(){if(C.current)if(O)try{v(a,c).then((function(e){g((function(){return e}))}))}catch(e){k((function(){return e}))}else m?h(i||a,m).then((function(){return M(o,void 0,void 0,(function(){var e;return I(this,(function(n){switch(n.label){case 0:return[4,v(a,c)];case 1:return e=n.sent(),g((function(){return e})),[2]}}))}))})).catch((function(e){k((function(){return e}))})):y&&d(y,i||a,a,l).then((function(){return M(o,void 0,void 0,(function(){var e;return I(this,(function(n){switch(n.label){case 0:return[4,v(a,c)];case 1:return e=n.sent(),g((function(){return e})),[2]}}))}))})).catch((function(e){k((function(){return e}))}));return function(){C.current=!1}}),[i,a,O,s.skipCache]),[b,E]}}}]);