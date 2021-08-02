(self.webpackChunkimage_builder=self.webpackChunkimage_builder||[]).push([[542],{58542:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>se});var a=n(96156),o=n(87757),i=n.n(o),r=n(92137),l=n(28481),s=n(31154),c=n.n(s),u=n(22122),m=n(81253),d=n(79442),p=n(67850),g=n(55241),v=n(58788),b=n(45697),f=n.n(b),h=n(48880),E=n(96354),y=n(64124);const T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e["target-environment"],n=e.release,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=a.skipAws,i=a.skipGoogle,r=a.skipAzure;return!o&&null!=t&&t.aws?"aws-target-env":!i&&null!=t&&t.google?"google-cloud-target-env":!r&&null!=t&&t.azure?"ms-azure-target-env":"rhel-8"===n?"registration":"packages"};var x={"rhel-8":"Red Hat Enterprise Linux (RHEL) 8","centos-8":"CentOS Stream 8"};const w={title:"Image output",name:"image-output",nextStep:function(e){var t=e.values;return T(t)},fields:[{component:E.Z.SELECT,label:"Release",name:"release",simpleValue:!0,initialValue:"rhel-8",options:Object.entries(x).map((function(e){var t=(0,l.Z)(e,2),n=t[0];return{label:t[1],value:n}})),isRequired:!0,validate:[{type:y.Z.REQUIRED}]},{component:"output",name:"target-environment",label:"Select target environment",isRequired:!0,validate:[{type:y.Z.REQUIRED}]}]};var I={"subscribe-now-radio":{title:"Embed an activation key and register systems on first boot",testId:"register-now-radio-button"},"register-later-radio-button":{title:"Register the system later",testId:"register-later-radio-button"}};const L=function(e){var t,n;return{title:"Registration",name:"registration",nextStep:"packages",fields:[{component:E.Z.RADIO,label:"Register the system",name:"register-system",initialValue:"register-later-radio-button",options:Object.entries(I).map((function(e){var t=(0,l.Z)(e,2),n=t[0],a=t[1];return{label:a.title,value:n,"data-testid":a.testId}}))},{component:E.Z.TEXT_FIELD,name:"subscription-organization",type:"text","data-testid":"organization-id",label:"Organization ID",initialValue:Number(null==e||null===(t=e.identity)||void 0===t||null===(n=t.internal)||void 0===n?void 0:n.org_id),isDisabled:!0,condition:{or:[{when:"register-system",is:"subscribe-now-radio"}]}},{component:E.Z.TEXT_FIELD,name:"subscription-activation","data-testid":"subscription-activation",required:!0,type:"password",label:"Activation key",condition:{or:[{when:"register-system",is:"subscribe-now-radio"}]},isRequired:!0,validate:[{type:y.Z.REQUIRED}]}]}};var O=n(84213),S={googleAccount:"Google account",serviceAccount:"Service account",googleGroup:"Google group",domain:"Domain"},k=function(e){var t=e.appendTo;return c().createElement(v.Popover,{appendTo:t,hasAutoWidth:!0,maxWidth:"35rem",headerContent:"Valid account types",bodyContent:c().createElement(v.TextContent,null,c().createElement(v.Text,null,"The following account types can have an image shared with them:"),c().createElement(v.TextList,null,c().createElement(v.TextListItem,null,c().createElement("strong",null,"Google account:")," A Google account represents a developer, an administrator, or any other person who interacts with Google Cloud. e.g., ",c().createElement("em",null,"`alice@gmail.com`"),"."),c().createElement(v.TextListItem,null,c().createElement("strong",null,"Service account:")," A service account is an account for an application instead of an individual end user. e.g., ",c().createElement("em",null,"`myapp@appspot.gserviceaccount.com`"),"."),c().createElement(v.TextListItem,null,c().createElement("strong",null,"Google group:")," A Google group is a named collection of Google accounts and and service accounts. e.g., ",c().createElement("em",null,"`admins@example.com`"),"."),c().createElement(v.TextListItem,null,c().createElement("strong",null,"Google Workspace domain/Cloud Identity domain:")," A Google workspace or cloud identity domain represents a virtual group of all the Google accounts in an organization. These domains represent your organization's internet domain name. e.g., ",c().createElement("em",null,"`mycompany.com`"),".")))},c().createElement(v.Button,{variant:"plain","aria-label":"Account info","aria-describedby":"google-account-type",className:"pf-c-form__group-label-help"},c().createElement(O.by,null)))};k.propTypes={appendTo:f().any};const A={title:"Google Cloud Platform",customTitle:c().createElement(v.Title,{headingLevel:"h1",size:"xl"},"Target environment - Google Cloud Platform"),name:"google-cloud-target-env",substepOf:"Target environment",nextStep:function(e){var t=e.values;return T(t,{skipGoogle:!0,skipAws:!0})},fields:[{component:E.Z.PLAIN_TEXT,name:"google-cloud-text-component",label:c().createElement(v.Text,null,"Your image will be uploaded to Google Cloud Platform and shared with the email you provide below. ",c().createElement("br",null),"The image should be copied to your account within 14 days.")},{component:"radio-popover",label:"Type",Popover:k,name:"google-account-type",initialValue:"googleAccount",options:Object.entries(S).map((function(e){var t=(0,l.Z)(e,2),n=t[0],a=t[1];return{label:"domain"===n?"Google Workspace domain or Cloud Identity domain":a,value:n}})),isRequired:!0,validate:[{type:y.Z.REQUIRED}]},{component:E.Z.TEXT_FIELD,name:"google-email","data-testid":"input-google-email",type:"text",label:"Email address",condition:{or:[{when:"google-account-type",is:"googleAccount"},{when:"google-account-type",is:"serviceAccount"},{when:"google-account-type",is:"googleGroup"},{when:"google-account-type",is:null}]},isRequired:!0,validate:[{type:y.Z.REQUIRED}]},{component:E.Z.TEXT_FIELD,name:"google-domain",type:"text",label:"Domain",condition:{when:"google-account-type",is:"domain"},isRequired:!0,validate:[{type:y.Z.REQUIRED}]}]},_=function(){var e,t,n,a,o,i,r,l,s,u,m,d,p,g,b,f,E,y,T,w,L,O,k,A,_,z,R,Z,D,P,C,j,V,q,G=(0,h.default)().getState;return c().createElement(v.TextContent,null,c().createElement(v.Text,null,"Review the information and click the Create button to create your image using the following criteria."),c().createElement(v.Text,{component:v.TextVariants.h3},"Image output"),c().createElement(v.TextList,{component:v.TextListVariants.dl,"data-testid":"review-image-output"},c().createElement(v.TextListItem,{component:v.TextListItemVariants.dt},"Release"),c().createElement(v.TextListItem,{component:v.TextListItemVariants.dd},null==x?void 0:x[null===(e=G())||void 0===e||null===(t=e.values)||void 0===t?void 0:t.release])),c().createElement(v.Text,{component:v.TextVariants.h3},"Target environment"),(null===(n=G())||void 0===n||null===(a=n.values)||void 0===a?void 0:a["aws-account-id"])&&c().createElement(c().Fragment,null,c().createElement(v.Text,{id:"destination-header"},"Amazon Web Services"),c().createElement(v.TextList,{component:v.TextListVariants.dl,"data-testid":"review-image-upload-aws"},c().createElement(v.TextListItem,{component:v.TextListItemVariants.dt},"Account ID"),c().createElement(v.TextListItem,{component:v.TextListItemVariants.dd},null===(o=G())||void 0===o||null===(i=o.values)||void 0===i?void 0:i["aws-account-id"]))),(null===(r=G())||void 0===r||null===(l=r.values)||void 0===l?void 0:l["google-account-type"])&&c().createElement(c().Fragment,null,c().createElement(v.Text,{id:"destination-header"},"Google Cloud Platform"),c().createElement(v.TextList,{component:v.TextListVariants.dl,"data-testid":"review-image-upload-google"},c().createElement(v.TextListItem,{component:v.TextListItemVariants.dt},null==S?void 0:S[null===(s=G())||void 0===s||null===(u=s.values)||void 0===u?void 0:u["google-account-type"]]),c().createElement(v.TextListItem,{component:v.TextListItemVariants.dd},(null===(m=G())||void 0===m||null===(d=m.values)||void 0===d?void 0:d["google-email"])||(null===(p=G())||void 0===p||null===(g=p.values)||void 0===g?void 0:g["google-domain"])))),(null===(b=G())||void 0===b||null===(f=b.values)||void 0===f?void 0:f["azure-subscription-id"])&&c().createElement(c().Fragment,null,c().createElement(v.Text,{id:"destination-header"},"Microsoft Azure"),c().createElement(v.TextList,{component:v.TextListVariants.dl,"data-testid":"review-image-upload-azure"},c().createElement(v.TextListItem,{component:v.TextListItemVariants.dt},"Subscription ID"),c().createElement(v.TextListItem,{component:v.TextListItemVariants.dd},null===(E=G())||void 0===E||null===(y=E.values)||void 0===y?void 0:y["azure-subscription-id"]),c().createElement(v.TextListItem,{component:v.TextListItemVariants.dt},"Tenant ID"),c().createElement(v.TextListItem,{component:v.TextListItemVariants.dd},null===(T=G())||void 0===T||null===(w=T.values)||void 0===w?void 0:w["azure-tenant-id"]),c().createElement(v.TextListItem,{component:v.TextListItemVariants.dt},"Resource group"),c().createElement(v.TextListItem,{component:v.TextListItemVariants.dd},null===(L=G())||void 0===L||null===(O=L.values)||void 0===O?void 0:O["azure-resource-group"]))),"subscribe-now-radio"===(null===(k=G())||void 0===k||null===(A=k.values)||void 0===A?void 0:A["register-system"])&&(null===(_=G())||void 0===_||null===(z=_.values)||void 0===z?void 0:z.release.includes("rhel"))&&c().createElement(c().Fragment,null,c().createElement(v.Text,{component:v.TextVariants.h3},"Registration"),c().createElement(v.TextList,{component:v.TextListVariants.dl,"data-testid":"review-image-registration"},c().createElement(v.TextListItem,{component:v.TextListItemVariants.dt},"Subscription"),c().createElement(v.TextListItem,{component:v.TextListItemVariants.dd},"subscribe-now-radio"===(null===(R=G())||void 0===R||null===(Z=R.values)||void 0===Z?void 0:Z["register-system"])?"Register the system on first boot":null==I?void 0:I[null===(D=G())||void 0===D||null===(P=D.values)||void 0===P||null===(C=P["register-system"])||void 0===C?void 0:C.title]),c().createElement(v.TextListItem,{component:v.TextListItemVariants.dt},"Activation key"),c().createElement(v.TextListItem,{component:v.TextListItemVariants.dd,type:"password"},"*".repeat(null===(j=G())||void 0===j||null===(V=j.values)||void 0===V||null===(q=V["subscription-activation"])||void 0===q?void 0:q.length)))))};var z=n(41693);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=function(e){var t=e.label,n=e.isRequired,a=(0,m.Z)(e,["label","isRequired"]),o=(0,h.default)(),i=o.getState,r=o.change,u=(0,z.Z)(Z({label:t,isRequired:n},a)).input,d=(0,s.useState)({aws:!1,azure:!1,google:!1}),p=(0,l.Z)(d,2),g=p[0],b=p[1];return(0,s.useEffect)((function(){var e,t;null!==(e=i())&&void 0!==e&&null!==(t=e.values)&&void 0!==t&&t[u.name]&&b(i().values[u.name])}),[]),c().createElement(v.FormGroup,{isRequired:n,label:t,"data-testid":"target-select"},c().createElement("div",{className:"tiles"},c().createElement(v.Tile,{className:"tile pf-u-mr-sm","data-testid":"upload-aws",title:"Amazon Web Services",icon:c().createElement("img",{className:"provider-icon",src:"/apps/frontend-assets/partners-icons/aws.svg"}),onClick:function(){return b((function(e){var t=Z({},e,{aws:!e.aws});return r(u.name,t),t}))},isSelected:g.aws,isStacked:!0,isDisplayLarge:!0}),c().createElement(v.Tile,{className:"tile pf-u-mr-sm","data-testid":"upload-google",title:"Google Cloud Platform",icon:c().createElement("img",{className:"provider-icon",src:"/apps/frontend-assets/partners-icons/google-cloud-short.svg"}),onClick:function(){return b((function(e){var t=Z({},e,{google:!e.google});return r(u.name,t),t}))},isSelected:g.google,isStacked:!0,isDisplayLarge:!0}),c().createElement(v.Tile,{className:"tile pf-u-mr-sm","data-testid":"upload-azure",title:"Microsoft Azure",icon:c().createElement("img",{className:"provider-icon",src:"/apps/frontend-assets/partners-icons/microsoft-azure-short.svg"}),onClick:function(){return b((function(e){var t=Z({},e,{azure:!e.azure});return u.value=t,r(u.name,t),t}))},isSelected:g.azure,isStacked:!0,isDisplayLarge:!0})))};D.propTypes={label:f().node,isRequired:f().bool},D.defaultProps={label:"",isRequired:!1};const P=D;var C=n(65800),j=function(e){return e.map((function(e,t){return c().createElement(v.TextContent,{key:"".concat(e.name,"-").concat(t)},c().createElement("span",{className:"pf-c-dual-list-selector__item-text"},e.name),c().createElement("small",null,e.summary))}))},V=function(e){return{name:e.props.children[0].props.children,summary:e.props.children[1].props.children}},q=function(e){var t=e.defaultArch,n=(0,m.Z)(e,["defaultArch"]),a=(0,h.default)(),o=a.change,u=a.getState,d=(0,z.Z)(n).input,p=(0,s.useRef)(),g=(0,s.useState)([]),b=(0,l.Z)(g,2),f=b[0],E=b[1],y=(0,s.useState)([]),T=(0,l.Z)(y,2),x=T[0],w=T[1],I=(0,s.useState)(""),L=(0,l.Z)(I,2),O=L[0],S=L[1];(0,s.useEffect)((function(){var e,t;w(j((null===(e=u())||void 0===e||null===(t=e.values)||void 0===t?void 0:t[d.name])||[]))}),[]);var k=function(e,t){var n=t.map(V);E(e),w(t),o(d.name,n)},A=function(){var e=(0,r.Z)(i().mark((function e(){var n,a,o,r,l,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.Z.getPackages(null===(n=u())||void 0===n||null===(a=n.values)||void 0===a?void 0:a.release,(null===(o=u())||void 0===o||null===(r=o.values)||void 0===r?void 0:r.architecture)||t,p.current);case 2:l=e.sent,s=l.data,E(j(s||[]));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c().createElement(v.DualListSelector,{className:"pf-u-mt-sm",isSearchable:!0,availableOptionsActions:[c().createElement(v.Button,{"aria-label":"Search button for available packages",key:"availableSearchButton","data-testid":"search-pkgs-button",onClick:A},"Search")],availableOptions:f,availableOptionsTitle:"Available packages",chosenOptions:x.filter((function(e){var t,n;return null===(t=V(e))||void 0===t||null===(n=t.name)||void 0===n?void 0:n.includes(O)})),chosenOptionsTitle:"Chosen packages",addSelected:k,removeSelected:k,addAll:k,removeAll:function(e){return k(e,x.filter((function(e){var t,n;return!(null!==(t=V(e))&&void 0!==t&&null!==(n=t.name)&&void 0!==n&&n.includes(O))})))},onAvailableOptionsSearchInputChanged:function(e){p.current=e},onChosenOptionsSearchInputChanged:function(e){return S(e)},filterOption:function(){return!0},id:"basicSelectorWithSearch"})};q.propTypes={defaultArch:f().string};const G=q;var N=n(41626),F=function(e){var t=e.Popover,n=(0,m.Z)(e,["Popover"]),a=(0,s.useRef)();return c().createElement(N.Z,(0,u.Z)({},n,{label:c().createElement("span",{ref:a,className:"ins-c-image--builder__popover"},n.label,c().createElement(t,null))}))};F.propTypes={Popover:f().elementType.isRequired,label:f().node};const W=F;var X=n(54915);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=function(e){var t=e.schema,n=e.onSubmit,a=e.onClose,o=e.customComponentMapper,i=e.defaultArch,r=e.className,l=(0,m.Z)(e,["schema","onSubmit","onClose","customComponentMapper","defaultArch","className"]);return t?c().createElement(d.Z,(0,u.Z)({schema:t,className:"image-builder".concat(r?" ".concat(r):""),subscription:{values:!0},FormTemplate:function(e){return c().createElement(p.ZP,(0,u.Z)({},e,{showFormControls:!1}))},onSubmit:function(e){return n(e)},componentMapper:U({},g.YS,{review:_,output:P,select:X.Z,"package-selector":{component:G,defaultArch:i},"radio-popover":W},o),onCancel:a},l)):c().createElement(v.Spinner,null)};M.propTypes={schema:f().object,onSubmit:f().func.isRequired,onClose:f().func.isRequired,customComponentMapper:f().shape((0,a.Z)({},f().string,f().oneOfType([f().node,f().shape({component:f().node})]))),defaultArch:f().string,className:f().string};const Q=M;var H=n(16530),Y=n(15265);const J={title:"Amazon Web Services",customTitle:c().createElement(v.Title,{headingLevel:"h1",size:"xl"},"Target environment - Amazon Web Service"),name:"aws-target-env",substepOf:"Target environment",nextStep:function(e){var t=e.values;return T(t,{skipAws:!0})},fields:[{component:E.Z.PLAIN_TEXT,name:"plain-text-component",label:c().createElement("p",null,"Your image will be uploaded to a temporary account on Amazon Web Services. ",c().createElement("br",null),"The image will be shared with the account you provide below. ",c().createElement("br",null),"Within the next 14 days you will need to copy the shared image to your own account. After 14 days it will be unavailable and will have to be regenerated.")},{component:E.Z.TEXT_FIELD,name:"aws-account-id","data-testid":"aws-account-id",type:"text",label:"AWS account ID",isRequired:!0,validate:[{type:y.Z.REQUIRED},{type:y.Z.EXACT_LENGTH,threshold:12}]}]},K={title:"Microsoft Azure",customTitle:c().createElement(v.Title,{headingLevel:"h1",size:"xl"},"Target environment - Microsoft Azure"),name:"ms-azure-target-env",substepOf:"Target environment",nextStep:function(e){var t=e.values;return T(t,{skipAws:!0,skipGoogle:!0,skipAzure:!0})},fields:[{component:E.Z.PLAIN_TEXT,name:"azure-text-component",label:c().createElement(c().Fragment,null,c().createElement(v.Text,null,"Image Builder will send an image to an authorized Azure account."),c().createElement(v.Title,{headingLevel:"h3"},"OAuth permissions"),c().createElement(v.Text,null,'To authorize Image Builder to push images to Microsoft Azure, the account owner must configure Image Builder as an authorized application and give it the role of "Contributor" to at least one resource group.',c().createElement("br",null)),c().createElement("small",null,c().createElement(v.Button,{component:"a",target:"_blank",variant:"link",icon:c().createElement(Y.LA,null),iconPosition:"right",isInline:!0,href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow"},"Learn more about OAuth 2.0")),c().createElement("a",{href:"https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=b94bb246-b02c-4985-9c22-d44e66f657f4\n&scope=openid&response_type=code&response_mode=form_post\n&redirect_uri=https%3A%2F%2Flogin.microsoftonline.com%2Fcommon%2Foauth2%2Fnativeclient",target:"_blank",rel:"noopener noreferrer"},"Authorize Image Builder on Azure ",c().createElement(Y.LA,null)),c().createElement(v.Title,{headingLevel:"h3"},"Destination"),c().createElement(v.Text,null,"Your image will be uploaded to the resource group in the subscription you specify."))},{component:E.Z.TEXT_FIELD,name:"azure-subscription-id","data-testid":"azure-subscription-id",type:"text",label:"Subscription ID",isRequired:!0,validate:[{type:y.Z.REQUIRED}]},{component:E.Z.TEXT_FIELD,name:"azure-tenant-id","data-testid":"azure-tenant-id",type:"text",label:"Tenant ID",required:!0,isRequired:!0,validate:[{type:y.Z.REQUIRED}]},{component:E.Z.TEXT_FIELD,name:"azure-resource-group","data-testid":"azure-resource-group",type:"text",label:"Resource group",isRequired:!0,validate:[{type:y.Z.REQUIRED}]}]},$={title:"Packages",name:"packages",nextStep:"review",fields:[{component:E.Z.PLAIN_TEXT,name:"google-cloud-text-component",label:c().createElement(v.Text,null,"Add optional additional packages to your image by searching available packages.")},{component:"package-selector",name:"selected-packages",label:"Available options"}]};var ee=n(6468),te=n(70363),ne=function(e){var t=e.buttonLabels,n=t.cancel,a=t.submit,o=t.back,i=(0,s.useState)(!1),r=(0,l.Z)(i,2),u=r[0],m=r[1],d=(0,s.useContext)(te.default),p=d.handlePrev,g=d.formOptions;return c().createElement(ee.lP,null,(function(){return c().createElement(c().Fragment,null,c().createElement(v.Button,{variant:"primary",type:"button",isDisabled:!g.valid||g.getState().validating||u,onClick:function(){g.onSubmit({values:g.getState().values,setIsSaving:m})}},a),c().createElement(v.Button,{type:"button",variant:"secondary",onClick:p,isDisabled:u},o),c().createElement("div",{className:"pf-c-wizard__footer-cancel"},c().createElement(v.Button,{type:"button",variant:"link",onClick:g.onCancel,isDisabled:u},n)))}))};ne.propTypes={buttonLabels:f().shape({cancel:f().node,submit:f().node,back:f().node}),isSaving:f().bool};const ae={name:"review",title:"Review",buttons:ne,fields:[{name:"review",component:"review"}]};var oe=n(88931),ie=n(18247),re=n(83215);function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}const se=function(){var e=(0,oe.useDispatch)(),t=(0,H.useHistory)(),n=(0,s.useState)(),o=(0,l.Z)(n,2),u=o[0],m=o[1];return(0,s.useEffect)((function(){(0,r.Z)(i().mark((function e(){var t,n,a,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=insights)||void 0===t||null===(n=t.chrome)||void 0===n||null===(a=n.auth)||void 0===a?void 0:a.getUser();case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:o=e.t0,m((function(){return o}));case 7:case"end":return e.stop()}}),e)})))()}),[]),u?c().createElement(Q,{onClose:function(){return t.push("/landing")},onSubmit:function(n){var o=n.values,i=n.setIsSaving;i((function(){return!0}));var r=function(e){var t,n,a,o,i={packages:null===(t=e["selected-packages"])||void 0===t?void 0:t.map((function(e){return e.name}))};e["subscription-activation"]&&(i.subscription={"activation-key":e["subscription-activation"],insights:!0,organization:Number(e["subscription-organization"]),"server-url":"subscription.rhsm.redhat.com","base-url":"https://cdn.redhat.com/"});var r=[];if(null!==(n=e["target-environment"])&&void 0!==n&&n.aws){var l={distribution:e.release,image_requests:[{architecture:"x86_64",image_type:"ami",upload_request:{type:"aws",options:{share_with_accounts:[e["aws-account-id"]]}}}],customizations:i};r.push(l)}if(null!==(a=e["target-environment"])&&void 0!==a&&a.google){var s="";switch(e["google-account-type"]){case"googleAccount":s="user:".concat(e["google-email"]);break;case"serviceAccount":s="serviceAccount:".concat(e["google-email"]);break;case"googleGroup":s="group:".concat(e["google-email"]);break;case"domain":s="domain:".concat(e["google-domain"])}var c={distribution:e.release,image_requests:[{architecture:"x86_64",image_type:"vhd",upload_request:{type:"gcp",options:{share_with_accounts:[s]}}}],customizations:i};r.push(c)}if(null!==(o=e["target-environment"])&&void 0!==o&&o.azure){var u={distribution:e.release,image_requests:[{architecture:"x86_64",image_type:"vhd",upload_request:{type:"azure",options:{tenant_id:e["azure-tenant-id"],subscription_id:e["azure-subscription-id"],resource_group:e["azure-resource-group"]}}}],customizations:i};r.push(u)}return r}(o);Promise.all(r.map((function(t){return C.Z.composeImage(t).then((function(n){e((0,ie.tE)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{request:t,image_status:{status:"pending"}})))}))}))).then((function(){t.push("/landing"),e((0,re.wN)({variant:"success",title:"Your image is being created"})),i(!1)}))},defaultArch:"x86_64",schema:{fields:[{component:E.Z.WIZARD,name:"image-builder-wizard",className:"image-builder",isDynamic:!0,inModal:!0,buttonLabels:{submit:"Create"},showTitles:!0,title:"Create image",crossroads:["target-environment","release"],description:c().createElement("div",null,"Create a RHEL image and push it to cloud providers. ",c().createElement(v.Button,{component:"a",target:"_blank",variant:"link",icon:c().createElement(Y.LA,null),iconPosition:"right",isInline:!0,href:"\nhttps://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/uploading_a_customized_rhel_system_image_to_cloud_environments/index "},"Documentation")),fields:[w,J,A,K,L(u),$,ae]}]}}):c().createElement(v.Spinner,null)}}}]);
//# sourceMappingURL=../sourcemaps/542.e18c2045fc678d97d7f2.js.map