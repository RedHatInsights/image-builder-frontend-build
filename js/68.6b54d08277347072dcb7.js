(self.webpackChunkimage_builder=self.webpackChunkimage_builder||[]).push([[68],{5068:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ActionType:()=>l,createPromise:()=>f,default:()=>c});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function o(e){return null!==e&&"object"===(void 0===e?"undefined":n(e))&&e&&"function"==typeof e.then}var i=r(34155),u=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(n=(u=a.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l={Pending:"PENDING",Fulfilled:"FULFILLED",Rejected:"REJECTED"};function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[l.Pending,l.Fulfilled,l.Rejected],r=e.promiseTypeSuffixes||t,n=e.promiseTypeDelimiter||"_";return function(e){var t=e.dispatch;return function(e){return function(i){var l=void 0,f=void 0;if(!i.payload)return e(i);var c=i.payload;if(o(c))l=c;else if(o(c.promise))l=c.promise,f=c.data;else{if("function"!=typeof c&&"function"!=typeof c.promise)return e(i);if(l=c.promise?c.promise():c(),f=c.promise?c.data:void 0,!o(l))return e(a({},i,{payload:l}))}var p=i.type,y=i.meta,d=u(r,3),s=d[0],v=d[1],m=d[2],h=function(e,t){return a({type:[p,t?m:v].join(n)},null==e?{}:{payload:e},void 0!==y?{meta:y}:{},t?{error:!0}:{})};return e(a({type:[p,s].join(n)},void 0!==f?{payload:f}:{},void 0!==y?{meta:y}:{})),l.then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=h(e,!1);return t(r),{value:e,action:r}}),(function(e){var r=h(e,!0);throw t(r),e}))}}}}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch;return"function"==typeof t?f()({dispatch:t}):(i&&i.env,null)}}}]);
//# sourceMappingURL=../sourcemaps/68.2b7e1063d348903797f5.js.map