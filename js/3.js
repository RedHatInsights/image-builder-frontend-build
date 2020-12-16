(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{573:function(e,t,a){(t=a(5)(!1)).push([e.i,".error{color:var(--pf-global--danger-color--100)}.pf-c-content h3{margin-top:var(--pf-global--spacer--xl);margin-bottom:var(--pf-global--spacer--md)}@media screen and (min-width: 576px){.pf-c-content dl{grid-template:1fr / 25% 1fr;grid-gap:var(--pf-global--spacer--sm)}}\n",""]),e.exports=t},608:function(e,t,a){var s=a(609),r=a(610),n=a(575),i=a(611);e.exports=function(e){return s(e)||r(e)||n(e)||i()}},609:function(e,t,a){var s=a(576);e.exports=function(e){if(Array.isArray(e))return s(e)}},610:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},611:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},612:function(e,t,a){var s=a(573);"string"==typeof s&&(s=[[e.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},n=a(6)(s,r);s.locals&&(e.exports=s.locals),e.hot.accept(573,(function(){var t=a(573);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,s=0;for(a in e){if(!t||e[a]!==t[a])return!1;s++}for(a in t)s--;return 0===s}(s.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");n(t)})),e.hot.dispose((function(){n()}))},613:function(e,t,a){"use strict";a.r(t);var s=a(608),r=a.n(s),n=a(244),i=a.n(n),o=a(344),l=a.n(o),c=a(177),u=a.n(c),d=a(178),p=a.n(d),b=a(413),m=a.n(b),v=a(179),h=a.n(v),f=a(133),g=a.n(f),y=a(180),E=a.n(y),k=a(21),S=a.n(k),w=a(1),z=a.n(w),R=a(120),_=a(164),x=a(586),C=a(181),q=a(384),I=a(355),N=a(332),O=a(356),U=a(354),j=a(357),A=function(e){return z.a.createElement(I.a,null,z.a.createElement(N.a,{headingLevel:"h2",size:"xl"},"Image output"),z.a.createElement(O.a,{isRequired:!0,label:"Release",fieldId:"release-select"},z.a.createElement(U.a,{value:e.value,onChange:function(t){return e.setRelease(t)},isRequired:!0,"aria-label":"Select release input",id:"release-select","data-testid":"release-select"},[{value:"rhel-8",label:"Red Hat Enterprise Linux (RHEL) 8.3"}].map((function(e){return z.a.createElement(j.a,{key:e.value,value:e.value,label:e.label})})))),z.a.createElement(O.a,{isRequired:!0,label:"Target environment",fieldId:"upload-destination"},z.a.createElement(U.a,{value:e.upload.type||"",id:"upload-destination","data-testid":"upload-destination",isRequired:!0,onChange:function(t){return e.setUpload({type:t,options:e.upload.options})},"aria-label":"Select upload destination"},[{value:"aws",label:"Amazon Web Services"}].map((function(e){return z.a.createElement(j.a,{key:e.value,value:e.value,label:e.label})})))))};A.propTypes={setRelease:S.a.func,value:S.a.string,upload:S.a.object,setUpload:S.a.func};var T=A,D=a(353),L=function(e){return z.a.createElement(I.a,null,z.a.createElement(N.a,{headingLevel:"h2",size:"xl"},"Upload to AWS"),z.a.createElement(O.a,{isRequired:!0,label:"Access key ID",fieldId:"amazon-access-id",helperTextInvalid:e.errors["amazon-access-id"]&&e.errors["amazon-access-id"].value||"",validated:e.errors["amazon-access-id"]?"error":"default"},z.a.createElement(D.a,{value:e.upload.options.access_key_id||"",type:"text","aria-label":"amazon access key ID",id:"amazon-access-id","data-testid":"aws-access-key",isRequired:!0,onChange:function(t){return e.setUploadOptions(Object.assign(e.upload.options,{access_key_id:t}))}})),z.a.createElement(O.a,{isRequired:!0,label:"Secret access key",fieldId:"amazon-access-secret",helperTextInvalid:e.errors["amazon-access-secret"]&&e.errors["amazon-access-secret"].value||"",validated:e.errors["amazon-access-secret"]?"error":"default"},z.a.createElement(D.a,{value:e.upload.options.secret_access_key||"","data-testid":"aws-secret-access-key",isRequired:!0,type:"password","aria-label":"amazon secret access key",id:"amazon-access-secret",onChange:function(t){return e.setUploadOptions(Object.assign(e.upload.options,{secret_access_key:t}))}})),z.a.createElement(O.a,{isRequired:!0,label:"Service",fieldId:"amazon-service"},z.a.createElement(U.a,{value:e.upload.options.service,"aria-label":"Select amazon service",id:"amazon-service","data-testid":"aws-service-select",onChange:function(t){return e.setUploadOptions(Object.assign(e.upload.options,{service:t}))}},[{value:"ec2",label:"Amazon Elastic Compute Cloud (ec2)"},{value:"s3",label:"Amazon Simple Storage Service (s3)"}].map((function(e){return z.a.createElement(j.a,{key:e.value,value:e.value,label:e.label})})))),z.a.createElement(O.a,{isRequired:!0,label:"Region",fieldId:"amazon-region",helperTextInvalid:e.errors["amazon-region"]&&e.errors["amazon-region"].value||"",validated:e.errors["amazon-region"]?"error":"default"},z.a.createElement(D.a,{value:e.upload.options.region,type:"text","aria-label":"amazon region",id:"amazon-region","data-testid":"aws-region",isRequired:!0,onChange:function(t){return e.setUploadOptions(Object.assign(e.upload.options,{region:t}))}})),"s3"===e.upload.options.service&&z.a.createElement(O.a,{isRequired:!0,label:"Bucket",fieldId:"amazon-bucket",helperTextInvalid:e.errors["amazon-bucket"]&&e.errors["amazon-bucket"].value||"",validated:e.errors["amazon-bucket"]?"error":"default"},z.a.createElement(D.a,{value:e.upload.options.bucket||"",type:"text","aria-label":"amazon bucket",id:"amazon-bucket","data-testid":"aws-bucket",isRequired:!0,onChange:function(t){return e.setUploadOptions(Object.assign(e.upload.options,{bucket:t}))}})))};L.propTypes={setUploadOptions:S.a.func,upload:S.a.object,errors:S.a.object};var H=L,F=a(360),W=function(e){return z.a.createElement(I.a,null,z.a.createElement(N.a,{headingLevel:"h2",size:"xl"},"Registration"),z.a.createElement(O.a,{isRequired:!0,label:"Register the system"},z.a.createElement(F.a,{name:"subscribe-now-radio",isChecked:e.subscribeNow,id:"subscribe-now-radio",label:"Embed an activation key and register systems on first boot",onChange:function(){return e.setSubscribeNow(!0)},"data-testid":"register-now-radio-button"}),z.a.createElement(F.a,{name:"subscribe-later-radio",isChecked:!e.subscribeNow,label:"Register the system later",id:"subscribe-later-radio",onChange:function(){return e.setSubscribeNow(!1)},"data-testid":"register-later-radio-button"})),e.subscribeNow&&z.a.createElement(z.a.Fragment,null,z.a.createElement(O.a,{label:"Organization ID",fieldId:"subscription-organization"},z.a.createElement(D.a,{isDisabled:!0,value:e.subscription.organization||"",type:"text",id:"subscription-organization","aria-label":"Subscription organization ID","data-testid":"organization-id"})),z.a.createElement(O.a,{isRequired:!0,label:"Activation key",fieldId:"subscription-activation",helperTextInvalid:e.errors["subscription-activation"]&&e.errors["subscription-activation"].value||"",validated:e.errors["subscription-activation"]?"error":"default"},z.a.createElement(D.a,{value:e.subscription["activation-key"]||"",type:"password","data-testid":"subscription-activation",isRequired:!0,id:"subscription-activation","aria-label":"Subscription activation key",onChange:function(t){return e.setSubscription(Object.assign(e.subscription,{"activation-key":t}))}}))))};W.propTypes={setSubscription:S.a.func,setSubscribeNow:S.a.func,subscription:S.a.object,subscribeNow:S.a.bool,errors:S.a.object};var P=W,B=a(574),J=a.n(B),M=a(383),G=a(361),K=a(108),Q=(a(612),function(e){return z.a.createElement(z.a.Fragment,null,(Object.keys(e.uploadErrors).length>0||Object.keys(e.subscriptionErrors).length>0)&&z.a.createElement(M.a,{variant:"danger",className:"pf-u-mb-xl",isInline:!0,title:"Required information is missing"}),z.a.createElement(N.a,{headingLevel:"h2",size:"xl"},"Create image"),z.a.createElement(G.a,null,z.a.createElement("small",null,"Review the information and click Create image to create the image using the following criteria."),z.a.createElement("h3",null,"Image output"),z.a.createElement("dl",null,z.a.createElement("dt",null,"Release"),z.a.createElement("dd",null,{"rhel-8":"Red Hat Enterprise Linux (RHEL) 8.3"}[e.release]),z.a.createElement("dt",null,"Target environment"),z.a.createElement("dd",null,e.upload&&z.a.createElement(z.a.Fragment,null,{aws:"Amazon Web Services"}[e.upload.type]))),Object.entries(e.uploadErrors).length>0&&z.a.createElement("h3",null,"Upload to AWS"),z.a.createElement("dl",null,Object.entries(e.uploadErrors).map((function(e){var t=J()(e,2),a=t[0],s=t[1];return z.a.createElement(z.a.Fragment,{key:a},z.a.createElement("dt",null,s.label),z.a.createElement("dd",null,z.a.createElement(K.a,{className:"error"})," ",s.value))}))),z.a.createElement("h3",null,"Registration"),z.a.createElement("dl",null,z.a.createElement("dt",null,"Subscription"),!e.subscribeNow&&z.a.createElement("dd",null,"Register the system later"),e.subscribeNow&&z.a.createElement("dd",null,"Register the system on first boot"),Object.entries(e.subscriptionErrors).map((function(e){var t=J()(e,2),a=t[0],s=t[1];return z.a.createElement(z.a.Fragment,{key:a},z.a.createElement("dt",null,s.label),z.a.createElement("dd",null,z.a.createElement(K.a,{className:"error"})," ",s.value))})))))});Q.propTypes={release:S.a.string,upload:S.a.object,subscription:S.a.object,subscribeNow:S.a.bool,uploadErrors:S.a.object,subscriptionErrors:S.a.object};var V=Q,X=a(585);function Y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var Z=function(e){E()(n,e);var t,a,s=(t=n,function(){var e,a=g()(t);if(Y()){var s=g()(this).constructor;e=Reflect.construct(a,arguments,s)}else e=a.apply(this,arguments);return h()(this,e)});function n(e){var t;return u()(this,n),(t=s.call(this,e)).setRelease=t.setRelease.bind(m()(t)),t.setUpload=t.setUpload.bind(m()(t)),t.setUploadOptions=t.setUploadOptions.bind(m()(t)),t.setSubscription=t.setSubscription.bind(m()(t)),t.setSubscribeNow=t.setSubscribeNow.bind(m()(t)),t.onStep=t.onStep.bind(m()(t)),t.onSave=t.onSave.bind(m()(t)),t.onClose=t.onClose.bind(m()(t)),t.validate=t.validate.bind(m()(t)),t.validateUploadAmazon=t.validateUploadAmazon.bind(m()(t)),t.validateSubscription=t.validateSubscription.bind(m()(t)),t.state={release:"rhel-8",upload:{type:"aws",options:{service:"ec2",region:"eu-west-2",access_key_id:null,secret_access_key:null,bucket:null}},subscription:{organization:null,"activation-key":null,"server-url":"subscription.rhsm.redhat.com","base-url":"https://cdn.redhat.com/",insights:!0},subscribeNow:!0,uploadErrors:{},subscriptionErrors:{}},t}return p()(n,[{key:"componentDidMount",value:(a=l()(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:t=e.sent,this.setState({subscription:{organization:Number(t.identity.internal.org_id)}});case 4:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"onStep",value:function(e){"Review"===e.name&&this.validate()}},{key:"validate",value:function(){"aws"===this.state.upload.type?this.validateUploadAmazon():this.setState({uploadErrors:{}}),this.state.subscribeNow?this.validateSubscription():this.setState({subscriptionErrors:{}})}},{key:"validateUploadAmazon",value:function(){var e={};this.state.upload.options.access_key_id||(e["amazon-access-id"]={label:"Access key ID",value:"A value is required"}),this.state.upload.options.secret_access_key||(e["amazon-access-secret"]={label:"Secret access key",value:"A value is required"}),this.state.upload.options.region||(e["amazon-region"]={label:"Region",value:"A value is required"}),"s3"!==this.state.upload.options.service||this.state.upload.options.bucket||(e["amazon-bucket"]={label:"Bucket",value:"A value is required"}),this.setState({uploadErrors:e})}},{key:"validateSubscription",value:function(){var e={};this.state.subscription["activation-key"]||(e["subscription-activation"]={label:"Activation key",value:"A value is required"}),this.setState({subscriptionErrors:e})}},{key:"setRelease",value:function(e){this.setState({release:e})}},{key:"setUpload",value:function(e){this.setState({upload:e})}},{key:"setUploadOptions",value:function(e){this.setState((function(t){return{upload:{type:t.upload.type,options:e}}}))}},{key:"setSubscribeNow",value:function(e){this.setState({subscribeNow:e})}},{key:"setSubscription",value:function(e){this.setState({subscription:e},this.validate)}},{key:"onSave",value:function(){var e=this,t={distribution:this.state.release,image_requests:[{architecture:"x86_64",image_type:"qcow2",upload_requests:[{type:"aws",options:{region:this.state.upload.options.region,s3:{access_key_id:this.state.upload.options.access_key_id,secret_access_key:this.state.upload.options.secret_access_key,bucket:this.state.upload.options.bucket},ec2:{access_key_id:this.state.upload.options.access_key_id,secret_access_key:this.state.upload.options.secret_access_key}}}]}],customizations:{subscription:this.state.subscription}},a=this.props.updateCompose;X.a.composeImage(t).then((function(s){var r={};r[s.id]={status:"request sent",distribution:t.distribution,architecture:t.image_requests[0].architecture,image_type:t.image_requests[0].image_type},a(r),e.props.history.push("/landing")}))}},{key:"onClose",value:function(){this.props.history.push("/landing")}},{key:"render",value:function(){var e={name:"Image output",component:z.a.createElement(T,{value:this.state.release,upload:this.state.upload,setRelease:this.setRelease,setUpload:this.setUpload})},t={name:"Upload to AWS",component:z.a.createElement(H,{upload:this.state.upload,setUploadOptions:this.setUploadOptions,errors:this.state.uploadErrors})},a=[e].concat(r()("aws"===this.state.upload.type?[t]:[]),[{name:"Registration",component:z.a.createElement(P,{subscription:this.state.subscription,subscribeNow:this.state.subscribeNow,setSubscription:this.setSubscription,setSubscribeNow:this.setSubscribeNow,errors:this.state.subscriptionErrors})},{name:"Review",component:z.a.createElement(V,{release:this.state.release,upload:this.state.upload,subscription:this.state.subscription,subscribeNow:this.state.subscribeNow,uploadErrors:this.state.uploadErrors,subscriptionErrors:this.state.subscriptionErrors}),nextButtonText:"Create"}]);return z.a.createElement(z.a.Fragment,null,z.a.createElement(C.PageHeader,null,z.a.createElement(C.PageHeaderTitle,{title:"Create a new image"})),z.a.createElement(q.a,{onNext:this.onStep,onGoToStep:this.onStep,isInPage:!0,steps:a,onClose:this.onClose,onSave:this.onSave}))}}]),n}(w.Component);Z.propTypes={updateCompose:S.a.func,history:S.a.object};t.default=Object(_.connect)(null,(function(e){return{updateCompose:function(t){return e(x.a.updateCompose(t))}}}))(Object(R.o)(Z))}}]);
//# sourceMappingURL=3.js.map