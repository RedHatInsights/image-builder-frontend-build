(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{417:function(e,t,n){"use strict";n.r(t);var a=n(48),r=n.n(a),o=n(49),c=n.n(o),s=n(50),u=n.n(s),i=n(34),l=n.n(i),p=n(51),f=n.n(p),m=n(1),d=n.n(m),v=n(26),h=n(52),g=n(367),y=n.n(g),b=n(200),C=n.n(b),E=n(0),R=n.n(E),O=n(44),S=n(378),k=n(38),w=n(121),j=n(17),T=n(182),D=n(181),I=n(379);function _(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var P=function(e){f()(a,e);var t,n=(t=a,function(){var e,n=l()(t);if(_()){var a=l()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return u()(this,e)});function a(e){var t;return r()(this,a),(t=n.call(this,e)).state={columns:[{title:"Image"},"Target","Release","Status",{title:"",props:{className:"pf-u-text-align-right"},columnTransforms:[Object(w.b)(w.a.hiddenOnXs,w.a.hiddenOnSm,w.a.hiddenOnMd,w.a.visibleOnLg)]}]},t.pollComposeStatuses=t.pollComposeStatuses.bind(C()(t)),t}return c()(a,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.pollComposeStatuses()}),8e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"pollComposeStatuses",value:function(){var e=this.props,t=e.updateCompose,n=e.composes;Object.entries(n).map((function(e){var n=y()(e,2),a=n[0],r=n[1];I.a.getComposeStatus(a).then((function(e){var n={};n[a]=Object.assign({},r,{status:e.status}),t(n)}))}))}},{key:"render",value:function(){var e=this.props.composes,t=Object.entries(e).map((function(e){var t=y()(e,2),n=t[0],a=t[1];return{cells:[n,a.image_type,a.distribution,a.status,""]}}));return d.a.createElement(d.a.Fragment,null,d.a.createElement(h.TableToolbar,null,d.a.createElement(k.Link,{to:"/imagewizard",className:"pf-c-button pf-m-primary","data-testid":"create-image-action"},"Create image")),d.a.createElement(j.b,{"aria-label":"Images",rows:t,cells:this.state.columns,"data-testid":"images-table"},d.a.createElement(T.a,null),d.a.createElement(D.a,null)))}}]),a}(m.Component);P.propTypes={composes:R.a.object,updateCompose:R.a.func};var x=Object(O.connect)((function(e){return{composes:e.composes}}),(function(e){return{updateCompose:function(t){return e(S.a.updateCompose(t))}}}))(P);function N(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var F=function(e){f()(a,e);var t,n=(t=a,function(){var e,n=l()(t);if(N()){var a=l()(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return u()(this,e)});function a(e){return r()(this,a),n.call(this,e)}return c()(a,[{key:"render",value:function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement(h.PageHeader,null,d.a.createElement(h.PageHeaderTitle,{title:"Images"})),d.a.createElement("section",{className:"pf-l-page__main-section pf-c-page__main-section"},d.a.createElement(x,null)))}}]),a}(m.Component);t.default=Object(v.o)(F)}}]);
//# sourceMappingURL=4.js.map