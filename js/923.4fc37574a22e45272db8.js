(self.webpackChunkimage_builder=self.webpackChunkimage_builder||[]).push([[923],{66986:(e,t,n)=>{"use strict";n.d(t,{Z:()=>I});var r=n(6610),o=n(5991),a=n(10379),c=n(86089),i=n(77608),s=n(45697),u=n.n(s),l=n(31154),p=n.n(l),f=n(16530),d=n(88931),E=n(22122),h=n(81253),y=n(87757),S=n.n(y),O=n(92137),m=n(27449);function g(e){return function(t){(0,a.Z)(f,t);var n,s,u,l=(s=f,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,i.Z)(s);if(u){var n=(0,i.Z)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return(0,c.Z)(this,e)});function f(e){var t;return(0,r.Z)(this,f),(t=l.call(this,e)).state={component:null},t}return(0,o.Z)(f,[{key:"componentDidMount",value:(n=(0,O.Z)(S().mark((function t(){var n,r;return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,r=n.default,this.setState({component:r});case 5:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.component;return e?p().createElement(e,this.props):p().createElement(m.Skeleton,null)}}]),f}(l.Component)}var v=g((function(){return Promise.all([n.e(410),n.e(57),n.e(955),n.e(513)]).then(n.bind(n,97513))})),P=g((function(){return Promise.all([n.e(410),n.e(955),n.e(50)]).then(n.bind(n,38050))})),A=function(e){var t=e.component,n=e.title,r=(0,h.Z)(e,["component","title"]);return n&&(document.title=n),p().createElement(f.Route,(0,E.Z)({},r,{component:t}))};A.propTypes={component:u().func,title:u().string};var _=function(){return p().createElement(f.Switch,null,p().createElement(A,{exact:!0,path:"/landing",component:v}),p().createElement(A,{exact:!0,path:"/imagewizard",component:P}),p().createElement(f.Redirect,{to:"/landing"}))},b=(n(14154),n(8650)),D=n(65800),T=n(53688),Z=n(90847);const w=function(){return p().createElement(Z.EmptyState,{variant:Z.EmptyStateVariant.large,"data-testid":"empty-state-denied"},p().createElement(Z.EmptyStateIcon,{icon:T.uM}),p().createElement(Z.Title,{headingLevel:"h4",size:"lg"},"Image Builder is not quite ready"),p().createElement(Z.EmptyStateBody,null,"Image Builder is in early development and not ready for use yet. If you're interested in trying it out once it reaches beta, fill out your contact information in the sign up form, and we'll be in touch once it's ready."),p().createElement(Z.Button,{id:"beta-signup-button",variant:"primary"},"Sign up"))};var C=function(e){(0,a.Z)(u,e);var t,n,s=(t=u,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,i.Z)(t);if(n){var o=(0,i.Z)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return(0,c.Z)(this,e)});function u(){var e;return(0,r.Z)(this,u),(e=s.call(this)).state={permission:!1},e}return(0,o.Z)(u,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("image-builder").catch((function(){})),this.appNav=insights.chrome.on("APP_NAVIGATION",(function(t){return e.props.history.push("/".concat(t.navId))})),insights.chrome.auth.getUser().then((function(t){e.setState({identity:t.identity}),D.Z.getVersion().then((function(){e.setState({permission:!0})})).catch((function(){e.setState({permission:!1})}))}))}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return p().createElement(p().Fragment,null,p().createElement(b.NotificationsPortal,null),this.state.permission?p().createElement(_,{childProps:this.props}):p().createElement(w,null))}}]),u}(l.Component);C.propTypes={history:u().object};const I=(0,f.withRouter)((0,d.connect)()(C))},65800:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(87757),o=n.n(r),a=n(92137),c=n(27199),i=n.n(c),s="/api/image-builder/v1",u={headers:{"Content-Type":"application/json"}};function l(){return(l=(0,a.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i().post(s.concat("/compose"),t,u);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=(0,a.Z)(o().mark((function e(t,n){var r,a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URLSearchParams({limit:t,offset:n}),a="/composes?"+r.toString(),e.next=4,i().get(s.concat(a));case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=(0,a.Z)(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/composes/"+t,e.next=3,i().get(s.concat(n));case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return(d=(0,a.Z)(o().mark((function e(t,n,r){var a,c,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new URLSearchParams({distribution:t,architecture:n,search:r}),c="/packages?"+a.toString(),e.next=4,i().get(s.concat(c));case 4:return u=e.sent,e.abrupt("return",u.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=(0,a.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i().get(s.concat("/version"));case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}const h={composeImage:function(e){return l.apply(this,arguments)},getComposes:function(e,t){return p.apply(this,arguments)},getComposeStatus:function(e){return f.apply(this,arguments)},getPackages:function(e,t,n){return d.apply(this,arguments)},getVersion:function(){return E.apply(this,arguments)}}},11916:(e,t,n)=>{"use strict";n.d(t,{S1:()=>g});var r=n(18546),o=n(68573),a=n.n(o),c=n(53894),i=n(83215),s=n(96156),u=n(26698);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={count:0,allIds:[],byId:{},error:null},d=function(e,t,n){return e.includes(t)?e:n?[t].concat(e):e.concat(t)};const E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.Z.COMPOSE_ADDED:return p({},e,{allIds:d(e.allIds,t.payload.compose.id,t.payload.insert),byId:p({},e.byId,(0,s.Z)({},t.payload.compose.id,t.payload.compose)),error:null});case u.Z.COMPOSE_FAILED:return p({},e,{error:t.payload.error});case u.Z.COMPOSE_PENDING:return p({},e,{error:null});case u.Z.COMPOSE_UPDATED:return p({},e,{byId:p({},e.byId,(0,s.Z)({},t.payload.compose.id,t.payload.compose))});case u.Z.COMPOSES_UPDATED_COUNT:return p({},e,{count:t.payload.count});case u.Z.COMPOSE_UPDATED_STATUS:return p({},e,{byId:p({},e.byId,(0,s.Z)({},t.payload.id,p({},e.byId[t.payload.id],{image_status:t.payload.status})))});default:return e}};function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S={release:{arch:"x86_64",distro:"rhel-8"},uploadDestinations:{aws:!1,azure:!1,google:!1},uploadAWS:{shareWithAccounts:[]},uploadAzure:{tenantId:null,subscriptionId:null,resourceGroup:null},uploadGoogle:{accountType:"googleAccount",shareWithAccounts:[]},selectedPackages:[],subscription:{activationKey:null,insights:!0,organization:null},subscribeNow:!1};const O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.Z.SET_RELEASE:return y({},e,{release:t.payload});case u.Z.SET_UPLOAD_DESTINATIONS:return y({},e,{uploadDestinations:t.payload});case u.Z.SET_UPLOAD_AWS:return y({},e,{uploadAWS:t.payload});case u.Z.SET_UPLOAD_AZURE:return y({},e,{uploadAzure:t.payload});case u.Z.SET_UPLOAD_GOOGLE:return y({},e,{uploadGoogle:t.payload});case u.Z.SET_SELECTED_PACKAGES:return y({},e,{selectedPackages:t.payload});case u.Z.SET_SUBSCRIPTION:return y({},e,{subscription:t.payload});case u.Z.SET_SUBSCRIBE_NOW:return y({},e,{subscribeNow:t.payload});default:return e}};var m;function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(m)throw new Error("store already initialized");for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return(m=new r.xI(e,[a(),c.Z].concat(n))).register({composes:E,pendingCompose:O,notifications:i.ee}),m}},26698:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={COMPOSE_ADDED:"COMPOSE_ADDED",COMPOSE_FAILED:"COMPOSE_FAILED",COMPOSE_UPDATED:"COMPOSE_UPDATED",COMPOSES_UPDATED_COUNT:"COMPOSES_UPDATED_COUNT",COMPOSE_UPDATED_STATUS:"COMPOSE_UPDATED_STATUS",SET_RELEASE:"SET_RELEASE",SET_UPLOAD_DESTINATIONS:"SET_UPLOAD_DESTINATIONS",SET_UPLOAD_AWS:"SET_UPLOAD_AWS",SET_UPLOAD_AZURE:"SET_UPLOAD_AZURE",SET_UPLOAD_GOOGLE:"SET_UPLOAD_GOOGLE",SET_SELECTED_PACKAGES:"SET_SELECTED_PACKAGES",SET_SUBSCRIPTION:"SET_SUBSCRIPTION",SET_SUBSCRIBE_NOW:"SET_SUBSCRIBE_NOW"}},67073:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var r=n(94015),o=n.n(r),a=n(23645),c=n.n(a),i=n(35747),s=c()(o());s.i(i.Z),s.push([e.id,".image-builder{}.image-builder :root{--ins-color--orange: #ec7a08}\n","",{version:3,sources:["webpack://./src/App.scss"],names:[],mappings:"AAAA,eAAc,CAAd,qBACyE,4BAAoB",sourcesContent:[".image-builder{\n@import url(~@redhat-cloud-services/frontend-components/index.css);:root{--ins-color--orange: #ec7a08}\n\n}"],sourceRoot:""}]);const u=s},14154:(e,t,n)=>{"use strict";var r=n(93379),o=n.n(r),a=n(67073),c=o()(a.default,{insert:"head",singleton:!1});if(!a.default.locals||e.hot.invalidate){var i=a.default.locals;e.hot.accept(67073,(t=>{a=n(67073),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if(e[r]!==t[r])return!1;for(r in t)if(!e[r])return!1;return!0}(i,a.default.locals)?(i=a.default.locals,c(a.default)):e.hot.invalidate()}))}e.hot.dispose((function(){c()})),a.default.locals}}]);
//# sourceMappingURL=../sourcemaps/923.f4f282544807acd01ade.js.map