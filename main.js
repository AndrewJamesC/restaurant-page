(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(81),r=n.n(o),c=n(645),a=n.n(c)()(r());a.push([e.id,"\n\n#content {\n\tbackground-color: white;\n\theight: fit-content;\n\twidth: fit-content;\n\tmargin: 10vh auto;\n\tborder-radius: 20px;\n\tpadding: 10px 30px;\n}\n\n.nav a:hover {\n\tbackground-color: #ddd;\n\tcolor: black;\n  }\n\n  .nav a.active {\n\tbackground-color: #04AA6D;\n\tcolor: white;\n  }",""]);const i=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&a[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var c={},a=[],i=0;i<e.length;i++){var s=e[i],d=o.base?s[0]+o.base:s[0],l=c[d]||0,p="".concat(d," ").concat(l);c[d]=l+1;var u=n(p),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var A=r(h,o);o.byIndex=i,t.splice(i,0,{identifier:p,updater:A,references:1})}a.push(p)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var c=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var i=n(c[a]);t[i].references--}for(var s=o(e,r),d=0;d<c.length;d++){var l=n(c[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}c=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{const e=n.p+"images/harry.png",t=()=>{const t=document.querySelector("#content"),n=document.createElement("h1"),o=document.createElement("p"),r=new Image;document.body.style.backgroundImage="url('../src/assets/flatten.jpeg')",r.src=e,r.style.cssText="height: auto; width: 12rem;",n.textContent="Harry's Hotdogs",o.innerText="You're a wizard Harry! These hotdogs are amazing!!!",t.appendChild(n),t.appendChild(o),n.prepend(r)},o=n.p+"images/sprite.png",r=n.p+"images/originalHotdog.jpg",c=n.p+"images/chiliDog.jpg",a=n.p+"images/phone.png";var i=n(379),s=n.n(i),d=n(795),l=n.n(d),p=n(569),u=n.n(p),h=n(565),A=n.n(h),m=n(216),f=n.n(m),g=n(589),E=n.n(g),x=n(28),C={};C.styleTagTransform=E(),C.setAttributes=A(),C.insert=u().bind(null,"head"),C.domAPI=l(),C.insertStyleElement=f(),s()(x.Z,C),x.Z&&x.Z.locals&&x.Z.locals;const v=document.querySelector("#content"),T=document.createElement("div");T.classList.add("nav");const y=document.createElement("a"),w=document.createElement("a"),b=document.createElement("a"),N=document.querySelector("#header");T.style.cssText="background-color: #333; overflow: hidden;",y.style.cssText="float: left; color: #f2f2f2; text-align: center; padding: 14px 16px; text-decoration: none; font-size: 17px;",w.style.cssText="float: left; color: #f2f2f2; text-align: center; padding: 14px 16px; text-decoration: none; font-size: 17px;",b.style.cssText="float: left; color: #f2f2f2; text-align: center; padding: 14px 16px; text-decoration: none; font-size: 17px;",y.innerText="Home",w.innerText="Menu",b.innerText="Contact",N.appendChild(T),T.appendChild(y),T.appendChild(w),T.appendChild(b),t(),y.addEventListener("click",(()=>{for(;v.firstChild;)v.removeChild(v.lastChild);t()})),w.addEventListener("click",(()=>{for(;v.firstChild;)v.removeChild(v.lastChild);(()=>{const e=document.querySelector("#content");e.style.cssText="width: 50vw;";const t=document.createElement("h1");t.innerText="Menu";const n=document.createElement("h2");n.innerText="Hotdogs";const a=document.createElement("div");a.style.cssText="border: 2px solid black";const i=document.createElement("h3");i.innerText="Original Hotdog";const s=document.createElement("p");s.innerText="Our Classic Frankfurter starts with a top-quality all-beef frankfurter, expertly grilled to perfection which is nestled in a soft, lightly toasted bun. Customize it with your choice of traditional condiments such as ketchup, mustard, relish, and fresh, crispy onions.";const d=new Image;d.src=r,d.style.cssText="height: 130px;";const l=document.createElement("h3");l.innerText="The Classic Chili Dog";const p=document.createElement("p");p.innerText="We start with a plump, juicy beef frankfurter, gently nestled in a soft, warm bun. Then, we ladle on our rich and hearty homemade chili, made from a secret blend of spices and ground beef, simmered to perfection. To add a touch of freshness and contrast to the savory chili, we top it off with cool, crisp diced onions and a generous sprinkle of shredded cheddar cheese.";const u=new Image;u.src=c,u.style.cssText="height: 130px;";const h=document.createElement("h2");h.innerText="Drinks";const A=document.createElement("div");A.style.cssText="border: 2px solid black;";const m=document.createElement("h3");m.innerText="Coke";const f=document.createElement("p");f.innerText="Enjoy a cool refresing glass of coke. With or without ice";const g=new Image;g.src="data:image/jpeg;base64,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";const E=document.createElement("h3");E.innerText="Sprite";const x=document.createElement("p");x.innerText="Enjoy a cool refresing glass of coke. With or without ice";const C=new Image;C.src=o,C.style.cssText="height: 130px; width: 130px;",e.appendChild(t),e.appendChild(n),e.appendChild(a),a.appendChild(i),a.appendChild(s),a.appendChild(d),a.appendChild(l),a.appendChild(p),a.appendChild(u),e.appendChild(h),e.appendChild(A),A.appendChild(m),A.appendChild(f),A.appendChild(g),A.appendChild(E),A.appendChild(x),A.appendChild(C)})()})),b.addEventListener("click",(()=>{for(;v.firstChild;)v.removeChild(v.lastChild);(()=>{const e=document.querySelector("#content");e.style.cssText="width: 50vw;";const t=document.createElement("h1");t.innerText="Contact Us";const n=document.createElement("div"),o=document.createElement("h2");o.innerText="We’d love to hear from you, whether a complaint or a compliment. Get in touch now.";const r=document.createElement("div");r.style.cssText="display: flex;";const c=document.createElement("div");c.style.cssText="display: flex; flex-direction: column; border: 2px solid black; width: 50%";const i=document.createElement("div"),s=document.createElement("h2");s.innerText="Call Us";const d=document.createElement("div");d.style.cssText="display: flex;";const l=new Image;l.src=a,l.style.cssText="height: 3rem;";const p=document.createElement("p");p.innerText="566 - 1234567";const u=document.createElement("div");u.style.cssText="display: flex; flex-direction: column; border: 2px solid black; width: 50%;";const h=document.createElement("h2");h.textContent="Social";const A=document.createElement("div");A.style.cssText="display: flex;";const m=new Image;m.src="data:image/png;base64,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",m.style.cssText="height: 3rem;";const f=document.createElement("p");f.innerHTML="<a href = 'https://twitter.com/'>Twitter</a>";const g=document.createElement("div"),E=document.createElement("div");e.appendChild(t),e.appendChild(n),n.appendChild(o),n.appendChild(r),r.appendChild(c),c.appendChild(i),i.appendChild(s),c.appendChild(d),d.appendChild(l),d.appendChild(p),r.appendChild(u),u.appendChild(h),u.appendChild(A),u.appendChild(g),u.appendChild(E),A.appendChild(m),A.appendChild(f)})()}))})()})();