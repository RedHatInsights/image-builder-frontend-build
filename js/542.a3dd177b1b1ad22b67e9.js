(self.webpackChunkimage_builder=self.webpackChunkimage_builder||[]).push([[542],{58542:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ce});var a=n(96156),o=n(87757),r=n.n(o),l=n(92137),i=n(28481),c=n(31154),s=n.n(c),u=n(22122),m=n(81253),d=n(79442),p=n(67850),g=n(55241),v=n(84669),b=n(45697),h=n.n(b),f=n(48880),E=n(96354),y=n(64124);const T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e["target-environment"],n=e.release,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=a.skipAws,r=a.skipGoogle,l=a.skipAzure;return!o&&null!=t&&t.aws?"aws-target-env":!r&&null!=t&&t.google?"google-cloud-target-env":!l&&null!=t&&t.azure?"ms-azure-target-env":"rhel-84"===n?"registration":"packages"};var w={"rhel-84":"Red Hat Enterprise Linux (RHEL) 8","centos-8":"CentOS Stream 8"};const x={title:"Image output",name:"image-output",nextStep:function(e){var t=e.values;return T(t)},fields:[{component:E.Z.SELECT,label:"Release",name:"release",simpleValue:!0,initialValue:"rhel-84",options:Object.entries(w).map((function(e){var t=(0,i.Z)(e,2),n=t[0];return{label:t[1],value:n}})),isRequired:!0,validate:[{type:y.Z.REQUIRED}]},{component:"output",name:"target-environment",label:"Select target environment",isRequired:!0,validate:[{type:y.Z.REQUIRED}]}]};var O={"subscribe-now-radio":{title:"Embed an activation key and register systems on first boot",testId:"register-now-radio-button"},"register-later-radio-button":{title:"Register the system later",testId:"register-later-radio-button"}};const I=function(e){var t,n;return{title:"Registration",name:"registration",nextStep:"packages",fields:[{component:E.Z.RADIO,label:"Register the system",name:"register-system",initialValue:"register-later-radio-button",options:Object.entries(O).map((function(e){var t=(0,i.Z)(e,2),n=t[0],a=t[1];return{label:a.title,value:n,"data-testid":a.testId}}))},{component:E.Z.TEXT_FIELD,name:"subscription-organization",type:"text","data-testid":"organization-id",label:"Organization ID",initialValue:Number(null==e||null===(t=e.identity)||void 0===t||null===(n=t.internal)||void 0===n?void 0:n.org_id),isDisabled:!0,condition:{or:[{when:"register-system",is:"subscribe-now-radio"}]}},{component:E.Z.TEXT_FIELD,name:"subscription-activation","data-testid":"subscription-activation",required:!0,type:"password",label:"Activation key",condition:{or:[{when:"register-system",is:"subscribe-now-radio"}]},isRequired:!0,validate:[{type:y.Z.REQUIRED}]}]}};var S=n(84213),k={googleAccount:"Google account",serviceAccount:"Service account",googleGroup:"Google group",domain:"Domain"},A=function(e){var t=e.appendTo;return s().createElement(v.Popover,{appendTo:t,hasAutoWidth:!0,maxWidth:"35rem",headerContent:"Valid account types",bodyContent:s().createElement(v.TextContent,null,s().createElement(v.Text,null,"The following account types can have an image shared with them:"),s().createElement(v.TextList,null,s().createElement(v.TextListItem,null,s().createElement("strong",null,"Google account:")," A Google account represents a developer, an administrator, or any other person who interacts with Google Cloud. e.g., ",s().createElement("em",null,"`alice@gmail.com`"),"."),s().createElement(v.TextListItem,null,s().createElement("strong",null,"Service account:")," A service account is an account for an application instead of an individual end user. e.g., ",s().createElement("em",null,"`myapp@appspot.gserviceaccount.com`"),"."),s().createElement(v.TextListItem,null,s().createElement("strong",null,"Google group:")," A Google group is a named collection of Google accounts and and service accounts. e.g., ",s().createElement("em",null,"`admins@example.com`"),"."),s().createElement(v.TextListItem,null,s().createElement("strong",null,"Google Workspace domain/Cloud Identity domain:")," A Google workspace or cloud identity domain represents a virtual group of all the Google accounts in an organization. These domains represent your organization's internet domain name. e.g., ",s().createElement("em",null,"`mycompany.com`"),".")))},s().createElement(v.Button,{variant:"plain","aria-label":"Account info","aria-describedby":"google-account-type",className:"pf-c-form__group-label-help"},s().createElement(S.by,null)))};A.propTypes={appendTo:h().any};const _={title:"Google Cloud Platform",customTitle:s().createElement(v.Title,{headingLevel:"h1",size:"xl"},"Target environment - Google Cloud Platform"),name:"google-cloud-target-env",substepOf:"Target environment",nextStep:function(e){var t=e.values;return T(t,{skipGoogle:!0,skipAws:!0})},fields:[{component:E.Z.PLAIN_TEXT,name:"google-cloud-text-component",label:s().createElement(v.Text,null,"Your image will be uploaded to Google Cloud Platform and shared with the email you provide below. ",s().createElement("br",null),"The image should be copied to your account within 14 days.")},{component:"radio-popover",label:"Type",Popover:A,name:"google-account-type",initialValue:"googleAccount",options:Object.entries(k).map((function(e){var t=(0,i.Z)(e,2),n=t[0],a=t[1];return{label:"domain"===n?"Google Workspace domain or Cloud Identity domain":a,value:n}})),isRequired:!0,validate:[{type:y.Z.REQUIRED}]},{component:E.Z.TEXT_FIELD,name:"google-email","data-testid":"input-google-email",type:"text",label:"Email address",condition:{or:[{when:"google-account-type",is:"googleAccount"},{when:"google-account-type",is:"serviceAccount"},{when:"google-account-type",is:"googleGroup"},{when:"google-account-type",is:null}]},isRequired:!0,validate:[{type:y.Z.REQUIRED}]},{component:E.Z.TEXT_FIELD,name:"google-domain",type:"text",label:"Domain",condition:{when:"google-account-type",is:"domain"},isRequired:!0,validate:[{type:y.Z.REQUIRED}]}]},z=function(){var e,t,n,a,o,r,l,i,c,u,m,d,p,g,b,h,E,y,T,x,I,S,A,_,z,R,Z,D,G,P,C,L,j,q,N=(0,f.default)().getState;return s().createElement(v.TextContent,null,s().createElement(v.Text,null,"Review the information and click the Create button to create your image using the following criteria."),s().createElement(v.Text,{component:v.TextVariants.h3},"Image output"),s().createElement(v.Gallery,{"data-testid":"review-image-output"},s().createElement(v.GalleryItem,null,s().createElement(v.Text,{component:v.TextVariants.h4},"Release")),s().createElement(v.GalleryItem,null,s().createElement(v.Text,null,null==w?void 0:w[null===(e=N())||void 0===e||null===(t=e.values)||void 0===t?void 0:t.release]))),s().createElement(v.Text,{component:v.TextVariants.h3},"Target environment"),(null===(n=N())||void 0===n||null===(a=n.values)||void 0===a?void 0:a["aws-account-id"])&&s().createElement(s().Fragment,null,s().createElement(v.Text,{id:"destination-header"},"Amazon Web Services"),s().createElement(v.Gallery,{"data-testid":"review-image-upload-aws"},s().createElement(v.GalleryItem,null,s().createElement(v.Text,{component:v.TextVariants.h4},"Account ID")),s().createElement(v.GalleryItem,null,s().createElement(v.Text,null,null===(o=N())||void 0===o||null===(r=o.values)||void 0===r?void 0:r["aws-account-id"])))),(null===(l=N())||void 0===l||null===(i=l.values)||void 0===i?void 0:i["google-account-type"])&&s().createElement(s().Fragment,null,s().createElement(v.Text,{id:"destination-header"},"Google Cloud Platform"),s().createElement(v.Gallery,{"data-testid":"review-image-upload-google"},s().createElement(v.GalleryItem,null,s().createElement(v.Text,{component:v.TextVariants.h4},null==k?void 0:k[null===(c=N())||void 0===c||null===(u=c.values)||void 0===u?void 0:u["google-account-type"]])),s().createElement(v.GalleryItem,null,s().createElement(v.Text,null,(null===(m=N())||void 0===m||null===(d=m.values)||void 0===d?void 0:d["google-email"])||(null===(p=N())||void 0===p||null===(g=p.values)||void 0===g?void 0:g["google-domain"]))))),(null===(b=N())||void 0===b||null===(h=b.values)||void 0===h?void 0:h["azure-subscription-id"])&&s().createElement(s().Fragment,null,s().createElement(v.Text,{id:"destination-header"},"Microsoft Azure"),s().createElement(v.Gallery,{"data-testid":"review-image-upload-azure"},s().createElement(v.GalleryItem,null,s().createElement(v.Text,{component:v.TextVariants.h4},"Subscription ID")),s().createElement(v.GalleryItem,null,s().createElement(v.Text,null,null===(E=N())||void 0===E||null===(y=E.values)||void 0===y?void 0:y["azure-subscription-id"]))),s().createElement(v.Gallery,null,s().createElement(v.GalleryItem,null,s().createElement(v.Text,{component:v.TextVariants.h4},"Tenant ID")),s().createElement(v.GalleryItem,null,s().createElement(v.Text,null,null===(T=N())||void 0===T||null===(x=T.values)||void 0===x?void 0:x["azure-tenant-id"]))),s().createElement(v.Gallery,null,s().createElement(v.GalleryItem,null,s().createElement(v.Text,{component:v.TextVariants.h4},"Resource group")),s().createElement(v.GalleryItem,null,s().createElement(v.Text,null,null===(I=N())||void 0===I||null===(S=I.values)||void 0===S?void 0:S["azure-resource-group"])))),"subscribe-now-radio"===(null===(A=N())||void 0===A||null===(_=A.values)||void 0===_?void 0:_["register-system"])&&(null===(z=N())||void 0===z||null===(R=z.values)||void 0===R?void 0:R.release.includes("rhel"))&&s().createElement(s().Fragment,null,s().createElement(v.Text,{component:v.TextVariants.h3},"Registration"),s().createElement(v.Gallery,{"data-testid":"review-image-registration"},s().createElement(v.GalleryItem,null,s().createElement(v.Text,{component:v.TextVariants.h4},"Subscription")),s().createElement(v.GalleryItem,null,s().createElement(v.Text,null,"subscribe-now-radio"===(null===(Z=N())||void 0===Z||null===(D=Z.values)||void 0===D?void 0:D["register-system"])?"Register the system on first boot":null==O?void 0:O[null===(G=N())||void 0===G||null===(P=G.values)||void 0===P||null===(C=P["register-system"])||void 0===C?void 0:C.title]))),s().createElement(v.Gallery,null,s().createElement(v.GalleryItem,null,s().createElement(v.Text,{component:v.TextVariants.h4},"Activation key")),s().createElement(v.GalleryItem,null,s().createElement(v.Text,{type:"password"},"*".repeat(null===(L=N())||void 0===L||null===(j=L.values)||void 0===j||null===(q=j["subscription-activation"])||void 0===q?void 0:q.length))))))};var R=n(41693);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G=function(e){var t=e.label,n=e.isRequired,a=(0,m.Z)(e,["label","isRequired"]),o=(0,f.default)(),r=o.getState,l=o.change,u=(0,R.Z)(D({label:t,isRequired:n},a)).input,d=(0,c.useState)({aws:!1,azure:!1,google:!1}),p=(0,i.Z)(d,2),g=p[0],b=p[1];return(0,c.useEffect)((function(){var e,t;null!==(e=r())&&void 0!==e&&null!==(t=e.values)&&void 0!==t&&t[u.name]&&b(r().values[u.name])}),[]),s().createElement(v.FormGroup,{isRequired:n,label:t,"data-testid":"target-select"},s().createElement("div",{className:"tiles"},s().createElement(v.Tile,{className:"tile pf-u-mr-sm","data-testid":"upload-aws",title:"Amazon Web Services",icon:s().createElement("img",{className:"provider-icon",src:"/apps/frontend-assets/partners-icons/aws.svg"}),onClick:function(){return b((function(e){var t=D({},e,{aws:!e.aws});return l(u.name,t),t}))},isSelected:g.aws,isStacked:!0,isDisplayLarge:!0}),s().createElement(v.Tile,{className:"tile pf-u-mr-sm","data-testid":"upload-google",title:"Google Cloud Platform",icon:s().createElement("img",{className:"provider-icon",src:"/apps/frontend-assets/partners-icons/google-cloud-short.svg"}),onClick:function(){return b((function(e){var t=D({},e,{google:!e.google});return l(u.name,t),t}))},isSelected:g.google,isStacked:!0,isDisplayLarge:!0}),s().createElement(v.Tile,{className:"tile pf-u-mr-sm","data-testid":"upload-azure",title:"Microsoft Azure",icon:s().createElement("img",{className:"provider-icon",src:"/apps/frontend-assets/partners-icons/microsoft-azure-short.svg"}),onClick:function(){return b((function(e){var t=D({},e,{azure:!e.azure});return u.value=t,l(u.name,t),t}))},isSelected:g.azure,isStacked:!0,isDisplayLarge:!0})))};G.propTypes={label:h().node,isRequired:h().bool},G.defaultProps={label:"",isRequired:!1};const P=G;var C=n(65800),L=function(e){return e.map((function(e,t){return s().createElement(v.TextContent,{key:"".concat(e.name,"-").concat(t)},s().createElement("span",{className:"pf-c-dual-list-selector__item-text"},e.name),s().createElement("small",null,e.summary))}))},j=function(e){return{name:e.props.children[0].props.children,summary:e.props.children[1].props.children}},q=function(e){var t=e.defaultArch,n=(0,m.Z)(e,["defaultArch"]),a=(0,f.default)(),o=a.change,u=a.getState,d=(0,R.Z)(n).input,p=(0,c.useRef)(),g=(0,c.useState)([]),b=(0,i.Z)(g,2),h=b[0],E=b[1],y=(0,c.useState)([]),T=(0,i.Z)(y,2),w=T[0],x=T[1],O=(0,c.useState)(""),I=(0,i.Z)(O,2),S=I[0],k=I[1];(0,c.useEffect)((function(){var e,t;x(L((null===(e=u())||void 0===e||null===(t=e.values)||void 0===t?void 0:t[d.name])||[]))}),[]);var A=function(e,t){var n=t.map(j);E(e),x(t),o(d.name,n)},_=function(){var e=(0,l.Z)(r().mark((function e(){var n,a,o,l,i,c;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.Z.getPackages(null===(n=u())||void 0===n||null===(a=n.values)||void 0===a?void 0:a.release,(null===(o=u())||void 0===o||null===(l=o.values)||void 0===l?void 0:l.architecture)||t,p.current);case 2:i=e.sent,c=i.data,E(L(c||[]));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return s().createElement(v.DualListSelector,{className:"pf-u-mt-sm",isSearchable:!0,availableOptionsActions:[s().createElement(v.Button,{"aria-label":"Search button for available packages",key:"availableSearchButton","data-testid":"search-pkgs-button",onClick:_},"Search")],availableOptions:h,availableOptionsTitle:"Available packages",chosenOptions:w.filter((function(e){var t,n;return null===(t=j(e))||void 0===t||null===(n=t.name)||void 0===n?void 0:n.includes(S)})),chosenOptionsTitle:"Chosen packages",addSelected:A,removeSelected:A,addAll:A,removeAll:function(e){return A(e,w.filter((function(e){var t,n;return!(null!==(t=j(e))&&void 0!==t&&null!==(n=t.name)&&void 0!==n&&n.includes(S))})))},onAvailableOptionsSearchInputChanged:function(e){p.current=e},onChosenOptionsSearchInputChanged:function(e){return k(e)},filterOption:function(){return!0},id:"basicSelectorWithSearch"})};q.propTypes={defaultArch:h().string};const N=q;var F=n(41626),V=function(e){var t=e.Popover,n=(0,m.Z)(e,["Popover"]),a=(0,c.useRef)();return s().createElement(F.Z,(0,u.Z)({},n,{label:s().createElement("span",{ref:a,className:"ins-c-image--builder__popover"},n.label,s().createElement(t,null))}))};V.propTypes={Popover:h().elementType.isRequired,label:h().node};const W=V;var X=n(54915);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=function(e){var t=e.schema,n=e.onSubmit,a=e.onClose,o=e.customComponentMapper,r=e.defaultArch,l=e.className,i=(0,m.Z)(e,["schema","onSubmit","onClose","customComponentMapper","defaultArch","className"]);return t?s().createElement(d.Z,(0,u.Z)({schema:t,className:"image-builder".concat(l?" ".concat(l):""),subscription:{values:!0},FormTemplate:function(e){return s().createElement(p.ZP,(0,u.Z)({},e,{showFormControls:!1}))},onSubmit:function(e){return n(e)},componentMapper:U({},g.YS,{review:z,output:P,select:X.Z,"package-selector":{component:N,defaultArch:r},"radio-popover":W},o),onCancel:a},i)):s().createElement(v.Spinner,null)};M.propTypes={schema:h().object,onSubmit:h().func.isRequired,onClose:h().func.isRequired,customComponentMapper:h().shape((0,a.Z)({},h().string,h().oneOfType([h().node,h().shape({component:h().node})]))),defaultArch:h().string,className:h().string};const Q=M;var H=n(75662),Y=n(15265);const J={title:"Amazon Web Services",customTitle:s().createElement(v.Title,{headingLevel:"h1",size:"xl"},"Target environment - Amazon Web Service"),name:"aws-target-env",substepOf:"Target environment",nextStep:function(e){var t=e.values;return T(t,{skipAws:!0})},fields:[{component:E.Z.PLAIN_TEXT,name:"plain-text-component",label:s().createElement("p",null,"Your image will be uploaded to a temporary account on Amazon Web Services. ",s().createElement("br",null),"The image will be shared with the account you provide below. ",s().createElement("br",null),"Within the next 14 days you will need to copy the shared image to your own account. After 14 days it will be unavailable and will have to be regenerated.")},{component:E.Z.TEXT_FIELD,name:"aws-account-id","data-testid":"aws-account-id",type:"text",label:"AWS account ID",isRequired:!0,validate:[{type:y.Z.REQUIRED},{type:y.Z.EXACT_LENGTH,threshold:12}]}]},K={title:"Microsoft Azure",customTitle:s().createElement(v.Title,{headingLevel:"h1",size:"xl"},"Target environment - Microsoft Azure"),name:"ms-azure-target-env",substepOf:"Target environment",nextStep:function(e){var t=e.values;return T(t,{skipAws:!0,skipGoogle:!0,skipAzure:!0})},fields:[{component:E.Z.PLAIN_TEXT,name:"azure-text-component",label:s().createElement(s().Fragment,null,s().createElement(v.Text,null,"Image Builder will send an image to an authorized Azure account."),s().createElement(v.Title,{headingLevel:"h3"},"OAuth permissions"),s().createElement(v.Text,null,'To authorize Image Builder to push images to Microsoft Azure, the account owner must configure Image Builder as an authorized application and give it the role of "Contributor" to at least one resource group.',s().createElement("br",null)),s().createElement("small",null,s().createElement(v.Button,{component:"a",target:"_blank",variant:"link",icon:s().createElement(Y.LA,null),iconPosition:"right",isInline:!0,href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow"},"Learn more about OAuth 2.0")),s().createElement("a",{href:"https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=b94bb246-b02c-4985-9c22-d44e66f657f4\n&scope=openid&response_type=code&response_mode=form_post\n&redirect_uri=https%3A%2F%2Flogin.microsoftonline.com%2Fcommon%2Foauth2%2Fnativeclient",target:"_blank",rel:"noopener noreferrer"},"Authorize Image Builder on Azure ",s().createElement(Y.LA,null)),s().createElement(v.Title,{headingLevel:"h3"},"Destination"),s().createElement(v.Text,null,"Your image will be uploaded to the resource group in the subscription you specify."))},{component:E.Z.TEXT_FIELD,name:"azure-subscription-id","data-testid":"azure-subscription-id",type:"text",label:"Subscription ID",isRequired:!0,validate:[{type:y.Z.REQUIRED}]},{component:E.Z.TEXT_FIELD,name:"azure-tenant-id","data-testid":"azure-tenant-id",type:"text",label:"Tenant ID",required:!0,isRequired:!0,validate:[{type:y.Z.REQUIRED}]},{component:E.Z.TEXT_FIELD,name:"azure-resource-group","data-testid":"azure-resource-group",type:"text",label:"Resource group",isRequired:!0,validate:[{type:y.Z.REQUIRED}]}]},$={title:"Packages",name:"packages",nextStep:"review",fields:[{component:E.Z.PLAIN_TEXT,name:"google-cloud-text-component",label:s().createElement(v.Text,null,"Add optional additional packages to your image by searching available packages.")},{component:"package-selector",name:"selected-packages",label:"Available options"}]};var ee=n(6468),te=n(70363),ne=function(e){var t=e.buttonLabels,n=t.cancel,a=t.submit,o=t.back,r=(0,c.useState)(!1),l=(0,i.Z)(r,2),u=l[0],m=l[1],d=(0,c.useContext)(te.default),p=d.handlePrev,g=d.formOptions;return s().createElement(ee.lP,null,(function(){return s().createElement(s().Fragment,null,s().createElement(v.Button,{variant:"primary",type:"button",isDisabled:!g.valid||g.getState().validating||u,onClick:function(){g.onSubmit({values:g.getState().values,setIsSaving:m})}},a),s().createElement(v.Button,{type:"button",variant:"secondary",onClick:p,isDisabled:u},o),s().createElement("div",{className:"pf-c-wizard__footer-cancel"},s().createElement(v.Button,{type:"button",variant:"link",onClick:g.onCancel,isDisabled:u},n)))}))};ne.propTypes={buttonLabels:h().shape({cancel:h().node,submit:h().node,back:h().node}),isSaving:h().bool};const ae={name:"review",title:"Review",buttons:ne,fields:[{name:"review",component:"review"}]};var oe=n(88931),re=n(18247),le=n(83215);function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}const ce=function(){var e=(0,oe.useDispatch)(),t=(0,H.useHistory)(),n=(0,c.useState)(),o=(0,i.Z)(n,2),u=o[0],m=o[1];return(0,c.useEffect)((function(){(0,l.Z)(r().mark((function e(){var t,n,a,o;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=insights)||void 0===t||null===(n=t.chrome)||void 0===n||null===(a=n.auth)||void 0===a?void 0:a.getUser();case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:o=e.t0,m((function(){return o}));case 7:case"end":return e.stop()}}),e)})))()}),[]),u?s().createElement(Q,{onClose:function(){return t.push("/landing")},onSubmit:function(n){var o=n.values,r=n.setIsSaving;r((function(){return!0}));var l=function(e){var t,n,a,o,r={packages:null===(t=e["selected-packages"])||void 0===t?void 0:t.map((function(e){return e.name}))};e["subscription-activation"]&&(r.subscription={"activation-key":e["subscription-activation"],insights:!0,organization:Number(e["subscription-organization"]),"server-url":"subscription.rhsm.redhat.com","base-url":"https://cdn.redhat.com/"});var l=[];if(null!==(n=e["target-environment"])&&void 0!==n&&n.aws){var i={distribution:e.release,image_requests:[{architecture:"x86_64",image_type:"ami",upload_request:{type:"aws",options:{share_with_accounts:[e["aws-account-id"]]}}}],customizations:r};l.push(i)}if(null!==(a=e["target-environment"])&&void 0!==a&&a.google){var c="";switch(e["google-account-type"]){case"googleAccount":c="user:".concat(e["google-email"]);break;case"serviceAccount":c="serviceAccount:".concat(e["google-email"]);break;case"googleGroup":c="group:".concat(e["google-email"]);break;case"domain":c="domain:".concat(e["google-domain"])}var s={distribution:e.release,image_requests:[{architecture:"x86_64",image_type:"vhd",upload_request:{type:"gcp",options:{share_with_accounts:[c]}}}],customizations:r};l.push(s)}if(null!==(o=e["target-environment"])&&void 0!==o&&o.azure){var u={distribution:e.release,image_requests:[{architecture:"x86_64",image_type:"vhd",upload_request:{type:"azure",options:{tenant_id:e["azure-tenant-id"],subscription_id:e["azure-subscription-id"],resource_group:e["azure-resource-group"]}}}],customizations:r};l.push(u)}return l}(o);Promise.all(l.map((function(t){return C.Z.composeImage(t).then((function(n){e((0,re.tE)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{request:t,image_status:{status:"pending"}})))}))}))).then((function(){t.push("/landing"),e((0,le.wN)({variant:"success",title:"Your image is being created"})),r(!1)}))},defaultArch:"x86_64",schema:{fields:[{component:E.Z.WIZARD,name:"image-builder-wizard",className:"image-builder",isDynamic:!0,inModal:!0,buttonLabels:{submit:"Create"},showTitles:!0,title:"Create image",crossroads:["target-environment","release"],description:s().createElement("div",null,"Create a RHEL image and push it to cloud providers. ",s().createElement(v.Button,{component:"a",target:"_blank",variant:"link",icon:s().createElement(Y.LA,null),iconPosition:"right",isInline:!0,href:"\nhttps://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/uploading_a_customized_rhel_system_image_to_cloud_environments/index "},"Documentation")),fields:[x,J,_,K,I(u),$,ae]}]}}):s().createElement(v.Spinner,null)}}}]);
//# sourceMappingURL=../sourcemaps/542.8095c934099718be020a.js.map