!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";const e="single-filez-load-image",t="single-filez-image-loaded",s=globalThis.browser,o=e=>globalThis.dispatchEvent(e),n=globalThis.CustomEvent,i=globalThis.document,a=globalThis.HTMLDocument;let r;if(r=window._singleFileZ_fontFaces?window._singleFileZ_fontFaces:window._singleFileZ_fontFaces=[],i instanceof a&&s&&s.runtime&&s.runtime.getURL){l="single-filez-new-font-face",d=e=>{const t=e.detail;r.find((e=>JSON.stringify(e)==JSON.stringify(t)))||r.push(e.detail)},globalThis.addEventListener(l,d,c);let e=i.createElement("script");e.src="data:,("+function(){"undefined"==typeof globalThis&&(window.globalThis=window);const e=globalThis.console,t=e=>globalThis.dispatchEvent(e),s=globalThis.CustomEvent,o=globalThis.FileReader,n=globalThis.Blob,i=e&&e.warn&&((...t)=>e.warn(...t))||(()=>{}),a="single-filez-new-font-face",r={family:"font-family",style:"font-style",weight:"font-weight",stretch:"font-stretch",unicodeRange:"unicode-range",variant:"font-variant",featureSettings:"font-feature-settings"};if(globalThis.FontFace){const e=globalThis.FontFace;let l;globalThis.FontFace=function(){l||(i("SingleFileZ is hooking the FontFace constructor to get font URLs."),l=!0);const d={};d["font-family"]=arguments[0],d.src=arguments[1];const c=arguments[2];if(c&&Object.keys(c).forEach((e=>{r[e]&&(d[r[e]]=c[e])})),d.src instanceof ArrayBuffer){const e=new o;e.readAsDataURL(new n([d.src])),e.addEventListener("load",(()=>{d.src="url("+e.result+")",t(new s(a,{detail:d}))}))}else t(new s(a,{detail:d}));return new e(...arguments)},globalThis.FontFace.toString=function(){return"function FontFace() { [native code] }"}}}.toString()+")()",(i.documentElement||i).appendChild(e),e.remove(),e=i.createElement("script"),e.src=s.runtime.getURL("/dist/web/hooks/hooks-frames-web.js"),e.async=!1,(i.documentElement||i).appendChild(e),e.remove()}var l,d,c;const m=new RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)","ig");const u="data-single-filez-removed-content",f="data-single-filez-hidden-content",g="data-single-filez-kept-content",h="data-single-filez-hidden-frame",p="data-single-filez-preserved-space-element",b="data-single-filez-shadow-root-element",w="data-single-filez-image",y="data-single-filez-poster",E="data-single-filez-canvas",T="data-single-filez-import",A="data-single-filez-input-value",I="data-single-filez-lazy-loaded-src",v="data-single-filez-stylesheet",S="data-single-filez-disabled-noscript",R="data-single-filez-async-script",F="*:not(base):not(link):not(meta):not(noscript):not(script):not(style):not(template):not(title)",C=["NOSCRIPT","DISABLED-NOSCRIPT","META","LINK","STYLE","TITLE","TEMPLATE","SOURCE","OBJECT","SCRIPT","HEAD"],z=/^'(.*?)'$/,M=/^"(.*?)"$/,N={regular:"400",normal:"400",bold:"700",bolder:"700",lighter:"100"},k="single-file-ui-element";function q(e,t,s,o,n={usedFonts:new Map,canvases:[],images:[],posters:[],shadowRoots:[],imports:[],markedElements:[]},i){return Array.from(s.childNodes).filter((t=>t instanceof e.HTMLElement||t instanceof e.SVGElement)).forEach((s=>{let a,r,l;if((o.removeHiddenElements||o.removeUnusedFonts||o.compressHTML)&&(l=e.getComputedStyle(s),s instanceof e.HTMLElement&&o.removeHiddenElements&&(r=(i||s.closest("html > head"))&&C.includes(s.tagName)||s.closest("details"),r||(a=i||function(e,t){let s=!1;if(t){const o=t.getPropertyValue("display"),n=t.getPropertyValue("opacity"),i=t.getPropertyValue("visibility");if(s="none"==o,!s&&("0"==n||"hidden"==i)&&e.getBoundingClientRect){const t=e.getBoundingClientRect();s=!t.width&&!t.height}}return Boolean(s)}(s,l),a&&(s.setAttribute(f,""),n.markedElements.push(s)))),!a)){if(o.compressHTML&&l){const e=l.getPropertyValue("white-space");e&&e.startsWith("pre")&&(s.setAttribute(p,""),n.markedElements.push(s))}o.removeUnusedFonts&&(L(l,o,n.usedFonts),L(e.getComputedStyle(s,":first-letter"),o,n.usedFonts),L(e.getComputedStyle(s,":before"),o,n.usedFonts),L(e.getComputedStyle(s,":after"),o,n.usedFonts))}!function(e,t,s,o,n,i,a){if("CANVAS"==s.tagName)try{const t=function(e,t,s){let o=t.naturalWidth,n=t.naturalHeight;if(!o&&!n){let i,a,r,l,d,c,m,u,f=!1;if("content-box"==(s=s||e.getComputedStyle(t)).getPropertyValue("box-sizing")){const e=t.style.getPropertyValue("box-sizing"),s=t.style.getPropertyPriority("box-sizing"),o=t.clientWidth;t.style.setProperty("box-sizing","border-box","important"),f=t.clientWidth!=o,e?t.style.setProperty("box-sizing",e,s):t.style.removeProperty("box-sizing")}i=D("padding-left",s),a=D("padding-right",s),r=D("padding-top",s),l=D("padding-bottom",s),f?(d=D("border-left-width",s),c=D("border-right-width",s),m=D("border-top-width",s),u=D("border-bottom-width",s)):d=c=m=u=0,o=Math.max(0,t.clientWidth-i-a-d-c),n=Math.max(0,t.clientHeight-r-l-m-u)}return{pxWidth:o,pxHeight:n}}(e,s,a);n.canvases.push({dataURI:s.toDataURL("image/png",""),width:t.width,height:t.height}),s.setAttribute(E,n.canvases.length-1),n.markedElements.push(s)}catch(e){}if("IMG"==s.tagName){const e={currentSrc:i?"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==":o.loadDeferredImages&&s.getAttribute(I)||s.currentSrc};n.images.push(e),s.setAttribute(w,n.images.length-1),n.markedElements.push(s),s.removeAttribute(I)}if("VIDEO"==s.tagName&&!s.poster){const e=t.createElement("canvas"),o=e.getContext("2d");e.width=s.clientWidth,e.height=s.clientHeight;try{o.drawImage(s,0,0,e.width,e.height),n.posters.push(e.toDataURL("image/png","")),s.setAttribute(y,n.posters.length-1),n.markedElements.push(s)}catch(e){}}"IFRAME"==s.tagName&&i&&o.removeHiddenElements&&(s.setAttribute(h,""),n.markedElements.push(s));"LINK"==s.tagName&&s.import&&s.import.documentElement&&(n.imports.push({content:O(s.import)}),s.setAttribute(T,n.imports.length-1),n.markedElements.push(s));"INPUT"==s.tagName&&("password"!=s.type&&(s.setAttribute(A,s.value),n.markedElements.push(s)),"radio"!=s.type&&"checkbox"!=s.type||(s.setAttribute(A,s.checked),n.markedElements.push(s)));"TEXTAREA"==s.tagName&&(s.setAttribute(A,s.value),n.markedElements.push(s));"SELECT"==s.tagName&&s.querySelectorAll("option").forEach((e=>{e.selected&&(e.setAttribute(A,""),n.markedElements.push(e))}));"SCRIPT"==s.tagName&&(s.async&&""!=s.getAttribute("async")&&"async"!=s.getAttribute("async")&&(s.setAttribute(R,""),n.markedElements.push(s)),s.textContent=s.textContent.replace(/<\/script>/gi,"<\\/script>"))}(e,t,s,o,n,a,l);const d=!(s instanceof e.SVGElement)&&x(s);if(d&&!s.classList.contains(k)){const i={};s.setAttribute(b,n.shadowRoots.length),n.markedElements.push(s),n.shadowRoots.push(i),q(e,t,d,o,n,a),i.content=d.innerHTML,i.delegatesFocus=d.delegatesFocus,i.mode=d.mode,d.adoptedStyleSheets&&d.adoptedStyleSheets.length&&(i.adoptedStyleSheets=Array.from(d.adoptedStyleSheets).map((e=>Array.from(e.cssRules).map((e=>e.cssText)).join("\n"))))}q(e,t,s,o,n,a),!o.autoSaveExternalSave&&o.removeHiddenElements&&i&&(r||""==s.getAttribute(g)?s.parentElement&&(s.parentElement.setAttribute(g,""),n.markedElements.push(s.parentElement)):a&&(s.setAttribute(u,""),n.markedElements.push(s)))})),n}function L(e,t,s){if(e){const o=e.getPropertyValue("font-style")||"normal";e.getPropertyValue("font-family").split(",").forEach((n=>{if(n=_(n),!t.loadedFonts||t.loadedFonts.find((e=>_(e.family)==n&&e.style==o))){const t=(i=e.getPropertyValue("font-weight"),N[i.toLowerCase().trim()]||i),a=e.getPropertyValue("font-variant")||"normal",r=[n,t,o,a];s.set(JSON.stringify(r),[n,t,o,a])}var i}))}}function x(e){const t=globalThis.chrome;if(e.openOrClosedShadowRoot)return e.openOrClosedShadowRoot;if(!(t&&t.dom&&t.dom.openOrClosedShadowRoot))return e.shadowRoot;try{return t.dom.openOrClosedShadowRoot(e)}catch(t){return e.shadowRoot}}function _(e=""){return function(e){e=e.match(z)?e.replace(z,"$1"):e.replace(M,"$1");return e.trim()}((t=e.trim(),t.replace(m,((e,t,s)=>{const o="0x"+t-65536;return o!=o||s?t:o<0?String.fromCharCode(o+65536):String.fromCharCode(o>>10|55296,1023&o|56320)})))).toLowerCase();var t}function P(e){if(e){const t=[];return e.querySelectorAll("style").forEach(((s,o)=>{try{const n=e.createElement("style");n.textContent=s.textContent,e.body.appendChild(n);const i=n.sheet;n.remove(),i&&i.cssRules.length==s.sheet.cssRules.length||(s.setAttribute(v,o),t[o]=Array.from(s.sheet.cssRules).map((e=>e.cssText)).join("\n"))}catch(e){}})),t}}function D(e,t){if(t.getPropertyValue(e).endsWith("px"))return parseFloat(t.getPropertyValue(e))}function O(e){const t=e.doctype;let s="";return t&&(s="<!DOCTYPE "+t.nodeName,t.publicId?(s+=' PUBLIC "'+t.publicId+'"',t.systemId&&(s+=' "'+t.systemId+'"')):t.systemId&&(s+=' SYSTEM "'+t.systemId+'"'),t.internalSubset&&(s+=" ["+t.internalSubset+"]"),s+="> "),s+e.documentElement.outerHTML}const U=I,B=k,V="attributes",H=globalThis.browser,W=globalThis.document,j=globalThis.MutationObserver,J=(e,t,s)=>globalThis.addEventListener(e,t,s),Z=(e,t,s)=>globalThis.removeEventListener(e,t,s),K=new Map;async function G(s){if(W.documentElement){K.clear();const i=Math.max(W.documentElement.scrollHeight-1.5*W.documentElement.clientHeight,0),a=Math.max(W.documentElement.scrollWidth-1.5*W.documentElement.clientWidth,0);if(globalThis.scrollY<=i&&globalThis.scrollX<=a)return function(s){return new Promise((async i=>{let a;const r=new Set,l=new j((async e=>{if((e=e.filter((e=>e.type==V))).length){e.filter((e=>{if("src"==e.attributeName&&(e.target.setAttribute(U,e.target.src),e.target.addEventListener("load",c)),"src"==e.attributeName||"srcset"==e.attributeName||"SOURCE"==e.target.tagName)return!e.target.classList||!e.target.classList.contains(B)})).length&&(a=!0,await $(l,s,f),r.size||await Y(l,s,f))}}));async function d(e){await Q("idleTimeout",(async()=>{a?(te("idleTimeout"),await d(Math.max(500,e/2))):(te("loadTimeout"),te("maxTimeout"),X(l,s,f))}),e)}function c(e){const t=e.target;t.removeAttribute(U),t.removeEventListener("load",c)}async function m(e){a=!0,await $(l,s,f),await Y(l,s,f),e.detail&&r.add(e.detail)}async function u(e){await $(l,s,f),await Y(l,s,f),r.delete(e.detail),r.size||await Y(l,s,f)}function f(s){l.disconnect(),Z(e,m),Z(t,u),i(s)}await d(2*s.loadDeferredImagesMaxIdleTime),await $(l,s,f),l.observe(W,{subtree:!0,childList:!0,attributes:!0}),J(e,m),J(t,u),function(e){e.loadDeferredImagesBlockCookies&&o(new n("single-filez-block-cookies-start")),e.loadDeferredImagesBlockStorage&&o(new n("single-filez-block-storage-start")),e.loadDeferredImagesKeepZoomLevel?o(new n("single-filez-load-deferred-images-keep-zoom-level-start")):o(new n("single-filez-load-deferred-images-start"))}(s)}))}(s)}}async function Y(e,t,s){await Q("loadTimeout",(()=>X(e,t,s)),t.loadDeferredImagesMaxIdleTime)}async function $(e,t,s){await Q("maxTimeout",(async()=>{await te("loadTimeout"),await X(e,t,s)}),10*t.loadDeferredImagesMaxIdleTime)}async function X(e,t,s){await te("idleTimeout"),function(e){e.loadDeferredImagesBlockCookies&&o(new n("single-filez-block-cookies-end")),e.loadDeferredImagesBlockStorage&&o(new n("single-filez-block-storage-end")),e.loadDeferredImagesKeepZoomLevel?o(new n("single-filez-load-deferred-images-keep-zoom-level-end")):o(new n("single-filez-load-deferred-images-end"))}(t),await Q("endTimeout",(async()=>{await te("maxTimeout"),s()}),t.loadDeferredImagesMaxIdleTime/2),e.disconnect()}async function Q(e,t,s){if(H&&H.runtime&&H.runtime.sendMessage){if(!K.get(e)||!K.get(e).pending){const o={callback:t,pending:!0};K.set(e,o);try{await H.runtime.sendMessage({method:"singlefile.lazyTimeout.setTimeout",type:e,delay:s})}catch(o){ee(e,t,s)}o.pending=!1}}else ee(e,t,s)}function ee(e,t,s){const o=K.get(e);o&&globalThis.clearTimeout(o),K.set(e,t),globalThis.setTimeout(t,s)}async function te(e){if(H&&H.runtime&&H.runtime.sendMessage)try{await H.runtime.sendMessage({method:"singlefile.lazyTimeout.clearTimeout",type:e})}catch(t){se(e)}else se(e)}function se(e){const t=K.get(e);K.delete(e),t&&globalThis.clearTimeout(t)}H&&H.runtime&&H.runtime.onMessage&&H.runtime.onMessage.addListener&&H.runtime.onMessage.addListener((e=>{if("singlefile.lazyTimeout.onTimeout"==e.method){const t=K.get(e.type);if(t){K.delete(e.type);try{t.callback()}catch(t){se(e.type)}}}}));const oe={ON_BEFORE_CAPTURE_EVENT_NAME:"single-filez-on-before-capture",ON_AFTER_CAPTURE_EVENT_NAME:"single-filez-on-after-capture",WIN_ID_ATTRIBUTE_NAME:"data-single-filez-win-id",preProcessDoc:function(e,t,s){let o;return e.querySelectorAll("noscript:not([data-single-filez-disabled-noscript])").forEach((e=>{e.setAttribute(S,e.textContent),e.textContent=""})),function(e){e.querySelectorAll("meta[http-equiv=refresh]").forEach((e=>{e.removeAttribute("http-equiv"),e.setAttribute("disabled-http-equiv","refresh")}))}(e),e.head&&e.head.querySelectorAll(F).forEach((e=>e.hidden=!0)),e.querySelectorAll("svg foreignObject").forEach((e=>{const t=e.querySelectorAll("html > head > "+F+", html > body > "+F);t.length&&(Array.from(e.childNodes).forEach((e=>e.remove())),t.forEach((t=>e.appendChild(t))))})),o=t&&e.documentElement?q(t,e,e.documentElement,s):{canvases:[],images:[],posters:[],usedFonts:[],shadowRoots:[],imports:[],markedElements:[]},{canvases:o.canvases,fonts:r,stylesheets:P(e),images:o.images,posters:o.posters,usedFonts:Array.from(o.usedFonts.values()),shadowRoots:o.shadowRoots,imports:o.imports,referrer:e.referrer,markedElements:o.markedElements}},serialize:O,postProcessDoc:function(e,t){if(e.querySelectorAll("[data-single-filez-disabled-noscript]").forEach((t=>{t.textContent=t.getAttribute(S),t.removeAttribute(S),e.body.firstChild?e.body.insertBefore(t,e.body.firstChild):e.body.appendChild(t)})),e.querySelectorAll("meta[disabled-http-equiv]").forEach((e=>{e.setAttribute("http-equiv",e.getAttribute("disabled-http-equiv")),e.removeAttribute("disabled-http-equiv")})),e.head&&e.head.querySelectorAll("*:not(base):not(link):not(meta):not(noscript):not(script):not(style):not(template):not(title)").forEach((e=>e.removeAttribute("hidden"))),!t){const s=[u,h,f,p,w,y,E,A,b,T,v,R];t=e.querySelectorAll(s.map((e=>"["+e+"]")).join(","))}t.forEach((e=>{e.removeAttribute(u),e.removeAttribute(f),e.removeAttribute(g),e.removeAttribute(h),e.removeAttribute(p),e.removeAttribute(w),e.removeAttribute(y),e.removeAttribute(E),e.removeAttribute(A),e.removeAttribute(b),e.removeAttribute(T),e.removeAttribute(v),e.removeAttribute(R)}))},getShadowRoot:x},ne="__sfz_frameTree__::",ie='iframe, frame, object[type="text/html"][data]',ae="singlefile.frameTree.initRequest",re="singlefile.frameTree.ackInitRequest",le="singlefile.frameTree.cleanupRequest",de="singlefile.frameTree.initResponse",ce=".",me=globalThis.window==globalThis.top,ue=globalThis.browser,fe=globalThis.top,ge=globalThis.MessageChannel,he=globalThis.document,pe=new Map;let be;function we(e){e.frames.forEach((t=>Ee("responseTimeouts",e.sessionId,t.windowId)));const t=pe.get(e.sessionId);if(t){e.requestedFrameId&&(t.requestedFrameId=e.requestedFrameId),e.frames.forEach((e=>{let s=t.frames.find((t=>e.windowId==t.windowId));s||(s={windowId:e.windowId},t.frames.push(s)),s.processed||(s.content=e.content,s.baseURI=e.baseURI,s.title=e.title,s.url=e.url,s.canvases=e.canvases,s.fonts=e.fonts,s.stylesheets=e.stylesheets,s.images=e.images,s.posters=e.posters,s.usedFonts=e.usedFonts,s.shadowRoots=e.shadowRoots,s.imports=e.imports,s.processed=e.processed)}));t.frames.filter((e=>!e.processed)).length||(t.frames=t.frames.sort(((e,t)=>t.windowId.split(ce).length-e.windowId.split(ce).length)),t.resolve&&(t.requestedFrameId&&t.frames.forEach((e=>{e.windowId==t.requestedFrameId&&(e.requestedFrame=!0)})),t.resolve(t.frames)))}}function ye(e,t,s,o){const n=Re(e);!function(e,t,s,o,n){const i=[];let a;pe.get(n)?a=pe.get(n).requestTimeouts:(a={},pe.set(n,{requestTimeouts:a}));t.forEach(((e,t)=>{const s=o+ce+t;e.setAttribute(oe.WIN_ID_ATTRIBUTE_NAME,s),i.push({windowId:s})})),Ie({frames:i,sessionId:n,requestedFrameId:e.documentElement.dataset.requestedFrameId&&o}),t.forEach(((e,t)=>{const i=o+ce+t;try{ve(e.contentWindow,{method:ae,windowId:i,sessionId:n,options:s})}catch(e){}a[i]=globalThis.setTimeout((()=>Ie({frames:[{windowId:i,processed:!0}],sessionId:n})),750)})),delete e.documentElement.dataset.requestedFrameId}(e,n,t,s,o),n.length&&function(e,t,s,o,n){const i=[];t.forEach(((e,t)=>{const a=o+ce+t;let r;try{r=e.contentDocument}catch(e){}if(r)try{const t=e.contentWindow;t.stop(),Ee("requestTimeouts",n,a),ye(r,s,a,n),i.push(Se(r,t,a,s))}catch(e){i.push({windowId:a,processed:!0})}})),Ie({frames:i,sessionId:n,requestedFrameId:e.documentElement.dataset.requestedFrameId&&o}),delete e.documentElement.dataset.requestedFrameId}(e,n,t,s,o)}function Ee(e,t,s){const o=pe.get(t);if(o&&o[e]){const t=o[e][s];t&&(globalThis.clearTimeout(t),delete o[e][s])}}function Te(e,t){const s=pe.get(e);s&&s.responseTimeouts&&(s.responseTimeouts[t]=globalThis.setTimeout((()=>Ie({frames:[{windowId:t,processed:!0}],sessionId:e})),1e4))}function Ae(e,t,s){e.forEach(((e,o)=>{const n=t+ce+o;e.removeAttribute(oe.WIN_ID_ATTRIBUTE_NAME);try{ve(e.contentWindow,{method:le,windowId:n,sessionId:s})}catch(e){}})),e.forEach(((e,o)=>{const n=t+ce+o;let i;try{i=e.contentDocument}catch(e){}if(i)try{Ae(Re(i),n,s)}catch(e){}}))}function Ie(e){e.method=de;try{fe.singlefile.processors.frameTree.initResponse(e)}catch(t){ve(fe,e,!0)}}function ve(e,t,s){if(e==fe&&ue&&ue.runtime&&ue.runtime.sendMessage)ue.runtime.sendMessage(t);else if(s){const s=new ge;e.postMessage(ne+JSON.stringify({method:t.method,sessionId:t.sessionId}),"*",[s.port2]),s.port1.postMessage(t)}else e.postMessage(ne+JSON.stringify(t),"*")}function Se(e,t,s,o){const n=oe.preProcessDoc(e,t,o),i=oe.serialize(e);oe.postProcessDoc(e,n.markedElements);return{windowId:s,content:i,baseURI:e.baseURI.split("#")[0],url:e.location.href,title:e.title,canvases:n.canvases,fonts:n.fonts,stylesheets:n.stylesheets,images:n.images,posters:n.posters,usedFonts:n.usedFonts,shadowRoots:n.shadowRoots,imports:n.imports,processed:!0}}function Re(e){let t=Array.from(e.querySelectorAll(ie));return e.querySelectorAll("*").forEach((e=>{const s=oe.getShadowRoot(e);s&&(t=t.concat(...s.querySelectorAll(ie)))})),t}me&&(be="0",ue&&ue.runtime&&ue.runtime.onMessage&&ue.runtime.onMessage.addListener&&ue.runtime.onMessage.addListener((e=>e.method==de?(we(e),Promise.resolve({})):e.method==re?(Ee("requestTimeouts",e.sessionId,e.windowId),Te(e.sessionId,e.windowId),Promise.resolve({})):void 0))),((e,t,s)=>{globalThis.addEventListener(e,t,s)})("message",(async e=>{if("string"==typeof e.data&&e.data.startsWith(ne)){e.preventDefault(),e.stopPropagation();const t=JSON.parse(e.data.substring(ne.length));if(t.method==ae)e.source&&ve(e.source,{method:re,windowId:t.windowId,sessionId:t.sessionId}),me||(globalThis.stop(),t.options.loadDeferredImages&&G(t.options),await async function(e){const t=e.sessionId,s=globalThis._singleFileZ_waitForUserScript;me||(be=globalThis.frameId=e.windowId);ye(he,e.options,be,t),me||(e.options.userScriptEnabled&&s&&await s(oe.ON_BEFORE_CAPTURE_EVENT_NAME),Ie({frames:[Se(he,globalThis,be,e.options)],sessionId:t,requestedFrameId:he.documentElement.dataset.requestedFrameId&&be}),e.options.userScriptEnabled&&s&&await s(oe.ON_AFTER_CAPTURE_EVENT_NAME),delete he.documentElement.dataset.requestedFrameId)}(t));else if(t.method==re)Ee("requestTimeouts",t.sessionId,t.windowId),Te(t.sessionId,t.windowId);else if(t.method==le)!function(e){const t=e.sessionId;Ae(Re(he),e.windowId,t)}(t);else if(t.method==de&&pe.get(t.sessionId)){e.ports[0].onmessage=e=>we(e.data)}}}),!0)}));
