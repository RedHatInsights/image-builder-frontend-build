(self.webpackChunkimage_builder=self.webpackChunkimage_builder||[]).push([[513],{97513:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>O});var n=a(6610),o=a(5991),r=a(10379),l=a(86089),i=a(77608),s=a(31154),c=a.n(s),u=a(16530),p=a(89277),m=a(25136),g=a(15265),d=a(55316),f=a(84213),h=a(28481),b=a(63349),v=a(45697),E=a.n(v),y=a(88931),_=a(13955),C=a(9942),P=a(7081),S=a(68778),A=a(43047),I=a(43957),T=a(94768),k=(a(91741),function(e){var t={success:[{icon:c().createElement(S.rE,{className:"success"}),text:"Ready"}],failure:[{icon:c().createElement(A.$O,{className:"error"}),text:"Image build failed"}],pending:[{icon:c().createElement(I.tu,null),text:"Image build, Upload, Cloud registration pending"}],running:[{icon:c().createElement(T.pG,{className:"pending"}),text:"Image build in progress"}],building:[{icon:c().createElement(T.pG,{className:"pending"}),text:"Image build in progress"}],uploading:[{icon:c().createElement(T.pG,{className:"pending"}),text:"Image upload in progress"}],registering:[{icon:c().createElement(T.pG,{className:"pending"}),text:"Cloud registration in progress"}]};return c().createElement(c().Fragment,null,t[e.status]&&t[e.status].map((function(e,t){return c().createElement(m.Flex,{key:t,className:"pf-u-align-items-baseline pf-m-nowrap"},c().createElement("div",null,e.icon),c().createElement("small",null,e.text))})))});k.propTypes={status:E().string};const x=k;var G=function(e){var t={"rhel-8":"RHEL 8","centos-8":"CentOS Stream 8"},a=t[e.release]?t[e.release]:e.release;return c().createElement(m.Label,{color:"blue"},a)};G.propTypes={release:E().string};const w=G;var B=function(e){var t={aws:"Amazon Web Services",azure:"Microsoft Azure",gcp:"Google Cloud Platform"};return c().createElement(c().Fragment,null,t[e.uploadType]?t[e.uploadType]:e.uploadType)};B.propTypes={uploadType:E().string};const D=B;var R=function(e){var t=e.imageStatus?e.imageStatus.upload_status:void 0;if(t){if("aws"===t.type){var a="https://console.aws.amazon.com/ec2/v2/home?region="+t.options.region+"#LaunchInstanceWizard:ami="+t.options.ami;return c().createElement(m.Button,{component:"a",target:"_blank",variant:"link",icon:c().createElement(g.LA,null),iconPosition:"right",isInline:!0,href:a},"Launch instance")}if("azure"===t.type){var n="https://portal.azure.com/#@"+e.uploadOptions.tenant_id+"/resource/subscriptions/"+e.uploadOptions.subscription_id+"/resourceGroups/"+e.uploadOptions.resource_group+"/providers/Microsoft.Compute/images/"+t.options.image_name;return c().createElement(m.Button,{component:"a",target:"_blank",variant:"link",icon:c().createElement(g.LA,null),iconPosition:"right",isInline:!0,href:n},"View uploaded image")}if("gcp"===t.type)return c().createElement(m.Popover,{"aria-label":"Popover with google cloud platform image details",maxWidth:"30rem",headerContent:"GCP image details",bodyContent:c().createElement(m.TextContent,null,c().createElement(m.Text,{component:m.TextVariants.p},"To use an Image Builder created Google Cloud Platform (GCP) image in your project, specify the project ID and image name in your templates and configurations."),c().createElement(m.Text,null,c().createElement("strong",null,"Project ID"),c().createElement("br",null),t.options.project_id),c().createElement(m.Text,null,c().createElement("strong",null,"Image Name"),c().createElement("br",null),t.options.image_name),c().createElement(m.Text,null,c().createElement("strong",null,"Shared with"),c().createElement("br",null),e.uploadOptions.share_with_accounts[0].split(":")[1]))},c().createElement(m.Button,{component:"a",target:"_blank",variant:"link"},"Image details"))}return null};R.propTypes={imageStatus:E().object,uploadOptions:E().object};const Z=R;var N=function(e){(0,r.Z)(p,e);var t,a,s=(t=p,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,i.Z)(t);if(a){var o=(0,i.Z)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return(0,l.Z)(this,e)});function p(e){var t;return(0,n.Z)(this,p),(t=s.call(this,e)).state={page:1,perPage:10},t.pollComposeStatuses=t.pollComposeStatuses.bind((0,b.Z)(t)),t.onSetPage=t.onSetPage.bind((0,b.Z)(t)),t.onPerPageSelect=t.onPerPageSelect.bind((0,b.Z)(t)),t.timestampToDisplayString=t.timestampToDisplayString.bind((0,b.Z)(t)),t}return(0,o.Z)(p,[{key:"componentDidMount",value:function(){var e=this;this.props.composesGet(this.state.perPage,0),this.interval=setInterval((function(){return e.pollComposeStatuses()}),8e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"pollComposeStatuses",value:function(){var e=this,t=this.props.composes;Object.entries(t.byId).map((function(t){var a=(0,h.Z)(t,2),n=a[0],o=a[1];"success"!==o.image_status.status&&"failure"!==o.image_status.status&&e.props.composeGetStatus(n)}))}},{key:"onSetPage",value:function(e,t){if(this.props.composes.count>this.props.composes.allIds.length){var a=(t-1)*this.state.perPage;this.props.composesGet(this.state.perPage,a)}this.setState({page:t})}},{key:"onPerPageSelect",value:function(e,t){this.props.composes.count>this.props.composes.allIds.length&&t>this.props.composes.allIds.length&&this.props.composesGet(t,0),this.setState({perPage:t,page:1})}},{key:"timestampToDisplayString",value:function(e){if(!e)return"";var t=e.slice(0,10),a=Date.parse(t);return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",year:"numeric"}).format(a)}},{key:"render",value:function(){var e=this,t=this.props.composes,a=(this.state.page-1)*this.state.perPage,n=a+this.state.perPage,o=t.allIds.slice(a,n).map((function(a){var n=t.byId[a];return{cells:[a,e.timestampToDisplayString(n.created_at),{title:c().createElement(w,{release:n.request.distribution})},{title:c().createElement(D,{uploadType:n.request.image_requests[0].upload_request.type})},{title:c().createElement(x,{status:n.image_status?n.image_status.status:""})},{title:c().createElement(Z,{imageStatus:n.image_status,uploadOptions:n.request.image_requests[0].upload_request.options})}]}}));return c().createElement(c().Fragment,null,0===t.allIds.length&&c().createElement(m.EmptyState,{variant:m.EmptyStateVariant.large,"data-testid":"empty-state"},c().createElement(m.EmptyStateIcon,{icon:P.wl}),c().createElement(m.Title,{headingLevel:"h4",size:"lg"},"Create an image"),c().createElement(m.EmptyStateBody,null,"Create OS images for deployment in Amazon Web Services, Microsoft Azure and Google Cloud Platform. Images can include a custom package set and an activation key to automate the registration process."),c().createElement(u.Link,{to:"/imagewizard",className:"pf-c-button pf-m-primary","data-testid":"create-image-action"},"Create image"),c().createElement(m.EmptyStateSecondaryActions,null,c().createElement(m.Button,{component:"a",target:"_blank",variant:"link",icon:c().createElement(g.LA,null),iconPosition:"right",isInline:!0,href:"\nhttps://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/uploading_a_customized_rhel_system_image_to_cloud_environments/index "},"Documentation")))||c().createElement(c().Fragment,null,c().createElement(m.Toolbar,null,c().createElement(m.ToolbarContent,null,c().createElement(m.ToolbarItem,null,c().createElement(u.Link,{to:"/imagewizard",className:"pf-c-button pf-m-primary","data-testid":"create-image-action"},"Create image")),c().createElement(m.ToolbarItem,{variant:"pagination",align:{default:"alignRight"}},c().createElement(m.Pagination,{itemCount:this.props.composes.count,perPage:this.state.perPage,page:this.state.page,onSetPage:this.onSetPage,onPerPageSelect:this.onPerPageSelect,widgetId:"compose-pagination","data-testid":"images-pagination",isCompact:!0})))),c().createElement(C.Table,{"aria-label":"Images",rows:o,cells:["Image","Created","Release","Target","Status",""],"data-testid":"images-table"},c().createElement(C.TableHeader,null),c().createElement(C.TableBody,null))))}}]),p}(s.Component);N.propTypes={composes:E().object,composesGet:E().func,composeGetStatus:E().func};const z=(0,y.connect)((function(e){return{composes:e.composes}}),(function(e){return{composesGet:function(t,a){return e(_.N.composesGet(t,a))},composeGetStatus:function(t){return e(_.N.composeGetStatus(t))}}}))(N);a(1230);var L=function(e){(0,r.Z)(u,e);var t,a,s=(t=u,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,i.Z)(t);if(a){var o=(0,i.Z)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return(0,l.Z)(this,e)});function u(e){return(0,n.Z)(this,u),s.call(this,e)}return(0,o.Z)(u,[{key:"render",value:function(){return c().createElement(c().Fragment,null,c().createElement(p.PageHeader,null,c().createElement(p.PageHeaderTitle,{className:"title",title:"Image Builder"}),c().createElement(m.Popover,{headerContent:"About Image Builder",bodyContent:c().createElement(m.TextContent,null,c().createElement(m.Text,null,"Image Builder is a service that allows you to create RHEL images and push them to cloud environments."),c().createElement(m.Button,{component:"a",target:"_blank",variant:"link",icon:c().createElement(g.LA,null),iconPosition:"right",isInline:!0,href:"\nhttps://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/uploading_a_customized_rhel_system_image_to_cloud_environments/index "},"Documentation"),c().createElement("br",null),c().createElement(m.Button,{component:"a",target:"_blank",variant:"link",icon:c().createElement(d.ET,null),iconPosition:"right",isInline:!0,href:"https://github.com/RedHatInsights/image-builder-frontend/tree/a3c9e955a1d4331dce35d2621269345b374a5aab"},"Contribute on GitHub"))},c().createElement("button",{type:"button","aria-label":"About image builder",className:"pf-c-form__group-label-help"},c().createElement(f.by,null)))),c().createElement("section",{className:"pf-l-page__main-section pf-c-page__main-section"},c().createElement(z,null)))}}]),u}(s.Component);const O=(0,u.withRouter)(L)},18484:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var n=a(94015),o=a.n(n),r=a(23645),l=a.n(r)()(o());l.push([e.id,".image-builder .error{color:var(--pf-global--danger-color--100)}.image-builder .success{color:var(--pf-global--success-color--100)}.image-builder .pending{color:var(--pf-global--info-color--100)}\n","",{version:3,sources:["webpack://./src/Components/ImagesTable/ImageBuildStatus.scss"],names:[],mappings:"AAAA,sBACO,yCAAyC,CADhD,wBAC0D,0CAA0C,CADpG,wBAC8G,uCAAuC",sourcesContent:[".image-builder{\n.error{color:var(--pf-global--danger-color--100)}.success{color:var(--pf-global--success-color--100)}.pending{color:var(--pf-global--info-color--100)}\n\n}"],sourceRoot:""}]);const i=l},16373:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var n=a(94015),o=a.n(n),r=a(23645),l=a.n(r)()(o());l.push([e.id,".image-builder .title{display:inline}.image-builder .pf-c-form__group-label-help{color:var(--pf-global--icon--Color--light)}.image-builder .pf-c-form__group-label-help:active{color:var(--pf-global--icon--Color--dark)}\n","",{version:3,sources:["webpack://./src/Components/LandingPage/LandingPage.scss"],names:[],mappings:"AAAA,sBACO,cAAc,CADrB,4CACmD,0CAA0C,CAD7F,mDACkI,yCAAyC",sourcesContent:[".image-builder{\n.title{display:inline}.pf-c-form__group-label-help{color:var(--pf-global--icon--Color--light)}.pf-c-form__group-label-help:active{color:var(--pf-global--icon--Color--dark)}\n\n}"],sourceRoot:""}]);const i=l},91741:(e,t,a)=>{"use strict";var n=a(93379),o=a.n(n),r=a(18484),l=o()(r.default,{insert:"head",singleton:!1});if(!r.default.locals||e.hot.invalidate){var i=r.default.locals;e.hot.accept(18484,(t=>{r=a(18484),function(e,t,a){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(i,r.default.locals)?(i=r.default.locals,l(r.default)):e.hot.invalidate()}))}e.hot.dispose((function(){l()})),r.default.locals},1230:(e,t,a)=>{"use strict";var n=a(93379),o=a.n(n),r=a(16373),l=o()(r.default,{insert:"head",singleton:!1});if(!r.default.locals||e.hot.invalidate){var i=r.default.locals;e.hot.accept(16373,(t=>{r=a(16373),function(e,t,a){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(i,r.default.locals)?(i=r.default.locals,l(r.default)):e.hot.invalidate()}))}e.hot.dispose((function(){l()})),r.default.locals}}]);
//# sourceMappingURL=../sourcemaps/513.9579f7465d12711327f3.js.map