"use strict";(self.webpackChunkimage_builder=self.webpackChunkimage_builder||[]).push([[158],{38803:(e,t,n)=>{n.d(t,{Z:()=>D});var r=n(93264),a=n.n(r),o=n(51344),i=n(86706),s=n(74175),u=n(29439),c=n(54785),l=n(87462),p=n(93433),d=n(4942),f=n(84564),m=n(34046),h=n(83215),v=n(22222),y=n(45697),g=n.n(y),b=n(87248),w=n(58061),O=n(68224),S=n(89136),P=n(55808);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,d.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=(0,v.P1)([S.$L,S.Kh],(function(e,t){var n=new Set;return n.add(e.region),t.map((function(t){t.region&&t.share_with_accounts[0]===e.share_with_accounts[0]&&"failure"!==t.status&&n.add(t.region)})),n})),Z=function(e){var t=e.composeId,n=e.handleClose,o=e.handleToggle,d=e.isOpen,v=e.setIsOpen,y=(0,i.I0)(),g=(0,s.useNavigate)(),_=(0,r.useState)(!1),Z=(0,u.Z)(_,2),k=Z[0],x=Z[1],A=(0,r.useState)([]),j=(0,u.Z)(A,2),C=j[0],D=j[1],q="Clone this image",U=(0,r.useState)("default"),R=(0,u.Z)(U,2),T=R[0],L=R[1],M=(0,r.useState)("Select at least one region to share to."),H=(0,u.Z)(M,1)[0],N=(0,i.v9)((function(e){return(0,S.$L)(e,t)})),W=(0,i.v9)((function(e){return E(e,t)})),F=(0,r.useState)(function(e){return w.Wp.map((function(t){return I(I({},t),{},{disabled:e.has(t.value)})}))}(W)),V=(0,u.Z)(F,1)[0];return a().createElement(c.Form,null,a().createElement("span",{id:q,hidden:!0},"Select a region"),a().createElement(c.FormGroup,{label:"Select region",isRequired:!0,validated:T,helperTextInvalid:H,helperTextInvalidIcon:a().createElement(f.ZP,null),labelIcon:a().createElement(c.Popover,{headerContent:a().createElement("div",null,"Sharing images to other regions"),bodyContent:a().createElement("div",null,"Your image will be built, uploaded to AWS, and shared to the regions you select. The shared image will expire within 14 days. To permanently access the image, copy the image, which will be shared to your account by Red Hat, to your own AWS account.")},a().createElement("button",{type:"button","aria-label":"More info for name field",onClick:function(e){return e.preventDefault()},"aria-describedby":"simple-form-name-01",className:"pf-c-form__group-label-help"},a().createElement(m.ZP,{noVerticalAlign:!0})))},a().createElement(c.Select,{variant:c.SelectVariant.typeaheadMulti,typeAheadAriaLabel:"Select a region",onToggle:o,onSelect:function(e,t){var n;C.includes(t)?(n=C.filter((function(e){return e!==t})),D(n)):(n=[].concat((0,p.Z)(C),[t]),D(n)),0===n.length?L("error"):L("default")},onClear:function(){D([]),v(!1),L("error")},selections:C,isOpen:d,"aria-labelledby":q,placeholderText:"Select a region",menuAppendTo:"parent",validated:T,maxHeight:"25rem"},V.map((function(e,t){return a().createElement(c.SelectOption,(0,l.Z)({isDisabled:e.disabled,key:t,value:e.value},e.description&&{description:e.description}))})))),a().createElement(c.ActionGroup,null,a().createElement(c.Button,{onClick:function(){x(!0);var e=C.map((function(e){return{region:e,share_with_accounts:[N.share_with_accounts[0]]}}));Promise.all(e.map((function(e){return b.Z.cloneImage(t,e).then((function(n){y((0,O.$0)({clone:I(I({},n),{},{request:e,image_status:{status:"pending"}}),parent:t}))}))}))).then((function(){g((0,P.y)("")),y((0,h.wN)({variant:"success",title:"Your image is being shared"})),x(!1)})).catch((function(e){g((0,P.y)("")),y((0,h.wN)({variant:"danger",title:"Your image could not be created",description:"Status code ".concat(e.response.status,": ").concat(e.response.statusText)}))}))},variant:"primary",key:"share",isDisabled:0===C.length||k,isLoading:k},"Share"),a().createElement(c.Button,{variant:"link",onClick:n,key:"cancel"},"Cancel")))};Z.propTypes={composeId:g().string,handleClose:g().func,handleToggle:g().func,isOpen:g().bool,setIsOpen:g().func};const k=Z,x=function(){var e,t=(0,s.useNavigate)(),n=(0,s.useLocation)(),o=function(){return t((0,P.y)(""))},i=(0,r.useState)(!1),l=(0,u.Z)(i,2),p=l[0],d=l[1],f=null==n||null===(e=n.state)||void 0===e?void 0:e.composeId,m=function(e){return d(e)};return a().createElement(c.Modal,{isOpen:!0,variant:"small","aria-label":"Share to new region",onClose:o,title:"Share to new region",description:"Configure new regions for this image that will run on your AWS. All the regions will launch with the same configuration.",onEscapePress:function(){p?m(p):o()}},a().createElement(k,{composeId:f,handleClose:o,handleToggle:m,isOpen:p,setIsOpen:d}))};var A=(0,r.lazy)((function(){return Promise.all([n.e(133),n.e(477)]).then(n.bind(n,98477))})),j=(0,r.lazy)((function(){return Promise.all([n.e(446),n.e(697),n.e(964),n.e(649),n.e(804),n.e(133),n.e(110)]).then(n.bind(n,68971))})),C=function(){return a().createElement(s.Routes,null,a().createElement(s.Route,{path:"*",element:a().createElement(A,null)},a().createElement(s.Route,{path:"imagewizard/*",element:a().createElement(j,null)}),a().createElement(s.Route,{path:"share/*",element:a().createElement(x,null)})))};const D=function(e){var t=(0,s.useNavigate)(),n=(0,i.oR)();return(0,r.useEffect)((function(){document.title="Image Builder | Red Hat Insights",insights.chrome.init(),insights.chrome.identifyApp("image-builder"),insights.chrome.hideGlobalFilter();var e=insights.chrome.on("APP_NAVIGATION",(function(){return t((0,P.y)(""))}));return function(){e()}}),[]),a().createElement(a().Fragment,null,a().createElement(o.ZP,{store:n}),a().createElement(C,{childProps:e}))}},55808:(e,t,n)=>{function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"/insights/image-builder".concat(e.length>0?"/".concat(e):"")}n.d(t,{y:()=>r})},87248:(e,t,n)=>{n.d(t,{Z:()=>Z});var r=n(4942),a=n(45987),o=n(15861),i=n(64687),s=n.n(i),u=n(9669),c=n.n(u),l=n(58061),p=["package_name"];function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m={headers:{"Content-Type":"application/json"}};function h(){return(h=(0,o.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,c().post(l.DO.concat("/compose"),t,m);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=(0,o.Z)(s().mark((function e(t,n){var r,a,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URLSearchParams({limit:t,offset:n}),a="/composes?"+r.toString(),e.next=4,c().get(l.DO.concat(a));case 4:return o=e.sent,e.abrupt("return",o.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=(0,o.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/composes/"+t,e.next=3,c().get(l.DO.concat(n));case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=(0,o.Z)(s().mark((function e(t,n,r,a){var o,i,u;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=new URLSearchParams({distribution:t,architecture:n,search:r}),a&&o.append("limit",a),i="/packages?"+o.toString(),e.next=5,c().get(l.DO.concat(i));case 5:return u=e.sent,e.abrupt("return",u.data);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return(b=(0,o.Z)(s().mark((function e(t){var n,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams,t&&n.append("limit",t),r="/repositories/"+n.toString(),e.next=5,c().get(l.Hp.concat(r));case 5:return a=e.sent,e.abrupt("return",a.data);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=(0,o.Z)(s().mark((function e(t,n){var r,o,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={urls:t,search:n},e.next=4,c().post(l.Hp.concat("/rpms/names"),r,m);case 4:return o=e.sent,i=o.data.map((function(e){return f({name:e.package_name},(0,a.Z)(e,p))})),e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=(0,o.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,c().get(l.DO.concat("/version"));case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=(0,o.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,c().get(l.UD.concat("/activation_keys"));case 3:return t=e.sent,e.abrupt("return",t.data.body);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return(P=(0,o.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/activation_keys/".concat(t),e.next=3,c().get(l.UD.concat(n));case 3:return r=e.sent,e.abrupt("return",r.data.body);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=(0,o.Z)(s().mark((function e(t,n,r){var a,o,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new URLSearchParams({limit:n,offset:r}),o="/composes/".concat(t,"/clones?").concat(a),e.next=4,c().get(l.DO.concat(o));case 4:return i=e.sent,e.abrupt("return",i.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=(0,o.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/clones/".concat(t),e.next=3,c().get(l.DO.concat(n));case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=(0,o.Z)(s().mark((function e(t,n){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/composes/".concat(t,"/clone"),e.next=3,c().post(l.DO.concat(r),n,m);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}const Z={cloneImage:function(e,t){return E.apply(this,arguments)},composeImage:function(e){return h.apply(this,arguments)},getClones:function(e,t,n){return _.apply(this,arguments)},getCloneStatus:function(e){return I.apply(this,arguments)},getComposes:function(e,t){return v.apply(this,arguments)},getComposeStatus:function(e){return y.apply(this,arguments)},getPackages:function(e,t,n,r){return g.apply(this,arguments)},getPackagesContentSources:function(e,t){return w.apply(this,arguments)},getRepositories:function(e){return b.apply(this,arguments)},getVersion:function(){return O.apply(this,arguments)},getActivationKeys:function(){return S.apply(this,arguments)},getActivationKey:function(e){return P.apply(this,arguments)}}},58061:(e,t,n)=>{n.d(t,{DO:()=>r,F2:()=>s,Hp:()=>o,LB:()=>h,NF:()=>f,PV:()=>u,UD:()=>a,Wp:()=>m,at:()=>p,cm:()=>i,fI:()=>c,g7:()=>l,rh:()=>d});var r="/api/image-builder/v1",a="/api/rhsm/v2",o="/api/content-sources/v1",i="/api/provisioning/v1/sources",s="rhel-87",u="rhel-91",c=Math.pow(1024,1),l=Math.pow(1024,2),p=Math.pow(1024,3),d=new Map([[u,"Red Hat Enterprise Linux (RHEL) 9"],[s,"Red Hat Enterprise Linux (RHEL) 8"],["centos-9","CentOS Stream 9"],["centos-8","CentOS Stream 8"]]),f="us-east-1",m=[{description:"US East (Ohio)",value:"us-east-2"},{description:"US East (N. Virginia)",value:"us-east-1"},{description:"US West (N. California)",value:"us-west-1"},{description:"US West (Oregon)",value:"us-west-2"},{description:"Africa (Cape Town)",value:"af-south-1"},{description:"Asia Pacific (Hong Kong)",value:"ap-east-1"},{description:"Asia Pacific (Jakarta)",value:"ap-southeast-3"},{description:"Asia Pacific (Mumbai)",value:"ap-south-1"},{description:"Asia Pacific (Osaka)",value:"ap-northeast-3"},{description:"Asia Pacific (Seoul)",value:"ap-northeast-2"},{description:"Asia Pacific (Singapore)",value:"ap-southeast-1"},{description:"Asia Pacific (Sydney)",value:"ap-southeast-2"},{description:"Asia Pacific (Tokyo)",value:"ap-northeast-1"},{description:"Canada (Central)",value:"ca-central-1"},{description:"Europe (Frankfurt)",value:"eu-central-1"},{description:"Europe (Ireland)",value:"eu-west-1"},{description:"Europe (London)",value:"eu-west-2"},{description:"Europe (Milan)",value:"eu-south-1"},{description:"Europe (Paris)",value:"eu-west-3"},{description:"Europe (Stockholm)",value:"eu-north-1"},{description:"Middle East (Bahrain)",value:"me-south-1"},{description:"Middle East (UAE)",value:"me-central-1"},{description:"South America (São Paolo)",value:"sa-east-1"}],h=6},68224:(e,t,n)=>{n.d(t,{$0:()=>u,IZ:()=>c,ZP:()=>l,d0:()=>i});var r=n(4942);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var o=(0,n(24268).oM)({name:"clones",initialState:{allIds:[],byId:{},error:null},reducers:{cloneAdded:function(e,t){e.allIds.includes(t.payload.clone.id)||e.allIds.push(t.payload.clone.id),e.byId[t.payload.clone.id]=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t.payload.clone),e.byId[t.payload.clone.id].parent=t.payload.parent,e.error=null},cloneUpdatedStatus:function(e,t){var n={status:t.payload.status.status,upload_status:t.payload.status};e.byId[t.payload.id].image_status=n}}}),i=function(e,t){var n,r,a,o,i,s=e.clones.byId[t];return void 0!==s?{created_at:s.created_at,id:s.id,region:s.request.region,ami:null===(n=s.image_status)||void 0===n||null===(r=n.upload_status)||void 0===r||null===(a=r.options)||void 0===a?void 0:a.ami,share_with_accounts:s.request.share_with_accounts,status:null===(o=s.image_status)||void 0===o?void 0:o.status,uploadStatus:null===(i=s.image_status)||void 0===i?void 0:i.upload_status,parent:s.parent,imageType:"aws",isClone:!0}:null},s=o.actions,u=s.cloneAdded,c=s.cloneUpdatedStatus;const l=o.reducer},89136:(e,t,n)=>{n.d(t,{$L:()=>u,$P:()=>l,H0:()=>h,Hj:()=>d,Kh:()=>c,Po:()=>v,ZP:()=>y,fl:()=>p,tE:()=>m});var r=n(93433),a=n(24268),o=n(22222),i=n(68224),s=(0,a.oM)({name:"composes",initialState:{count:0,allIds:[],byId:{},error:null},reducers:{composeAdded:function(e,t){e.allIds.includes(t.payload.compose.id)||(t.payload.insert?e.allIds.unshift(t.payload.compose.id):e.allIds.push(t.payload.compose.id)),e.byId[t.payload.compose.id]=t.payload.compose,e.byId[t.payload.compose.id].clones||(e.byId[t.payload.compose.id].clones=[]),e.error=null},composesUpdatedCount:function(e,t){e.count=t.payload.count},composeUpdatedStatus:function(e,t){e.byId[t.payload.id].image_status=t.payload.status}},extraReducers:function(e){e.addCase("clones/cloneAdded",(function(e,t){e.byId[t.payload.parent].clones.push(t.payload.clone.id)}))}}),u=function(e,t){var n,a,o,i,s,u,c,l,p,d=e.composes.byId[t];return void 0!==d?{created_at:d.created_at,id:d.id,imageName:d.image_name||d.id,region:null===(n=d.image_status)||void 0===n||null===(a=n.upload_status)||void 0===a||null===(o=a.options)||void 0===o?void 0:o.region,ami:null===(i=d.image_status)||void 0===i||null===(s=i.upload_status)||void 0===s||null===(u=s.options)||void 0===u?void 0:u.ami,share_with_accounts:null===(c=d.request.image_requests[0].upload_request)||void 0===c?void 0:c.options.share_with_accounts,status:null===(l=d.image_status)||void 0===l?void 0:l.status,clones:(0,r.Z)(d.clones),imageType:d.request.image_requests[0].image_type,uploadType:d.request.image_requests[0].upload_request.type,uploadOptions:d.request.image_requests[0].upload_request.options,uploadStatus:null===(p=d.image_status)||void 0===p?void 0:p.upload_status,request:d.request,architecture:d.request.image_requests[0].architecture,isClone:!1}:null},c=function(e,t){var n=e.composes.byId[t];return 0!==n.clones.length?n.clones.map((function(t){var n,r,a,o,i=e.clones.byId[t];return{created_at:i.created_at,id:i.id,region:i.request.region,ami:null===(n=i.image_status)||void 0===n||null===(r=n.upload_status)||void 0===r||null===(a=r.options)||void 0===a?void 0:a.ami,share_with_accounts:i.request.share_with_accounts,status:null===(o=i.image_status)||void 0===o?void 0:o.status}})):[]},l=function(e,t){return e.composes.allIds.includes(t)?u(e,t):(0,i.d0)(e,t)},p=(0,o.P1)([u,c],(function(e,t){return[e].concat((0,r.Z)(t))})),d=(0,o.P1)([p],(function(e){return e.map((function(e){return e.status}))})),f=s.actions,m=f.composeAdded,h=f.composesUpdatedCount,v=f.composeUpdatedStatus;const y=s.reducer},25274:(e,t,n)=>{n.d(t,{h:()=>y});var r,a=n(4942),o=n(83215),i=n(24268),s=n(38756),u=n.n(s),c=n(30848),l=n(45673),p=n(58061),d=(0,c.LC)({reducerPath:"api",baseQuery:(0,l.ni)({baseUrl:""}),endpoints:function(e){return{getSources:e.query({query:function(){return p.cm}})}}}),f=(d.useGetSourcesQuery,n(68224)),m=n(89136),h=n(36595),v=(r={},(0,a.Z)(r,d.reducerPath,d.reducer),(0,a.Z)(r,"clones",f.ZP),(0,a.Z)(r,"composes",m.ZP),(0,a.Z)(r,"notifications",o.ee),(0,a.Z)(r,"repositories",h.ZP),r),y=(0,i.xC)({reducer:v,middleware:function(e){return e().concat(u()).concat(d.middleware)}})},36595:(e,t,n)=>{n.d(t,{Gb:()=>p,WM:()=>c,ZP:()=>h});var r=n(15861),a=n(64687),o=n.n(a),i=n(24268),s=n(87248);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=function(){return function(){var e=(0,r.Z)(o().mark((function e(t){var n,r,a,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.getRepositories();case 2:if(n=e.sent,r=n.data,a=n.meta,!(r.length<a.count)){e.next=10;break}return e.next=8,s.Z.getRepositories(a.count);case 8:i=e.sent,r=i.data;case 10:t(f({repositories:r})),t(m({count:r.length}));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},l=(0,i.oM)({name:"repositories",initialState:{count:0,allIds:[],byId:{},error:null},reducers:{repositoriesAdded:function(e,t){t.payload.repositories.map((function(t){e.allIds.includes(t.url)||e.allIds.push(t.url),e.byId[t.url]=t}))},repositoriesUpdatedCount:function(e,t){e.count=t.payload.count}}}),p=function(e){var t,n={},r=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw o}}}}(e.repositories.allIds);try{for(r.s();!(t=r.n()).done;){var a=t.value;"Valid"===e.repositories.byId[a].status&&(n[a]=e.repositories.byId[a])}}catch(e){r.e(e)}finally{r.f()}return n},d=l.actions,f=d.repositoriesAdded,m=d.repositoriesUpdatedCount;const h=l.reducer}}]);
//# sourceMappingURL=../sourcemaps/158.2de2521b0820aa0d43bc6c41ab80f2d5.js.map