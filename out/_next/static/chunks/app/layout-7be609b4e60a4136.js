(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{41496:function(e,n,t){Promise.resolve().then(t.bind(t,44441)),Promise.resolve().then(t.t.bind(t,62471,23)),Promise.resolve().then(t.t.bind(t,51641,23))},62471:function(){},51641:function(e){e.exports={style:{fontFamily:"'__Inter_20951f', '__Inter_Fallback_20951f'",fontStyle:"normal"},className:"__className_20951f"}},44441:function(e,n,t){"use strict";t.r(n),t.d(n,{Analytics:function(){return u},default:function(){return s},track:function(){return l}});var r=t(2265),o=()=>{window.va||(window.va=function(...e){(window.vaq=window.vaq||[]).push(e)})};function i(){return"undefined"!=typeof window}function a(){return window.vam||"production"}function c(){return"development"===a()}function l(e,n){var t,r;if(!i()){console.warn("[Vercel Web Analytics] Server-side execution of `track()` is currently not supported.");return}if(!n){null==(t=window.va)||t.call(window,"event",{name:e});return}try{let t=function(e,n){let t=e,r=[];for(let[o,i]of Object.entries(e))"object"==typeof i&&null!==i&&(n.strip?t=function(e,{[e]:n,...t}){return t}(o,t):r.push(o));if(r.length>0&&!n.strip)throw Error(`The following properties are not valid: ${r.join(", ")}. Only strings, numbers, booleans, and null are allowed.`);return t}(n,{strip:"production"===a()});null==(r=window.va)||r.call(window,"event",{name:e,data:t})}catch(e){e instanceof Error&&c()&&console.error(e)}}function u({beforeSend:e,debug:n=!0,mode:t="auto"}){return(0,r.useEffect)(()=>{!function(e={debug:!0}){var n;if(!i())return;(function(e="auto"){if("auto"===e){window.vam="production";return}window.vam=e})(e.mode),o(),e.beforeSend&&(null==(n=window.va)||n.call(window,"beforeSend",e.beforeSend));let t=c()?"https://va.vercel-scripts.com/v1/script.debug.js":"/_vercel/insights/script.js";if(document.head.querySelector(`script[src*="${t}"]`))return;let r=document.createElement("script");r.src=t,r.defer=!0,r.setAttribute("data-sdkn","@vercel/analytics"),r.setAttribute("data-sdkv","1.0.2"),r.onerror=()=>{let e=c()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/concepts/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${t}. ${e}`)},c()&&!1===e.debug&&r.setAttribute("data-debug","false"),document.head.appendChild(r)}({beforeSend:e,debug:n,mode:t})},[e,n,t]),null}var s={Analytics:u,track:l}}},function(e){e.O(0,[971,596,744],function(){return e(e.s=41496)}),_N_E=e.O()}]);