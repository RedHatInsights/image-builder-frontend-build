(self.webpackChunkimage_builder=self.webpackChunkimage_builder||[]).push([[818],{66986:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var r=n(6610),o=n(5991),a=n(10379),c=n(46070),i=n(77608),u=n(45697),s=n.n(u),l=n(31154),p=n.n(l),f=n(75662),d=n(82041),E=n(22122),y=n(81253),S=n(87757),h=n.n(S),O=n(92137),m=n(90238);function P(e){return function(t){(0,a.Z)(f,t);var n,u,s,l=(u=f,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,i.Z)(u);if(s){var n=(0,i.Z)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return(0,c.Z)(this,e)});function f(e){var t;return(0,r.Z)(this,f),(t=l.call(this,e)).state={component:null},t}return(0,o.Z)(f,[{key:"componentDidMount",value:(n=(0,O.Z)(h().mark((function t(){var n,r;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,r=n.default,this.setState({component:r});case 5:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.component;return e?p().createElement(e,this.props):p().createElement(m.Skeleton,null)}}]),f}(l.Component)}var g=P((function(){return Promise.all([n.e(410),n.e(577),n.e(247),n.e(331)]).then(n.bind(n,38331))})),_=P((function(){return Promise.all([n.e(410),n.e(736),n.e(265),n.e(247),n.e(542)]).then(n.bind(n,58542))})),v=function(e){var t=e.component,n=e.title,r=(0,y.Z)(e,["component","title"]);return n&&(document.title=n),p().createElement(f.Route,(0,E.Z)({},r,{component:t}))};v.propTypes={component:s().func,title:s().string};var b=function(){return p().createElement(f.Switch,null,p().createElement(v,{exact:!0,path:"/landing",component:g}),p().createElement(v,{exact:!0,path:"/imagewizard",component:_}),p().createElement(f.Redirect,{to:"/landing"}))},D=n(4095),A=n(65800),T=n(53688),Z=n(84669);const I=function(){return p().createElement(Z.EmptyState,{variant:Z.EmptyStateVariant.large,"data-testid":"empty-state-denied"},p().createElement(Z.EmptyStateIcon,{icon:T.uM}),p().createElement(Z.Title,{headingLevel:"h4",size:"lg"},"Image Builder is not quite ready"),p().createElement(Z.EmptyStateBody,null,"Image Builder is in early development and not ready for use yet. If you're interested in trying it out once it reaches beta, fill out your contact information in the sign up form, and we'll be in touch once it's ready."),p().createElement(Z.Button,{id:"beta-signup-button",variant:"primary"},"Sign up"))};var U=function(e){(0,a.Z)(s,e);var t,n,u=(t=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,i.Z)(t);if(n){var o=(0,i.Z)(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return(0,c.Z)(this,e)});function s(){var e;return(0,r.Z)(this,s),(e=u.call(this)).state={permission:!1},e}return(0,o.Z)(s,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("image-builder").catch((function(){})),this.appNav=insights.chrome.on("APP_NAVIGATION",(function(t){return e.props.history.push("/".concat(t.navId))})),insights.chrome.auth.getUser().then((function(t){e.setState({identity:t.identity}),A.Z.getVersion().then((function(){e.setState({permission:!0})})).catch((function(){e.setState({permission:!1})}))}))}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return p().createElement(p().Fragment,null,p().createElement(D.NotificationsPortal,null),this.state.permission?p().createElement(b,{childProps:this.props}):p().createElement(I,null))}}]),s}(l.Component);U.propTypes={history:s().object};const w=(0,f.withRouter)((0,d.connect)()(U))},65800:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r=n(87757),o=n.n(r),a=n(92137),c=n(9669),i=n.n(c),u="/api/image-builder/v1",s={headers:{"Content-Type":"application/json"}};function l(){return(l=(0,a.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i().post(u.concat("/compose"),t,s);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=(0,a.Z)(o().mark((function e(t,n){var r,a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URLSearchParams({limit:t,offset:n}),a="/composes?"+r.toString(),e.next=4,i().get(u.concat(a));case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=(0,a.Z)(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/composes/"+t,e.next=3,i().get(u.concat(n));case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return(d=(0,a.Z)(o().mark((function e(t,n,r){var a,c,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new URLSearchParams({distribution:t,architecture:n,search:r}),c="/packages?"+a.toString(),e.next=4,i().get(u.concat(c));case 4:return s=e.sent,e.abrupt("return",s.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=(0,a.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i().get(u.concat("/version"));case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}const y={composeImage:function(e){return l.apply(this,arguments)},getComposes:function(e,t){return p.apply(this,arguments)},getComposeStatus:function(e){return f.apply(this,arguments)},getPackages:function(e,t,n){return d.apply(this,arguments)},getVersion:function(){return E.apply(this,arguments)}}},11916:(e,t,n)=>{"use strict";n.d(t,{S1:()=>g});var r=n(85061),o=n(18546),a=n(68573),c=n.n(a),i=n(53894),u=n(83215),s=n(96156),l=n(26698);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={count:0,allIds:[],byId:{},error:null},E=function(e,t,n){return e.includes(t)?e:n?[t].concat(e):e.concat(t)};const y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.Z.COMPOSE_ADDED:return f({},e,{allIds:E(e.allIds,t.payload.compose.id,t.payload.insert),byId:f({},e.byId,(0,s.Z)({},t.payload.compose.id,t.payload.compose)),error:null});case l.Z.COMPOSE_FAILED:return f({},e,{error:t.payload.error});case l.Z.COMPOSE_PENDING:return f({},e,{error:null});case l.Z.COMPOSE_UPDATED:return f({},e,{byId:f({},e.byId,(0,s.Z)({},t.payload.compose.id,t.payload.compose))});case l.Z.COMPOSES_UPDATED_COUNT:return f({},e,{count:t.payload.count});case l.Z.COMPOSE_UPDATED_STATUS:return f({},e,{byId:f({},e.byId,(0,s.Z)({},t.payload.id,f({},e.byId[t.payload.id],{image_status:t.payload.status})))});default:return e}};function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O={release:{arch:"x86_64",distro:"rhel-84"},uploadDestinations:{aws:!1,azure:!1,google:!1},uploadAWS:{shareWithAccounts:[]},uploadAzure:{tenantId:null,subscriptionId:null,resourceGroup:null},uploadGoogle:{accountType:"googleAccount",shareWithAccounts:[]},selectedPackages:[],subscription:{activationKey:null,insights:!0,organization:null},subscribeNow:!1};const m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.Z.SET_RELEASE:return h({},e,{release:t.payload});case l.Z.SET_UPLOAD_DESTINATIONS:return h({},e,{uploadDestinations:t.payload});case l.Z.SET_UPLOAD_AWS:return h({},e,{uploadAWS:t.payload});case l.Z.SET_UPLOAD_AZURE:return h({},e,{uploadAzure:t.payload});case l.Z.SET_UPLOAD_GOOGLE:return h({},e,{uploadGoogle:t.payload});case l.Z.SET_SELECTED_PACKAGES:return h({},e,{selectedPackages:t.payload});case l.Z.SET_SUBSCRIPTION:return h({},e,{subscription:t.payload});case l.Z.SET_SUBSCRIBE_NOW:return h({},e,{subscribeNow:t.payload});default:return e}};var P;function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!P){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];(P=new o.xI(e,[c(),i.Z].concat((0,r.Z)(n.filter((function(e){return void 0!==e})))))).register({composes:y,pendingCompose:m,notifications:u.ee})}return P}},26698:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={COMPOSE_ADDED:"COMPOSE_ADDED",COMPOSE_FAILED:"COMPOSE_FAILED",COMPOSE_UPDATED:"COMPOSE_UPDATED",COMPOSES_UPDATED_COUNT:"COMPOSES_UPDATED_COUNT",COMPOSE_UPDATED_STATUS:"COMPOSE_UPDATED_STATUS",SET_RELEASE:"SET_RELEASE",SET_UPLOAD_DESTINATIONS:"SET_UPLOAD_DESTINATIONS",SET_UPLOAD_AWS:"SET_UPLOAD_AWS",SET_UPLOAD_AZURE:"SET_UPLOAD_AZURE",SET_UPLOAD_GOOGLE:"SET_UPLOAD_GOOGLE",SET_SELECTED_PACKAGES:"SET_SELECTED_PACKAGES",SET_SUBSCRIPTION:"SET_SUBSCRIPTION",SET_SUBSCRIBE_NOW:"SET_SUBSCRIBE_NOW"}}}]);
//# sourceMappingURL=../sourcemaps/818.1619c1d4747fc4926bf2.js.map