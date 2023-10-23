const tn=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}};tn();function F(){}function at(e,t){for(const n in t)e[n]=t[n];return e}function zt(e){return e()}function rt(){return Object.create(null)}function ce(e){e.forEach(zt)}function Lt(e){return typeof e=="function"}function fe(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let ze;function ot(e,t){return ze||(ze=document.createElement("a")),ze.href=t,e===ze.href}function nn(e){return Object.keys(e).length===0}function an(e,...t){if(e==null)return F;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function St(e,t,n){e.$$.on_destroy.push(an(t,n))}function st(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function rn(e){return e&&Lt(e.destroy)?e.destroy:F}function y(e,t){e.appendChild(t)}function ee(e,t,n){e.insertBefore(t,n||null)}function Q(e){e.parentNode.removeChild(e)}function on(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function M(e){return document.createElement(e)}function sn(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function ie(e){return document.createTextNode(e)}function W(){return ie(" ")}function ln(){return ie("")}function At(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function S(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function cn(e){return Array.from(e.childNodes)}function Ee(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}class fn{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,n,i=null){this.e||(this.is_svg?this.e=sn(n.nodeName):this.e=M(n.nodeName),this.t=n,this.c(t)),this.i(i)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)ee(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(Q)}}let ye;function ve(e){ye=e}function jt(){if(!ye)throw new Error("Function called outside component initialization");return ye}function un(e){jt().$$.before_update.push(e)}function dn(e){jt().$$.on_mount.push(e)}const ge=[],lt=[],Ae=[],ct=[],hn=Promise.resolve();let Be=!1;function mn(){Be||(Be=!0,hn.then(Et))}function qe(e){Ae.push(e)}const Re=new Set;let Le=0;function Et(){const e=ye;do{for(;Le<ge.length;){const t=ge[Le];Le++,ve(t),gn(t.$$)}for(ve(null),ge.length=0,Le=0;lt.length;)lt.pop()();for(let t=0;t<Ae.length;t+=1){const n=Ae[t];Re.has(n)||(Re.add(n),n())}Ae.length=0}while(ge.length);for(;ct.length;)ct.pop()();Be=!1,Re.clear(),ve(e)}function gn(e){if(e.fragment!==null){e.update(),ce(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(qe)}}const je=new Set;let ne;function Ge(){ne={r:0,c:[],p:ne}}function Ye(){ne.r||ce(ne.c),ne=ne.p}function P(e,t){e&&e.i&&(je.delete(e),e.i(t))}function B(e,t,n,i){if(e&&e.o){if(je.has(e))return;je.add(e),ne.c.push(()=>{je.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}}function ke(e){e&&e.c()}function ue(e,t,n,i){const{fragment:a,on_mount:s,on_destroy:r,after_update:o}=e.$$;a&&a.m(t,n),i||qe(()=>{const l=s.map(zt).filter(Lt);r?r.push(...l):ce(l),e.$$.on_mount=[]}),o.forEach(qe)}function de(e,t){const n=e.$$;n.fragment!==null&&(ce(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function pn(e,t){e.$$.dirty[0]===-1&&(ge.push(e),mn(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function xe(e,t,n,i,a,s,r,o=[-1]){const l=ye;ve(e);const f=e.$$={fragment:null,ctx:null,props:s,update:F,not_equal:a,bound:rt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:rt(),dirty:o,skip_bound:!1,root:t.target||l.$$.root};r&&r(f.root);let v=!1;if(f.ctx=n?n(e,t.props||{},(h,I,...k)=>{const x=k.length?k[0]:I;return f.ctx&&a(f.ctx[h],f.ctx[h]=x)&&(!f.skip_bound&&f.bound[h]&&f.bound[h](x),v&&pn(e,h)),I}):[],f.update(),v=!0,ce(f.before_update),f.fragment=i?i(f.ctx):!1,t.target){if(t.hydrate){const h=cn(t.target);f.fragment&&f.fragment.l(h),h.forEach(Q)}else f.fragment&&f.fragment.c();t.intro&&P(e.$$.fragment),ue(e,t.target,t.anchor,t.customElement),Et()}ve(l)}class Ce{$destroy(){de(this,1),this.$destroy=F}$on(t,n){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const a=i.indexOf(n);a!==-1&&i.splice(a,1)}}$set(t){this.$$set&&!nn(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function be(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?be=function(t){return typeof t}:be=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},be(e)}function vn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ft(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function bn(e,t,n){return t&&ft(e.prototype,t),n&&ft(e,n),e}function yn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{},i=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),i.forEach(function(a){yn(e,a,n[a])})}return e}function Vt(e,t){return wn(e)||kn(e,t)||xn()}function wn(e){if(Array.isArray(e))return e}function kn(e,t){var n=[],i=!0,a=!1,s=void 0;try{for(var r=e[Symbol.iterator](),o;!(i=(o=r.next()).done)&&(n.push(o.value),!(t&&n.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&r.return!=null&&r.return()}finally{if(a)throw s}}return n}function xn(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var ut=function(){},$e={},Pt={},Cn=null,Ht={mark:ut,measure:ut};try{typeof window!="undefined"&&($e=window),typeof document!="undefined"&&(Pt=document),typeof MutationObserver!="undefined"&&(Cn=MutationObserver),typeof performance!="undefined"&&(Ht=performance)}catch{}var In=$e.navigator||{},dt=In.userAgent,ht=dt===void 0?"":dt,Ne=$e,H=Pt,Se=Ht;Ne.document;var et=!!H.documentElement&&!!H.head&&typeof H.addEventListener=="function"&&typeof H.createElement=="function";~ht.indexOf("MSIE")||~ht.indexOf("Trident/");var Z="___FONT_AWESOME___",Tt="fa",Ot="svg-inline--fa",_n="data-fa-i2svg";(function(){try{return!0}catch{return!1}})();var De={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Nt=Ne.FontAwesomeConfig||{};function Mn(e){var t=H.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function zn(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(H&&typeof H.querySelector=="function"){var Ln=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ln.forEach(function(e){var t=Vt(e,2),n=t[0],i=t[1],a=zn(Mn(n));a!=null&&(Nt[i]=a)})}var Sn={familyPrefix:Tt,replacementClass:Ot,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Xe=C({},Sn,Nt);Xe.autoReplaceSvg||(Xe.observeMutations=!1);var R=C({},Xe);Ne.FontAwesomeConfig=R;var J=Ne||{};J[Z]||(J[Z]={});J[Z].styles||(J[Z].styles={});J[Z].hooks||(J[Z].hooks={});J[Z].shims||(J[Z].shims=[]);var G=J[Z],An=[],jn=function e(){H.removeEventListener("DOMContentLoaded",e),Ze=1,An.map(function(t){return t()})},Ze=!1;et&&(Ze=(H.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(H.readyState),Ze||H.addEventListener("DOMContentLoaded",jn));var tt="pending",Ft="settled",Ve="fulfilled",Pe="rejected",En=function(){},Rt=typeof global!="undefined"&&typeof global.process!="undefined"&&typeof global.process.emit=="function",Vn=typeof setImmediate=="undefined"?setTimeout:setImmediate,pe=[],Je;function Pn(){for(var e=0;e<pe.length;e++)pe[e][0](pe[e][1]);pe=[],Je=!1}function He(e,t){pe.push([e,t]),Je||(Je=!0,Vn(Pn,0))}function Hn(e,t){function n(a){nt(t,a)}function i(a){we(t,a)}try{e(n,i)}catch(a){i(a)}}function Dt(e){var t=e.owner,n=t._state,i=t._data,a=e[n],s=e.then;if(typeof a=="function"){n=Ve;try{i=a(i)}catch(r){we(s,r)}}Wt(s,i)||(n===Ve&&nt(s,i),n===Pe&&we(s,i))}function Wt(e,t){var n;try{if(e===t)throw new TypeError("A promises callback cannot return that same promise.");if(t&&(typeof t=="function"||be(t)==="object")){var i=t.then;if(typeof i=="function")return i.call(t,function(a){n||(n=!0,t===a?Ut(e,a):nt(e,a))},function(a){n||(n=!0,we(e,a))}),!0}}catch(a){return n||we(e,a),!0}return!1}function nt(e,t){(e===t||!Wt(e,t))&&Ut(e,t)}function Ut(e,t){e._state===tt&&(e._state=Ft,e._data=t,He(Tn,e))}function we(e,t){e._state===tt&&(e._state=Ft,e._data=t,He(On,e))}function Bt(e){e._then=e._then.forEach(Dt)}function Tn(e){e._state=Ve,Bt(e)}function On(e){e._state=Pe,Bt(e),!e._handled&&Rt&&global.process.emit("unhandledRejection",e._data,e)}function Nn(e){global.process.emit("rejectionHandled",e)}function U(e){if(typeof e!="function")throw new TypeError("Promise resolver "+e+" is not a function");if(!(this instanceof U))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],Hn(e,this)}U.prototype={constructor:U,_state:tt,_then:null,_data:void 0,_handled:!1,then:function(t,n){var i={owner:this,then:new this.constructor(En),fulfilled:t,rejected:n};return(n||t)&&!this._handled&&(this._handled=!0,this._state===Pe&&Rt&&He(Nn,this)),this._state===Ve||this._state===Pe?He(Dt,i):this._then.push(i),i.then},catch:function(t){return this.then(null,t)}};U.all=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.all().");return new U(function(t,n){var i=[],a=0;function s(l){return a++,function(f){i[l]=f,--a||t(i)}}for(var r=0,o;r<e.length;r++)o=e[r],o&&typeof o.then=="function"?o.then(s(r),n):i[r]=o;a||t(i)})};U.race=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.race().");return new U(function(t,n){for(var i=0,a;i<e.length;i++)a=e[i],a&&typeof a.then=="function"?a.then(t,n):t(a)})};U.resolve=function(e){return e&&be(e)==="object"&&e.constructor===U?e:new U(function(t){t(e)})};U.reject=function(e){return new U(function(t,n){n(e)})};var le={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Fn(e){if(!(!e||!et)){var t=H.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=H.head.childNodes,i=null,a=n.length-1;a>-1;a--){var s=n[a],r=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(r)>-1&&(i=s)}return H.head.insertBefore(t,i),e}}var Rn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Te(){for(var e=12,t="";e-- >0;)t+=Rn[Math.random()*62|0];return t}function qt(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Dn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(qt(e[n]),'" ')},"").trim()}function Gt(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n],";")},"")}function Yt(e){return e.size!==le.size||e.x!==le.x||e.y!==le.y||e.rotate!==le.rotate||e.flipX||e.flipY}function Xt(e){var t=e.transform,n=e.containerWidth,i=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),r="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(s," ").concat(r," ").concat(o)},f={transform:"translate(".concat(i/2*-1," -256)")};return{outer:a,inner:l,path:f}}var We={x:0,y:0,width:"100%",height:"100%"};function mt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Wn(e){return e.tag==="g"?e.children:[e]}function Un(e){var t=e.children,n=e.attributes,i=e.main,a=e.mask,s=e.maskId,r=e.transform,o=i.width,l=i.icon,f=a.width,v=a.icon,h=Xt({transform:r,containerWidth:f,iconWidth:o}),I={tag:"rect",attributes:C({},We,{fill:"white"})},k=l.children?{children:l.children.map(mt)}:{},x={tag:"g",attributes:C({},h.inner),children:[mt(C({tag:l.tag,attributes:C({},l.attributes,h.path)},k))]},m={tag:"g",attributes:C({},h.outer),children:[x]},g="mask-".concat(s||Te()),d="clip-".concat(s||Te()),w={tag:"mask",attributes:C({},We,{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[I,m]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:d},children:Wn(v)},w]};return t.push(_,{tag:"rect",attributes:C({fill:"currentColor","clip-path":"url(#".concat(d,")"),mask:"url(#".concat(g,")")},We)}),{children:t,attributes:n}}function Bn(e){var t=e.children,n=e.attributes,i=e.main,a=e.transform,s=e.styles,r=Gt(s);if(r.length>0&&(n.style=r),Yt(a)){var o=Xt({transform:a,containerWidth:i.width,iconWidth:i.width});t.push({tag:"g",attributes:C({},o.outer),children:[{tag:"g",attributes:C({},o.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:C({},i.icon.attributes,o.path)}]}]})}else t.push(i.icon);return{children:t,attributes:n}}function qn(e){var t=e.children,n=e.main,i=e.mask,a=e.attributes,s=e.styles,r=e.transform;if(Yt(r)&&n.found&&!i.found){var o=n.width,l=n.height,f={x:o/l/2,y:.5};a.style=Gt(C({},s,{"transform-origin":"".concat(f.x+r.x/16,"em ").concat(f.y+r.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Gn(e){var t=e.prefix,n=e.iconName,i=e.children,a=e.attributes,s=e.symbol,r=s===!0?"".concat(t,"-").concat(R.familyPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C({},a,{id:r}),children:i}]}]}function Yn(e){var t=e.icons,n=t.main,i=t.mask,a=e.prefix,s=e.iconName,r=e.transform,o=e.symbol,l=e.title,f=e.maskId,v=e.titleId,h=e.extra,I=e.watchable,k=I===void 0?!1:I,x=i.found?i:n,m=x.width,g=x.height,d=a==="fak",w=d?"":"fa-w-".concat(Math.ceil(m/g*16)),_=[R.replacementClass,s?"".concat(R.familyPrefix,"-").concat(s):"",w].filter(function(q){return h.classes.indexOf(q)===-1}).filter(function(q){return q!==""||!!q}).concat(h.classes).join(" "),p={children:[],attributes:C({},h.attributes,{"data-prefix":a,"data-icon":s,class:_,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(g)})},z=d&&!~h.classes.indexOf("fa-fw")?{width:"".concat(m/g*16*.0625,"em")}:{};k&&(p.attributes[_n]=""),l&&p.children.push({tag:"title",attributes:{id:p.attributes["aria-labelledby"]||"title-".concat(v||Te())},children:[l]});var c=C({},p,{prefix:a,iconName:s,main:n,mask:i,maskId:f,transform:r,symbol:o,styles:C({},z,h.styles)}),A=i.found&&n.found?Un(c):Bn(c),T=A.children,L=A.attributes;return c.children=T,c.attributes=L,o?Gn(c):qn(c)}var gt=function(){};R.measurePerformance&&Se&&Se.mark&&Se.measure;var Xn=function(t,n){return function(i,a,s,r){return t.call(n,i,a,s,r)}},Ue=function(t,n,i,a){var s=Object.keys(t),r=s.length,o=a!==void 0?Xn(n,a):n,l,f,v;for(i===void 0?(l=1,v=t[s[0]]):(l=0,v=i);l<r;l++)f=s[l],v=o(v,t[f],f,t);return v};function Zt(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,a=i===void 0?!1:i,s=Object.keys(t).reduce(function(r,o){var l=t[o],f=!!l.icon;return f?r[l.iconName]=l.icon:r[o]=l,r},{});typeof G.hooks.addPack=="function"&&!a?G.hooks.addPack(e,s):G.styles[e]=C({},G.styles[e]||{},s),e==="fas"&&Zt("fa",t)}var pt=G.styles,Zn=G.shims,Jt=function(){var t=function(a){return Ue(pt,function(s,r,o){return s[o]=Ue(r,a,{}),s},{})};t(function(i,a,s){return a[3]&&(i[a[3]]=s),i}),t(function(i,a,s){var r=a[2];return i[s]=s,r.forEach(function(o){i[o]=s}),i});var n="far"in pt;Ue(Zn,function(i,a){var s=a[0],r=a[1],o=a[2];return r==="far"&&!n&&(r="fas"),i[s]={prefix:r,iconName:o},i},{})};Jt();G.styles;function vt(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}function Qt(e){var t=e.tag,n=e.attributes,i=n===void 0?{}:n,a=e.children,s=a===void 0?[]:a;return typeof e=="string"?qt(e):"<".concat(t," ").concat(Dn(i),">").concat(s.map(Qt).join(""),"</").concat(t,">")}var Jn=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce(function(i,a){var s=a.toLowerCase().split("-"),r=s[0],o=s.slice(1).join("-");if(r&&o==="h")return i.flipX=!0,i;if(r&&o==="v")return i.flipY=!0,i;if(o=parseFloat(o),isNaN(o))return i;switch(r){case"grow":i.size=i.size+o;break;case"shrink":i.size=i.size-o;break;case"left":i.x=i.x-o;break;case"right":i.x=i.x+o;break;case"up":i.y=i.y-o;break;case"down":i.y=i.y+o;break;case"rotate":i.rotate=i.rotate+o;break}return i},n):n};function Qe(e){this.name="MissingIcon",this.message=e||"Icon unavailable",this.stack=new Error().stack}Qe.prototype=Object.create(Error.prototype);Qe.prototype.constructor=Qe;var Fe={fill:"currentColor"},Kt={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};C({},Fe,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var it=C({},Kt,{attributeName:"opacity"});C({},Fe,{cx:"256",cy:"364",r:"28"}),C({},Kt,{attributeName:"r",values:"28;14;28;28;14;28;"}),C({},it,{values:"1;0;1;1;0;1;"});C({},Fe,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),C({},it,{values:"1;0;0;0;0;1;"});C({},Fe,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),C({},it,{values:"0;0;1;1;0;0;"});G.styles;function bt(e){var t=e[0],n=e[1],i=e.slice(4),a=Vt(i,1),s=a[0],r=null;return Array.isArray(s)?r={tag:"g",attributes:{class:"".concat(R.familyPrefix,"-").concat(De.GROUP)},children:[{tag:"path",attributes:{class:"".concat(R.familyPrefix,"-").concat(De.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(R.familyPrefix,"-").concat(De.PRIMARY),fill:"currentColor",d:s[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:t,height:n,icon:r}}G.styles;var Qn=`svg:not(:root).svg-inline--fa {
  overflow: visible;
}

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.225em;
}
.svg-inline--fa.fa-w-1 {
  width: 0.0625em;
}
.svg-inline--fa.fa-w-2 {
  width: 0.125em;
}
.svg-inline--fa.fa-w-3 {
  width: 0.1875em;
}
.svg-inline--fa.fa-w-4 {
  width: 0.25em;
}
.svg-inline--fa.fa-w-5 {
  width: 0.3125em;
}
.svg-inline--fa.fa-w-6 {
  width: 0.375em;
}
.svg-inline--fa.fa-w-7 {
  width: 0.4375em;
}
.svg-inline--fa.fa-w-8 {
  width: 0.5em;
}
.svg-inline--fa.fa-w-9 {
  width: 0.5625em;
}
.svg-inline--fa.fa-w-10 {
  width: 0.625em;
}
.svg-inline--fa.fa-w-11 {
  width: 0.6875em;
}
.svg-inline--fa.fa-w-12 {
  width: 0.75em;
}
.svg-inline--fa.fa-w-13 {
  width: 0.8125em;
}
.svg-inline--fa.fa-w-14 {
  width: 0.875em;
}
.svg-inline--fa.fa-w-15 {
  width: 0.9375em;
}
.svg-inline--fa.fa-w-16 {
  width: 1em;
}
.svg-inline--fa.fa-w-17 {
  width: 1.0625em;
}
.svg-inline--fa.fa-w-18 {
  width: 1.125em;
}
.svg-inline--fa.fa-w-19 {
  width: 1.1875em;
}
.svg-inline--fa.fa-w-20 {
  width: 1.25em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-border {
  height: 1.5em;
}
.svg-inline--fa.fa-li {
  width: 2em;
}
.svg-inline--fa.fa-fw {
  width: 1.25em;
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: #ff253a;
  border-radius: 1em;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #fff;
  height: 1.5em;
  line-height: 1;
  max-width: 5em;
  min-width: 1.5em;
  overflow: hidden;
  padding: 0.25em;
  right: 0;
  text-overflow: ellipsis;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: 0;
  right: 0;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: 0;
  left: 0;
  right: auto;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  right: 0;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: 0;
  right: auto;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-lg {
  font-size: 1.3333333333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}

.fa-xs {
  font-size: 0.75em;
}

.fa-sm {
  font-size: 0.875em;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}

.fa-border {
  border: solid 0.08em #eee;
  border-radius: 0.1em;
  padding: 0.2em 0.25em 0.15em;
}

.fa-pull-left {
  float: left;
}

.fa-pull-right {
  float: right;
}

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left {
  margin-right: 0.3em;
}
.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right {
  margin-left: 0.3em;
}

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
          animation: fa-spin 2s infinite linear;
}

.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
          animation: fa-spin 1s infinite steps(8);
}

@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-flip-both {
  -webkit-filter: none;
          filter: none;
}

.fa-stack {
  display: inline-block;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: #fff;
}

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse {
  color: #fff;
}`;function Kn(){var e=Tt,t=Ot,n=R.familyPrefix,i=R.replacementClass,a=Qn;if(n!==e||i!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),r=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");a=a.replace(s,".".concat(n,"-")).replace(r,"--".concat(n,"-")).replace(o,".".concat(i))}return a}var $n=function(){function e(){vn(this,e),this.definitions={}}return bn(e,[{key:"add",value:function(){for(var n=this,i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];var r=a.reduce(this._pullDefinitions,{});Object.keys(r).forEach(function(o){n.definitions[o]=C({},n.definitions[o]||{},r[o]),Zt(o,r[o]),Jt()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var a=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(a).map(function(s){var r=a[s],o=r.prefix,l=r.iconName,f=r.icon;n[o]||(n[o]={}),n[o][l]=f}),n}}]),e}();function ei(){R.autoAddCss&&!yt&&(Fn(Kn()),yt=!0)}function ti(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(i){return Qt(i)})}}),Object.defineProperty(e,"node",{get:function(){if(!!et){var i=H.createElement("div");return i.innerHTML=e.html,i.children}}}),e}function Ke(e){var t=e.prefix,n=t===void 0?"fa":t,i=e.iconName;if(!!i)return vt(ii.definitions,n,i)||vt(G.styles,n,i)}function ni(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(t||{}).icon?t:Ke(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Ke(a||{})),e(i,C({},n,{mask:a}))}}var ii=new $n,yt=!1,ai={transform:function(t){return Jn(t)}},ri=ni(function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,i=n===void 0?le:n,a=t.symbol,s=a===void 0?!1:a,r=t.mask,o=r===void 0?null:r,l=t.maskId,f=l===void 0?null:l,v=t.title,h=v===void 0?null:v,I=t.titleId,k=I===void 0?null:I,x=t.classes,m=x===void 0?[]:x,g=t.attributes,d=g===void 0?{}:g,w=t.styles,_=w===void 0?{}:w;if(!!e){var p=e.prefix,z=e.iconName,c=e.icon;return ti(C({type:"icon"},e),function(){return ei(),R.autoA11y&&(h?d["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(k||Te()):(d["aria-hidden"]="true",d.focusable="false")),Yn({icons:{main:bt(c),mask:o?bt(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:z,transform:C({},le,i),symbol:s,title:h,maskId:f,titleId:k,extra:{attributes:d,styles:_,classes:m}})})}});function wt(e){if(e===null||typeof e=="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2){const[t,n]=e;return{prefix:t,iconName:n}}if(typeof e=="string")return{prefix:"fas",iconName:e}}function oi(e){let t,n;return{c(){t=new fn(!1),n=ln(),t.a=n},m(i,a){t.m(e[0],i,a),ee(i,n,a)},p(i,[a]){a&1&&t.p(i[0])},i:F,o:F,d(i){i&&Q(n),i&&t.d()}}}function si(e,t,n){let i,a,{border:s=!1}=t,{fixedWidth:r=!1}=t,{flip:o=null}=t,{icon:l=null}=t,{mask:f=null}=t,{listItem:v=!1}=t,{pull:h=null}=t,{pulse:I=!1}=t,{rotation:k=null}=t,{swapOpacity:x=!1}=t,{size:m=null}=t,{spin:g=!1}=t,{transform:d={}}=t,{symbol:w=!1}=t,{title:_=null}=t,{inverse:p=!1}=t,z="";return un(()=>{const c=wt(l);if(!c)return;const A=Ke(c),T=ri(A||l,{symbol:w,title:_,styles:t.style?a:{},classes:[...Object.keys(i).map(L=>i[L]?L:null).filter(L=>!!L),(t.class||"").split(" ")],transform:{...typeof d=="string"?ai.transform(d):d},mask:wt(f)});if(!T){console.warn("Could not find one or more icon(s)",A||l,f);return}n(0,z=T.html)}),e.$$set=c=>{n(19,t=at(at({},t),st(c))),"border"in c&&n(1,s=c.border),"fixedWidth"in c&&n(2,r=c.fixedWidth),"flip"in c&&n(3,o=c.flip),"icon"in c&&n(4,l=c.icon),"mask"in c&&n(5,f=c.mask),"listItem"in c&&n(6,v=c.listItem),"pull"in c&&n(7,h=c.pull),"pulse"in c&&n(8,I=c.pulse),"rotation"in c&&n(9,k=c.rotation),"swapOpacity"in c&&n(10,x=c.swapOpacity),"size"in c&&n(11,m=c.size),"spin"in c&&n(12,g=c.spin),"transform"in c&&n(13,d=c.transform),"symbol"in c&&n(14,w=c.symbol),"title"in c&&n(15,_=c.title),"inverse"in c&&n(16,p=c.inverse)},e.$$.update=()=>{e.$$.dirty&73678&&(i={"fa-spin":g,"fa-pulse":I,"fa-fw":r,"fa-border":s,"fa-li":v,"fa-inverse":p,"fa-flip-horizontal":["both","horizontal"].includes(o),"fa-flip-vertical":["both","vertical"].includes(o),[`fa-${m}`]:m!==null,[`fa-rotate-${k}`]:k!==null,[`fa-pull-${h}`]:h!==null,"fa-swap-opacity":x}),a=(t.style||"").split(";").filter(c=>!!c).map(c=>c.split(":").map(A=>A.trim())).reduce((c,A)=>{const[T,L]=A;return c[T]=L,c},{})},t=st(t),[z,s,r,o,l,f,v,h,I,k,x,m,g,d,w,_,p]}class $t extends Ce{constructor(t){super(),xe(this,t,si,oi,fe,{border:1,fixedWidth:2,flip:3,icon:4,mask:5,listItem:6,pull:7,pulse:8,rotation:9,swapOpacity:10,size:11,spin:12,transform:13,symbol:14,title:15,inverse:16})}}const se=[];function li(e,t=F){let n;const i=new Set;function a(o){if(fe(e,o)&&(e=o,n)){const l=!se.length;for(const f of i)f[1](),se.push(f,e);if(l){for(let f=0;f<se.length;f+=2)se[f][0](se[f+1]);se.length=0}}}function s(o){a(o(e))}function r(o,l=F){const f=[o,l];return i.add(f),i.size===1&&(n=t(a)||F),o(e),()=>{i.delete(f),i.size===0&&(n(),n=null)}}return{set:a,update:s,subscribe:r}}function ci(){const{subscribe:e,set:t}=li(null);return{subscribe:e,setProject(n){t(n)}}}const Oe=ci();function fi(e){var d,w,_;let t,n,i,a,s,r,o=((d=e[0])==null?void 0:d.title)+"",l,f,v,h,I=((w=e[0])==null?void 0:w.brief)+"",k,x,m,g;return a=new $t({props:{icon:(_=e[0])==null?void 0:_.icon}}),{c(){t=M("li"),n=M("button"),i=M("div"),ke(a.$$.fragment),s=W(),r=M("span"),l=ie(o),f=W(),v=M("div"),h=M("span"),k=ie(I),S(r,"class","title"),S(i,"class","title-section"),S(h,"class","brief")},m(p,z){ee(p,t,z),y(t,n),y(n,i),ue(a,i,null),y(i,s),y(i,r),y(r,l),y(n,f),y(n,v),y(v,h),y(h,k),x=!0,m||(g=At(n,"click",e[1]),m=!0)},p(p,[z]){var A,T,L;const c={};z&1&&(c.icon=(A=p[0])==null?void 0:A.icon),a.$set(c),(!x||z&1)&&o!==(o=((T=p[0])==null?void 0:T.title)+"")&&Ee(l,o),(!x||z&1)&&I!==(I=((L=p[0])==null?void 0:L.brief)+"")&&Ee(k,I)},i(p){x||(P(a.$$.fragment,p),x=!0)},o(p){B(a.$$.fragment,p),x=!1},d(p){p&&Q(t),de(a),m=!1,g()}}}function ui(e,t,n){let{project:i}=t;const a=()=>{Oe.setProject(i)};return e.$$set=s=>{"project"in s&&n(0,i=s.project)},[i,a]}class di extends Ce{constructor(t){super(),xe(this,t,ui,fi,fe,{project:0})}}function hi(e,{root:t=null,rootMargin:n="0px 0px 0px 0px",threshold:i=0}={}){if(window&&"IntersectionObserver"in window){const a=new IntersectionObserver(s=>{s.forEach(r=>{if(r.isIntersecting){const o=r.target;o.dataset.src&&(o.src=o.dataset.src),o.dataset.srcset&&(o.srcset=o.dataset.srcset),a.unobserve(o)}})},{root:t,rootMargin:n,threshold:i});return a.observe(e),{destroy(){a&&a.unobserve(e)}}}}function mi(e){var L,q,ae;let t,n,i,a,s,r=((L=e[0])==null?void 0:L.title)+"",o,l,f,v,h,I=((q=e[0])==null?void 0:q.description)+"",k,x,m,g,d,w,_,p,z,c,A,T;return f=new $t({props:{icon:(ae=e[0])==null?void 0:ae.icon}}),{c(){var E,D;t=M("div"),n=M("button"),n.textContent="\u21D0",i=W(),a=M("div"),s=M("h3"),o=ie(r),l=W(),ke(f.$$.fragment),v=W(),h=M("p"),k=ie(I),x=W(),m=M("a"),g=ie("(Link)"),w=W(),_=M("div"),p=M("img"),S(a,"class","focused-title-section"),S(m,"href",d=(E=e[0])==null?void 0:E.link),S(m,"rel","noreferrer"),S(m,"target","_blank"),ot(p.src,z=(D=e[0])==null?void 0:D.image)||S(p,"src",z),S(p,"alt","The project"),S(_,"class","project-image-container"),S(t,"class","details")},m(E,D){ee(E,t,D),y(t,n),y(t,i),y(t,a),y(a,s),y(s,o),y(a,l),ue(f,a,null),y(t,v),y(t,h),y(h,k),y(t,x),y(t,m),y(m,g),y(t,w),y(t,_),y(_,p),c=!0,A||(T=[At(n,"click",e[1]),rn(hi.call(null,p))],A=!0)},p(E,[D]){var re,_e,he,N,me;(!c||D&1)&&r!==(r=((re=E[0])==null?void 0:re.title)+"")&&Ee(o,r);const Ie={};D&1&&(Ie.icon=(_e=E[0])==null?void 0:_e.icon),f.$set(Ie),(!c||D&1)&&I!==(I=((he=E[0])==null?void 0:he.description)+"")&&Ee(k,I),(!c||D&1&&d!==(d=(N=E[0])==null?void 0:N.link))&&S(m,"href",d),(!c||D&1&&!ot(p.src,z=(me=E[0])==null?void 0:me.image))&&S(p,"src",z)},i(E){c||(P(f.$$.fragment,E),c=!0)},o(E){B(f.$$.fragment,E),c=!1},d(E){E&&Q(t),de(f),A=!1,ce(T)}}}function gi(e,t,n){let i;St(e,Oe,s=>n(0,i=s));function a(){Oe.setProject(null)}return[i,a]}class pi extends Ce{constructor(t){super(),xe(this,t,gi,mi,fe,{})}}function vi(e){let t;return{c(){t=M("div"),t.innerHTML=`<ul class="soc"><li><a class="soc-linkedin" target="_blank" href="http://linkedin.com/in/kyle-hovey" rel="noreferrer"><span>My Linkedin</span></a></li> 
    <li><a class="soc-github soc-icon-last" target="_blank" href="http://github.com/kylehovey" rel="noreferrer"><span>My GitHub</span></a></li></ul> 
  <div class="links"><a href="https://github.com/kylehovey/resume/raw/master/kyle_hovey_resume.pdf">Resume</a> 
    <span class="divider">|</span> 
    <a href="blog">Blog</a> 
    <span class="divider">|</span> 
    <a href="MATH_5620">Math 5620</a> 
    <span class="divider">|</span> 
    <a target="_blank" rel="me" href="https://mathstodon.xyz/@speleo">Mathstodon</a> 
    <span class="divider">|</span> 
    <a href="https://kylehovey-resolutions.vercel.app" target="_blank" rel="noreferrer">Resolutions</a></div>`,S(t,"class","bottom-bar")},m(n,i){ee(n,t,i)},p:F,i:F,o:F,d(n){n&&Q(t)}}}class bi extends Ce{constructor(t){super(),xe(this,t,null,vi,fe,{})}}/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var yi={prefix:"fas",iconName:"arrow-rotate-left",icon:[512,512,[8634,"arrow-left-rotate","arrow-rotate-back","arrow-rotate-backward","undo"],"f0e2","M480 256c0 123.4-100.5 223.9-223.9 223.9c-48.86 0-95.19-15.58-134.2-44.86c-14.14-10.59-17-30.66-6.391-44.81c10.61-14.09 30.69-16.97 44.8-6.375c27.84 20.91 61 31.94 95.89 31.94C344.3 415.8 416 344.1 416 256s-71.67-159.8-159.8-159.8C205.9 96.22 158.6 120.3 128.6 160H192c17.67 0 32 14.31 32 32S209.7 224 192 224H48c-17.67 0-32-14.31-32-32V48c0-17.69 14.33-32 32-32s32 14.31 32 32v70.23C122.1 64.58 186.1 32.11 256.1 32.11C379.5 32.11 480 132.6 480 256z"]},wi=yi,ki={prefix:"fas",iconName:"calculator",icon:[384,512,[128425],"f1ec","M336 0h-288C22.38 0 0 22.38 0 48v416C0 489.6 22.38 512 48 512h288c25.62 0 48-22.38 48-48v-416C384 22.38 361.6 0 336 0zM64 208C64 199.2 71.2 192 80 192h32C120.8 192 128 199.2 128 208v32C128 248.8 120.8 256 112 256h-32C71.2 256 64 248.8 64 240V208zM64 304C64 295.2 71.2 288 80 288h32C120.8 288 128 295.2 128 304v32C128 344.8 120.8 352 112 352h-32C71.2 352 64 344.8 64 336V304zM224 432c0 8.801-7.199 16-16 16h-128C71.2 448 64 440.8 64 432v-32C64 391.2 71.2 384 80 384h128c8.801 0 16 7.199 16 16V432zM224 336c0 8.801-7.199 16-16 16h-32C167.2 352 160 344.8 160 336v-32C160 295.2 167.2 288 176 288h32C216.8 288 224 295.2 224 304V336zM224 240C224 248.8 216.8 256 208 256h-32C167.2 256 160 248.8 160 240v-32C160 199.2 167.2 192 176 192h32C216.8 192 224 199.2 224 208V240zM320 432c0 8.801-7.199 16-16 16h-32c-8.799 0-16-7.199-16-16v-32c0-8.801 7.201-16 16-16h32c8.801 0 16 7.199 16 16V432zM320 336c0 8.801-7.199 16-16 16h-32c-8.799 0-16-7.199-16-16v-32C256 295.2 263.2 288 272 288h32C312.8 288 320 295.2 320 304V336zM320 240C320 248.8 312.8 256 304 256h-32C263.2 256 256 248.8 256 240v-32C256 199.2 263.2 192 272 192h32C312.8 192 320 199.2 320 208V240zM320 144C320 152.8 312.8 160 304 160h-224C71.2 160 64 152.8 64 144v-64C64 71.2 71.2 64 80 64h224C312.8 64 320 71.2 320 80V144z"]},xi={prefix:"fas",iconName:"car",icon:[512,512,[128664,"automobile"],"f1b9","M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"]},Ci={prefix:"fas",iconName:"chess-board",icon:[448,512,[],"f43c","M192 224H128v64h64V224zM384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM384 160h-64v64h64v64h-64v64h64v64h-64v-64h-64v64H192v-64H128v64H64v-64h64V288H64V224h64V160H64V96h64v64h64V96h64v64h64V96h64V160zM192 288v64h64V288H192zM256 224V160H192v64H256zM256 288h64V224h-64V288z"]},Ii={prefix:"fas",iconName:"cubes",icon:[576,512,[],"f1b3","M172.1 40.16L268.1 3.76C280.9-1.089 295.1-1.089 307.9 3.76L403.9 40.16C425.6 48.41 440 69.25 440 92.52V204.7C441.3 205.1 442.6 205.5 443.9 205.1L539.9 242.4C561.6 250.6 576 271.5 576 294.7V413.9C576 436.1 562.9 456.2 542.5 465.1L446.5 507.3C432.2 513.7 415.8 513.7 401.5 507.3L288 457.5L174.5 507.3C160.2 513.7 143.8 513.7 129.5 507.3L33.46 465.1C13.13 456.2 0 436.1 0 413.9V294.7C0 271.5 14.39 250.6 36.15 242.4L132.1 205.1C133.4 205.5 134.7 205.1 136 204.7V92.52C136 69.25 150.4 48.41 172.1 40.16V40.16zM290.8 48.64C289 47.95 286.1 47.95 285.2 48.64L206.8 78.35L287.1 109.5L369.2 78.35L290.8 48.64zM392 210.6V121L309.6 152.6V241.8L392 210.6zM154.8 250.9C153 250.2 150.1 250.2 149.2 250.9L70.81 280.6L152 311.7L233.2 280.6L154.8 250.9zM173.6 455.3L256 419.1V323.2L173.6 354.8V455.3zM342.8 280.6L424 311.7L505.2 280.6L426.8 250.9C425 250.2 422.1 250.2 421.2 250.9L342.8 280.6zM528 413.9V323.2L445.6 354.8V455.3L523.2 421.2C526.1 419.9 528 417.1 528 413.9V413.9z"]},_i={prefix:"fas",iconName:"diagram-project",icon:[576,512,["project-diagram"],"f542","M0 80C0 53.49 21.49 32 48 32H144C170.5 32 192 53.49 192 80V96H384V80C384 53.49 405.5 32 432 32H528C554.5 32 576 53.49 576 80V176C576 202.5 554.5 224 528 224H432C405.5 224 384 202.5 384 176V160H192V176C192 177.7 191.9 179.4 191.7 180.1L272 288H368C394.5 288 416 309.5 416 336V432C416 458.5 394.5 480 368 480H272C245.5 480 224 458.5 224 432V336C224 334.3 224.1 332.6 224.3 331L144 224H48C21.49 224 0 202.5 0 176V80z"]},Mi=_i,zi={prefix:"fas",iconName:"fire",icon:[448,512,[128293],"f06d","M323.5 51.25C302.8 70.5 284 90.75 267.4 111.1C240.1 73.62 206.2 35.5 168 0C69.75 91.12 0 210 0 281.6C0 408.9 100.2 512 224 512s224-103.1 224-230.4C448 228.4 396 118.5 323.5 51.25zM304.1 391.9C282.4 407 255.8 416 226.9 416c-72.13 0-130.9-47.73-130.9-125.2c0-38.63 24.24-72.64 72.74-130.8c7 8 98.88 125.4 98.88 125.4l58.63-66.88c4.125 6.75 7.867 13.52 11.24 19.9C364.9 290.6 353.4 357.4 304.1 391.9z"]},Li={prefix:"fas",iconName:"microchip",icon:[512,512,[],"f2db","M160 352h192V160H160V352zM448 176h48C504.8 176 512 168.8 512 160s-7.162-16-16-16H448V128c0-35.35-28.65-64-64-64h-16V16C368 7.164 360.8 0 352 0c-8.836 0-16 7.164-16 16V64h-64V16C272 7.164 264.8 0 256 0C247.2 0 240 7.164 240 16V64h-64V16C176 7.164 168.8 0 160 0C151.2 0 144 7.164 144 16V64H128C92.65 64 64 92.65 64 128v16H16C7.164 144 0 151.2 0 160s7.164 16 16 16H64v64H16C7.164 240 0 247.2 0 256s7.164 16 16 16H64v64H16C7.164 336 0 343.2 0 352s7.164 16 16 16H64V384c0 35.35 28.65 64 64 64h16v48C144 504.8 151.2 512 160 512c8.838 0 16-7.164 16-16V448h64v48c0 8.836 7.164 16 16 16c8.838 0 16-7.164 16-16V448h64v48c0 8.836 7.164 16 16 16c8.838 0 16-7.164 16-16V448H384c35.35 0 64-28.65 64-64v-16h48c8.838 0 16-7.164 16-16s-7.162-16-16-16H448v-64h48C504.8 272 512 264.8 512 256s-7.162-16-16-16H448V176zM384 368c0 8.836-7.162 16-16 16h-224C135.2 384 128 376.8 128 368v-224C128 135.2 135.2 128 144 128h224C376.8 128 384 135.2 384 144V368z"]},Si={prefix:"fas",iconName:"person-hiking",icon:[384,512,["hiking"],"f6ec","M240 96c26.5 0 48-21.5 48-48S266.5 0 240 0C213.5 0 192 21.5 192 48S213.5 96 240 96zM80.01 287.1c7.31 0 13.97-4.762 15.87-11.86L137 117c.3468-1.291 .5125-2.588 .5125-3.866c0-7.011-4.986-13.44-12.39-15.13C118.4 96.38 111.7 95.6 105.1 95.6c-36.65 0-70 23.84-79.32 59.53L.5119 253.3C.1636 254.6-.0025 255.9-.0025 257.2c0 7.003 4.961 13.42 12.36 15.11L76.01 287.5C77.35 287.8 78.69 287.1 80.01 287.1zM368 160h-15.1c-8.875 0-15.1 7.125-15.1 16V192h-34.75l-46.75-46.75C243.4 134.1 228.6 128 212.9 128C185.9 128 162.5 146.3 155.9 172.5L129 280.3C128.4 282.8 128 285.5 128 288.1c0 8.325 3.265 16.44 9.354 22.53l86.62 86.63V480c0 17.62 14.37 32 31.1 32s32-14.38 32-32v-82.75c0-17.12-6.625-33.13-18.75-45.25l-46.87-46.88c.25-.5 .5-.875 .625-1.375l19.1-79.5l22.37 22.38C271.4 252.6 279.5 256 288 256h47.1v240c0 8.875 7.125 16 15.1 16h15.1C376.9 512 384 504.9 384 496v-320C384 167.1 376.9 160 368 160zM81.01 472.3c-.672 2.63-.993 5.267-.993 7.86c0 14.29 9.749 27.29 24.24 30.89C106.9 511.8 109.5 512 112 512c14.37 0 27.37-9.75 30.1-24.25l25.25-101l-52.75-52.75L81.01 472.3z"]},Ai=Si,ji={prefix:"fas",iconName:"tree",icon:[448,512,[127794],"f1bb","M413.8 447.1L256 448l0 31.99C256 497.7 241.8 512 224.1 512c-17.67 0-32.1-14.32-32.1-31.99l0-31.99l-158.9-.0099c-28.5 0-43.69-34.49-24.69-56.4l68.98-79.59H62.22c-25.41 0-39.15-29.8-22.67-49.13l60.41-70.85H89.21c-21.28 0-32.87-22.5-19.28-37.31l134.8-146.5c10.4-11.3 28.22-11.3 38.62-.0033l134.9 146.5c13.62 14.81 2.001 37.31-19.28 37.31h-10.77l60.35 70.86c16.46 19.34 2.716 49.12-22.68 49.12h-15.2l68.98 79.59C458.7 413.7 443.1 447.1 413.8 447.1z"]},Ei={prefix:"fas",iconName:"wave-square",icon:[640,512,[],"f83e","M476 480h-152c-19.88 0-36-16.12-36-36v-348H192v156c0 19.88-16.12 36-36 36H31.1C14.33 288 0 273.7 0 256s14.33-31.1 31.1-31.1H128v-156c0-19.88 16.12-36 36-36h152c19.88 0 36 16.12 36 36v348h96v-156c0-19.88 16.12-36 36-36h124C625.7 224 640 238.3 640 256s-14.33 32-31.1 32H512v156C512 463.9 495.9 480 476 480z"]},Vi={prefix:"fas",iconName:"wind",icon:[512,512,[],"f72e","M32 192h320c52.94 0 96-43.06 96-96s-43.06-96-96-96h-32c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c17.66 0 32 14.34 32 32s-14.34 32-32 32H32C14.31 128 0 142.3 0 160S14.31 192 32 192zM160 320H32c-17.69 0-32 14.31-32 32s14.31 32 32 32h128c17.66 0 32 14.34 32 32s-14.34 32-32 32H128c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c52.94 0 96-43.06 96-96S212.9 320 160 320zM416 224H32C14.31 224 0 238.3 0 256s14.31 32 32 32h384c17.66 0 32 14.34 32 32s-14.34 32-32 32h-32c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c52.94 0 96-43.06 96-96S468.9 224 416 224z"]};const Pi="images/projects/cal_sim.png",Hi="images/projects/myst_net.png",Ti="images/projects/fireplace.png",Oi="images/projects/euler_golf.png",Ni="images/projects/shader_toy.png",Fi="images/projects/vector_wind.png",Ri="images/projects/fiery_furnace.png",Di="images/projects/8_bit_spaghetti.png",Wi="images/projects/acoustic-forest.png",Ui="images/projects/station_analysis.png",Bi="images/projects/villein_translator.png",qi="images/projects/automata_exploration.png",kt=[{title:"Automata Browser",icon:Ci,image:qi,year:"2020",brief:"Global map of all life-like Cellular Automata",description:"I was researching emergent complexity in cellular automata and found a classification scheme for all quarter million life-like automata. The embedding compresses all of the rules into a nebula of points where distance between any two points provides a decent approximation of how simililarly the rules behave given a random initial board state. I built this browser with React so that I could better explore the dataset.",link:"/automata-nebula-explorer/index.html"},{title:"Fiery Furnace",icon:Ai,image:Ri,year:"2020",brief:"Interactive map of the Fiery Furnace in Arches National Park",description:"Pre-pandemic, my partner Hannah and I took a trip down to Arches National Park in Utah. The highlight was exploring the Fiery Furnace: a labrynth of ancient sandstone with no main trail, only meandering boulder routes and washes. I exported the route data (recorded with my watch) and interpolated photo time-stamps with location time-stamps to create an interactive map of our path with pictures along the way using Mapbox.",link:"/FieryFurnace/index.html"},{title:"Shader Toy",icon:Ii,image:Ni,year:"2020",brief:"Various shaders written by me",description:"I have been having a lot of fun learning how to write shaders. GLSL seemed like an intimidating topic at first, but once I realized it was essentially a very parrellized graphing calculator I started having a lot of fun and have been picking up some more techniques. As of writing this, I have worked with Ray Marching, Conformal Mapping, and 2D interference patterns.",link:"https://www.shadertoy.com/user/kylehovey"},{title:"Myst Net",icon:Mi,image:Hi,year:"2019",brief:"Neural Net for parsing D'ni numerals",description:"This was my last hackathon project. The D'ni numeral system is from the world of Myst, a game series that I am a very large fan of. The system is base-25, and has a rotational glyph system with a base-5 sub-pattern. I wanted to see if I could reproduce the MNIST convnet example using D'ni numbers. To generate training data, I wrote the segments in isolation and created a script to produce combinatorial sets of the individual segments I created. In the end, the network had over 99% validation accuracy and responded well to novel handwritten D'ni digits.",link:"https://github.com/kylehovey/myst-net"},{title:"Vector Wind",icon:Vi,image:Fi,year:"2017",brief:"Vector field visualization tool",description:"I was inspired by a Reddit post that used HTML Canvas to create a beautiful vector field visualization. Unfortunately, the poster did not release their source code, so I decided to make my own version. Vector fields are entered by typing in a Javascript function that takes two inputs (x,y) and returns a two-element array. The result is visualized by creating particles that get pushed around in the field like dust in the wind. The source code can be found on my GitHub.",link:"vectorwind/index.html"},{title:"CALSim",icon:Ei,image:Pi,year:"2016",brief:"In-browser WireWorld cellular automata simulator",description:"This is a WireWorld Cellular Automata simulator written in JavaScript. WireWorld is a CA capable of logic simulation. In fact, it is Turing Complete! This in-browser interpreter allows you to create structures, copy, paste, delete, and pause/play/step simulations.",link:"CALSim/index.html"},{title:"Villein Translator",icon:ki,image:Bi,year:"2016",brief:"Translator for Obduction's Villein numbers",description:`In Cyan's new game Obduction there is an alien race called the Villeins. Part of the game is figuring out their numbering system, which uses a three-by-three grid on which five "digits" can lie. The whole system is base-4, and I had a bunch of fun figuring it out. I wanted to create a translator to quickly verify numbers, so I made one husing the html5 canvas.`,link:"Villein/index.html"},{title:"Euler Golf",icon:wi,image:Oi,year:"2015",brief:"Recursive puzzle involving complex numbers",description:"When I was attending Cuesta College in San Luis Obispo, I had an idea for a game over the Gaussian Integers (complex numbers of the form a+bi where a and b are both integers). I quickly found that the game was evil in difficulty, and as I shared it with friends I also learned that it was not just me. In light of this newfound challenge, I created an in-browser version as a Hackathon project. More info can be found on the site.",link:"EulerGolf/index.html"},{title:"Station Report",icon:xi,image:Ui,year:"2018",brief:"Analysis to find the best spots for new EV chargers",description:"In Utah, where the air is bad enough each winter to take years off of the average person's life expectancy, electric vehicle adoption is one of the many solutions to our air quality. At the Utah Power and Electronics Lab (UPEL), I helped Rocky Mountain Power determine where to place/fund new electric vehicle charging stations in Utah. We worked with the Utah Department of Transportation to combine traffic information, as well as network analysis on the roadways to find the locations that would have the highest impact for EV adoption. This interactive report summarizes the findings of the analysis and visualizes what corridors are affected.",link:"stationReport/index.html"},{title:"8-Bit Spaghetti",icon:Li,image:Di,year:"2012",brief:"8-Bit Computer designed from the ground up",description:'One fateful night of playing Minecraft with my best friend and I was convinced that I had to learn more about the inner workings of a CPU. We had just installed a mod that added basic digital components to the game, and my friend was constructing a processor. I knew nothing about architecture at that point, but I wanted to learn more. I began my journey reading "Digitial Computer Electronics" by Malvino and started constructing the basic modular components of a computer. Eventually I had constructed a processor of my own design. The final product had EM interference which induced signalling issues, but the knowledge I gained benefits me to this day. I made a website and tutorial to aid anyone who wishes to acheive the same goal. I know of a few individuals so far that have used my instructions to build their own CPU.',link:"http://8-bitspaghetti.com"},{title:"Fireplace",icon:zi,image:Ti,year:"2016",brief:"Custom simulator written to mimic a campfire",description:"One of my favorite things to do in my free time is to program new patterns for the Adafruit Neopixel shield (a 5x8 RGB LED matrix for the Arduino). Since I camp a lot, I wanted to simulate fire on it with the hopes of creating a calming lantern for my tent. I decided to go with a slightly neural-network inspired approach. I created an ember class that has an internal fire value and a customized sigmoid curve function that will map the embers' fire values to something between 0 and 1. A stoke method adds a random integer in a specified range, and a diminish method multiplies the fire variable by a predetermined constant (0<k<1). I was so happy with the results that I wanted to create an in-browser version. This time, I used HTML5 and JS to create a grid of embers. I shaped the fire on the page by making the range for the random constant that each ember is stoked with depend on the ember's position on the page. Vertically there is a linear gradient, and horizontally there is a gaussian distribution determined by page width.",link:"FirePlace/index.html"},{title:"Acoustic Forest",icon:ji,image:Wi,year:"2016",brief:"2D Procedural landscape that is reactive to sound",description:`A natural continuation of my FirePlace project and an ode to John Muir and the mountains, I created Acoustic Forest: a music visualizer that uses procedurally generated terrain with unique elements augmented by distinct frequency bands in a song. I decided to go with Muse's "Exogenesis Symphony Part 3" which I claim absolutely no rights to and will take down at first request of any proprietor's request. I chose the song because it just so happened that Muse's masterful composition consists of a crescendo of increasing layers of elements, then a decrescendo back out. The structure of the song itself is a mountain in shape, which made it perfect to bring in elements slowly, then bring them out in reverse order. Currently this only runs in Chrome/Safari for desktop, so apologies to mobile users. Granted, this was created in Canvas without WebGL, so expect heavy processor usage.`,link:"AcousticForest/index.html"}];function xt(e,t,n){const i=e.slice();return i[3]=t[n],i}function Ct(e){let t;return{c(){t=M("div"),t.innerHTML=`<h2>Project Portfolio</h2> 
              <p>Hi! My name is Kyle. I grew up in a small community in the
                Sierra Nevada mountains. In 2019, I graduated Utah State
                University with a BS in Computational Mathematics. My passions
                include mathematics, electrical engineering, programming, music,
                hiking, climbing, and philosophy. Here you can see some
                highlights from my past/current projects. Check out my blog for
                posts on math and programming.</p>`},m(n,i){ee(n,t,i)},d(n){n&&Q(t)}}}function It(e){let t,n,i=kt,a=[];for(let r=0;r<i.length;r+=1)a[r]=_t(xt(e,i,r));const s=r=>B(a[r],1,1,()=>{a[r]=null});return{c(){t=M("ul");for(let r=0;r<a.length;r+=1)a[r].c();S(t,"class","projects-list")},m(r,o){ee(r,t,o);for(let l=0;l<a.length;l+=1)a[l].m(t,null);n=!0},p(r,o){if(o&0){i=kt;let l;for(l=0;l<i.length;l+=1){const f=xt(r,i,l);a[l]?(a[l].p(f,o),P(a[l],1)):(a[l]=_t(f),a[l].c(),P(a[l],1),a[l].m(t,null))}for(Ge(),l=i.length;l<a.length;l+=1)s(l);Ye()}},i(r){if(!n){for(let o=0;o<i.length;o+=1)P(a[o]);n=!0}},o(r){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)B(a[o]);n=!1},d(r){r&&Q(t),on(a,r)}}}function _t(e){let t,n;return t=new di({props:{project:e[3]}}),{c(){ke(t.$$.fragment)},m(i,a){ue(t,i,a),n=!0},p:F,i(i){n||(P(t.$$.fragment,i),n=!0)},o(i){B(t.$$.fragment,i),n=!1},d(i){de(t,i)}}}function Mt(e){let t,n;return t=new pi({}),{c(){ke(t.$$.fragment)},m(i,a){ue(t,i,a),n=!0},i(i){n||(P(t.$$.fragment,i),n=!0)},o(i){B(t.$$.fragment,i),n=!1},d(i){de(t,i)}}}function Gi(e){let t,n,i,a,s,r,o,l,f,v,h,I,k,x,m=e[0]===null&&Ct(),g=e[0]===null&&It(e),d=e[0]!==null&&Mt();return k=new bi({}),{c(){t=M("main"),n=M("div"),i=M("canvas"),a=W(),s=M("div"),r=M("div"),o=M("div"),l=M("div"),f=W(),m&&m.c(),v=W(),g&&g.c(),h=W(),d&&d.c(),I=W(),ke(k.$$.fragment),S(i,"id","boids-canvas"),S(i,"class","full-canvas"),S(l,"class","logo"),S(o,"class","description"),S(r,"class","main"),S(s,"class","content"),S(n,"class","container")},m(w,_){ee(w,t,_),y(t,n),y(n,i),y(n,a),y(n,s),y(s,r),y(r,o),y(o,l),y(o,f),m&&m.m(o,null),y(r,v),g&&g.m(r,null),y(r,h),d&&d.m(r,null),y(r,I),ue(k,r,null),x=!0},p(w,[_]){w[0]===null?m||(m=Ct(),m.c(),m.m(o,null)):m&&(m.d(1),m=null),w[0]===null?g?(g.p(w,_),_&1&&P(g,1)):(g=It(w),g.c(),P(g,1),g.m(r,h)):g&&(Ge(),B(g,1,1,()=>{g=null}),Ye()),w[0]!==null?d?_&1&&P(d,1):(d=Mt(),d.c(),P(d,1),d.m(r,I)):d&&(Ge(),B(d,1,1,()=>{d=null}),Ye())},i(w){x||(P(g),P(d),P(k.$$.fragment,w),x=!0)},o(w){B(g),B(d),B(k.$$.fragment,w),x=!1},d(w){w&&Q(t),m&&m.d(),g&&g.d(),d&&d.d(),de(k)}}}function Yi(e,t,n){let i;St(e,Oe,r=>n(0,i=r));const a={r:63,g:66,b:65},s={r:150,g:200,b:255};return dn(()=>{const r=document.getElementById("boids-canvas"),o=r.getContext("2d"),l=()=>{r.width=window.innerWidth,r.height=window.innerHeight};window.addEventListener("resize",l),l();const f=u=>{if(o===null)return;const[b,j]=u.pos,[V,Y]=u.dS,K=Math.atan2(Y,V);o.save(),o.translate(b,j),o.rotate(K),o.beginPath(),o.moveTo(10,0),o.lineTo(-10,5),o.lineTo(-10,-5),o.closePath(),o.fillStyle=Ie(D(u)),o.fill(),o.restore()},v=1,h=200,I=.5,k=2,x=.4,m=.001,g=.95,d=1e-6,w=.001,_=.01,p=([u,b],[j,V])=>[u+j,b+V],z=([u,b],[j,V])=>[u-j,b-V],c=(u,[b,j])=>[u*b,u*j],A=([u,b])=>Math.sqrt(u*u+b*b),T=(u,b)=>A(z(u,b)),L=u=>{const b=A(u);return b!==0?c(1/b,u):u},q=u=>1/(1+Math.exp(40*(u-.5)**2)),ae=(u,b,j)=>(1-u)*b+u*j,E=(u,{r:b,g:j,b:V},{r:Y,g:K,b:O})=>({r:ae(u,b,Y),g:ae(u,j,K),b:ae(u,V,O)}),D=u=>E(q(u.activation),a,s),Ie=({r:u,g:b,b:j})=>`rgb(${u},${b},${j})`,re=(u,b)=>{const j=z(u,b),V=A(j);return c(Math.min(m,V),L(j))},_e=(u,b)=>{let j=0,V=[0,0],Y=[0,0],K=[0,0],O=0;for(const $ of b){const X=T($.pos,u.pos);X>0&&X<=h&&(j+=1,V=p(V,c(1/X,L($.dS))),Y=p(Y,$.pos),K=c(1/X,L(z(u.pos,$.pos))),O+=q($.activation)/X)}let oe=[0,0],Me=[0,0],te=[0,0];if(j>0){const $=c(v,L(K));oe=c(I,re($,u.dS));const X=c(v,L(V));Me=c(k,re(X,u.dS));const en=c(v,L(z(Y,u.pos)));te=c(x,re(en,u.dS))}return[oe,Me,te,O]},he=(u,b)=>{const[j,V,Y,K]=_e(u,b),O=p(u.pos,u.dS),oe=p(u.dS,u.d2S),Me=p(p(j,p(V,Y)),u.d2S);let te=u.activation*g;te<=d&&(te=0,(K>=_||Math.random()>1-w)&&(te=1));const X=A(oe)>v?c(v,L(oe)):oe;return O[0]>r.width&&(O[0]=0),O[0]<0&&(O[0]=r.width),O[1]>r.height&&(O[1]=0),O[1]<0&&(O[1]=r.height),{pos:O,dS:X,d2S:Me,activation:te}},N=[];for(let u=0;u<200;u++){const b=Math.random()*2*Math.PI;N.push({pos:[Math.random()*r.width,Math.random()*r.height],dS:[Math.cos(b),Math.sin(b)],d2S:[0,0],activation:0})}for(let u=0;u<100;u++)for(let b=0;b<N.length;b++)N[b]=he(N[b],N);const me=()=>{requestAnimationFrame(me),o.clearRect(0,0,r.width,r.height);for(let u=0;u<N.length;u++)f(N[u]),N[u]=he(N[u],N)};window.innerWidth>600&&me()}),[i]}class Xi extends Ce{constructor(t){super(),xe(this,t,Yi,Gi,fe,{})}}new Xi({target:document.getElementById("app")});
