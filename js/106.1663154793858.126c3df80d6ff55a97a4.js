"use strict";(self.webpackChunkimage_builder=self.webpackChunkimage_builder||[]).push([[106],{39106:(e,t,r)=>{r.r(t);var n=r(75418),o=r.n(n),a=r(66235),c=r.n(a),E=r(69860),l=r(86706),i=r(35240),u=r(8738),O=r(51344),S=r(83215),s=(0,n.lazy)((function(){return Promise.all([r.e(50),r.e(6),r.e(99)]).then(r.bind(r,19099))})),_=(0,n.lazy)((function(){return Promise.all([r.e(50),r.e(350),r.e(6),r.e(486)]).then(r.bind(r,40789))})),d=function(){return o().createElement(E.Routes,null,o().createElement(E.Route,{path:"/imagewizard/*",element:o().createElement(_,null)}),o().createElement(E.Route,{path:"*",element:o().createElement(s,null)}))};const P=function(e){var t=(0,E.useNavigate)();return(0,n.useEffect)((function(){(0,u.JH)().register({notifications:S.ee}),document.title="Image Builder | Red Hat Insights",insights.chrome.init(),insights.chrome.identifyApp("image-builder");var e=insights.chrome.on("APP_NAVIGATION",(function(e){return t("/".concat(e.navId))}));return function(){e()}}),[]),o().createElement(o().Fragment,null,o().createElement(O.ZP,null),o().createElement(d,{childProps:e}))};var D=r(47054),T=r(68573),p=r.n(T),A=r(4942),m=r(26698);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,A.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f={count:0,allIds:[],byId:{},error:null},I=function(e,t,r){return e.includes(t)?e:r?[t].concat(e):e.concat(t)},C={composes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.Z.COMPOSE_ADDED:return b(b({},e),{},{allIds:I(e.allIds,t.payload.compose.id,t.payload.insert),byId:b(b({},e.byId),{},(0,A.Z)({},t.payload.compose.id,t.payload.compose)),error:null});case m.Z.COMPOSE_FAILED:return b(b({},e),{},{error:t.payload.error});case m.Z.COMPOSE_PENDING:return b(b({},e),{},{error:null});case m.Z.COMPOSE_UPDATED:return b(b({},e),{},{byId:b(b({},e.byId),{},(0,A.Z)({},t.payload.compose.id,t.payload.compose))});case m.Z.COMPOSES_UPDATED_COUNT:return b(b({},e),{},{count:t.payload.count});case m.Z.COMPOSE_UPDATED_STATUS:return b(b({},e),{},{byId:b(b({},e.byId),{},(0,A.Z)({},t.payload.id,b(b({},e.byId[t.payload.id]),{},{image_status:t.payload.status})))});default:return e}},notifications:S.ee},U=(0,D.xC)({reducer:C,middleware:function(e){return e().concat(p())}});const g=function(){return o().createElement(l.zt,{store:U},o().createElement(E.BrowserRouter,{basename:(0,i.eb)(window.location.pathname)},o().createElement(P,null)))};c().render(o().createElement(g,null),document.getElementById("root"))},26698:(e,t,r)=>{r.d(t,{Z:()=>n});const n={COMPOSE_ADDED:"COMPOSE_ADDED",COMPOSE_FAILED:"COMPOSE_FAILED",COMPOSE_UPDATED:"COMPOSE_UPDATED",COMPOSES_UPDATED_COUNT:"COMPOSES_UPDATED_COUNT",COMPOSE_UPDATED_STATUS:"COMPOSE_UPDATED_STATUS",SET_RELEASE:"SET_RELEASE",SET_UPLOAD_DESTINATIONS:"SET_UPLOAD_DESTINATIONS",SET_UPLOAD_AWS:"SET_UPLOAD_AWS",SET_UPLOAD_AZURE:"SET_UPLOAD_AZURE",SET_UPLOAD_GOOGLE:"SET_UPLOAD_GOOGLE",SET_SELECTED_PACKAGES:"SET_SELECTED_PACKAGES",SET_SUBSCRIPTION:"SET_SUBSCRIPTION",SET_SUBSCRIBE_NOW:"SET_SUBSCRIBE_NOW"}}}]);
//# sourceMappingURL=../sourcemaps/106.9180cbe4d97a99a3f5de2a2aa296b6e7.js.map