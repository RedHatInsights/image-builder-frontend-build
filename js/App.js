!function(e){function t(t){for(var r,o,c=t[0],i=t[1],a=t[2],s=0,u=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(A,o)&&A[o]&&u.push(A[o][0]),A[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(R&&R(t);u.length;)u.shift()();return k.push.apply(k,a||[]),n()}function n(){for(var e,t=0;t<k.length;t++){for(var n=k[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==A[c]&&(r=!1)}r&&(k.splice(t--,1),e=I(I.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!O[e]||!w[e])return;for(var n in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(v[n]=t[n]);0==--y&&0===g&&D()}(e,t),r&&r(e,t)};var o,c=!0,i="ce7eafabf273f8301f4c",a={},s=[],u=[];function l(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:_,apply:j,status:function(e){if(!e)return p;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:a[e]};return o=void 0,t}var d=[],p="idle";function f(e){p=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var h,v,m,y=0,g=0,b={},w={},O={};function E(e){return+e+""===e?+e:e}function _(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return c=e,f("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=I.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return f("idle"),null;w={},b={},O=e.c,m=e.h,f("prepare");var t=new Promise((function(e,t){h={resolve:e,reject:t}}));for(var n in v={},A)P(n);return"prepare"===p&&0===g&&0===y&&D(),t}));var t}function P(e){O[e]?(w[e]=!0,y++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=I.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):b[e]=!0}function D(){f("ready");var e=h;if(h=null,e)if(c)Promise.resolve().then((function(){return j(c)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in v)Object.prototype.hasOwnProperty.call(v,n)&&t.push(E(n));e.resolve(t)}}function j(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,r,o,c,u;function l(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var o=r.pop(),i=o.id,a=o.chain;if((c=x[i])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(c.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var s=0;s<c.parents.length;s++){var u=c.parents[s],l=x[u];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([u]),moduleId:i,parentId:u};-1===t.indexOf(u)&&(l.hot._acceptedDependencies[i]?(n[u]||(n[u]=[]),d(n[u],[i])):(delete n[u],t.push(u),r.push({chain:a.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var h={},y=[],g={},b=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var w in v)if(Object.prototype.hasOwnProperty.call(v,w)){var _;u=E(w);var P=!1,D=!1,j=!1,k="";switch((_=v[w]?l(u):{type:"disposed",moduleId:w}).chain&&(k="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(P=new Error("Aborted because of self decline: "+_.moduleId+k));break;case"declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(P=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+k));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(_),t.ignoreUnaccepted||(P=new Error("Aborted because "+u+" is not accepted"+k));break;case"accepted":t.onAccepted&&t.onAccepted(_),D=!0;break;case"disposed":t.onDisposed&&t.onDisposed(_),j=!0;break;default:throw new Error("Unexception type "+_.type)}if(P)return f("abort"),Promise.reject(P);if(D)for(u in g[u]=v[u],d(y,_.outdatedModules),_.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,u)&&(h[u]||(h[u]=[]),d(h[u],_.outdatedDependencies[u]));j&&(d(y,[_.moduleId]),g[u]=b)}var H,S=[];for(r=0;r<y.length;r++)u=y[r],x[u]&&x[u].hot._selfAccepted&&g[u]!==b&&S.push({module:u,errorHandler:x[u].hot._selfAccepted});f("dispose"),Object.keys(O).forEach((function(e){!1===O[e]&&function(e){delete A[e]}(e)}));for(var M,R,C=y.slice();C.length>0;)if(u=C.pop(),c=x[u]){var T={},U=c.hot._disposeHandlers;for(o=0;o<U.length;o++)(n=U[o])(T);for(a[u]=T,c.hot.active=!1,delete x[u],delete h[u],o=0;o<c.children.length;o++){var q=x[c.children[o]];q&&((H=q.parents.indexOf(u))>=0&&q.parents.splice(H,1))}}for(u in h)if(Object.prototype.hasOwnProperty.call(h,u)&&(c=x[u]))for(R=h[u],o=0;o<R.length;o++)M=R[o],(H=c.children.indexOf(M))>=0&&c.children.splice(H,1);for(u in f("apply"),i=m,g)Object.prototype.hasOwnProperty.call(g,u)&&(e[u]=g[u]);var L=null;for(u in h)if(Object.prototype.hasOwnProperty.call(h,u)&&(c=x[u])){R=h[u];var N=[];for(r=0;r<R.length;r++)if(M=R[r],n=c.hot._acceptedDependencies[M]){if(-1!==N.indexOf(n))continue;N.push(n)}for(r=0;r<N.length;r++){n=N[r];try{n(R)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:u,dependencyId:R[r],error:e}),t.ignoreErrored||L||(L=e)}}}for(r=0;r<S.length;r++){var z=S[r];u=z.module,s=[u];try{I(u)}catch(e){if("function"==typeof z.errorHandler)try{z.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:n,originalError:e}),t.ignoreErrored||L||(L=n),L||(L=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:u,error:e}),t.ignoreErrored||L||(L=e)}}return L?(f("fail"),Promise.reject(L)):(f("idle"),new Promise((function(e){e(y)})))}var x={},A={1:0},k=[];function I(t){if(x[t])return x[t].exports;var n=x[t]={i:t,l:!1,exports:{},hot:l(t),parents:(u=s,s=[],u),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=x[e];if(!t)return I;var n=function(n){return t.hot.active?(x[n]?-1===x[n].parents.indexOf(e)&&x[n].parents.push(e):(s=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),s=[]),I(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return I[e]},set:function(t){I[e]=t}}};for(var c in I)Object.prototype.hasOwnProperty.call(I,c)&&"e"!==c&&"t"!==c&&Object.defineProperty(n,c,r(c));return n.e=function(e){return"ready"===p&&f("prepare"),g++,I.e(e).then(t,(function(e){throw t(),e}));function t(){g--,"prepare"===p&&(b[e]||P(e),0===g&&0===y&&D())}},n.t=function(e,t){return 1&t&&(e=n(e)),I.t(e,-2&t)},n}(t)),n.l=!0,n.exports}I.e=function(e){var t=[],n=A[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=A[e]=[t,r]}));t.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,I.nc&&c.setAttribute("nonce",I.nc),c.src=function(e){return I.p+"js/"+({}[e]||e)+".js"}(e);var i=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(a);var n=A[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,n[1](i)}A[e]=void 0}};var a=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},I.m=e,I.c=x,I.d=function(e,t,n){I.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},I.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},I.t=function(e,t){if(1&t&&(e=I(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(I.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)I.d(n,r,function(t){return e[t]}.bind(null,r));return n},I.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return I.d(t,"a",t),t},I.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},I.p="/beta/apps/image-builder/",I.oe=function(e){throw console.error(e),e},I.h=function(){return i};var H=window.webpackJsonp=window.webpackJsonp||[],S=H.push.bind(H);H.push=t,H=H.slice();for(var M=0;M<H.length;M++)t(H[M]);var R=S;k.push([396,2]),n()}({137:function(e,t,n){var r=n(4),o=n(395);(t=r(!1)).i(o),t.push([e.i,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}\n",""]),e.exports=t},156:function(e,t,n){"use strict";t.a={UPDATE_COMPOSE:"UPDATE_COMPOSE"}},394:function(e,t,n){var r=n(137);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},c=n(5)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(137,(function(){var t=n(137);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");c(t)})),e.hot.dispose((function(){c()}))},396:function(e,t,n){"use strict";n.r(t);var r,o=n(1),c=n.n(o),i=n(17),a=n.n(i),s=n(44),u=n(50),l=n(199),d=n.n(l),p=n(198),f=n(156);function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.a.UPDATE_COMPOSE:return Object.assign({},e,t.compose);default:return e}}var v=n(54),m=n.n(v),y=n(55),g=n.n(y),b=n(56),w=n.n(b),O=n(38),E=n.n(O),_=n(57),P=n.n(_),D=n(0),j=n.n(D),x=n(31),A=n(200),k=n.n(A),I=n(201),H=n.n(I),S=n(83),M=n.n(S),R=n(148),C=n.n(R),T=n(58);function U(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function q(e){return function(t){P()(i,t);var n,r,o=(n=i,function(){var e,t=E()(n);if(U()){var r=E()(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return w()(this,e)});function i(e){var t;return m()(this,i),(t=o.call(this,e)).state={component:null},t}return g()(i,[{key:"componentDidMount",value:(r=C()(M.a.mark((function t(){var n,r;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,r=n.default,this.setState({component:r});case 5:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.component;return e?c.a.createElement(e,this.props):c.a.createElement(T.Skeleton,null)}}]),i}(o.Component)}var L=q((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,462))})),N=q((function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,461))})),z=function(e){var t=e.component,n=e.rootClass,r=H()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(n),"pf-c-page__main"),o.setAttribute("role","main"),c.a.createElement(x.d,k()({},r,{component:t}))};z.propTypes={component:j.a.func,rootClass:j.a.string};var B=function(){return c.a.createElement(x.g,null,c.a.createElement(z,{exact:!0,path:"/landing",component:L,rootClass:"landingpage"}),c.a.createElement(z,{exact:!0,path:"/imagewizard",component:N,rootClass:"imagewizard"}),c.a.createElement(x.c,{to:"/landing"}))};n(394);function J(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var G=function(e){P()(r,e);var t,n=(t=r,function(){var e,n=E()(t);if(J()){var r=E()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return w()(this,e)});function r(){var e;return m()(this,r),(e=n.call(this)).state={},e}return g()(r,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("image-builder"),this.appNav=insights.chrome.on("APP_NAVIGATION",(function(t){return e.props.history.push("/".concat(t.navId))})),insights.chrome.auth.getUser().then((function(t){e.setState({identity:t.identity})}))}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return c.a.createElement(T.Main,{style:{marginLeft:0,padding:0}},c.a.createElement(B,{childProps:this.props}))}}]),r}(o.Component);G.propTypes={history:j.a.object};var X=Object(x.o)(Object(u.connect)()(G));var V=function(e){var t="/",n=e.split("/");return n.shift(),"beta"===n[0]&&(n.shift(),t="/beta/"),"".concat(t).concat(n[0],"/").concat(n[1]||"")};a.a.render(c.a.createElement(u.Provider,{store:function(){if(r)throw new Error("store already initialized");for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(r=new d.a({},[p.a].concat(t))).register({composes:h}),r}().getStore()},c.a.createElement(s.BrowserRouter,{basename:V(window.location.pathname)},c.a.createElement(X,null))),document.getElementById("root"))}});
//# sourceMappingURL=App.js.map