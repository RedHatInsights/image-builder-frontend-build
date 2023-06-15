"use strict";(self.webpackChunkimage_builder=self.webpackChunkimage_builder||[]).push([[854],{18789:(e,t,n)=>{n.d(t,{Z:()=>F});var r=n(93264),a=n.n(r),o=n(55140),i=n(51344),s=n(70743),c=n(31210),u=n(67768),l=n(22663),p=n(41763),d=n(15984),m=n(4942),f=n(83215);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,m.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v="manage-edge-images",y=n(55808);const b=function(){var e,t=(e=(0,s.I0)(),{hasInfo:function(t){e(g({},(0,f.wN)(g({variant:"info"},t))))},hasSuccess:function(t){e(g({},(0,f.wN)(g({variant:"success"},t))))},err:function(t,n){e(g({},(0,f.wN)(g(g({variant:"danger"},t),{},{description:null!=n&&n.Title?"".concat(t.description,": ").concat(n.Title):t.description}))))}});return(0,u.useFlag)("edgeParity.image-list")?a().createElement(l.Z,{appName:"edge",module:"./ImagesDetail",ErrorComponent:a().createElement(p.Z,null),navigateProp:c.useNavigate,locationProp:c.useLocation,notificationProp:t,pathPrefix:(0,y.y)(""),urlName:v,paramsProp:c.useParams}):a().createElement(d.Z,null)};var w=n(29439),_=n(90154),O=n(87462),P=n(93433),S=n(84564),E=n(34046),I=n(22222),j=n(45697),R=n.n(j),Z=n(87248),k=n(58061),q=n(68224),A=n(89136);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){(0,m.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=(0,I.P1)([A.$L,A.Kh],(function(e,t){var n=new Set;return n.add(e.region),t.map((function(t){var r,a,o,i;t.region&&(null===(r=t.share_with_accounts)||void 0===r?void 0:r[0])===(null===(a=e.share_with_accounts)||void 0===a?void 0:a[0])&&(null===(o=t.share_with_sources)||void 0===o?void 0:o[0])===(null===(i=e.share_with_sources)||void 0===i?void 0:i[0])&&"failure"!==t.status&&n.add(t.region)})),n})),T=function(e){var t=e.composeId,n=e.handleClose,o=e.handleToggle,i=e.isOpen,u=e.setIsOpen,l=(0,s.I0)(),p=(0,c.useNavigate)(),d=(0,r.useState)(!1),m=(0,w.Z)(d,2),h=m[0],g=m[1],v=(0,r.useState)([]),b=(0,w.Z)(v,2),I=b[0],j=b[1],R="Clone this image",D=(0,r.useState)("default"),T=(0,w.Z)(D,2),U=T[0],N=T[1],L=(0,r.useState)("Select at least one region to share to."),H=(0,w.Z)(L,1)[0],M=(0,s.v9)((function(e){return(0,A.$L)(e,t)})),F=(0,s.v9)((function(e){return C(e,t)})),G=(0,r.useState)(function(e){return k.Wp.map((function(t){return x(x({},t),{},{disabled:e.has(t.value)||!0===(null==t?void 0:t.disableRegion)})}))}(F)),z=(0,w.Z)(G,1)[0];return a().createElement(_.Form,null,a().createElement("span",{id:R,hidden:!0},"Select a region"),a().createElement(_.FormGroup,{label:"Select region",isRequired:!0,validated:U,helperTextInvalid:H,helperTextInvalidIcon:a().createElement(S.ZP,null),labelIcon:a().createElement(_.Popover,{headerContent:a().createElement("div",null,"Sharing images to other regions"),bodyContent:a().createElement("div",null,"Your image will be built, uploaded to AWS, and shared to the regions you select. The shared image will expire within 14 days. To permanently access the image, copy the image, which will be shared to your account by Red Hat, to your own AWS account.")},a().createElement("button",{type:"button","aria-label":"More info for name field",onClick:function(e){return e.preventDefault()},"aria-describedby":"simple-form-name-01",className:"pf-c-form__group-label-help"},a().createElement(E.ZP,{noVerticalAlign:!0})))},a().createElement(_.Select,{variant:_.SelectVariant.typeaheadMulti,typeAheadAriaLabel:"Select a region",onToggle:o,onSelect:function(e,t){var n;I.includes(t)?(n=I.filter((function(e){return e!==t})),j(n)):(n=[].concat((0,P.Z)(I),[t]),j(n)),0===n.length?N("error"):N("default")},onClear:function(){j([]),u(!1),N("error")},selections:I,isOpen:i,"aria-labelledby":R,placeholderText:"Select a region",menuAppendTo:"parent",validated:U,maxHeight:"25rem"},z.map((function(e,t){return a().createElement(_.SelectOption,(0,O.Z)({isDisabled:e.disabled,key:t,value:e.value},e.description&&{description:e.description}))})))),a().createElement(_.ActionGroup,null,a().createElement(_.Button,{onClick:function(){g(!0);var e=I.map((function(e){var t,n={region:e};return null!==(t=M.share_with_sources)&&void 0!==t&&t[0]?n.share_with_sources=[M.share_with_sources[0]]:n.share_with_accounts=[M.share_with_accounts[0]],n}));Promise.all(e.map((function(e){return Z.Z.cloneImage(t,e).then((function(n){l((0,q.$0)({clone:x(x({},n),{},{request:e,image_status:{status:"pending"}}),parent:t}))}))}))).then((function(){p((0,y.y)("")),l((0,f.wN)({variant:"success",title:"Your image is being shared"})),g(!1)})).catch((function(e){p((0,y.y)("")),l((0,f.wN)({variant:"danger",title:"Your image could not be created",description:"Status code ".concat(e.response.status,": ").concat(e.response.statusText)}))}))},variant:"primary",key:"share",isDisabled:0===I.length||h,isLoading:h},"Share"),a().createElement(_.Button,{variant:"link",onClick:n,key:"cancel"},"Cancel")))};T.propTypes={composeId:R().string,handleClose:R().func,handleToggle:R().func,isOpen:R().bool,setIsOpen:R().func};const U=T,N=function(){var e=(0,c.useNavigate)(),t=function(){return e((0,y.y)(""))},n=(0,r.useState)(!1),o=(0,w.Z)(n,2),i=o[0],s=o[1],u=(0,c.useParams)().composeId,l=function(e){return s(e)},p=(0,r.useMemo)((function(){return document.querySelector(k.sn)}),[]);return a().createElement(_.Modal,{isOpen:!0,variant:"small","aria-label":"Share to new region",onClose:t,title:"Share to new region",description:"Configure new regions for this image that will run on your AWS. All the regions will launch with the same configuration.",onEscapePress:function(){i?l(i):t()},appendTo:p},a().createElement(U,{composeId:u,handleClose:t,handleToggle:l,isOpen:i,setIsOpen:s}))};var L=(0,r.lazy)((function(){return Promise.all([n.e(227),n.e(710)]).then(n.bind(n,65710))})),H=(0,r.lazy)((function(){return Promise.all([n.e(691),n.e(235),n.e(437),n.e(649),n.e(720),n.e(227),n.e(983)]).then(n.bind(n,9489))})),M=function(){var e=(0,u.useFlag)("edgeParity.image-list");return a().createElement(c.Routes,null,a().createElement(c.Route,{path:"*",element:a().createElement(L,null)},a().createElement(c.Route,{path:"imagewizard/:composeId?",element:a().createElement(H,null)}),a().createElement(c.Route,{path:"share/:composeId",element:a().createElement(N,null)})),e&&a().createElement(c.Route,{path:"/".concat(v,"/:imageId"),element:a().createElement(b,null)},a().createElement(c.Route,{path:"*",element:a().createElement(b,null)}),a().createElement(c.Route,{path:"versions/:imageVersionId/*",element:a().createElement(b,null)})))};const F=function(e){var t=(0,c.useNavigate)(),n=(0,s.oR)(),u=(0,o.Z)(),l=u.hideGlobalFilter,p=u.on,d=u.updateDocumentTitle;return(0,r.useEffect)((function(){d("Image Builder | Red Hat Insights"),l();var e=p("APP_NAVIGATION",(function(){return t((0,y.y)(""))}));return function(){e()}}),[]),a().createElement(a().Fragment,null,a().createElement(i.ZP,{store:n}),a().createElement(M,{childProps:e}))}},55808:(e,t,n)=>{function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"/insights/image-builder".concat(e.length>0?"/".concat(e):"")}n.d(t,{y:()=>r})},87248:(e,t,n)=>{n.d(t,{Z:()=>S});var r=n(4942),a=n(45987),o=n(15861),i=n(64687),s=n.n(i),c=n(9669),u=n.n(c),l=n(58061),p=["package_name"];function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={headers:{"Content-Type":"application/json"}};function h(){return(h=(0,o.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,u().post(l.DO.concat("/compose"),t,f);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=(0,o.Z)(s().mark((function e(t,n){var r,a,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URLSearchParams({limit:t,offset:n}),a="/composes?"+r.toString(),e.next=4,u().get(l.DO.concat(a));case 4:return o=e.sent,e.abrupt("return",o.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=(0,o.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/composes/"+t,e.next=3,u().get(l.DO.concat(n));case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=(0,o.Z)(s().mark((function e(t,n,r,a){var o,i,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=new URLSearchParams({distribution:t,architecture:n,search:r}),a&&o.append("limit",a),i="/packages?"+o.toString(),e.next=5,u().get(l.DO.concat(i));case 5:return c=e.sent,e.abrupt("return",c.data);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return(b=(0,o.Z)(s().mark((function e(t,n){var r,o,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={urls:t,search:n},e.next=4,u().post(l.Hp.concat("/rpms/names"),r,f);case 4:return o=e.sent,i=o.data.map((function(e){return m({name:e.package_name},(0,a.Z)(e,p))})),e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=(0,o.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,u().get(l.DO.concat("/version"));case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return(_=(0,o.Z)(s().mark((function e(t,n,r){var a,o,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new URLSearchParams({limit:n,offset:r}),o="/composes/".concat(t,"/clones?").concat(a),e.next=4,u().get(l.DO.concat(o));case 4:return i=e.sent,e.abrupt("return",i.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=(0,o.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/clones/".concat(t),e.next=3,u().get(l.DO.concat(n));case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return(P=(0,o.Z)(s().mark((function e(t,n){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/composes/".concat(t,"/clone"),e.next=3,u().post(l.DO.concat(r),n,f);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}const S={cloneImage:function(e,t){return P.apply(this,arguments)},composeImage:function(e){return h.apply(this,arguments)},getClones:function(e,t,n){return _.apply(this,arguments)},getCloneStatus:function(e){return O.apply(this,arguments)},getComposes:function(e,t){return g.apply(this,arguments)},getComposeStatus:function(e){return v.apply(this,arguments)},getPackages:function(e,t,n,r){return y.apply(this,arguments)},getPackagesContentSources:function(e,t){return b.apply(this,arguments)},getVersion:function(){return w.apply(this,arguments)}}},58061:(e,t,n)=>{n.d(t,{DO:()=>r,F2:()=>s,Hp:()=>o,LB:()=>v,NF:()=>h,PV:()=>c,UD:()=>a,Wp:()=>g,at:()=>m,cm:()=>i,fI:()=>p,g7:()=>d,qq:()=>u,rh:()=>f,sn:()=>y,xG:()=>l});var r="/api/image-builder/v1",a="/api/rhsm/v2",o="/api/content-sources/v1",i="/api/provisioning/v1/sources",s="rhel-88",c="rhel-92",u="centos-8",l="centos-9",p=Math.pow(1024,1),d=Math.pow(1024,2),m=Math.pow(1024,3),f=new Map([[c,"Red Hat Enterprise Linux (RHEL) 9"],[s,"Red Hat Enterprise Linux (RHEL) 8"],[l,"CentOS Stream 9"],[u,"CentOS Stream 8"]]),h="us-east-1",g=[{description:"US East (Ohio)",value:"us-east-2",disableRegion:!1},{description:"US East (N. Virginia)",value:"us-east-1",disableRegion:!1},{description:"US West (N. California)",value:"us-west-1",disableRegion:!1},{description:"US West (Oregon)",value:"us-west-2",disableRegion:!1},{description:"Africa (Cape Town)",value:"af-south-1",disableRegion:!0},{description:"Asia Pacific (Hong Kong)",value:"ap-east-1",disableRegion:!0},{description:"Asia Pacific (Jakarta)",value:"ap-southeast-3",disableRegion:!0},{description:"Asia Pacific (Mumbai)",value:"ap-south-1",disableRegion:!1},{description:"Asia Pacific (Osaka)",value:"ap-northeast-3",disableRegion:!1},{description:"Asia Pacific (Seoul)",value:"ap-northeast-2",disableRegion:!1},{description:"Asia Pacific (Singapore)",value:"ap-southeast-1",disableRegion:!1},{description:"Asia Pacific (Sydney)",value:"ap-southeast-2",disableRegion:!1},{description:"Asia Pacific (Tokyo)",value:"ap-northeast-1",disableRegion:!1},{description:"Canada (Central)",value:"ca-central-1",disableRegion:!1},{description:"Europe (Frankfurt)",value:"eu-central-1",disableRegion:!1},{description:"Europe (Ireland)",value:"eu-west-1",disableRegion:!1},{description:"Europe (London)",value:"eu-west-2",disableRegion:!1},{description:"Europe (Milan)",value:"eu-south-1",disableRegion:!0},{description:"Europe (Paris)",value:"eu-west-3",disableRegion:!1},{description:"Europe (Stockholm)",value:"eu-north-1",disableRegion:!1},{description:"Middle East (Bahrain)",value:"me-south-1",disableRegion:!0},{description:"Middle East (UAE)",value:"me-central-1",disableRegion:!0},{description:"South America (São Paolo)",value:"sa-east-1",disableRegion:!1}],v=6,y=".pf-c-page.chr-c-page"},52183:(e,t,n)=>{n.d(t,{F7:()=>v,FE:()=>g,TD:()=>m,Xq:()=>l,YC:()=>p,dp:()=>f,gk:()=>u,jU:()=>h,lI:()=>d});var r=n(15861),a=n(64687),o=n.n(a),i=n(30848),s=n(45673),c=n(58061),u=(0,i.LC)({reducerPath:"api",baseQuery:(0,s.ni)({baseUrl:""}),endpoints:function(e){return{getAWSSources:e.query({queryFn:function(e,t,n,a){return(0,r.Z)(o().mark((function e(){var t,n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a("".concat(c.cm,"?provider=aws"));case 2:if(!(t=e.sent).error){e.next=5;break}return e.abrupt("return",{error:t.error});case 5:return e.next=7,Promise.allSettled(t.data.map((function(e){return a("".concat(c.cm,"/").concat(e.id,"/account_identity"))})));case 7:for(n=e.sent,r=0;r<t.data.length;r++)n[r].value.error?t.data[r].account_id="":t.data[r].account_id=n[r].value.data.aws.account_id;return e.abrupt("return",t);case 10:case"end":return e.stop()}}),e)})))()}}),getAzureSources:e.query({query:function(){return"".concat(c.cm,"?provider=azure")}}),getAzureSourceDetail:e.query({query:function(e){return"".concat(c.cm,"/").concat(e,"/upload_info")},transformResponse:function(e){return e.azure}}),getArchitecturesByDistribution:e.query({query:function(e){return"".concat(c.DO,"/architectures/").concat(e)}}),getActivationKeys:e.query({query:function(){return"".concat(c.UD,"/activation_keys")}}),getActivationKeyInformation:e.query({query:function(e){return"".concat(c.UD,"/activation_keys/").concat(e)}}),getRepositories:e.query({queryFn:function(e,t,n,a){return(0,r.Z)(o().mark((function t(){var n,r,i,s;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.available_for_arch,r=e.available_for_version,i=100,t.next=4,a("".concat(c.Hp,"/repositories/?available_for_arch=").concat(n,"&available_for_version=").concat(r,"&limit=").concat(i));case 4:if(!((s=t.sent).meta.count>i)){t.next=9;break}return t.next=8,a("".concat(c.Hp,"/repositories/?available_for_arch=").concat(n,"&available_for_version=").concat(r,"&limit=").concat(s.meta.count));case 8:s=t.sent;case 9:return t.abrupt("return",s);case 10:case"end":return t.stop()}}),t)})))()}})}}}),l=u.useGetAWSSourcesQuery,p=u.useGetArchitecturesByDistributionQuery,d=u.useGetAzureSourcesQuery,m=u.useGetAzureSourceDetailQuery,f=u.useGetActivationKeysQuery,h=u.useGetActivationKeyInformationQuery,g=u.useGetRepositoriesQuery,v=u.usePrefetch},68224:(e,t,n)=>{n.d(t,{$0:()=>c,IZ:()=>u,ZP:()=>l,d0:()=>i});var r=n(4942);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var o=(0,n(24268).oM)({name:"clones",initialState:{allIds:[],byId:{},error:null},reducers:{cloneAdded:function(e,t){e.allIds.includes(t.payload.clone.id)||e.allIds.push(t.payload.clone.id),e.byId[t.payload.clone.id]=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t.payload.clone),e.byId[t.payload.clone.id].parent=t.payload.parent,e.error=null},cloneUpdatedStatus:function(e,t){var n={status:t.payload.status.status,upload_status:t.payload.status};e.byId[t.payload.id].image_status=n}}}),i=function(e,t){var n,r,a,o,i,s=e.clones.byId[t];return void 0!==s?{created_at:s.created_at,id:s.id,region:s.request.region,ami:null===(n=s.image_status)||void 0===n||null===(r=n.upload_status)||void 0===r||null===(a=r.options)||void 0===a?void 0:a.ami,share_with_accounts:s.request.share_with_accounts,share_with_sources:s.request.share_with_sources,status:null===(o=s.image_status)||void 0===o?void 0:o.status,uploadStatus:null===(i=s.image_status)||void 0===i?void 0:i.upload_status,parent:s.parent,imageType:"aws",isClone:!0}:null},s=o.actions,c=s.cloneAdded,u=s.cloneUpdatedStatus;const l=o.reducer},89136:(e,t,n)=>{n.d(t,{$L:()=>c,$P:()=>l,H0:()=>h,Hj:()=>d,Kh:()=>u,Po:()=>g,ZP:()=>v,fl:()=>p,tE:()=>f});var r=n(93433),a=n(24268),o=n(22222),i=n(68224),s=(0,a.oM)({name:"composes",initialState:{count:0,allIds:[],byId:{},error:null},reducers:{composeAdded:function(e,t){e.allIds.includes(t.payload.compose.id)||(t.payload.insert?e.allIds.unshift(t.payload.compose.id):e.allIds.push(t.payload.compose.id)),e.byId[t.payload.compose.id]=t.payload.compose,e.byId[t.payload.compose.id].clones||(e.byId[t.payload.compose.id].clones=[]),e.error=null},composesUpdatedCount:function(e,t){e.count=t.payload.count},composeUpdatedStatus:function(e,t){e.byId[t.payload.id].image_status=t.payload.status}},extraReducers:function(e){e.addCase("clones/cloneAdded",(function(e,t){e.byId[t.payload.parent].clones.push(t.payload.clone.id)}))}}),c=function(e,t){var n,a,o,i,s,c,u,l,p,d,m=e.composes.byId[t];return void 0!==m?{created_at:m.created_at,id:m.id,imageName:m.image_name||m.id,region:null===(n=m.image_status)||void 0===n||null===(a=n.upload_status)||void 0===a||null===(o=a.options)||void 0===o?void 0:o.region,ami:null===(i=m.image_status)||void 0===i||null===(s=i.upload_status)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.ami,share_with_accounts:null===(u=m.request.image_requests[0].upload_request)||void 0===u?void 0:u.options.share_with_accounts,share_with_sources:null===(l=m.request.image_requests[0].upload_request)||void 0===l?void 0:l.options.share_with_sources,status:null===(p=m.image_status)||void 0===p?void 0:p.status,clones:(0,r.Z)(m.clones),imageType:m.request.image_requests[0].image_type,uploadType:m.request.image_requests[0].upload_request.type,uploadOptions:m.request.image_requests[0].upload_request.options,uploadStatus:null===(d=m.image_status)||void 0===d?void 0:d.upload_status,request:m.request,architecture:m.request.image_requests[0].architecture,isClone:!1}:null},u=function(e,t){var n=e.composes.byId[t];return 0!==n.clones.length?n.clones.map((function(t){var n,r,a,o,i=e.clones.byId[t];return{created_at:i.created_at,id:i.id,region:i.request.region,ami:null===(n=i.image_status)||void 0===n||null===(r=n.upload_status)||void 0===r||null===(a=r.options)||void 0===a?void 0:a.ami,share_with_accounts:i.request.share_with_accounts,share_with_sources:i.request.share_with_sources,status:null===(o=i.image_status)||void 0===o?void 0:o.status}})):[]},l=function(e,t){return e.composes.allIds.includes(t)?c(e,t):(0,i.d0)(e,t)},p=(0,o.P1)([c,u],(function(e,t){return[e].concat((0,r.Z)(t))})),d=(0,o.P1)([p],(function(e){return e.map((function(e){return e.status}))})),m=s.actions,f=m.composeAdded,h=m.composesUpdatedCount,g=m.composeUpdatedStatus;const v=s.reducer},30319:(e,t,n)=>{n.d(t,{h:()=>m});var r,a=n(4942),o=n(83215),i=n(24268),s=n(38756),c=n.n(s),u=n(52183),l=n(68224),p=n(89136),d=(r={},(0,a.Z)(r,u.gk.reducerPath,u.gk.reducer),(0,a.Z)(r,"clones",l.ZP),(0,a.Z)(r,"composes",p.ZP),(0,a.Z)(r,"notifications",o.ee),r),m=(0,i.xC)({reducer:d,middleware:function(e){return e().concat(c()).concat(u.gk.middleware)}})}}]);
//# sourceMappingURL=../sourcemaps/854.9b818bc9843685a83ae6ab16e2caed93.js.map