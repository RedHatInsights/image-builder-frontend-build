(self.webpackChunkimage_builder=self.webpackChunkimage_builder||[]).push([[247],{18247:(t,e,n)=>{"use strict";n.d(e,{tE:()=>i,ZP:()=>f});var r=n(87757),a=n.n(r),o=n(92137),s=n(65800),u=n(26698),c=function(t){return{type:u.Z.COMPOSE_FAILED,payload:{error:t}}},i=function(t,e){return{type:u.Z.COMPOSE_ADDED,payload:{compose:t,insert:e}}},p=function(t,e){return{type:u.Z.COMPOSE_UPDATED_STATUS,payload:{id:t,status:e}}},d=function(t){return function(){var e=(0,o.Z)(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.getComposeStatus(t);case 2:r=e.sent,n(p(t,r.image_status));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};const f={composesGet:function(t,e){return function(){var n=(0,o.Z)(a().mark((function n(r){var o;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.getComposes(t,e);case 2:(o=n.sent).data.map((function(t){r(i(t,!1)),r(d(t.id))})),r((a=o.meta.count,{type:u.Z.COMPOSES_UPDATED_COUNT,payload:{count:a}}));case 5:case"end":return n.stop()}var a}),n)})));return function(t){return n.apply(this,arguments)}}()},composeStart:function(t){return function(){var e=(0,o.Z)(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.Z.composeImage(t),e.abrupt("return",r.then((function(e){var r=Object.assign({},e,{request:t},{image_status:{status:"pending"}});n(i(r,!0))})).catch((function(t){500===t.response.status?n(c("Error: Something went wrong serverside")):n(c("Error: Something went wrong with the compose"))})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},composeUpdated:function(t){return{type:u.Z.COMPOSE_UPDATED,payload:{compose:t}}},composeGetStatus:d,setRelease:function(t){var e=t.arch,n=t.distro;return{type:u.Z.SET_RELEASE,payload:{arch:e,distro:n}}},setUploadDestinations:function(t){var e=t.aws,n=t.azure,r=t.google;return{type:u.Z.SET_UPLOAD_DESTINATIONS,payload:{aws:e,azure:n,google:r}}},setUploadAWS:function(t){var e=t.shareWithAccounts;return{type:u.Z.SET_UPLOAD_AWS,payload:{shareWithAccounts:e}}},setUploadAzure:function(t){var e=t.tenantId,n=t.subscriptionId,r=t.resourceGroup;return{type:u.Z.SET_UPLOAD_AZURE,payload:{tenantId:e,subscriptionId:n,resourceGroup:r}}},setUploadGoogle:function(t){var e=t.accountType,n=t.shareWithAccounts;return{type:u.Z.SET_UPLOAD_GOOGLE,payload:{accountType:e,shareWithAccounts:n}}},setSelectedPackages:function(t){return{type:u.Z.SET_SELECTED_PACKAGES,payload:t}},setSubscription:function(t){var e=t.activationKey,n=t.insights,r=t.organization;return{type:u.Z.SET_SUBSCRIPTION,payload:{activationKey:e,insights:n,organization:r}}},setSubscribeNow:function(t){return{type:u.Z.SET_SUBSCRIBE_NOW,payload:t}}}}}]);
//# sourceMappingURL=../sourcemaps/247.421b9b32f5405a2a6cfb25401d057be4.js.map