(self.webpackChunkimage_builder=self.webpackChunkimage_builder||[]).push([[68],{34155:t=>{var e,r,n=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(t){if(e===setTimeout)return setTimeout(t,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(r){try{return e.call(null,t,0)}catch(r){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:o}catch(t){e=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(t){r=i}}();var a,c=[],l=!1,f=-1;function s(){l&&a&&(l=!1,a.length?c=a.concat(c):f=-1,c.length&&p())}function p(){if(!l){var t=u(s);l=!0;for(var e=c.length;e;){for(a=c,c=[];++f<e;)a&&a[f].run();f=-1,e=c.length}a=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function y(t,e){this.fun=t,this.array=e}function d(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];c.push(new y(t,e)),1!==c.length||l||u(p)},y.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=d,n.addListener=d,n.once=d,n.off=d,n.removeListener=d,n.removeAllListeners=d,n.emit=d,n.prependListener=d,n.prependOnceListener=d,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},5068:(t,e,r)=>{"use strict";r.r(e),r.d(e,{ActionType:()=>c,createPromise:()=>l,default:()=>f});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function o(t){return null!==t&&"object"===(void 0===t?"undefined":n(t))&&t&&"function"==typeof t.then}var i=r(34155),u=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(n=(u=a.next()).done)&&(r.push(u.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{!n&&a.return&&a.return()}finally{if(o)throw i}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},c={Pending:"PENDING",Fulfilled:"FULFILLED",Rejected:"REJECTED"};function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=[c.Pending,c.Fulfilled,c.Rejected],r=t.promiseTypeSuffixes||e,n=t.promiseTypeDelimiter||"_";return function(t){var e=t.dispatch;return function(t){return function(i){var c=void 0,l=void 0;if(!i.payload)return t(i);var f=i.payload;if(o(f))c=f;else if(o(f.promise))c=f.promise,l=f.data;else{if("function"!=typeof f&&"function"!=typeof f.promise)return t(i);if(c=f.promise?f.promise():f(),l=f.promise?f.data:void 0,!o(c))return t(a({},i,{payload:c}))}var s=i.type,p=i.meta,y=u(r,3),d=y[0],h=y[1],m=y[2],v=function(t,e){return a({type:[s,e?m:h].join(n)},null==t?{}:{payload:t},void 0!==p?{meta:p}:{},e?{error:!0}:{})};return t(a({type:[s,d].join(n)},void 0!==l?{payload:l}:{},void 0!==p?{meta:p}:{})),c.then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=v(t,!1);return e(r),{value:t,action:r}}),(function(t){var r=v(t,!0);throw e(r),t}))}}}}function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.dispatch;return"function"==typeof e?l()({dispatch:e}):(i&&i.env,null)}}}]);