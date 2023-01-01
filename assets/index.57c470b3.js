const Dt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}};Dt();function S(){}function Ge(e,t){for(const n in t)e[n]=t[n];return e}function gt(e){return e()}function Ye(){return Object.create(null)}function Z(e){e.forEach(gt)}function pt(e){return typeof e=="function"}function J(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let le;function Xe(e,t){return le||(le=document.createElement("a")),le.href=t,e===le.href}function Wt(e){return Object.keys(e).length===0}function Ut(e,...t){if(e==null)return S;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function vt(e,t,n){e.$$.on_destroy.push(Ut(t,n))}function Ze(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function Bt(e){return e&&pt(e.destroy)?e.destroy:S}function p(e,t){e.appendChild(t)}function U(e,t,n){e.insertBefore(t,n||null)}function W(e){e.parentNode.removeChild(e)}function qt(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function x(e){return document.createElement(e)}function Gt(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function G(e){return document.createTextNode(e)}function T(){return G(" ")}function Yt(){return G("")}function bt(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function C(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Xt(e){return Array.from(e.childNodes)}function he(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}class Zt{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,n,i=null){this.e||(this.is_svg?this.e=Gt(n.nodeName):this.e=x(n.nodeName),this.t=n,this.c(t)),this.i(i)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)U(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(W)}}let ie;function te(e){ie=e}function Jt(){if(!ie)throw new Error("Function called outside component initialization");return ie}function Qt(e){Jt().$$.before_update.push(e)}const $=[],Je=[],ue=[],Qe=[],Kt=Promise.resolve();let _e=!1;function $t(){_e||(_e=!0,Kt.then(yt))}function Me(e){ue.push(e)}const ke=new Set;let ce=0;function yt(){const e=ie;do{for(;ce<$.length;){const t=$[ce];ce++,te(t),en(t.$$)}for(te(null),$.length=0,ce=0;Je.length;)Je.pop()();for(let t=0;t<ue.length;t+=1){const n=ue[t];ke.has(n)||(ke.add(n),n())}ue.length=0}while($.length);for(;Qe.length;)Qe.pop()();_e=!1,ke.clear(),te(e)}function en(e){if(e.fragment!==null){e.update(),Z(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Me)}}const de=new Set;let q;function ze(){q={r:0,c:[],p:q}}function Le(){q.r||Z(q.c),q=q.p}function A(e,t){e&&e.i&&(de.delete(e),e.i(t))}function O(e,t,n,i){if(e&&e.o){if(de.has(e))return;de.add(e),q.c.push(()=>{de.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}}function re(e){e&&e.c()}function Q(e,t,n,i){const{fragment:a,on_mount:o,on_destroy:r,after_update:s}=e.$$;a&&a.m(t,n),i||Me(()=>{const l=o.map(gt).filter(pt);r?r.push(...l):Z(l),e.$$.on_mount=[]}),s.forEach(Me)}function K(e,t){const n=e.$$;n.fragment!==null&&(Z(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function tn(e,t){e.$$.dirty[0]===-1&&($.push(e),$t(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function oe(e,t,n,i,a,o,r,s=[-1]){const l=ie;te(e);const c=e.$$={fragment:null,ctx:null,props:o,update:S,not_equal:a,bound:Ye(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:Ye(),dirty:s,skip_bound:!1,root:t.target||l.$$.root};r&&r(c.root);let y=!1;if(c.ctx=n?n(e,t.props||{},(u,k,...m)=>{const d=m.length?m[0]:k;return c.ctx&&a(c.ctx[u],c.ctx[u]=d)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](d),y&&tn(e,u)),k}):[],c.update(),y=!0,Z(c.before_update),c.fragment=i?i(c.ctx):!1,t.target){if(t.hydrate){const u=Xt(t.target);c.fragment&&c.fragment.l(u),u.forEach(W)}else c.fragment&&c.fragment.c();t.intro&&A(e.$$.fragment),Q(e,t.target,t.anchor,t.customElement),yt()}te(l)}class se{$destroy(){K(this,1),this.$destroy=S}$on(t,n){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const a=i.indexOf(n);a!==-1&&i.splice(a,1)}}$set(t){this.$$set&&!Wt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function ne(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ne=function(t){return typeof t}:ne=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ne(e)}function nn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ke(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function an(e,t,n){return t&&Ke(e.prototype,t),n&&Ke(e,n),e}function rn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{},i=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),i.forEach(function(a){rn(e,a,n[a])})}return e}function wt(e,t){return on(e)||sn(e,t)||ln()}function on(e){if(Array.isArray(e))return e}function sn(e,t){var n=[],i=!0,a=!1,o=void 0;try{for(var r=e[Symbol.iterator](),s;!(i=(s=r.next()).done)&&(n.push(s.value),!(t&&n.length===t));i=!0);}catch(l){a=!0,o=l}finally{try{!i&&r.return!=null&&r.return()}finally{if(a)throw o}}return n}function ln(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var $e=function(){},He={},kt={},cn=null,xt={mark:$e,measure:$e};try{typeof window!="undefined"&&(He=window),typeof document!="undefined"&&(kt=document),typeof MutationObserver!="undefined"&&(cn=MutationObserver),typeof performance!="undefined"&&(xt=performance)}catch{}var fn=He.navigator||{},et=fn.userAgent,tt=et===void 0?"":et,ye=He,j=kt,fe=xt;ye.document;var Pe=!!j.documentElement&&!!j.head&&typeof j.addEventListener=="function"&&typeof j.createElement=="function";~tt.indexOf("MSIE")||~tt.indexOf("Trident/");var F="___FONT_AWESOME___",Ct="fa",It="svg-inline--fa",un="data-fa-i2svg";(function(){try{return!0}catch{return!1}})();var xe={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},_t=ye.FontAwesomeConfig||{};function dn(e){var t=j.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function hn(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(j&&typeof j.querySelector=="function"){var mn=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];mn.forEach(function(e){var t=wt(e,2),n=t[0],i=t[1],a=hn(dn(n));a!=null&&(_t[i]=a)})}var gn={familyPrefix:Ct,replacementClass:It,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Ae=b({},gn,_t);Ae.autoReplaceSvg||(Ae.observeMutations=!1);var V=b({},Ae);ye.FontAwesomeConfig=V;var D=ye||{};D[F]||(D[F]={});D[F].styles||(D[F].styles={});D[F].hooks||(D[F].hooks={});D[F].shims||(D[F].shims=[]);var R=D[F],pn=[],vn=function e(){j.removeEventListener("DOMContentLoaded",e),je=1,pn.map(function(t){return t()})},je=!1;Pe&&(je=(j.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(j.readyState),je||j.addEventListener("DOMContentLoaded",vn));var Te="pending",Mt="settled",me="fulfilled",ge="rejected",bn=function(){},zt=typeof global!="undefined"&&typeof global.process!="undefined"&&typeof global.process.emit=="function",yn=typeof setImmediate=="undefined"?setTimeout:setImmediate,ee=[],Ee;function wn(){for(var e=0;e<ee.length;e++)ee[e][0](ee[e][1]);ee=[],Ee=!1}function pe(e,t){ee.push([e,t]),Ee||(Ee=!0,yn(wn,0))}function kn(e,t){function n(a){Oe(t,a)}function i(a){ae(t,a)}try{e(n,i)}catch(a){i(a)}}function Lt(e){var t=e.owner,n=t._state,i=t._data,a=e[n],o=e.then;if(typeof a=="function"){n=me;try{i=a(i)}catch(r){ae(o,r)}}At(o,i)||(n===me&&Oe(o,i),n===ge&&ae(o,i))}function At(e,t){var n;try{if(e===t)throw new TypeError("A promises callback cannot return that same promise.");if(t&&(typeof t=="function"||ne(t)==="object")){var i=t.then;if(typeof i=="function")return i.call(t,function(a){n||(n=!0,t===a?jt(e,a):Oe(e,a))},function(a){n||(n=!0,ae(e,a))}),!0}}catch(a){return n||ae(e,a),!0}return!1}function Oe(e,t){(e===t||!At(e,t))&&jt(e,t)}function jt(e,t){e._state===Te&&(e._state=Mt,e._data=t,pe(xn,e))}function ae(e,t){e._state===Te&&(e._state=Mt,e._data=t,pe(Cn,e))}function Et(e){e._then=e._then.forEach(Lt)}function xn(e){e._state=me,Et(e)}function Cn(e){e._state=ge,Et(e),!e._handled&&zt&&global.process.emit("unhandledRejection",e._data,e)}function In(e){global.process.emit("rejectionHandled",e)}function P(e){if(typeof e!="function")throw new TypeError("Promise resolver "+e+" is not a function");if(!(this instanceof P))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],kn(e,this)}P.prototype={constructor:P,_state:Te,_then:null,_data:void 0,_handled:!1,then:function(t,n){var i={owner:this,then:new this.constructor(bn),fulfilled:t,rejected:n};return(n||t)&&!this._handled&&(this._handled=!0,this._state===ge&&zt&&pe(In,this)),this._state===me||this._state===ge?pe(Lt,i):this._then.push(i),i.then},catch:function(t){return this.then(null,t)}};P.all=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.all().");return new P(function(t,n){var i=[],a=0;function o(l){return a++,function(c){i[l]=c,--a||t(i)}}for(var r=0,s;r<e.length;r++)s=e[r],s&&typeof s.then=="function"?s.then(o(r),n):i[r]=s;a||t(i)})};P.race=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.race().");return new P(function(t,n){for(var i=0,a;i<e.length;i++)a=e[i],a&&typeof a.then=="function"?a.then(t,n):t(a)})};P.resolve=function(e){return e&&ne(e)==="object"&&e.constructor===P?e:new P(function(t){t(e)})};P.reject=function(e){return new P(function(t,n){n(e)})};var X={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function _n(e){if(!(!e||!Pe)){var t=j.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=j.head.childNodes,i=null,a=n.length-1;a>-1;a--){var o=n[a],r=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(r)>-1&&(i=o)}return j.head.insertBefore(t,i),e}}var Mn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ve(){for(var e=12,t="";e-- >0;)t+=Mn[Math.random()*62|0];return t}function St(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function zn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(St(e[n]),'" ')},"").trim()}function Vt(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n],";")},"")}function Ht(e){return e.size!==X.size||e.x!==X.x||e.y!==X.y||e.rotate!==X.rotate||e.flipX||e.flipY}function Pt(e){var t=e.transform,n=e.containerWidth,i=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),r="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(r," ").concat(s)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:a,inner:l,path:c}}var Ce={x:0,y:0,width:"100%",height:"100%"};function nt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ln(e){return e.tag==="g"?e.children:[e]}function An(e){var t=e.children,n=e.attributes,i=e.main,a=e.mask,o=e.maskId,r=e.transform,s=i.width,l=i.icon,c=a.width,y=a.icon,u=Pt({transform:r,containerWidth:c,iconWidth:s}),k={tag:"rect",attributes:b({},Ce,{fill:"white"})},m=l.children?{children:l.children.map(nt)}:{},d={tag:"g",attributes:b({},u.inner),children:[nt(b({tag:l.tag,attributes:b({},l.attributes,u.path)},m))]},h={tag:"g",attributes:b({},u.outer),children:[d]},g="mask-".concat(o||ve()),w="clip-".concat(o||ve()),M={tag:"mask",attributes:b({},Ce,{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,h]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:Ln(y)},M]};return t.push(I,{tag:"rect",attributes:b({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(g,")")},Ce)}),{children:t,attributes:n}}function jn(e){var t=e.children,n=e.attributes,i=e.main,a=e.transform,o=e.styles,r=Vt(o);if(r.length>0&&(n.style=r),Ht(a)){var s=Pt({transform:a,containerWidth:i.width,iconWidth:i.width});t.push({tag:"g",attributes:b({},s.outer),children:[{tag:"g",attributes:b({},s.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:b({},i.icon.attributes,s.path)}]}]})}else t.push(i.icon);return{children:t,attributes:n}}function En(e){var t=e.children,n=e.main,i=e.mask,a=e.attributes,o=e.styles,r=e.transform;if(Ht(r)&&n.found&&!i.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Vt(b({},o,{"transform-origin":"".concat(c.x+r.x/16,"em ").concat(c.y+r.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Sn(e){var t=e.prefix,n=e.iconName,i=e.children,a=e.attributes,o=e.symbol,r=o===!0?"".concat(t,"-").concat(V.familyPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:b({},a,{id:r}),children:i}]}]}function Vn(e){var t=e.icons,n=t.main,i=t.mask,a=e.prefix,o=e.iconName,r=e.transform,s=e.symbol,l=e.title,c=e.maskId,y=e.titleId,u=e.extra,k=e.watchable,m=k===void 0?!1:k,d=i.found?i:n,h=d.width,g=d.height,w=a==="fak",M=w?"":"fa-w-".concat(Math.ceil(h/g*16)),I=[V.replacementClass,o?"".concat(V.familyPrefix,"-").concat(o):"",M].filter(function(B){return u.classes.indexOf(B)===-1}).filter(function(B){return B!==""||!!B}).concat(u.classes).join(" "),v={children:[],attributes:b({},u.attributes,{"data-prefix":a,"data-icon":o,class:I,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(g)})},_=w&&!~u.classes.indexOf("fa-fw")?{width:"".concat(h/g*16*.0625,"em")}:{};m&&(v.attributes[un]=""),l&&v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(y||ve())},children:[l]});var f=b({},v,{prefix:a,iconName:o,main:n,mask:i,maskId:c,transform:r,symbol:s,styles:b({},_,u.styles)}),z=i.found&&n.found?An(f):jn(f),H=z.children,E=z.attributes;return f.children=H,f.attributes=E,s?Sn(f):En(f)}var it=function(){};V.measurePerformance&&fe&&fe.mark&&fe.measure;var Hn=function(t,n){return function(i,a,o,r){return t.call(n,i,a,o,r)}},Ie=function(t,n,i,a){var o=Object.keys(t),r=o.length,s=a!==void 0?Hn(n,a):n,l,c,y;for(i===void 0?(l=1,y=t[o[0]]):(l=0,y=i);l<r;l++)c=o[l],y=s(y,t[c],c,t);return y};function Tt(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,a=i===void 0?!1:i,o=Object.keys(t).reduce(function(r,s){var l=t[s],c=!!l.icon;return c?r[l.iconName]=l.icon:r[s]=l,r},{});typeof R.hooks.addPack=="function"&&!a?R.hooks.addPack(e,o):R.styles[e]=b({},R.styles[e]||{},o),e==="fas"&&Tt("fa",t)}var at=R.styles,Pn=R.shims,Ot=function(){var t=function(a){return Ie(at,function(o,r,s){return o[s]=Ie(r,a,{}),o},{})};t(function(i,a,o){return a[3]&&(i[a[3]]=o),i}),t(function(i,a,o){var r=a[2];return i[o]=o,r.forEach(function(s){i[s]=o}),i});var n="far"in at;Ie(Pn,function(i,a){var o=a[0],r=a[1],s=a[2];return r==="far"&&!n&&(r="fas"),i[o]={prefix:r,iconName:s},i},{})};Ot();R.styles;function rt(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}function Nt(e){var t=e.tag,n=e.attributes,i=n===void 0?{}:n,a=e.children,o=a===void 0?[]:a;return typeof e=="string"?St(e):"<".concat(t," ").concat(zn(i),">").concat(o.map(Nt).join(""),"</").concat(t,">")}var Tn=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce(function(i,a){var o=a.toLowerCase().split("-"),r=o[0],s=o.slice(1).join("-");if(r&&s==="h")return i.flipX=!0,i;if(r&&s==="v")return i.flipY=!0,i;if(s=parseFloat(s),isNaN(s))return i;switch(r){case"grow":i.size=i.size+s;break;case"shrink":i.size=i.size-s;break;case"left":i.x=i.x-s;break;case"right":i.x=i.x+s;break;case"up":i.y=i.y-s;break;case"down":i.y=i.y+s;break;case"rotate":i.rotate=i.rotate+s;break}return i},n):n};function Se(e){this.name="MissingIcon",this.message=e||"Icon unavailable",this.stack=new Error().stack}Se.prototype=Object.create(Error.prototype);Se.prototype.constructor=Se;var we={fill:"currentColor"},Rt={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};b({},we,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var Ne=b({},Rt,{attributeName:"opacity"});b({},we,{cx:"256",cy:"364",r:"28"}),b({},Rt,{attributeName:"r",values:"28;14;28;28;14;28;"}),b({},Ne,{values:"1;0;1;1;0;1;"});b({},we,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),b({},Ne,{values:"1;0;0;0;0;1;"});b({},we,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),b({},Ne,{values:"0;0;1;1;0;0;"});R.styles;function ot(e){var t=e[0],n=e[1],i=e.slice(4),a=wt(i,1),o=a[0],r=null;return Array.isArray(o)?r={tag:"g",attributes:{class:"".concat(V.familyPrefix,"-").concat(xe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(V.familyPrefix,"-").concat(xe.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(V.familyPrefix,"-").concat(xe.PRIMARY),fill:"currentColor",d:o[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:r}}R.styles;var On=`svg:not(:root).svg-inline--fa {
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
}`;function Nn(){var e=Ct,t=It,n=V.familyPrefix,i=V.replacementClass,a=On;if(n!==e||i!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),r=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(o,".".concat(n,"-")).replace(r,"--".concat(n,"-")).replace(s,".".concat(i))}return a}var Rn=function(){function e(){nn(this,e),this.definitions={}}return an(e,[{key:"add",value:function(){for(var n=this,i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];var r=a.reduce(this._pullDefinitions,{});Object.keys(r).forEach(function(s){n.definitions[s]=b({},n.definitions[s]||{},r[s]),Tt(s,r[s]),Ot()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var a=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(a).map(function(o){var r=a[o],s=r.prefix,l=r.iconName,c=r.icon;n[s]||(n[s]={}),n[s][l]=c}),n}}]),e}();function Fn(){V.autoAddCss&&!st&&(_n(Nn()),st=!0)}function Dn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(i){return Nt(i)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Pe){var i=j.createElement("div");return i.innerHTML=e.html,i.children}}}),e}function Ve(e){var t=e.prefix,n=t===void 0?"fa":t,i=e.iconName;if(!!i)return rt(Un.definitions,n,i)||rt(R.styles,n,i)}function Wn(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(t||{}).icon?t:Ve(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Ve(a||{})),e(i,b({},n,{mask:a}))}}var Un=new Rn,st=!1,Bn={transform:function(t){return Tn(t)}},qn=Wn(function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,i=n===void 0?X:n,a=t.symbol,o=a===void 0?!1:a,r=t.mask,s=r===void 0?null:r,l=t.maskId,c=l===void 0?null:l,y=t.title,u=y===void 0?null:y,k=t.titleId,m=k===void 0?null:k,d=t.classes,h=d===void 0?[]:d,g=t.attributes,w=g===void 0?{}:g,M=t.styles,I=M===void 0?{}:M;if(!!e){var v=e.prefix,_=e.iconName,f=e.icon;return Dn(b({type:"icon"},e),function(){return Fn(),V.autoA11y&&(u?w["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(m||ve()):(w["aria-hidden"]="true",w.focusable="false")),Vn({icons:{main:ot(f),mask:s?ot(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:v,iconName:_,transform:b({},X,i),symbol:o,title:u,maskId:c,titleId:m,extra:{attributes:w,styles:I,classes:h}})})}});function lt(e){if(e===null||typeof e=="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2){const[t,n]=e;return{prefix:t,iconName:n}}if(typeof e=="string")return{prefix:"fas",iconName:e}}function Gn(e){let t,n;return{c(){t=new Zt(!1),n=Yt(),t.a=n},m(i,a){t.m(e[0],i,a),U(i,n,a)},p(i,[a]){a&1&&t.p(i[0])},i:S,o:S,d(i){i&&W(n),i&&t.d()}}}function Yn(e,t,n){let i,a,{border:o=!1}=t,{fixedWidth:r=!1}=t,{flip:s=null}=t,{icon:l=null}=t,{mask:c=null}=t,{listItem:y=!1}=t,{pull:u=null}=t,{pulse:k=!1}=t,{rotation:m=null}=t,{swapOpacity:d=!1}=t,{size:h=null}=t,{spin:g=!1}=t,{transform:w={}}=t,{symbol:M=!1}=t,{title:I=null}=t,{inverse:v=!1}=t,_="";return Qt(()=>{const f=lt(l);if(!f)return;const z=Ve(f),H=qn(z||l,{symbol:M,title:I,styles:t.style?a:{},classes:[...Object.keys(i).map(E=>i[E]?E:null).filter(E=>!!E),(t.class||"").split(" ")],transform:{...typeof w=="string"?Bn.transform(w):w},mask:lt(c)});if(!H){console.warn("Could not find one or more icon(s)",z||l,c);return}n(0,_=H.html)}),e.$$set=f=>{n(19,t=Ge(Ge({},t),Ze(f))),"border"in f&&n(1,o=f.border),"fixedWidth"in f&&n(2,r=f.fixedWidth),"flip"in f&&n(3,s=f.flip),"icon"in f&&n(4,l=f.icon),"mask"in f&&n(5,c=f.mask),"listItem"in f&&n(6,y=f.listItem),"pull"in f&&n(7,u=f.pull),"pulse"in f&&n(8,k=f.pulse),"rotation"in f&&n(9,m=f.rotation),"swapOpacity"in f&&n(10,d=f.swapOpacity),"size"in f&&n(11,h=f.size),"spin"in f&&n(12,g=f.spin),"transform"in f&&n(13,w=f.transform),"symbol"in f&&n(14,M=f.symbol),"title"in f&&n(15,I=f.title),"inverse"in f&&n(16,v=f.inverse)},e.$$.update=()=>{e.$$.dirty&73678&&(i={"fa-spin":g,"fa-pulse":k,"fa-fw":r,"fa-border":o,"fa-li":y,"fa-inverse":v,"fa-flip-horizontal":["both","horizontal"].includes(s),"fa-flip-vertical":["both","vertical"].includes(s),[`fa-${h}`]:h!==null,[`fa-rotate-${m}`]:m!==null,[`fa-pull-${u}`]:u!==null,"fa-swap-opacity":d}),a=(t.style||"").split(";").filter(f=>!!f).map(f=>f.split(":").map(z=>z.trim())).reduce((f,z)=>{const[H,E]=z;return f[H]=E,f},{})},t=Ze(t),[_,o,r,s,l,c,y,u,k,m,d,h,g,w,M,I,v]}class Ft extends se{constructor(t){super(),oe(this,t,Yn,Gn,J,{border:1,fixedWidth:2,flip:3,icon:4,mask:5,listItem:6,pull:7,pulse:8,rotation:9,swapOpacity:10,size:11,spin:12,transform:13,symbol:14,title:15,inverse:16})}}const Y=[];function Xn(e,t=S){let n;const i=new Set;function a(s){if(J(e,s)&&(e=s,n)){const l=!Y.length;for(const c of i)c[1](),Y.push(c,e);if(l){for(let c=0;c<Y.length;c+=2)Y[c][0](Y[c+1]);Y.length=0}}}function o(s){a(s(e))}function r(s,l=S){const c=[s,l];return i.add(c),i.size===1&&(n=t(a)||S),s(e),()=>{i.delete(c),i.size===0&&(n(),n=null)}}return{set:a,update:o,subscribe:r}}function Zn(){const{subscribe:e,set:t}=Xn(null);return{subscribe:e,setProject(n){t(n)}}}const be=Zn();function Jn(e){var w,M,I;let t,n,i,a,o,r,s=((w=e[0])==null?void 0:w.title)+"",l,c,y,u,k=((M=e[0])==null?void 0:M.brief)+"",m,d,h,g;return a=new Ft({props:{icon:(I=e[0])==null?void 0:I.icon}}),{c(){t=x("li"),n=x("button"),i=x("div"),re(a.$$.fragment),o=T(),r=x("span"),l=G(s),c=T(),y=x("div"),u=x("span"),m=G(k),C(r,"class","title"),C(i,"class","title-section"),C(u,"class","brief")},m(v,_){U(v,t,_),p(t,n),p(n,i),Q(a,i,null),p(i,o),p(i,r),p(r,l),p(n,c),p(n,y),p(y,u),p(u,m),d=!0,h||(g=bt(n,"click",e[1]),h=!0)},p(v,[_]){var z,H,E;const f={};_&1&&(f.icon=(z=v[0])==null?void 0:z.icon),a.$set(f),(!d||_&1)&&s!==(s=((H=v[0])==null?void 0:H.title)+"")&&he(l,s),(!d||_&1)&&k!==(k=((E=v[0])==null?void 0:E.brief)+"")&&he(m,k)},i(v){d||(A(a.$$.fragment,v),d=!0)},o(v){O(a.$$.fragment,v),d=!1},d(v){v&&W(t),K(a),h=!1,g()}}}function Qn(e,t,n){let{project:i}=t;const a=()=>{be.setProject(i)};return e.$$set=o=>{"project"in o&&n(0,i=o.project)},[i,a]}class Kn extends se{constructor(t){super(),oe(this,t,Qn,Jn,J,{project:0})}}function $n(e,{root:t=null,rootMargin:n="0px 0px 0px 0px",threshold:i=0}={}){if(window&&"IntersectionObserver"in window){const a=new IntersectionObserver(o=>{o.forEach(r=>{if(r.isIntersecting){const s=r.target;s.dataset.src&&(s.src=s.dataset.src),s.dataset.srcset&&(s.srcset=s.dataset.srcset),a.unobserve(s)}})},{root:t,rootMargin:n,threshold:i});return a.observe(e),{destroy(){a&&a.unobserve(e)}}}}function ei(e){var E,B,Re;let t,n,i,a,o,r=((E=e[0])==null?void 0:E.title)+"",s,l,c,y,u,k=((B=e[0])==null?void 0:B.description)+"",m,d,h,g,w,M,I,v,_,f,z,H;return c=new Ft({props:{icon:(Re=e[0])==null?void 0:Re.icon}}),{c(){var L,N;t=x("div"),n=x("button"),n.textContent="\u21D0",i=T(),a=x("div"),o=x("h3"),s=G(r),l=T(),re(c.$$.fragment),y=T(),u=x("p"),m=G(k),d=T(),h=x("a"),g=G("(Link)"),M=T(),I=x("div"),v=x("img"),C(a,"class","focused-title-section"),C(h,"href",w=(L=e[0])==null?void 0:L.link),C(h,"rel","noreferrer"),C(h,"target","_blank"),Xe(v.src,_=(N=e[0])==null?void 0:N.image)||C(v,"src",_),C(v,"alt","The project"),C(I,"class","project-image-container"),C(t,"class","details")},m(L,N){U(L,t,N),p(t,n),p(t,i),p(t,a),p(a,o),p(o,s),p(a,l),Q(c,a,null),p(t,y),p(t,u),p(u,m),p(t,d),p(t,h),p(h,g),p(t,M),p(t,I),p(I,v),f=!0,z||(H=[bt(n,"click",e[1]),Bt($n.call(null,v))],z=!0)},p(L,[N]){var De,We,Ue,Be,qe;(!f||N&1)&&r!==(r=((De=L[0])==null?void 0:De.title)+"")&&he(s,r);const Fe={};N&1&&(Fe.icon=(We=L[0])==null?void 0:We.icon),c.$set(Fe),(!f||N&1)&&k!==(k=((Ue=L[0])==null?void 0:Ue.description)+"")&&he(m,k),(!f||N&1&&w!==(w=(Be=L[0])==null?void 0:Be.link))&&C(h,"href",w),(!f||N&1&&!Xe(v.src,_=(qe=L[0])==null?void 0:qe.image))&&C(v,"src",_)},i(L){f||(A(c.$$.fragment,L),f=!0)},o(L){O(c.$$.fragment,L),f=!1},d(L){L&&W(t),K(c),z=!1,Z(H)}}}function ti(e,t,n){let i;vt(e,be,o=>n(0,i=o));function a(){be.setProject(null)}return[i,a]}class ni extends se{constructor(t){super(),oe(this,t,ti,ei,J,{})}}function ii(e){let t;return{c(){t=x("div"),t.innerHTML=`<ul class="soc"><li><a class="soc-linkedin" target="_blank" href="http://linkedin.com/in/kyle-hovey" rel="noreferrer"><span>My Linkedin</span></a></li> 
    <li><a class="soc-github soc-icon-last" target="_blank" href="http://github.com/kylehovey" rel="noreferrer"><span>My GitHub</span></a></li></ul> 
  <div class="links"><a href="https://github.com/kylehovey/resume/raw/master/kyle_hovey_resume.pdf">Resume</a> 
    <span class="divider">|</span> 
    <a href="blog">Blog</a> 
    <span class="divider">|</span> 
    <a href="MATH_5620">Math 5620</a> 
    <span class="divider">|</span> 
    <a href="https://kylehovey-resolutions.vercel.app" target="_blank" rel="noreferrer">Resolutions</a></div>`,C(t,"class","bottom-bar")},m(n,i){U(n,t,i)},p:S,i:S,o:S,d(n){n&&W(t)}}}class ai extends se{constructor(t){super(),oe(this,t,null,ii,J,{})}}/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var ri={prefix:"fas",iconName:"arrow-rotate-left",icon:[512,512,[8634,"arrow-left-rotate","arrow-rotate-back","arrow-rotate-backward","undo"],"f0e2","M480 256c0 123.4-100.5 223.9-223.9 223.9c-48.86 0-95.19-15.58-134.2-44.86c-14.14-10.59-17-30.66-6.391-44.81c10.61-14.09 30.69-16.97 44.8-6.375c27.84 20.91 61 31.94 95.89 31.94C344.3 415.8 416 344.1 416 256s-71.67-159.8-159.8-159.8C205.9 96.22 158.6 120.3 128.6 160H192c17.67 0 32 14.31 32 32S209.7 224 192 224H48c-17.67 0-32-14.31-32-32V48c0-17.69 14.33-32 32-32s32 14.31 32 32v70.23C122.1 64.58 186.1 32.11 256.1 32.11C379.5 32.11 480 132.6 480 256z"]},oi=ri,si={prefix:"fas",iconName:"calculator",icon:[384,512,[128425],"f1ec","M336 0h-288C22.38 0 0 22.38 0 48v416C0 489.6 22.38 512 48 512h288c25.62 0 48-22.38 48-48v-416C384 22.38 361.6 0 336 0zM64 208C64 199.2 71.2 192 80 192h32C120.8 192 128 199.2 128 208v32C128 248.8 120.8 256 112 256h-32C71.2 256 64 248.8 64 240V208zM64 304C64 295.2 71.2 288 80 288h32C120.8 288 128 295.2 128 304v32C128 344.8 120.8 352 112 352h-32C71.2 352 64 344.8 64 336V304zM224 432c0 8.801-7.199 16-16 16h-128C71.2 448 64 440.8 64 432v-32C64 391.2 71.2 384 80 384h128c8.801 0 16 7.199 16 16V432zM224 336c0 8.801-7.199 16-16 16h-32C167.2 352 160 344.8 160 336v-32C160 295.2 167.2 288 176 288h32C216.8 288 224 295.2 224 304V336zM224 240C224 248.8 216.8 256 208 256h-32C167.2 256 160 248.8 160 240v-32C160 199.2 167.2 192 176 192h32C216.8 192 224 199.2 224 208V240zM320 432c0 8.801-7.199 16-16 16h-32c-8.799 0-16-7.199-16-16v-32c0-8.801 7.201-16 16-16h32c8.801 0 16 7.199 16 16V432zM320 336c0 8.801-7.199 16-16 16h-32c-8.799 0-16-7.199-16-16v-32C256 295.2 263.2 288 272 288h32C312.8 288 320 295.2 320 304V336zM320 240C320 248.8 312.8 256 304 256h-32C263.2 256 256 248.8 256 240v-32C256 199.2 263.2 192 272 192h32C312.8 192 320 199.2 320 208V240zM320 144C320 152.8 312.8 160 304 160h-224C71.2 160 64 152.8 64 144v-64C64 71.2 71.2 64 80 64h224C312.8 64 320 71.2 320 80V144z"]},li={prefix:"fas",iconName:"car",icon:[512,512,[128664,"automobile"],"f1b9","M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"]},ci={prefix:"fas",iconName:"chess-board",icon:[448,512,[],"f43c","M192 224H128v64h64V224zM384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM384 160h-64v64h64v64h-64v64h64v64h-64v-64h-64v64H192v-64H128v64H64v-64h64V288H64V224h64V160H64V96h64v64h64V96h64v64h64V96h64V160zM192 288v64h64V288H192zM256 224V160H192v64H256zM256 288h64V224h-64V288z"]},fi={prefix:"fas",iconName:"cubes",icon:[576,512,[],"f1b3","M172.1 40.16L268.1 3.76C280.9-1.089 295.1-1.089 307.9 3.76L403.9 40.16C425.6 48.41 440 69.25 440 92.52V204.7C441.3 205.1 442.6 205.5 443.9 205.1L539.9 242.4C561.6 250.6 576 271.5 576 294.7V413.9C576 436.1 562.9 456.2 542.5 465.1L446.5 507.3C432.2 513.7 415.8 513.7 401.5 507.3L288 457.5L174.5 507.3C160.2 513.7 143.8 513.7 129.5 507.3L33.46 465.1C13.13 456.2 0 436.1 0 413.9V294.7C0 271.5 14.39 250.6 36.15 242.4L132.1 205.1C133.4 205.5 134.7 205.1 136 204.7V92.52C136 69.25 150.4 48.41 172.1 40.16V40.16zM290.8 48.64C289 47.95 286.1 47.95 285.2 48.64L206.8 78.35L287.1 109.5L369.2 78.35L290.8 48.64zM392 210.6V121L309.6 152.6V241.8L392 210.6zM154.8 250.9C153 250.2 150.1 250.2 149.2 250.9L70.81 280.6L152 311.7L233.2 280.6L154.8 250.9zM173.6 455.3L256 419.1V323.2L173.6 354.8V455.3zM342.8 280.6L424 311.7L505.2 280.6L426.8 250.9C425 250.2 422.1 250.2 421.2 250.9L342.8 280.6zM528 413.9V323.2L445.6 354.8V455.3L523.2 421.2C526.1 419.9 528 417.1 528 413.9V413.9z"]},ui={prefix:"fas",iconName:"diagram-project",icon:[576,512,["project-diagram"],"f542","M0 80C0 53.49 21.49 32 48 32H144C170.5 32 192 53.49 192 80V96H384V80C384 53.49 405.5 32 432 32H528C554.5 32 576 53.49 576 80V176C576 202.5 554.5 224 528 224H432C405.5 224 384 202.5 384 176V160H192V176C192 177.7 191.9 179.4 191.7 180.1L272 288H368C394.5 288 416 309.5 416 336V432C416 458.5 394.5 480 368 480H272C245.5 480 224 458.5 224 432V336C224 334.3 224.1 332.6 224.3 331L144 224H48C21.49 224 0 202.5 0 176V80z"]},di=ui,hi={prefix:"fas",iconName:"fire",icon:[448,512,[128293],"f06d","M323.5 51.25C302.8 70.5 284 90.75 267.4 111.1C240.1 73.62 206.2 35.5 168 0C69.75 91.12 0 210 0 281.6C0 408.9 100.2 512 224 512s224-103.1 224-230.4C448 228.4 396 118.5 323.5 51.25zM304.1 391.9C282.4 407 255.8 416 226.9 416c-72.13 0-130.9-47.73-130.9-125.2c0-38.63 24.24-72.64 72.74-130.8c7 8 98.88 125.4 98.88 125.4l58.63-66.88c4.125 6.75 7.867 13.52 11.24 19.9C364.9 290.6 353.4 357.4 304.1 391.9z"]},mi={prefix:"fas",iconName:"microchip",icon:[512,512,[],"f2db","M160 352h192V160H160V352zM448 176h48C504.8 176 512 168.8 512 160s-7.162-16-16-16H448V128c0-35.35-28.65-64-64-64h-16V16C368 7.164 360.8 0 352 0c-8.836 0-16 7.164-16 16V64h-64V16C272 7.164 264.8 0 256 0C247.2 0 240 7.164 240 16V64h-64V16C176 7.164 168.8 0 160 0C151.2 0 144 7.164 144 16V64H128C92.65 64 64 92.65 64 128v16H16C7.164 144 0 151.2 0 160s7.164 16 16 16H64v64H16C7.164 240 0 247.2 0 256s7.164 16 16 16H64v64H16C7.164 336 0 343.2 0 352s7.164 16 16 16H64V384c0 35.35 28.65 64 64 64h16v48C144 504.8 151.2 512 160 512c8.838 0 16-7.164 16-16V448h64v48c0 8.836 7.164 16 16 16c8.838 0 16-7.164 16-16V448h64v48c0 8.836 7.164 16 16 16c8.838 0 16-7.164 16-16V448H384c35.35 0 64-28.65 64-64v-16h48c8.838 0 16-7.164 16-16s-7.162-16-16-16H448v-64h48C504.8 272 512 264.8 512 256s-7.162-16-16-16H448V176zM384 368c0 8.836-7.162 16-16 16h-224C135.2 384 128 376.8 128 368v-224C128 135.2 135.2 128 144 128h224C376.8 128 384 135.2 384 144V368z"]},gi={prefix:"fas",iconName:"person-hiking",icon:[384,512,["hiking"],"f6ec","M240 96c26.5 0 48-21.5 48-48S266.5 0 240 0C213.5 0 192 21.5 192 48S213.5 96 240 96zM80.01 287.1c7.31 0 13.97-4.762 15.87-11.86L137 117c.3468-1.291 .5125-2.588 .5125-3.866c0-7.011-4.986-13.44-12.39-15.13C118.4 96.38 111.7 95.6 105.1 95.6c-36.65 0-70 23.84-79.32 59.53L.5119 253.3C.1636 254.6-.0025 255.9-.0025 257.2c0 7.003 4.961 13.42 12.36 15.11L76.01 287.5C77.35 287.8 78.69 287.1 80.01 287.1zM368 160h-15.1c-8.875 0-15.1 7.125-15.1 16V192h-34.75l-46.75-46.75C243.4 134.1 228.6 128 212.9 128C185.9 128 162.5 146.3 155.9 172.5L129 280.3C128.4 282.8 128 285.5 128 288.1c0 8.325 3.265 16.44 9.354 22.53l86.62 86.63V480c0 17.62 14.37 32 31.1 32s32-14.38 32-32v-82.75c0-17.12-6.625-33.13-18.75-45.25l-46.87-46.88c.25-.5 .5-.875 .625-1.375l19.1-79.5l22.37 22.38C271.4 252.6 279.5 256 288 256h47.1v240c0 8.875 7.125 16 15.1 16h15.1C376.9 512 384 504.9 384 496v-320C384 167.1 376.9 160 368 160zM81.01 472.3c-.672 2.63-.993 5.267-.993 7.86c0 14.29 9.749 27.29 24.24 30.89C106.9 511.8 109.5 512 112 512c14.37 0 27.37-9.75 30.1-24.25l25.25-101l-52.75-52.75L81.01 472.3z"]},pi=gi,vi={prefix:"fas",iconName:"tree",icon:[448,512,[127794],"f1bb","M413.8 447.1L256 448l0 31.99C256 497.7 241.8 512 224.1 512c-17.67 0-32.1-14.32-32.1-31.99l0-31.99l-158.9-.0099c-28.5 0-43.69-34.49-24.69-56.4l68.98-79.59H62.22c-25.41 0-39.15-29.8-22.67-49.13l60.41-70.85H89.21c-21.28 0-32.87-22.5-19.28-37.31l134.8-146.5c10.4-11.3 28.22-11.3 38.62-.0033l134.9 146.5c13.62 14.81 2.001 37.31-19.28 37.31h-10.77l60.35 70.86c16.46 19.34 2.716 49.12-22.68 49.12h-15.2l68.98 79.59C458.7 413.7 443.1 447.1 413.8 447.1z"]},bi={prefix:"fas",iconName:"wave-square",icon:[640,512,[],"f83e","M476 480h-152c-19.88 0-36-16.12-36-36v-348H192v156c0 19.88-16.12 36-36 36H31.1C14.33 288 0 273.7 0 256s14.33-31.1 31.1-31.1H128v-156c0-19.88 16.12-36 36-36h152c19.88 0 36 16.12 36 36v348h96v-156c0-19.88 16.12-36 36-36h124C625.7 224 640 238.3 640 256s-14.33 32-31.1 32H512v156C512 463.9 495.9 480 476 480z"]},yi={prefix:"fas",iconName:"wind",icon:[512,512,[],"f72e","M32 192h320c52.94 0 96-43.06 96-96s-43.06-96-96-96h-32c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c17.66 0 32 14.34 32 32s-14.34 32-32 32H32C14.31 128 0 142.3 0 160S14.31 192 32 192zM160 320H32c-17.69 0-32 14.31-32 32s14.31 32 32 32h128c17.66 0 32 14.34 32 32s-14.34 32-32 32H128c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c52.94 0 96-43.06 96-96S212.9 320 160 320zM416 224H32C14.31 224 0 238.3 0 256s14.31 32 32 32h384c17.66 0 32 14.34 32 32s-14.34 32-32 32h-32c-17.69 0-32 14.31-32 32s14.31 32 32 32h32c52.94 0 96-43.06 96-96S468.9 224 416 224z"]};const wi="images/projects/cal_sim.png",ki="images/projects/myst_net.png",xi="images/projects/fireplace.png",Ci="images/projects/euler_golf.png",Ii="images/projects/shader_toy.png",_i="images/projects/vector_wind.png",Mi="images/projects/fiery_furnace.png",zi="images/projects/8_bit_spaghetti.png",Li="images/projects/acoustic-forest.png",Ai="images/projects/station_analysis.png",ji="images/projects/villein_translator.png",Ei="images/projects/automata_exploration.png",ct=[{title:"Automata Browser",icon:ci,image:Ei,year:"2020",brief:"Global map of all life-like Cellular Automata",description:"I was researching emergent complexity in cellular automata and found a classification scheme for all quarter million life-like automata. The embedding compresses all of the rules into a nebula of points where distance between any two points provides a decent approximation of how simililarly the rules behave given a random initial board state. I built this browser with React so that I could better explore the dataset.",link:"/automata-nebula-explorer/index.html"},{title:"Fiery Furnace",icon:pi,image:Mi,year:"2020",brief:"Interactive map of the Fiery Furnace in Arches National Park",description:"Pre-pandemic, my partner Hannah and I took a trip down to Arches National Park in Utah. The highlight was exploring the Fiery Furnace: a labrynth of ancient sandstone with no main trail, only meandering boulder routes and washes. I exported the route data (recorded with my watch) and interpolated photo time-stamps with location time-stamps to create an interactive map of our path with pictures along the way using Mapbox.",link:"/FieryFurnace/index.html"},{title:"Shader Toy",icon:fi,image:Ii,year:"2020",brief:"Various shaders written by me",description:"I have been having a lot of fun learning how to write shaders. GLSL seemed like an intimidating topic at first, but once I realized it was essentially a very parrellized graphing calculator I started having a lot of fun and have been picking up some more techniques. As of writing this, I have worked with Ray Marching, Conformal Mapping, and 2D interference patterns.",link:"https://www.shadertoy.com/user/kylehovey"},{title:"Myst Net",icon:di,image:ki,year:"2019",brief:"Neural Net for parsing D'ni numerals",description:"This was my last hackathon project. The D'ni numeral system is from the world of Myst, a game series that I am a very large fan of. The system is base-25, and has a rotational glyph system with a base-5 sub-pattern. I wanted to see if I could reproduce the MNIST convnet example using D'ni numbers. To generate training data, I wrote the segments in isolation and created a script to produce combinatorial sets of the individual segments I created. In the end, the network had over 99% validation accuracy and responded well to novel handwritten D'ni digits.",link:"https://github.com/kylehovey/myst-net"},{title:"Vector Wind",icon:yi,image:_i,year:"2017",brief:"Vector field visualization tool",description:"I was inspired by a Reddit post that used HTML Canvas to create a beautiful vector field visualization. Unfortunately, the poster did not release their source code, so I decided to make my own version. Vector fields are entered by typing in a Javascript function that takes two inputs (x,y) and returns a two-element array. The result is visualized by creating particles that get pushed around in the field like dust in the wind. The source code can be found on my GitHub.",link:"vectorwind/index.html"},{title:"CALSim",icon:bi,image:wi,year:"2016",brief:"In-browser WireWorld cellular automata simulator",description:"This is a WireWorld Cellular Automata simulator written in JavaScript. WireWorld is a CA capable of logic simulation. In fact, it is Turing Complete! This in-browser interpreter allows you to create structures, copy, paste, delete, and pause/play/step simulations.",link:"CALSim/index.html"},{title:"Villein Translator",icon:si,image:ji,year:"2016",brief:"Translator for Obduction's Villein numbers",description:`In Cyan's new game Obduction there is an alien race called the Villeins. Part of the game is figuring out their numbering system, which uses a three-by-three grid on which five "digits" can lie. The whole system is base-4, and I had a bunch of fun figuring it out. I wanted to create a translator to quickly verify numbers, so I made one husing the html5 canvas.`,link:"Villein/index.html"},{title:"Euler Golf",icon:oi,image:Ci,year:"2015",brief:"Recursive puzzle involving complex numbers",description:"When I was attending Cuesta College in San Luis Obispo, I had an idea for a game over the Gaussian Integers (complex numbers of the form a+bi where a and b are both integers). I quickly found that the game was evil in difficulty, and as I shared it with friends I also learned that it was not just me. In light of this newfound challenge, I created an in-browser version as a Hackathon project. More info can be found on the site.",link:"EulerGolf/index.html"},{title:"Station Report",icon:li,image:Ai,year:"2018",brief:"Analysis to find the best spots for new EV chargers",description:"In Utah, where the air is bad enough each winter to take years off of the average person's life expectancy, electric vehicle adoption is one of the many solutions to our air quality. At the Utah Power and Electronics Lab (UPEL), I helped Rocky Mountain Power determine where to place/fund new electric vehicle charging stations in Utah. We worked with the Utah Department of Transportation to combine traffic information, as well as network analysis on the roadways to find the locations that would have the highest impact for EV adoption. This interactive report summarizes the findings of the analysis and visualizes what corridors are affected.",link:"stationReport/index.html"},{title:"8-Bit Spaghetti",icon:mi,image:zi,year:"2012",brief:"8-Bit Computer designed from the ground up",description:'One fateful night of playing Minecraft with my best friend and I was convinced that I had to learn more about the inner workings of a CPU. We had just installed a mod that added basic digital components to the game, and my friend was constructing a processor. I knew nothing about architecture at that point, but I wanted to learn more. I began my journey reading "Digitial Computer Electronics" by Malvino and started constructing the basic modular components of a computer. Eventually I had constructed a processor of my own design. The final product had EM interference which induced signalling issues, but the knowledge I gained benefits me to this day. I made a website and tutorial to aid anyone who wishes to acheive the same goal. I know of a few individuals so far that have used my instructions to build their own CPU.',link:"http://8-bitspaghetti.com"},{title:"Fireplace",icon:hi,image:xi,year:"2016",brief:"Custom simulator written to mimic a campfire",description:"One of my favorite things to do in my free time is to program new patterns for the Adafruit Neopixel shield (a 5x8 RGB LED matrix for the Arduino). Since I camp a lot, I wanted to simulate fire on it with the hopes of creating a calming lantern for my tent. I decided to go with a slightly neural-network inspired approach. I created an ember class that has an internal fire value and a customized sigmoid curve function that will map the embers' fire values to something between 0 and 1. A stoke method adds a random integer in a specified range, and a diminish method multiplies the fire variable by a predetermined constant (0<k<1). I was so happy with the results that I wanted to create an in-browser version. This time, I used HTML5 and JS to create a grid of embers. I shaped the fire on the page by making the range for the random constant that each ember is stoked with depend on the ember's position on the page. Vertically there is a linear gradient, and horizontally there is a gaussian distribution determined by page width.",link:"FirePlace/index.html"},{title:"Acoustic Forest",icon:vi,image:Li,year:"2016",brief:"2D Procedural landscape that is reactive to sound",description:`A natural continuation of my FirePlace project and an ode to John Muir and the mountains, I created Acoustic Forest: a music visualizer that uses procedurally generated terrain with unique elements augmented by distinct frequency bands in a song. I decided to go with Muse's "Exogenesis Symphony Part 3" which I claim absolutely no rights to and will take down at first request of any proprietor's request. I chose the song because it just so happened that Muse's masterful composition consists of a crescendo of increasing layers of elements, then a decrescendo back out. The structure of the song itself is a mountain in shape, which made it perfect to bring in elements slowly, then bring them out in reverse order. Currently this only runs in Chrome/Safari for desktop, so apologies to mobile users. Granted, this was created in Canvas without WebGL, so expect heavy processor usage.`,link:"AcousticForest/index.html"}];function ft(e,t,n){const i=e.slice();return i[1]=t[n],i}function ut(e){let t;return{c(){t=x("div"),t.innerHTML=`<h2>Project Portfolio</h2> 
              <p>Hi! My name is Kyle. I grew up in a small community in the
                Sierra Nevada mountains. In 2019, I graduated Utah State
                University with a BS in Computational Mathematics. My passions
                include mathematics, electrical engineering, programming, music,
                hiking, climbing, and philosophy. Here you can see some
                highlights from my past/current projects. Check out my blog for
                diatribes on math and programming.</p>`},m(n,i){U(n,t,i)},d(n){n&&W(t)}}}function dt(e){let t,n,i=ct,a=[];for(let r=0;r<i.length;r+=1)a[r]=ht(ft(e,i,r));const o=r=>O(a[r],1,1,()=>{a[r]=null});return{c(){t=x("ul");for(let r=0;r<a.length;r+=1)a[r].c();C(t,"class","projects-list")},m(r,s){U(r,t,s);for(let l=0;l<a.length;l+=1)a[l].m(t,null);n=!0},p(r,s){if(s&0){i=ct;let l;for(l=0;l<i.length;l+=1){const c=ft(r,i,l);a[l]?(a[l].p(c,s),A(a[l],1)):(a[l]=ht(c),a[l].c(),A(a[l],1),a[l].m(t,null))}for(ze(),l=i.length;l<a.length;l+=1)o(l);Le()}},i(r){if(!n){for(let s=0;s<i.length;s+=1)A(a[s]);n=!0}},o(r){a=a.filter(Boolean);for(let s=0;s<a.length;s+=1)O(a[s]);n=!1},d(r){r&&W(t),qt(a,r)}}}function ht(e){let t,n;return t=new Kn({props:{project:e[1]}}),{c(){re(t.$$.fragment)},m(i,a){Q(t,i,a),n=!0},p:S,i(i){n||(A(t.$$.fragment,i),n=!0)},o(i){O(t.$$.fragment,i),n=!1},d(i){K(t,i)}}}function mt(e){let t,n;return t=new ni({}),{c(){re(t.$$.fragment)},m(i,a){Q(t,i,a),n=!0},i(i){n||(A(t.$$.fragment,i),n=!0)},o(i){O(t.$$.fragment,i),n=!1},d(i){K(t,i)}}}function Si(e){let t,n,i,a,o,r,s,l,c,y,u,k,m=e[0]===null&&ut(),d=e[0]===null&&dt(e),h=e[0]!==null&&mt();return u=new ai({}),{c(){t=x("main"),n=x("div"),i=x("div"),a=x("div"),o=x("div"),r=x("div"),s=T(),m&&m.c(),l=T(),d&&d.c(),c=T(),h&&h.c(),y=T(),re(u.$$.fragment),C(r,"class","logo"),C(o,"class","description"),C(a,"class","main"),C(i,"class","content"),C(n,"class","container")},m(g,w){U(g,t,w),p(t,n),p(n,i),p(i,a),p(a,o),p(o,r),p(o,s),m&&m.m(o,null),p(a,l),d&&d.m(a,null),p(a,c),h&&h.m(a,null),p(a,y),Q(u,a,null),k=!0},p(g,[w]){g[0]===null?m||(m=ut(),m.c(),m.m(o,null)):m&&(m.d(1),m=null),g[0]===null?d?(d.p(g,w),w&1&&A(d,1)):(d=dt(g),d.c(),A(d,1),d.m(a,c)):d&&(ze(),O(d,1,1,()=>{d=null}),Le()),g[0]!==null?h?w&1&&A(h,1):(h=mt(),h.c(),A(h,1),h.m(a,y)):h&&(ze(),O(h,1,1,()=>{h=null}),Le())},i(g){k||(A(d),A(h),A(u.$$.fragment,g),k=!0)},o(g){O(d),O(h),O(u.$$.fragment,g),k=!1},d(g){g&&W(t),m&&m.d(),d&&d.d(),h&&h.d(),K(u)}}}function Vi(e,t,n){let i;return vt(e,be,a=>n(0,i=a)),[i]}class Hi extends se{constructor(t){super(),oe(this,t,Vi,Si,J,{})}}new Hi({target:document.getElementById("app")});
