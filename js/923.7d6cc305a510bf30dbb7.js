(self.webpackChunkimage_builder=self.webpackChunkimage_builder||[]).push([[923],{66986:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var r=n(6610),o=n(5991),a=n(10379),c=n(46070),i=n(77608),u=n(45697),s=n.n(u),p=n(31154),l=n.n(p),f=n(16530),d=n(88931),E=n(22122),y=n(81253),S=n(87757),h=n.n(S),O=n(92137),m=n(88274);function P(e){return function(t){(0,a.Z)(f,t);var n,u,s,p=(u=f,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,i.Z)(u);if(s){var n=(0,i.Z)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return(0,c.Z)(this,e)});function f(e){var t;return(0,r.Z)(this,f),(t=p.call(this,e)).state={component:null},t}return(0,o.Z)(f,[{key:"componentDidMount",value:(n=(0,O.Z)(h().mark((function t(){var n,r;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,r=n.default,this.setState({component:r});case 5:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.component;return e?l().createElement(e,this.props):l().createElement(m.Skeleton,null)}}]),f}(p.Component)}var g=P((function(){return Promise.all([n.e(410),n.e(550),n.e(247),n.e(331)]).then(n.bind(n,38331))})),_=P((function(){return Promise.all([n.e(410),n.e(736),n.e(265),n.e(247),n.e(542)]).then(n.bind(n,58542))})),v=function(e){var t=e.component,n=e.title,r=(0,y.Z)(e,["component","title"]);return n&&(document.title=n),l().createElement(f.Route,(0,E.Z)({},r,{component:t}))};v.propTypes={component:s().func,title:s().string};var b=function(){return l().createElement(f.Switch,null,l().createElement(v,{exact:!0,path:"/landing",component:g}),l().createElement(v,{exact:!0,path:"/imagewizard",component:_}),l().createElement(f.Redirect,{to:"/landing"}))},D=n(8650),A=n(65800),T=n(53688),Z=n(58788);const I=function(){return l().createElement(Z.EmptyState,{variant:Z.EmptyStateVariant.large,"data-testid":"empty-state-denied"},l().createElement(Z.EmptyStateIcon,{icon:T.uM}),l().createElement(Z.Title,{headingLevel:"h4",size:"lg"},"Image Builder is not quite ready"),l().createElement(Z.EmptyStateBody,null,"Image Builder is in early development and not ready for use yet. If you're interested in trying it out once it reaches beta, fill out your contact information in the sign up form, and we'll be in touch once it's ready."),l().createElement(Z.Button,{id:"beta-signup-button",variant:"primary"},"Sign up"))};var U=function(e){(0,a.Z)(s,e);var t,n,u=(t=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,i.Z)(t);if(n){var o=(0,i.Z)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return(0,c.Z)(this,e)});function s(){var e;return(0,r.Z)(this,s),(e=u.call(this)).state={permission:!1},e}return(0,o.Z)(s,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("image-builder").catch((function(){})),this.appNav=insights.chrome.on("APP_NAVIGATION",(function(t){return e.props.history.push("/".concat(t.navId))})),insights.chrome.auth.getUser().then((function(t){e.setState({identity:t.identity}),A.Z.getVersion().then((function(){e.setState({permission:!0})})).catch((function(){e.setState({permission:!1})}))}))}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return l().createElement(l().Fragment,null,l().createElement(D.NotificationsPortal,null),this.state.permission?l().createElement(b,{childProps:this.props}):l().createElement(I,null))}}]),s}(p.Component);U.propTypes={history:s().object};const w=(0,f.withRouter)((0,d.connect)()(U))},65800:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r=n(87757),o=n.n(r),a=n(92137),c=n(9669),i=n.n(c),u="/api/image-builder/v1",s={headers:{"Content-Type":"application/json"}};function p(){return(p=(0,a.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i().post(u.concat("/compose"),t,s);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(){return(l=(0,a.Z)(o().mark((function e(t,n){var r,a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URLSearchParams({limit:t,offset:n}),a="/composes?"+r.toString(),e.next=4,i().get(u.concat(a));case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=(0,a.Z)(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/composes/"+t,e.next=3,i().get(u.concat(n));case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return(d=(0,a.Z)(o().mark((function e(t,n,r){var a,c,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new URLSearchParams({distribution:t,architecture:n,search:r}),c="/packages?"+a.toString(),e.next=4,i().get(u.concat(c));case 4:return s=e.sent,e.abrupt("return",s.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=(0,a.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i().get(u.concat("/version"));case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}const y={composeImage:function(e){return p.apply(this,arguments)},getComposes:function(e,t){return l.apply(this,arguments)},getComposeStatus:function(e){return f.apply(this,arguments)},getPackages:function(e,t,n){return d.apply(this,arguments)},getVersion:function(){return E.apply(this,arguments)}}},11916:(e,t,n)=>{"use strict";n.d(t,{S1:()=>P});var r=n(18546),o=n(68573),a=n.n(o),c=n(53894),i=n(83215),u=n(96156),s=n(26698);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={count:0,allIds:[],byId:{},error:null},d=function(e,t,n){return e.includes(t)?e:n?[t].concat(e):e.concat(t)};const E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.Z.COMPOSE_ADDED:return l({},e,{allIds:d(e.allIds,t.payload.compose.id,t.payload.insert),byId:l({},e.byId,(0,u.Z)({},t.payload.compose.id,t.payload.compose)),error:null});case s.Z.COMPOSE_FAILED:return l({},e,{error:t.payload.error});case s.Z.COMPOSE_PENDING:return l({},e,{error:null});case s.Z.COMPOSE_UPDATED:return l({},e,{byId:l({},e.byId,(0,u.Z)({},t.payload.compose.id,t.payload.compose))});case s.Z.COMPOSES_UPDATED_COUNT:return l({},e,{count:t.payload.count});case s.Z.COMPOSE_UPDATED_STATUS:return l({},e,{byId:l({},e.byId,(0,u.Z)({},t.payload.id,l({},e.byId[t.payload.id],{image_status:t.payload.status})))});default:return e}};function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h={release:{arch:"x86_64",distro:"rhel-84"},uploadDestinations:{aws:!1,azure:!1,google:!1},uploadAWS:{shareWithAccounts:[]},uploadAzure:{tenantId:null,subscriptionId:null,resourceGroup:null},uploadGoogle:{accountType:"googleAccount",shareWithAccounts:[]},selectedPackages:[],subscription:{activationKey:null,insights:!0,organization:null},subscribeNow:!1};const O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.Z.SET_RELEASE:return S({},e,{release:t.payload});case s.Z.SET_UPLOAD_DESTINATIONS:return S({},e,{uploadDestinations:t.payload});case s.Z.SET_UPLOAD_AWS:return S({},e,{uploadAWS:t.payload});case s.Z.SET_UPLOAD_AZURE:return S({},e,{uploadAzure:t.payload});case s.Z.SET_UPLOAD_GOOGLE:return S({},e,{uploadGoogle:t.payload});case s.Z.SET_SELECTED_PACKAGES:return S({},e,{selectedPackages:t.payload});case s.Z.SET_SUBSCRIPTION:return S({},e,{subscription:t.payload});case s.Z.SET_SUBSCRIBE_NOW:return S({},e,{subscribeNow:t.payload});default:return e}};var m;function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!m){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];(m=new r.xI(e,[a(),c.Z].concat(n))).register({composes:E,pendingCompose:O,notifications:i.ee})}return m}},26698:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={COMPOSE_ADDED:"COMPOSE_ADDED",COMPOSE_FAILED:"COMPOSE_FAILED",COMPOSE_UPDATED:"COMPOSE_UPDATED",COMPOSES_UPDATED_COUNT:"COMPOSES_UPDATED_COUNT",COMPOSE_UPDATED_STATUS:"COMPOSE_UPDATED_STATUS",SET_RELEASE:"SET_RELEASE",SET_UPLOAD_DESTINATIONS:"SET_UPLOAD_DESTINATIONS",SET_UPLOAD_AWS:"SET_UPLOAD_AWS",SET_UPLOAD_AZURE:"SET_UPLOAD_AZURE",SET_UPLOAD_GOOGLE:"SET_UPLOAD_GOOGLE",SET_SELECTED_PACKAGES:"SET_SELECTED_PACKAGES",SET_SUBSCRIPTION:"SET_SUBSCRIPTION",SET_SUBSCRIBE_NOW:"SET_SUBSCRIBE_NOW"}}}]);
//# sourceMappingURL=../sourcemaps/923.cdf4b2fbceb4d6bac5fa.js.map