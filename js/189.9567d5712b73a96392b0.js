(self.webpackChunkimage_builder=self.webpackChunkimage_builder||[]).push([[189],{39106:(e,t,n)=>{"use strict";n.r(t);var r=n(93264),o=n.n(r),a=n(3644),c=n.n(a),E=n(98405),l=n(28216),i=n(93433),u=n(9036),O=n(68573),s=n.n(O),S=n(53894),_=n(83215),d=n(4942),P=n(26698);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){(0,d.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A={count:0,allIds:[],byId:{},error:null},T=function(e,t,n){return e.includes(t)?e:n?[t].concat(e):e.concat(t)};const m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P.Z.COMPOSE_ADDED:return p(p({},e),{},{allIds:T(e.allIds,t.payload.compose.id,t.payload.insert),byId:p(p({},e.byId),{},(0,d.Z)({},t.payload.compose.id,t.payload.compose)),error:null});case P.Z.COMPOSE_FAILED:return p(p({},e),{},{error:t.payload.error});case P.Z.COMPOSE_PENDING:return p(p({},e),{},{error:null});case P.Z.COMPOSE_UPDATED:return p(p({},e),{},{byId:p(p({},e.byId),{},(0,d.Z)({},t.payload.compose.id,t.payload.compose))});case P.Z.COMPOSES_UPDATED_COUNT:return p(p({},e),{},{count:t.payload.count});case P.Z.COMPOSE_UPDATED_STATUS:return p(p({},e),{},{byId:p(p({},e.byId),{},(0,d.Z)({},t.payload.id,p(p({},e.byId[t.payload.id]),{},{image_status:t.payload.status})))});default:return e}};var y;function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!y){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(y=new u.xI(e,[s(),S.Z].concat((0,i.Z)(n.filter((function(e){return void 0!==e})))))).register({composes:m,notifications:_.ee})}return y}var b=(0,r.lazy)((function(){return Promise.all([n.e(303),n.e(545),n.e(603),n.e(829)]).then(n.bind(n,63829))})),I=(0,r.lazy)((function(){return Promise.all([n.e(291),n.e(462),n.e(824),n.e(303),n.e(243),n.e(603),n.e(326)]).then(n.bind(n,44257))})),C=function(){return o().createElement(E.Routes,null,o().createElement(E.Route,{path:"/landing/*",element:o().createElement(b,null)}),o().createElement(E.Route,{path:"/imagewizard/*",element:o().createElement(I,null)}),o().createElement(E.Route,{path:"/",element:o().createElement(E.Navigate,{replace:!0,to:"/landing"})}))},U=n(67336),g=n(51344);const h=function(e){var t=(0,E.useNavigate)();return(0,r.useEffect)((function(){(0,U.JH)().register({notifications:_.ee}),insights.chrome.init(),insights.chrome.identifyApp("image-builder");var e=insights.chrome.on("APP_NAVIGATION",(function(e){return t("/".concat(e.navId))}));return function(){e()}}),[]),o().createElement(o().Fragment,null,o().createElement(g.ZP,null),o().createElement(C,{childProps:e}))};var v=n(35240);n(94500);const L=function(){return o().createElement(l.zt,{store:f.apply(void 0,[{}].concat([void 0])).getStore()},o().createElement(E.BrowserRouter,{basename:(0,v.eb)(window.location.pathname)},o().createElement(h,null)))};c().render(o().createElement(L,null),document.getElementById("root"))},26698:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={COMPOSE_ADDED:"COMPOSE_ADDED",COMPOSE_FAILED:"COMPOSE_FAILED",COMPOSE_UPDATED:"COMPOSE_UPDATED",COMPOSES_UPDATED_COUNT:"COMPOSES_UPDATED_COUNT",COMPOSE_UPDATED_STATUS:"COMPOSE_UPDATED_STATUS",SET_RELEASE:"SET_RELEASE",SET_UPLOAD_DESTINATIONS:"SET_UPLOAD_DESTINATIONS",SET_UPLOAD_AWS:"SET_UPLOAD_AWS",SET_UPLOAD_AZURE:"SET_UPLOAD_AZURE",SET_UPLOAD_GOOGLE:"SET_UPLOAD_GOOGLE",SET_SELECTED_PACKAGES:"SET_SELECTED_PACKAGES",SET_SUBSCRIPTION:"SET_SUBSCRIPTION",SET_SUBSCRIBE_NOW:"SET_SUBSCRIBE_NOW"}},45467:()=>{},81754:()=>{},34946:()=>{},80598:()=>{},10108:()=>{},30187:()=>{},93398:()=>{},46928:()=>{},66822:()=>{},49854:()=>{},74181:()=>{},11177:()=>{}}]);
//# sourceMappingURL=../sourcemaps/189.cd9c6234d8e8ebe9c7ed16764ee67901.js.map