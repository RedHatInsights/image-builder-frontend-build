"use strict";(self.webpackChunkimage_builder=self.webpackChunkimage_builder||[]).push([[257],{44257:(e,t,n)=>{n.r(t),n.d(t,{default:()=>he});var a=n(4942),r=n(15861),o=n(29439),l=n(87757),i=n.n(l),c=n(93264),s=n.n(c),u=n(87462),m=n(45987),d=n(79442),p=n(67850),g=n(55241),v=n(80604),b=n(45697),f=n.n(b),h=n(48880),E=n(96354),y=n(64124);const T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e["target-environment"],n=e.release,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.skipAws,o=a.skipGoogle,l=a.skipAzure;return!r&&null!=t&&t.aws?"aws-target-env":!o&&null!=t&&t.google?"google-cloud-target-env":!l&&null!=t&&t.azure?"ms-azure-target-env":"rhel-84"===n?"registration":"packages"};var w={"rhel-84":"Red Hat Enterprise Linux (RHEL) 8","centos-8":"CentOS Stream 8"};const x={title:"Image output",name:"image-output",nextStep:function(e){var t=e.values;return T(t)},fields:[{component:E.Z.SELECT,label:"Release",name:"release",simpleValue:!0,initialValue:"rhel-84",options:Object.entries(w).map((function(e){var t=(0,o.Z)(e,2),n=t[0];return{label:t[1],value:n}})),isRequired:!0,validate:[{type:y.Z.REQUIRED}]},{component:"output",name:"target-environment",label:"Select target environment",isRequired:!0,validate:[{type:y.Z.REQUIRED}]}]};var k={"subscribe-now-radio":{title:"Embed an activation key and register systems on first boot",testId:"register-now-radio-button"},"register-later-radio-button":{title:"Register the system later",testId:"register-later-radio-button"}};const S=function(e){var t,n;return{title:"Registration",name:"registration",nextStep:"packages",fields:[{component:E.Z.RADIO,label:"Register the system",name:"register-system",initialValue:"register-later-radio-button",options:Object.entries(k).map((function(e){var t=(0,o.Z)(e,2),n=t[0],a=t[1];return{label:a.title,value:n,"data-testid":a.testId}}))},{component:E.Z.TEXT_FIELD,name:"subscription-organization",type:"text","data-testid":"organization-id",label:"Organization ID",initialValue:Number(null==e||null===(t=e.identity)||void 0===t||null===(n=t.internal)||void 0===n?void 0:n.org_id),isDisabled:!0,condition:{or:[{when:"register-system",is:"subscribe-now-radio"}]}},{component:E.Z.TEXT_FIELD,name:"subscription-activation","data-testid":"subscription-activation",required:!0,type:"password",label:"Activation key",condition:{or:[{when:"register-system",is:"subscribe-now-radio"}]},isRequired:!0,validate:[{type:y.Z.REQUIRED}]}]}};var I=n(84213),z={googleAccount:"Google account",serviceAccount:"Service account",googleGroup:"Google group",domain:"Domain"},D=function(e){var t=e.appendTo;return s().createElement(v.Popover,{appendTo:t,hasAutoWidth:!0,maxWidth:"35rem",headerContent:"Valid account types",bodyContent:s().createElement(v.TextContent,null,s().createElement(v.Text,null,"The following account types can have an image shared with them:"),s().createElement(v.TextList,null,s().createElement(v.TextListItem,null,s().createElement("strong",null,"Google account:")," A Google account represents a developer, an administrator, or any other person who interacts with Google Cloud. e.g., ",s().createElement("em",null,"`alice@gmail.com`"),"."),s().createElement(v.TextListItem,null,s().createElement("strong",null,"Service account:")," A service account is an account for an application instead of an individual end user. e.g., ",s().createElement("em",null,"`myapp@appspot.gserviceaccount.com`"),"."),s().createElement(v.TextListItem,null,s().createElement("strong",null,"Google group:")," A Google group is a named collection of Google accounts and service accounts. e.g., ",s().createElement("em",null,"`admins@example.com`"),"."),s().createElement(v.TextListItem,null,s().createElement("strong",null,"Google Workspace domain/Cloud Identity domain:")," A Google workspace or cloud identity domain represents a virtual group of all the Google accounts in an organization. These domains represent your organization's internet domain name. e.g., ",s().createElement("em",null,"`mycompany.com`"),".")))},s().createElement(v.Button,{variant:"plain","aria-label":"Account info","aria-describedby":"google-account-type",className:"pf-c-form__group-label-help"},s().createElement(I.by,null)))};D.propTypes={appendTo:f().any};const Z={title:"Google Cloud Platform",customTitle:s().createElement(v.Title,{headingLevel:"h1",size:"xl"},"Target environment - Google Cloud Platform"),name:"google-cloud-target-env",substepOf:"Target environment",nextStep:function(e){var t=e.values;return T(t,{skipGoogle:!0,skipAws:!0})},fields:[{component:E.Z.PLAIN_TEXT,name:"google-cloud-text-component",label:s().createElement(v.Text,null,"Your image will be uploaded to Google Cloud Platform and shared with the email you provide below. ",s().createElement("br",null),"The image should be copied to your account within 14 days.")},{component:"radio-popover",label:"Type",Popover:D,name:"google-account-type",initialValue:"googleAccount",options:Object.entries(z).map((function(e){var t=(0,o.Z)(e,2),n=t[0],a=t[1];return{label:"domain"===n?"Google Workspace domain or Cloud Identity domain":a,value:n}})),isRequired:!0,validate:[{type:y.Z.REQUIRED}]},{component:E.Z.TEXT_FIELD,name:"google-email","data-testid":"input-google-email",type:"text",label:"Email address",condition:{or:[{when:"google-account-type",is:"googleAccount"},{when:"google-account-type",is:"serviceAccount"},{when:"google-account-type",is:"googleGroup"},{when:"google-account-type",is:null}]},isRequired:!0,validate:[{type:y.Z.REQUIRED},{type:y.Z.PATTERN,pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",message:"Please enter a valid email address"}]},{component:E.Z.TEXT_FIELD,name:"google-domain",type:"text",label:"Domain",condition:{when:"google-account-type",is:"domain"},isRequired:!0,validate:[{type:y.Z.REQUIRED}]}]},_=function(){var e,t,n,a,r,o,l,i,c,u,m,d,p,g,b,f,E,y,T,x,S,I,D,Z,_,A,R,O,C,P,L,G,j,q,N=(0,h.default)().getState;return s().createElement(v.TextContent,null,s().createElement(v.Text,null,"Review the information and click the Create button to create your image using the following criteria."),s().createElement(v.Text,{component:v.TextVariants.h3},"Image output"),s().createElement(v.Gallery,{"data-testid":"review-image-output"},s().createElement(v.GalleryItem,null,s().createElement(v.Text,{component:v.TextVariants.h4},"Release")),s().createElement(v.GalleryItem,null,s().createElement(v.Text,null,null==w?void 0:w[null===(e=N())||void 0===e||null===(t=e.values)||void 0===t?void 0:t.release]))),s().createElement(v.Text,{component:v.TextVariants.h3},"Target environment"),(null===(n=N())||void 0===n||null===(a=n.values)||void 0===a?void 0:a["aws-account-id"])&&s().createElement(s().Fragment,null,s().createElement(v.Text,{id:"destination-header"},"Amazon Web Services"),s().createElement(v.Gallery,{"data-testid":"review-image-upload-aws"},s().createElement(v.GalleryItem,null,s().createElement(v.Text,{component:v.TextVariants.h4},"Account ID")),s().createElement(v.GalleryItem,null,s().createElement(v.Text,null,null===(r=N())||void 0===r||null===(o=r.values)||void 0===o?void 0:o["aws-account-id"])))),(null===(l=N())||void 0===l||null===(i=l.values)||void 0===i?void 0:i["google-account-type"])&&s().createElement(s().Fragment,null,s().createElement(v.Text,{id:"destination-header"},"Google Cloud Platform"),s().createElement(v.Gallery,{"data-testid":"review-image-upload-google"},s().createElement(v.GalleryItem,null,s().createElement(v.Text,{component:v.TextVariants.h4},null==z?void 0:z[null===(c=N())||void 0===c||null===(u=c.values)||void 0===u?void 0:u["google-account-type"]])),s().createElement(v.GalleryItem,null,s().createElement(v.Text,null,(null===(m=N())||void 0===m||null===(d=m.values)||void 0===d?void 0:d["google-email"])||(null===(p=N())||void 0===p||null===(g=p.values)||void 0===g?void 0:g["google-domain"]))))),(null===(b=N())||void 0===b||null===(f=b.values)||void 0===f?void 0:f["azure-subscription-id"])&&s().createElement(s().Fragment,null,s().createElement(v.Text,{id:"destination-header"},"Microsoft Azure"),s().createElement(v.Gallery,{"data-testid":"review-image-upload-azure"},s().createElement(v.GalleryItem,null,s().createElement(v.Text,{component:v.TextVariants.h4},"Subscription ID")),s().createElement(v.GalleryItem,null,s().createElement(v.Text,null,null===(E=N())||void 0===E||null===(y=E.values)||void 0===y?void 0:y["azure-subscription-id"]))),s().createElement(v.Gallery,null,s().createElement(v.GalleryItem,null,s().createElement(v.Text,{component:v.TextVariants.h4},"Tenant ID")),s().createElement(v.GalleryItem,null,s().createElement(v.Text,null,null===(T=N())||void 0===T||null===(x=T.values)||void 0===x?void 0:x["azure-tenant-id"]))),s().createElement(v.Gallery,null,s().createElement(v.GalleryItem,null,s().createElement(v.Text,{component:v.TextVariants.h4},"Resource group")),s().createElement(v.GalleryItem,null,s().createElement(v.Text,null,null===(S=N())||void 0===S||null===(I=S.values)||void 0===I?void 0:I["azure-resource-group"])))),"subscribe-now-radio"===(null===(D=N())||void 0===D||null===(Z=D.values)||void 0===Z?void 0:Z["register-system"])&&(null===(_=N())||void 0===_||null===(A=_.values)||void 0===A?void 0:A.release.includes("rhel"))&&s().createElement(s().Fragment,null,s().createElement(v.Text,{component:v.TextVariants.h3},"Registration"),s().createElement(v.Gallery,{"data-testid":"review-image-registration"},s().createElement(v.GalleryItem,null,s().createElement(v.Text,{component:v.TextVariants.h4},"Subscription")),s().createElement(v.GalleryItem,null,s().createElement(v.Text,null,"subscribe-now-radio"===(null===(R=N())||void 0===R||null===(O=R.values)||void 0===O?void 0:O["register-system"])?"Register the system on first boot":null==k?void 0:k[null===(C=N())||void 0===C||null===(P=C.values)||void 0===P||null===(L=P["register-system"])||void 0===L?void 0:L.title]))),s().createElement(v.Gallery,null,s().createElement(v.GalleryItem,null,s().createElement(v.Text,{component:v.TextVariants.h4},"Activation key")),s().createElement(v.GalleryItem,null,s().createElement(v.Text,{type:"password"},"*".repeat(null===(G=N())||void 0===G||null===(j=G.values)||void 0===j||null===(q=j["subscription-activation"])||void 0===q?void 0:q.length))))))};var A=n(41693),R=["label","isRequired"];function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(e){var t=e.label,n=e.isRequired,a=(0,m.Z)(e,R),r=(0,h.default)(),l=r.getState,i=r.change,u=(0,A.Z)(C({label:t,isRequired:n},a)).input,d=(0,c.useState)({aws:!1,azure:!1,google:!1}),p=(0,o.Z)(d,2),g=p[0],b=p[1];return(0,c.useEffect)((function(){var e,t;null!==(e=l())&&void 0!==e&&null!==(t=e.values)&&void 0!==t&&t[u.name]&&b(l().values[u.name])}),[]),s().createElement(v.FormGroup,{isRequired:n,label:t,"data-testid":"target-select"},s().createElement("div",{className:"tiles"},s().createElement(v.Tile,{className:"tile pf-u-mr-sm","data-testid":"upload-aws",title:"Amazon Web Services",icon:s().createElement("img",{className:"provider-icon",src:"/apps/frontend-assets/partners-icons/aws.svg"}),onClick:function(){return b((function(e){var t=C(C({},e),{},{aws:!e.aws});return i(u.name,t),t}))},isSelected:g.aws,isStacked:!0,isDisplayLarge:!0}),s().createElement(v.Tile,{className:"tile pf-u-mr-sm","data-testid":"upload-google",title:"Google Cloud Platform",icon:s().createElement("img",{className:"provider-icon",src:"/apps/frontend-assets/partners-icons/google-cloud-short.svg"}),onClick:function(){return b((function(e){var t=C(C({},e),{},{google:!e.google});return i(u.name,t),t}))},isSelected:g.google,isStacked:!0,isDisplayLarge:!0}),s().createElement(v.Tile,{className:"tile pf-u-mr-sm","data-testid":"upload-azure",title:"Microsoft Azure",icon:s().createElement("img",{className:"provider-icon",src:"/apps/frontend-assets/partners-icons/microsoft-azure-short.svg"}),onClick:function(){return b((function(e){var t=C(C({},e),{},{azure:!e.azure});return u.value=t,i(u.name,t),t}))},isSelected:g.azure,isStacked:!0,isDisplayLarge:!0})))};P.propTypes={label:f().node,isRequired:f().bool},P.defaultProps={label:"",isRequired:!1};const L=P;var G=n(93433),j=n(65800),q=n(93174),N=n(94086),F=n(94949),B=n(71973),V=["defaultArch"],W=function(e){return e.map((function(e){return{name:e.name,summary:e.summary}}))},U=function(e){var t=e.defaultArch,n=(0,m.Z)(e,V),a=(0,h.default)(),l=a.change,u=a.getState,d=(0,A.Z)(n).input,p=(0,c.useRef)(),g=(0,c.useState)([]),b=(0,o.Z)(g,2),f=b[0],E=b[1],y=(0,c.useState)([]),T=(0,o.Z)(y,2),w=T[0],x=T[1],k=(0,c.useState)(""),S=(0,o.Z)(k,2),I=S[0],z=S[1],D=(0,c.useState)(""),Z=(0,o.Z)(D,2),_=Z[0],R=Z[1],O=(0,c.useCallback)((function(e){return function(t,n){return t.name===e?-1:n.name===e?1:t.name.startsWith(e)&&!n.name.startsWith(e)?-1:n.name.startsWith(e)&&!t.name.startsWith(e)?1:t.name<n.name?-1:n.name<t.name?1:0}})),C=(0,c.useCallback)((function(e){var t=e.sort(O(p.current));E(t)})),P=function(){var e=(0,r.Z)(i().mark((function e(){var n,a,r,o,l,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.Z.getPackages(null===(n=u())||void 0===n||null===(a=n.values)||void 0===a?void 0:a.release,(null===(r=u())||void 0===r||null===(o=r.values)||void 0===o?void 0:o.architecture)||t,p.current);case 2:l=e.sent,c=l.data,C(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=w.map((function(e){return e.name.includes(I)?e.isHidden=!1:e.isHidden=!0,e}));x(e)},U=function(e){"Enter"===e.key&&("available"===_?(e.stopPropagation(),P()):"chosen"===_&&(e.stopPropagation(),L()))};(0,c.useEffect)((function(){return document.addEventListener("keydown",U,!1),function(){document.removeEventListener("keydown",U,!1)}}));var H=function(e){var t=e?w:f,n=(e?f:w).filter((function(e){return!e.selected||(e.selected=!1,t.push(e),!1)}));e?(C(n),x((0,G.Z)(t))):(x(n),C((0,G.Z)(t))),l(d.name,W(w))},X=function(e){e?(x([].concat((0,G.Z)(f.filter((function(e){return!e.isHidden}))),(0,G.Z)(w))),C((0,G.Z)(f.filter((function(e){return e.isHidden}))))):(C([].concat((0,G.Z)(w.filter((function(e){return!e.isHidden}))),(0,G.Z)(f))),x((0,G.Z)(w.filter((function(e){return e.isHidden}))))),l(d.name,W(w))},M=function(e,t,n){if(n){var a=(0,G.Z)(w);a[t].selected=!w[t].selected,x(a)}else{var r=(0,G.Z)(f);r[t].selected=!f[t].selected,C(r)}};return s().createElement(v.DualListSelector,null,s().createElement(v.DualListSelectorPane,{title:"Available packages",searchInput:s().createElement(v.SearchInput,{placeholder:"Search for a package","data-testid":"search-available-pkgs-input",value:p.current,onFocus:function(){return R("available")},onBlur:function(){return R("")},onChange:function(e){p.current=e}}),actions:[s().createElement(v.Button,{"aria-label":"Search button for available packages",key:"availableSearchButton","data-testid":"search-available-pkgs-button",onClick:P},"Search")]},s().createElement(v.DualListSelectorList,{"data-testid":"available-pkgs-list"},f.map((function(e,t){return e.isHidden?null:s().createElement(v.DualListSelectorListItem,{key:t,isSelected:e.selected,onOptionSelect:function(e){return M(0,t,!1)}},s().createElement(v.TextContent,{key:"".concat(e.name,"-").concat(t)},s().createElement("span",{className:"pf-c-dual-list-selector__item-text"},e.name),s().createElement("small",null,e.summary)))})))),s().createElement(v.DualListSelectorControlsWrapper,{"aria-label":"Selector controls"},s().createElement(v.DualListSelectorControl,{isDisabled:!f.some((function(e){return e.selected})),onClick:function(){return H(!0)},"aria-label":"Add selected",tooltipContent:"Add selected"},s().createElement(q.oR,null)),s().createElement(v.DualListSelectorControl,{isDisabled:0===f.length,onClick:function(){return X(!0)},"aria-label":"Add all",tooltipContent:"Add all"},s().createElement(N.jN,null)),s().createElement(v.DualListSelectorControl,{isDisabled:0===w.length,onClick:function(){return X(!1)},"aria-label":"Remove all",tooltipContent:"Remove all"},s().createElement(F.Yw,null)),s().createElement(v.DualListSelectorControl,{onClick:function(){return H(!1)},isDisabled:!w.some((function(e){return e.selected})),"aria-label":"Remove selected",tooltipContent:"Remove selected"},s().createElement(B.fP,null))),s().createElement(v.DualListSelectorPane,{title:"Chosen packages",searchInput:s().createElement(v.SearchInput,{placeholder:"Search for a package",value:I,onFocus:function(){return R("chosen")},onBlur:function(){return R("")},onChange:function(e){return z(e)}}),actions:[s().createElement(v.Button,{"aria-label":"Search button for selected packages",key:"selectedSearchButton","data-testid":"search-selected-pkgs-button",onClick:L},"Search")],isChosen:!0},s().createElement(v.DualListSelectorList,null,w.map((function(e,t){return e.isHidden?null:s().createElement(v.DualListSelectorListItem,{key:t,isSelected:e.selected,onOptionSelect:function(e){return M(0,t,!0)}},s().createElement(v.TextContent,{key:"".concat(e.name,"-").concat(t)},s().createElement("span",{className:"pf-c-dual-list-selector__item-text"},e.name),s().createElement("small",null,e.summary)))})))))};U.propTypes={defaultArch:f().string};const H=U;var X=n(41626),M=["Popover"],Q=function(e){var t=e.Popover,n=(0,m.Z)(e,M),a=(0,c.useRef)();return s().createElement(X.Z,(0,u.Z)({},n,{label:s().createElement("span",{ref:a,className:"ins-c-image--builder__popover"},n.label,s().createElement(t,null))}))};Q.propTypes={Popover:f().elementType.isRequired,label:f().node};const Y=Q,$=function(){var e,t,n=null===(e=(0,(0,h.default)().getState)())||void 0===e||null===(t=e.values)||void 0===t?void 0:t["azure-tenant-id"],a=new RegExp("^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$","i");return s().createElement(v.FormGroup,null,s().createElement(v.Button,{component:"a",target:"_blank",variant:"secondary",isDisabled:!a.test(n),href:"https://login.microsoftonline.com/"+n+"/oauth2/v2.0/authorize?client_id=b94bb246-b02c-4985-9c22-d44e66f657f4&scope=openid&response_type=code&response_mode=query&redirect_uri=https://portal.azure.com"},"Authorize Image Builder"))};var J=n(54915),K=["schema","onSubmit","onClose","customComponentMapper","defaultArch","className"];function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ne=function(e){var t=e.schema,n=e.onSubmit,a=e.onClose,r=e.customComponentMapper,o=e.defaultArch,l=e.className,i=(0,m.Z)(e,K);return t?s().createElement(d.Z,(0,u.Z)({schema:t,className:"image-builder".concat(l?" ".concat(l):""),subscription:{values:!0},FormTemplate:function(e){return s().createElement(p.ZP,(0,u.Z)({},e,{showFormControls:!1}))},onSubmit:function(e){return n(e)},componentMapper:te(te({},g.YS),{},{review:_,output:L,select:J.Z,"package-selector":{component:H,defaultArch:o},"radio-popover":Y,"azure-auth-button":$},r),onCancel:a},i)):s().createElement(v.Spinner,null)};ne.propTypes={schema:f().object,onSubmit:f().func.isRequired,onClose:f().func.isRequired,customComponentMapper:f().shape((0,a.Z)({},f().string,f().oneOfType([f().node,f().shape({component:f().node})]))),defaultArch:f().string,className:f().string};const ae=ne;var re=n(75662),oe=n(15265);const le={title:"Amazon Web Services",customTitle:s().createElement(v.Title,{headingLevel:"h1",size:"xl"},"Target environment - Amazon Web Service"),name:"aws-target-env",substepOf:"Target environment",nextStep:function(e){var t=e.values;return T(t,{skipAws:!0})},fields:[{component:E.Z.PLAIN_TEXT,name:"plain-text-component",label:s().createElement("p",null,"Your image will be uploaded to a temporary account on Amazon Web Services. ",s().createElement("br",null),"The image will be shared with the account you provide below. ",s().createElement("br",null),"Within the next 14 days you will need to copy the shared image to your own account. After 14 days it will be unavailable and will have to be regenerated.")},{component:E.Z.TEXT_FIELD,name:"aws-account-id","data-testid":"aws-account-id",type:"text",label:"AWS account ID",isRequired:!0,validate:[{type:y.Z.REQUIRED},{type:y.Z.EXACT_LENGTH,threshold:12}]}]},ie={title:"Microsoft Azure",customTitle:s().createElement(v.Title,{headingLevel:"h1",size:"xl"},"Target environment - Microsoft Azure"),name:"ms-azure-target-env",substepOf:"Target environment",nextStep:function(e){var t=e.values;return T(t,{skipAws:!0,skipGoogle:!0,skipAzure:!0})},fields:[{component:E.Z.PLAIN_TEXT,name:"azure-text-component",label:s().createElement(s().Fragment,null,s().createElement(v.Text,null,"Image Builder sends an image to an authorized Azure account."),s().createElement(v.Title,{headingLevel:"h3"},"Authorizing an Azure account"),s().createElement(v.Text,null,'To authorize Image Builder to push images to Microsoft Azure, the account owner must configure Image Builder as an authorized application for a specific tenant ID and give it the role of "Contributor" to at least one resource group.',s().createElement("br",null)),s().createElement("small",null,s().createElement(v.Button,{component:"a",target:"_blank",variant:"link",icon:s().createElement(oe.LA,null),iconPosition:"right",isInline:!0,href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow"},"Learn more about OAuth 2.0")),s().createElement(v.Title,{headingLevel:"h2"},"Image Destination"),s().createElement(v.Text,null,"Your image will be uploaded to the resource group in the subscription you specify."))},{component:E.Z.TEXT_FIELD,name:"azure-tenant-id","data-testid":"azure-tenant-id",type:"text",label:"Tenant GUID",required:!0,isRequired:!0,validate:[{type:y.Z.REQUIRED},{type:y.Z.PATTERN,pattern:/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,message:"Please enter a valid tenant GUID"}]},{component:"azure-auth-button",name:"azure-auth-button","data-testid":"azure-auth-button",required:!0,isRequired:!0},{component:E.Z.TEXT_FIELD,name:"azure-subscription-id","data-testid":"azure-subscription-id",type:"text",label:"Subscription GUID",isRequired:!0,validate:[{type:y.Z.REQUIRED}]},{component:E.Z.TEXT_FIELD,name:"azure-resource-group","data-testid":"azure-resource-group",type:"text",label:"Resource group",isRequired:!0,validate:[{type:y.Z.REQUIRED}]}]},ce={title:"Packages",name:"packages",nextStep:"review",fields:[{component:E.Z.PLAIN_TEXT,name:"google-cloud-text-component",label:s().createElement(v.Text,null,"Add optional additional packages to your image by searching available packages.")},{component:"package-selector",name:"selected-packages",label:"Available options"}]};var se=n(6468),ue=n(70363),me=function(e){var t=e.buttonLabels,n=t.cancel,a=t.submit,r=t.back,l=(0,c.useState)(!1),i=(0,o.Z)(l,2),u=i[0],m=i[1],d=(0,c.useContext)(ue.default),p=d.handlePrev,g=d.formOptions;return s().createElement(se.lP,null,(function(){return s().createElement(s().Fragment,null,s().createElement(v.Button,{variant:"primary",type:"button",isDisabled:!g.valid||g.getState().validating||u,onClick:function(){g.onSubmit({values:g.getState().values,setIsSaving:m})}},a),s().createElement(v.Button,{type:"button",variant:"secondary",onClick:p,isDisabled:u},r),s().createElement("div",{className:"pf-c-wizard__footer-cancel"},s().createElement(v.Button,{type:"button",variant:"link",onClick:g.onCancel,isDisabled:u},n)))}))};me.propTypes={buttonLabels:f().shape({cancel:f().node,submit:f().node,back:f().node}),isSaving:f().bool};const de={name:"review",title:"Review",buttons:me,fields:[{name:"review",component:"review"}]};var pe=n(78625),ge=n(18247),ve=n(83215);function be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?be(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):be(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const he=function(){var e=(0,pe.useDispatch)(),t=(0,re.useHistory)(),n=(0,c.useState)(),a=(0,o.Z)(n,2),l=a[0],u=a[1];return(0,c.useEffect)((function(){(0,r.Z)(i().mark((function e(){var t,n,a,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=insights)||void 0===t||null===(n=t.chrome)||void 0===n||null===(a=n.auth)||void 0===a?void 0:a.getUser();case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:r=e.t0,u((function(){return r}));case 7:case"end":return e.stop()}}),e)})))()}),[]),l?s().createElement(ae,{onClose:function(){return t.push("/landing")},onSubmit:function(n){var a=n.values,r=n.setIsSaving;r((function(){return!0}));var o=function(e){var t,n,a,r,o={packages:null===(t=e["selected-packages"])||void 0===t?void 0:t.map((function(e){return e.name}))};e["subscription-activation"]&&(o.subscription={"activation-key":e["subscription-activation"],insights:!0,organization:Number(e["subscription-organization"]),"server-url":"subscription.rhsm.redhat.com","base-url":"https://cdn.redhat.com/"});var l=[];if(null!==(n=e["target-environment"])&&void 0!==n&&n.aws){var i={distribution:e.release,image_requests:[{architecture:"x86_64",image_type:"ami",upload_request:{type:"aws",options:{share_with_accounts:[e["aws-account-id"]]}}}],customizations:o};l.push(i)}if(null!==(a=e["target-environment"])&&void 0!==a&&a.google){var c="";switch(e["google-account-type"]){case"googleAccount":c="user:".concat(e["google-email"]);break;case"serviceAccount":c="serviceAccount:".concat(e["google-email"]);break;case"googleGroup":c="group:".concat(e["google-email"]);break;case"domain":c="domain:".concat(e["google-domain"])}var s={distribution:e.release,image_requests:[{architecture:"x86_64",image_type:"vhd",upload_request:{type:"gcp",options:{share_with_accounts:[c]}}}],customizations:o};l.push(s)}if(null!==(r=e["target-environment"])&&void 0!==r&&r.azure){var u={distribution:e.release,image_requests:[{architecture:"x86_64",image_type:"vhd",upload_request:{type:"azure",options:{tenant_id:e["azure-tenant-id"],subscription_id:e["azure-subscription-id"],resource_group:e["azure-resource-group"]}}}],customizations:o};l.push(u)}return l}(a);Promise.all(o.map((function(t){return j.Z.composeImage(t).then((function(n){e((0,ge.tE)(fe(fe({},n),{},{request:t,image_status:{status:"pending"}})))}))}))).then((function(){t.push("/landing"),e((0,ve.wN)({variant:"success",title:"Your image is being created"})),r(!1)})).catch((function(t){e((0,ve.wN)({variant:"danger",title:"Your image could not be created",description:"Status code "+t.response.status+": "+t.response.statusText})),r(!1)}))},defaultArch:"x86_64",schema:{fields:[{component:E.Z.WIZARD,name:"image-builder-wizard",className:"image_builder",isDynamic:!0,inModal:!0,buttonLabels:{submit:"Create"},showTitles:!0,title:"Create image",crossroads:["target-environment","release"],description:s().createElement("div",null,"Create a RHEL image and push it to cloud providers. ",s().createElement(v.Button,{component:"a",target:"_blank",variant:"link",icon:s().createElement(oe.LA,null),iconPosition:"right",isInline:!0,href:"\nhttps://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/uploading_a_customized_rhel_system_image_to_cloud_environments/index "},"Documentation")),fields:[x,le,Z,ie,S(l),ce,de]}]}}):s().createElement(v.Spinner,null)}}}]);
//# sourceMappingURL=../sourcemaps/257.02cbf54ecef109c8ab0b8f613b52e977.js.map