"use strict";(self.webpackChunkimage_builder=self.webpackChunkimage_builder||[]).push([[455],{38803:(e,t,n)=>{n.d(t,{Z:()=>C});var r=n(93264),a=n.n(r),o=n(51344),i=n(70743),s=n(45461),u=n(29439),c=n(90154),l=n(87462),p=n(93433),d=n(4942),f=n(84564),h=n(34046),m=n(83215),v=n(22222),y=n(45697),g=n.n(y),b=n(87248),w=n(58061),_=n(68224),O=n(89136),S=n(55808);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,d.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=(0,v.P1)([O.$L,O.Kh],(function(e,t){var n=new Set;return n.add(e.region),t.map((function(t){var r,a,o,i;t.region&&(null===(r=t.share_with_accounts)||void 0===r?void 0:r[0])===(null===(a=e.share_with_accounts)||void 0===a?void 0:a[0])&&(null===(o=t.share_with_sources)||void 0===o?void 0:o[0])===(null===(i=e.share_with_sources)||void 0===i?void 0:i[0])&&"failure"!==t.status&&n.add(t.region)})),n})),A=function(e){var t=e.composeId,n=e.handleClose,o=e.handleToggle,d=e.isOpen,v=e.setIsOpen,y=(0,i.I0)(),g=(0,s.useNavigate)(),P=(0,r.useState)(!1),A=(0,u.Z)(P,2),Z=A[0],k=A[1],j=(0,r.useState)([]),q=(0,u.Z)(j,2),x=q[0],C=q[1],D="Clone this image",U=(0,r.useState)("default"),R=(0,u.Z)(U,2),T=R[0],L=R[1],M=(0,r.useState)("Select at least one region to share to."),H=(0,u.Z)(M,1)[0],N=(0,i.v9)((function(e){return(0,O.$L)(e,t)})),G=(0,i.v9)((function(e){return E(e,t)})),W=(0,r.useState)(function(e){return w.Wp.map((function(t){return I(I({},t),{},{disabled:e.has(t.value)})}))}(G)),z=(0,u.Z)(W,1)[0];return a().createElement(c.Form,null,a().createElement("span",{id:D,hidden:!0},"Select a region"),a().createElement(c.FormGroup,{label:"Select region",isRequired:!0,validated:T,helperTextInvalid:H,helperTextInvalidIcon:a().createElement(f.ZP,null),labelIcon:a().createElement(c.Popover,{headerContent:a().createElement("div",null,"Sharing images to other regions"),bodyContent:a().createElement("div",null,"Your image will be built, uploaded to AWS, and shared to the regions you select. The shared image will expire within 14 days. To permanently access the image, copy the image, which will be shared to your account by Red Hat, to your own AWS account.")},a().createElement("button",{type:"button","aria-label":"More info for name field",onClick:function(e){return e.preventDefault()},"aria-describedby":"simple-form-name-01",className:"pf-c-form__group-label-help"},a().createElement(h.ZP,{noVerticalAlign:!0})))},a().createElement(c.Select,{variant:c.SelectVariant.typeaheadMulti,typeAheadAriaLabel:"Select a region",onToggle:o,onSelect:function(e,t){var n;x.includes(t)?(n=x.filter((function(e){return e!==t})),C(n)):(n=[].concat((0,p.Z)(x),[t]),C(n)),0===n.length?L("error"):L("default")},onClear:function(){C([]),v(!1),L("error")},selections:x,isOpen:d,"aria-labelledby":D,placeholderText:"Select a region",menuAppendTo:"parent",validated:T,maxHeight:"25rem"},z.map((function(e,t){return a().createElement(c.SelectOption,(0,l.Z)({isDisabled:e.disabled,key:t,value:e.value},e.description&&{description:e.description}))})))),a().createElement(c.ActionGroup,null,a().createElement(c.Button,{onClick:function(){k(!0);var e=x.map((function(e){var t,n={region:e};return null!==(t=N.share_with_sources)&&void 0!==t&&t[0]?n.share_with_sources=[N.share_with_sources[0]]:n.share_with_accounts=[N.share_with_accounts[0]],n}));Promise.all(e.map((function(e){return b.Z.cloneImage(t,e).then((function(n){y((0,_.$0)({clone:I(I({},n),{},{request:e,image_status:{status:"pending"}}),parent:t}))}))}))).then((function(){g((0,S.y)("")),y((0,m.wN)({variant:"success",title:"Your image is being shared"})),k(!1)})).catch((function(e){g((0,S.y)("")),y((0,m.wN)({variant:"danger",title:"Your image could not be created",description:"Status code ".concat(e.response.status,": ").concat(e.response.statusText)}))}))},variant:"primary",key:"share",isDisabled:0===x.length||Z,isLoading:Z},"Share"),a().createElement(c.Button,{variant:"link",onClick:n,key:"cancel"},"Cancel")))};A.propTypes={composeId:g().string,handleClose:g().func,handleToggle:g().func,isOpen:g().bool,setIsOpen:g().func};const Z=A,k=function(){var e,t=(0,s.useNavigate)(),n=(0,s.useLocation)(),o=function(){return t((0,S.y)(""))},i=(0,r.useState)(!1),l=(0,u.Z)(i,2),p=l[0],d=l[1],f=null==n||null===(e=n.state)||void 0===e?void 0:e.composeId,h=function(e){return d(e)};return a().createElement(c.Modal,{isOpen:!0,variant:"small","aria-label":"Share to new region",onClose:o,title:"Share to new region",description:"Configure new regions for this image that will run on your AWS. All the regions will launch with the same configuration.",onEscapePress:function(){p?h(p):o()}},a().createElement(Z,{composeId:f,handleClose:o,handleToggle:h,isOpen:p,setIsOpen:d}))};var j=(0,r.lazy)((function(){return Promise.all([n.e(227),n.e(102)]).then(n.bind(n,7102))})),q=(0,r.lazy)((function(){return Promise.all([n.e(691),n.e(235),n.e(437),n.e(649),n.e(720),n.e(227),n.e(737)]).then(n.bind(n,47282))})),x=function(){return a().createElement(s.Routes,null,a().createElement(s.Route,{path:"*",element:a().createElement(j,null)},a().createElement(s.Route,{path:"imagewizard/*",element:a().createElement(q,null)}),a().createElement(s.Route,{path:"share/*",element:a().createElement(k,null)})))};const C=function(e){var t=(0,s.useNavigate)(),n=(0,i.oR)();return(0,r.useEffect)((function(){document.title="Image Builder | Red Hat Insights",insights.chrome.init(),insights.chrome.identifyApp("image-builder"),insights.chrome.hideGlobalFilter();var e=insights.chrome.on("APP_NAVIGATION",(function(){return t((0,S.y)(""))}));return function(){e()}}),[]),a().createElement(a().Fragment,null,a().createElement(o.ZP,{store:n}),a().createElement(x,{childProps:e}))}},55808:(e,t,n)=>{function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"/insights/image-builder".concat(e.length>0?"/".concat(e):"")}n.d(t,{y:()=>r})},87248:(e,t,n)=>{n.d(t,{Z:()=>I});var r=n(4942),a=n(45987),o=n(15861),i=n(64687),s=n.n(i),u=n(9669),c=n.n(u),l=n(58061),p=["package_name"];function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h={headers:{"Content-Type":"application/json"}};function m(){return(m=(0,o.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,c().post(l.DO.concat("/compose"),t,h);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=(0,o.Z)(s().mark((function e(t,n){var r,a,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URLSearchParams({limit:t,offset:n}),a="/composes?"+r.toString(),e.next=4,c().get(l.DO.concat(a));case 4:return o=e.sent,e.abrupt("return",o.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=(0,o.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/composes/"+t,e.next=3,c().get(l.DO.concat(n));case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=(0,o.Z)(s().mark((function e(t,n,r,a){var o,i,u;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=new URLSearchParams({distribution:t,architecture:n,search:r}),a&&o.append("limit",a),i="/packages?"+o.toString(),e.next=5,c().get(l.DO.concat(i));case 5:return u=e.sent,e.abrupt("return",u.data);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return(b=(0,o.Z)(s().mark((function e(t){var n,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams,t&&n.append("limit",t),r="/repositories/"+n.toString(),e.next=5,c().get(l.Hp.concat(r));case 5:return a=e.sent,e.abrupt("return",a.data);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=(0,o.Z)(s().mark((function e(t,n){var r,o,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={urls:t,search:n},e.next=4,c().post(l.Hp.concat("/rpms/names"),r,h);case 4:return o=e.sent,i=o.data.map((function(e){return f({name:e.package_name},(0,a.Z)(e,p))})),e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=(0,o.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,c().get(l.DO.concat("/version"));case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=(0,o.Z)(s().mark((function e(t,n,r){var a,o,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new URLSearchParams({limit:n,offset:r}),o="/composes/".concat(t,"/clones?").concat(a),e.next=4,c().get(l.DO.concat(o));case 4:return i=e.sent,e.abrupt("return",i.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=(0,o.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/clones/".concat(t),e.next=3,c().get(l.DO.concat(n));case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return(P=(0,o.Z)(s().mark((function e(t,n){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/composes/".concat(t,"/clone"),e.next=3,c().post(l.DO.concat(r),n,h);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}const I={cloneImage:function(e,t){return P.apply(this,arguments)},composeImage:function(e){return m.apply(this,arguments)},getClones:function(e,t,n){return O.apply(this,arguments)},getCloneStatus:function(e){return S.apply(this,arguments)},getComposes:function(e,t){return v.apply(this,arguments)},getComposeStatus:function(e){return y.apply(this,arguments)},getPackages:function(e,t,n,r){return g.apply(this,arguments)},getPackagesContentSources:function(e,t){return w.apply(this,arguments)},getRepositories:function(e){return b.apply(this,arguments)},getVersion:function(){return _.apply(this,arguments)}}},58061:(e,t,n)=>{n.d(t,{DO:()=>r,F2:()=>s,Hp:()=>o,LB:()=>m,NF:()=>f,PV:()=>u,UD:()=>a,Wp:()=>h,at:()=>p,cm:()=>i,fI:()=>c,g7:()=>l,rh:()=>d});var r="/api/image-builder/v1",a="/api/rhsm/v2",o="/api/content-sources/v1",i="/api/provisioning/v1/sources",s="rhel-87",u="rhel-91",c=Math.pow(1024,1),l=Math.pow(1024,2),p=Math.pow(1024,3),d=new Map([[u,"Red Hat Enterprise Linux (RHEL) 9"],[s,"Red Hat Enterprise Linux (RHEL) 8"],["centos-9","CentOS Stream 9"],["centos-8","CentOS Stream 8"]]),f="us-east-1",h=[{description:"US East (Ohio)",value:"us-east-2"},{description:"US East (N. Virginia)",value:"us-east-1"},{description:"US West (N. California)",value:"us-west-1"},{description:"US West (Oregon)",value:"us-west-2"},{description:"Africa (Cape Town)",value:"af-south-1"},{description:"Asia Pacific (Hong Kong)",value:"ap-east-1"},{description:"Asia Pacific (Jakarta)",value:"ap-southeast-3"},{description:"Asia Pacific (Mumbai)",value:"ap-south-1"},{description:"Asia Pacific (Osaka)",value:"ap-northeast-3"},{description:"Asia Pacific (Seoul)",value:"ap-northeast-2"},{description:"Asia Pacific (Singapore)",value:"ap-southeast-1"},{description:"Asia Pacific (Sydney)",value:"ap-southeast-2"},{description:"Asia Pacific (Tokyo)",value:"ap-northeast-1"},{description:"Canada (Central)",value:"ca-central-1"},{description:"Europe (Frankfurt)",value:"eu-central-1"},{description:"Europe (Ireland)",value:"eu-west-1"},{description:"Europe (London)",value:"eu-west-2"},{description:"Europe (Milan)",value:"eu-south-1"},{description:"Europe (Paris)",value:"eu-west-3"},{description:"Europe (Stockholm)",value:"eu-north-1"},{description:"Middle East (Bahrain)",value:"me-south-1"},{description:"Middle East (UAE)",value:"me-central-1"},{description:"South America (São Paolo)",value:"sa-east-1"}],m=6},52183:(e,t,n)=>{n.d(t,{F7:()=>v,TD:()=>f,Xq:()=>l,YC:()=>p,dp:()=>h,gk:()=>c,jU:()=>m,lI:()=>d});var r=n(15861),a=n(64687),o=n.n(a),i=n(30848),s=n(45673),u=n(58061),c=(0,i.LC)({reducerPath:"api",baseQuery:(0,s.ni)({baseUrl:""}),endpoints:function(e){return{getAWSSources:e.query({queryFn:function(e,t,n,a){return(0,r.Z)(o().mark((function e(){var t,n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a("".concat(u.cm,"?provider=aws"));case 2:if(!(t=e.sent).error){e.next=5;break}return e.abrupt("return",{error:t.error});case 5:return e.next=7,Promise.allSettled(t.data.map((function(e){return a("".concat(u.cm,"/").concat(e.id,"/account_identity"))})));case 7:for(n=e.sent,r=0;r<t.data.length;r++)n[r].value.error?t.data[r].account_id="":t.data[r].account_id=n[r].value.data.aws.account_id;return e.abrupt("return",t);case 10:case"end":return e.stop()}}),e)})))()}}),getAzureSources:e.query({query:function(){return"".concat(u.cm,"?provider=azure")}}),getAzureSourceDetail:e.query({query:function(e){return"".concat(u.cm,"/").concat(e,"/upload_info")},transformResponse:function(e){return e.azure}}),getArchitecturesByDistribution:e.query({query:function(e){return"".concat(u.DO,"/architectures/").concat(e)}}),getActivationKeys:e.query({query:function(){return"".concat(u.UD,"/activation_keys")}}),getActivationKeyInformation:e.query({query:function(e){return"".concat(u.UD,"/activation_keys/").concat(e)}})}}}),l=c.useGetAWSSourcesQuery,p=c.useGetArchitecturesByDistributionQuery,d=c.useGetAzureSourcesQuery,f=c.useGetAzureSourceDetailQuery,h=c.useGetActivationKeysQuery,m=c.useGetActivationKeyInformationQuery,v=c.usePrefetch},68224:(e,t,n)=>{n.d(t,{$0:()=>u,IZ:()=>c,ZP:()=>l,d0:()=>i});var r=n(4942);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var o=(0,n(24268).oM)({name:"clones",initialState:{allIds:[],byId:{},error:null},reducers:{cloneAdded:function(e,t){e.allIds.includes(t.payload.clone.id)||e.allIds.push(t.payload.clone.id),e.byId[t.payload.clone.id]=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t.payload.clone),e.byId[t.payload.clone.id].parent=t.payload.parent,e.error=null},cloneUpdatedStatus:function(e,t){var n={status:t.payload.status.status,upload_status:t.payload.status};e.byId[t.payload.id].image_status=n}}}),i=function(e,t){var n,r,a,o,i,s=e.clones.byId[t];return void 0!==s?{created_at:s.created_at,id:s.id,region:s.request.region,ami:null===(n=s.image_status)||void 0===n||null===(r=n.upload_status)||void 0===r||null===(a=r.options)||void 0===a?void 0:a.ami,share_with_accounts:s.request.share_with_accounts,share_with_sources:s.request.share_with_sources,status:null===(o=s.image_status)||void 0===o?void 0:o.status,uploadStatus:null===(i=s.image_status)||void 0===i?void 0:i.upload_status,parent:s.parent,imageType:"aws",isClone:!0}:null},s=o.actions,u=s.cloneAdded,c=s.cloneUpdatedStatus;const l=o.reducer},89136:(e,t,n)=>{n.d(t,{$L:()=>u,$P:()=>l,H0:()=>m,Hj:()=>d,Kh:()=>c,Po:()=>v,ZP:()=>y,fl:()=>p,tE:()=>h});var r=n(93433),a=n(24268),o=n(22222),i=n(68224),s=(0,a.oM)({name:"composes",initialState:{count:0,allIds:[],byId:{},error:null},reducers:{composeAdded:function(e,t){e.allIds.includes(t.payload.compose.id)||(t.payload.insert?e.allIds.unshift(t.payload.compose.id):e.allIds.push(t.payload.compose.id)),e.byId[t.payload.compose.id]=t.payload.compose,e.byId[t.payload.compose.id].clones||(e.byId[t.payload.compose.id].clones=[]),e.error=null},composesUpdatedCount:function(e,t){e.count=t.payload.count},composeUpdatedStatus:function(e,t){e.byId[t.payload.id].image_status=t.payload.status}},extraReducers:function(e){e.addCase("clones/cloneAdded",(function(e,t){e.byId[t.payload.parent].clones.push(t.payload.clone.id)}))}}),u=function(e,t){var n,a,o,i,s,u,c,l,p,d,f=e.composes.byId[t];return void 0!==f?{created_at:f.created_at,id:f.id,imageName:f.image_name||f.id,region:null===(n=f.image_status)||void 0===n||null===(a=n.upload_status)||void 0===a||null===(o=a.options)||void 0===o?void 0:o.region,ami:null===(i=f.image_status)||void 0===i||null===(s=i.upload_status)||void 0===s||null===(u=s.options)||void 0===u?void 0:u.ami,share_with_accounts:null===(c=f.request.image_requests[0].upload_request)||void 0===c?void 0:c.options.share_with_accounts,share_with_sources:null===(l=f.request.image_requests[0].upload_request)||void 0===l?void 0:l.options.share_with_sources,status:null===(p=f.image_status)||void 0===p?void 0:p.status,clones:(0,r.Z)(f.clones),imageType:f.request.image_requests[0].image_type,uploadType:f.request.image_requests[0].upload_request.type,uploadOptions:f.request.image_requests[0].upload_request.options,uploadStatus:null===(d=f.image_status)||void 0===d?void 0:d.upload_status,request:f.request,architecture:f.request.image_requests[0].architecture,isClone:!1}:null},c=function(e,t){var n=e.composes.byId[t];return 0!==n.clones.length?n.clones.map((function(t){var n,r,a,o,i=e.clones.byId[t];return{created_at:i.created_at,id:i.id,region:i.request.region,ami:null===(n=i.image_status)||void 0===n||null===(r=n.upload_status)||void 0===r||null===(a=r.options)||void 0===a?void 0:a.ami,share_with_accounts:i.request.share_with_accounts,share_with_sources:i.request.share_with_sources,status:null===(o=i.image_status)||void 0===o?void 0:o.status}})):[]},l=function(e,t){return e.composes.allIds.includes(t)?u(e,t):(0,i.d0)(e,t)},p=(0,o.P1)([u,c],(function(e,t){return[e].concat((0,r.Z)(t))})),d=(0,o.P1)([p],(function(e){return e.map((function(e){return e.status}))})),f=s.actions,h=f.composeAdded,m=f.composesUpdatedCount,v=f.composeUpdatedStatus;const y=s.reducer},30319:(e,t,n)=>{n.d(t,{h:()=>h});var r,a=n(4942),o=n(83215),i=n(24268),s=n(38756),u=n.n(s),c=n(52183),l=n(68224),p=n(89136),d=n(36595),f=(r={},(0,a.Z)(r,c.gk.reducerPath,c.gk.reducer),(0,a.Z)(r,"clones",l.ZP),(0,a.Z)(r,"composes",p.ZP),(0,a.Z)(r,"notifications",o.ee),(0,a.Z)(r,"repositories",d.ZP),r),h=(0,i.xC)({reducer:f,middleware:function(e){return e().concat(u()).concat(c.gk.middleware)}})},36595:(e,t,n)=>{n.d(t,{Gb:()=>p,WM:()=>c,ZP:()=>m});var r=n(15861),a=n(64687),o=n.n(a),i=n(24268),s=n(87248);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=function(){return function(){var e=(0,r.Z)(o().mark((function e(t){var n,r,a,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.getRepositories();case 2:if(n=e.sent,r=n.data,a=n.meta,!(r.length<a.count)){e.next=10;break}return e.next=8,s.Z.getRepositories(a.count);case 8:i=e.sent,r=i.data;case 10:t(f({repositories:r})),t(h({count:r.length}));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},l=(0,i.oM)({name:"repositories",initialState:{count:0,allIds:[],byId:{},error:null},reducers:{repositoriesAdded:function(e,t){t.payload.repositories.map((function(t){e.allIds.includes(t.url)||e.allIds.push(t.url),e.byId[t.url]=t}))},repositoriesUpdatedCount:function(e,t){e.count=t.payload.count}}}),p=function(e){var t,n={},r=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw o}}}}(e.repositories.allIds);try{for(r.s();!(t=r.n()).done;){var a=t.value;"Valid"===e.repositories.byId[a].status&&(n[a]=e.repositories.byId[a])}}catch(e){r.e(e)}finally{r.f()}return n},d=l.actions,f=d.repositoriesAdded,h=d.repositoriesUpdatedCount;const m=l.reducer}}]);
//# sourceMappingURL=../sourcemaps/455.7da57d09c5ff5fefab16cd45a7666360.js.map