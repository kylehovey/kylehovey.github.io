const hn=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}};hn();function A(){}function ue(t,e){for(const n in e)t[n]=e[n];return t}function Re(t){return t()}function de(){return Object.create(null)}function ut(t){t.forEach(Re)}function Fe(t){return typeof t=="function"}function J(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Pt;function Ht(t,e){return Pt||(Pt=document.createElement("a")),Pt.href=e,t===Pt.href}function mn(t){return Object.keys(t).length===0}function pn(t,...e){if(t==null)return A;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Dt(t,e,n){t.$$.on_destroy.push(pn(e,n))}function he(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ne(t){return t&&Fe(t.destroy)?t.destroy:A}function y(t,e){t.appendChild(e)}function O(t,e,n){t.insertBefore(e,n||null)}function T(t){t.parentNode.removeChild(t)}function De(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function C(t){return document.createElement(t)}function gn(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function rt(t){return document.createTextNode(t)}function V(){return rt(" ")}function vn(){return rt("")}function bt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function _(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function bn(t){return Array.from(t.childNodes)}function vt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}class yn{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=gn(n.nodeName):this.e=C(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)O(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(T)}}let Mt;function Ct(t){Mt=t}function We(){if(!Mt)throw new Error("Function called outside component initialization");return Mt}function wn(t){We().$$.before_update.push(t)}function kn(t){We().$$.on_mount.push(t)}const kt=[],me=[],Vt=[],pe=[],xn=Promise.resolve();let Yt=!1;function Cn(){Yt||(Yt=!0,xn.then(Be))}function Xt(t){Vt.push(t)}const Ut=new Set;let jt=0;function Be(){const t=Mt;do{for(;jt<kt.length;){const e=kt[jt];jt++,Ct(e),_n(e.$$)}for(Ct(null),kt.length=0,jt=0;me.length;)me.pop()();for(let e=0;e<Vt.length;e+=1){const n=Vt[e];Ut.has(n)||(Ut.add(n),n())}Vt.length=0}while(kt.length);for(;pe.length;)pe.pop()();Yt=!1,Ut.clear(),Ct(t)}function _n(t){if(t.fragment!==null){t.update(),ut(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Xt)}}const Et=new Set;let ht;function ct(){ht={r:0,c:[],p:ht}}function ft(){ht.r||ut(ht.c),ht=ht.p}function I(t,e){t&&t.i&&(Et.delete(t),t.i(e))}function P(t,e,n,i){if(t&&t.o){if(Et.has(t))return;Et.add(t),ht.c.push(()=>{Et.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function Z(t){t&&t.c()}function Y(t,e,n,i){const{fragment:r,on_mount:o,on_destroy:a,after_update:s}=t.$$;r&&r.m(e,n),i||Xt(()=>{const l=o.map(Re).filter(Fe);a?a.push(...l):ut(l),t.$$.on_mount=[]}),s.forEach(Xt)}function X(t,e){const n=t.$$;n.fragment!==null&&(ut(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Mn(t,e){t.$$.dirty[0]===-1&&(kt.push(t),Cn(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(t,e,n,i,r,o,a,s=[-1]){const l=Mt;Ct(t);const c=t.$$={fragment:null,ctx:null,props:o,update:A,not_equal:r,bound:de(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:de(),dirty:s,skip_bound:!1,root:e.target||l.$$.root};a&&a(c.root);let v=!1;if(c.ctx=n?n(t,e.props||{},(m,w,...z)=>{const x=z.length?z[0]:w;return c.ctx&&r(c.ctx[m],c.ctx[m]=x)&&(!c.skip_bound&&c.bound[m]&&c.bound[m](x),v&&Mn(t,m)),w}):[],c.update(),v=!0,ut(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){const m=bn(e.target);c.fragment&&c.fragment.l(m),m.forEach(T)}else c.fragment&&c.fragment.c();e.intro&&I(t.$$.fragment),Y(t,e.target,e.anchor,e.customElement),Be()}Ct(l)}class tt{$destroy(){X(this,1),this.$destroy=A}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!mn(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function _t(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_t=function(e){return typeof e}:_t=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_t(t)}function In(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ge(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function zn(t,e,n){return e&&ge(t.prototype,e),n&&ge(t,n),t}function Ln(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function L(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{},i=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),i.forEach(function(r){Ln(t,r,n[r])})}return t}function Ue(t,e){return Sn(t)||Pn(t,e)||jn()}function Sn(t){if(Array.isArray(t))return t}function Pn(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a=t[Symbol.iterator](),s;!(i=(s=a.next()).done)&&(n.push(s.value),!(e&&n.length===e));i=!0);}catch(l){r=!0,o=l}finally{try{!i&&a.return!=null&&a.return()}finally{if(r)throw o}}return n}function jn(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var ve=function(){},ie={},$e={},An=null,qe={mark:ve,measure:ve};try{typeof window!="undefined"&&(ie=window),typeof document!="undefined"&&($e=document),typeof MutationObserver!="undefined"&&(An=MutationObserver),typeof performance!="undefined"&&(qe=performance)}catch{}var Vn=ie.navigator||{},be=Vn.userAgent,ye=be===void 0?"":be,Wt=ie,D=$e,At=qe;Wt.document;var re=!!D.documentElement&&!!D.head&&typeof D.addEventListener=="function"&&typeof D.createElement=="function";~ye.indexOf("MSIE")||~ye.indexOf("Trident/");var at="___FONT_AWESOME___",Ge="fa",Ye="svg-inline--fa",En="data-fa-i2svg";(function(){try{return!0}catch{return!1}})();var $t={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Xe=Wt.FontAwesomeConfig||{};function Hn(t){var e=D.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Tn(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(D&&typeof D.querySelector=="function"){var On=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];On.forEach(function(t){var e=Ue(t,2),n=e[0],i=e[1],r=Tn(Hn(n));r!=null&&(Xe[i]=r)})}var Nn={familyPrefix:Ge,replacementClass:Ye,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Zt=L({},Nn,Xe);Zt.autoReplaceSvg||(Zt.observeMutations=!1);var $=L({},Zt);Wt.FontAwesomeConfig=$;var ot=Wt||{};ot[at]||(ot[at]={});ot[at].styles||(ot[at].styles={});ot[at].hooks||(ot[at].hooks={});ot[at].shims||(ot[at].shims=[]);var Q=ot[at],Rn=[],Fn=function t(){D.removeEventListener("DOMContentLoaded",t),Jt=1,Rn.map(function(e){return e()})},Jt=!1;re&&(Jt=(D.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(D.readyState),Jt||D.addEventListener("DOMContentLoaded",Fn));var ae="pending",Ze="settled",Tt="fulfilled",Ot="rejected",Dn=function(){},Je=typeof global!="undefined"&&typeof global.process!="undefined"&&typeof global.process.emit=="function",Wn=typeof setImmediate=="undefined"?setTimeout:setImmediate,xt=[],Qt;function Bn(){for(var t=0;t<xt.length;t++)xt[t][0](xt[t][1]);xt=[],Qt=!1}function Nt(t,e){xt.push([t,e]),Qt||(Qt=!0,Wn(Bn,0))}function Un(t,e){function n(r){oe(e,r)}function i(r){It(e,r)}try{t(n,i)}catch(r){i(r)}}function Qe(t){var e=t.owner,n=e._state,i=e._data,r=t[n],o=t.then;if(typeof r=="function"){n=Tt;try{i=r(i)}catch(a){It(o,a)}}Ke(o,i)||(n===Tt&&oe(o,i),n===Ot&&It(o,i))}function Ke(t,e){var n;try{if(t===e)throw new TypeError("A promises callback cannot return that same promise.");if(e&&(typeof e=="function"||_t(e)==="object")){var i=e.then;if(typeof i=="function")return i.call(e,function(r){n||(n=!0,e===r?tn(t,r):oe(t,r))},function(r){n||(n=!0,It(t,r))}),!0}}catch(r){return n||It(t,r),!0}return!1}function oe(t,e){(t===e||!Ke(t,e))&&tn(t,e)}function tn(t,e){t._state===ae&&(t._state=Ze,t._data=e,Nt($n,t))}function It(t,e){t._state===ae&&(t._state=Ze,t._data=e,Nt(qn,t))}function en(t){t._then=t._then.forEach(Qe)}function $n(t){t._state=Tt,en(t)}function qn(t){t._state=Ot,en(t),!t._handled&&Je&&global.process.emit("unhandledRejection",t._data,t)}function Gn(t){global.process.emit("rejectionHandled",t)}function G(t){if(typeof t!="function")throw new TypeError("Promise resolver "+t+" is not a function");if(!(this instanceof G))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],Un(t,this)}G.prototype={constructor:G,_state:ae,_then:null,_data:void 0,_handled:!1,then:function(e,n){var i={owner:this,then:new this.constructor(Dn),fulfilled:e,rejected:n};return(n||e)&&!this._handled&&(this._handled=!0,this._state===Ot&&Je&&Nt(Gn,this)),this._state===Tt||this._state===Ot?Nt(Qe,i):this._then.push(i),i.then},catch:function(e){return this.then(null,e)}};G.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new G(function(e,n){var i=[],r=0;function o(l){return r++,function(c){i[l]=c,--r||e(i)}}for(var a=0,s;a<t.length;a++)s=t[a],s&&typeof s.then=="function"?s.then(o(a),n):i[a]=s;r||e(i)})};G.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new G(function(e,n){for(var i=0,r;i<t.length;i++)r=t[i],r&&typeof r.then=="function"?r.then(e,n):e(r)})};G.resolve=function(t){return t&&_t(t)==="object"&&t.constructor===G?t:new G(function(e){e(t)})};G.reject=function(t){return new G(function(e,n){n(t)})};var gt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Yn(t){if(!(!t||!re)){var e=D.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=D.head.childNodes,i=null,r=n.length-1;r>-1;r--){var o=n[r],a=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(i=o)}return D.head.insertBefore(e,i),t}}var Xn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Rt(){for(var t=12,e="";t-- >0;)e+=Xn[Math.random()*62|0];return e}function nn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Zn(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(nn(t[n]),'" ')},"").trim()}function rn(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n],";")},"")}function an(t){return t.size!==gt.size||t.x!==gt.x||t.y!==gt.y||t.rotate!==gt.rotate||t.flipX||t.flipY}function on(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),a="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(o," ").concat(a," ").concat(s)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}var qt={x:0,y:0,width:"100%",height:"100%"};function we(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Jn(t){return t.tag==="g"?t.children:[t]}function Qn(t){var e=t.children,n=t.attributes,i=t.main,r=t.mask,o=t.maskId,a=t.transform,s=i.width,l=i.icon,c=r.width,v=r.icon,m=on({transform:a,containerWidth:c,iconWidth:s}),w={tag:"rect",attributes:L({},qt,{fill:"white"})},z=l.children?{children:l.children.map(we)}:{},x={tag:"g",attributes:L({},m.inner),children:[we(L({tag:l.tag,attributes:L({},l.attributes,m.path)},z))]},b={tag:"g",attributes:L({},m.outer),children:[x]},k="mask-".concat(o||Rt()),f="clip-".concat(o||Rt()),g={tag:"mask",attributes:L({},qt,{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,b]},u={tag:"defs",children:[{tag:"clipPath",attributes:{id:f},children:Jn(v)},g]};return e.push(u,{tag:"rect",attributes:L({fill:"currentColor","clip-path":"url(#".concat(f,")"),mask:"url(#".concat(k,")")},qt)}),{children:e,attributes:n}}function Kn(t){var e=t.children,n=t.attributes,i=t.main,r=t.transform,o=t.styles,a=rn(o);if(a.length>0&&(n.style=a),an(r)){var s=on({transform:r,containerWidth:i.width,iconWidth:i.width});e.push({tag:"g",attributes:L({},s.outer),children:[{tag:"g",attributes:L({},s.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:L({},i.icon.attributes,s.path)}]}]})}else e.push(i.icon);return{children:e,attributes:n}}function ti(t){var e=t.children,n=t.main,i=t.mask,r=t.attributes,o=t.styles,a=t.transform;if(an(a)&&n.found&&!i.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};r.style=rn(L({},o,{"transform-origin":"".concat(c.x+a.x/16,"em ").concat(c.y+a.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function ei(t){var e=t.prefix,n=t.iconName,i=t.children,r=t.attributes,o=t.symbol,a=o===!0?"".concat(e,"-").concat($.familyPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:L({},r,{id:a}),children:i}]}]}function ni(t){var e=t.icons,n=e.main,i=e.mask,r=t.prefix,o=t.iconName,a=t.transform,s=t.symbol,l=t.title,c=t.maskId,v=t.titleId,m=t.extra,w=t.watchable,z=w===void 0?!1:w,x=i.found?i:n,b=x.width,k=x.height,f=r==="fak",g=f?"":"fa-w-".concat(Math.ceil(b/k*16)),u=[$.replacementClass,o?"".concat($.familyPrefix,"-").concat(o):"",g].filter(function(et){return m.classes.indexOf(et)===-1}).filter(function(et){return et!==""||!!et}).concat(m.classes).join(" "),p={children:[],attributes:L({},m.attributes,{"data-prefix":r,"data-icon":o,class:u,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(b," ").concat(k)})},S=f&&!~m.classes.indexOf("fa-fw")?{width:"".concat(b/k*16*.0625,"em")}:{};z&&(p.attributes[En]=""),l&&p.children.push({tag:"title",attributes:{id:p.attributes["aria-labelledby"]||"title-".concat(v||Rt())},children:[l]});var d=L({},p,{prefix:r,iconName:o,main:n,mask:i,maskId:c,transform:a,symbol:s,styles:L({},S,m.styles)}),H=i.found&&n.found?Qn(d):Kn(d),N=H.children,R=H.attributes;return d.children=N,d.attributes=R,s?ei(d):ti(d)}var ke=function(){};$.measurePerformance&&At&&At.mark&&At.measure;var ii=function(e,n){return function(i,r,o,a){return e.call(n,i,r,o,a)}},Gt=function(e,n,i,r){var o=Object.keys(e),a=o.length,s=r!==void 0?ii(n,r):n,l,c,v;for(i===void 0?(l=1,v=e[o[0]]):(l=0,v=i);l<a;l++)c=o[l],v=s(v,e[c],c,e);return v};function sn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,r=i===void 0?!1:i,o=Object.keys(e).reduce(function(a,s){var l=e[s],c=!!l.icon;return c?a[l.iconName]=l.icon:a[s]=l,a},{});typeof Q.hooks.addPack=="function"&&!r?Q.hooks.addPack(t,o):Q.styles[t]=L({},Q.styles[t]||{},o),t==="fas"&&sn("fa",e)}var xe=Q.styles,ri=Q.shims,ln=function(){var e=function(r){return Gt(xe,function(o,a,s){return o[s]=Gt(a,r,{}),o},{})};e(function(i,r,o){return r[3]&&(i[r[3]]=o),i}),e(function(i,r,o){var a=r[2];return i[o]=o,a.forEach(function(s){i[s]=o}),i});var n="far"in xe;Gt(ri,function(i,r){var o=r[0],a=r[1],s=r[2];return a==="far"&&!n&&(a="fas"),i[o]={prefix:a,iconName:s},i},{})};ln();Q.styles;function Ce(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}function cn(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,r=t.children,o=r===void 0?[]:r;return typeof t=="string"?nn(t):"<".concat(e," ").concat(Zn(i),">").concat(o.map(cn).join(""),"</").concat(e,">")}var ai=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e?e.toLowerCase().split(" ").reduce(function(i,r){var o=r.toLowerCase().split("-"),a=o[0],s=o.slice(1).join("-");if(a&&s==="h")return i.flipX=!0,i;if(a&&s==="v")return i.flipY=!0,i;if(s=parseFloat(s),isNaN(s))return i;switch(a){case"grow":i.size=i.size+s;break;case"shrink":i.size=i.size-s;break;case"left":i.x=i.x-s;break;case"right":i.x=i.x+s;break;case"up":i.y=i.y-s;break;case"down":i.y=i.y+s;break;case"rotate":i.rotate=i.rotate+s;break}return i},n):n};function Kt(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=new Error().stack}Kt.prototype=Object.create(Error.prototype);Kt.prototype.constructor=Kt;var Bt={fill:"currentColor"},fn={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};L({},Bt,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var se=L({},fn,{attributeName:"opacity"});L({},Bt,{cx:"256",cy:"364",r:"28"}),L({},fn,{attributeName:"r",values:"28;14;28;28;14;28;"}),L({},se,{values:"1;0;1;1;0;1;"});L({},Bt,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),L({},se,{values:"1;0;0;0;0;1;"});L({},Bt,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),L({},se,{values:"0;0;1;1;0;0;"});Q.styles;function _e(t){var e=t[0],n=t[1],i=t.slice(4),r=Ue(i,1),o=r[0],a=null;return Array.isArray(o)?a={tag:"g",attributes:{class:"".concat($.familyPrefix,"-").concat($t.GROUP)},children:[{tag:"path",attributes:{class:"".concat($.familyPrefix,"-").concat($t.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat($.familyPrefix,"-").concat($t.PRIMARY),fill:"currentColor",d:o[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:n,icon:a}}Q.styles;var oi=`svg:not(:root).svg-inline--fa {
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
}`;function si(){var t=Ge,e=Ye,n=$.familyPrefix,i=$.replacementClass,r=oi;if(n!==t||i!==e){var o=new RegExp("\\.".concat(t,"\\-"),"g"),a=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(s,".".concat(i))}return r}var li=function(){function t(){In(this,t),this.definitions={}}return zn(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];var a=r.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(s){n.definitions[s]=L({},n.definitions[s]||{},a[s]),sn(s,a[s]),ln()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(o){var a=r[o],s=a.prefix,l=a.iconName,c=a.icon;n[s]||(n[s]={}),n[s][l]=c}),n}}]),t}();function ci(){$.autoAddCss&&!Me&&(Yn(si()),Me=!0)}function fi(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return cn(i)})}}),Object.defineProperty(t,"node",{get:function(){if(!!re){var i=D.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function te(t){var e=t.prefix,n=e===void 0?"fa":e,i=t.iconName;if(!!i)return Ce(di.definitions,n,i)||Ce(Q.styles,n,i)}function ui(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:te(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:te(r||{})),t(i,L({},n,{mask:r}))}}var di=new li,Me=!1,hi={transform:function(e){return ai(e)}},mi=ui(function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.transform,i=n===void 0?gt:n,r=e.symbol,o=r===void 0?!1:r,a=e.mask,s=a===void 0?null:a,l=e.maskId,c=l===void 0?null:l,v=e.title,m=v===void 0?null:v,w=e.titleId,z=w===void 0?null:w,x=e.classes,b=x===void 0?[]:x,k=e.attributes,f=k===void 0?{}:k,g=e.styles,u=g===void 0?{}:g;if(!!t){var p=t.prefix,S=t.iconName,d=t.icon;return fi(L({type:"icon"},t),function(){return ci(),$.autoA11y&&(m?f["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(z||Rt()):(f["aria-hidden"]="true",f.focusable="false")),ni({icons:{main:_e(d),mask:s?_e(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:S,transform:L({},gt,i),symbol:o,title:m,maskId:c,titleId:z,extra:{attributes:f,styles:u,classes:b}})})}});function Ie(t){if(t===null||typeof t=="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2){const[e,n]=t;return{prefix:e,iconName:n}}if(typeof t=="string")return{prefix:"fas",iconName:t}}function pi(t){let e,n;return{c(){e=new yn(!1),n=vn(),e.a=n},m(i,r){e.m(t[0],i,r),O(i,n,r)},p(i,[r]){r&1&&e.p(i[0])},i:A,o:A,d(i){i&&T(n),i&&e.d()}}}function gi(t,e,n){let i,r,{border:o=!1}=e,{fixedWidth:a=!1}=e,{flip:s=null}=e,{icon:l=null}=e,{mask:c=null}=e,{listItem:v=!1}=e,{pull:m=null}=e,{pulse:w=!1}=e,{rotation:z=null}=e,{swapOpacity:x=!1}=e,{size:b=null}=e,{spin:k=!1}=e,{transform:f={}}=e,{symbol:g=!1}=e,{title:u=null}=e,{inverse:p=!1}=e,S="";return wn(()=>{const d=Ie(l);if(!d)return;const H=te(d),N=mi(H||l,{symbol:g,title:u,styles:e.style?r:{},classes:[...Object.keys(i).map(R=>i[R]?R:null).filter(R=>!!R),(e.class||"").split(" ")],transform:{...typeof f=="string"?hi.transform(f):f},mask:Ie(c)});if(!N){console.warn("Could not find one or more icon(s)",H||l,c);return}n(0,S=N.html)}),t.$$set=d=>{n(19,e=ue(ue({},e),he(d))),"border"in d&&n(1,o=d.border),"fixedWidth"in d&&n(2,a=d.fixedWidth),"flip"in d&&n(3,s=d.flip),"icon"in d&&n(4,l=d.icon),"mask"in d&&n(5,c=d.mask),"listItem"in d&&n(6,v=d.listItem),"pull"in d&&n(7,m=d.pull),"pulse"in d&&n(8,w=d.pulse),"rotation"in d&&n(9,z=d.rotation),"swapOpacity"in d&&n(10,x=d.swapOpacity),"size"in d&&n(11,b=d.size),"spin"in d&&n(12,k=d.spin),"transform"in d&&n(13,f=d.transform),"symbol"in d&&n(14,g=d.symbol),"title"in d&&n(15,u=d.title),"inverse"in d&&n(16,p=d.inverse)},t.$$.update=()=>{t.$$.dirty&73678&&(i={"fa-spin":k,"fa-pulse":w,"fa-fw":a,"fa-border":o,"fa-li":v,"fa-inverse":p,"fa-flip-horizontal":["both","horizontal"].includes(s),"fa-flip-vertical":["both","vertical"].includes(s),[`fa-${b}`]:b!==null,[`fa-rotate-${z}`]:z!==null,[`fa-pull-${m}`]:m!==null,"fa-swap-opacity":x}),r=(e.style||"").split(";").filter(d=>!!d).map(d=>d.split(":").map(H=>H.trim())).reduce((d,H)=>{const[N,R]=H;return d[N]=R,d},{})},e=he(e),[S,o,a,s,l,c,v,m,w,z,x,b,k,f,g,u,p]}class le extends tt{constructor(e){super(),K(this,e,gi,pi,J,{border:1,fixedWidth:2,flip:3,icon:4,mask:5,listItem:6,pull:7,pulse:8,rotation:9,swapOpacity:10,size:11,spin:12,transform:13,symbol:14,title:15,inverse:16})}}/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var vi={prefix:"fas",iconName:"arrow-rotate-left",icon:[512,512,[8634,"arrow-left-rotate","arrow-rotate-back","arrow-rotate-backward","undo"],"f0e2","M480 256c0 123.4-100.5 223.9-223.9 223.9c-48.86 0-95.19-15.58-134.2-44.86c-14.14-10.59-17-30.66-6.391-44.81c10.61-14.09 30.69-16.97 44.8-6.375c27.84 20.91 61 31.94 95.89 31.94C344.3 415.8 416 344.1 416 256s-71.67-159.8-159.8-159.8C205.9 96.22 158.6 120.3 128.6 160H192c17.67 0 32 14.31 32 32S209.7 224 192 224H48c-17.67 0-32-14.31-32-32V48c0-17.69 14.33-32 32-32s32 14.31 32 32v70.23C122.1 64.58 186.1 32.11 256.1 32.11C379.5 32.11 480 132.6 480 256z"]},bi=vi,yi={prefix:"fas",iconName:"calculator",icon:[384,512,[128425],"f1ec","M336 0h-288C22.38 0 0 22.38 0 48v416C0 489.6 22.38 512 48 512h288c25.62 0 48-22.38 48-48v-416C384 22.38 361.6 0 336 0zM64 208C64 199.2 71.2 192 80 192h32C120.8 192 128 199.2 128 208v32C128 248.8 120.8 256 112 256h-32C71.2 256 64 248.8 64 240V208zM64 304C64 295.2 71.2 288 80 288h32C120.8 288 128 295.2 128 304v32C128 344.8 120.8 352 112 352h-32C71.2 352 64 344.8 64 336V304zM224 432c0 8.801-7.199 16-16 16h-128C71.2 448 64 440.8 64 432v-32C64 391.2 71.2 384 80 384h128c8.801 0 16 7.199 16 16V432zM224 336c0 8.801-7.199 16-16 16h-32C167.2 352 160 344.8 160 336v-32C160 295.2 167.2 288 176 288h32C216.8 288 224 295.2 224 304V336zM224 240C224 248.8 216.8 256 208 256h-32C167.2 256 160 248.8 160 240v-32C160 199.2 167.2 192 176 192h32C216.8 192 224 199.2 224 208V240zM320 432c0 8.801-7.199 16-16 16h-32c-8.799 0-16-7.199-16-16v-32c0-8.801 7.201-16 16-16h32c8.801 0 16 7.199 16 16V432zM320 336c0 8.801-7.199 16-16 16h-32c-8.799 0-16-7.199-16-16v-32C256 295.2 263.2 288 272 288h32C312.8 288 320 295.2 320 304V336zM320 240C320 248.8 312.8 256 304 256h-32C263.2 256 256 248.8 256 240v-32C256 199.2 263.2 192 272 192h32C312.8 192 320 199.2 320 208V240zM320 144C320 152.8 312.8 160 304 160h-224C71.2 160 64 152.8 64 144v-64C64 71.2 71.2 64 80 64h224C312.8 64 320 71.2 320 80V144z"]},wi={prefix:"fas",iconName:"camera-retro",icon:[512,512,[128247],"f083","M64 64V48C64 39.16 71.16 32 80 32H144C152.8 32 160 39.16 160 48V64H192L242.5 38.76C251.4 34.31 261.2 32 271.1 32H448C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V128C0 92.65 28.65 64 64 64zM220.6 121.2C211.7 125.7 201.9 128 192 128H64V192H178.8C200.8 176.9 227.3 168 256 168C284.7 168 311.2 176.9 333.2 192H448V96H271.1L220.6 121.2zM256 216C207.4 216 168 255.4 168 304C168 352.6 207.4 392 256 392C304.6 392 344 352.6 344 304C344 255.4 304.6 216 256 216z"]},ki={prefix:"fas",iconName:"car",icon:[512,512,[128664,"automobile"],"f1b9","M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"]},xi={prefix:"fas",iconName:"chess-board",icon:[448,512,[],"f43c","M192 224H128v64h64V224zM384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM384 160h-64v64h64v64h-64v64h64v64h-64v-64h-64v64H192v-64H128v64H64v-64h64V288H64V224h64V160H64V96h64v64h64V96h64v64h64V96h64V160zM192 288v64h64V288H192zM256 224V160H192v64H256zM256 288h64V224h-64V288z"]},Ci={prefix:"fas",iconName:"cubes",icon:[576,512,[],"f1b3","M172.1 40.16L268.1 3.76C280.9-1.089 295.1-1.089 307.9 3.76L403.9 40.16C425.6 48.41 440 69.25 440 92.52V204.7C441.3 205.1 442.6 205.5 443.9 205.1L539.9 242.4C561.6 250.6 576 271.5 576 294.7V413.9C576 436.1 562.9 456.2 542.5 465.1L446.5 507.3C432.2 513.7 415.8 513.7 401.5 507.3L288 457.5L174.5 507.3C160.2 513.7 143.8 513.7 129.5 507.3L33.46 465.1C13.13 456.2 0 436.1 0 413.9V294.7C0 271.5 14.39 250.6 36.15 242.4L132.1 205.1C133.4 205.5 134.7 205.1 136 204.7V92.52C136 69.25 150.4 48.41 172.1 40.16V40.16zM290.8 48.64C289 47.95 286.1 47.95 285.2 48.64L206.8 78.35L287.1 109.5L369.2 78.35L290.8 48.64zM392 210.6V121L309.6 152.6V241.8L392 210.6zM154.8 250.9C153 250.2 150.1 250.2 149.2 250.9L70.81 280.6L152 311.7L233.2 280.6L154.8 250.9zM173.6 455.3L256 419.1V323.2L173.6 354.8V455.3zM342.8 280.6L424 311.7L505.2 280.6L426.8 250.9C425 250.2 422.1 250.2 421.2 250.9L342.8 280.6zM528 413.9V323.2L445.6 354.8V455.3L523.2 421.2C526.1 419.9 528 417.1 528 413.9V413.9z"]},_i={prefix:"fas",iconName:"diagram-project",icon:[576,512,["project-diagram"],"f542","M0 80C0 53.49 21.49 32 48 32H144C170.5 32 192 53.49 192 80V96H384V80C384 53.49 405.5 32 432 32H528C554.5 32 576 53.49 576 80V176C576 202.5 554.5 224 528 224H432C405.5 224 384 202.5 384 176V160H192V176C192 177.7 191.9 179.4 191.7 180.1L272 288H368C394.5 288 416 309.5 416 336V432C416 458.5 394.5 480 368 480H272C245.5 480 224 458.5 224 432V336C224 334.3 224.1 332.6 224.3 331L144 224H48C21.49 224 0 202.5 0 176V80z"]},Mi=_i,Ii={prefix:"fas",iconName:"fire",icon:[448,512,[128293],"f06d","M323.5 51.25C302.8 70.5 284 90.75 267.4 111.1C240.1 73.62 206.2 35.5 168 0C69.75 91.12 0 210 0 281.6C0 408.9 100.2 512 224 512s224-103.1 224-230.4C448 228.4 396 118.5 323.5 51.25zM304.1 391.9C282.4 407 255.8 416 226.9 416c-72.13 0-130.9-47.73-130.9-125.2c0-38.63 24.24-72.64 72.74-130.8c7 8 98.88 125.4 98.88 125.4l58.63-66.88c4.125 6.75 7.867 13.52 11.24 19.9C364.9 290.6 353.4 357.4 304.1 391.9z"]},zi={prefix:"fas",iconName:"microchip",icon:[512,512,[],"f2db","M160 352h192V160H160V352zM448 176h48C504.8 176 512 168.8 512 160s-7.162-16-16-16H448V128c0-35.35-28.65-64-64-64h-16V16C368 7.164 360.8 0 352 0c-8.836 0-16 7.164-16 16V64h-64V16C272 7.164 264.8 0 256 0C247.2 0 240 7.164 240 16V64h-64V16C176 7.164 168.8 0 160 0C151.2 0 144 7.164 144 16V64H128C92.65 64 64 92.65 64 128v16H16C7.164 144 0 151.2 0 160s7.164 16 16 16H64v64H16C7.164 240 0 247.2 0 256s7.164 16 16 16H64v64H16C7.164 336 0 343.2 0 352s7.164 16 16 16H64V384c0 35.35 28.65 64 64 64h16v48C144 504.8 151.2 512 160 512c8.838 0 16-7.164 16-16V448h64v48c0 8.836 7.164 16 16 16c8.838 0 16-7.164 16-16V448h64v48c0 8.836 7.164 16 16 16c8.838 0 16-7.164 16-16V448H384c35.35 0 64-28.65 64-64v-16h48c8.838 0 16-7.164 16-16s-7.162-16-16-16H448v-64h48C504.8 272 512 264.8 512 256s-7.162-16-16-16H448V176zM384 368c0 8.836-7.162 16-16 16h-224C135.2 384 128 376.8 128 368v-224C128 135.2 135.2 128 144 128h224C376.8 128 384 135.2 384 144V368z"]},Li={prefix:"fas",iconName:"person-hiking",icon:[384,512,["hiking"],"f6ec","M240 96c26.5 0 48-21.5 48-48S266.5 0 240 0C213.5 0 192 21.5 192 48S213.5 96 240 96zM80.01 287.1c7.31 0 13.97-4.762 15.87-11.86L137 117c.3468-1.291 .5125-2.588 .5125-3.866c0-7.011-4.986-13.44-12.39-15.13C118.4 96.38 111.7 95.6 105.1 95.6c-36.65 0-70 23.84-79.32 59.53L.5119 253.3C.1636 254.6-.0025 255.9-.0025 257.2c0 7.003 4.961 13.42 12.36 15.11L76.01 287.5C77.35 287.8 78.69 287.1 80.01 287.1zM368 160h-15.1c-8.875 0-15.1 7.125-15.1 16V192h-34.75l-46.75-46.75C243.4 134.1 228.6 128 212.9 128C185.9 128 162.5 146.3 155.9 172.5L129 280.3C128.4 282.8 128 285.5 128 288.1c0 8.325 3.265 16.44 9.354 22.53l86.62 86.63V480c0 17.62 14.37 32 31.1 32s32-14.38 32-32v-82.75c0-17.12-6.625-33.13-18.75-45.25l-46.87-46.88c.25-.5 .5-.875 .625-1.375l19.1-79.5l22.37 22.38C271.4 252.6 279.5 256 288 256h47.1v240c0 8.875 7.125 16 15.1 16h15.1C376.9 512 384 504.9 384 496v-320C384 167.1 376.9 160 368 160zM81.01 472.3c-.672 2.63-.993 5.267-.993 7.86c0 14.29 9.749 27.29 24.24 30.89C106.9 511.8 109.5 512 112 512c14.37 0 27.37-9.75 30.1-24.25l25.25-101l-52.75-52.75L81.01 472.3z"]},Si=Li,Pi={prefix:"fas",iconName:"tree",icon:[448,512,[127794],"f1bb","M413.8 447.1L256 448l0 31.99C256 497.7 241.8 512 224.1 512c-17.67 0-32.1-14.32-32.1-31.99l0-31.99l-158.9-.0099c-28.5 0-43.69-34.49-24.69-56.4l68.98-79.59H62.22c-25.41 0-39.15-29.8-22.67-49.13l60.41-70.85H89.21c-21.28 0-32.87-22.5-19.28-37.31l134.8-146.5c10.4-11.3 28.22-11.3 38.62-.0033l134.9 146.5c13.62 14.81 2.001 37.31-19.28 37.31h-10.77l60.35 70.86c16.46 19.34 2.716 49.12-22.68 49.12h-15.2l68.98 79.59C458.7 413.7 443.1 447.1 413.8 447.1z"]},ji={prefix:"fas",iconName:"wave-square",icon:[640,512,[],"f83e","M476 480h-152c-19.88 0-36-16.12-36-36v-348H192v156c0 19.88-16.12 36-36 36H31.1C14.33 288 0 273.7 0 256s14.33-31.1 31.1-31.1H128v-156c0-19.88 16.12-36 36-36h152c19.88 0 36 16.12 36 36v348h96v-156c0-19.88 16.12-36 36-36h124C625.7 224 640 238.3 640 256s-14.33 32-31.1 32H512v156C512 463.9 495.9 480 476 480z"]},Ai={prefix:"fas",iconName:"wind",icon:[512,512,[],"f72e","M32 192h320c52.94 0 96-43.06 96-96s-43.06-96-96-96h-32c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c17.66 0 32 14.34 32 32s-14.34 32-32 32H32C14.31 128 0 142.3 0 160S14.31 192 32 192zM160 320H32c-17.69 0-32 14.31-32 32s14.31 32 32 32h128c17.66 0 32 14.34 32 32s-14.34 32-32 32H128c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c52.94 0 96-43.06 96-96S212.9 320 160 320zM416 224H32C14.31 224 0 238.3 0 256s14.31 32 32 32h384c17.66 0 32 14.34 32 32s-14.34 32-32 32h-32c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c52.94 0 96-43.06 96-96S468.9 224 416 224z"]},B=(t=>(t.Main="main",t.Project="project",t.Photos="photos",t))(B||{});const pt=[];function ce(t,e=A){let n;const i=new Set;function r(s){if(J(t,s)&&(t=s,n)){const l=!pt.length;for(const c of i)c[1](),pt.push(c,t);if(l){for(let c=0;c<pt.length;c+=2)pt[c][0](pt[c+1]);pt.length=0}}}function o(s){r(s(t))}function a(s,l=A){const c=[s,l];return i.add(c),i.size===1&&(n=e(r)||A),s(t),()=>{i.delete(c),i.size===0&&(n(),n=null)}}return{set:r,update:o,subscribe:a}}function Vi(){const{subscribe:t,set:e}=ce(null);return{subscribe:t,setProject(n){e(n)}}}const ee=Vi();function Ei(){const{subscribe:t,set:e}=ce(B.Main);return{subscribe:t,setView(n){e(n)}}}const zt=Ei();function Hi(t){var f,g,u;let e,n,i,r,o,a,s=((f=t[0])==null?void 0:f.title)+"",l,c,v,m,w=((g=t[0])==null?void 0:g.brief)+"",z,x,b,k;return r=new le({props:{icon:(u=t[0])==null?void 0:u.icon}}),{c(){e=C("li"),n=C("button"),i=C("div"),Z(r.$$.fragment),o=V(),a=C("span"),l=rt(s),c=V(),v=C("div"),m=C("span"),z=rt(w),_(a,"class","title"),_(i,"class","title-section"),_(m,"class","brief")},m(p,S){O(p,e,S),y(e,n),y(n,i),Y(r,i,null),y(i,o),y(i,a),y(a,l),y(n,c),y(n,v),y(v,m),y(m,z),x=!0,b||(k=bt(n,"click",t[1]),b=!0)},p(p,[S]){var H,N,R;const d={};S&1&&(d.icon=(H=p[0])==null?void 0:H.icon),r.$set(d),(!x||S&1)&&s!==(s=((N=p[0])==null?void 0:N.title)+"")&&vt(l,s),(!x||S&1)&&w!==(w=((R=p[0])==null?void 0:R.brief)+"")&&vt(z,w)},i(p){x||(I(r.$$.fragment,p),x=!0)},o(p){P(r.$$.fragment,p),x=!1},d(p){p&&T(e),X(r),b=!1,k()}}}function Ti(t,e,n){let{project:i}=e;const r=()=>{ee.setProject(i),zt.setView(B.Project)};return t.$$set=o=>{"project"in o&&n(0,i=o.project)},[i,r]}class Oi extends tt{constructor(e){super(),K(this,e,Ti,Hi,J,{project:0})}}function fe(t,{root:e=null,rootMargin:n="0px 0px 0px 0px",threshold:i=0}={}){if(window&&"IntersectionObserver"in window){const r=new IntersectionObserver(o=>{o.forEach(a=>{if(a.isIntersecting){const s=a.target;s.dataset.src&&(s.src=s.dataset.src),s.dataset.srcset&&(s.srcset=s.dataset.srcset),r.unobserve(s)}})},{root:e,rootMargin:n,threshold:i});return r.observe(t),{destroy(){r&&r.unobserve(t)}}}}function Ni(t){var R,et,Lt;let e,n,i,r,o,a=((R=t[0])==null?void 0:R.title)+"",s,l,c,v,m,w=((et=t[0])==null?void 0:et.description)+"",z,x,b,k,f,g,u,p,S,d,H,N;return c=new le({props:{icon:(Lt=t[0])==null?void 0:Lt.icon}}),{c(){var E,q;e=C("div"),n=C("button"),n.textContent="\u21D0",i=V(),r=C("div"),o=C("h3"),s=rt(a),l=V(),Z(c.$$.fragment),v=V(),m=C("p"),z=rt(w),x=V(),b=C("a"),k=rt("(Link)"),g=V(),u=C("div"),p=C("img"),_(n,"class","back-button"),_(r,"class","focused-title-section"),_(b,"href",f=(E=t[0])==null?void 0:E.link),_(b,"rel","noreferrer"),_(b,"target","_blank"),Ht(p.src,S=(q=t[0])==null?void 0:q.image)||_(p,"src",S),_(p,"alt","The project"),_(u,"class","project-image-container"),_(e,"class","details")},m(E,q){O(E,e,q),y(e,n),y(e,i),y(e,r),y(r,o),y(o,s),y(r,l),Y(c,r,null),y(e,v),y(e,m),y(m,z),y(e,x),y(e,b),y(b,k),y(e,g),y(e,u),y(u,p),d=!0,H||(N=[bt(n,"click",t[1]),ne(fe.call(null,p))],H=!0)},p(E,[q]){var U,wt,h,M,j;(!d||q&1)&&a!==(a=((U=E[0])==null?void 0:U.title)+"")&&vt(s,a);const yt={};q&1&&(yt.icon=(wt=E[0])==null?void 0:wt.icon),c.$set(yt),(!d||q&1)&&w!==(w=((h=E[0])==null?void 0:h.description)+"")&&vt(z,w),(!d||q&1&&f!==(f=(M=E[0])==null?void 0:M.link))&&_(b,"href",f),(!d||q&1&&!Ht(p.src,S=(j=E[0])==null?void 0:j.image))&&_(p,"src",S)},i(E){d||(I(c.$$.fragment,E),d=!0)},o(E){P(c.$$.fragment,E),d=!1},d(E){E&&T(e),X(c),H=!1,ut(N)}}}function Ri(t,e,n){let i;Dt(t,ee,o=>n(0,i=o));function r(){ee.setProject(null),zt.setView(B.Main)}return[i,r]}class Fi extends tt{constructor(e){super(),K(this,e,Ri,Ni,J,{})}}const un=t=>{if(!t)return null;const e=t.index.toString().padStart(2,"0"),n="images/photo_portfolio/";return{thumbnail:`${n}/thumbnail/Portfolio_Thumbnail-${e}.jpg`,full:`${n}/full_size/Portfolio-${e}.jpg`}};function Di(){const{subscribe:t,set:e}=ce(null);return{subscribe:t,setSelectedPhoto(n){e(n)}}}const Ft=Di();function Wi(t){let e,n,i,r,o,a,s;return{c(){e=C("li"),n=C("button"),i=C("img"),Ht(i.src,r=t[2].thumbnail)||_(i,"src",r),_(i,"alt",o=t[0].description)},m(l,c){O(l,e,c),y(e,n),y(n,i),a||(s=[ne(fe.call(null,i)),bt(n,"click",t[1])],a=!0)},p(l,[c]){c&1&&o!==(o=l[0].description)&&_(i,"alt",o)},i:A,o:A,d(l){l&&T(e),a=!1,ut(s)}}}function Bi(t,e,n){let{photo:i}=e;const r=()=>{Ft.setSelectedPhoto(i)},o=un(i);return t.$$set=a=>{"photo"in a&&n(0,i=a.photo)},[i,r,o]}class Ui extends tt{constructor(e){super(),K(this,e,Bi,Wi,J,{photo:0})}}function $i(t){let e,n,i,r=t[0].title+"",o,a,s,l=t[0].description+"",c,v,m,w,z,x,b,k,f,g;return{c(){e=C("div"),n=C("div"),i=C("span"),o=rt(r),a=V(),s=C("span"),c=rt(l),v=V(),m=C("div"),w=C("img"),b=V(),k=C("button"),k.textContent="\u21D0 ",_(i,"class","photo-title"),_(n,"class","photo-container-header"),_(s,"class","photo-description"),Ht(w.src,z=t[1].full)||_(w,"src",z),_(w,"alt",x=t[0].description),_(m,"class","photo-rows"),_(k,"class","back-button"),_(e,"class","full-photo-container")},m(u,p){O(u,e,p),y(e,n),y(n,i),y(i,o),y(e,a),y(e,s),y(s,c),y(e,v),y(e,m),y(m,w),y(e,b),y(e,k),f||(g=[ne(fe.call(null,w)),bt(k,"click",t[2])],f=!0)},p(u,[p]){p&1&&r!==(r=u[0].title+"")&&vt(o,r),p&1&&l!==(l=u[0].description+"")&&vt(c,l),p&1&&x!==(x=u[0].description)&&_(w,"alt",x)},i:A,o:A,d(u){u&&T(e),f=!1,ut(g)}}}function qi(t,e,n){let i;Dt(t,Ft,a=>n(0,i=a));const r=un(i);return[i,r,()=>{Ft.setSelectedPhoto(null)}]}class Gi extends tt{constructor(e){super(),K(this,e,qi,$i,J,{})}}const ze=[{title:"Hackberry Canyon",description:"A resonant slot canyon in Capitol Reef."},{title:"Willow",description:"Our sweet and wonderful Willow."},{title:"Optics",description:""},{title:"Miwok Homes",description:""},{title:"Radio Nowhere",description:""},{title:"Ascent",description:""},{title:"Mosquito Lake",description:"Composed similarly to a photo by my late uncle Bob Hovey."},{title:"Trix Yogurt Sunset",description:""},{title:"Crimson Butte",description:""},{title:"Secluded Cove",description:""},{title:"Three Phase",description:""},{title:"Rayleigh's Gleaming",description:"Taken after an early Winter storm."},{title:"Continuum",description:""},{title:"Badlands",description:""},{title:"Rhyolite",description:""},{title:"Solar Quills",description:""},{title:"Living in the Moment",description:""},{title:"Lil Fren",description:""},{title:"The Sisters",description:""},{title:"Strata",description:""},{title:"Shoreline",description:""},{title:"Amador Iris",description:""},{title:"Vein",description:""},{title:"Lunar Eclipse",description:""},{title:"Darmera Peltata",description:""},{title:"Granite Spring",description:"Taken using lens-whacking on a 50mm."},{title:"Hammock Horizon",description:""},{title:"Caldor Burn Scar",description:""},{title:"Tiger Pool",description:""},{title:"Laminar",description:""},{title:"Evening Lichen",description:""},{title:"Electra Bloom",description:""},{title:"Forgotten Garden",description:""},{title:"All of Us, Stars",description:""},{title:"Grand Teton",description:""},{title:"Freel from Winemucca Lake",description:""},{title:"Transmissions",description:""},{title:"Batholiths",description:""},{title:"Jade",description:""},{title:"Orion Nebula",description:""}].map((t,e)=>({...t,index:e+1}));function Le(t,e,n){const i=t.slice();return i[2]=e[n],i}function Se(t){let e,n,i=ze,r=[];for(let a=0;a<i.length;a+=1)r[a]=Pe(Le(t,i,a));const o=a=>P(r[a],1,1,()=>{r[a]=null});return{c(){e=C("ul");for(let a=0;a<r.length;a+=1)r[a].c();_(e,"class","photo-list")},m(a,s){O(a,e,s);for(let l=0;l<r.length;l+=1)r[l].m(e,null);n=!0},p(a,s){if(s&0){i=ze;let l;for(l=0;l<i.length;l+=1){const c=Le(a,i,l);r[l]?(r[l].p(c,s),I(r[l],1)):(r[l]=Pe(c),r[l].c(),I(r[l],1),r[l].m(e,null))}for(ct(),l=i.length;l<r.length;l+=1)o(l);ft()}},i(a){if(!n){for(let s=0;s<i.length;s+=1)I(r[s]);n=!0}},o(a){r=r.filter(Boolean);for(let s=0;s<r.length;s+=1)P(r[s]);n=!1},d(a){a&&T(e),De(r,a)}}}function Pe(t){let e,n;return e=new Ui({props:{photo:t[2]}}),{c(){Z(e.$$.fragment)},m(i,r){Y(e,i,r),n=!0},p:A,i(i){n||(I(e.$$.fragment,i),n=!0)},o(i){P(e.$$.fragment,i),n=!1},d(i){X(e,i)}}}function je(t){let e,n;return e=new Gi({}),{c(){Z(e.$$.fragment)},m(i,r){Y(e,i,r),n=!0},i(i){n||(I(e.$$.fragment,i),n=!0)},o(i){P(e.$$.fragment,i),n=!1},d(i){X(e,i)}}}function Yi(t){let e,n,i,r,o,a,s,l,c=t[0]===null&&Se(t),v=t[0]!==null&&je();return{c(){e=C("div"),n=C("button"),n.textContent="\u21D0 ",i=V(),r=C("div"),c&&c.c(),o=V(),v&&v.c(),_(n,"class","back-button"),_(r,"class","photo-portfolio-container")},m(m,w){O(m,e,w),y(e,n),y(e,i),y(e,r),c&&c.m(r,null),y(r,o),v&&v.m(r,null),a=!0,s||(l=bt(n,"click",t[1]),s=!0)},p(m,[w]){m[0]===null?c?(c.p(m,w),w&1&&I(c,1)):(c=Se(m),c.c(),I(c,1),c.m(r,o)):c&&(ct(),P(c,1,1,()=>{c=null}),ft()),m[0]!==null?v?w&1&&I(v,1):(v=je(),v.c(),I(v,1),v.m(r,null)):v&&(ct(),P(v,1,1,()=>{v=null}),ft())},i(m){a||(I(c),I(v),a=!0)},o(m){P(c),P(v),a=!1},d(m){m&&T(e),c&&c.d(),v&&v.d(),s=!1,l()}}}function Xi(t,e,n){let i;return Dt(t,Ft,o=>n(0,i=o)),[i,()=>{zt.setView(B.Main)}]}class Zi extends tt{constructor(e){super(),K(this,e,Xi,Yi,J,{})}}function Ji(t){let e;return{c(){e=C("div"),e.innerHTML=`<ul class="soc"><li><a class="soc-linkedin" target="_blank" href="http://linkedin.com/in/kyle-hovey" rel="noreferrer"><span>My Linkedin</span></a></li> 
    <li><a class="soc-github soc-icon-last" target="_blank" href="http://github.com/kylehovey" rel="noreferrer"><span>My GitHub</span></a></li></ul> 
  <div class="links"><a href="https://github.com/kylehovey/resume/raw/master/kyle_hovey_resume.pdf">Resume</a> 
    <span class="divider">|</span> 
    <a href="blog">Blog</a> 
    <span class="divider">|</span> 
    <a href="MATH_5620">Math 5620</a> 
    <span class="divider">|</span> 
    <a target="_blank" rel="me" href="https://mathstodon.xyz/@speleo">Mathstodon</a> 
    <span class="divider">|</span> 
    <a href="https://kylehovey-resolutions.vercel.app" target="_blank" rel="noreferrer">Resolutions</a></div>`,_(e,"class","bottom-bar")},m(n,i){O(n,e,i)},p:A,i:A,o:A,d(n){n&&T(e)}}}class Qi extends tt{constructor(e){super(),K(this,e,null,Ji,J,{})}}function Ki(t){let e;return{c(){e=C("canvas"),_(e,"id","boids-canvas"),_(e,"class","full-canvas")},m(n,i){O(n,e,i)},p:A,i:A,o:A,d(n){n&&T(e)}}}function tr(t){const e={r:63,g:66,b:65},n={r:150,g:200,b:255};return kn(()=>{const i=document.getElementById("boids-canvas"),r=i.getContext("2d"),o=()=>{i.width=window.innerWidth,i.height=window.innerHeight};window.addEventListener("resize",o),o();const a=h=>{if(r===null)return;const[M,j]=h.pos,[F,nt]=h.dS,st=Math.atan2(nt,F);r.save(),r.translate(M,j),r.rotate(st),r.beginPath(),r.moveTo(10,0),r.lineTo(-10,5),r.lineTo(-10,-5),r.closePath(),r.fillStyle=Lt(et(h)),r.fill(),r.restore()},s=1,l=200,c=.5,v=2,m=.4,w=.001,z=.95,x=1e-6,b=.001,k=.01,f=([h,M],[j,F])=>[h+j,M+F],g=([h,M],[j,F])=>[h-j,M-F],u=(h,[M,j])=>[h*M,h*j],p=([h,M])=>Math.sqrt(h*h+M*M),S=(h,M)=>p(g(h,M)),d=h=>{const M=p(h);return M!==0?u(1/M,h):h},H=h=>1/(1+Math.exp(40*(h-.5)**2)),N=(h,M,j)=>(1-h)*M+h*j,R=(h,{r:M,g:j,b:F},{r:nt,g:st,b:W})=>({r:N(h,M,nt),g:N(h,j,st),b:N(h,F,W)}),et=h=>R(H(h.activation),e,n),Lt=({r:h,g:M,b:j})=>`rgb(${h},${M},${j})`,E=(h,M)=>{const j=g(h,M),F=p(j);return u(Math.min(w,F),d(j))},q=(h,M)=>{let j=0,F=[0,0],nt=[0,0],st=[0,0],W=0;for(const lt of M){const it=S(lt.pos,h.pos);it>0&&it<=l&&(j+=1,F=f(F,u(1/it,d(lt.dS))),nt=f(nt,lt.pos),st=u(1/it,d(g(h.pos,lt.pos))),W+=H(lt.activation)/it)}let mt=[0,0],St=[0,0],dt=[0,0];if(j>0){const lt=u(s,d(st));mt=u(c,E(lt,h.dS));const it=u(s,d(F));St=u(v,E(it,h.dS));const dn=u(s,d(g(nt,h.pos)));dt=u(m,E(dn,h.dS))}return[mt,St,dt,W]},yt=(h,M)=>{const[j,F,nt,st]=q(h,M),W=f(h.pos,h.dS),mt=f(h.dS,h.d2S),St=f(f(j,f(F,nt)),h.d2S);let dt=h.activation*z;dt<=x&&(dt=0,(st>=k||Math.random()>1-b)&&(dt=1));const it=p(mt)>s?u(s,d(mt)):mt;return W[0]>i.width&&(W[0]=0),W[0]<0&&(W[0]=i.width),W[1]>i.height&&(W[1]=0),W[1]<0&&(W[1]=i.height),{pos:W,dS:it,d2S:St,activation:dt}},U=[];for(let h=0;h<200;h++){const M=Math.random()*2*Math.PI;U.push({pos:[Math.random()*i.width,Math.random()*i.height],dS:[Math.cos(M),Math.sin(M)],d2S:[0,0],activation:0})}for(let h=0;h<100;h++)for(let M=0;M<U.length;M++)U[M]=yt(U[M],U);const wt=()=>{requestAnimationFrame(wt),r.clearRect(0,0,i.width,i.height);for(let h=0;h<U.length;h++)a(U[h]),U[h]=yt(U[h],U)};window.innerWidth>600&&wt()}),[]}class er extends tt{constructor(e){super(),K(this,e,tr,Ki,J,{})}}function nr(t){let e;return{c(){e=C("div"),e.innerHTML=`<h2>Project Portfolio</h2> 
  <p>Hi! My name is Kyle. I grew up in a small community in the Sierra Nevada
    mountains. In 2019, I graduated Utah State University with a BS in
    Computational Mathematics. My passions include mathematics, electrical
    engineering, programming, music, hiking, climbing, and philosophy. Here you
    can see some highlights from my past/current projects. Check out my blog for
    posts on math and programming.</p>`},m(n,i){O(n,e,i)},p:A,i:A,o:A,d(n){n&&T(e)}}}class ir extends tt{constructor(e){super(),K(this,e,null,nr,J,{})}}const rr="images/projects/cal_sim.png",ar="images/projects/myst_net.png",or="images/projects/fireplace.png",sr="images/projects/euler_golf.png",lr="images/projects/shader_toy.png",cr="images/projects/vector_wind.png",fr="images/projects/fiery_furnace.png",ur="images/projects/8_bit_spaghetti.png",dr="images/projects/acoustic-forest.png",hr="images/projects/station_analysis.png",mr="images/projects/villein_translator.png",pr="images/projects/automata_exploration.png",Ae=[{title:"Automata Browser",icon:xi,image:pr,year:"2020",brief:"Global map of all life-like Cellular Automata",description:"I was researching emergent complexity in cellular automata and found a classification scheme for all quarter million life-like automata. The embedding compresses all of the rules into a nebula of points where distance between any two points provides a decent approximation of how simililarly the rules behave given a random initial board state. I built this browser with React so that I could better explore the dataset.",link:"/automata-nebula-explorer/index.html"},{title:"Fiery Furnace",icon:Si,image:fr,year:"2020",brief:"Interactive map of the Fiery Furnace in Arches National Park",description:"Pre-pandemic, my partner Hannah and I took a trip down to Arches National Park in Utah. The highlight was exploring the Fiery Furnace: a labrynth of ancient sandstone with no main trail, only meandering boulder routes and washes. I exported the route data (recorded with my watch) and interpolated photo time-stamps with location time-stamps to create an interactive map of our path with pictures along the way using Mapbox.",link:"/FieryFurnace/index.html"},{title:"Shader Toy",icon:Ci,image:lr,year:"2020",brief:"Various shaders written by me",description:"I have been having a lot of fun learning how to write shaders. GLSL seemed like an intimidating topic at first, but once I realized it was essentially a very parrellized graphing calculator I started having a lot of fun and have been picking up some more techniques. As of writing this, I have worked with Ray Marching, Conformal Mapping, and 2D interference patterns.",link:"https://www.shadertoy.com/user/kylehovey"},{title:"Myst Net",icon:Mi,image:ar,year:"2019",brief:"Neural Net for parsing D'ni numerals",description:"This was my last hackathon project. The D'ni numeral system is from the world of Myst, a game series that I am a very large fan of. The system is base-25, and has a rotational glyph system with a base-5 sub-pattern. I wanted to see if I could reproduce the MNIST convnet example using D'ni numbers. To generate training data, I wrote the segments in isolation and created a script to produce combinatorial sets of the individual segments I created. In the end, the network had over 99% validation accuracy and responded well to novel handwritten D'ni digits.",link:"https://github.com/kylehovey/myst-net"},{title:"Vector Wind",icon:Ai,image:cr,year:"2017",brief:"Vector field visualization tool",description:"I was inspired by a Reddit post that used HTML Canvas to create a beautiful vector field visualization. Unfortunately, the poster did not release their source code, so I decided to make my own version. Vector fields are entered by typing in a Javascript function that takes two inputs (x,y) and returns a two-element array. The result is visualized by creating particles that get pushed around in the field like dust in the wind. The source code can be found on my GitHub.",link:"vectorwind/index.html"},{title:"CALSim",icon:ji,image:rr,year:"2016",brief:"In-browser WireWorld cellular automata simulator",description:"This is a WireWorld Cellular Automata simulator written in JavaScript. WireWorld is a CA capable of logic simulation. In fact, it is Turing Complete! This in-browser interpreter allows you to create structures, copy, paste, delete, and pause/play/step simulations.",link:"CALSim/index.html"},{title:"Villein Translator",icon:yi,image:mr,year:"2016",brief:"Translator for Obduction's Villein numbers",description:`In Cyan's new game Obduction there is an alien race called the Villeins. Part of the game is figuring out their numbering system, which uses a three-by-three grid on which five "digits" can lie. The whole system is base-4, and I had a bunch of fun figuring it out. I wanted to create a translator to quickly verify numbers, so I made one husing the html5 canvas.`,link:"Villein/index.html"},{title:"Euler Golf",icon:bi,image:sr,year:"2015",brief:"Recursive puzzle involving complex numbers",description:"When I was attending Cuesta College in San Luis Obispo, I had an idea for a game over the Gaussian Integers (complex numbers of the form a+bi where a and b are both integers). I quickly found that the game was evil in difficulty, and as I shared it with friends I also learned that it was not just me. In light of this newfound challenge, I created an in-browser version as a Hackathon project. More info can be found on the site.",link:"EulerGolf/index.html"},{title:"Station Report",icon:ki,image:hr,year:"2018",brief:"Analysis to find the best spots for new EV chargers",description:"In Utah, where the air is bad enough each winter to take years off of the average person's life expectancy, electric vehicle adoption is one of the many solutions to our air quality. At the Utah Power and Electronics Lab (UPEL), I helped Rocky Mountain Power determine where to place/fund new electric vehicle charging stations in Utah. We worked with the Utah Department of Transportation to combine traffic information, as well as network analysis on the roadways to find the locations that would have the highest impact for EV adoption. This interactive report summarizes the findings of the analysis and visualizes what corridors are affected.",link:"stationReport/index.html"},{title:"8-Bit Spaghetti",icon:zi,image:ur,year:"2012",brief:"8-Bit Computer designed from the ground up",description:'One fateful night of playing Minecraft with my best friend and I was convinced that I had to learn more about the inner workings of a CPU. We had just installed a mod that added basic digital components to the game, and my friend was constructing a processor. I knew nothing about architecture at that point, but I wanted to learn more. I began my journey reading "Digital Computer Electronics" by Malvino and started constructing the basic modular components of a computer. Eventually I had constructed a processor of my own design. The final product had EM interference which induced signalling issues, but the knowledge I gained benefits me to this day. I made a website and tutorial to aid anyone who wishes to acheive the same goal. I know of a few individuals so far that have used my instructions to build their own CPU.',link:"http://8-bitspaghetti.com"},{title:"Fireplace",icon:Ii,image:or,year:"2016",brief:"Custom simulator written to mimic a campfire",description:"One of my favorite things to do in my free time is to program new patterns for the Adafruit Neopixel shield (a 5x8 RGB LED matrix for the Arduino). Since I camp a lot, I wanted to simulate fire on it with the hopes of creating a calming lantern for my tent. I decided to go with a slightly neural-network inspired approach. I created an ember class that has an internal fire value and a customized sigmoid curve function that will map the embers' fire values to something between 0 and 1. A stoke method adds a random integer in a specified range, and a diminish method multiplies the fire variable by a predetermined constant (0<k<1). I was so happy with the results that I wanted to create an in-browser version. This time, I used HTML5 and JS to create a grid of embers. I shaped the fire on the page by making the range for the random constant that each ember is stoked with depend on the ember's position on the page. Vertically there is a linear gradient, and horizontally there is a gaussian distribution determined by page width.",link:"FirePlace/index.html"},{title:"Acoustic Forest",icon:Pi,image:dr,year:"2016",brief:"2D Procedural landscape that is reactive to sound",description:`A natural continuation of my FirePlace project and an ode to John Muir and the mountains, I created Acoustic Forest: a music visualizer that uses procedurally generated terrain with unique elements augmented by distinct frequency bands in a song. I decided to go with Muse's "Exogenesis Symphony Part 3" which I claim absolutely no rights to and will take down at first request of any proprietor's request. I chose the song because it just so happened that Muse's masterful composition consists of a crescendo of increasing layers of elements, then a decrescendo back out. The structure of the song itself is a mountain in shape, which made it perfect to bring in elements slowly, then bring them out in reverse order. Currently this only runs in Chrome/Safari for desktop, so apologies to mobile users. Granted, this was created in Canvas without WebGL, so expect heavy processor usage.`,link:"AcousticForest/index.html"}];function Ve(t,e,n){const i=t.slice();return i[2]=e[n],i}function Ee(t){let e,n;return e=new ir({}),{c(){Z(e.$$.fragment)},m(i,r){Y(e,i,r),n=!0},i(i){n||(I(e.$$.fragment,i),n=!0)},o(i){P(e.$$.fragment,i),n=!1},d(i){X(e,i)}}}function He(t){let e,n,i,r,o,a,s,l,c,v,m,w,z,x=Ae,b=[];for(let f=0;f<x.length;f+=1)b[f]=Te(Ve(t,x,f));const k=f=>P(b[f],1,1,()=>{b[f]=null});return l=new le({props:{icon:wi}}),{c(){e=C("ul");for(let f=0;f<b.length;f+=1)b[f].c();n=V(),i=C("hr"),r=V(),o=C("div"),a=C("button"),s=C("div"),Z(l.$$.fragment),c=V(),v=C("span"),v.textContent="Photography Portfolio",_(e,"class","projects-list"),_(i,"class","divider"),_(v,"class","title"),_(s,"class","title-section"),_(a,"class","photography-portfolio-link"),_(o,"class","photography-button-container")},m(f,g){O(f,e,g);for(let u=0;u<b.length;u+=1)b[u].m(e,null);O(f,n,g),O(f,i,g),O(f,r,g),O(f,o,g),y(o,a),y(a,s),Y(l,s,null),y(s,c),y(s,v),m=!0,w||(z=bt(a,"click",t[1]),w=!0)},p(f,g){if(g&0){x=Ae;let u;for(u=0;u<x.length;u+=1){const p=Ve(f,x,u);b[u]?(b[u].p(p,g),I(b[u],1)):(b[u]=Te(p),b[u].c(),I(b[u],1),b[u].m(e,null))}for(ct(),u=x.length;u<b.length;u+=1)k(u);ft()}},i(f){if(!m){for(let g=0;g<x.length;g+=1)I(b[g]);I(l.$$.fragment,f),m=!0}},o(f){b=b.filter(Boolean);for(let g=0;g<b.length;g+=1)P(b[g]);P(l.$$.fragment,f),m=!1},d(f){f&&T(e),De(b,f),f&&T(n),f&&T(i),f&&T(r),f&&T(o),X(l),w=!1,z()}}}function Te(t){let e,n;return e=new Oi({props:{project:t[2]}}),{c(){Z(e.$$.fragment)},m(i,r){Y(e,i,r),n=!0},p:A,i(i){n||(I(e.$$.fragment,i),n=!0)},o(i){P(e.$$.fragment,i),n=!1},d(i){X(e,i)}}}function Oe(t){let e,n;return e=new Fi({}),{c(){Z(e.$$.fragment)},m(i,r){Y(e,i,r),n=!0},i(i){n||(I(e.$$.fragment,i),n=!0)},o(i){P(e.$$.fragment,i),n=!1},d(i){X(e,i)}}}function Ne(t){let e,n;return e=new Zi({}),{c(){Z(e.$$.fragment)},m(i,r){Y(e,i,r),n=!0},i(i){n||(I(e.$$.fragment,i),n=!0)},o(i){P(e.$$.fragment,i),n=!1},d(i){X(e,i)}}}function gr(t){let e,n,i,r,o,a,s,l,c,v,m,w,z,x,b;i=new er({});let k=t[0]===B.Main&&Ee(),f=t[0]===B.Main&&He(t),g=t[0]===B.Project&&Oe(),u=t[0]===B.Photos&&Ne();return x=new Qi({}),{c(){e=C("main"),n=C("div"),Z(i.$$.fragment),r=V(),o=C("div"),a=C("div"),s=C("div"),l=C("div"),c=V(),k&&k.c(),v=V(),f&&f.c(),m=V(),g&&g.c(),w=V(),u&&u.c(),z=V(),Z(x.$$.fragment),_(l,"class","logo"),_(s,"class","description"),_(a,"class","main"),_(o,"class","content"),_(n,"class","container")},m(p,S){O(p,e,S),y(e,n),Y(i,n,null),y(n,r),y(n,o),y(o,a),y(a,s),y(s,l),y(s,c),k&&k.m(s,null),y(a,v),f&&f.m(a,null),y(a,m),g&&g.m(a,null),y(a,w),u&&u.m(a,null),y(a,z),Y(x,a,null),b=!0},p(p,[S]){p[0]===B.Main?k?S&1&&I(k,1):(k=Ee(),k.c(),I(k,1),k.m(s,null)):k&&(ct(),P(k,1,1,()=>{k=null}),ft()),p[0]===B.Main?f?(f.p(p,S),S&1&&I(f,1)):(f=He(p),f.c(),I(f,1),f.m(a,m)):f&&(ct(),P(f,1,1,()=>{f=null}),ft()),p[0]===B.Project?g?S&1&&I(g,1):(g=Oe(),g.c(),I(g,1),g.m(a,w)):g&&(ct(),P(g,1,1,()=>{g=null}),ft()),p[0]===B.Photos?u?S&1&&I(u,1):(u=Ne(),u.c(),I(u,1),u.m(a,z)):u&&(ct(),P(u,1,1,()=>{u=null}),ft())},i(p){b||(I(i.$$.fragment,p),I(k),I(f),I(g),I(u),I(x.$$.fragment,p),b=!0)},o(p){P(i.$$.fragment,p),P(k),P(f),P(g),P(u),P(x.$$.fragment,p),b=!1},d(p){p&&T(e),X(i),k&&k.d(),f&&f.d(),g&&g.d(),u&&u.d(),X(x)}}}function vr(t,e,n){let i;return Dt(t,zt,o=>n(0,i=o)),[i,()=>{zt.setView(B.Photos)}]}class br extends tt{constructor(e){super(),K(this,e,vr,gr,J,{})}}new br({target:document.getElementById("app")});
