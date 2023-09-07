"use strict";(self.webpackChunkimageBuilder=self.webpackChunkimageBuilder||[]).push([[636],{65508:(e,t,n)=>{n.d(t,{Z:()=>G});var r=n(32747),a=n.n(r),o=n(55140),i=n(51344),s=n(70743),u=n(67768),c=n(25654),l=n(22663),p=n(41763),d=n(15984),m=n(46987),f=n(55808);const h=function(){var e=(0,s.I0)(),t=(0,m.B)(e);return(0,u.useFlag)("edgeParity.image-list")?a().createElement(l.Z,{appName:"edge",module:"./ImagesDetail",ErrorComponent:a().createElement(p.Z,null),navigateProp:c.useNavigate,locationProp:c.useLocation,notificationProp:t,pathPrefix:(0,f.y)(""),urlName:m.P,paramsProp:c.useParams}):a().createElement(d.Z,null)};var g=n(29439),y=n(90154),v=n(87462),b=n(93433),w=n(4942),O=n(84564),_=n(34046),P=n(83215),S=n(22222),E=n(45697),q=n.n(E),I=n(87248),C=n(58061),j=n(68224),R=n(89136);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){(0,w.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=(0,S.P1)([R.$L,R.Kh],(function(e,t){var n=new Set;return n.add(e.region),t.map((function(t){var r,a,o,i;t.region&&(null===(r=t.share_with_accounts)||void 0===r?void 0:r[0])===(null===(a=e.share_with_accounts)||void 0===a?void 0:a[0])&&(null===(o=t.share_with_sources)||void 0===o?void 0:o[0])===(null===(i=e.share_with_sources)||void 0===i?void 0:i[0])&&"failure"!==t.status&&n.add(t.region)})),n})),x=function(e){var t=e.composeId,n=e.handleClose,o=e.handleToggle,i=e.isOpen,u=e.setIsOpen,l=(0,s.I0)(),p=(0,c.useNavigate)(),d=(0,r.useState)(!1),m=(0,g.Z)(d,2),h=m[0],w=m[1],S=(0,r.useState)([]),E=(0,g.Z)(S,2),q=E[0],Z=E[1],x="Clone this image",D=(0,r.useState)("default"),L=(0,g.Z)(D,2),T=L[0],U=L[1],Q=(0,r.useState)("Select at least one region to share to."),G=(0,g.Z)(Q,1)[0],M=(0,s.v9)((function(e){return(0,R.$L)(e,t)})),N=(0,s.v9)((function(e){return k(e,t)})),F=(0,r.useState)(function(e){return C.Wp.map((function(t){return A(A({},t),{},{disabled:e.has(t.value)||!0===(null==t?void 0:t.disableRegion)})}))}(N)),B=(0,g.Z)(F,1)[0];return a().createElement(y.Form,null,a().createElement("span",{id:x,hidden:!0},"Select a region"),a().createElement(y.FormGroup,{label:"Select region",isRequired:!0,validated:T,helperTextInvalid:G,helperTextInvalidIcon:a().createElement(O.ZP,null),labelIcon:a().createElement(y.Popover,{headerContent:a().createElement("div",null,"Sharing images to other regions"),bodyContent:a().createElement("div",null,"Your image will be built, uploaded to AWS, and shared to the regions you select. The shared image will expire within 14 days. To permanently access the image, copy the image, which will be shared to your account by Red Hat, to your own AWS account.")},a().createElement("button",{type:"button","aria-label":"More info for name field",onClick:function(e){return e.preventDefault()},"aria-describedby":"simple-form-name-01",className:"pf-c-form__group-label-help"},a().createElement(_.ZP,{noVerticalAlign:!0})))},a().createElement(y.Select,{variant:y.SelectVariant.typeaheadMulti,typeAheadAriaLabel:"Select a region",onToggle:o,onSelect:function(e,t){var n;q.includes(t)?(n=q.filter((function(e){return e!==t})),Z(n)):(n=[].concat((0,b.Z)(q),[t]),Z(n)),0===n.length?U("error"):U("default")},onClear:function(){Z([]),u(!1),U("error")},selections:q,isOpen:i,"aria-labelledby":x,placeholderText:"Select a region",menuAppendTo:"parent",validated:T,maxHeight:"25rem"},B.map((function(e,t){return a().createElement(y.SelectOption,(0,v.Z)({isDisabled:e.disabled,key:t,value:e.value},e.description&&{description:e.description}))})))),a().createElement(y.ActionGroup,null,a().createElement(y.Button,{onClick:function(){w(!0);var e=q.map((function(e){var t,n={region:e};return null!==(t=M.share_with_sources)&&void 0!==t&&t[0]?n.share_with_sources=[M.share_with_sources[0]]:n.share_with_accounts=[M.share_with_accounts[0]],n}));Promise.all(e.map((function(e){return I.Z.cloneImage(t,e).then((function(n){l((0,j.$0)({clone:A(A({},n),{},{request:e,image_status:{status:"pending"}}),parent:t}))}))}))).then((function(){p((0,f.y)("")),l((0,P.wN)({variant:"success",title:"Your image is being shared"})),w(!1)})).catch((function(e){p((0,f.y)("")),l((0,P.wN)({variant:"danger",title:"Your image could not be created",description:"Status code ".concat(e.response.status,": ").concat(e.response.statusText)}))}))},variant:"primary",key:"share",isDisabled:0===q.length||h,isLoading:h},"Share"),a().createElement(y.Button,{variant:"link",onClick:n,key:"cancel"},"Cancel")))};x.propTypes={composeId:q().string,handleClose:q().func,handleToggle:q().func,isOpen:q().bool,setIsOpen:q().func};const D=x,L=function(){var e=(0,c.useNavigate)(),t=function(){return e((0,f.y)(""))},n=(0,r.useState)(!1),o=(0,g.Z)(n,2),i=o[0],s=o[1],u=(0,c.useParams)().composeId,l=function(e){return s(e)},p=(0,r.useMemo)((function(){return document.querySelector(C.sn)}),[]);return a().createElement(y.Modal,{isOpen:!0,variant:"small","aria-label":"Share to new region",onClose:t,title:"Share to new region",description:"Configure new regions for this image that will run on your AWS. All the regions will launch with the same configuration.",onEscapePress:function(){i?l(i):t()},appendTo:p},a().createElement(D,{composeId:u,handleClose:t,handleToggle:l,isOpen:i,setIsOpen:s}))};var T=(0,r.lazy)((function(){return Promise.all([n.e(811),n.e(90),n.e(12)]).then(n.bind(n,25012))})),U=(0,r.lazy)((function(){return Promise.all([n.e(691),n.e(889),n.e(123),n.e(649),n.e(454),n.e(90),n.e(489)]).then(n.bind(n,74677))})),Q=function(){var e=(0,u.useFlag)("edgeParity.image-list");return a().createElement(c.Routes,null,a().createElement(c.Route,{path:"*",element:a().createElement(r.Suspense,null,a().createElement(T,null))},a().createElement(c.Route,{path:"imagewizard/:composeId?",element:a().createElement(r.Suspense,null,a().createElement(U,null))}),a().createElement(c.Route,{path:"share/:composeId",element:a().createElement(L,null)})),e&&a().createElement(c.Route,{path:"/".concat(m.P,"/:imageId"),element:a().createElement(h,null)},a().createElement(c.Route,{path:"*",element:a().createElement(h,null)}),a().createElement(c.Route,{path:"versions/:imageVersionId/*",element:a().createElement(h,null)})))};const G=function(e){var t=(0,s.oR)(),n=(0,o.Z)(),u=n.hideGlobalFilter,c=n.updateDocumentTitle;return(0,r.useEffect)((function(){c("Image Builder | Red Hat Insights"),u()}),[]),a().createElement(a().Fragment,null,a().createElement(i.ZP,{store:t}),a().createElement(Q,{childProps:e}))}},46987:(e,t,n)=>{n.d(t,{B:()=>u,P:()=>s});var r=n(4942),a=n(83215);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s="manage-edge-images",u=function(e){return{hasInfo:function(t){e(i({},(0,a.wN)(i({variant:"info"},t))))},hasSuccess:function(t){e(i({},(0,a.wN)(i({variant:"success"},t))))},err:function(t,n){e(i({},(0,a.wN)(i(i({variant:"danger"},t),{},{description:null!=n&&n.Title?"".concat(t.description,": ").concat(n.Title):t.description}))))}}}},55808:(e,t,n)=>{function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"/insights/image-builder".concat(e.length>0?"/".concat(e):"")}n.d(t,{y:()=>r})},87248:(e,t,n)=>{n.d(t,{Z:()=>S});var r=n(4942),a=n(45987),o=n(15861),i=n(64687),s=n.n(i),u=n(9669),c=n.n(u),l=n(58061),p=["package_name"];function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={headers:{"Content-Type":"application/json"}};function h(){return(h=(0,o.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,c().post(l.DO.concat("/compose"),t,f);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=(0,o.Z)(s().mark((function e(t,n){var r,a,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URLSearchParams({limit:t,offset:n}),a="/composes?"+r.toString(),e.next=4,c().get(l.DO.concat(a));case 4:return o=e.sent,e.abrupt("return",o.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=(0,o.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/composes/"+t,e.next=3,c().get(l.DO.concat(n));case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=(0,o.Z)(s().mark((function e(t,n,r,a){var o,i,u;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=new URLSearchParams({distribution:t,architecture:n,search:r}),a&&o.append("limit",a),i="/packages?"+o.toString(),e.next=5,c().get(l.DO.concat(i));case 5:return u=e.sent,e.abrupt("return",u.data);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return(b=(0,o.Z)(s().mark((function e(t,n){var r,o,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={urls:t,search:n},e.next=4,c().post(l.$J.concat("/rpms/names"),r,f);case 4:return o=e.sent,i=o.data.map((function(e){return m({name:e.package_name},(0,a.Z)(e,p))})),e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=(0,o.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,c().get(l.DO.concat("/version"));case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=(0,o.Z)(s().mark((function e(t,n,r){var a,o,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new URLSearchParams({limit:n,offset:r}),o="/composes/".concat(t,"/clones?").concat(a),e.next=4,c().get(l.DO.concat(o));case 4:return i=e.sent,e.abrupt("return",i.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=(0,o.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/clones/".concat(t),e.next=3,c().get(l.DO.concat(n));case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return(P=(0,o.Z)(s().mark((function e(t,n){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/composes/".concat(t,"/clone"),e.next=3,c().post(l.DO.concat(r),n,f);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}const S={cloneImage:function(e,t){return P.apply(this,arguments)},composeImage:function(e){return h.apply(this,arguments)},getClones:function(e,t,n){return O.apply(this,arguments)},getCloneStatus:function(e){return _.apply(this,arguments)},getComposes:function(e,t){return g.apply(this,arguments)},getComposeStatus:function(e){return y.apply(this,arguments)},getPackages:function(e,t,n,r){return v.apply(this,arguments)},getPackagesContentSources:function(e,t){return b.apply(this,arguments)},getVersion:function(){return w.apply(this,arguments)}}},58061:(e,t,n)=>{n.d(t,{$J:()=>i,DO:()=>r,Ds:()=>o,F2:()=>u,LB:()=>v,NF:()=>g,PV:()=>c,UD:()=>a,Wp:()=>y,at:()=>f,fI:()=>d,g7:()=>m,kQ:()=>s,qq:()=>l,rh:()=>h,sn:()=>b,xG:()=>p});var r="/api/image-builder/v1",a="/api/rhsm/v2",o="/api/edge/v1",i="/api/content-sources/v1",s="/api/provisioning/v1",u="rhel-88",c="rhel-92",l="centos-8",p="centos-9",d=Math.pow(1024,1),m=Math.pow(1024,2),f=Math.pow(1024,3),h=new Map([[c,"Red Hat Enterprise Linux (RHEL) 9"],[u,"Red Hat Enterprise Linux (RHEL) 8"],[p,"CentOS Stream 9"],[l,"CentOS Stream 8"]]),g="us-east-1",y=[{description:"US East (Ohio)",value:"us-east-2",disableRegion:!1},{description:"US East (N. Virginia)",value:"us-east-1",disableRegion:!1},{description:"US West (N. California)",value:"us-west-1",disableRegion:!1},{description:"US West (Oregon)",value:"us-west-2",disableRegion:!1},{description:"Africa (Cape Town)",value:"af-south-1",disableRegion:!0},{description:"Asia Pacific (Hong Kong)",value:"ap-east-1",disableRegion:!0},{description:"Asia Pacific (Jakarta)",value:"ap-southeast-3",disableRegion:!0},{description:"Asia Pacific (Mumbai)",value:"ap-south-1",disableRegion:!1},{description:"Asia Pacific (Osaka)",value:"ap-northeast-3",disableRegion:!1},{description:"Asia Pacific (Seoul)",value:"ap-northeast-2",disableRegion:!1},{description:"Asia Pacific (Singapore)",value:"ap-southeast-1",disableRegion:!1},{description:"Asia Pacific (Sydney)",value:"ap-southeast-2",disableRegion:!1},{description:"Asia Pacific (Tokyo)",value:"ap-northeast-1",disableRegion:!1},{description:"Canada (Central)",value:"ca-central-1",disableRegion:!1},{description:"Europe (Frankfurt)",value:"eu-central-1",disableRegion:!1},{description:"Europe (Ireland)",value:"eu-west-1",disableRegion:!1},{description:"Europe (London)",value:"eu-west-2",disableRegion:!1},{description:"Europe (Milan)",value:"eu-south-1",disableRegion:!0},{description:"Europe (Paris)",value:"eu-west-3",disableRegion:!1},{description:"Europe (Stockholm)",value:"eu-north-1",disableRegion:!1},{description:"Middle East (Bahrain)",value:"me-south-1",disableRegion:!0},{description:"Middle East (UAE)",value:"me-central-1",disableRegion:!0},{description:"South America (São Paolo)",value:"sa-east-1",disableRegion:!1}],v=6,b=".pf-c-page.chr-c-page"},68224:(e,t,n)=>{n.d(t,{$0:()=>u,IZ:()=>c,ZP:()=>l,d0:()=>i});var r=n(4942);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var o=(0,n(24268).oM)({name:"clones",initialState:{allIds:[],byId:{},error:null},reducers:{cloneAdded:function(e,t){e.allIds.includes(t.payload.clone.id)||e.allIds.push(t.payload.clone.id),e.byId[t.payload.clone.id]=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t.payload.clone),e.byId[t.payload.clone.id].parent=t.payload.parent,e.error=null},cloneUpdatedStatus:function(e,t){var n={status:t.payload.status.status,upload_status:t.payload.status};e.byId[t.payload.id].image_status=n}}}),i=function(e,t){var n,r,a,o=e.clones.byId[t];return void 0!==o?{created_at:o.created_at,id:o.id,region:o.request.region,ami:null===(n=o.image_status)||void 0===n||null===(n=n.upload_status)||void 0===n||null===(n=n.options)||void 0===n?void 0:n.ami,share_with_accounts:o.request.share_with_accounts,share_with_sources:o.request.share_with_sources,status:null===(r=o.image_status)||void 0===r?void 0:r.status,uploadStatus:null===(a=o.image_status)||void 0===a?void 0:a.upload_status,parent:o.parent,imageType:"aws",isClone:!0}:null},s=o.actions,u=s.cloneAdded,c=s.cloneUpdatedStatus;const l=o.reducer},89136:(e,t,n)=>{n.d(t,{$L:()=>u,$P:()=>l,H0:()=>h,Hj:()=>d,Kh:()=>c,Po:()=>g,ZP:()=>y,fl:()=>p,tE:()=>f});var r=n(93433),a=n(24268),o=n(22222),i=n(68224),s=(0,a.oM)({name:"composes",initialState:{count:0,allIds:[],byId:{},error:null},reducers:{composeAdded:function(e,t){e.allIds.includes(t.payload.compose.id)||(t.payload.insert?e.allIds.unshift(t.payload.compose.id):e.allIds.push(t.payload.compose.id)),e.byId[t.payload.compose.id]=t.payload.compose,e.byId[t.payload.compose.id].clones||(e.byId[t.payload.compose.id].clones=[]),e.error=null},composesUpdatedCount:function(e,t){e.count=t.payload.count},composeUpdatedStatus:function(e,t){e.byId[t.payload.id].image_status=t.payload.status}},extraReducers:function(e){e.addCase("clones/cloneAdded",(function(e,t){e.byId[t.payload.parent].clones.push(t.payload.clone.id)}))}}),u=function(e,t){var n,a,o,i,s,u,c=e.composes.byId[t];return void 0!==c?{created_at:c.created_at,id:c.id,imageName:c.image_name||c.id,imageDescription:c.image_description||"",region:null===(n=c.image_status)||void 0===n||null===(n=n.upload_status)||void 0===n||null===(n=n.options)||void 0===n?void 0:n.region,ami:null===(a=c.image_status)||void 0===a||null===(a=a.upload_status)||void 0===a||null===(a=a.options)||void 0===a?void 0:a.ami,share_with_accounts:null===(o=c.request.image_requests[0].upload_request)||void 0===o?void 0:o.options.share_with_accounts,share_with_sources:null===(i=c.request.image_requests[0].upload_request)||void 0===i?void 0:i.options.share_with_sources,status:null===(s=c.image_status)||void 0===s?void 0:s.status,clones:(0,r.Z)(c.clones),imageType:c.request.image_requests[0].image_type,uploadType:c.request.image_requests[0].upload_request.type,uploadOptions:c.request.image_requests[0].upload_request.options,uploadStatus:null===(u=c.image_status)||void 0===u?void 0:u.upload_status,request:c.request,architecture:c.request.image_requests[0].architecture,isClone:!1}:null},c=function(e,t){var n=e.composes.byId[t];return n&&0!==n.clones.length?n.clones.map((function(t){var n,r,a=e.clones.byId[t];return{created_at:a.created_at,id:a.id,region:a.request.region,ami:null===(n=a.image_status)||void 0===n||null===(n=n.upload_status)||void 0===n||null===(n=n.options)||void 0===n?void 0:n.ami,share_with_accounts:a.request.share_with_accounts,share_with_sources:a.request.share_with_sources,status:null===(r=a.image_status)||void 0===r?void 0:r.status}})):[]},l=function(e,t){return e.composes.allIds.includes(t)?u(e,t):(0,i.d0)(e,t)},p=(0,o.P1)([u,c],(function(e,t){return[e].concat((0,r.Z)(t))})),d=(0,o.P1)([p],(function(e){return e.map((function(e){return null!==e?e.status:null}))})),m=s.actions,f=m.composeAdded,h=m.composesUpdatedCount,g=m.composeUpdatedStatus;const y=s.reducer},55506:(e,t,n)=>{n.d(t,{h:()=>w});var r,a=n(4942),o=n(83215),i=n(24268),s=n(38756),u=n.n(s),c=n(68224),l=n(89136),p=n(25982),d=n(30848),m=n(45673),f=n(58061),h=(0,d.LC)({reducerPath:"edgeApi",baseQuery:(0,m.ni)({baseUrl:f.Ds}),endpoints:function(){return{}}}).injectEndpoints({endpoints:function(e){return{getAllImages:e.query({query:function(e){return{url:"/images",params:{limit:e.limit,offset:e.offset,sort_by:e.sortBy,name:e.name,status:e.status,distribution:e.distribution,created_at:e.createdAt}}}})}},overrideExisting:!1}),g=(h.useGetAllImagesQuery,n(23753)),y=n(54362),v=n(966),b=(r={clones:c.ZP,composes:l.ZP},(0,a.Z)(r,p.GF.reducerPath,p.GF.reducer),(0,a.Z)(r,h.reducerPath,h.reducer),(0,a.Z)(r,g.qd.reducerPath,g.qd.reducer),(0,a.Z)(r,v.Op.reducerPath,v.Op.reducer),(0,a.Z)(r,y.A0.reducerPath,y.A0.reducer),(0,a.Z)(r,"notifications",o.ee),r),w=(0,i.xC)({reducer:b,middleware:function(e){return e().concat(u()).concat(p.GF.middleware).concat(h.middleware).concat(g.qd.middleware).concat(v.Op.middleware).concat(y.A0.middleware)}})},25982:(e,t,n)=>{n.d(t,{GF:()=>i,UQ:()=>s});var r=n(30848),a=n(45673),o=n(58061),i=(0,r.LC)({reducerPath:"contentSourcesApi",baseQuery:(0,a.ni)({baseUrl:o.$J}),endpoints:function(){return{}}}).injectEndpoints({endpoints:function(e){return{listRepositories:e.query({query:function(e){return{url:"/repositories/",params:{offset:e.offset,limit:e.limit,version:e.version,arch:e.arch,available_for_version:e.availableForVersion,available_for_arch:e.availableForArch,search:e.search,name:e.name,url:e.url,sort_by:e.sortBy,status:e.status}}}}),listRepositoriesRpms:e.query({query:function(e){return{url:"/repositories/".concat(e.uuid,"/rpms"),params:{limit:e.limit,offset:e.offset,search:e.search,sort_by:e.sortBy}}}})}},overrideExisting:!1}),s=i.useListRepositoriesQuery;i.useListRepositoriesRpmsQuery},23753:(e,t,n)=>{n.d(t,{qd:()=>i,xW:()=>s});var r=n(30848),a=n(45673),o=n(58061),i=(0,r.LC)({reducerPath:"imageBuilderApi",baseQuery:(0,a.ni)({baseUrl:o.DO}),endpoints:function(){return{}}}).injectEndpoints({endpoints:function(e){return{getArchitectures:e.query({query:function(e){return{url:"/architectures/".concat(e.distribution)}}}),getComposes:e.query({query:function(e){return{url:"/composes",params:{limit:e.limit,offset:e.offset}}}}),getComposeStatus:e.query({query:function(e){return{url:"/composes/".concat(e.composeId)}}}),cloneCompose:e.mutation({query:function(e){return{url:"/composes/".concat(e.composeId,"/clone"),method:"POST",body:e.cloneRequest}}}),getComposeClones:e.query({query:function(e){return{url:"/composes/".concat(e.composeId,"/clones"),params:{limit:e.limit,offset:e.offset}}}}),getCloneStatus:e.query({query:function(e){return{url:"/clones/".concat(e.id)}}}),composeImage:e.mutation({query:function(e){return{url:"/compose",method:"POST",body:e.composeRequest}}}),getPackages:e.query({query:function(e){return{url:"/packages",params:{distribution:e.distribution,architecture:e.architecture,search:e.search,limit:e.limit,offset:e.offset}}}})}},overrideExisting:!1}),s=i.useGetArchitecturesQuery;i.useGetComposesQuery,i.useGetComposeStatusQuery,i.useCloneComposeMutation,i.useGetComposeClonesQuery,i.useGetCloneStatusQuery,i.useComposeImageMutation,i.useGetPackagesQuery},54362:(e,t,n)=>{n.d(t,{A0:()=>i,w6:()=>s,ag:()=>u});var r=n(30848),a=n(45673),o=n(58061),i=(0,r.LC)({reducerPath:"provisioningApi",baseQuery:(0,a.ni)({baseUrl:o.kQ}),endpoints:function(){return{}}}).injectEndpoints({endpoints:function(e){return{getSourceList:e.query({query:function(e){return{url:"/sources",params:{provider:e.provider}}}}),getSourceUploadInfo:e.query({query:function(e){return{url:"/sources/".concat(e.id,"/upload_info")}}})}},overrideExisting:!1}),s=i.useGetSourceListQuery,u=i.useGetSourceUploadInfoQuery},966:(e,t,n)=>{n.d(t,{Op:()=>i,NK:()=>s,M2:()=>u});var r=n(30848),a=n(45673),o=n(58061),i=(0,r.LC)({reducerPath:"rhsmApi",baseQuery:(0,a.ni)({baseUrl:o.UD}),endpoints:function(){return{}}}).injectEndpoints({endpoints:function(e){return{listActivationKeys:e.query({query:function(){return{url:"/activation_keys"}}}),showActivationKey:e.query({query:function(e){return{url:"/activation_keys/".concat(e.name)}}})}},overrideExisting:!1}),s=i.useListActivationKeysQuery,u=i.useShowActivationKeyQuery}}]);
//# sourceMappingURL=../sourcemaps/636.c3941713adde677343c3e9b36255133d.js.map