(self.webpackChunkimage_builder=self.webpackChunkimage_builder||[]).push([[494],{14494:(e,n,r)=>{"use strict";r.r(n),r.d(n,{Provider:()=>f,ReactReduxContext:()=>u,batch:()=>Q.unstable_batchedUpdates,connect:()=>j,connectAdvanced:()=>O,createDispatchHook:()=>I,createSelectorHook:()=>z,createStoreHook:()=>A,shallowEqual:()=>x,useDispatch:()=>L,useSelector:()=>J,useStore:()=>K});var t=r(31154),o=r.n(t),u=(r(45697),o().createContext(null)),i=function(e){e()},a=function(){return i},s={notify:function(){}},c=function(){function e(e,n){this.store=e,this.parentSub=n,this.unsubscribe=null,this.listeners=s,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var n=e.prototype;return n.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},n.notifyNestedSubs=function(){this.listeners.notify()},n.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},n.isSubscribed=function(){return Boolean(this.unsubscribe)},n.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=function(){var e=a(),n=null,r=null;return{clear:function(){n=null,r=null},notify:function(){e((function(){for(var e=n;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],r=n;r;)e.push(r),r=r.next;return e},subscribe:function(e){var t=!0,o=r={callback:e,next:null,prev:r};return o.prev?o.prev.next=o:n=o,function(){t&&null!==n&&(t=!1,o.next?o.next.prev=o.prev:r=o.prev,o.prev?o.prev.next=o.next:n=o.next)}}}}())},n.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=s)},e}(),p="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?t.useLayoutEffect:t.useEffect;const f=function(e){var n=e.store,r=e.context,i=e.children,a=(0,t.useMemo)((function(){var e=new c(n);return e.onStateChange=e.notifyNestedSubs,{store:n,subscription:e}}),[n]),s=(0,t.useMemo)((function(){return n.getState()}),[n]);p((function(){var e=a.subscription;return e.trySubscribe(),s!==n.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[a,s]);var f=r||u;return o().createElement(f.Provider,{value:a},i)};var d=r(22122),l=r(19756),v=r(8679),h=r.n(v),b=r(59864),m=[],y=[null,null];function P(e,n){var r=e[1];return[n.payload,r+1]}function S(e,n,r){p((function(){return e.apply(void 0,n)}),r)}function g(e,n,r,t,o,u,i){e.current=t,n.current=o,r.current=!1,u.current&&(u.current=null,i())}function w(e,n,r,t,o,u,i,a,s,c){if(e){var p=!1,f=null,d=function(){if(!p){var e,r,d=n.getState();try{e=t(d,o.current)}catch(e){r=e,f=e}r||(f=null),e===u.current?i.current||s():(u.current=e,a.current=e,i.current=!0,c({type:"STORE_UPDATED",payload:{error:r}}))}};return r.onStateChange=d,r.trySubscribe(),d(),function(){if(p=!0,r.tryUnsubscribe(),r.onStateChange=null,f)throw f}}}var C=function(){return[null,0]};function O(e,n){void 0===n&&(n={});var r=n,i=r.getDisplayName,a=void 0===i?function(e){return"ConnectAdvanced("+e+")"}:i,s=r.methodName,p=void 0===s?"connectAdvanced":s,f=r.renderCountProp,v=void 0===f?void 0:f,O=r.shouldHandleStateChanges,E=void 0===O||O,x=r.storeKey,M=void 0===x?"store":x,R=(r.withRef,r.forwardRef),N=void 0!==R&&R,T=r.context,q=void 0===T?u:T,D=(0,l.Z)(r,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]),k=q;return function(n){var r=n.displayName||n.name||"Component",u=a(r),i=(0,d.Z)({},D,{getDisplayName:a,methodName:p,renderCountProp:v,shouldHandleStateChanges:E,storeKey:M,displayName:u,wrappedComponentName:r,WrappedComponent:n}),s=D.pure,f=s?t.useMemo:function(e){return e()};function O(r){var u=(0,t.useMemo)((function(){var e=r.reactReduxForwardedRef,n=(0,l.Z)(r,["reactReduxForwardedRef"]);return[r.context,e,n]}),[r]),a=u[0],s=u[1],p=u[2],v=(0,t.useMemo)((function(){return a&&a.Consumer&&(0,b.isContextConsumer)(o().createElement(a.Consumer,null))?a:k}),[a,k]),h=(0,t.useContext)(v),O=Boolean(r.store)&&Boolean(r.store.getState)&&Boolean(r.store.dispatch);Boolean(h)&&Boolean(h.store);var x=O?r.store:h.store,M=(0,t.useMemo)((function(){return function(n){return e(n.dispatch,i)}(x)}),[x]),R=(0,t.useMemo)((function(){if(!E)return y;var e=new c(x,O?null:h.subscription),n=e.notifyNestedSubs.bind(e);return[e,n]}),[x,O,h]),N=R[0],T=R[1],q=(0,t.useMemo)((function(){return O?h:(0,d.Z)({},h,{subscription:N})}),[O,h,N]),D=(0,t.useReducer)(P,m,C),Z=D[0][0],B=D[1];if(Z&&Z.error)throw Z.error;var H=(0,t.useRef)(),W=(0,t.useRef)(p),F=(0,t.useRef)(),U=(0,t.useRef)(!1),j=f((function(){return F.current&&p===W.current?F.current:M(x.getState(),p)}),[x,Z,p]);S(g,[W,H,U,p,j,F,T]),S(w,[E,x,N,M,W,H,U,F,T,B],[x,N,M]);var _=(0,t.useMemo)((function(){return o().createElement(n,(0,d.Z)({},j,{ref:s}))}),[s,n,j]);return(0,t.useMemo)((function(){return E?o().createElement(v.Provider,{value:q},_):_}),[v,_,q])}var x=s?o().memo(O):O;if(x.WrappedComponent=n,x.displayName=O.displayName=u,N){var R=o().forwardRef((function(e,n){return o().createElement(x,(0,d.Z)({},e,{reactReduxForwardedRef:n}))}));return R.displayName=u,R.WrappedComponent=n,h()(R,n)}return h()(x,n)}}function E(e,n){return e===n?0!==e||0!==n||1/e==1/n:e!=e&&n!=n}function x(e,n){if(E(e,n))return!0;if("object"!=typeof e||null===e||"object"!=typeof n||null===n)return!1;var r=Object.keys(e),t=Object.keys(n);if(r.length!==t.length)return!1;for(var o=0;o<r.length;o++)if(!Object.prototype.hasOwnProperty.call(n,r[o])||!E(e[r[o]],n[r[o]]))return!1;return!0}function M(e){return function(n,r){var t=e(n,r);function o(){return t}return o.dependsOnOwnProps=!1,o}}function R(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function N(e,n){return function(n,r){r.displayName;var t=function(e,n){return t.dependsOnOwnProps?t.mapToProps(e,n):t.mapToProps(e)};return t.dependsOnOwnProps=!0,t.mapToProps=function(n,r){t.mapToProps=e,t.dependsOnOwnProps=R(e);var o=t(n,r);return"function"==typeof o&&(t.mapToProps=o,t.dependsOnOwnProps=R(o),o=t(n,r)),o},t}}const T=[function(e){return"function"==typeof e?N(e):void 0},function(e){return e?void 0:M((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?M((function(n){return function(e,n){var r={},t=function(t){var o=e[t];"function"==typeof o&&(r[t]=function(){return n(o.apply(void 0,arguments))})};for(var o in e)t(o);return r}(e,n)})):void 0}],q=[function(e){return"function"==typeof e?N(e):void 0},function(e){return e?void 0:M((function(){return{}}))}];function D(e,n,r){return(0,d.Z)({},r,e,n)}const k=[function(e){return"function"==typeof e?function(e){return function(n,r){r.displayName;var t,o=r.pure,u=r.areMergedPropsEqual,i=!1;return function(n,r,a){var s=e(n,r,a);return i?o&&u(s,t)||(t=s):(i=!0,t=s),t}}}(e):void 0},function(e){return e?void 0:function(){return D}}];function Z(e,n,r,t){return function(o,u){return r(e(o,u),n(t,u),u)}}function B(e,n,r,t,o){var u,i,a,s,c,p=o.areStatesEqual,f=o.areOwnPropsEqual,d=o.areStatePropsEqual,l=!1;return function(o,v){return l?function(o,l){var v,h,b=!f(l,i),m=!p(o,u);return u=o,i=l,b&&m?(a=e(u,i),n.dependsOnOwnProps&&(s=n(t,i)),c=r(a,s,i)):b?(e.dependsOnOwnProps&&(a=e(u,i)),n.dependsOnOwnProps&&(s=n(t,i)),c=r(a,s,i)):m?(v=e(u,i),h=!d(v,a),a=v,h&&(c=r(a,s,i)),c):c}(o,v):(a=e(u=o,i=v),s=n(t,i),c=r(a,s,i),l=!0,c)}}function H(e,n){var r=n.initMapStateToProps,t=n.initMapDispatchToProps,o=n.initMergeProps,u=(0,l.Z)(n,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),i=r(e,u),a=t(e,u),s=o(e,u);return(u.pure?B:Z)(i,a,s,e,u)}function W(e,n,r){for(var t=n.length-1;t>=0;t--){var o=n[t](e);if(o)return o}return function(n,t){throw new Error("Invalid value of type "+typeof e+" for "+r+" argument when connecting component "+t.wrappedComponentName+".")}}function F(e,n){return e===n}function U(e){var n=void 0===e?{}:e,r=n.connectHOC,t=void 0===r?O:r,o=n.mapStateToPropsFactories,u=void 0===o?q:o,i=n.mapDispatchToPropsFactories,a=void 0===i?T:i,s=n.mergePropsFactories,c=void 0===s?k:s,p=n.selectorFactory,f=void 0===p?H:p;return function(e,n,r,o){void 0===o&&(o={});var i=o,s=i.pure,p=void 0===s||s,v=i.areStatesEqual,h=void 0===v?F:v,b=i.areOwnPropsEqual,m=void 0===b?x:b,y=i.areStatePropsEqual,P=void 0===y?x:y,S=i.areMergedPropsEqual,g=void 0===S?x:S,w=(0,l.Z)(i,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),C=W(e,u,"mapStateToProps"),O=W(n,a,"mapDispatchToProps"),E=W(r,c,"mergeProps");return t(f,(0,d.Z)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:C,initMapDispatchToProps:O,initMergeProps:E,pure:p,areStatesEqual:h,areOwnPropsEqual:m,areStatePropsEqual:P,areMergedPropsEqual:g},w))}}const j=U();function _(){return(0,t.useContext)(u)}function A(e){void 0===e&&(e=u);var n=e===u?_:function(){return(0,t.useContext)(e)};return function(){return n().store}}var K=A();function I(e){void 0===e&&(e=u);var n=e===u?K:A(e);return function(){return n().dispatch}}var L=I(),V=function(e,n){return e===n};function z(e){void 0===e&&(e=u);var n=e===u?_:function(){return(0,t.useContext)(e)};return function(e,r){void 0===r&&(r=V);var o=n(),u=function(e,n,r,o){var u,i=(0,t.useReducer)((function(e){return e+1}),0)[1],a=(0,t.useMemo)((function(){return new c(r,o)}),[r,o]),s=(0,t.useRef)(),f=(0,t.useRef)(),d=(0,t.useRef)(),l=(0,t.useRef)(),v=r.getState();try{if(e!==f.current||v!==d.current||s.current){var h=e(v);u=void 0!==l.current&&n(h,l.current)?l.current:h}else u=l.current}catch(e){throw s.current&&(e.message+="\nThe error may be correlated with this previous error:\n"+s.current.stack+"\n\n"),e}return p((function(){f.current=e,d.current=v,l.current=u,s.current=void 0})),p((function(){function e(){try{var e=r.getState(),t=f.current(e);if(n(t,l.current))return;l.current=t,d.current=e}catch(e){s.current=e}i()}return a.onStateChange=e,a.trySubscribe(),e(),function(){return a.tryUnsubscribe()}}),[r,a]),u}(e,r,o.store,o.subscription);return(0,t.useDebugValue)(u),u}}var G,J=z(),Q=r(46265);G=Q.unstable_batchedUpdates,i=G}}]);
//# sourceMappingURL=../sourcemaps/494.771cb3349e147529e0d0.js.map