(self.webpackChunkimageBuilder=self.webpackChunkimageBuilder||[]).push([[2201],{76828:(e,t,r)=>{"use strict";r.d(t,{Z:()=>j});var n=r(32747),i=r.n(n),a=r(55140),o=r(51344),u=r(70743),s=r(74432),c=r(93654),l=r(22663),d=r(46639),p=r(20167),m=r(46987),f=r(55808);const g=function(){var e=(0,u.I0)(),t=(0,m.B)(e),r=(0,s.useFlag)("edgeParity.image-list");return(0,s.useFlag)("image-builder.edge.local-image-table")?i().createElement("div",null):r?i().createElement(l.Z,{appName:"edge",module:"./ImagesDetail",ErrorComponent:i().createElement(d.Z,null),navigateProp:c.useNavigate,locationProp:c.useLocation,notificationProp:t,pathPrefix:(0,f.y)(""),urlName:m.P,paramsProp:c.useParams}):i().createElement(p.Z,null)};var h=r(85893),y=r(1704),v=r(24307),b=r(84213),w=r(43047),S=r(58061),I=r(23753),q=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o},C=function(e,t,r){if(r||2===arguments.length)for(var n,i=0,a=t.length;i<a;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))};const P=function(e){var t=e.composeId,r=e.handleClose,i=(0,c.useNavigate)(),a=q((0,n.useState)(!1),2),o=a[0],u=a[1],s=q((0,n.useState)(!1),2),l=s[0],d=s[1],p=q((0,n.useState)(y.ValidatedOptions.default),2),m=p[0],g=p[1],P=S.Wp,x=q((0,n.useState)(""),2),E=x[0],T=x[1],A=q((0,n.useState)([]),2),R=A[0],O=A[1],j=q((0,n.useState)(P),2),M=j[0],k=j[1];(0,n.useEffect)((function(){var e=P;E&&((e=P.filter((function(e){return e.value.toLowerCase().includes(E.toLowerCase())}))).length||(e=[{disableRegion:!1,description:'No results found for "'.concat(E,'"'),value:"empty"}]),o||u(!0)),k(e)}),[E,o,P]);var G=function(e,t){T(t)},B=function(e){e&&"no results"!==e?(O(R.includes(e)?R.filter((function(t){return t!==e})):C(C([],q(R),!1),[e],!1)),g(y.ValidatedOptions.success)):g(y.ValidatedOptions.error)},Q=q((0,I.LX)(),1)[0],_=(0,I.OZ)({composeId:t}),U=_.data;if(_.isSuccess){var F=function(){R.length||g(y.ValidatedOptions.error),u(!o)};return(0,h.jsxs)(y.Form,{children:[(0,h.jsx)("span",{id:"Clone this image",hidden:!0,children:"Select a region"}),(0,h.jsxs)(y.FormGroup,{label:"Select region",isRequired:!0,labelIcon:(0,h.jsx)(y.Popover,{headerContent:(0,h.jsx)("div",{children:"Sharing images to other regions"}),bodyContent:(0,h.jsx)("div",{children:"Your image will be built, uploaded to AWS, and shared to the regions you select. The shared image will expire within 14 days. To permanently access the image, copy the image, which will be shared to your account by Red Hat, to your own AWS account."}),children:(0,h.jsx)(y.Button,{variant:"plain","aria-label":"About regions",className:"pf-u-pl-sm header-button",isInline:!0,children:(0,h.jsx)(b.by,{})})}),children:[(0,h.jsx)(y.Select,{isScrollable:!0,isOpen:o,selected:R,onSelect:function(e,t){return B(t)},onOpenChange:F,toggle:function(e){return(0,h.jsx)(y.MenuToggle,{variant:"typeahead",onClick:F,innerRef:e,isExpanded:o,isFullWidth:!0,children:(0,h.jsxs)(y.TextInputGroup,{isPlain:!0,children:[(0,h.jsx)(y.TextInputGroupMain,{value:E,onClick:F,onChange:G,placeholder:"Select region",isExpanded:o,children:(0,h.jsx)(y.ChipGroup,{"aria-label":"Selected regions",children:R.map((function(e,t){return(0,h.jsx)(y.Chip,{onClick:function(t){t.stopPropagation(),B(e)},children:e},t)}))})}),(0,h.jsx)(y.TextInputGroupUtilities,{children:R.length>0&&(0,h.jsx)(y.Button,{variant:"plain",onClick:function(){T(""),O([]),g(y.ValidatedOptions.error)},"aria-label":"Clear input value",children:(0,h.jsx)(v.q1,{"aria-hidden":!0})})})]})})},children:(0,h.jsx)(y.SelectList,{isAriaMultiselectable:!0,children:M.map((function(e){return(0,h.jsx)(y.SelectOption,{isDisabled:e.disableRegion,description:e.value,value:e.value,children:e.description},e.value)}))})}),"success"!==m&&(0,h.jsx)(y.FormHelperText,{children:(0,h.jsx)(y.HelperText,{children:(0,h.jsx)(y.HelperTextItem,{icon:(0,h.jsx)(w.$O,{}),variant:m,children:"Select at least one region to share to."})})})]}),(0,h.jsxs)(y.ActionGroup,{children:[(0,h.jsx)(y.Button,{onClick:function(){return e=void 0,r=void 0,a=function(){var e;return function(e,t){var r,n,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(u){return function(s){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,u[0]&&(o=0)),o;)try{if(r=1,n&&(i=2&u[0]?n.return:u[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,u[1])).done)return i;switch(n=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,n=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==u[0]&&2!==u[0])){o=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){o.label=u[1];break}if(6===u[0]&&o.label<i[1]){o.label=i[1],i=u;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(u);break}i[2]&&o.ops.pop(),o.trys.pop();continue}u=t.call(e,o)}catch(e){u=[6,e],n=0}finally{r=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,s])}}}(this,(function(r){switch(r.label){case 0:return d(!0),e=function(e,t,r){return r.map((function(r){var n=t.request.image_requests[0].upload_request.options;return{composeId:e,cloneRequest:{region:r,share_with_sources:"share_with_sources"in n?n.share_with_sources:void 0,share_with_accounts:"share_with_accounts"in n?n.share_with_accounts:void 0}}}))}(t,U,R),[4,Promise.allSettled(e.map((function(e){return Q(e)})))];case 1:return r.sent(),i((0,f.y)("")),[2]}}))},new((n=void 0)||(n=Promise))((function(t,i){function o(e){try{s(a.next(e))}catch(e){i(e)}}function u(e){try{s(a.throw(e))}catch(e){i(e)}}function s(e){var r;e.done?t(e.value):(r=e.value,r instanceof n?r:new n((function(e){e(r)}))).then(o,u)}s((a=a.apply(e,r||[])).next())}));var e,r,n,a},variant:"primary",isDisabled:0===R.length||l,isLoading:l,children:"Share"},"share"),(0,h.jsx)(y.Button,{variant:"link",onClick:r,children:"Cancel"},"cancel")]})]})}},x=function(){var e=(0,c.useNavigate)(),t=function(){return e((0,f.y)(""))},r=(0,c.useParams)().composeId,i=(0,n.useMemo)((function(){var e=document.querySelector(S.sn);return null===e?void 0:e}),[]);if(r)return(0,h.jsx)(y.Modal,{isOpen:!0,variant:"small","aria-label":"Share to new region",onClose:t,title:"Share to new region",description:"Configure new regions for this image that will run on your AWS. All the\n        regions will launch with the same configuration.",appendTo:i,children:(0,h.jsx)(P,{composeId:r,handleClose:t})});t()};var E=r(34155),T=(0,n.lazy)((function(){return Promise.all([r.e(9669),r.e(4663),r.e(3980),r.e(2694),r.e(3725)]).then(r.bind(r,38604))})),A=(0,n.lazy)((function(){return Promise.all([r.e(9688),r.e(3329),r.e(6361),r.e(4627),r.e(757),r.e(9669),r.e(7161),r.e(5320),r.e(7160),r.e(3980),r.e(2694),r.e(2272)]).then(r.bind(r,63652))})),R=(0,n.lazy)((function(){return Promise.all([r.e(6361),r.e(5320),r.e(3980),r.e(2694),r.e(8467)]).then(r.bind(r,24894))})),O=function(){var e=(0,s.useFlag)("edgeParity.image-list"),t=(0,s.useFlag)("image-builder.new-wizard.enabled")||!0===E.env.EXPERIMENTAL;return i().createElement(c.Routes,null,i().createElement(c.Route,{path:"*",element:i().createElement(n.Suspense,null,i().createElement(T,null))},i().createElement(c.Route,{path:"share/:composeId",element:i().createElement(x,null)})),i().createElement(c.Route,{path:"imagewizard/:composeId?",element:i().createElement(n.Suspense,null,t?i().createElement(R,null):i().createElement(A,null))}),e&&i().createElement(c.Route,{path:"/".concat(m.P,"/:imageId"),element:i().createElement(g,null)},i().createElement(c.Route,{path:"*",element:i().createElement(g,null)}),i().createElement(c.Route,{path:"versions/:imageVersionId/*",element:i().createElement(g,null)})))};const j=function(e){var t=(0,u.oR)(),r=(0,a.Z)(),s=r.hideGlobalFilter,c=r.updateDocumentTitle;return(0,n.useEffect)((function(){c("Image Builder | Red Hat Insights"),s()}),[s,c]),i().createElement(i().Fragment,null,i().createElement(o.ZP,{store:t}),i().createElement(O,{childProps:e}))}},46987:(e,t,r)=>{"use strict";r.d(t,{B:()=>s,P:()=>u});var n=r(4942),i=r(83215);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u="manage-edge-images",s=function(e){return{hasInfo:function(t){e(o({},(0,i.wN)(o({variant:"info"},t))))},hasSuccess:function(t){e(o({},(0,i.wN)(o({variant:"success"},t))))},err:function(t,r){e(o({},(0,i.wN)(o(o({variant:"danger"},t),{},{description:null!=r&&r.Title?"".concat(t.description,": ").concat(r.Title):t.description}))))}}}},55808:(e,t,r)=>{"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"/insights/image-builder".concat(e.length>0?"/".concat(e):"")}r.d(t,{y:()=>n})},58061:(e,t,r)=>{"use strict";r.d(t,{$J:()=>o,DO:()=>n,Ds:()=>a,F2:()=>s,FY:()=>E,IS:()=>y,LB:()=>C,NF:()=>I,PV:()=>c,UD:()=>i,VL:()=>w,Wp:()=>q,Xi:()=>b,at:()=>g,bR:()=>p,fI:()=>m,g7:()=>f,gw:()=>S,jw:()=>P,kQ:()=>u,ky:()=>v,qq:()=>l,rh:()=>h,sn:()=>x,xG:()=>d});var n="/api/image-builder/v1",i="/api/rhsm/v2",a="/api/edge/v1",o="/api/content-sources/v1",u="/api/provisioning/v1",s="rhel-89",c="rhel-93",l="centos-8",d="centos-9",p="x86_64",m=Math.pow(1024,1),f=Math.pow(1024,2),g=Math.pow(1024,3),h=new Map([[c,"Red Hat Enterprise Linux (RHEL) 9"],[s,"Red Hat Enterprise Linux (RHEL) 8"],[d,"CentOS Stream 9"],[l,"CentOS Stream 8"]]),y=["2022-05-18","2027-05-31"],v=["2019-05-07","2024-05-31"],b=["2027-05-31","2032-05-31"],w=["2024-05-31","2029-05-31"],S=[p,"aarch64"],I="us-east-1",q=[{description:"US East (Ohio)",value:"us-east-2",disableRegion:!1},{description:"US East (N. Virginia)",value:"us-east-1",disableRegion:!0},{description:"US West (N. California)",value:"us-west-1",disableRegion:!1},{description:"US West (Oregon)",value:"us-west-2",disableRegion:!1},{description:"Africa (Cape Town)",value:"af-south-1",disableRegion:!0},{description:"Asia Pacific (Hong Kong)",value:"ap-east-1",disableRegion:!0},{description:"Asia Pacific (Jakarta)",value:"ap-southeast-3",disableRegion:!0},{description:"Asia Pacific (Mumbai)",value:"ap-south-1",disableRegion:!1},{description:"Asia Pacific (Osaka)",value:"ap-northeast-3",disableRegion:!1},{description:"Asia Pacific (Seoul)",value:"ap-northeast-2",disableRegion:!1},{description:"Asia Pacific (Singapore)",value:"ap-southeast-1",disableRegion:!1},{description:"Asia Pacific (Sydney)",value:"ap-southeast-2",disableRegion:!1},{description:"Asia Pacific (Tokyo)",value:"ap-northeast-1",disableRegion:!1},{description:"Canada (Central)",value:"ca-central-1",disableRegion:!1},{description:"Europe (Frankfurt)",value:"eu-central-1",disableRegion:!1},{description:"Europe (Ireland)",value:"eu-west-1",disableRegion:!1},{description:"Europe (London)",value:"eu-west-2",disableRegion:!1},{description:"Europe (Milan)",value:"eu-south-1",disableRegion:!0},{description:"Europe (Paris)",value:"eu-west-3",disableRegion:!1},{description:"Europe (Stockholm)",value:"eu-north-1",disableRegion:!1},{description:"Middle East (Bahrain)",value:"me-south-1",disableRegion:!0},{description:"Middle East (UAE)",value:"me-central-1",disableRegion:!0},{description:"South America (São Paolo)",value:"sa-east-1",disableRegion:!1}],C=6,P=7,x=".pf-c-page.chr-c-page",E=8e3},25982:(e,t,r)=>{"use strict";r.d(t,{GF:()=>o,UQ:()=>u});var n=r(11132),i=r(57561),a=r(58061),o=(0,n.LC)({reducerPath:"contentSourcesApi",baseQuery:(0,i.ni)({baseUrl:a.$J}),endpoints:function(){return{}}}).injectEndpoints({endpoints:function(e){return{listRepositories:e.query({query:function(e){return{url:"/repositories/",params:{offset:e.offset,limit:e.limit,version:e.version,arch:e.arch,available_for_version:e.availableForVersion,available_for_arch:e.availableForArch,search:e.search,name:e.name,url:e.url,sort_by:e.sortBy,status:e.status,origin:e.origin,content_type:e.contentType}}}}),listRepositoriesRpms:e.query({query:function(e){return{url:"/repositories/".concat(e.uuid,"/rpms"),params:{limit:e.limit,offset:e.offset,search:e.search,sort_by:e.sortBy}}}})}},overrideExisting:!1}),u=o.useListRepositoriesQuery;o.useListRepositoriesRpmsQuery},23753:(e,t,r)=>{"use strict";r.d(t,{qd:()=>s,LX:()=>p,oC:()=>g,xW:()=>c,tM:()=>v,pM:()=>f,oM:()=>m,OZ:()=>d,TU:()=>l,Wo:()=>y,YA:()=>h});var n=r(11132),i=r(57561),a=r(58061),o=function(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},u=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o},s=(0,n.LC)({reducerPath:"imageBuilderApi",baseQuery:(0,i.ni)({baseUrl:a.DO,paramsSerializer:function(e){var t,r,n,i,a=new URLSearchParams;try{for(var s=o(Object.entries(e)),c=s.next();!c.done;c=s.next()){var l=u(c.value,2),d=l[0],p=l[1];if(void 0!==p)if(Array.isArray(p))try{for(var m=(n=void 0,o(p)),f=m.next();!f.done;f=m.next()){var g=f.value;a.append(d,g)}}catch(e){n={error:e}}finally{try{f&&!f.done&&(i=m.return)&&i.call(m)}finally{if(n)throw n.error}}else a.append(d,p)}}catch(e){t={error:e}}finally{try{c&&!c.done&&(r=s.return)&&r.call(s)}finally{if(t)throw t.error}}return a.toString()}}),endpoints:function(){return{}}}).injectEndpoints({endpoints:function(e){return{getArchitectures:e.query({query:function(e){return{url:"/architectures/".concat(e.distribution)}}}),getComposes:e.query({query:function(e){return{url:"/composes",params:{limit:e.limit,offset:e.offset,ignoreImageTypes:e.ignoreImageTypes}}}}),getComposeStatus:e.query({query:function(e){return{url:"/composes/".concat(e.composeId)}}}),cloneCompose:e.mutation({query:function(e){return{url:"/composes/".concat(e.composeId,"/clone"),method:"POST",body:e.cloneRequest}}}),getComposeClones:e.query({query:function(e){return{url:"/composes/".concat(e.composeId,"/clones"),params:{limit:e.limit,offset:e.offset}}}}),getCloneStatus:e.query({query:function(e){return{url:"/clones/".concat(e.id)}}}),composeImage:e.mutation({query:function(e){return{url:"/compose",method:"POST",body:e.composeRequest}}}),getPackages:e.query({query:function(e){return{url:"/packages",params:{distribution:e.distribution,architecture:e.architecture,search:e.search,limit:e.limit,offset:e.offset}}}}),getOscapProfiles:e.query({query:function(e){return{url:"/oscap/".concat(e.distribution,"/profiles")}}}),getOscapCustomizations:e.query({query:function(e){return{url:"/oscap/".concat(e.distribution,"/").concat(e.profile,"/customizations")}}}),createBlueprint:e.mutation({query:function(e){return{url:"/experimental/blueprint",method:"POST",body:e.createBlueprintRequest}}}),updateBlueprint:e.mutation({query:function(e){return{url:"/experimental/blueprint/".concat(e.id),method:"PUT",body:e.createBlueprintRequest}}}),composeBlueprint:e.mutation({query:function(e){return{url:"/experimental/blueprint/".concat(e.id,"/compose"),method:"POST"}}}),getBlueprints:e.query({query:function(e){return{url:"/experimental/blueprints",params:{search:e.search,limit:e.limit,offset:e.offset}}}}),getBlueprintComposes:e.query({query:function(e){return{url:"/experimental/blueprint/".concat(e.id,"/composes"),params:{blueprint_version:e.blueprintVersion,limit:e.limit,offset:e.offset,ignoreImageTypes:e.ignoreImageTypes}}}})}},overrideExisting:!1}),c=s.useGetArchitecturesQuery,l=s.useGetComposesQuery,d=s.useGetComposeStatusQuery,p=s.useCloneComposeMutation,m=s.useGetComposeClonesQuery,f=s.useGetCloneStatusQuery,g=s.useComposeImageMutation,h=(s.useGetPackagesQuery,s.useGetOscapProfilesQuery),y=s.useGetOscapCustomizationsQuery,v=(s.useCreateBlueprintMutation,s.useUpdateBlueprintMutation,s.useComposeBlueprintMutation,s.useGetBlueprintsQuery);s.useGetBlueprintComposesQuery},85546:(e,t,r)=>{"use strict";r.d(t,{h:()=>C});var n,i=r(83215),a=r(76438),o=r(35178),u=r(46654),s=r.n(u),c=r(25982),l=r(11132),d=r(57561),p=r(58061),m=(0,l.LC)({reducerPath:"edgeApi",baseQuery:(0,d.ni)({baseUrl:p.Ds}),endpoints:function(){return{}}}).injectEndpoints({endpoints:function(e){return{listAllImageSets:e.query({query:function(e){return{url:"/image-sets",params:{sort_by:e.sortBy,name:e.name,status:e.status,limit:e.limit,offset:e.offset}}}}),getImageSetsView:e.query({query:function(e){return{url:"/image-sets/view",params:{sort_by:e.sortBy,name:e.name,status:e.status,id:e.id,limit:e.limit,offset:e.offset}}}}),getImageSetImageView:e.query({query:function(e){return{url:"/image-sets/view/".concat(e.imageSetId,"/versions/").concat(e.imageId)}}}),getAllImageSetImagesView:e.query({query:function(e){return{url:"/image-sets/view/".concat(e.imageSetId,"/versions"),params:{sort_by:e.sortBy,status:e.status,version:e.version,limit:e.limit,offset:e.offset}}}}),deleteImageSet:e.mutation({query:function(e){return{url:"/image-sets/".concat(e.imageSetId),method:"DELETE"}}}),getAllImages:e.query({query:function(e){return{url:"/images",params:{limit:e.limit,offset:e.offset,sort_by:e.sortBy,name:e.name,status:e.status,distribution:e.distribution,created_at:e.createdAt}}}}),createImage:e.mutation({query:function(e){return{url:"/images",method:"POST",body:e.createImage}}}),checkImageName:e.mutation({query:function(e){return{url:"/images/checkImageName",method:"POST",body:e.createImage}}}),createInstallerForImage:e.mutation({query:function(e){return{url:"/images/".concat(e.imageId,"/installer"),method:"POST",body:e.createImage}}}),createKickStartForImage:e.mutation({query:function(e){return{url:"/images/".concat(e.imageId,"/kickstart"),method:"POST",body:e.createImage}}}),getMetadataForImage:e.query({query:function(e){return{url:"/images/".concat(e.imageId,"/metadata")}}}),getRepoForImage:e.query({query:function(e){return{url:"/images/".concat(e.imageId,"/repo")}}}),retryCreateImage:e.mutation({query:function(e){return{url:"/images/".concat(e.imageId,"/retry"),method:"POST",body:e.createImage}}}),createImageUpdate:e.mutation({query:function(e){return{url:"/images/".concat(e.imageId,"/update"),method:"POST",body:e.createImage}}}),getImageByOstree:e.query({query:function(e){return{url:"/images/".concat(e.ostreeCommitHash,"/info")}}})}},overrideExisting:!1}),f=(m.useListAllImageSetsQuery,m.useGetImageSetsViewQuery,m.useGetImageSetImageViewQuery,m.useGetAllImageSetImagesViewQuery,m.useDeleteImageSetMutation,m.useGetAllImagesQuery,m.useCreateImageMutation,m.useCheckImageNameMutation,m.useCreateInstallerForImageMutation,m.useCreateKickStartForImageMutation,m.useGetMetadataForImageQuery,m.useGetRepoForImageQuery,m.useRetryCreateImageMutation,m.useCreateImageUpdateMutation,m.useGetImageByOstreeQuery,r(23753)),g=function(e,t,r,n){return new(r||(r=Promise))((function(i,a){function o(e){try{s(n.next(e))}catch(e){a(e)}}function u(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,u)}s((n=n.apply(e,t||[])).next())}))},h=function(e,t){var r,n,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(u){return function(s){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,u[0]&&(o=0)),o;)try{if(r=1,n&&(i=2&u[0]?n.return:u[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,u[1])).done)return i;switch(n=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,n=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==u[0]&&2!==u[0])){o=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){o.label=u[1];break}if(6===u[0]&&o.label<i[1]){o.label=i[1],i=u;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(u);break}i[2]&&o.ops.pop(),o.trys.pop();continue}u=t.call(e,o)}catch(e){u=[6,e],n=0}finally{r=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,s])}}},y=f.qd.enhanceEndpoints({addTagTypes:["Clone","Compose"],endpoints:{getComposes:{providesTags:function(){return[{type:"Compose"}]}},getComposeClones:{providesTags:function(e,t,r){return[{type:"Clone",id:r.composeId}]}},cloneCompose:{onQueryStarted:function(e,t){var r=e.composeId,n=e.cloneRequest,a=t.dispatch,o=t.queryFulfilled;return g(void 0,void 0,void 0,(function(){return h(this,(function(e){return o.then((function(){a(f.qd.util.invalidateTags([{type:"Clone",id:r}])),a((0,i.wN)({variant:"success",title:"Your image is being shared to "+n.region+" region"}))})).catch((function(e){a((0,i.wN)({variant:"danger",title:"Your image could not be shared",description:"Status code ".concat(e.status,": ").concat(e.data.errors[0].detail)}))})),[2]}))}))}},composeImage:{onQueryStarted:function(e,t){var r=t.dispatch,n=t.queryFulfilled;return g(void 0,void 0,void 0,(function(){return h(this,(function(e){return n.then((function(){r(f.qd.util.invalidateTags(["Compose"])),r((0,i.wN)({variant:"success",title:"Your image is being created"}))})).catch((function(e){var t,n,a,o,u=e.error.statusText;(null===(n=null===(t=e.error.data)||void 0===t?void 0:t.errors[0])||void 0===n?void 0:n.detail)&&(u=null===(o=null===(a=e.error.data)||void 0===a?void 0:a.errors[0])||void 0===o?void 0:o.detail),r((0,i.wN)({variant:"danger",title:"Your image could not be created",description:"Status code "+e.error.status+": "+u}))})),[2]}))}))}}}}),v=(0,o.e)(),b=v.startListening,w=r(54362),S=r(966),I=r(70113),q=(0,a.UY)(((n={})[c.GF.reducerPath]=c.GF.reducer,n[m.reducerPath]=m.reducer,n[y.reducerPath]=y.reducer,n[S.Op.reducerPath]=S.Op.reducer,n[w.A0.reducerPath]=w.A0.reducer,n.notifications=i.ee,n.wizard=I.ZP,n));b({actionCreator:I.Ks,effect:function(e,t){var r,n,i=t.getState(),a=(0,I.WQ)(i),o=(0,I.Bf)(i),u=e.payload,s=y.endpoints.getArchitectures.select({distribution:a})(i),c=null===(n=null===(r=null==s?void 0:s.data)||void 0===r?void 0:r.find((function(e){return e.arch===u})))||void 0===n?void 0:n.image_types,l=o.filter((function(e){return null==c?void 0:c.includes(e)}));t.dispatch((0,I.Mc)(l))}}),b({actionCreator:I.r_,effect:function(e,t){var r,n,i=t.getState(),a=e.payload,o=(0,I.Bf)(i),u=(0,I.jE)(i),s=y.endpoints.getArchitectures.select({distribution:a})(i),c=null===(n=null===(r=null==s?void 0:s.data)||void 0===r?void 0:r.find((function(e){return e.arch===u})))||void 0===n?void 0:n.image_types,l=o.filter((function(e){return null==c?void 0:c.includes(e)}));t.dispatch((0,I.Mc)(l))}});var C=(0,o.xC)({reducer:q,middleware:function(e){return e().prepend(v.middleware).concat(s(),c.GF.middleware,y.middleware,S.Op.middleware,w.A0.middleware)}})},54362:(e,t,r)=>{"use strict";r.d(t,{A0:()=>o,w6:()=>u,ag:()=>s});var n=r(11132),i=r(57561),a=r(58061),o=(0,n.LC)({reducerPath:"provisioningApi",baseQuery:(0,i.ni)({baseUrl:a.kQ}),endpoints:function(){return{}}}).injectEndpoints({endpoints:function(e){return{getSourceList:e.query({query:function(e){return{url:"/sources",params:{provider:e.provider}}}}),getSourceUploadInfo:e.query({query:function(e){return{url:"/sources/".concat(e.id,"/upload_info")}}})}},overrideExisting:!1}),u=o.useGetSourceListQuery,s=o.useGetSourceUploadInfoQuery},966:(e,t,r)=>{"use strict";r.d(t,{Op:()=>o,jE:()=>s,NK:()=>u,M2:()=>c});var n=r(11132),i=r(57561),a=r(58061),o=(0,n.LC)({reducerPath:"rhsmApi",baseQuery:(0,i.ni)({baseUrl:a.UD}),endpoints:function(){return{}}}).injectEndpoints({endpoints:function(e){return{listActivationKeys:e.query({query:function(){return{url:"/activation_keys"}}}),createActivationKeys:e.mutation({query:function(e){return{url:"/activation_keys",method:"POST",body:e.body}}}),showActivationKey:e.query({query:function(e){return{url:"/activation_keys/".concat(e.name)}}})}},overrideExisting:!1}),u=o.useListActivationKeysQuery,s=o.useCreateActivationKeysMutation,c=o.useShowActivationKeyQuery},70113:(e,t,r)=>{"use strict";r.d(t,{B2:()=>C,B7:()=>j,Bf:()=>c,Cs:()=>k,HS:()=>M,Ko:()=>d,Ks:()=>I,Mc:()=>x,PW:()=>y,PZ:()=>p,Ql:()=>g,Qy:()=>f,S9:()=>T,UZ:()=>P,WI:()=>m,WQ:()=>s,ZP:()=>G,_G:()=>h,_Q:()=>E,a6:()=>A,cr:()=>l,gy:()=>R,h2:()=>S,hl:()=>O,jE:()=>u,qZ:()=>b,r_:()=>q,xE:()=>w});var n,i=r(35178),a=r(58061),o={env:{serverUrl:void 0,baseUrl:void 0},architecture:a.bR,distribution:a.PV,imageTypes:[],aws:{accountId:void 0,shareMethod:"sources",source:void 0},gcp:{shareMethod:"withGoogle",accountType:"google",email:void 0},registration:{registrationType:"register-now-rhc",activationKey:""}},u=function(e){return e.wizard.architecture},s=function(e){return e.wizard.distribution},c=function(e){return e.wizard.imageTypes},l=function(e){return e.wizard.aws.accountId},d=function(e){return e.wizard.aws.source},p=function(e){return e.wizard.aws.shareMethod},m=function(e){return e.wizard.gcp.shareMethod},f=function(e){return e.wizard.gcp.accountType},g=function(e){return e.wizard.gcp.email},h=function(e){return e.wizard.registration.registrationType},y=function(e){return e.wizard.registration.activationKey},v=(0,i.oM)({name:"wizard",initialState:o,reducers:{initializeWizard:function(){return o},changeServerUrl:function(e,t){e.env.serverUrl=t.payload},changeBaseUrl:function(e,t){e.env.baseUrl=t.payload},changeArchitecture:function(e,t){e.architecture=t.payload},changeDistribution:function(e,t){e.distribution=t.payload},addImageType:function(e,t){e.imageTypes=e.imageTypes.filter((function(e){return e!==t.payload})),e.imageTypes.push(t.payload)},removeImageType:function(e,t){e.imageTypes=e.imageTypes.filter((function(e){return e!==t.payload}))},changeImageTypes:function(e,t){e.imageTypes=t.payload},changeAwsAccountId:function(e,t){e.aws.accountId=t.payload},changeAwsShareMethod:function(e,t){e.aws.shareMethod=t.payload},changeAwsSource:function(e,t){e.aws.source=t.payload},changeGcpShareMethod:function(e,t){switch(t.payload){case"withInsights":e.gcp.accountType=void 0,e.gcp.email=void 0;break;case"withGoogle":e.gcp.accountType="google"}e.gcp.shareMethod=t.payload},changeGcpAccountType:function(e,t){e.gcp.accountType=t.payload},changeGcpEmail:function(e,t){e.gcp.email=t.payload},changeRegistrationType:function(e,t){e.registration.registrationType=t.payload},changeActivationKey:function(e,t){e.registration.activationKey=t.payload}}}),b=(n=v.actions).initializeWizard,w=n.changeServerUrl,S=n.changeBaseUrl,I=n.changeArchitecture,q=n.changeDistribution,C=n.addImageType,P=n.removeImageType,x=n.changeImageTypes,E=n.changeAwsAccountId,T=n.changeAwsShareMethod,A=n.changeAwsSource,R=n.changeGcpShareMethod,O=n.changeGcpAccountType,j=n.changeGcpEmail,M=n.changeRegistrationType,k=n.changeActivationKey;const G=v.reducer},45467:()=>{},81754:()=>{},11452:()=>{},34946:()=>{},80598:()=>{},32857:()=>{},10108:()=>{},90479:()=>{},8572:()=>{},98379:()=>{},46928:()=>{},66822:()=>{},49854:()=>{},87234:()=>{},74181:()=>{}}]);
//# sourceMappingURL=../sourcemaps/2201.8b304c0b948fc7da1eff8bbc156b1f9d.js.map