(self.webpackChunkimage_builder=self.webpackChunkimage_builder||[]).push([[326],{44257:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ye});var a=n(4942),o=n(15861),r=n(29439),i=n(87757),l=n.n(i),s=n(93264),c=n.n(s),u=n(87462),m=n(45987),d=n(79442),p=n(67850),g=n(80124),v=n(61603),f=n(45697),b=n.n(f),E=n(48880),h=n(96354),y=n(64124),T=n(58061);const x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e["target-environment"],n=e.release,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=a.skipAws,r=a.skipGoogle,i=a.skipAzure;return!o&&null!=t&&t.aws?"aws-target-env":!r&&null!=t&&t.google?"google-cloud-target-env":!i&&null!=t&&t.azure?"ms-azure-target-env":n===T.F?"registration":"packages"};var S,L=(S={},(0,a.Z)(S,T.F,"Red Hat Enterprise Linux (RHEL) 8"),(0,a.Z)(S,"centos-8","CentOS Stream 8"),S);const w={title:"Image output",name:"image-output",nextStep:function(e){var t=e.values;return x(t)},fields:[{component:h.Z.SELECT,label:"Release",name:"release",simpleValue:!0,initialValue:T.F,options:Object.entries(L).map((function(e){var t=(0,r.Z)(e,2),n=t[0];return{label:t[1],value:n}})),isRequired:!0,validate:[{type:y.Z.REQUIRED}]},{component:"output",name:"target-environment",label:"Select target environment",isRequired:!0,validate:[{type:y.Z.REQUIRED}]}]};var I={"subscribe-now-radio":{title:"Embed an activation key and register systems on first boot",testId:"register-now-radio-button"},"register-later-radio-button":{title:"Register the system later",testId:"register-later-radio-button"}};const k=function(e){var t,n;return{title:"Registration",name:"registration",nextStep:"packages",fields:[{component:h.Z.RADIO,label:"Register the system",name:"register-system",initialValue:"register-later-radio-button",options:Object.entries(I).map((function(e){var t=(0,r.Z)(e,2),n=t[0],a=t[1];return{label:a.title,value:n,"data-testid":a.testId}}))},{component:h.Z.TEXT_FIELD,name:"subscription-organization",type:"text","data-testid":"organization-id",label:"Organization ID",initialValue:Number(null==e||null===(t=e.identity)||void 0===t||null===(n=t.internal)||void 0===n?void 0:n.org_id),isDisabled:!0,condition:{or:[{when:"register-system",is:"subscribe-now-radio"}]}},{component:h.Z.TEXT_FIELD,name:"subscription-activation","data-testid":"subscription-activation",required:!0,type:"text",label:"Activation key",condition:{or:[{when:"register-system",is:"subscribe-now-radio"}]},isRequired:!0,validate:[{type:y.Z.REQUIRED}]}]}};var Z=n(84213),_={googleAccount:"Google account",serviceAccount:"Service account",googleGroup:"Google group",domain:"Domain"},D=function(e){var t=e.appendTo;return c().createElement(v.Popover,{appendTo:t,hasAutoWidth:!0,maxWidth:"35rem",headerContent:"Valid account types",bodyContent:c().createElement(v.TextContent,null,c().createElement(v.Text,null,"The following account types can have an image shared with them:"),c().createElement(v.TextList,null,c().createElement(v.TextListItem,null,c().createElement("strong",null,"Google account:")," A Google account represents a developer, an administrator, or any other person who interacts with Google Cloud. e.g., ",c().createElement("em",null,"`alice@gmail.com`"),"."),c().createElement(v.TextListItem,null,c().createElement("strong",null,"Service account:")," A service account is an account for an application instead of an individual end user. e.g., ",c().createElement("em",null,"`myapp@appspot.gserviceaccount.com`"),"."),c().createElement(v.TextListItem,null,c().createElement("strong",null,"Google group:")," A Google group is a named collection of Google accounts and service accounts. e.g., ",c().createElement("em",null,"`admins@example.com`"),"."),c().createElement(v.TextListItem,null,c().createElement("strong",null,"Google Workspace domain/Cloud Identity domain:")," A Google workspace or cloud identity domain represents a virtual group of all the Google accounts in an organization. These domains represent your organization's internet domain name. e.g., ",c().createElement("em",null,"`mycompany.com`"),".")))},c().createElement(v.Button,{variant:"plain","aria-label":"Account info","aria-describedby":"google-account-type",className:"pf-c-form__group-label-help"},c().createElement(Z.by,null)))};D.propTypes={appendTo:b().any};const A={title:"Google Cloud Platform",customTitle:c().createElement(v.Title,{headingLevel:"h1",size:"xl"},"Target environment - Google Cloud Platform"),name:"google-cloud-target-env",substepOf:"Target environment",nextStep:function(e){var t=e.values;return x(t,{skipGoogle:!0,skipAws:!0})},fields:[{component:h.Z.PLAIN_TEXT,name:"google-cloud-text-component",label:c().createElement(v.Text,null,"Your image will be uploaded to Google Cloud Platform and shared with the email you provide below. ",c().createElement("br",null),"The image should be copied to your account within 14 days.")},{component:"radio-popover",label:"Type",Popover:D,name:"google-account-type",initialValue:"googleAccount",options:Object.entries(_).map((function(e){var t=(0,r.Z)(e,2),n=t[0],a=t[1];return{label:"domain"===n?"Google Workspace domain or Cloud Identity domain":a,value:n}})),isRequired:!0,validate:[{type:y.Z.REQUIRED}]},{component:h.Z.TEXT_FIELD,name:"google-email","data-testid":"input-google-email",type:"text",label:"Email address",condition:{or:[{when:"google-account-type",is:"googleAccount"},{when:"google-account-type",is:"serviceAccount"},{when:"google-account-type",is:"googleGroup"},{when:"google-account-type",is:null}]},isRequired:!0,validate:[{type:y.Z.REQUIRED},{type:y.Z.PATTERN,pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",message:"Please enter a valid email address"}]},{component:h.Z.TEXT_FIELD,name:"google-domain",type:"text",label:"Domain",condition:{when:"google-account-type",is:"domain"},isRequired:!0,validate:[{type:y.Z.REQUIRED}]}]},O=function(){var e,t,n,a,o,i,l,u,m,d,p,g,f,b,h,y,T,x,S,w,k,Z,D,A,O,C,z,P,R,N,j,G,V,q,U,F,W,B,M=(0,s.useState)(0),X=(0,r.Z)(M,2),H=X[0],Q=X[1],K=(0,E.default)().getState;return c().createElement(c().Fragment,null,c().createElement(v.Text,null,'Review the information and click "Create image" to create the image using the following criteria.'),c().createElement(v.DescriptionList,null,c().createElement(v.DescriptionListGroup,null,c().createElement(v.DescriptionListTerm,null,"Release"),c().createElement(v.DescriptionListDescription,null,null==L?void 0:L[null===(e=K())||void 0===e||null===(t=e.values)||void 0===t?void 0:t.release]))),c().createElement(v.Tabs,{isFilled:!0,activeKey:H,onSelect:function(e,t){Q(t)},className:"pf-u-w-75"},c().createElement(v.Tab,{eventKey:0,title:c().createElement(v.TabTitleText,null,"Target environment"),"data-testid":"tab-target"},c().createElement(v.List,{isPlain:!0,iconSize:"large"},(null===(n=K())||void 0===n||null===(a=n.values)||void 0===a?void 0:a["aws-account-id"])&&c().createElement(v.ListItem,{icon:c().createElement("img",{className:"provider-icon",src:"/apps/frontend-assets/partners-icons/aws.svg"})},c().createElement(v.TextContent,null,c().createElement(v.Text,{component:v.TextVariants.h3},"Amazon Web Services"),c().createElement(v.TextList,{component:v.TextListVariants.dl},c().createElement(v.TextListItem,{component:v.TextListItemVariants.dt},"Account ID"),c().createElement(v.TextListItem,{component:v.TextListItemVariants.dd},null===(o=K())||void 0===o||null===(i=o.values)||void 0===i?void 0:i["aws-account-id"])))),(null===(l=K())||void 0===l||null===(u=l.values)||void 0===u?void 0:u["google-account-type"])&&c().createElement(v.ListItem,{className:"pf-c-list__item pf-u-mt-md",icon:c().createElement("img",{className:"provider-icon",src:"/apps/frontend-assets/partners-icons/google-cloud-short.svg"})},c().createElement(v.TextContent,null,c().createElement(v.Text,{component:v.TextVariants.h3},"Google Cloud Platform"),c().createElement(v.TextList,{component:v.TextListVariants.dl},c().createElement(v.TextListItem,{component:v.TextListItemVariants.dt},null==_?void 0:_[null===(m=K())||void 0===m||null===(d=m.values)||void 0===d?void 0:d["google-account-type"]]),c().createElement(v.TextListItem,{component:v.TextListItemVariants.dd},(null===(p=K())||void 0===p||null===(g=p.values)||void 0===g?void 0:g["google-email"])||(null===(f=K())||void 0===f||null===(b=f.values)||void 0===b?void 0:b["google-domain"]))))),(null===(h=K())||void 0===h||null===(y=h.values)||void 0===y?void 0:y["azure-subscription-id"])&&c().createElement(v.ListItem,{className:"pf-c-list__item pf-u-mt-md",icon:c().createElement("img",{className:"provider-icon",src:"/apps/frontend-assets/partners-icons/microsoft-azure-short.svg"})},c().createElement(v.TextContent,null,c().createElement(v.Text,{component:v.TextVariants.h3},"Microsoft Azure"),c().createElement(v.TextList,{component:v.TextListVariants.dl},c().createElement(v.TextListItem,{component:v.TextListItemVariants.dt},"Subscription ID"),c().createElement(v.TextListItem,{component:v.TextListItemVariants.dd},null===(T=K())||void 0===T||null===(x=T.values)||void 0===x?void 0:x["azure-subscription-id"]),c().createElement(v.TextListItem,{component:v.TextListItemVariants.dt},"Tenant ID"),c().createElement(v.TextListItem,{component:v.TextListItemVariants.dd},null===(S=K())||void 0===S||null===(w=S.values)||void 0===w?void 0:w["azure-tenant-id"]),c().createElement(v.TextListItem,{component:v.TextListItemVariants.dt},"Resource group"),c().createElement(v.TextListItem,{component:v.TextListItemVariants.dd},null===(k=K())||void 0===k||null===(Z=k.values)||void 0===Z?void 0:Z["azure-resource-group"])))))),c().createElement(v.Tab,{eventKey:1,title:c().createElement(v.TabTitleText,null,"Registration"),"data-testid":"tab-registration"},"register-later-radio-button"===(null===(D=K())||void 0===D||null===(A=D.values)||void 0===A?void 0:A["register-system"])&&c().createElement(v.TextContent,null,c().createElement(v.TextList,{component:v.TextListVariants.dl},c().createElement(v.TextListItem,{component:v.TextListItemVariants.dt},"Subscription"),c().createElement(v.TextListItem,{component:v.TextListItemVariants.dd},"Register the system later"))),"subscribe-now-radio"===(null===(O=K())||void 0===O||null===(C=O.values)||void 0===C?void 0:C["register-system"])&&(null===(z=K())||void 0===z||null===(P=z.values)||void 0===P?void 0:P.release.includes("rhel"))&&c().createElement(v.TextContent,null,c().createElement(v.TextList,{component:v.TextListVariants.dl},c().createElement(v.TextListItem,{component:v.TextListItemVariants.dt},"Subscription"),c().createElement(v.TextListItem,{component:v.TextListItemVariants.dd},"subscribe-now-radio"===(null===(R=K())||void 0===R||null===(N=R.values)||void 0===N?void 0:N["register-system"])?"Register the system on first boot":null==I?void 0:I[null===(j=K())||void 0===j||null===(G=j.values)||void 0===G||null===(V=G["register-system"])||void 0===V?void 0:V.title]),c().createElement(v.TextListItem,{component:v.TextListItemVariants.dt},"Activation key"),c().createElement(v.TextListItem,{component:v.TextListItemVariants.dd},null===(q=K())||void 0===q||null===(U=q.values)||void 0===U?void 0:U["subscription-activation"])))),c().createElement(v.Tab,{eventKey:2,title:c().createElement(v.TabTitleText,null,"System configuration"),"data-testid":"tab-system"},c().createElement(v.TextContent,null,c().createElement(v.Text,{component:v.TextVariants.h3},"Packages"),c().createElement(v.TextList,{component:v.TextListVariants.dl},c().createElement(v.TextListItem,{component:v.TextListItemVariants.dt},"Chosen"),c().createElement(v.TextListItem,{component:v.TextListItemVariants.dd,"data-testid":"chosen-packages-count"},(null===(F=K())||void 0===F||null===(W=F.values)||void 0===W||null===(B=W["selected-packages"])||void 0===B?void 0:B.length)||0))))))};var C=n(41693),z=["label","isRequired"];function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=function(e){var t=e.label,n=e.isRequired,a=(0,m.Z)(e,z),o=(0,E.default)(),i=o.getState,l=o.change,u=(0,C.Z)(R({label:t,isRequired:n},a)).input,d=(0,s.useState)({aws:!1,azure:!1,google:!1}),p=(0,r.Z)(d,2),g=p[0],f=p[1];return(0,s.useEffect)((function(){var e,t;null!==(e=i())&&void 0!==e&&null!==(t=e.values)&&void 0!==t&&t[u.name]&&f(i().values[u.name])}),[]),c().createElement(v.FormGroup,{isRequired:n,label:t,"data-testid":"target-select"},c().createElement("div",{className:"tiles"},c().createElement(v.Tile,{className:"tile pf-u-mr-sm","data-testid":"upload-aws",title:"Amazon Web Services",icon:c().createElement("img",{className:"provider-icon",src:"/apps/frontend-assets/partners-icons/aws.svg"}),onClick:function(){return f((function(e){var t=R(R({},e),{},{aws:!e.aws});return l(u.name,t),t}))},isSelected:g.aws,isStacked:!0,isDisplayLarge:!0}),c().createElement(v.Tile,{className:"tile pf-u-mr-sm","data-testid":"upload-google",title:"Google Cloud Platform",icon:c().createElement("img",{className:"provider-icon",src:"/apps/frontend-assets/partners-icons/google-cloud-short.svg"}),onClick:function(){return f((function(e){var t=R(R({},e),{},{google:!e.google});return l(u.name,t),t}))},isSelected:g.google,isStacked:!0,isDisplayLarge:!0}),c().createElement(v.Tile,{className:"tile pf-u-mr-sm","data-testid":"upload-azure",title:"Microsoft Azure",icon:c().createElement("img",{className:"provider-icon",src:"/apps/frontend-assets/partners-icons/microsoft-azure-short.svg"}),onClick:function(){return f((function(e){var t=R(R({},e),{},{azure:!e.azure});return u.value=t,l(u.name,t),t}))},isSelected:g.azure,isStacked:!0,isDisplayLarge:!0})))};N.propTypes={label:b().node,isRequired:b().bool},N.defaultProps={label:"",isRequired:!1};const j=N;var G=n(93433),V=n(87248),q=n(93174),U=n(94086),F=n(94949),W=n(71973),B=["defaultArch"],M=function(e){return e.map((function(e){return{name:e.name,summary:e.summary}}))},X=function(e){var t=e.defaultArch,n=(0,m.Z)(e,B),a=(0,E.default)(),i=a.change,u=a.getState,d=(0,C.Z)(n).input,p=(0,s.useRef)(),g=(0,s.useState)([]),f=(0,r.Z)(g,2),b=f[0],h=f[1],y=(0,s.useState)(!0),T=(0,r.Z)(y,2),x=T[0],S=T[1],L=(0,s.useState)([]),w=(0,r.Z)(L,2),I=w[0],k=w[1],Z=(0,s.useState)(""),_=(0,r.Z)(Z,2),D=_[0],A=_[1],O=(0,s.useState)(""),z=(0,r.Z)(O,2),P=z[0],R=z[1];(0,s.useEffect)((function(){var e,t,n=null===(e=u())||void 0===e||null===(t=e.values)||void 0===t?void 0:t["selected-packages"];n&&k(n)}),[]);var N=(0,s.useCallback)((function(e){return function(t,n){return t.name===e?-1:n.name===e?1:t.name.startsWith(e)&&!n.name.startsWith(e)?-1:n.name.startsWith(e)&&!t.name.startsWith(e)?1:t.name<n.name?-1:n.name<t.name?1:0}})),j=(0,s.useCallback)((function(e){var t=e.sort(N(p.current));h(t)})),X=function(){var e=(0,o.Z)(l().mark((function e(){var n,a,o,r,i,s;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.Z.getPackages(null===(n=u())||void 0===n||null===(a=n.values)||void 0===a?void 0:a.release,(null===(o=u())||void 0===o||null===(r=o.values)||void 0===r?void 0:r.architecture)||t,p.current);case 2:i=e.sent,(s=i.data)?(S(!0),j(s)):S(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=I.map((function(e){return e.name.includes(D)?e.isHidden=!1:e.isHidden=!0,e}));k(e)},Q=function(e){"Enter"===e.key&&("available"===P?(e.stopPropagation(),X()):"chosen"===P&&(e.stopPropagation(),H()))};(0,s.useEffect)((function(){return document.addEventListener("keydown",Q,!0),function(){document.removeEventListener("keydown",Q,!0)}}));var K=function(e){var t=e?I:b,n=(e?b:I).filter((function(e){return!e.selected||(e.selected=!1,t.push(e),!1)}));e?(j(n),k(t),i(d.name,M(t))):(k(n),j(b),i(d.name,M(n)))},Y=function(e){var t=[];e?(t=[].concat((0,G.Z)(b.filter((function(e){return!e.isHidden}))),(0,G.Z)(I)),k(t),j((0,G.Z)(b.filter((function(e){return e.isHidden}))))):(t=(0,G.Z)(I.filter((function(e){return e.isHidden}))),j([].concat((0,G.Z)(I.filter((function(e){return!e.isHidden}))),(0,G.Z)(b))),k(t)),i(d.name,M(t))},$=function(e,t,n){if(n){var a=(0,G.Z)(I);a[t].selected=!I[t].selected,k(a)}else{var o=(0,G.Z)(b);o[t].selected=!b[t].selected,j(o)}};return c().createElement(v.DualListSelector,null,c().createElement(v.DualListSelectorPane,{title:"Available packages",searchInput:c().createElement(v.SearchInput,{placeholder:"Search for a package","data-testid":"search-available-pkgs-input",value:p.current,onFocus:function(){return R("available")},onBlur:function(){return R("")},onChange:function(e){p.current=e}}),actions:[c().createElement(v.Button,{"aria-label":"Search button for available packages",key:"availableSearchButton","data-testid":"search-available-pkgs-button",onClick:X},"Search")]},c().createElement(v.DualListSelectorList,{"data-testid":"available-pkgs-list"},b.length?b.map((function(e,t){return e.isHidden?null:c().createElement(v.DualListSelectorListItem,{key:t,isSelected:e.selected,onOptionSelect:function(e){return $(0,t,!1)}},c().createElement(v.TextContent,{key:"".concat(e.name,"-").concat(t)},c().createElement("span",{className:"pf-c-dual-list-selector__item-text"},e.name),c().createElement("small",null,e.summary)))})):c().createElement("p",{className:"pf-u-text-align-center pf-u-mt-md"},x?c().createElement(c().Fragment,null,"Search above to add additional",c().createElement("br",null),"packages to your image"):"No packages found"))),c().createElement(v.DualListSelectorControlsWrapper,{"aria-label":"Selector controls"},c().createElement(v.DualListSelectorControl,{isDisabled:!b.some((function(e){return e.selected})),onClick:function(){return K(!0)},"aria-label":"Add selected",tooltipContent:"Add selected"},c().createElement(q.oR,null)),c().createElement(v.DualListSelectorControl,{isDisabled:!b.length,onClick:function(){return Y(!0)},"aria-label":"Add all",tooltipContent:"Add all"},c().createElement(U.jN,null)),c().createElement(v.DualListSelectorControl,{isDisabled:0===I.length,onClick:function(){return Y(!1)},"aria-label":"Remove all",tooltipContent:"Remove all"},c().createElement(F.Yw,null)),c().createElement(v.DualListSelectorControl,{onClick:function(){return K(!1)},isDisabled:!I.some((function(e){return e.selected})),"aria-label":"Remove selected",tooltipContent:"Remove selected"},c().createElement(W.fP,null))),c().createElement(v.DualListSelectorPane,{title:"Chosen packages",searchInput:c().createElement(v.SearchInput,{placeholder:"Search for a package",value:D,onFocus:function(){return R("chosen")},onBlur:function(){return R("")},onChange:function(e){return A(e)}}),actions:[c().createElement(v.Button,{"aria-label":"Search button for selected packages",key:"selectedSearchButton","data-testid":"search-selected-pkgs-button",onClick:H},"Search")],isChosen:!0},c().createElement(v.DualListSelectorList,null,0===I.length?c().createElement("p",{className:"pf-u-text-align-center pf-u-mt-md"},"No packages added"):I.map((function(e,t){return e.isHidden?null:c().createElement(v.DualListSelectorListItem,{key:t,isSelected:e.selected,onOptionSelect:function(e){return $(0,t,!0)}},c().createElement(v.TextContent,{key:"".concat(e.name,"-").concat(t)},c().createElement("span",{className:"pf-c-dual-list-selector__item-text"},e.name),c().createElement("small",null,e.summary)))})))))};X.propTypes={defaultArch:b().string};const H=X;var Q=n(41626),K=["Popover"],Y=function(e){var t=e.Popover,n=(0,m.Z)(e,K),a=(0,s.useRef)();return c().createElement(Q.Z,(0,u.Z)({},n,{label:c().createElement("span",{ref:a,className:"ins-c-image--builder__popover"},n.label,c().createElement(t,null))}))};Y.propTypes={Popover:b().elementType.isRequired,label:b().node};const $=Y,J=function(){var e,t,n=null===(e=(0,(0,E.default)().getState)())||void 0===e||null===(t=e.values)||void 0===t?void 0:t["azure-tenant-id"],a=new RegExp("^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$","i");return c().createElement(v.FormGroup,null,c().createElement(v.Button,{component:"a",target:"_blank",variant:"secondary",isDisabled:!a.test(n),href:"https://login.microsoftonline.com/"+n+"/oauth2/v2.0/authorize?client_id=b94bb246-b02c-4985-9c22-d44e66f657f4&scope=openid&response_type=code&response_mode=query&redirect_uri=https://portal.azure.com"},"Authorize Image Builder"))};var ee=n(54915),te=["schema","onSubmit","onClose","customComponentMapper","defaultArch","className"];function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var oe=function(e){var t=e.schema,n=e.onSubmit,a=e.onClose,o=e.customComponentMapper,r=e.defaultArch,i=e.className,l=(0,m.Z)(e,te);return t?c().createElement(d.Z,(0,u.Z)({schema:t,className:"image-builder".concat(i?" ".concat(i):""),subscription:{values:!0},FormTemplate:function(e){return c().createElement(p.ZP,(0,u.Z)({},e,{showFormControls:!1}))},onSubmit:function(e){return n(e)},componentMapper:ae(ae({},g.YS),{},{review:O,output:j,select:ee.Z,"package-selector":{component:H,defaultArch:r},"radio-popover":$,"azure-auth-button":J},o),onCancel:a},l)):c().createElement(v.Spinner,null)};oe.propTypes={schema:b().object,onSubmit:b().func.isRequired,onClose:b().func.isRequired,customComponentMapper:b().shape((0,a.Z)({},b().string,b().oneOfType([b().node,b().shape({component:b().node})]))),defaultArch:b().string,className:b().string};const re=oe;var ie=n(98405),le=n(15265);const se={title:"Amazon Web Services",customTitle:c().createElement(v.Title,{headingLevel:"h1",size:"xl"},"Target environment - Amazon Web Service"),name:"aws-target-env",substepOf:"Target environment",nextStep:function(e){var t=e.values;return x(t,{skipAws:!0})},fields:[{component:h.Z.PLAIN_TEXT,name:"plain-text-component",label:c().createElement("p",null,"Your image will be uploaded to a temporary account on Amazon Web Services. ",c().createElement("br",null),"The image will be shared with the account you provide below. ",c().createElement("br",null),"Within the next 14 days you will need to copy the shared image to your own account. After 14 days it will be unavailable and will have to be regenerated.")},{component:h.Z.TEXT_FIELD,name:"aws-account-id",className:"pf-u-w-25","data-testid":"aws-account-id",type:"text",label:"AWS account ID",isRequired:!0,validate:[{type:y.Z.REQUIRED},{type:y.Z.EXACT_LENGTH,threshold:12}]}]},ce={title:"Microsoft Azure",customTitle:c().createElement(v.Title,{headingLevel:"h1",size:"xl"},"Target environment - Microsoft Azure"),name:"ms-azure-target-env",substepOf:"Target environment",nextStep:function(e){var t=e.values;return x(t,{skipAws:!0,skipGoogle:!0,skipAzure:!0})},fields:[{component:h.Z.PLAIN_TEXT,name:"azure-text-component",label:c().createElement(c().Fragment,null,c().createElement(v.Text,null,"Image Builder sends an image to an authorized Azure account."),c().createElement(v.Title,{headingLevel:"h3"},"Authorizing an Azure account"),c().createElement(v.Text,null,'To authorize Image Builder to push images to Microsoft Azure, the account owner must configure Image Builder as an authorized application for a specific tenant ID and give it the role of "Contributor" to at least one resource group.',c().createElement("br",null)),c().createElement("small",null,c().createElement(v.Button,{component:"a",target:"_blank",variant:"link",icon:c().createElement(le.LA,null),iconPosition:"right",isInline:!0,href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow"},"Learn more about OAuth 2.0")),c().createElement(v.Title,{headingLevel:"h2"},"Image Destination"),c().createElement(v.Text,null,"Your image will be uploaded to the resource group in the subscription you specify."))},{component:h.Z.TEXT_FIELD,name:"azure-tenant-id","data-testid":"azure-tenant-id",type:"text",label:"Tenant GUID",required:!0,isRequired:!0,validate:[{type:y.Z.REQUIRED},{type:y.Z.PATTERN,pattern:/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,message:"Please enter a valid tenant GUID"}]},{component:"azure-auth-button",name:"azure-auth-button","data-testid":"azure-auth-button",required:!0,isRequired:!0},{component:h.Z.TEXT_FIELD,name:"azure-subscription-id","data-testid":"azure-subscription-id",type:"text",label:"Subscription GUID",isRequired:!0,validate:[{type:y.Z.REQUIRED},{type:y.Z.PATTERN,pattern:/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,message:"Please enter a valid subscription GUID"}]},{component:h.Z.TEXT_FIELD,name:"azure-resource-group","data-testid":"azure-resource-group",type:"text",label:"Resource group",isRequired:!0,validate:[{type:y.Z.REQUIRED}]}]},ue={title:"Packages",name:"packages",nextStep:"review",fields:[{component:h.Z.PLAIN_TEXT,name:"packages-text-component",label:c().createElement(v.Text,null,"Add optional additional packages to your image by searching available packages.")},{component:"package-selector",name:"selected-packages",label:"Available options"}]};var me=n(6468),de=n(70363),pe=function(e){var t=e.buttonLabels,n=t.cancel,a=t.submit,o=t.back,i=(0,s.useState)(!1),l=(0,r.Z)(i,2),u=l[0],m=l[1],d=(0,s.useContext)(de.default),p=d.handlePrev,g=d.formOptions;return c().createElement(me.lP,null,(function(){return c().createElement(c().Fragment,null,c().createElement(v.Button,{variant:"primary",type:"button",isDisabled:!g.valid||g.getState().validating||u,isLoading:u,onClick:function(){g.onSubmit({values:g.getState().values,setIsSaving:m})}},u?"Creating image":a),c().createElement(v.Button,{type:"button",variant:"secondary",onClick:p,isDisabled:u},o),c().createElement("div",{className:"pf-c-wizard__footer-cancel"},c().createElement(v.Button,{type:"button",variant:"link",onClick:g.onCancel,isDisabled:u},n)))}))};pe.propTypes={buttonLabels:b().shape({cancel:b().node,submit:b().node,back:b().node}),isSaving:b().bool};const ge={name:"review",title:"Review",buttons:pe,fields:[{name:"review",component:"review"}]};var ve=n(28216),fe=n(18247),be=n(83215);function Ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function he(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ee(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const ye=function(){var e=(0,ve.I0)(),t=(0,ie.useNavigate)(),n=(0,s.useState)(),a=(0,r.Z)(n,2),i=a[0],u=a[1];return(0,s.useEffect)((function(){(0,o.Z)(l().mark((function e(){var t,n,a,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=insights)||void 0===t||null===(n=t.chrome)||void 0===n||null===(a=n.auth)||void 0===a?void 0:a.getUser();case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:o=e.t0,u((function(){return o}));case 7:case"end":return e.stop()}}),e)})))()}),[]),i?c().createElement(re,{onClose:function(){return t("/landing")},onSubmit:function(n){var a=n.values,o=n.setIsSaving;o((function(){return!0}));var r=function(e){var t,n,a,o,r={packages:null===(t=e["selected-packages"])||void 0===t?void 0:t.map((function(e){return e.name}))};e["subscription-activation"]&&(r.subscription={"activation-key":e["subscription-activation"],insights:!0,organization:Number(e["subscription-organization"]),"server-url":"subscription.rhsm.redhat.com","base-url":"https://cdn.redhat.com/"});var i=[];if(null!==(n=e["target-environment"])&&void 0!==n&&n.aws){var l={distribution:e.release,image_requests:[{architecture:"x86_64",image_type:"ami",upload_request:{type:"aws",options:{share_with_accounts:[e["aws-account-id"]]}}}],customizations:r};i.push(l)}if(null!==(a=e["target-environment"])&&void 0!==a&&a.google){var s="";switch(e["google-account-type"]){case"googleAccount":s="user:".concat(e["google-email"]);break;case"serviceAccount":s="serviceAccount:".concat(e["google-email"]);break;case"googleGroup":s="group:".concat(e["google-email"]);break;case"domain":s="domain:".concat(e["google-domain"])}var c={distribution:e.release,image_requests:[{architecture:"x86_64",image_type:"vhd",upload_request:{type:"gcp",options:{share_with_accounts:[s]}}}],customizations:r};i.push(c)}if(null!==(o=e["target-environment"])&&void 0!==o&&o.azure){var u={distribution:e.release,image_requests:[{architecture:"x86_64",image_type:"vhd",upload_request:{type:"azure",options:{tenant_id:e["azure-tenant-id"],subscription_id:e["azure-subscription-id"],resource_group:e["azure-resource-group"]}}}],customizations:r};i.push(u)}return i}(a);Promise.all(r.map((function(t){return V.Z.composeImage(t).then((function(n){e((0,fe.tE)(he(he({},n),{},{request:t,image_status:{status:"pending"}}),!0))}))}))).then((function(){t("/landing"),e((0,be.wN)({variant:"success",title:"Your image is being created"})),o(!1)})).catch((function(t){e((0,be.wN)({variant:"danger",title:"Your image could not be created",description:"Status code "+t.response.status+": "+t.response.statusText})),o(!1)}))},defaultArch:"x86_64",schema:{fields:[{component:h.Z.WIZARD,name:"image-builder-wizard",className:"image_builder",isDynamic:!0,inModal:!0,buttonLabels:{submit:"Create image"},showTitles:!0,title:"Create image",crossroads:["target-environment","release"],description:c().createElement(c().Fragment,null,"Create a RHEL image and push it to cloud providers. ",c().createElement(v.Button,{component:"a",target:"_blank",variant:"link",icon:c().createElement(le.LA,null),iconPosition:"right",isInline:!0,href:"\nhttps://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/uploading_a_customized_rhel_system_image_to_cloud_environments/index "},"Documentation")),fields:[w,se,A,ce,k(i),ue,ge]}]}}):c().createElement(v.Spinner,null)}},18247:(e,t,n)=>{"use strict";n.d(t,{tE:()=>c,ZP:()=>d});var a=n(15861),o=n(87757),r=n.n(o),i=n(87248),l=n(26698),s=function(e){return{type:l.Z.COMPOSE_FAILED,payload:{error:e}}},c=function(e,t){return{type:l.Z.COMPOSE_ADDED,payload:{compose:e,insert:t}}},u=function(e,t){return{type:l.Z.COMPOSE_UPDATED_STATUS,payload:{id:e,status:t}}},m=function(e){return function(){var t=(0,a.Z)(r().mark((function t(n){var a;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.getComposeStatus(e);case 2:a=t.sent,n(u(e,a.image_status));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};const d={composesGet:function(e,t){return function(){var n=(0,a.Z)(r().mark((function n(a){var o;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.getComposes(e,t);case 2:(o=n.sent).data.map((function(e){a(c(e,!1)),a(m(e.id))})),a((r=o.meta.count,{type:l.Z.COMPOSES_UPDATED_COUNT,payload:{count:r}}));case 5:case"end":return n.stop()}var r}),n)})));return function(e){return n.apply(this,arguments)}}()},composeStart:function(e){return function(){var t=(0,a.Z)(r().mark((function t(n){var a;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=i.Z.composeImage(e),t.abrupt("return",a.then((function(t){var a=Object.assign({},t,{request:e},{image_status:{status:"pending"}});n(c(a,!0))})).catch((function(e){500===e.response.status?n(s("Error: Something went wrong serverside")):n(s("Error: Something went wrong with the compose"))})));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},composeUpdated:function(e){return{type:l.Z.COMPOSE_UPDATED,payload:{compose:e}}},composeGetStatus:m,setRelease:function(e){var t=e.arch,n=e.distro;return{type:l.Z.SET_RELEASE,payload:{arch:t,distro:n}}},setUploadDestinations:function(e){var t=e.aws,n=e.azure,a=e.google;return{type:l.Z.SET_UPLOAD_DESTINATIONS,payload:{aws:t,azure:n,google:a}}},setUploadAWS:function(e){var t=e.shareWithAccounts;return{type:l.Z.SET_UPLOAD_AWS,payload:{shareWithAccounts:t}}},setUploadAzure:function(e){var t=e.tenantId,n=e.subscriptionId,a=e.resourceGroup;return{type:l.Z.SET_UPLOAD_AZURE,payload:{tenantId:t,subscriptionId:n,resourceGroup:a}}},setUploadGoogle:function(e){var t=e.accountType,n=e.shareWithAccounts;return{type:l.Z.SET_UPLOAD_GOOGLE,payload:{accountType:t,shareWithAccounts:n}}},setSelectedPackages:function(e){return{type:l.Z.SET_SELECTED_PACKAGES,payload:e}},setSubscription:function(e){var t=e.activationKey,n=e.insights,a=e.organization;return{type:l.Z.SET_SUBSCRIPTION,payload:{activationKey:t,insights:n,organization:a}}},setSubscribeNow:function(e){return{type:l.Z.SET_SUBSCRIBE_NOW,payload:e}}}},97890:()=>{},44370:()=>{},17657:()=>{},22972:()=>{},70347:()=>{},11452:()=>{},10497:()=>{},32857:()=>{},93818:()=>{},94498:()=>{},54476:()=>{},28992:()=>{},40837:()=>{},90479:()=>{},78752:()=>{},74282:()=>{},25238:()=>{},91993:()=>{},99624:()=>{},36974:()=>{},27479:()=>{},93661:()=>{},56024:()=>{},43390:()=>{},314:()=>{},40209:()=>{},87234:()=>{},38299:()=>{},72816:()=>{}}]);
//# sourceMappingURL=../sourcemaps/326.44c6d0dc87b6435810af63f8ae8e1262.js.map