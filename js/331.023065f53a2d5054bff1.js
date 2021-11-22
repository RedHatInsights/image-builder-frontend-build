"use strict";(self.webpackChunkimage_builder=self.webpackChunkimage_builder||[]).push([[331],{38331:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var a=n(15671),o=n(43144),r=n(60136),s=n(82963),i=n(61120),l=n(93264),c=n.n(l),u=n(56670),m=n(80604),p=n(15265),g=n(55316),d=n(84213),f=n(29439),h=n(97326),E=n(45697),b=n.n(E),y=n(28216),v=n(18247),_=n(98405),P=n(78545),S=n(7081),I=n(68778),T=n(43047),C=n(43957),k=n(94768),x=function(e){var t={success:[{icon:c().createElement(I.rE,{className:"success"}),text:"Ready"}],failure:[{icon:c().createElement(T.$O,{className:"error"}),text:"Image build failed"}],pending:[{icon:c().createElement(C.tu,null),text:"Image build is pending"}],running:[{icon:c().createElement(k.pG,{className:"pending"}),text:"Image build in progress"}],building:[{icon:c().createElement(k.pG,{className:"pending"}),text:"Image build in progress"}],uploading:[{icon:c().createElement(k.pG,{className:"pending"}),text:"Image upload in progress"}],registering:[{icon:c().createElement(k.pG,{className:"pending"}),text:"Cloud registration in progress"}]};return c().createElement(c().Fragment,null,t[e.status]&&t[e.status].map((function(e,t){return c().createElement(m.Flex,{key:t,className:"pf-u-align-items-baseline pf-m-nowrap"},c().createElement("div",null,e.icon),c().createElement("small",null,e.text))})))};x.propTypes={status:b().string};const G=x;var Z=n(4942),w=n(58061),B=function(e){var t,n=(t={},(0,Z.Z)(t,w.F,"RHEL 8"),(0,Z.Z)(t,"centos-8","CentOS Stream 8"),t),a=n[e.release]?n[e.release]:e.release;return c().createElement(m.Label,{color:"blue"},a)};B.propTypes={release:b().string};const R=B;var z=function(e){var t={aws:"Amazon Web Services",azure:"Microsoft Azure",gcp:"Google Cloud Platform"};return c().createElement(c().Fragment,null,t[e.uploadType]?t[e.uploadType]:e.uploadType)};z.propTypes={uploadType:b().string};const N=z;var L=function(e){var t=e.imageStatus?e.imageStatus.upload_status:void 0;if(t){if("aws"===t.type){var n="https://console.aws.amazon.com/ec2/v2/home?region="+t.options.region+"#LaunchInstanceWizard:ami="+t.options.ami;return c().createElement(m.Button,{component:"a",target:"_blank",variant:"link",icon:c().createElement(p.LA,null),iconPosition:"right",isInline:!0,href:n},"Launch instance")}if("azure"===t.type){var a="https://portal.azure.com/#@"+e.uploadOptions.tenant_id+"/resource/subscriptions/"+e.uploadOptions.subscription_id+"/resourceGroups/"+e.uploadOptions.resource_group+"/providers/Microsoft.Compute/images/"+t.options.image_name;return c().createElement(m.Button,{component:"a",target:"_blank",variant:"link",icon:c().createElement(p.LA,null),iconPosition:"right",isInline:!0,href:a},"View uploaded image")}if("gcp"===t.type)return c().createElement(m.Popover,{"aria-label":"Popover with google cloud platform image details",maxWidth:"30rem",headerContent:"GCP image details",bodyContent:c().createElement(m.TextContent,null,c().createElement(m.Text,{component:m.TextVariants.p},"To use an Image Builder created Google Cloud Platform (GCP) image in your project, specify the project ID and image name in your templates and configurations."),c().createElement(m.Text,null,c().createElement("strong",null,"Project ID"),c().createElement("br",null),t.options.project_id),c().createElement(m.Text,null,c().createElement("strong",null,"Image Name"),c().createElement("br",null),t.options.image_name),c().createElement(m.Text,null,c().createElement("strong",null,"Shared with"),c().createElement("br",null),e.uploadOptions.share_with_accounts[0].split(":")[1]))},c().createElement(m.Button,{component:"a",target:"_blank",variant:"link"},"Image details"))}return null};L.propTypes={imageStatus:b().object,uploadOptions:b().object};const O=L;var A=function(e){(0,r.Z)(u,e);var t,n,l=(t=u,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,i.Z)(t);if(n){var o=(0,i.Z)(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return(0,s.Z)(this,e)});function u(e){var t;return(0,a.Z)(this,u),(t=l.call(this,e)).state={page:1,perPage:10},t.pollComposeStatuses=t.pollComposeStatuses.bind((0,h.Z)(t)),t.onSetPage=t.onSetPage.bind((0,h.Z)(t)),t.onPerPageSelect=t.onPerPageSelect.bind((0,h.Z)(t)),t.timestampToDisplayString=t.timestampToDisplayString.bind((0,h.Z)(t)),t}return(0,o.Z)(u,[{key:"componentDidMount",value:function(){var e=this;this.props.composesGet(this.state.perPage,0),this.interval=setInterval((function(){return e.pollComposeStatuses()}),8e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"pollComposeStatuses",value:function(){var e=this,t=this.props.composes;Object.entries(t.byId).map((function(t){var n=(0,f.Z)(t,2),a=n[0],o=n[1];"success"!==o.image_status.status&&"failure"!==o.image_status.status&&e.props.composeGetStatus(a)}))}},{key:"onSetPage",value:function(e,t){if(this.props.composes.count>this.props.composes.allIds.length){var n=(t-1)*this.state.perPage;this.props.composesGet(this.state.perPage,n)}this.setState({page:t})}},{key:"onPerPageSelect",value:function(e,t){this.props.composes.count>this.props.composes.allIds.length&&t>this.props.composes.allIds.length&&this.props.composesGet(t,0),this.setState({perPage:t,page:1})}},{key:"timestampToDisplayString",value:function(e){if(!e)return"";var t=e.slice(0,10),n=Date.parse(t);return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",year:"numeric"}).format(n)}},{key:"render",value:function(){var e=this,t=this.props.composes,n=(this.state.page-1)*this.state.perPage,a=n+this.state.perPage,o=t.allIds.slice(n,a).map((function(n){var a=t.byId[n];return{cells:[n,e.timestampToDisplayString(a.created_at),{title:c().createElement(R,{release:a.request.distribution})},{title:c().createElement(N,{uploadType:a.request.image_requests[0].upload_request.type})},{title:c().createElement(G,{status:a.image_status?a.image_status.status:""})},{title:c().createElement(O,{imageStatus:a.image_status,uploadOptions:a.request.image_requests[0].upload_request.options})}]}}));return c().createElement(c().Fragment,null,0===t.allIds.length&&c().createElement(m.EmptyState,{variant:m.EmptyStateVariant.large,"data-testid":"empty-state"},c().createElement(m.EmptyStateIcon,{icon:S.wl}),c().createElement(m.Title,{headingLevel:"h4",size:"lg"},"Create an image"),c().createElement(m.EmptyStateBody,null,"Create OS images for deployment in Amazon Web Services, Microsoft Azure and Google Cloud Platform. Images can include a custom package set and an activation key to automate the registration process."),c().createElement(_.Link,{to:"/imagewizard",className:"pf-c-button pf-m-primary","data-testid":"create-image-action"},"Create image"),c().createElement(m.EmptyStateSecondaryActions,null,c().createElement(m.Button,{component:"a",target:"_blank",variant:"link",icon:c().createElement(p.LA,null),iconPosition:"right",isInline:!0,href:"\nhttps://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/uploading_a_customized_rhel_system_image_to_cloud_environments/index "},"Documentation")))||c().createElement(c().Fragment,null,c().createElement(m.Toolbar,null,c().createElement(m.ToolbarContent,null,c().createElement(m.ToolbarItem,null,c().createElement(_.Link,{to:"/imagewizard",className:"pf-c-button pf-m-primary","data-testid":"create-image-action"},"Create image")),c().createElement(m.ToolbarItem,{variant:"pagination",align:{default:"alignRight"}},c().createElement(m.Pagination,{itemCount:this.props.composes.count,perPage:this.state.perPage,page:this.state.page,onSetPage:this.onSetPage,onPerPageSelect:this.onPerPageSelect,widgetId:"compose-pagination","data-testid":"images-pagination",isCompact:!0})))),c().createElement(P.Table,{"aria-label":"Images",rows:o,cells:["Image","Created","Release","Target","Status",""],"data-testid":"images-table"},c().createElement(P.TableHeader,null),c().createElement(P.TableBody,null))))}}]),u}(l.Component);A.propTypes={composes:b().object,composesGet:b().func,composeGetStatus:b().func};const D=(0,y.$j)((function(e){return{composes:e.composes}}),(function(e){return{composesGet:function(t,n){return e(v.ZP.composesGet(t,n))},composeGetStatus:function(t){return e(v.ZP.composeGetStatus(t))}}}))(A);const j=function(e){(0,r.Z)(f,e);var t,n,l=(t=f,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,i.Z)(t);if(n){var o=(0,i.Z)(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return(0,s.Z)(this,e)});function f(e){return(0,a.Z)(this,f),l.call(this,e)}return(0,o.Z)(f,[{key:"render",value:function(){return c().createElement(c().Fragment,null,c().createElement(u.PageHeader,null,c().createElement(u.PageHeaderTitle,{className:"title",title:"Image Builder"}),c().createElement(m.Popover,{headerContent:"About Image Builder",bodyContent:c().createElement(m.TextContent,null,c().createElement(m.Text,null,"Image Builder is a service that allows you to create RHEL images and push them to cloud environments."),c().createElement(m.Button,{component:"a",target:"_blank",variant:"link",icon:c().createElement(p.LA,null),iconPosition:"right",isInline:!0,href:"\nhttps://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/uploading_a_customized_rhel_system_image_to_cloud_environments/index "},"Documentation"),c().createElement("br",null),c().createElement(m.Button,{component:"a",target:"_blank",variant:"link",icon:c().createElement(g.ET,null),iconPosition:"right",isInline:!0,href:"https://github.com/RedHatInsights/image-builder-frontend/tree/6468d33d255ab98046b22dbf321da3243b37b3db"},"Contribute on GitHub"))},c().createElement("button",{type:"button","aria-label":"About image builder",className:"pf-c-form__group-label-help"},c().createElement(d.by,null)))),c().createElement("section",{className:"pf-l-page__main-section pf-c-page__main-section"},c().createElement(D,null)))}}]),f}(l.Component)}}]);