(self.webpackChunkimageBuilder=self.webpackChunkimageBuilder||[]).push([[636],{76828:(e,t,r)=>{"use strict";r.d(t,{Z:()=>x});var n=r(32747),a=r.n(n),i=r(55140),o=r(51344),s=r(70743),u=r(67768),c=r(30272),l=r(22663),d=r(46639),p=r(15984),m=r(46987),g=r(55808);const f=function(){var e=(0,s.I0)(),t=(0,m.B)(e),r=(0,u.useFlag)("edgeParity.image-list");return(0,u.useFlag)("image-builder.edge.local-image-table")?a().createElement("div",null):r?a().createElement(l.Z,{appName:"edge",module:"./ImagesDetail",ErrorComponent:a().createElement(d.Z,null),navigateProp:c.useNavigate,locationProp:c.useLocation,notificationProp:t,pathPrefix:(0,g.y)(""),urlName:m.P,paramsProp:c.useParams}):a().createElement(p.Z,null)};var y=r(85893),h=r(39930),v=r(24307),b=r(84213),I=r(43047),w=r(58061),S=r(23753),q=function(e,t,r){if(r||2===arguments.length)for(var n,a=0,i=t.length;a<i;a++)!n&&a in t||(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return e.concat(n||Array.prototype.slice.call(t))};const C=function(e){var t=e.composeId,r=e.handleClose,a=(0,c.useNavigate)(),i=(0,n.useState)(!1),o=i[0],s=i[1],u=(0,n.useState)(!1),l=u[0],d=u[1],p=(0,n.useState)(h.ValidatedOptions.default),m=p[0],f=p[1],C=w.Wp,_=(0,n.useState)(""),P=_[0],O=_[1],E=(0,n.useState)([]),x=E[0],R=E[1],j=(0,n.useState)(C),A=j[0],k=j[1];(0,n.useEffect)((function(){var e=C;P&&((e=C.filter((function(e){return e.value.toLowerCase().includes(P.toLowerCase())}))).length||(e=[{disableRegion:!1,description:'No results found for "'.concat(P,'"'),value:"empty"}]),o||s(!0)),k(e)}),[P]);var T=function(e,t){O(t)},Q=function(e){e&&"no results"!==e?(R(x.includes(e)?x.filter((function(t){return t!==e})):q(q([],x,!0),[e],!1)),f(h.ValidatedOptions.success)):f(h.ValidatedOptions.error)},G=(0,S.LX)()[0],F=(0,S.OZ)({composeId:t}),M=F.data;if(F.isSuccess){var L=function(){x.length||f(h.ValidatedOptions.error),s(!o)};return(0,y.jsxs)(h.Form,{children:[(0,y.jsx)("span",{id:"Clone this image",hidden:!0,children:"Select a region"}),(0,y.jsxs)(h.FormGroup,{label:"Select region",isRequired:!0,labelIcon:(0,y.jsx)(h.Popover,{headerContent:(0,y.jsx)("div",{children:"Sharing images to other regions"}),bodyContent:(0,y.jsx)("div",{children:"Your image will be built, uploaded to AWS, and shared to the regions you select. The shared image will expire within 14 days. To permanently access the image, copy the image, which will be shared to your account by Red Hat, to your own AWS account."}),children:(0,y.jsx)(h.Button,{variant:"plain","aria-label":"About regions",className:"pf-u-pl-sm header-button",isInline:!0,children:(0,y.jsx)(b.by,{})})}),children:[(0,y.jsx)(h.Select,{isScrollable:!0,isOpen:o,selected:x,onSelect:function(e,t){return Q(t)},onOpenChange:L,toggle:function(e){return(0,y.jsx)(h.MenuToggle,{variant:"typeahead",onClick:L,innerRef:e,isExpanded:o,isFullWidth:!0,children:(0,y.jsxs)(h.TextInputGroup,{isPlain:!0,children:[(0,y.jsx)(h.TextInputGroupMain,{value:P,onClick:L,onChange:T,placeholder:"Select region",isExpanded:o,children:(0,y.jsx)(h.ChipGroup,{"aria-label":"Selected regions",children:x.map((function(e,t){return(0,y.jsx)(h.Chip,{onClick:function(t){t.stopPropagation(),Q(e)},children:e},t)}))})}),(0,y.jsx)(h.TextInputGroupUtilities,{children:x.length>0&&(0,y.jsx)(h.Button,{variant:"plain",onClick:function(){O(""),R([]),f(h.ValidatedOptions.error)},"aria-label":"Clear input value",children:(0,y.jsx)(v.q1,{"aria-hidden":!0})})})]})})},children:(0,y.jsx)(h.SelectList,{isAriaMultiselectable:!0,children:A.map((function(e){return(0,y.jsx)(h.SelectOption,{isDisabled:e.disableRegion,description:e.value,value:e.value,children:e.description},e.value)}))})}),"success"!==m&&(0,y.jsx)(h.FormHelperText,{children:(0,y.jsx)(h.HelperText,{children:(0,y.jsx)(h.HelperTextItem,{icon:(0,y.jsx)(I.$O,{}),variant:m,children:"Select at least one region to share to."})})})]}),(0,y.jsxs)(h.ActionGroup,{children:[(0,y.jsx)(h.Button,{onClick:function(){return e=void 0,r=void 0,i=function(){var e;return function(e,t){var r,n,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(u){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(o=0)),o;)try{if(r=1,n&&(a=2&s[0]?n.return:s[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,s[1])).done)return a;switch(n=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){o.label=s[1];break}if(6===s[0]&&o.label<a[1]){o.label=a[1],a=s;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(s);break}a[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],n=0}finally{r=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}}(this,(function(r){switch(r.label){case 0:return d(!0),e=function(e,t,r){return r.map((function(r){var n=t.request.image_requests[0].upload_request.options;return{composeId:e,cloneRequest:{region:r,share_with_sources:"share_with_sources"in n?n.share_with_sources:void 0,share_with_accounts:"share_with_accounts"in n?n.share_with_accounts:void 0}}}))}(t,M,x),[4,Promise.allSettled(e.map((function(e){return G(e)})))];case 1:return r.sent(),a((0,g.y)("")),[2]}}))},new((n=void 0)||(n=Promise))((function(t,a){function o(e){try{u(i.next(e))}catch(e){a(e)}}function s(e){try{u(i.throw(e))}catch(e){a(e)}}function u(e){var r;e.done?t(e.value):(r=e.value,r instanceof n?r:new n((function(e){e(r)}))).then(o,s)}u((i=i.apply(e,r||[])).next())}));var e,r,n,i},variant:"primary",isDisabled:0===x.length||l,isLoading:l,children:"Share"},"share"),(0,y.jsx)(h.Button,{variant:"link",onClick:r,children:"Cancel"},"cancel")]})]})}},_=function(){var e=(0,c.useNavigate)(),t=function(){return e((0,g.y)(""))},r=(0,c.useParams)().composeId,a=(0,n.useMemo)((function(){var e=document.querySelector(w.sn);return null===e?void 0:e}),[]);if(r)return(0,y.jsx)(h.Modal,{isOpen:!0,variant:"small","aria-label":"Share to new region",onClose:t,title:"Share to new region",description:"Configure new regions for this image that will run on your AWS. All the\n        regions will launch with the same configuration.",appendTo:a,children:(0,y.jsx)(C,{composeId:r,handleClose:t})});t()};var P=(0,n.lazy)((function(){return Promise.all([r.e(663),r.e(669),r.e(980),r.e(162),r.e(792)]).then(r.bind(r,14728))})),O=(0,n.lazy)((function(){return Promise.all([r.e(688),r.e(626),r.e(627),r.e(763),r.e(165),r.e(669),r.e(361),r.e(777),r.e(980),r.e(162),r.e(130)]).then(r.bind(r,88634))})),E=function(){var e=(0,u.useFlag)("edgeParity.image-list");return a().createElement(c.Routes,null,a().createElement(c.Route,{path:"*",element:a().createElement(n.Suspense,null,a().createElement(P,null))},a().createElement(c.Route,{path:"share/:composeId",element:a().createElement(_,null)})),a().createElement(c.Route,{path:"imagewizard/:composeId?",element:a().createElement(n.Suspense,null,a().createElement(O,null))}),e&&a().createElement(c.Route,{path:"/".concat(m.P,"/:imageId"),element:a().createElement(f,null)},a().createElement(c.Route,{path:"*",element:a().createElement(f,null)}),a().createElement(c.Route,{path:"versions/:imageVersionId/*",element:a().createElement(f,null)})))};const x=function(e){var t=(0,s.oR)(),r=(0,i.Z)(),u=r.hideGlobalFilter,c=r.updateDocumentTitle;return(0,n.useEffect)((function(){c("Image Builder | Red Hat Insights"),u()}),[]),a().createElement(a().Fragment,null,a().createElement(o.ZP,{store:t}),a().createElement(E,{childProps:e}))}},46987:(e,t,r)=>{"use strict";r.d(t,{B:()=>u,P:()=>s});var n=r(4942),a=r(83215);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s="manage-edge-images",u=function(e){return{hasInfo:function(t){e(o({},(0,a.wN)(o({variant:"info"},t))))},hasSuccess:function(t){e(o({},(0,a.wN)(o({variant:"success"},t))))},err:function(t,r){e(o({},(0,a.wN)(o(o({variant:"danger"},t),{},{description:null!=r&&r.Title?"".concat(t.description,": ").concat(r.Title):t.description}))))}}}},55808:(e,t,r)=>{"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"/insights/image-builder".concat(e.length>0?"/".concat(e):"")}r.d(t,{y:()=>n})},58061:(e,t,r)=>{"use strict";r.d(t,{$J:()=>o,DO:()=>n,Ds:()=>i,F2:()=>u,FY:()=>I,LB:()=>v,NF:()=>y,PV:()=>c,UD:()=>a,Wp:()=>h,at:()=>g,fI:()=>p,g7:()=>m,kQ:()=>s,qq:()=>l,rh:()=>f,sn:()=>b,xG:()=>d});var n="/api/image-builder/v1",a="/api/rhsm/v2",i="/api/edge/v1",o="/api/content-sources/v1",s="/api/provisioning/v1",u="rhel-88",c="rhel-92",l="centos-8",d="centos-9",p=Math.pow(1024,1),m=Math.pow(1024,2),g=Math.pow(1024,3),f=new Map([[c,"Red Hat Enterprise Linux (RHEL) 9"],[u,"Red Hat Enterprise Linux (RHEL) 8"],[d,"CentOS Stream 9"],[l,"CentOS Stream 8"]]),y="us-east-1",h=[{description:"US East (Ohio)",value:"us-east-2",disableRegion:!1},{description:"US East (N. Virginia)",value:"us-east-1",disableRegion:!0},{description:"US West (N. California)",value:"us-west-1",disableRegion:!1},{description:"US West (Oregon)",value:"us-west-2",disableRegion:!1},{description:"Africa (Cape Town)",value:"af-south-1",disableRegion:!0},{description:"Asia Pacific (Hong Kong)",value:"ap-east-1",disableRegion:!0},{description:"Asia Pacific (Jakarta)",value:"ap-southeast-3",disableRegion:!0},{description:"Asia Pacific (Mumbai)",value:"ap-south-1",disableRegion:!1},{description:"Asia Pacific (Osaka)",value:"ap-northeast-3",disableRegion:!1},{description:"Asia Pacific (Seoul)",value:"ap-northeast-2",disableRegion:!1},{description:"Asia Pacific (Singapore)",value:"ap-southeast-1",disableRegion:!1},{description:"Asia Pacific (Sydney)",value:"ap-southeast-2",disableRegion:!1},{description:"Asia Pacific (Tokyo)",value:"ap-northeast-1",disableRegion:!1},{description:"Canada (Central)",value:"ca-central-1",disableRegion:!1},{description:"Europe (Frankfurt)",value:"eu-central-1",disableRegion:!1},{description:"Europe (Ireland)",value:"eu-west-1",disableRegion:!1},{description:"Europe (London)",value:"eu-west-2",disableRegion:!1},{description:"Europe (Milan)",value:"eu-south-1",disableRegion:!0},{description:"Europe (Paris)",value:"eu-west-3",disableRegion:!1},{description:"Europe (Stockholm)",value:"eu-north-1",disableRegion:!1},{description:"Middle East (Bahrain)",value:"me-south-1",disableRegion:!0},{description:"Middle East (UAE)",value:"me-central-1",disableRegion:!0},{description:"South America (São Paolo)",value:"sa-east-1",disableRegion:!1}],v=6,b=".pf-c-page.chr-c-page",I=8e3},25982:(e,t,r)=>{"use strict";r.d(t,{GF:()=>o,UQ:()=>s});var n=r(30848),a=r(45673),i=r(58061),o=(0,n.LC)({reducerPath:"contentSourcesApi",baseQuery:(0,a.ni)({baseUrl:i.$J}),endpoints:function(){return{}}}).injectEndpoints({endpoints:function(e){return{listRepositories:e.query({query:function(e){return{url:"/repositories/",params:{offset:e.offset,limit:e.limit,version:e.version,arch:e.arch,available_for_version:e.availableForVersion,available_for_arch:e.availableForArch,search:e.search,name:e.name,url:e.url,sort_by:e.sortBy,status:e.status,origin:e.origin,content_type:e.contentType}}}}),listRepositoriesRpms:e.query({query:function(e){return{url:"/repositories/".concat(e.uuid,"/rpms"),params:{limit:e.limit,offset:e.offset,search:e.search,sort_by:e.sortBy}}}})}},overrideExisting:!1}),s=o.useListRepositoriesQuery;o.useListRepositoriesRpmsQuery},23753:(e,t,r)=>{"use strict";r.d(t,{qd:()=>o,LX:()=>l,oC:()=>m,xW:()=>s,pM:()=>p,oM:()=>d,OZ:()=>c,TU:()=>u,Wo:()=>f,YA:()=>g});var n=r(30848),a=r(45673),i=r(58061),o=(0,n.LC)({reducerPath:"imageBuilderApi",baseQuery:(0,a.ni)({baseUrl:i.DO,paramsSerializer:function(e){for(var t=new URLSearchParams,r=0,n=Object.entries(e);r<n.length;r++){var a=n[r],i=a[0],o=a[1];if(void 0!==o)if(Array.isArray(o))for(var s=0,u=o;s<u.length;s++){var c=u[s];t.append(i,c)}else t.append(i,o)}return t.toString()}}),endpoints:function(){return{}}}).injectEndpoints({endpoints:function(e){return{getArchitectures:e.query({query:function(e){return{url:"/architectures/".concat(e.distribution)}}}),getComposes:e.query({query:function(e){return{url:"/composes",params:{limit:e.limit,offset:e.offset,ignoreImageTypes:e.ignoreImageTypes}}}}),getComposeStatus:e.query({query:function(e){return{url:"/composes/".concat(e.composeId)}}}),cloneCompose:e.mutation({query:function(e){return{url:"/composes/".concat(e.composeId,"/clone"),method:"POST",body:e.cloneRequest}}}),getComposeClones:e.query({query:function(e){return{url:"/composes/".concat(e.composeId,"/clones"),params:{limit:e.limit,offset:e.offset}}}}),getCloneStatus:e.query({query:function(e){return{url:"/clones/".concat(e.id)}}}),composeImage:e.mutation({query:function(e){return{url:"/compose",method:"POST",body:e.composeRequest}}}),getPackages:e.query({query:function(e){return{url:"/packages",params:{distribution:e.distribution,architecture:e.architecture,search:e.search,limit:e.limit,offset:e.offset}}}}),getOscapProfiles:e.query({query:function(e){return{url:"/oscap/".concat(e.distribution,"/profiles")}}}),getOscapCustomizations:e.query({query:function(e){return{url:"/oscap/".concat(e.distribution,"/").concat(e.profile,"/customizations")}}})}},overrideExisting:!1}),s=o.useGetArchitecturesQuery,u=o.useGetComposesQuery,c=o.useGetComposeStatusQuery,l=o.useCloneComposeMutation,d=o.useGetComposeClonesQuery,p=o.useGetCloneStatusQuery,m=o.useComposeImageMutation,g=(o.useGetPackagesQuery,o.useGetOscapProfilesQuery),f=o.useGetOscapCustomizationsQuery},56594:(e,t,r)=>{"use strict";r.d(t,{h:()=>j});var n=r(83215),a=r(24268),i=r(38756),o=r.n(i),s=r(4942);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var c=(0,a.oM)({name:"clones",initialState:{allIds:[],byId:{},error:null},reducers:{cloneAdded:function(e,t){e.allIds.includes(t.payload.clone.id)||e.allIds.push(t.payload.clone.id),e.byId[t.payload.clone.id]=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t.payload.clone),e.byId[t.payload.clone.id].parent=t.payload.parent,e.error=null},cloneUpdatedStatus:function(e,t){var r={status:t.payload.status.status,upload_status:t.payload.status};e.byId[t.payload.id].image_status=r}}}),l=c.actions;l.cloneAdded,l.cloneUpdatedStatus;const d=c.reducer;var p=r(93433),m=r(22222),g=(0,a.oM)({name:"composes",initialState:{count:0,allIds:[],byId:{},error:null},reducers:{composeAdded:function(e,t){e.allIds.includes(t.payload.compose.id)||(t.payload.insert?e.allIds.unshift(t.payload.compose.id):e.allIds.push(t.payload.compose.id)),e.byId[t.payload.compose.id]=t.payload.compose,e.byId[t.payload.compose.id].clones||(e.byId[t.payload.compose.id].clones=[]),e.error=null},composesUpdatedCount:function(e,t){e.count=t.payload.count},composeUpdatedStatus:function(e,t){e.byId[t.payload.id].image_status=t.payload.status}},extraReducers:function(e){e.addCase("clones/cloneAdded",(function(e,t){e.byId[t.payload.parent].clones.push(t.payload.clone.id)}))}}),f=(0,m.P1)([function(e,t){var r,n,a,i,o,s,u=e.composes.byId[t];return void 0!==u?{created_at:u.created_at,id:u.id,imageName:u.image_name||u.id,imageDescription:u.image_description||"",region:null===(r=u.image_status)||void 0===r||null===(r=r.upload_status)||void 0===r||null===(r=r.options)||void 0===r?void 0:r.region,ami:null===(n=u.image_status)||void 0===n||null===(n=n.upload_status)||void 0===n||null===(n=n.options)||void 0===n?void 0:n.ami,share_with_accounts:null===(a=u.request.image_requests[0].upload_request)||void 0===a?void 0:a.options.share_with_accounts,share_with_sources:null===(i=u.request.image_requests[0].upload_request)||void 0===i?void 0:i.options.share_with_sources,status:null===(o=u.image_status)||void 0===o?void 0:o.status,clones:(0,p.Z)(u.clones),imageType:u.request.image_requests[0].image_type,uploadType:u.request.image_requests[0].upload_request.type,uploadOptions:u.request.image_requests[0].upload_request.options,uploadStatus:null===(s=u.image_status)||void 0===s?void 0:s.upload_status,request:u.request,architecture:u.request.image_requests[0].architecture,isClone:!1}:null},function(e,t){var r=e.composes.byId[t];return r&&0!==r.clones.length?r.clones.map((function(t){var r,n,a=e.clones.byId[t];return{created_at:a.created_at,id:a.id,region:a.request.region,ami:null===(r=a.image_status)||void 0===r||null===(r=r.upload_status)||void 0===r||null===(r=r.options)||void 0===r?void 0:r.ami,share_with_accounts:a.request.share_with_accounts,share_with_sources:a.request.share_with_sources,status:null===(n=a.image_status)||void 0===n?void 0:n.status}})):[]}],(function(e,t){return[e].concat((0,p.Z)(t))})),y=((0,m.P1)([f],(function(e){return e.map((function(e){return null!==e?e.status:null}))})),g.actions);y.composeAdded,y.composesUpdatedCount,y.composeUpdatedStatus;const h=g.reducer;var v,b=r(25982),I=r(30848),w=r(45673),S=r(58061),q=(0,I.LC)({reducerPath:"edgeApi",baseQuery:(0,w.ni)({baseUrl:S.Ds}),endpoints:function(){return{}}}).injectEndpoints({endpoints:function(e){return{listAllImageSets:e.query({query:function(e){return{url:"/image-sets",params:{sort_by:e.sortBy,name:e.name,status:e.status,limit:e.limit,offset:e.offset}}}}),getImageSetsView:e.query({query:function(e){return{url:"/image-sets/view",params:{sort_by:e.sortBy,name:e.name,status:e.status,id:e.id,limit:e.limit,offset:e.offset}}}}),getImageSetImageView:e.query({query:function(e){return{url:"/image-sets/view/".concat(e.imageSetId,"/versions/").concat(e.imageId)}}}),getAllImageSetImagesView:e.query({query:function(e){return{url:"/image-sets/view/".concat(e.imageSetId,"/versions"),params:{sort_by:e.sortBy,status:e.status,version:e.version,limit:e.limit,offset:e.offset}}}}),deleteImageSet:e.mutation({query:function(e){return{url:"/image-sets/".concat(e.imageSetId),method:"DELETE"}}}),getAllImages:e.query({query:function(e){return{url:"/images",params:{limit:e.limit,offset:e.offset,sort_by:e.sortBy,name:e.name,status:e.status,distribution:e.distribution,created_at:e.createdAt}}}}),createImage:e.mutation({query:function(e){return{url:"/images",method:"POST",body:e.createImage}}}),checkImageName:e.mutation({query:function(e){return{url:"/images/checkImageName",method:"POST",body:e.createImage}}}),createInstallerForImage:e.mutation({query:function(e){return{url:"/images/".concat(e.imageId,"/installer"),method:"POST",body:e.createImage}}}),createKickStartForImage:e.mutation({query:function(e){return{url:"/images/".concat(e.imageId,"/kickstart"),method:"POST",body:e.createImage}}}),getMetadataForImage:e.query({query:function(e){return{url:"/images/".concat(e.imageId,"/metadata")}}}),getRepoForImage:e.query({query:function(e){return{url:"/images/".concat(e.imageId,"/repo")}}}),retryCreateImage:e.mutation({query:function(e){return{url:"/images/".concat(e.imageId,"/retry"),method:"POST",body:e.createImage}}}),createImageUpdate:e.mutation({query:function(e){return{url:"/images/".concat(e.imageId,"/update"),method:"POST",body:e.createImage}}}),getImageByOstree:e.query({query:function(e){return{url:"/images/".concat(e.ostreeCommitHash,"/info")}}})}},overrideExisting:!1}),C=(q.useListAllImageSetsQuery,q.useGetImageSetsViewQuery,q.useGetImageSetImageViewQuery,q.useGetAllImageSetImagesViewQuery,q.useDeleteImageSetMutation,q.useGetAllImagesQuery,q.useCreateImageMutation,q.useCheckImageNameMutation,q.useCreateInstallerForImageMutation,q.useCreateKickStartForImageMutation,q.useGetMetadataForImageQuery,q.useGetRepoForImageQuery,q.useRetryCreateImageMutation,q.useCreateImageUpdateMutation,q.useGetImageByOstreeQuery,r(23753)),_=function(e,t,r,n){return new(r||(r=Promise))((function(a,i){function o(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,s)}u((n=n.apply(e,t||[])).next())}))},P=function(e,t){var r,n,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(u){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(o=0)),o;)try{if(r=1,n&&(a=2&s[0]?n.return:s[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,s[1])).done)return a;switch(n=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){o.label=s[1];break}if(6===s[0]&&o.label<a[1]){o.label=a[1],a=s;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(s);break}a[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],n=0}finally{r=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}},O=C.qd.enhanceEndpoints({addTagTypes:["Clone","Compose"],endpoints:{getComposes:{providesTags:function(){return[{type:"Compose"}]}},getComposeClones:{providesTags:function(e,t,r){return[{type:"Clone",id:r.composeId}]}},cloneCompose:{onQueryStarted:function(e,t){var r=e.composeId,a=(e.cloneRequest,t.dispatch),i=t.queryFulfilled;return _(void 0,void 0,void 0,(function(){return P(this,(function(e){return i.then((function(){a(C.qd.util.invalidateTags([{type:"Clone",id:r}])),a((0,n.wN)({variant:"success",title:"Your image is being shared"}))})).catch((function(e){a((0,n.wN)({variant:"danger",title:"Your image could not be shared",description:"Status code ".concat(e.status,": ").concat(e.data.errors[0].detail)}))})),[2]}))}))}},composeImage:{onQueryStarted:function(e,t){e.composeRequest;var r=t.dispatch,a=t.queryFulfilled;return _(void 0,void 0,void 0,(function(){return P(this,(function(e){return a.then((function(){r(C.qd.util.invalidateTags(["Compose"])),r((0,n.wN)({variant:"success",title:"Your image is being created"}))})).catch((function(e){var t,a,i,o,s=e.response.statusText;(null===(a=null===(t=e.response.data)||void 0===t?void 0:t.errors[0])||void 0===a?void 0:a.detail)&&(s=null===(o=null===(i=e.response.data)||void 0===i?void 0:i.errors[0])||void 0===o?void 0:o.detail),r((0,n.wN)({variant:"danger",title:"Your image could not be created",description:"Status code "+e.response.status+": "+s}))})),[2]}))}))}}}}),E=r(54362),x=r(966),R=((v={clones:d,composes:h})[b.GF.reducerPath]=b.GF.reducer,v[q.reducerPath]=q.reducer,v[O.reducerPath]=O.reducer,v[x.Op.reducerPath]=x.Op.reducer,v[E.A0.reducerPath]=E.A0.reducer,v.notifications=n.ee,v),j=(0,a.xC)({reducer:R,middleware:function(e){return e().concat(o(),b.GF.middleware,O.middleware,x.Op.middleware,E.A0.middleware)}})},54362:(e,t,r)=>{"use strict";r.d(t,{A0:()=>o,w6:()=>s,ag:()=>u});var n=r(30848),a=r(45673),i=r(58061),o=(0,n.LC)({reducerPath:"provisioningApi",baseQuery:(0,a.ni)({baseUrl:i.kQ}),endpoints:function(){return{}}}).injectEndpoints({endpoints:function(e){return{getSourceList:e.query({query:function(e){return{url:"/sources",params:{provider:e.provider}}}}),getSourceUploadInfo:e.query({query:function(e){return{url:"/sources/".concat(e.id,"/upload_info")}}})}},overrideExisting:!1}),s=o.useGetSourceListQuery,u=o.useGetSourceUploadInfoQuery},966:(e,t,r)=>{"use strict";r.d(t,{Op:()=>o,NK:()=>s,M2:()=>u});var n=r(30848),a=r(45673),i=r(58061),o=(0,n.LC)({reducerPath:"rhsmApi",baseQuery:(0,a.ni)({baseUrl:i.UD}),endpoints:function(){return{}}}).injectEndpoints({endpoints:function(e){return{listActivationKeys:e.query({query:function(){return{url:"/activation_keys"}}}),showActivationKey:e.query({query:function(e){return{url:"/activation_keys/".concat(e.name)}}})}},overrideExisting:!1}),s=o.useListActivationKeysQuery,u=o.useShowActivationKeyQuery},45467:()=>{},81754:()=>{},11452:()=>{},34946:()=>{},80598:()=>{},32857:()=>{},10108:()=>{},81320:()=>{},90479:()=>{},8572:()=>{},98379:()=>{},46928:()=>{},66822:()=>{},49854:()=>{},87234:()=>{},74181:()=>{},11177:()=>{}}]);
//# sourceMappingURL=../sourcemaps/636.ee2900497400965af5e7a70680d2ca57.js.map