"use strict";(self.webpackChunkimage_builder=self.webpackChunkimage_builder||[]).push([[257],{44257:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ge});var a=n(4942),o=n(87757),r=n.n(o),l=n(15861),i=n(29439),c=n(31154),u=n.n(c),s=n(87462),m=n(45987),d=n(79442),p=n(53601),g=n(63523),v=n(21012),b=n(45697),f=n.n(b),h=n(48880),E=n(96354),y=n(64124);const T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e["target-environment"],n=e.release,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=a.skipAws,r=a.skipGoogle,l=a.skipAzure;return!o&&null!=t&&t.aws?"aws-target-env":!r&&null!=t&&t.google?"google-cloud-target-env":!l&&null!=t&&t.azure?"ms-azure-target-env":"rhel-84"===n?"registration":"packages"};var w={"rhel-84":"Red Hat Enterprise Linux (RHEL) 8","centos-8":"CentOS Stream 8"};const x={title:"Image output",name:"image-output",nextStep:function(e){var t=e.values;return T(t)},fields:[{component:E.Z.SELECT,label:"Release",name:"release",simpleValue:!0,initialValue:"rhel-84",options:Object.entries(w).map((function(e){var t=(0,i.Z)(e,2),n=t[0];return{label:t[1],value:n}})),isRequired:!0,validate:[{type:y.Z.REQUIRED}]},{component:"output",name:"target-environment",label:"Select target environment",isRequired:!0,validate:[{type:y.Z.REQUIRED}]}]};var I={"subscribe-now-radio":{title:"Embed an activation key and register systems on first boot",testId:"register-now-radio-button"},"register-later-radio-button":{title:"Register the system later",testId:"register-later-radio-button"}};const z=function(e){var t,n;return{title:"Registration",name:"registration",nextStep:"packages",fields:[{component:E.Z.RADIO,label:"Register the system",name:"register-system",initialValue:"register-later-radio-button",options:Object.entries(I).map((function(e){var t=(0,i.Z)(e,2),n=t[0],a=t[1];return{label:a.title,value:n,"data-testid":a.testId}}))},{component:E.Z.TEXT_FIELD,name:"subscription-organization",type:"text","data-testid":"organization-id",label:"Organization ID",initialValue:Number(null==e||null===(t=e.identity)||void 0===t||null===(n=t.internal)||void 0===n?void 0:n.org_id),isDisabled:!0,condition:{or:[{when:"register-system",is:"subscribe-now-radio"}]}},{component:E.Z.TEXT_FIELD,name:"subscription-activation","data-testid":"subscription-activation",required:!0,type:"password",label:"Activation key",condition:{or:[{when:"register-system",is:"subscribe-now-radio"}]},isRequired:!0,validate:[{type:y.Z.REQUIRED}]}]}};var O=n(84213),S={googleAccount:"Google account",serviceAccount:"Service account",googleGroup:"Google group",domain:"Domain"},A=function(e){var t=e.appendTo;return u().createElement(v.Popover,{appendTo:t,hasAutoWidth:!0,maxWidth:"35rem",headerContent:"Valid account types",bodyContent:u().createElement(v.TextContent,null,u().createElement(v.Text,null,"The following account types can have an image shared with them:"),u().createElement(v.TextList,null,u().createElement(v.TextListItem,null,u().createElement("strong",null,"Google account:")," A Google account represents a developer, an administrator, or any other person who interacts with Google Cloud. e.g., ",u().createElement("em",null,"`alice@gmail.com`"),"."),u().createElement(v.TextListItem,null,u().createElement("strong",null,"Service account:")," A service account is an account for an application instead of an individual end user. e.g., ",u().createElement("em",null,"`myapp@appspot.gserviceaccount.com`"),"."),u().createElement(v.TextListItem,null,u().createElement("strong",null,"Google group:")," A Google group is a named collection of Google accounts and and service accounts. e.g., ",u().createElement("em",null,"`admins@example.com`"),"."),u().createElement(v.TextListItem,null,u().createElement("strong",null,"Google Workspace domain/Cloud Identity domain:")," A Google workspace or cloud identity domain represents a virtual group of all the Google accounts in an organization. These domains represent your organization's internet domain name. e.g., ",u().createElement("em",null,"`mycompany.com`"),".")))},u().createElement(v.Button,{variant:"plain","aria-label":"Account info","aria-describedby":"google-account-type",className:"pf-c-form__group-label-help"},u().createElement(O.by,null)))};A.propTypes={appendTo:f().any};const k={title:"Google Cloud Platform",customTitle:u().createElement(v.Title,{headingLevel:"h1",size:"xl"},"Target environment - Google Cloud Platform"),name:"google-cloud-target-env",substepOf:"Target environment",nextStep:function(e){var t=e.values;return T(t,{skipGoogle:!0,skipAws:!0})},fields:[{component:E.Z.PLAIN_TEXT,name:"google-cloud-text-component",label:u().createElement(v.Text,null,"Your image will be uploaded to Google Cloud Platform and shared with the email you provide below. ",u().createElement("br",null),"The image should be copied to your account within 14 days.")},{component:"radio-popover",label:"Type",Popover:A,name:"google-account-type",initialValue:"googleAccount",options:Object.entries(S).map((function(e){var t=(0,i.Z)(e,2),n=t[0],a=t[1];return{label:"domain"===n?"Google Workspace domain or Cloud Identity domain":a,value:n}})),isRequired:!0,validate:[{type:y.Z.REQUIRED}]},{component:E.Z.TEXT_FIELD,name:"google-email","data-testid":"input-google-email",type:"text",label:"Email address",condition:{or:[{when:"google-account-type",is:"googleAccount"},{when:"google-account-type",is:"serviceAccount"},{when:"google-account-type",is:"googleGroup"},{when:"google-account-type",is:null}]},isRequired:!0,validate:[{type:y.Z.REQUIRED},{type:y.Z.PATTERN,pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",message:"Please enter a valid email address"}]},{component:E.Z.TEXT_FIELD,name:"google-domain",type:"text",label:"Domain",condition:{when:"google-account-type",is:"domain"},isRequired:!0,validate:[{type:y.Z.REQUIRED}]}]},_=function(){var e,t,n,a,o,r,l,i,c,s,m,d,p,g,b,f,E,y,T,x,z,O,A,k,_,R,Z,D,G,P,C,j,L,q,N=(0,h.default)().getState;return u().createElement(v.TextContent,null,u().createElement(v.Text,null,"Review the information and click the Create button to create your image using the following criteria."),u().createElement(v.Text,{component:v.TextVariants.h3},"Image output"),u().createElement(v.Gallery,{"data-testid":"review-image-output"},u().createElement(v.GalleryItem,null,u().createElement(v.Text,{component:v.TextVariants.h4},"Release")),u().createElement(v.GalleryItem,null,u().createElement(v.Text,null,null==w?void 0:w[null===(e=N())||void 0===e||null===(t=e.values)||void 0===t?void 0:t.release]))),u().createElement(v.Text,{component:v.TextVariants.h3},"Target environment"),(null===(n=N())||void 0===n||null===(a=n.values)||void 0===a?void 0:a["aws-account-id"])&&u().createElement(u().Fragment,null,u().createElement(v.Text,{id:"destination-header"},"Amazon Web Services"),u().createElement(v.Gallery,{"data-testid":"review-image-upload-aws"},u().createElement(v.GalleryItem,null,u().createElement(v.Text,{component:v.TextVariants.h4},"Account ID")),u().createElement(v.GalleryItem,null,u().createElement(v.Text,null,null===(o=N())||void 0===o||null===(r=o.values)||void 0===r?void 0:r["aws-account-id"])))),(null===(l=N())||void 0===l||null===(i=l.values)||void 0===i?void 0:i["google-account-type"])&&u().createElement(u().Fragment,null,u().createElement(v.Text,{id:"destination-header"},"Google Cloud Platform"),u().createElement(v.Gallery,{"data-testid":"review-image-upload-google"},u().createElement(v.GalleryItem,null,u().createElement(v.Text,{component:v.TextVariants.h4},null==S?void 0:S[null===(c=N())||void 0===c||null===(s=c.values)||void 0===s?void 0:s["google-account-type"]])),u().createElement(v.GalleryItem,null,u().createElement(v.Text,null,(null===(m=N())||void 0===m||null===(d=m.values)||void 0===d?void 0:d["google-email"])||(null===(p=N())||void 0===p||null===(g=p.values)||void 0===g?void 0:g["google-domain"]))))),(null===(b=N())||void 0===b||null===(f=b.values)||void 0===f?void 0:f["azure-subscription-id"])&&u().createElement(u().Fragment,null,u().createElement(v.Text,{id:"destination-header"},"Microsoft Azure"),u().createElement(v.Gallery,{"data-testid":"review-image-upload-azure"},u().createElement(v.GalleryItem,null,u().createElement(v.Text,{component:v.TextVariants.h4},"Subscription ID")),u().createElement(v.GalleryItem,null,u().createElement(v.Text,null,null===(E=N())||void 0===E||null===(y=E.values)||void 0===y?void 0:y["azure-subscription-id"]))),u().createElement(v.Gallery,null,u().createElement(v.GalleryItem,null,u().createElement(v.Text,{component:v.TextVariants.h4},"Tenant ID")),u().createElement(v.GalleryItem,null,u().createElement(v.Text,null,null===(T=N())||void 0===T||null===(x=T.values)||void 0===x?void 0:x["azure-tenant-id"]))),u().createElement(v.Gallery,null,u().createElement(v.GalleryItem,null,u().createElement(v.Text,{component:v.TextVariants.h4},"Resource group")),u().createElement(v.GalleryItem,null,u().createElement(v.Text,null,null===(z=N())||void 0===z||null===(O=z.values)||void 0===O?void 0:O["azure-resource-group"])))),"subscribe-now-radio"===(null===(A=N())||void 0===A||null===(k=A.values)||void 0===k?void 0:k["register-system"])&&(null===(_=N())||void 0===_||null===(R=_.values)||void 0===R?void 0:R.release.includes("rhel"))&&u().createElement(u().Fragment,null,u().createElement(v.Text,{component:v.TextVariants.h3},"Registration"),u().createElement(v.Gallery,{"data-testid":"review-image-registration"},u().createElement(v.GalleryItem,null,u().createElement(v.Text,{component:v.TextVariants.h4},"Subscription")),u().createElement(v.GalleryItem,null,u().createElement(v.Text,null,"subscribe-now-radio"===(null===(Z=N())||void 0===Z||null===(D=Z.values)||void 0===D?void 0:D["register-system"])?"Register the system on first boot":null==I?void 0:I[null===(G=N())||void 0===G||null===(P=G.values)||void 0===P||null===(C=P["register-system"])||void 0===C?void 0:C.title]))),u().createElement(v.Gallery,null,u().createElement(v.GalleryItem,null,u().createElement(v.Text,{component:v.TextVariants.h4},"Activation key")),u().createElement(v.GalleryItem,null,u().createElement(v.Text,{type:"password"},"*".repeat(null===(j=N())||void 0===j||null===(L=j.values)||void 0===L||null===(q=L["subscription-activation"])||void 0===q?void 0:q.length))))))};var R=n(41693),Z=["label","isRequired"];function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(e){var t=e.label,n=e.isRequired,a=(0,m.Z)(e,Z),o=(0,h.default)(),r=o.getState,l=o.change,s=(0,R.Z)(G({label:t,isRequired:n},a)).input,d=(0,c.useState)({aws:!1,azure:!1,google:!1}),p=(0,i.Z)(d,2),g=p[0],b=p[1];return(0,c.useEffect)((function(){var e,t;null!==(e=r())&&void 0!==e&&null!==(t=e.values)&&void 0!==t&&t[s.name]&&b(r().values[s.name])}),[]),u().createElement(v.FormGroup,{isRequired:n,label:t,"data-testid":"target-select"},u().createElement("div",{className:"tiles"},u().createElement(v.Tile,{className:"tile pf-u-mr-sm","data-testid":"upload-aws",title:"Amazon Web Services",icon:u().createElement("img",{className:"provider-icon",src:"/apps/frontend-assets/partners-icons/aws.svg"}),onClick:function(){return b((function(e){var t=G(G({},e),{},{aws:!e.aws});return l(s.name,t),t}))},isSelected:g.aws,isStacked:!0,isDisplayLarge:!0}),u().createElement(v.Tile,{className:"tile pf-u-mr-sm","data-testid":"upload-google",title:"Google Cloud Platform",icon:u().createElement("img",{className:"provider-icon",src:"/apps/frontend-assets/partners-icons/google-cloud-short.svg"}),onClick:function(){return b((function(e){var t=G(G({},e),{},{google:!e.google});return l(s.name,t),t}))},isSelected:g.google,isStacked:!0,isDisplayLarge:!0}),u().createElement(v.Tile,{className:"tile pf-u-mr-sm","data-testid":"upload-azure",title:"Microsoft Azure",icon:u().createElement("img",{className:"provider-icon",src:"/apps/frontend-assets/partners-icons/microsoft-azure-short.svg"}),onClick:function(){return b((function(e){var t=G(G({},e),{},{azure:!e.azure});return s.value=t,l(s.name,t),t}))},isSelected:g.azure,isStacked:!0,isDisplayLarge:!0})))};P.propTypes={label:f().node,isRequired:f().bool},P.defaultProps={label:"",isRequired:!1};const C=P;var j=n(65800),L=["defaultArch"],q=function(e){return e.map((function(e,t){return u().createElement(v.TextContent,{key:"".concat(e.name,"-").concat(t)},u().createElement("span",{className:"pf-c-dual-list-selector__item-text"},e.name),u().createElement("small",null,e.summary))}))},N=function(e){return{name:e.props.children[0].props.children,summary:e.props.children[1].props.children}},F=function(e){var t=e.defaultArch,n=(0,m.Z)(e,L),a=(0,h.default)(),o=a.change,s=a.getState,d=(0,R.Z)(n).input,p=(0,c.useRef)(),g=(0,c.useState)([]),b=(0,i.Z)(g,2),f=b[0],E=b[1],y=(0,c.useState)([]),T=(0,i.Z)(y,2),w=T[0],x=T[1],I=(0,c.useState)(""),z=(0,i.Z)(I,2),O=z[0],S=z[1];(0,c.useEffect)((function(){var e,t;x(q((null===(e=s())||void 0===e||null===(t=e.values)||void 0===t?void 0:t[d.name])||[]))}),[]);var A=function(e,t){var n=t.map(N);E(e),x(t),o(d.name,n)},k=function(){var e=(0,l.Z)(r().mark((function e(){var n,a,o,l,i,c;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.Z.getPackages(null===(n=s())||void 0===n||null===(a=n.values)||void 0===a?void 0:a.release,(null===(o=s())||void 0===o||null===(l=o.values)||void 0===l?void 0:l.architecture)||t,p.current);case 2:i=e.sent,c=i.data,E(q(c||[]));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return u().createElement(v.DualListSelector,{className:"pf-u-mt-sm",isSearchable:!0,availableOptionsActions:[u().createElement(v.Button,{"aria-label":"Search button for available packages",key:"availableSearchButton","data-testid":"search-pkgs-button",onClick:k},"Search")],availableOptions:f,availableOptionsTitle:"Available packages",chosenOptions:w.filter((function(e){var t,n;return null===(t=N(e))||void 0===t||null===(n=t.name)||void 0===n?void 0:n.includes(O)})),chosenOptionsTitle:"Chosen packages",addSelected:A,removeSelected:A,addAll:A,removeAll:function(e){return A(e,w.filter((function(e){var t,n;return!(null!==(t=N(e))&&void 0!==t&&null!==(n=t.name)&&void 0!==n&&n.includes(O))})))},onAvailableOptionsSearchInputChanged:function(e){p.current=e},onChosenOptionsSearchInputChanged:function(e){return S(e)},filterOption:function(){return!0},id:"basicSelectorWithSearch"})};F.propTypes={defaultArch:f().string};const V=F;var U=n(41626),B=["Popover"],W=function(e){var t=e.Popover,n=(0,m.Z)(e,B),a=(0,c.useRef)();return u().createElement(U.Z,(0,s.Z)({},n,{label:u().createElement("span",{ref:a,className:"ins-c-image--builder__popover"},n.label,u().createElement(t,null))}))};W.propTypes={Popover:f().elementType.isRequired,label:f().node};const X=W,M=function(){var e,t,n=null===(e=(0,(0,h.default)().getState)())||void 0===e||null===(t=e.values)||void 0===t?void 0:t["azure-tenant-id"],a=new RegExp("^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$","i");return u().createElement(v.FormGroup,null,u().createElement(v.Button,{component:"a",target:"_blank",variant:"secondary",isDisabled:!a.test(n),href:"https://login.microsoftonline.com/"+n+"/oauth2/v2.0/authorize?client_id=b94bb246-b02c-4985-9c22-d44e66f657f4&scope=openid&response_type=code&response_mode=form_post&redirect_uri=https%3A%2F%2Flogin.microsoftonline.com%2Fcommon%2Foauth2%2Fnativeclient"},"Authorize Image Builder"))};var Q=n(54915),H=["schema","onSubmit","onClose","customComponentMapper","defaultArch","className"];function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var J=function(e){var t=e.schema,n=e.onSubmit,a=e.onClose,o=e.customComponentMapper,r=e.defaultArch,l=e.className,i=(0,m.Z)(e,H);return t?u().createElement(d.Z,(0,s.Z)({schema:t,className:"image-builder".concat(l?" ".concat(l):""),subscription:{values:!0},FormTemplate:function(e){return u().createElement(p.ZP,(0,s.Z)({},e,{showFormControls:!1}))},onSubmit:function(e){return n(e)},componentMapper:$($({},g.YS),{},{review:_,output:C,select:Q.Z,"package-selector":{component:V,defaultArch:r},"radio-popover":X,"azure-auth-button":M},o),onCancel:a},i)):u().createElement(v.Spinner,null)};J.propTypes={schema:f().object,onSubmit:f().func.isRequired,onClose:f().func.isRequired,customComponentMapper:f().shape((0,a.Z)({},f().string,f().oneOfType([f().node,f().shape({component:f().node})]))),defaultArch:f().string,className:f().string};const K=J;var ee=n(75662),te=n(15265);const ne={title:"Amazon Web Services",customTitle:u().createElement(v.Title,{headingLevel:"h1",size:"xl"},"Target environment - Amazon Web Service"),name:"aws-target-env",substepOf:"Target environment",nextStep:function(e){var t=e.values;return T(t,{skipAws:!0})},fields:[{component:E.Z.PLAIN_TEXT,name:"plain-text-component",label:u().createElement("p",null,"Your image will be uploaded to a temporary account on Amazon Web Services. ",u().createElement("br",null),"The image will be shared with the account you provide below. ",u().createElement("br",null),"Within the next 14 days you will need to copy the shared image to your own account. After 14 days it will be unavailable and will have to be regenerated.")},{component:E.Z.TEXT_FIELD,name:"aws-account-id","data-testid":"aws-account-id",type:"text",label:"AWS account ID",isRequired:!0,validate:[{type:y.Z.REQUIRED},{type:y.Z.EXACT_LENGTH,threshold:12}]}]},ae={title:"Microsoft Azure",customTitle:u().createElement(v.Title,{headingLevel:"h1",size:"xl"},"Target environment - Microsoft Azure"),name:"ms-azure-target-env",substepOf:"Target environment",nextStep:function(e){var t=e.values;return T(t,{skipAws:!0,skipGoogle:!0,skipAzure:!0})},fields:[{component:E.Z.PLAIN_TEXT,name:"azure-text-component",label:u().createElement(u().Fragment,null,u().createElement(v.Text,null,"Image Builder will upload an image to an authorized Azure account."),u().createElement(v.Title,{headingLevel:"h3"},"Authorizing an Azure account"),u().createElement(v.Text,null,'To authorize Image Builder to push images to Microsoft Azure, the account owner must configure Image Builder as an authorized application for a specific tenant ID and give it the role of "Contributor" to at least one resource group.',u().createElement("br",null)),u().createElement("small",null,u().createElement(v.Button,{component:"a",target:"_blank",variant:"link",icon:u().createElement(te.LA,null),iconPosition:"right",isInline:!0,href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow"},"Learn more about OAuth 2.0")),u().createElement(v.Title,{headingLevel:"h2"},"Image Destination"),u().createElement(v.Text,null,"Your image will be uploaded to the resource group in the subscription you specify."))},{component:E.Z.TEXT_FIELD,name:"azure-tenant-id","data-testid":"azure-tenant-id",type:"text",label:"Tenant GUID",required:!0,isRequired:!0,validate:[{type:y.Z.REQUIRED},{type:y.Z.PATTERN,pattern:/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,message:"Please enter a valid tenant GUID"}]},{component:"azure-auth-button",name:"azure-auth-button","data-testid":"azure-auth-button",required:!0,isRequired:!0},{component:E.Z.TEXT_FIELD,name:"azure-subscription-id","data-testid":"azure-subscription-id",type:"text",label:"Subscription GUID",isRequired:!0,validate:[{type:y.Z.REQUIRED}]},{component:E.Z.TEXT_FIELD,name:"azure-resource-group","data-testid":"azure-resource-group",type:"text",label:"Resource group",isRequired:!0,validate:[{type:y.Z.REQUIRED}]}]},oe={title:"Packages",name:"packages",nextStep:"review",fields:[{component:E.Z.PLAIN_TEXT,name:"google-cloud-text-component",label:u().createElement(v.Text,null,"Add optional additional packages to your image by searching available packages.")},{component:"package-selector",name:"selected-packages",label:"Available options"}]};var re=n(6468),le=n(70363),ie=function(e){var t=e.buttonLabels,n=t.cancel,a=t.submit,o=t.back,r=(0,c.useState)(!1),l=(0,i.Z)(r,2),s=l[0],m=l[1],d=(0,c.useContext)(le.default),p=d.handlePrev,g=d.formOptions;return u().createElement(re.lP,null,(function(){return u().createElement(u().Fragment,null,u().createElement(v.Button,{variant:"primary",type:"button",isDisabled:!g.valid||g.getState().validating||s,onClick:function(){g.onSubmit({values:g.getState().values,setIsSaving:m})}},a),u().createElement(v.Button,{type:"button",variant:"secondary",onClick:p,isDisabled:s},o),u().createElement("div",{className:"pf-c-wizard__footer-cancel"},u().createElement(v.Button,{type:"button",variant:"link",onClick:g.onCancel,isDisabled:s},n)))}))};ie.propTypes={buttonLabels:f().shape({cancel:f().node,submit:f().node,back:f().node}),isSaving:f().bool};const ce={name:"review",title:"Review",buttons:ie,fields:[{name:"review",component:"review"}]};var ue=n(82041),se=n(18247),me=n(83215);function de(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?de(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):de(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const ge=function(){var e=(0,ue.useDispatch)(),t=(0,ee.useHistory)(),n=(0,c.useState)(),a=(0,i.Z)(n,2),o=a[0],s=a[1];return(0,c.useEffect)((function(){(0,l.Z)(r().mark((function e(){var t,n,a,o;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=insights)||void 0===t||null===(n=t.chrome)||void 0===n||null===(a=n.auth)||void 0===a?void 0:a.getUser();case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:o=e.t0,s((function(){return o}));case 7:case"end":return e.stop()}}),e)})))()}),[]),o?u().createElement(K,{onClose:function(){return t.push("/landing")},onSubmit:function(n){var a=n.values,o=n.setIsSaving;o((function(){return!0}));var r=function(e){var t,n,a,o,r={packages:null===(t=e["selected-packages"])||void 0===t?void 0:t.map((function(e){return e.name}))};e["subscription-activation"]&&(r.subscription={"activation-key":e["subscription-activation"],insights:!0,organization:Number(e["subscription-organization"]),"server-url":"subscription.rhsm.redhat.com","base-url":"https://cdn.redhat.com/"});var l=[];if(null!==(n=e["target-environment"])&&void 0!==n&&n.aws){var i={distribution:e.release,image_requests:[{architecture:"x86_64",image_type:"ami",upload_request:{type:"aws",options:{share_with_accounts:[e["aws-account-id"]]}}}],customizations:r};l.push(i)}if(null!==(a=e["target-environment"])&&void 0!==a&&a.google){var c="";switch(e["google-account-type"]){case"googleAccount":c="user:".concat(e["google-email"]);break;case"serviceAccount":c="serviceAccount:".concat(e["google-email"]);break;case"googleGroup":c="group:".concat(e["google-email"]);break;case"domain":c="domain:".concat(e["google-domain"])}var u={distribution:e.release,image_requests:[{architecture:"x86_64",image_type:"vhd",upload_request:{type:"gcp",options:{share_with_accounts:[c]}}}],customizations:r};l.push(u)}if(null!==(o=e["target-environment"])&&void 0!==o&&o.azure){var s={distribution:e.release,image_requests:[{architecture:"x86_64",image_type:"vhd",upload_request:{type:"azure",options:{tenant_id:e["azure-tenant-id"],subscription_id:e["azure-subscription-id"],resource_group:e["azure-resource-group"]}}}],customizations:r};l.push(s)}return l}(a);Promise.all(r.map((function(t){return j.Z.composeImage(t).then((function(n){e((0,se.tE)(pe(pe({},n),{},{request:t,image_status:{status:"pending"}})))}))}))).then((function(){t.push("/landing"),e((0,me.wN)({variant:"success",title:"Your image is being created"})),o(!1)}))},defaultArch:"x86_64",schema:{fields:[{component:E.Z.WIZARD,name:"image-builder-wizard",className:"image_builder",isDynamic:!0,inModal:!0,buttonLabels:{submit:"Create"},showTitles:!0,title:"Create image",crossroads:["target-environment","release"],description:u().createElement("div",null,"Create a RHEL image and push it to cloud providers. ",u().createElement(v.Button,{component:"a",target:"_blank",variant:"link",icon:u().createElement(te.LA,null),iconPosition:"right",isInline:!0,href:"\nhttps://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/uploading_a_customized_rhel_system_image_to_cloud_environments/index "},"Documentation")),fields:[x,ne,k,ae,z(o),oe,ce]}]}}):u().createElement(v.Spinner,null)}}}]);
//# sourceMappingURL=../sourcemaps/257.480512c966e020c2f299cb8ab17bc92d.js.map