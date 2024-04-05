const dn=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}};dn();function A(){}function ue(t,e){for(const n in e)t[n]=e[n];return t}function Ne(t){return t()}function de(){return Object.create(null)}function ft(t){t.forEach(Ne)}function Fe(t){return typeof t=="function"}function J(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Pt;function Et(t,e){return Pt||(Pt=document.createElement("a")),Pt.href=e,t===Pt.href}function hn(t){return Object.keys(t).length===0}function mn(t,...e){if(t==null)return A;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Dt(t,e,n){t.$$.on_destroy.push(mn(e,n))}function he(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ne(t){return t&&Fe(t.destroy)?t.destroy:A}function y(t,e){t.appendChild(e)}function O(t,e,n){t.insertBefore(e,n||null)}function T(t){t.parentNode.removeChild(t)}function Re(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function x(t){return document.createElement(t)}function pn(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function ht(t){return document.createTextNode(t)}function H(){return ht(" ")}function gn(){return ht("")}function bt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function _(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function bn(t){return Array.from(t.childNodes)}function Ht(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}class vn{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=pn(n.nodeName):this.e=x(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)O(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(T)}}let _t;function xt(t){_t=t}function De(){if(!_t)throw new Error("Function called outside component initialization");return _t}function yn(t){De().$$.before_update.push(t)}function wn(t){De().$$.on_mount.push(t)}const wt=[],me=[],At=[],pe=[],kn=Promise.resolve();let Yt=!1;function xn(){Yt||(Yt=!0,kn.then(We))}function Xt(t){At.push(t)}const Ut=new Set;let St=0;function We(){const t=_t;do{for(;St<wt.length;){const e=wt[St];St++,xt(e),Cn(e.$$)}for(xt(null),wt.length=0,St=0;me.length;)me.pop()();for(let e=0;e<At.length;e+=1){const n=At[e];Ut.has(n)||(Ut.add(n),n())}At.length=0}while(wt.length);for(;pe.length;)pe.pop()();Yt=!1,Ut.clear(),xt(t)}function Cn(t){if(t.fragment!==null){t.update(),ft(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Xt)}}const Vt=new Set;let dt;function lt(){dt={r:0,c:[],p:dt}}function ct(){dt.r||ft(dt.c),dt=dt.p}function I(t,e){t&&t.i&&(Vt.delete(t),t.i(e))}function S(t,e,n,i){if(t&&t.o){if(Vt.has(t))return;Vt.add(t),dt.c.push(()=>{Vt.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function Z(t){t&&t.c()}function Y(t,e,n,i){const{fragment:r,on_mount:o,on_destroy:a,after_update:s}=t.$$;r&&r.m(e,n),i||Xt(()=>{const l=o.map(Ne).filter(Fe);a?a.push(...l):ft(l),t.$$.on_mount=[]}),s.forEach(Xt)}function X(t,e){const n=t.$$;n.fragment!==null&&(ft(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function _n(t,e){t.$$.dirty[0]===-1&&(wt.push(t),xn(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(t,e,n,i,r,o,a,s=[-1]){const l=_t;xt(t);const c=t.$$={fragment:null,ctx:null,props:o,update:A,not_equal:r,bound:de(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:de(),dirty:s,skip_bound:!1,root:e.target||l.$$.root};a&&a(c.root);let p=!1;if(c.ctx=n?n(t,e.props||{},(m,C,...z)=>{const w=z.length?z[0]:C;return c.ctx&&r(c.ctx[m],c.ctx[m]=w)&&(!c.skip_bound&&c.bound[m]&&c.bound[m](w),p&&_n(t,m)),C}):[],c.update(),p=!0,ft(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){const m=bn(e.target);c.fragment&&c.fragment.l(m),m.forEach(T)}else c.fragment&&c.fragment.c();e.intro&&I(t.$$.fragment),Y(t,e.target,e.anchor,e.customElement),We()}xt(l)}class tt{$destroy(){X(this,1),this.$destroy=A}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!hn(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function Ct(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ct=function(e){return typeof e}:Ct=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ct(t)}function Mn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ge(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function In(t,e,n){return e&&ge(t.prototype,e),n&&ge(t,n),t}function zn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function L(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{},i=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),i.forEach(function(r){zn(t,r,n[r])})}return t}function Be(t,e){return Ln(t)||Pn(t,e)||Sn()}function Ln(t){if(Array.isArray(t))return t}function Pn(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a=t[Symbol.iterator](),s;!(i=(s=a.next()).done)&&(n.push(s.value),!(e&&n.length===e));i=!0);}catch(l){r=!0,o=l}finally{try{!i&&a.return!=null&&a.return()}finally{if(r)throw o}}return n}function Sn(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var be=function(){},ie={},Ue={},jn=null,$e={mark:be,measure:be};try{typeof window!="undefined"&&(ie=window),typeof document!="undefined"&&(Ue=document),typeof MutationObserver!="undefined"&&(jn=MutationObserver),typeof performance!="undefined"&&($e=performance)}catch{}var An=ie.navigator||{},ve=An.userAgent,ye=ve===void 0?"":ve,Wt=ie,D=Ue,jt=$e;Wt.document;var re=!!D.documentElement&&!!D.head&&typeof D.addEventListener=="function"&&typeof D.createElement=="function";~ye.indexOf("MSIE")||~ye.indexOf("Trident/");var rt="___FONT_AWESOME___",qe="fa",Ge="svg-inline--fa",Vn="data-fa-i2svg";(function(){try{return!0}catch{return!1}})();var $t={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ye=Wt.FontAwesomeConfig||{};function En(t){var e=D.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Hn(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(D&&typeof D.querySelector=="function"){var Tn=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Tn.forEach(function(t){var e=Be(t,2),n=e[0],i=e[1],r=Hn(En(n));r!=null&&(Ye[i]=r)})}var On={familyPrefix:qe,replacementClass:Ge,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Zt=L({},On,Ye);Zt.autoReplaceSvg||(Zt.observeMutations=!1);var $=L({},Zt);Wt.FontAwesomeConfig=$;var at=Wt||{};at[rt]||(at[rt]={});at[rt].styles||(at[rt].styles={});at[rt].hooks||(at[rt].hooks={});at[rt].shims||(at[rt].shims=[]);var Q=at[rt],Nn=[],Fn=function t(){D.removeEventListener("DOMContentLoaded",t),Jt=1,Nn.map(function(e){return e()})},Jt=!1;re&&(Jt=(D.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(D.readyState),Jt||D.addEventListener("DOMContentLoaded",Fn));var ae="pending",Xe="settled",Tt="fulfilled",Ot="rejected",Rn=function(){},Ze=typeof global!="undefined"&&typeof global.process!="undefined"&&typeof global.process.emit=="function",Dn=typeof setImmediate=="undefined"?setTimeout:setImmediate,kt=[],Qt;function Wn(){for(var t=0;t<kt.length;t++)kt[t][0](kt[t][1]);kt=[],Qt=!1}function Nt(t,e){kt.push([t,e]),Qt||(Qt=!0,Dn(Wn,0))}function Bn(t,e){function n(r){oe(e,r)}function i(r){Mt(e,r)}try{t(n,i)}catch(r){i(r)}}function Je(t){var e=t.owner,n=e._state,i=e._data,r=t[n],o=t.then;if(typeof r=="function"){n=Tt;try{i=r(i)}catch(a){Mt(o,a)}}Qe(o,i)||(n===Tt&&oe(o,i),n===Ot&&Mt(o,i))}function Qe(t,e){var n;try{if(t===e)throw new TypeError("A promises callback cannot return that same promise.");if(e&&(typeof e=="function"||Ct(e)==="object")){var i=e.then;if(typeof i=="function")return i.call(e,function(r){n||(n=!0,e===r?Ke(t,r):oe(t,r))},function(r){n||(n=!0,Mt(t,r))}),!0}}catch(r){return n||Mt(t,r),!0}return!1}function oe(t,e){(t===e||!Qe(t,e))&&Ke(t,e)}function Ke(t,e){t._state===ae&&(t._state=Xe,t._data=e,Nt(Un,t))}function Mt(t,e){t._state===ae&&(t._state=Xe,t._data=e,Nt($n,t))}function tn(t){t._then=t._then.forEach(Je)}function Un(t){t._state=Tt,tn(t)}function $n(t){t._state=Ot,tn(t),!t._handled&&Ze&&global.process.emit("unhandledRejection",t._data,t)}function qn(t){global.process.emit("rejectionHandled",t)}function G(t){if(typeof t!="function")throw new TypeError("Promise resolver "+t+" is not a function");if(!(this instanceof G))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],Bn(t,this)}G.prototype={constructor:G,_state:ae,_then:null,_data:void 0,_handled:!1,then:function(e,n){var i={owner:this,then:new this.constructor(Rn),fulfilled:e,rejected:n};return(n||e)&&!this._handled&&(this._handled=!0,this._state===Ot&&Ze&&Nt(qn,this)),this._state===Tt||this._state===Ot?Nt(Je,i):this._then.push(i),i.then},catch:function(e){return this.then(null,e)}};G.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new G(function(e,n){var i=[],r=0;function o(l){return r++,function(c){i[l]=c,--r||e(i)}}for(var a=0,s;a<t.length;a++)s=t[a],s&&typeof s.then=="function"?s.then(o(a),n):i[a]=s;r||e(i)})};G.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new G(function(e,n){for(var i=0,r;i<t.length;i++)r=t[i],r&&typeof r.then=="function"?r.then(e,n):e(r)})};G.resolve=function(t){return t&&Ct(t)==="object"&&t.constructor===G?t:new G(function(e){e(t)})};G.reject=function(t){return new G(function(e,n){n(t)})};var gt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Gn(t){if(!(!t||!re)){var e=D.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=D.head.childNodes,i=null,r=n.length-1;r>-1;r--){var o=n[r],a=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(i=o)}return D.head.insertBefore(e,i),t}}var Yn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ft(){for(var t=12,e="";t-- >0;)e+=Yn[Math.random()*62|0];return e}function en(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Xn(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(en(t[n]),'" ')},"").trim()}function nn(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n],";")},"")}function rn(t){return t.size!==gt.size||t.x!==gt.x||t.y!==gt.y||t.rotate!==gt.rotate||t.flipX||t.flipY}function an(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),a="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(o," ").concat(a," ").concat(s)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}var qt={x:0,y:0,width:"100%",height:"100%"};function we(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Zn(t){return t.tag==="g"?t.children:[t]}function Jn(t){var e=t.children,n=t.attributes,i=t.main,r=t.mask,o=t.maskId,a=t.transform,s=i.width,l=i.icon,c=r.width,p=r.icon,m=an({transform:a,containerWidth:c,iconWidth:s}),C={tag:"rect",attributes:L({},qt,{fill:"white"})},z=l.children?{children:l.children.map(we)}:{},w={tag:"g",attributes:L({},m.inner),children:[we(L({tag:l.tag,attributes:L({},l.attributes,m.path)},z))]},v={tag:"g",attributes:L({},m.outer),children:[w]},k="mask-".concat(o||Ft()),f="clip-".concat(o||Ft()),g={tag:"mask",attributes:L({},qt,{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,v]},d={tag:"defs",children:[{tag:"clipPath",attributes:{id:f},children:Zn(p)},g]};return e.push(d,{tag:"rect",attributes:L({fill:"currentColor","clip-path":"url(#".concat(f,")"),mask:"url(#".concat(k,")")},qt)}),{children:e,attributes:n}}function Qn(t){var e=t.children,n=t.attributes,i=t.main,r=t.transform,o=t.styles,a=nn(o);if(a.length>0&&(n.style=a),rn(r)){var s=an({transform:r,containerWidth:i.width,iconWidth:i.width});e.push({tag:"g",attributes:L({},s.outer),children:[{tag:"g",attributes:L({},s.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:L({},i.icon.attributes,s.path)}]}]})}else e.push(i.icon);return{children:e,attributes:n}}function Kn(t){var e=t.children,n=t.main,i=t.mask,r=t.attributes,o=t.styles,a=t.transform;if(rn(a)&&n.found&&!i.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};r.style=nn(L({},o,{"transform-origin":"".concat(c.x+a.x/16,"em ").concat(c.y+a.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function ti(t){var e=t.prefix,n=t.iconName,i=t.children,r=t.attributes,o=t.symbol,a=o===!0?"".concat(e,"-").concat($.familyPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:L({},r,{id:a}),children:i}]}]}function ei(t){var e=t.icons,n=e.main,i=e.mask,r=t.prefix,o=t.iconName,a=t.transform,s=t.symbol,l=t.title,c=t.maskId,p=t.titleId,m=t.extra,C=t.watchable,z=C===void 0?!1:C,w=i.found?i:n,v=w.width,k=w.height,f=r==="fak",g=f?"":"fa-w-".concat(Math.ceil(v/k*16)),d=[$.replacementClass,o?"".concat($.familyPrefix,"-").concat(o):"",g].filter(function(et){return m.classes.indexOf(et)===-1}).filter(function(et){return et!==""||!!et}).concat(m.classes).join(" "),b={children:[],attributes:L({},m.attributes,{"data-prefix":r,"data-icon":o,class:d,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(k)})},P=f&&!~m.classes.indexOf("fa-fw")?{width:"".concat(v/k*16*.0625,"em")}:{};z&&(b.attributes[Vn]=""),l&&b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(p||Ft())},children:[l]});var u=L({},b,{prefix:r,iconName:o,main:n,mask:i,maskId:c,transform:a,symbol:s,styles:L({},P,m.styles)}),E=i.found&&n.found?Jn(u):Qn(u),N=E.children,F=E.attributes;return u.children=N,u.attributes=F,s?ti(u):Kn(u)}var ke=function(){};$.measurePerformance&&jt&&jt.mark&&jt.measure;var ni=function(e,n){return function(i,r,o,a){return e.call(n,i,r,o,a)}},Gt=function(e,n,i,r){var o=Object.keys(e),a=o.length,s=r!==void 0?ni(n,r):n,l,c,p;for(i===void 0?(l=1,p=e[o[0]]):(l=0,p=i);l<a;l++)c=o[l],p=s(p,e[c],c,e);return p};function on(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,r=i===void 0?!1:i,o=Object.keys(e).reduce(function(a,s){var l=e[s],c=!!l.icon;return c?a[l.iconName]=l.icon:a[s]=l,a},{});typeof Q.hooks.addPack=="function"&&!r?Q.hooks.addPack(t,o):Q.styles[t]=L({},Q.styles[t]||{},o),t==="fas"&&on("fa",e)}var xe=Q.styles,ii=Q.shims,sn=function(){var e=function(r){return Gt(xe,function(o,a,s){return o[s]=Gt(a,r,{}),o},{})};e(function(i,r,o){return r[3]&&(i[r[3]]=o),i}),e(function(i,r,o){var a=r[2];return i[o]=o,a.forEach(function(s){i[s]=o}),i});var n="far"in xe;Gt(ii,function(i,r){var o=r[0],a=r[1],s=r[2];return a==="far"&&!n&&(a="fas"),i[o]={prefix:a,iconName:s},i},{})};sn();Q.styles;function Ce(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}function ln(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,r=t.children,o=r===void 0?[]:r;return typeof t=="string"?en(t):"<".concat(e," ").concat(Xn(i),">").concat(o.map(ln).join(""),"</").concat(e,">")}var ri=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e?e.toLowerCase().split(" ").reduce(function(i,r){var o=r.toLowerCase().split("-"),a=o[0],s=o.slice(1).join("-");if(a&&s==="h")return i.flipX=!0,i;if(a&&s==="v")return i.flipY=!0,i;if(s=parseFloat(s),isNaN(s))return i;switch(a){case"grow":i.size=i.size+s;break;case"shrink":i.size=i.size-s;break;case"left":i.x=i.x-s;break;case"right":i.x=i.x+s;break;case"up":i.y=i.y-s;break;case"down":i.y=i.y+s;break;case"rotate":i.rotate=i.rotate+s;break}return i},n):n};function Kt(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=new Error().stack}Kt.prototype=Object.create(Error.prototype);Kt.prototype.constructor=Kt;var Bt={fill:"currentColor"},cn={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};L({},Bt,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var se=L({},cn,{attributeName:"opacity"});L({},Bt,{cx:"256",cy:"364",r:"28"}),L({},cn,{attributeName:"r",values:"28;14;28;28;14;28;"}),L({},se,{values:"1;0;1;1;0;1;"});L({},Bt,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),L({},se,{values:"1;0;0;0;0;1;"});L({},Bt,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),L({},se,{values:"0;0;1;1;0;0;"});Q.styles;function _e(t){var e=t[0],n=t[1],i=t.slice(4),r=Be(i,1),o=r[0],a=null;return Array.isArray(o)?a={tag:"g",attributes:{class:"".concat($.familyPrefix,"-").concat($t.GROUP)},children:[{tag:"path",attributes:{class:"".concat($.familyPrefix,"-").concat($t.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat($.familyPrefix,"-").concat($t.PRIMARY),fill:"currentColor",d:o[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:n,icon:a}}Q.styles;var ai=`svg:not(:root).svg-inline--fa {
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
}`;function oi(){var t=qe,e=Ge,n=$.familyPrefix,i=$.replacementClass,r=ai;if(n!==t||i!==e){var o=new RegExp("\\.".concat(t,"\\-"),"g"),a=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(s,".".concat(i))}return r}var si=function(){function t(){Mn(this,t),this.definitions={}}return In(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];var a=r.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(s){n.definitions[s]=L({},n.definitions[s]||{},a[s]),on(s,a[s]),sn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(o){var a=r[o],s=a.prefix,l=a.iconName,c=a.icon;n[s]||(n[s]={}),n[s][l]=c}),n}}]),t}();function li(){$.autoAddCss&&!Me&&(Gn(oi()),Me=!0)}function ci(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return ln(i)})}}),Object.defineProperty(t,"node",{get:function(){if(!!re){var i=D.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function te(t){var e=t.prefix,n=e===void 0?"fa":e,i=t.iconName;if(!!i)return Ce(ui.definitions,n,i)||Ce(Q.styles,n,i)}function fi(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:te(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:te(r||{})),t(i,L({},n,{mask:r}))}}var ui=new si,Me=!1,di={transform:function(e){return ri(e)}},hi=fi(function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.transform,i=n===void 0?gt:n,r=e.symbol,o=r===void 0?!1:r,a=e.mask,s=a===void 0?null:a,l=e.maskId,c=l===void 0?null:l,p=e.title,m=p===void 0?null:p,C=e.titleId,z=C===void 0?null:C,w=e.classes,v=w===void 0?[]:w,k=e.attributes,f=k===void 0?{}:k,g=e.styles,d=g===void 0?{}:g;if(!!t){var b=t.prefix,P=t.iconName,u=t.icon;return ci(L({type:"icon"},t),function(){return li(),$.autoA11y&&(m?f["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(z||Ft()):(f["aria-hidden"]="true",f.focusable="false")),ei({icons:{main:_e(u),mask:s?_e(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:P,transform:L({},gt,i),symbol:o,title:m,maskId:c,titleId:z,extra:{attributes:f,styles:d,classes:v}})})}});function Ie(t){if(t===null||typeof t=="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2){const[e,n]=t;return{prefix:e,iconName:n}}if(typeof t=="string")return{prefix:"fas",iconName:t}}function mi(t){let e,n;return{c(){e=new vn(!1),n=gn(),e.a=n},m(i,r){e.m(t[0],i,r),O(i,n,r)},p(i,[r]){r&1&&e.p(i[0])},i:A,o:A,d(i){i&&T(n),i&&e.d()}}}function pi(t,e,n){let i,r,{border:o=!1}=e,{fixedWidth:a=!1}=e,{flip:s=null}=e,{icon:l=null}=e,{mask:c=null}=e,{listItem:p=!1}=e,{pull:m=null}=e,{pulse:C=!1}=e,{rotation:z=null}=e,{swapOpacity:w=!1}=e,{size:v=null}=e,{spin:k=!1}=e,{transform:f={}}=e,{symbol:g=!1}=e,{title:d=null}=e,{inverse:b=!1}=e,P="";return yn(()=>{const u=Ie(l);if(!u)return;const E=te(u),N=hi(E||l,{symbol:g,title:d,styles:e.style?r:{},classes:[...Object.keys(i).map(F=>i[F]?F:null).filter(F=>!!F),(e.class||"").split(" ")],transform:{...typeof f=="string"?di.transform(f):f},mask:Ie(c)});if(!N){console.warn("Could not find one or more icon(s)",E||l,c);return}n(0,P=N.html)}),t.$$set=u=>{n(19,e=ue(ue({},e),he(u))),"border"in u&&n(1,o=u.border),"fixedWidth"in u&&n(2,a=u.fixedWidth),"flip"in u&&n(3,s=u.flip),"icon"in u&&n(4,l=u.icon),"mask"in u&&n(5,c=u.mask),"listItem"in u&&n(6,p=u.listItem),"pull"in u&&n(7,m=u.pull),"pulse"in u&&n(8,C=u.pulse),"rotation"in u&&n(9,z=u.rotation),"swapOpacity"in u&&n(10,w=u.swapOpacity),"size"in u&&n(11,v=u.size),"spin"in u&&n(12,k=u.spin),"transform"in u&&n(13,f=u.transform),"symbol"in u&&n(14,g=u.symbol),"title"in u&&n(15,d=u.title),"inverse"in u&&n(16,b=u.inverse)},t.$$.update=()=>{t.$$.dirty&73678&&(i={"fa-spin":k,"fa-pulse":C,"fa-fw":a,"fa-border":o,"fa-li":p,"fa-inverse":b,"fa-flip-horizontal":["both","horizontal"].includes(s),"fa-flip-vertical":["both","vertical"].includes(s),[`fa-${v}`]:v!==null,[`fa-rotate-${z}`]:z!==null,[`fa-pull-${m}`]:m!==null,"fa-swap-opacity":w}),r=(e.style||"").split(";").filter(u=>!!u).map(u=>u.split(":").map(E=>E.trim())).reduce((u,E)=>{const[N,F]=E;return u[N]=F,u},{})},e=he(e),[P,o,a,s,l,c,p,m,C,z,w,v,k,f,g,d,b]}class le extends tt{constructor(e){super(),K(this,e,pi,mi,J,{border:1,fixedWidth:2,flip:3,icon:4,mask:5,listItem:6,pull:7,pulse:8,rotation:9,swapOpacity:10,size:11,spin:12,transform:13,symbol:14,title:15,inverse:16})}}/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var gi={prefix:"fas",iconName:"arrow-rotate-left",icon:[512,512,[8634,"arrow-left-rotate","arrow-rotate-back","arrow-rotate-backward","undo"],"f0e2","M480 256c0 123.4-100.5 223.9-223.9 223.9c-48.86 0-95.19-15.58-134.2-44.86c-14.14-10.59-17-30.66-6.391-44.81c10.61-14.09 30.69-16.97 44.8-6.375c27.84 20.91 61 31.94 95.89 31.94C344.3 415.8 416 344.1 416 256s-71.67-159.8-159.8-159.8C205.9 96.22 158.6 120.3 128.6 160H192c17.67 0 32 14.31 32 32S209.7 224 192 224H48c-17.67 0-32-14.31-32-32V48c0-17.69 14.33-32 32-32s32 14.31 32 32v70.23C122.1 64.58 186.1 32.11 256.1 32.11C379.5 32.11 480 132.6 480 256z"]},bi=gi,vi={prefix:"fas",iconName:"calculator",icon:[384,512,[128425],"f1ec","M336 0h-288C22.38 0 0 22.38 0 48v416C0 489.6 22.38 512 48 512h288c25.62 0 48-22.38 48-48v-416C384 22.38 361.6 0 336 0zM64 208C64 199.2 71.2 192 80 192h32C120.8 192 128 199.2 128 208v32C128 248.8 120.8 256 112 256h-32C71.2 256 64 248.8 64 240V208zM64 304C64 295.2 71.2 288 80 288h32C120.8 288 128 295.2 128 304v32C128 344.8 120.8 352 112 352h-32C71.2 352 64 344.8 64 336V304zM224 432c0 8.801-7.199 16-16 16h-128C71.2 448 64 440.8 64 432v-32C64 391.2 71.2 384 80 384h128c8.801 0 16 7.199 16 16V432zM224 336c0 8.801-7.199 16-16 16h-32C167.2 352 160 344.8 160 336v-32C160 295.2 167.2 288 176 288h32C216.8 288 224 295.2 224 304V336zM224 240C224 248.8 216.8 256 208 256h-32C167.2 256 160 248.8 160 240v-32C160 199.2 167.2 192 176 192h32C216.8 192 224 199.2 224 208V240zM320 432c0 8.801-7.199 16-16 16h-32c-8.799 0-16-7.199-16-16v-32c0-8.801 7.201-16 16-16h32c8.801 0 16 7.199 16 16V432zM320 336c0 8.801-7.199 16-16 16h-32c-8.799 0-16-7.199-16-16v-32C256 295.2 263.2 288 272 288h32C312.8 288 320 295.2 320 304V336zM320 240C320 248.8 312.8 256 304 256h-32C263.2 256 256 248.8 256 240v-32C256 199.2 263.2 192 272 192h32C312.8 192 320 199.2 320 208V240zM320 144C320 152.8 312.8 160 304 160h-224C71.2 160 64 152.8 64 144v-64C64 71.2 71.2 64 80 64h224C312.8 64 320 71.2 320 80V144z"]},yi={prefix:"fas",iconName:"camera-retro",icon:[512,512,[128247],"f083","M64 64V48C64 39.16 71.16 32 80 32H144C152.8 32 160 39.16 160 48V64H192L242.5 38.76C251.4 34.31 261.2 32 271.1 32H448C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V128C0 92.65 28.65 64 64 64zM220.6 121.2C211.7 125.7 201.9 128 192 128H64V192H178.8C200.8 176.9 227.3 168 256 168C284.7 168 311.2 176.9 333.2 192H448V96H271.1L220.6 121.2zM256 216C207.4 216 168 255.4 168 304C168 352.6 207.4 392 256 392C304.6 392 344 352.6 344 304C344 255.4 304.6 216 256 216z"]},wi={prefix:"fas",iconName:"car",icon:[512,512,[128664,"automobile"],"f1b9","M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"]},ki={prefix:"fas",iconName:"chess-board",icon:[448,512,[],"f43c","M192 224H128v64h64V224zM384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM384 160h-64v64h64v64h-64v64h64v64h-64v-64h-64v64H192v-64H128v64H64v-64h64V288H64V224h64V160H64V96h64v64h64V96h64v64h64V96h64V160zM192 288v64h64V288H192zM256 224V160H192v64H256zM256 288h64V224h-64V288z"]},xi={prefix:"fas",iconName:"cubes",icon:[576,512,[],"f1b3","M172.1 40.16L268.1 3.76C280.9-1.089 295.1-1.089 307.9 3.76L403.9 40.16C425.6 48.41 440 69.25 440 92.52V204.7C441.3 205.1 442.6 205.5 443.9 205.1L539.9 242.4C561.6 250.6 576 271.5 576 294.7V413.9C576 436.1 562.9 456.2 542.5 465.1L446.5 507.3C432.2 513.7 415.8 513.7 401.5 507.3L288 457.5L174.5 507.3C160.2 513.7 143.8 513.7 129.5 507.3L33.46 465.1C13.13 456.2 0 436.1 0 413.9V294.7C0 271.5 14.39 250.6 36.15 242.4L132.1 205.1C133.4 205.5 134.7 205.1 136 204.7V92.52C136 69.25 150.4 48.41 172.1 40.16V40.16zM290.8 48.64C289 47.95 286.1 47.95 285.2 48.64L206.8 78.35L287.1 109.5L369.2 78.35L290.8 48.64zM392 210.6V121L309.6 152.6V241.8L392 210.6zM154.8 250.9C153 250.2 150.1 250.2 149.2 250.9L70.81 280.6L152 311.7L233.2 280.6L154.8 250.9zM173.6 455.3L256 419.1V323.2L173.6 354.8V455.3zM342.8 280.6L424 311.7L505.2 280.6L426.8 250.9C425 250.2 422.1 250.2 421.2 250.9L342.8 280.6zM528 413.9V323.2L445.6 354.8V455.3L523.2 421.2C526.1 419.9 528 417.1 528 413.9V413.9z"]},Ci={prefix:"fas",iconName:"diagram-project",icon:[576,512,["project-diagram"],"f542","M0 80C0 53.49 21.49 32 48 32H144C170.5 32 192 53.49 192 80V96H384V80C384 53.49 405.5 32 432 32H528C554.5 32 576 53.49 576 80V176C576 202.5 554.5 224 528 224H432C405.5 224 384 202.5 384 176V160H192V176C192 177.7 191.9 179.4 191.7 180.1L272 288H368C394.5 288 416 309.5 416 336V432C416 458.5 394.5 480 368 480H272C245.5 480 224 458.5 224 432V336C224 334.3 224.1 332.6 224.3 331L144 224H48C21.49 224 0 202.5 0 176V80z"]},_i=Ci,Mi={prefix:"fas",iconName:"fire",icon:[448,512,[128293],"f06d","M323.5 51.25C302.8 70.5 284 90.75 267.4 111.1C240.1 73.62 206.2 35.5 168 0C69.75 91.12 0 210 0 281.6C0 408.9 100.2 512 224 512s224-103.1 224-230.4C448 228.4 396 118.5 323.5 51.25zM304.1 391.9C282.4 407 255.8 416 226.9 416c-72.13 0-130.9-47.73-130.9-125.2c0-38.63 24.24-72.64 72.74-130.8c7 8 98.88 125.4 98.88 125.4l58.63-66.88c4.125 6.75 7.867 13.52 11.24 19.9C364.9 290.6 353.4 357.4 304.1 391.9z"]},Ii={prefix:"fas",iconName:"microchip",icon:[512,512,[],"f2db","M160 352h192V160H160V352zM448 176h48C504.8 176 512 168.8 512 160s-7.162-16-16-16H448V128c0-35.35-28.65-64-64-64h-16V16C368 7.164 360.8 0 352 0c-8.836 0-16 7.164-16 16V64h-64V16C272 7.164 264.8 0 256 0C247.2 0 240 7.164 240 16V64h-64V16C176 7.164 168.8 0 160 0C151.2 0 144 7.164 144 16V64H128C92.65 64 64 92.65 64 128v16H16C7.164 144 0 151.2 0 160s7.164 16 16 16H64v64H16C7.164 240 0 247.2 0 256s7.164 16 16 16H64v64H16C7.164 336 0 343.2 0 352s7.164 16 16 16H64V384c0 35.35 28.65 64 64 64h16v48C144 504.8 151.2 512 160 512c8.838 0 16-7.164 16-16V448h64v48c0 8.836 7.164 16 16 16c8.838 0 16-7.164 16-16V448h64v48c0 8.836 7.164 16 16 16c8.838 0 16-7.164 16-16V448H384c35.35 0 64-28.65 64-64v-16h48c8.838 0 16-7.164 16-16s-7.162-16-16-16H448v-64h48C504.8 272 512 264.8 512 256s-7.162-16-16-16H448V176zM384 368c0 8.836-7.162 16-16 16h-224C135.2 384 128 376.8 128 368v-224C128 135.2 135.2 128 144 128h224C376.8 128 384 135.2 384 144V368z"]},zi={prefix:"fas",iconName:"person-hiking",icon:[384,512,["hiking"],"f6ec","M240 96c26.5 0 48-21.5 48-48S266.5 0 240 0C213.5 0 192 21.5 192 48S213.5 96 240 96zM80.01 287.1c7.31 0 13.97-4.762 15.87-11.86L137 117c.3468-1.291 .5125-2.588 .5125-3.866c0-7.011-4.986-13.44-12.39-15.13C118.4 96.38 111.7 95.6 105.1 95.6c-36.65 0-70 23.84-79.32 59.53L.5119 253.3C.1636 254.6-.0025 255.9-.0025 257.2c0 7.003 4.961 13.42 12.36 15.11L76.01 287.5C77.35 287.8 78.69 287.1 80.01 287.1zM368 160h-15.1c-8.875 0-15.1 7.125-15.1 16V192h-34.75l-46.75-46.75C243.4 134.1 228.6 128 212.9 128C185.9 128 162.5 146.3 155.9 172.5L129 280.3C128.4 282.8 128 285.5 128 288.1c0 8.325 3.265 16.44 9.354 22.53l86.62 86.63V480c0 17.62 14.37 32 31.1 32s32-14.38 32-32v-82.75c0-17.12-6.625-33.13-18.75-45.25l-46.87-46.88c.25-.5 .5-.875 .625-1.375l19.1-79.5l22.37 22.38C271.4 252.6 279.5 256 288 256h47.1v240c0 8.875 7.125 16 15.1 16h15.1C376.9 512 384 504.9 384 496v-320C384 167.1 376.9 160 368 160zM81.01 472.3c-.672 2.63-.993 5.267-.993 7.86c0 14.29 9.749 27.29 24.24 30.89C106.9 511.8 109.5 512 112 512c14.37 0 27.37-9.75 30.1-24.25l25.25-101l-52.75-52.75L81.01 472.3z"]},Li=zi,Pi={prefix:"fas",iconName:"tree",icon:[448,512,[127794],"f1bb","M413.8 447.1L256 448l0 31.99C256 497.7 241.8 512 224.1 512c-17.67 0-32.1-14.32-32.1-31.99l0-31.99l-158.9-.0099c-28.5 0-43.69-34.49-24.69-56.4l68.98-79.59H62.22c-25.41 0-39.15-29.8-22.67-49.13l60.41-70.85H89.21c-21.28 0-32.87-22.5-19.28-37.31l134.8-146.5c10.4-11.3 28.22-11.3 38.62-.0033l134.9 146.5c13.62 14.81 2.001 37.31-19.28 37.31h-10.77l60.35 70.86c16.46 19.34 2.716 49.12-22.68 49.12h-15.2l68.98 79.59C458.7 413.7 443.1 447.1 413.8 447.1z"]},Si={prefix:"fas",iconName:"wave-square",icon:[640,512,[],"f83e","M476 480h-152c-19.88 0-36-16.12-36-36v-348H192v156c0 19.88-16.12 36-36 36H31.1C14.33 288 0 273.7 0 256s14.33-31.1 31.1-31.1H128v-156c0-19.88 16.12-36 36-36h152c19.88 0 36 16.12 36 36v348h96v-156c0-19.88 16.12-36 36-36h124C625.7 224 640 238.3 640 256s-14.33 32-31.1 32H512v156C512 463.9 495.9 480 476 480z"]},ji={prefix:"fas",iconName:"wind",icon:[512,512,[],"f72e","M32 192h320c52.94 0 96-43.06 96-96s-43.06-96-96-96h-32c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c17.66 0 32 14.34 32 32s-14.34 32-32 32H32C14.31 128 0 142.3 0 160S14.31 192 32 192zM160 320H32c-17.69 0-32 14.31-32 32s14.31 32 32 32h128c17.66 0 32 14.34 32 32s-14.34 32-32 32H128c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c52.94 0 96-43.06 96-96S212.9 320 160 320zM416 224H32C14.31 224 0 238.3 0 256s14.31 32 32 32h384c17.66 0 32 14.34 32 32s-14.34 32-32 32h-32c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c52.94 0 96-43.06 96-96S468.9 224 416 224z"]},B=(t=>(t.Main="main",t.Project="project",t.Photos="photos",t))(B||{});const pt=[];function ce(t,e=A){let n;const i=new Set;function r(s){if(J(t,s)&&(t=s,n)){const l=!pt.length;for(const c of i)c[1](),pt.push(c,t);if(l){for(let c=0;c<pt.length;c+=2)pt[c][0](pt[c+1]);pt.length=0}}}function o(s){r(s(t))}function a(s,l=A){const c=[s,l];return i.add(c),i.size===1&&(n=e(r)||A),s(t),()=>{i.delete(c),i.size===0&&(n(),n=null)}}return{set:r,update:o,subscribe:a}}function Ai(){const{subscribe:t,set:e}=ce(null);return{subscribe:t,setProject(n){e(n)}}}const ee=Ai();function Vi(){const{subscribe:t,set:e}=ce(B.Photos);return{subscribe:t,setView(n){e(n)}}}const It=Vi();function Ei(t){var f,g,d;let e,n,i,r,o,a,s=((f=t[0])==null?void 0:f.title)+"",l,c,p,m,C=((g=t[0])==null?void 0:g.brief)+"",z,w,v,k;return r=new le({props:{icon:(d=t[0])==null?void 0:d.icon}}),{c(){e=x("li"),n=x("button"),i=x("div"),Z(r.$$.fragment),o=H(),a=x("span"),l=ht(s),c=H(),p=x("div"),m=x("span"),z=ht(C),_(a,"class","title"),_(i,"class","title-section"),_(m,"class","brief")},m(b,P){O(b,e,P),y(e,n),y(n,i),Y(r,i,null),y(i,o),y(i,a),y(a,l),y(n,c),y(n,p),y(p,m),y(m,z),w=!0,v||(k=bt(n,"click",t[1]),v=!0)},p(b,[P]){var E,N,F;const u={};P&1&&(u.icon=(E=b[0])==null?void 0:E.icon),r.$set(u),(!w||P&1)&&s!==(s=((N=b[0])==null?void 0:N.title)+"")&&Ht(l,s),(!w||P&1)&&C!==(C=((F=b[0])==null?void 0:F.brief)+"")&&Ht(z,C)},i(b){w||(I(r.$$.fragment,b),w=!0)},o(b){S(r.$$.fragment,b),w=!1},d(b){b&&T(e),X(r),v=!1,k()}}}function Hi(t,e,n){let{project:i}=e;const r=()=>{ee.setProject(i),It.setView(B.Project)};return t.$$set=o=>{"project"in o&&n(0,i=o.project)},[i,r]}class Ti extends tt{constructor(e){super(),K(this,e,Hi,Ei,J,{project:0})}}function fe(t,{root:e=null,rootMargin:n="0px 0px 0px 0px",threshold:i=0}={}){if(window&&"IntersectionObserver"in window){const r=new IntersectionObserver(o=>{o.forEach(a=>{if(a.isIntersecting){const s=a.target;s.dataset.src&&(s.src=s.dataset.src),s.dataset.srcset&&(s.srcset=s.dataset.srcset),r.unobserve(s)}})},{root:e,rootMargin:n,threshold:i});return r.observe(t),{destroy(){r&&r.unobserve(t)}}}}function Oi(t){var F,et,zt;let e,n,i,r,o,a=((F=t[0])==null?void 0:F.title)+"",s,l,c,p,m,C=((et=t[0])==null?void 0:et.description)+"",z,w,v,k,f,g,d,b,P,u,E,N;return c=new le({props:{icon:(zt=t[0])==null?void 0:zt.icon}}),{c(){var V,q;e=x("div"),n=x("button"),n.textContent="\u21D0",i=H(),r=x("div"),o=x("h3"),s=ht(a),l=H(),Z(c.$$.fragment),p=H(),m=x("p"),z=ht(C),w=H(),v=x("a"),k=ht("(Link)"),g=H(),d=x("div"),b=x("img"),_(n,"class","back-button"),_(r,"class","focused-title-section"),_(v,"href",f=(V=t[0])==null?void 0:V.link),_(v,"rel","noreferrer"),_(v,"target","_blank"),Et(b.src,P=(q=t[0])==null?void 0:q.image)||_(b,"src",P),_(b,"alt","The project"),_(d,"class","project-image-container"),_(e,"class","details")},m(V,q){O(V,e,q),y(e,n),y(e,i),y(e,r),y(r,o),y(o,s),y(r,l),Y(c,r,null),y(e,p),y(e,m),y(m,z),y(e,w),y(e,v),y(v,k),y(e,g),y(e,d),y(d,b),u=!0,E||(N=[bt(n,"click",t[1]),ne(fe.call(null,b))],E=!0)},p(V,[q]){var U,yt,h,M,j;(!u||q&1)&&a!==(a=((U=V[0])==null?void 0:U.title)+"")&&Ht(s,a);const vt={};q&1&&(vt.icon=(yt=V[0])==null?void 0:yt.icon),c.$set(vt),(!u||q&1)&&C!==(C=((h=V[0])==null?void 0:h.description)+"")&&Ht(z,C),(!u||q&1&&f!==(f=(M=V[0])==null?void 0:M.link))&&_(v,"href",f),(!u||q&1&&!Et(b.src,P=(j=V[0])==null?void 0:j.image))&&_(b,"src",P)},i(V){u||(I(c.$$.fragment,V),u=!0)},o(V){S(c.$$.fragment,V),u=!1},d(V){V&&T(e),X(c),E=!1,ft(N)}}}function Ni(t,e,n){let i;Dt(t,ee,o=>n(0,i=o));function r(){ee.setProject(null),It.setView(B.Main)}return[i,r]}class Fi extends tt{constructor(e){super(),K(this,e,Ni,Oi,J,{})}}const fn=t=>{if(!t)return null;const e=t.index.toString().padStart(2,"0"),n="images/photo_portfolio/";return{thumbnail:`${n}/thumbnail/Portfolio_Thumbnail-${e}.jpg`,full:`${n}/full_size/Portfolio-${e}.jpg`}};function Ri(){const{subscribe:t,set:e}=ce(null);return{subscribe:t,setSelectedPhoto(n){e(n)}}}const Rt=Ri();function Di(t){let e,n,i,r,o,a,s;return{c(){e=x("li"),n=x("button"),i=x("img"),Et(i.src,r=t[2].thumbnail)||_(i,"src",r),_(i,"alt",o=t[0].description)},m(l,c){O(l,e,c),y(e,n),y(n,i),a||(s=[ne(fe.call(null,i)),bt(n,"click",t[1])],a=!0)},p(l,[c]){c&1&&o!==(o=l[0].description)&&_(i,"alt",o)},i:A,o:A,d(l){l&&T(e),a=!1,ft(s)}}}function Wi(t,e,n){let{photo:i}=e;const r=()=>{Rt.setSelectedPhoto(i)},o=fn(i);return t.$$set=a=>{"photo"in a&&n(0,i=a.photo)},[i,r,o]}class Bi extends tt{constructor(e){super(),K(this,e,Wi,Di,J,{photo:0})}}function Ui(t){let e,n,i,r,o,a,s,l,c;return{c(){e=x("div"),n=x("div"),i=x("button"),i.textContent="\u21D0 ",r=H(),o=x("img"),_(i,"class","back-button"),Et(o.src,a=t[1].full)||_(o,"src",a),_(o,"alt",s=t[0].description),_(n,"class","photo-rows"),_(e,"class","full-photo-container")},m(p,m){O(p,e,m),y(e,n),y(n,i),y(n,r),y(n,o),l||(c=[bt(i,"click",t[2]),ne(fe.call(null,o))],l=!0)},p(p,[m]){m&1&&s!==(s=p[0].description)&&_(o,"alt",s)},i:A,o:A,d(p){p&&T(e),l=!1,ft(c)}}}function $i(t,e,n){let i;Dt(t,Rt,a=>n(0,i=a));const r=fn(i);return[i,r,()=>{Rt.setSelectedPhoto(null)}]}class qi extends tt{constructor(e){super(),K(this,e,$i,Ui,J,{})}}function ze(t,e,n){const i=t.slice();return i[3]=e[n],i}function Le(t){let e,n,i=t[1],r=[];for(let a=0;a<i.length;a+=1)r[a]=Pe(ze(t,i,a));const o=a=>S(r[a],1,1,()=>{r[a]=null});return{c(){e=x("ul");for(let a=0;a<r.length;a+=1)r[a].c();_(e,"class","photo-list")},m(a,s){O(a,e,s);for(let l=0;l<r.length;l+=1)r[l].m(e,null);n=!0},p(a,s){if(s&2){i=a[1];let l;for(l=0;l<i.length;l+=1){const c=ze(a,i,l);r[l]?(r[l].p(c,s),I(r[l],1)):(r[l]=Pe(c),r[l].c(),I(r[l],1),r[l].m(e,null))}for(lt(),l=i.length;l<r.length;l+=1)o(l);ct()}},i(a){if(!n){for(let s=0;s<i.length;s+=1)I(r[s]);n=!0}},o(a){r=r.filter(Boolean);for(let s=0;s<r.length;s+=1)S(r[s]);n=!1},d(a){a&&T(e),Re(r,a)}}}function Pe(t){let e,n;return e=new Bi({props:{photo:t[3]}}),{c(){Z(e.$$.fragment)},m(i,r){Y(e,i,r),n=!0},p:A,i(i){n||(I(e.$$.fragment,i),n=!0)},o(i){S(e.$$.fragment,i),n=!1},d(i){X(e,i)}}}function Se(t){let e,n;return e=new qi({}),{c(){Z(e.$$.fragment)},m(i,r){Y(e,i,r),n=!0},i(i){n||(I(e.$$.fragment,i),n=!0)},o(i){S(e.$$.fragment,i),n=!1},d(i){X(e,i)}}}function Gi(t){let e,n,i,r,o,a,s,l,c=t[0]===null&&Le(t),p=t[0]!==null&&Se();return{c(){e=x("div"),n=x("button"),n.textContent="\u21D0 ",i=H(),r=x("div"),c&&c.c(),o=H(),p&&p.c(),_(n,"class","back-button"),_(r,"class","photo-portfolio-container")},m(m,C){O(m,e,C),y(e,n),y(e,i),y(e,r),c&&c.m(r,null),y(r,o),p&&p.m(r,null),a=!0,s||(l=bt(n,"click",t[2]),s=!0)},p(m,[C]){m[0]===null?c?(c.p(m,C),C&1&&I(c,1)):(c=Le(m),c.c(),I(c,1),c.m(r,o)):c&&(lt(),S(c,1,1,()=>{c=null}),ct()),m[0]!==null?p?C&1&&I(p,1):(p=Se(),p.c(),I(p,1),p.m(r,null)):p&&(lt(),S(p,1,1,()=>{p=null}),ct())},i(m){a||(I(c),I(p),a=!0)},o(m){S(c),S(p),a=!1},d(m){m&&T(e),c&&c.d(),p&&p.d(),s=!1,l()}}}function Yi(t,e,n){let i;Dt(t,Rt,a=>n(0,i=a));const r=Array(40).fill(null).map((a,s)=>({index:s+1,title:`Photo ${s}`,description:"TBD"}));return[i,r,()=>{It.setView(B.Main)}]}class Xi extends tt{constructor(e){super(),K(this,e,Yi,Gi,J,{})}}function Zi(t){let e;return{c(){e=x("div"),e.innerHTML=`<ul class="soc"><li><a class="soc-linkedin" target="_blank" href="http://linkedin.com/in/kyle-hovey" rel="noreferrer"><span>My Linkedin</span></a></li> 
    <li><a class="soc-github soc-icon-last" target="_blank" href="http://github.com/kylehovey" rel="noreferrer"><span>My GitHub</span></a></li></ul> 
  <div class="links"><a href="https://github.com/kylehovey/resume/raw/master/kyle_hovey_resume.pdf">Resume</a> 
    <span class="divider">|</span> 
    <a href="blog">Blog</a> 
    <span class="divider">|</span> 
    <a href="MATH_5620">Math 5620</a> 
    <span class="divider">|</span> 
    <a target="_blank" rel="me" href="https://mathstodon.xyz/@speleo">Mathstodon</a> 
    <span class="divider">|</span> 
    <a href="https://kylehovey-resolutions.vercel.app" target="_blank" rel="noreferrer">Resolutions</a></div>`,_(e,"class","bottom-bar")},m(n,i){O(n,e,i)},p:A,i:A,o:A,d(n){n&&T(e)}}}class Ji extends tt{constructor(e){super(),K(this,e,null,Zi,J,{})}}function Qi(t){let e;return{c(){e=x("canvas"),_(e,"id","boids-canvas"),_(e,"class","full-canvas")},m(n,i){O(n,e,i)},p:A,i:A,o:A,d(n){n&&T(e)}}}function Ki(t){const e={r:63,g:66,b:65},n={r:150,g:200,b:255};return wn(()=>{const i=document.getElementById("boids-canvas"),r=i.getContext("2d"),o=()=>{i.width=window.innerWidth,i.height=window.innerHeight};window.addEventListener("resize",o),o();const a=h=>{if(r===null)return;const[M,j]=h.pos,[R,nt]=h.dS,ot=Math.atan2(nt,R);r.save(),r.translate(M,j),r.rotate(ot),r.beginPath(),r.moveTo(10,0),r.lineTo(-10,5),r.lineTo(-10,-5),r.closePath(),r.fillStyle=zt(et(h)),r.fill(),r.restore()},s=1,l=200,c=.5,p=2,m=.4,C=.001,z=.95,w=1e-6,v=.001,k=.01,f=([h,M],[j,R])=>[h+j,M+R],g=([h,M],[j,R])=>[h-j,M-R],d=(h,[M,j])=>[h*M,h*j],b=([h,M])=>Math.sqrt(h*h+M*M),P=(h,M)=>b(g(h,M)),u=h=>{const M=b(h);return M!==0?d(1/M,h):h},E=h=>1/(1+Math.exp(40*(h-.5)**2)),N=(h,M,j)=>(1-h)*M+h*j,F=(h,{r:M,g:j,b:R},{r:nt,g:ot,b:W})=>({r:N(h,M,nt),g:N(h,j,ot),b:N(h,R,W)}),et=h=>F(E(h.activation),e,n),zt=({r:h,g:M,b:j})=>`rgb(${h},${M},${j})`,V=(h,M)=>{const j=g(h,M),R=b(j);return d(Math.min(C,R),u(j))},q=(h,M)=>{let j=0,R=[0,0],nt=[0,0],ot=[0,0],W=0;for(const st of M){const it=P(st.pos,h.pos);it>0&&it<=l&&(j+=1,R=f(R,d(1/it,u(st.dS))),nt=f(nt,st.pos),ot=d(1/it,u(g(h.pos,st.pos))),W+=E(st.activation)/it)}let mt=[0,0],Lt=[0,0],ut=[0,0];if(j>0){const st=d(s,u(ot));mt=d(c,V(st,h.dS));const it=d(s,u(R));Lt=d(p,V(it,h.dS));const un=d(s,u(g(nt,h.pos)));ut=d(m,V(un,h.dS))}return[mt,Lt,ut,W]},vt=(h,M)=>{const[j,R,nt,ot]=q(h,M),W=f(h.pos,h.dS),mt=f(h.dS,h.d2S),Lt=f(f(j,f(R,nt)),h.d2S);let ut=h.activation*z;ut<=w&&(ut=0,(ot>=k||Math.random()>1-v)&&(ut=1));const it=b(mt)>s?d(s,u(mt)):mt;return W[0]>i.width&&(W[0]=0),W[0]<0&&(W[0]=i.width),W[1]>i.height&&(W[1]=0),W[1]<0&&(W[1]=i.height),{pos:W,dS:it,d2S:Lt,activation:ut}},U=[];for(let h=0;h<200;h++){const M=Math.random()*2*Math.PI;U.push({pos:[Math.random()*i.width,Math.random()*i.height],dS:[Math.cos(M),Math.sin(M)],d2S:[0,0],activation:0})}for(let h=0;h<100;h++)for(let M=0;M<U.length;M++)U[M]=vt(U[M],U);const yt=()=>{requestAnimationFrame(yt),r.clearRect(0,0,i.width,i.height);for(let h=0;h<U.length;h++)a(U[h]),U[h]=vt(U[h],U)};window.innerWidth>600&&yt()}),[]}class tr extends tt{constructor(e){super(),K(this,e,Ki,Qi,J,{})}}function er(t){let e;return{c(){e=x("div"),e.innerHTML=`<h2>Project Portfolio</h2> 
  <p>Hi! My name is Kyle. I grew up in a small community in the Sierra Nevada
    mountains. In 2019, I graduated Utah State University with a BS in
    Computational Mathematics. My passions include mathematics, electrical
    engineering, programming, music, hiking, climbing, and philosophy. Here you
    can see some highlights from my past/current projects. Check out my blog for
    posts on math and programming.</p>`},m(n,i){O(n,e,i)},p:A,i:A,o:A,d(n){n&&T(e)}}}class nr extends tt{constructor(e){super(),K(this,e,null,er,J,{})}}const ir="images/projects/cal_sim.png",rr="images/projects/myst_net.png",ar="images/projects/fireplace.png",or="images/projects/euler_golf.png",sr="images/projects/shader_toy.png",lr="images/projects/vector_wind.png",cr="images/projects/fiery_furnace.png",fr="images/projects/8_bit_spaghetti.png",ur="images/projects/acoustic-forest.png",dr="images/projects/station_analysis.png",hr="images/projects/villein_translator.png",mr="images/projects/automata_exploration.png",je=[{title:"Automata Browser",icon:ki,image:mr,year:"2020",brief:"Global map of all life-like Cellular Automata",description:"I was researching emergent complexity in cellular automata and found a classification scheme for all quarter million life-like automata. The embedding compresses all of the rules into a nebula of points where distance between any two points provides a decent approximation of how simililarly the rules behave given a random initial board state. I built this browser with React so that I could better explore the dataset.",link:"/automata-nebula-explorer/index.html"},{title:"Fiery Furnace",icon:Li,image:cr,year:"2020",brief:"Interactive map of the Fiery Furnace in Arches National Park",description:"Pre-pandemic, my partner Hannah and I took a trip down to Arches National Park in Utah. The highlight was exploring the Fiery Furnace: a labrynth of ancient sandstone with no main trail, only meandering boulder routes and washes. I exported the route data (recorded with my watch) and interpolated photo time-stamps with location time-stamps to create an interactive map of our path with pictures along the way using Mapbox.",link:"/FieryFurnace/index.html"},{title:"Shader Toy",icon:xi,image:sr,year:"2020",brief:"Various shaders written by me",description:"I have been having a lot of fun learning how to write shaders. GLSL seemed like an intimidating topic at first, but once I realized it was essentially a very parrellized graphing calculator I started having a lot of fun and have been picking up some more techniques. As of writing this, I have worked with Ray Marching, Conformal Mapping, and 2D interference patterns.",link:"https://www.shadertoy.com/user/kylehovey"},{title:"Myst Net",icon:_i,image:rr,year:"2019",brief:"Neural Net for parsing D'ni numerals",description:"This was my last hackathon project. The D'ni numeral system is from the world of Myst, a game series that I am a very large fan of. The system is base-25, and has a rotational glyph system with a base-5 sub-pattern. I wanted to see if I could reproduce the MNIST convnet example using D'ni numbers. To generate training data, I wrote the segments in isolation and created a script to produce combinatorial sets of the individual segments I created. In the end, the network had over 99% validation accuracy and responded well to novel handwritten D'ni digits.",link:"https://github.com/kylehovey/myst-net"},{title:"Vector Wind",icon:ji,image:lr,year:"2017",brief:"Vector field visualization tool",description:"I was inspired by a Reddit post that used HTML Canvas to create a beautiful vector field visualization. Unfortunately, the poster did not release their source code, so I decided to make my own version. Vector fields are entered by typing in a Javascript function that takes two inputs (x,y) and returns a two-element array. The result is visualized by creating particles that get pushed around in the field like dust in the wind. The source code can be found on my GitHub.",link:"vectorwind/index.html"},{title:"CALSim",icon:Si,image:ir,year:"2016",brief:"In-browser WireWorld cellular automata simulator",description:"This is a WireWorld Cellular Automata simulator written in JavaScript. WireWorld is a CA capable of logic simulation. In fact, it is Turing Complete! This in-browser interpreter allows you to create structures, copy, paste, delete, and pause/play/step simulations.",link:"CALSim/index.html"},{title:"Villein Translator",icon:vi,image:hr,year:"2016",brief:"Translator for Obduction's Villein numbers",description:`In Cyan's new game Obduction there is an alien race called the Villeins. Part of the game is figuring out their numbering system, which uses a three-by-three grid on which five "digits" can lie. The whole system is base-4, and I had a bunch of fun figuring it out. I wanted to create a translator to quickly verify numbers, so I made one husing the html5 canvas.`,link:"Villein/index.html"},{title:"Euler Golf",icon:bi,image:or,year:"2015",brief:"Recursive puzzle involving complex numbers",description:"When I was attending Cuesta College in San Luis Obispo, I had an idea for a game over the Gaussian Integers (complex numbers of the form a+bi where a and b are both integers). I quickly found that the game was evil in difficulty, and as I shared it with friends I also learned that it was not just me. In light of this newfound challenge, I created an in-browser version as a Hackathon project. More info can be found on the site.",link:"EulerGolf/index.html"},{title:"Station Report",icon:wi,image:dr,year:"2018",brief:"Analysis to find the best spots for new EV chargers",description:"In Utah, where the air is bad enough each winter to take years off of the average person's life expectancy, electric vehicle adoption is one of the many solutions to our air quality. At the Utah Power and Electronics Lab (UPEL), I helped Rocky Mountain Power determine where to place/fund new electric vehicle charging stations in Utah. We worked with the Utah Department of Transportation to combine traffic information, as well as network analysis on the roadways to find the locations that would have the highest impact for EV adoption. This interactive report summarizes the findings of the analysis and visualizes what corridors are affected.",link:"stationReport/index.html"},{title:"8-Bit Spaghetti",icon:Ii,image:fr,year:"2012",brief:"8-Bit Computer designed from the ground up",description:'One fateful night of playing Minecraft with my best friend and I was convinced that I had to learn more about the inner workings of a CPU. We had just installed a mod that added basic digital components to the game, and my friend was constructing a processor. I knew nothing about architecture at that point, but I wanted to learn more. I began my journey reading "Digital Computer Electronics" by Malvino and started constructing the basic modular components of a computer. Eventually I had constructed a processor of my own design. The final product had EM interference which induced signalling issues, but the knowledge I gained benefits me to this day. I made a website and tutorial to aid anyone who wishes to acheive the same goal. I know of a few individuals so far that have used my instructions to build their own CPU.',link:"http://8-bitspaghetti.com"},{title:"Fireplace",icon:Mi,image:ar,year:"2016",brief:"Custom simulator written to mimic a campfire",description:"One of my favorite things to do in my free time is to program new patterns for the Adafruit Neopixel shield (a 5x8 RGB LED matrix for the Arduino). Since I camp a lot, I wanted to simulate fire on it with the hopes of creating a calming lantern for my tent. I decided to go with a slightly neural-network inspired approach. I created an ember class that has an internal fire value and a customized sigmoid curve function that will map the embers' fire values to something between 0 and 1. A stoke method adds a random integer in a specified range, and a diminish method multiplies the fire variable by a predetermined constant (0<k<1). I was so happy with the results that I wanted to create an in-browser version. This time, I used HTML5 and JS to create a grid of embers. I shaped the fire on the page by making the range for the random constant that each ember is stoked with depend on the ember's position on the page. Vertically there is a linear gradient, and horizontally there is a gaussian distribution determined by page width.",link:"FirePlace/index.html"},{title:"Acoustic Forest",icon:Pi,image:ur,year:"2016",brief:"2D Procedural landscape that is reactive to sound",description:`A natural continuation of my FirePlace project and an ode to John Muir and the mountains, I created Acoustic Forest: a music visualizer that uses procedurally generated terrain with unique elements augmented by distinct frequency bands in a song. I decided to go with Muse's "Exogenesis Symphony Part 3" which I claim absolutely no rights to and will take down at first request of any proprietor's request. I chose the song because it just so happened that Muse's masterful composition consists of a crescendo of increasing layers of elements, then a decrescendo back out. The structure of the song itself is a mountain in shape, which made it perfect to bring in elements slowly, then bring them out in reverse order. Currently this only runs in Chrome/Safari for desktop, so apologies to mobile users. Granted, this was created in Canvas without WebGL, so expect heavy processor usage.`,link:"AcousticForest/index.html"}];function Ae(t,e,n){const i=t.slice();return i[2]=e[n],i}function Ve(t){let e,n;return e=new nr({}),{c(){Z(e.$$.fragment)},m(i,r){Y(e,i,r),n=!0},i(i){n||(I(e.$$.fragment,i),n=!0)},o(i){S(e.$$.fragment,i),n=!1},d(i){X(e,i)}}}function Ee(t){let e,n,i,r,o,a,s,l,c,p,m,C,z,w=je,v=[];for(let f=0;f<w.length;f+=1)v[f]=He(Ae(t,w,f));const k=f=>S(v[f],1,1,()=>{v[f]=null});return l=new le({props:{icon:yi}}),{c(){e=x("ul");for(let f=0;f<v.length;f+=1)v[f].c();n=H(),i=x("hr"),r=H(),o=x("div"),a=x("button"),s=x("div"),Z(l.$$.fragment),c=H(),p=x("span"),p.textContent="Photography Portfolio",_(e,"class","projects-list"),_(i,"class","divider"),_(p,"class","title"),_(s,"class","title-section"),_(a,"class","photography-portfolio-link"),_(o,"class","photography-button-container")},m(f,g){O(f,e,g);for(let d=0;d<v.length;d+=1)v[d].m(e,null);O(f,n,g),O(f,i,g),O(f,r,g),O(f,o,g),y(o,a),y(a,s),Y(l,s,null),y(s,c),y(s,p),m=!0,C||(z=bt(a,"click",t[1]),C=!0)},p(f,g){if(g&0){w=je;let d;for(d=0;d<w.length;d+=1){const b=Ae(f,w,d);v[d]?(v[d].p(b,g),I(v[d],1)):(v[d]=He(b),v[d].c(),I(v[d],1),v[d].m(e,null))}for(lt(),d=w.length;d<v.length;d+=1)k(d);ct()}},i(f){if(!m){for(let g=0;g<w.length;g+=1)I(v[g]);I(l.$$.fragment,f),m=!0}},o(f){v=v.filter(Boolean);for(let g=0;g<v.length;g+=1)S(v[g]);S(l.$$.fragment,f),m=!1},d(f){f&&T(e),Re(v,f),f&&T(n),f&&T(i),f&&T(r),f&&T(o),X(l),C=!1,z()}}}function He(t){let e,n;return e=new Ti({props:{project:t[2]}}),{c(){Z(e.$$.fragment)},m(i,r){Y(e,i,r),n=!0},p:A,i(i){n||(I(e.$$.fragment,i),n=!0)},o(i){S(e.$$.fragment,i),n=!1},d(i){X(e,i)}}}function Te(t){let e,n;return e=new Fi({}),{c(){Z(e.$$.fragment)},m(i,r){Y(e,i,r),n=!0},i(i){n||(I(e.$$.fragment,i),n=!0)},o(i){S(e.$$.fragment,i),n=!1},d(i){X(e,i)}}}function Oe(t){let e,n;return e=new Xi({}),{c(){Z(e.$$.fragment)},m(i,r){Y(e,i,r),n=!0},i(i){n||(I(e.$$.fragment,i),n=!0)},o(i){S(e.$$.fragment,i),n=!1},d(i){X(e,i)}}}function pr(t){let e,n,i,r,o,a,s,l,c,p,m,C,z,w,v;i=new tr({});let k=t[0]===B.Main&&Ve(),f=t[0]===B.Main&&Ee(t),g=t[0]===B.Project&&Te(),d=t[0]===B.Photos&&Oe();return w=new Ji({}),{c(){e=x("main"),n=x("div"),Z(i.$$.fragment),r=H(),o=x("div"),a=x("div"),s=x("div"),l=x("div"),c=H(),k&&k.c(),p=H(),f&&f.c(),m=H(),g&&g.c(),C=H(),d&&d.c(),z=H(),Z(w.$$.fragment),_(l,"class","logo"),_(s,"class","description"),_(a,"class","main"),_(o,"class","content"),_(n,"class","container")},m(b,P){O(b,e,P),y(e,n),Y(i,n,null),y(n,r),y(n,o),y(o,a),y(a,s),y(s,l),y(s,c),k&&k.m(s,null),y(a,p),f&&f.m(a,null),y(a,m),g&&g.m(a,null),y(a,C),d&&d.m(a,null),y(a,z),Y(w,a,null),v=!0},p(b,[P]){b[0]===B.Main?k?P&1&&I(k,1):(k=Ve(),k.c(),I(k,1),k.m(s,null)):k&&(lt(),S(k,1,1,()=>{k=null}),ct()),b[0]===B.Main?f?(f.p(b,P),P&1&&I(f,1)):(f=Ee(b),f.c(),I(f,1),f.m(a,m)):f&&(lt(),S(f,1,1,()=>{f=null}),ct()),b[0]===B.Project?g?P&1&&I(g,1):(g=Te(),g.c(),I(g,1),g.m(a,C)):g&&(lt(),S(g,1,1,()=>{g=null}),ct()),b[0]===B.Photos?d?P&1&&I(d,1):(d=Oe(),d.c(),I(d,1),d.m(a,z)):d&&(lt(),S(d,1,1,()=>{d=null}),ct())},i(b){v||(I(i.$$.fragment,b),I(k),I(f),I(g),I(d),I(w.$$.fragment,b),v=!0)},o(b){S(i.$$.fragment,b),S(k),S(f),S(g),S(d),S(w.$$.fragment,b),v=!1},d(b){b&&T(e),X(i),k&&k.d(),f&&f.d(),g&&g.d(),d&&d.d(),X(w)}}}function gr(t,e,n){let i;return Dt(t,It,o=>n(0,i=o)),[i,()=>{It.setView(B.Photos)}]}class br extends tt{constructor(e){super(),K(this,e,gr,pr,J,{})}}new br({target:document.getElementById("app")});
