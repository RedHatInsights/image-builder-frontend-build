/*! For license information please see 840.23a1c34708e23dedea07.js.LICENSE.txt */
(self.webpackChunkimage_builder=self.webpackChunkimage_builder||[]).push([[840],{60053:(e,n)=>{"use strict";var t,r,a,l,o;if("undefined"==typeof window||"function"!=typeof MessageChannel){var i=null,u=null,s=function(){if(null!==i)try{var e=n.unstable_now();i(!0,e),i=null}catch(e){throw setTimeout(s,0),e}},c=Date.now();n.unstable_now=function(){return Date.now()-c},t=function(e){null!==i?setTimeout(t,0,e):(i=e,setTimeout(s,0))},r=function(e,n){u=setTimeout(e,n)},a=function(){clearTimeout(u)},l=function(){return!1},o=n.unstable_forceFrameRate=function(){}}else{var f=window.performance,b=window.Date,p=window.setTimeout,d=window.clearTimeout;if("undefined"!=typeof console){var w=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof w&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"==typeof f&&"function"==typeof f.now)n.unstable_now=function(){return f.now()};else{var v=b.now();n.unstable_now=function(){return b.now()-v}}var m=!1,y=null,_=-1,h=5,k=0;l=function(){return n.unstable_now()>=k},o=function(){},n.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):h=0<e?Math.floor(1e3/e):5};var T=new MessageChannel,g=T.port2;T.port1.onmessage=function(){if(null!==y){var e=n.unstable_now();k=e+h;try{y(!0,e)?g.postMessage(null):(m=!1,y=null)}catch(e){throw g.postMessage(null),e}}else m=!1},t=function(e){y=e,m||(m=!0,g.postMessage(null))},r=function(e,t){_=p((function(){e(n.unstable_now())}),t)},a=function(){d(_),_=-1}}function x(e,n){var t=e.length;e.push(n);e:for(;;){var r=t-1>>>1,a=e[r];if(!(void 0!==a&&0<F(a,n)))break e;e[r]=n,e[t]=a,t=r}}function C(e){return void 0===(e=e[0])?null:e}function P(e){var n=e[0];if(void 0!==n){var t=e.pop();if(t!==n){e[0]=t;e:for(var r=0,a=e.length;r<a;){var l=2*(r+1)-1,o=e[l],i=l+1,u=e[i];if(void 0!==o&&0>F(o,t))void 0!==u&&0>F(u,o)?(e[r]=u,e[i]=t,r=i):(e[r]=o,e[l]=t,r=l);else{if(!(void 0!==u&&0>F(u,t)))break e;e[r]=u,e[i]=t,r=i}}}return n}return null}function F(e,n){var t=e.sortIndex-n.sortIndex;return 0!==t?t:e.id-n.id}var I=[],M=[],A=1,L=null,q=3,D=!1,R=!1,j=!1;function E(e){for(var n=C(M);null!==n;){if(null===n.callback)P(M);else{if(!(n.startTime<=e))break;P(M),n.sortIndex=n.expirationTime,x(I,n)}n=C(M)}}function N(e){if(j=!1,E(e),!R)if(null!==C(I))R=!0,t(B);else{var n=C(M);null!==n&&r(N,n.startTime-e)}}function B(e,t){R=!1,j&&(j=!1,a()),D=!0;var o=q;try{for(E(t),L=C(I);null!==L&&(!(L.expirationTime>t)||e&&!l());){var i=L.callback;if(null!==i){L.callback=null,q=L.priorityLevel;var u=i(L.expirationTime<=t);t=n.unstable_now(),"function"==typeof u?L.callback=u:L===C(I)&&P(I),E(t)}else P(I);L=C(I)}if(null!==L)var s=!0;else{var c=C(M);null!==c&&r(N,c.startTime-t),s=!1}return s}finally{L=null,q=o,D=!1}}function U(e){switch(e){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var W=o;n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(e){e.callback=null},n.unstable_continueExecution=function(){R||D||(R=!0,t(B))},n.unstable_getCurrentPriorityLevel=function(){return q},n.unstable_getFirstCallbackNode=function(){return C(I)},n.unstable_next=function(e){switch(q){case 1:case 2:case 3:var n=3;break;default:n=q}var t=q;q=n;try{return e()}finally{q=t}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=W,n.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var t=q;q=e;try{return n()}finally{q=t}},n.unstable_scheduleCallback=function(e,l,o){var i=n.unstable_now();if("object"==typeof o&&null!==o){var u=o.delay;u="number"==typeof u&&0<u?i+u:i,o="number"==typeof o.timeout?o.timeout:U(e)}else o=U(e),u=i;return e={id:A++,callback:l,priorityLevel:e,startTime:u,expirationTime:o=u+o,sortIndex:-1},u>i?(e.sortIndex=u,x(M,e),null===C(I)&&e===C(M)&&(j?a():j=!0,r(N,u-i))):(e.sortIndex=o,x(I,e),R||D||(R=!0,t(B))),e},n.unstable_shouldYield=function(){var e=n.unstable_now();E(e);var t=C(I);return t!==L&&null!==L&&null!==t&&null!==t.callback&&t.startTime<=e&&t.expirationTime<L.expirationTime||l()},n.unstable_wrapCallback=function(e){var n=q;return function(){var t=q;q=n;try{return e.apply(this,arguments)}finally{q=t}}}},63840:(e,n,t)=>{"use strict";e.exports=t(60053)}}]);
//# sourceMappingURL=../sourcemaps/840.4eeee191ccc26edcfae6.js.map