(()=>{"use strict";var e={507:(e,n,r)=>{function t(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}const o=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,r;return n=e,(r=[{key:"render",value:function(e){var n=document.createElement("h1"),r=document.querySelector("body");n.innerHTML='Webpack is awesome this is "'+e+'"page',r.appendChild(n)}}])&&t(n.prototype,r),e}();function a(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}const l=function(){function e(){var n,r;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),r="hello-world-button",(n="buttonCssClass")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r}var n,r;return n=e,(r=[{key:"render",value:function(){var e=document.createElement("button");e.innerHTML="Hello World",e.classList.add(this.buttonCssClass);var n=document.querySelector("body");e.onclick=function(){var e=document.createElement("p");e.innerHTML="Hello world text",e.classList.add("hello-world-text"),n.appendChild(e)},n.appendChild(e)}}])&&a(n.prototype,r),e}();var i=r(486),u=r.n(i);console.log("production mode"),(new o).render(u().upperFirst("hello world button")),(new l).render()}},n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={id:t,loaded:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=e,r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={726:0},n=[[507,486]],t=()=>{};function o(){for(var t,o=0;o<n.length;o++){for(var a=n[o],l=!0,i=1;i<a.length;i++){var u=a[i];0!==e[u]&&(l=!1)}l&&(n.splice(o--,1),t=r(r.s=a[0]))}return 0===n.length&&(r.x(),r.x=()=>{}),t}r.x=()=>{r.x=()=>{},l=l.slice();for(var e=0;e<l.length;e++)a(l[e]);return(t=o)()};var a=o=>{for(var a,l,[u,c,s,d]=o,f=0,p=[];f<u.length;f++)l=u[f],r.o(e,l)&&e[l]&&p.push(e[l][0]),e[l]=0;for(a in c)r.o(c,a)&&(r.m[a]=c[a]);for(s&&s(r),i(o);p.length;)p.shift()();return d&&n.push.apply(n,d),t()},l=self.webpackChunkwebpack5_tutorial=self.webpackChunkwebpack5_tutorial||[],i=l.push.bind(l);l.push=a})(),r.x()})();