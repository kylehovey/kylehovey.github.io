!function(t){function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}var e={};n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=1)}([function(t,n,e){"use strict";function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:127;return n-(15&n)+(15&t)}function a(){return 15&(arguments.length>0&&void 0!==arguments[0]?arguments[0]:255)}function i(t,n){var e=t,r=n,a=0;return e%4==3?(++e,++r,a=2):r%4==3&&(++r,a=1),[e,r,a]}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Uint8ClampedArray;if(2*t.length>=n.length)throw new Error("Not enough data to encode string.");var e=[].concat(function(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)}(n)),a=0,o=function(t){var n=t.charCodeAt(0),o=[240,15].map(function(t){return n&t}),u=c(o,2),f=u[0],l=u[1],s=i(a,a+1),h=c(s,3),d=h[0],v=h[1],g=h[2];e[d]=r(f>>4,e[d]),e[v]=r(l,e[v]),a+=2+g},u=!0,f=!1,l=void 0;try{for(var s,h=t[Symbol.iterator]();!(u=(s=h.next()).done);u=!0){o(s.value)}}catch(t){f=!0,l=t}finally{try{!u&&h.return&&h.return()}finally{if(f)throw l}}return e[a+1]=r(0,e[a+1]),e[a+2]=r(0,e[a+2]),Uint8ClampedArray.from(e)}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}(),c=function(){return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,n){var e=[],r=!0,a=!1,i=void 0;try{for(var o,u=t[Symbol.iterator]();!(r=(o=u.next()).done)&&(e.push(o.value),!n||e.length!==n);r=!0);}catch(t){a=!0,i=t}finally{try{!r&&u.return&&u.return()}finally{if(a)throw i}}return e}(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=function(){function t(n){var e=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this._opts=n;var r=$(this._opts.container),a=c(r,1);this._canvas=a[0],this._canvas.width=this._opts.width,this._canvas.height=this._opts.height,this._ctx=this._canvas.getContext("2d"),this._image=this._getImage(),this._image.then(function(t){return e._ctx.drawImage(t,0,0)})}return u(t,[{key:"_getImage",value:function(){var t=new Image;return t.src=this._opts.src,new Promise(function(n){t.onload=function(){return n(t)}})}},{key:"getImageData",value:function(){var t=this._canvas,n=t.width,e=t.height;return this._ctx.getImageData(0,0,n,e)}},{key:"encodeOntoCanvas",value:function(){var t=function(t){return function(){var n=t.apply(this,arguments);return new Promise(function(t,e){function r(a,i){try{var o=n[a](i),u=o.value}catch(t){return void e(t)}if(!o.done)return Promise.resolve(u).then(function(t){r("next",t)},function(t){r("throw",t)});t(u)}return r("next")})}}(regeneratorRuntime.mark(function t(){var n,e,r,a,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.getImageData(),e=n.data,r=o(i,e),a=new ImageData(r,this._opts.width,this._opts.height),t.next=5,this.render(a);case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"decodeFromCanvas",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Uint8ClampedArray,n="",e=0;e<t.length;){var r=i(e,e+1),o=c(r,3),u=o[0],f=o[1];e+=2+o[2];var l=[t[u],t[f]].map(a),s=c(l,2),h=(s[0]<<4)+s[1];if(0===h)break;n=""+n+String.fromCharCode(h)}return n}(this.getImageData().data)}},{key:"render",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getImageData();this._ctx.putImageData(t,0,0)}}]),t}();n.default=f},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var a=function(){return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,n){var e=[],r=!0,a=!1,i=void 0;try{for(var o,u=t[Symbol.iterator]();!(r=(o=u.next()).done)&&(e.push(o.value),!n||e.length!==n);r=!0);}catch(t){a=!0,i=t}finally{try{!r&&u.return&&u.return()}finally{if(a)throw i}}return e}(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=r(e(2)),o=r(e(0));$(function(){window.app=new i.default,$("#decode").on("click",function(){null!==app.image&&$("#message-output").text(app.image.decodeFromCanvas())}),$("#encode").on("click",function(t){null!==app.image&&app.image.encodeOntoCanvas($("#message-input").val())}),$("#image-upload").on("change",function(t){if("files"in t.target){var n=new FileReader,e=a(t.target.files,1)[0];n.readAsDataURL(e),n.onload=function(t){var n=new Image;n.src=t.target.result,n.onload=function(){app.image=new o.default({src:t.target.result,width:n.width,height:n.height,container:"#image"})}}}})})},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(t){t&&t.__esModule}(e(0));n.default=function t(){!function(n,e){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this),this.image=null}}]);