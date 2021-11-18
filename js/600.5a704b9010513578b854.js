"use strict";(self.webpackChunkimage_builder=self.webpackChunkimage_builder||[]).push([[600],{32122:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(29439),a=r(93264),o=r.n(a),c=r(98405),i=(0,a.lazy)((function(){return Promise.all([r.e(410),r.e(247),r.e(971),r.e(331)]).then(r.bind(r,38331))})),u=(0,a.lazy)((function(){return Promise.all([r.e(410),r.e(736),r.e(180),r.e(848),r.e(461),r.e(247),r.e(840)]).then(r.bind(r,44257))})),s=function(){return o().createElement(c.Routes,null,o().createElement(c.Route,{path:"/landing/*",element:o().createElement(i,null)}),o().createElement(c.Route,{path:"/imagewizard/*",element:o().createElement(u,null)}),o().createElement(c.Route,{path:"/",element:o().createElement(c.Navigate,{replace:!0,to:"/landing"})}))},l=r(67336),p=r(51344),E=r(83215),d=r(87248),O=r(53688),S=r(80604);const f=function(){return o().createElement(S.EmptyState,{variant:S.EmptyStateVariant.large,"data-testid":"empty-state-denied"},o().createElement(S.EmptyStateIcon,{icon:O.uM}),o().createElement(S.Title,{headingLevel:"h4",size:"lg"},"Image Builder is not quite ready"),o().createElement(S.EmptyStateBody,null,"Image Builder is in early development and not ready for use yet. If you're interested in trying it out once it reaches beta, fill out your contact information in the sign up form, and we'll be in touch once it's ready."),o().createElement(S.Button,{id:"beta-signup-button",variant:"primary"},"Sign up"))},y=function(e){var t=(0,a.useState)(!1),r=(0,n.Z)(t,2),i=r[0],u=r[1],O=(0,c.useNavigate)();return(0,a.useEffect)((function(){(0,l.JH)().register({notifications:E.ee}),insights.chrome.init(),insights.chrome.identifyApp("image-builder"),d.Z.getVersion().then((function(){u(!0)})).catch((function(){u(!1)}));var e=insights.chrome.on("APP_NAVIGATION",(function(e){return O("/".concat(e.navId))}));return function(){e()}}),[]),o().createElement(o().Fragment,null,o().createElement(p.ZP,null),i?o().createElement(s,{childProps:e}):o().createElement(f,null))}},87248:(e,t,r)=>{r.d(t,{Z:()=>S});var n=r(15861),a=r(87757),o=r.n(a),c=r(9669),i=r.n(c),u=r(58061),s={headers:{"Content-Type":"application/json"}};function l(){return(l=(0,n.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i().post(u.D.concat("/compose"),t,s);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=(0,n.Z)(o().mark((function e(t,r){var n,a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({limit:t,offset:r}),a="/composes?"+n.toString(),e.next=4,i().get(u.D.concat(a));case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=(0,n.Z)(o().mark((function e(t){var r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/composes/"+t,e.next=3,i().get(u.D.concat(r));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return(d=(0,n.Z)(o().mark((function e(t,r,n){var a,c,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new URLSearchParams({distribution:t,architecture:r,search:n}),c="/packages?"+a.toString(),e.next=4,i().get(u.D.concat(c));case 4:return s=e.sent,e.abrupt("return",s.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=(0,n.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i().get(u.D.concat("/version"));case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}const S={composeImage:function(e){return l.apply(this,arguments)},getComposes:function(e,t){return p.apply(this,arguments)},getComposeStatus:function(e){return E.apply(this,arguments)},getPackages:function(e,t,r){return d.apply(this,arguments)},getVersion:function(){return O.apply(this,arguments)}}},58061:(e,t,r)=>{r.d(t,{D:()=>n,F:()=>a});var n="/api/image-builder/v1",a="rhel-85"},11916:(e,t,r)=>{r.d(t,{S1:()=>_});var n=r(93433),a=r(18546),o=r(68573),c=r.n(o),i=r(53894),u=r(83215),s=r(4942),l=r(26698);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d={count:0,allIds:[],byId:{},error:null},O=function(e,t,r){return e.includes(t)?e:r?[t].concat(e):e.concat(t)};const S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.Z.COMPOSE_ADDED:return E(E({},e),{},{allIds:O(e.allIds,t.payload.compose.id,t.payload.insert),byId:E(E({},e.byId),{},(0,s.Z)({},t.payload.compose.id,t.payload.compose)),error:null});case l.Z.COMPOSE_FAILED:return E(E({},e),{},{error:t.payload.error});case l.Z.COMPOSE_PENDING:return E(E({},e),{},{error:null});case l.Z.COMPOSE_UPDATED:return E(E({},e),{},{byId:E(E({},e.byId),{},(0,s.Z)({},t.payload.compose.id,t.payload.compose))});case l.Z.COMPOSES_UPDATED_COUNT:return E(E({},e),{},{count:t.payload.count});case l.Z.COMPOSE_UPDATED_STATUS:return E(E({},e),{},{byId:E(E({},e.byId),{},(0,s.Z)({},t.payload.id,E(E({},e.byId[t.payload.id]),{},{image_status:t.payload.status})))});default:return e}};function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P={release:{arch:"x86_64",distro:r(58061).F},uploadDestinations:{aws:!1,azure:!1,google:!1},uploadAWS:{shareWithAccounts:[]},uploadAzure:{tenantId:null,subscriptionId:null,resourceGroup:null},uploadGoogle:{accountType:"googleAccount",shareWithAccounts:[]},selectedPackages:[],subscription:{activationKey:null,insights:!0,organization:null},subscribeNow:!1};const g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.Z.SET_RELEASE:return y(y({},e),{},{release:t.payload});case l.Z.SET_UPLOAD_DESTINATIONS:return y(y({},e),{},{uploadDestinations:t.payload});case l.Z.SET_UPLOAD_AWS:return y(y({},e),{},{uploadAWS:t.payload});case l.Z.SET_UPLOAD_AZURE:return y(y({},e),{},{uploadAzure:t.payload});case l.Z.SET_UPLOAD_GOOGLE:return y(y({},e),{},{uploadGoogle:t.payload});case l.Z.SET_SELECTED_PACKAGES:return y(y({},e),{},{selectedPackages:t.payload});case l.Z.SET_SUBSCRIPTION:return y(y({},e),{},{subscription:t.payload});case l.Z.SET_SUBSCRIBE_NOW:return y(y({},e),{},{subscribeNow:t.payload});default:return e}};var m;function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!m){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];(m=new a.xI(e,[c(),i.Z].concat((0,n.Z)(r.filter((function(e){return void 0!==e})))))).register({composes:S,pendingCompose:g,notifications:u.ee})}return m}},26698:(e,t,r)=>{r.d(t,{Z:()=>n});const n={COMPOSE_ADDED:"COMPOSE_ADDED",COMPOSE_FAILED:"COMPOSE_FAILED",COMPOSE_UPDATED:"COMPOSE_UPDATED",COMPOSES_UPDATED_COUNT:"COMPOSES_UPDATED_COUNT",COMPOSE_UPDATED_STATUS:"COMPOSE_UPDATED_STATUS",SET_RELEASE:"SET_RELEASE",SET_UPLOAD_DESTINATIONS:"SET_UPLOAD_DESTINATIONS",SET_UPLOAD_AWS:"SET_UPLOAD_AWS",SET_UPLOAD_AZURE:"SET_UPLOAD_AZURE",SET_UPLOAD_GOOGLE:"SET_UPLOAD_GOOGLE",SET_SELECTED_PACKAGES:"SET_SELECTED_PACKAGES",SET_SUBSCRIPTION:"SET_SUBSCRIPTION",SET_SUBSCRIBE_NOW:"SET_SUBSCRIBE_NOW"}}}]);
//# sourceMappingURL=../sourcemaps/600.c81b2d7cced6bc36d554ae0c444d32ea.js.map