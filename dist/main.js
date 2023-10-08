(()=>{"use strict";var e={28:(e,t,A)=>{A.d(t,{Z:()=>l});var n=A(81),r=A.n(n),a=A(645),o=A.n(a),c=A(667),d=A.n(c),i=new URL(A(957),A.b),s=o()(r()),p=d()(i);s.push([e.id,`@font-face {\n\tfont-family: 'HarryPotter';\n\tsrc: url(${p}) format('truetype'),\n\t  url(${p}) format('ttf');\n\tfont-weight: 600;\n\tfont-style: normal;\n  }\n  \n\n*{\n\tpadding: 0 10px;\n\ttext-align: center;\n}\n\n\nbody {\n\tfont-family: "HarryPotter";\n}\n\nh1 {\n\tfont-size: 4rem;\n}\n\nh2, h3 {\n\tfont-size: 3rem;\n}\n\np {\n\tfont-size: 2rem;\n}\n\n#content {\n\tbackground-color: white;\n\theight: fit-content;\n\twidth: fit-content;\n\tmargin: 10vh auto;\n\tborder-radius: 20px;\n\tpadding: 10px 30px;\n}\n\n.nav a:hover {\n\tbackground-color: #736e6e;\n\tcursor: pointer;\n\tcolor: black;\n  }\n\n  .nav a.active {\n\tbackground-color: #3e8e41;\n\tbox-shadow: 0 5px #666;\n\ttransform: translateY(4px);\n  }`,""]);const l=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var A="",n=void 0!==t[5];return t[4]&&(A+="@supports (".concat(t[4],") {")),t[2]&&(A+="@media ".concat(t[2]," {")),n&&(A+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),A+=e(t),n&&(A+="}"),t[2]&&(A+="}"),t[4]&&(A+="}"),A})).join("")},t.i=function(e,A,n,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(n)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(o[d]=!0)}for(var i=0;i<e.length;i++){var s=[].concat(e[i]);n&&o[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),A&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=A):s[2]=A),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function A(e){for(var A=-1,n=0;n<t.length;n++)if(t[n].identifier===e){A=n;break}return A}function n(e,n){for(var a={},o=[],c=0;c<e.length;c++){var d=e[c],i=n.base?d[0]+n.base:d[0],s=a[i]||0,p="".concat(i," ").concat(s);a[i]=s+1;var l=A(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==l)t[l].references++,t[l].updater(f);else{var u=r(f,n);n.byIndex=c,t.splice(c,0,{identifier:p,updater:u,references:1})}o.push(p)}return o}function r(e,t){var A=t.domAPI(t);return A.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;A.update(e=t)}else A.remove()}}e.exports=function(e,r){var a=n(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var c=A(a[o]);t[c].references--}for(var d=n(e,r),i=0;i<a.length;i++){var s=A(a[i]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=d}}},569:e=>{var t={};e.exports=function(e,A){var n=function(e){if(void 0===t[e]){var A=document.querySelector(e);if(window.HTMLIFrameElement&&A instanceof window.HTMLIFrameElement)try{A=A.contentDocument.head}catch(e){A=null}t[e]=A}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(A)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,A)=>{e.exports=function(e){var t=A.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(A){!function(e,t,A){var n="";A.supports&&(n+="@supports (".concat(A.supports,") {")),A.media&&(n+="@media ".concat(A.media," {"));var r=void 0!==A.layer;r&&(n+="@layer".concat(A.layer.length>0?" ".concat(A.layer):""," {")),n+=A.css,r&&(n+="}"),A.media&&(n+="}"),A.supports&&(n+="}");var a=A.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,A)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},957:(e,t,A)=>{e.exports=A.p+"HarryP-MVZ6w.ttf"}},t={};function A(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,A),a.exports}A.m=e,A.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return A.d(t,{a:t}),t},A.d=(e,t)=>{for(var n in t)A.o(t,n)&&!A.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},A.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),A.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;A.g.importScripts&&(e=A.g.location+"");var t=A.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&!e;)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),A.p=e})(),A.b=document.baseURI||self.location.href,A.nc=void 0,(()=>{const e=A.p+"images/harry.png",t=()=>{const t=document.querySelector("#content");t.style.cssText="width: 50vw;";const A=document.createElement("h1"),n=document.createElement("p"),r=new Image;document.body.style.backgroundImage="url('../src/assets/flatten.jpeg')",r.src=e,r.style.cssText="height: auto; width: 12rem;",A.textContent="Harry's Hotdogs",n.innerText="You're a wizard Harry! These hotdogs are amazing!!!",t.appendChild(A),t.appendChild(n),A.prepend(r)},n=A.p+"images/sprite.png",r=A.p+"images/originalHotdog.jpg",a=A.p+"images/chiliDog.jpg",o=A.p+"images/phone.png";var c=A(379),d=A.n(c),i=A(795),s=A.n(i),p=A(569),l=A.n(p),f=A(565),u=A.n(f),m=A(216),g=A.n(m),w=A(589),v=A.n(w),h=A(28),T={};T.styleTagTransform=v(),T.setAttributes=u(),T.insert=l().bind(null,"head"),T.domAPI=s(),T.insertStyleElement=g(),d()(h.Z,T),h.Z&&h.Z.locals&&h.Z.locals;const b=document.querySelector("#content"),C=document.createElement("div");C.classList.add("nav");const L=document.createElement("a"),x=document.createElement("a"),D=document.createElement("a"),M=document.querySelector("#header");C.style.cssText="background-color: #333; overflow: hidden; padding: 20px 0; font-weight: bold;",L.style.cssText="color: #f2f2f2; text-align: center; padding: 14px 16px; text-decoration: none; font-size: 35px;",x.style.cssText="margin-left: 10%; color: #f2f2f2; text-align: center; padding: 14px 16px; text-decoration: none; font-size: 35px;",D.style.cssText="margin-left: 10%; color: #f2f2f2; text-align: center; padding: 14px 16px; text-decoration: none; font-size: 35px;",L.innerText="Home",x.innerText="Menu",D.innerText="Contact",M.appendChild(C),C.appendChild(L),C.appendChild(x),C.appendChild(D),t(),L.addEventListener("click",(()=>{for(;b.firstChild;)b.removeChild(b.lastChild);t()})),x.addEventListener("click",(()=>{for(;b.firstChild;)b.removeChild(b.lastChild);(()=>{const e=document.querySelector("#content");e.style.cssText="width: 50vw;";const t=document.createElement("h1");t.innerText="Menu";const A=document.createElement("h2");A.innerText="Hotdogs";const o=document.createElement("div");o.style.cssText="border: 2px solid black; padding-bottom: 50px;";const c=document.createElement("h3");c.innerText="Original Hotdog";const d=document.createElement("p");d.innerText="Our Classic Frankfurter starts with a top-quality all-beef frankfurter, expertly grilled to perfection which is nestled in a soft, lightly toasted bun. Customize it with your choice of traditional condiments such as ketchup, mustard, relish, and fresh, crispy onions.";const i=new Image;i.src=r,i.style.cssText="height: 130px;";const s=document.createElement("h3");s.innerText="The Classic Chili Dog";const p=document.createElement("p");p.innerText="We start with a plump, juicy beef frankfurter, gently nestled in a soft, warm bun. Then, we ladle on our rich and hearty homemade chili, made from a secret blend of spices and ground beef, simmered to perfection. To add a touch of freshness and contrast to the savory chili, we top it off with cool, crisp diced onions and a generous sprinkle of shredded cheddar cheese.";const l=new Image;l.src=a,l.style.cssText="height: 130px;";const f=document.createElement("h2");f.innerText="Drinks";const u=document.createElement("div");u.style.cssText="border: 2px solid black; padding-bottom: 50px;";const m=document.createElement("h3");m.innerText="Coke";const g=document.createElement("p");g.innerText="Enjoy a cool refresing glass of coke. With or without ice";const w=new Image;w.src="data:image/jpeg;base64,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";const v=document.createElement("h3");v.innerText="Sprite";const h=document.createElement("p");h.innerText="Enjoy a cool refresing glass of coke. With or without ice";const T=new Image;T.src=n,T.style.cssText="height: 130px; width: 130px;",e.appendChild(t),e.appendChild(A),e.appendChild(o),o.appendChild(c),o.appendChild(d),o.appendChild(i),o.appendChild(s),o.appendChild(p),o.appendChild(l),e.appendChild(f),e.appendChild(u),u.appendChild(m),u.appendChild(g),u.appendChild(w),u.appendChild(v),u.appendChild(h),u.appendChild(T)})()})),D.addEventListener("click",(()=>{for(;b.firstChild;)b.removeChild(b.lastChild);(()=>{const e=document.querySelector("#content");e.style.cssText="width: 50vw;";const t=document.createElement("h1");t.innerText="Contact Us";const A=document.createElement("div"),n=document.createElement("h2");n.innerText="We’d love to hear from you, whether a complaint or a compliment. Get in touch now.";const r=document.createElement("div");r.style.cssText="display: flex;";const a=document.createElement("div");a.style.cssText="display: flex; flex-direction: column; border: 2px solid black; width: 50%";const c=document.createElement("div"),d=document.createElement("h2");d.innerText="Call Us";const i=document.createElement("div");i.style.cssText="display: flex;";const s=new Image;s.src=o,s.style.cssText="height: 3rem; margin-top: 1.5rem; margin-left: 15%";const p=document.createElement("p");p.innerText="566 - 1234567";const l=document.createElement("div");l.style.cssText="display: flex; flex-direction: column; border: 2px solid black; width: 50%;";const f=document.createElement("h2");f.textContent="Social";const u=document.createElement("div");u.style.cssText="display: flex;";const m=new Image;m.src="data:image/png;base64,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",m.style.cssText="height: 3rem; padding-top: 1.5rem; margin-left: 15%;";const g=document.createElement("p");g.innerHTML="<a href = 'https://twitter.com/'>Twitter</a>";const w=document.createElement("div");w.style.cssText="display: flex;";const v=new Image;v.src="data:image/png;base64,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",v.style.cssText="height: 3rem; padding-top: 1.5rem; margin-left: 15%";const h=document.createElement("p");h.innerHTML="<a href='https://www.facebook.com/'>Facebook</a>";const T=document.createElement("div");T.style.cssText="display: flex;";const b=new Image;b.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGZpbGw9IiMwMDAwMDAiIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGlkPSJGbGF0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0xNjAsMTI4YTMyLDMyLDAsMSwxLTMyLTMyQTMyLjAzNjY3LDMyLjAzNjY3LDAsMCwxLDE2MCwxMjhabTY4LTQ0djg4YTU2LjA2MzUzLDU2LjA2MzUzLDAsMCwxLTU2LDU2SDg0YTU2LjA2MzUzLDU2LjA2MzUzLDAsMCwxLTU2LTU2Vjg0QTU2LjA2MzUzLDU2LjA2MzUzLDAsMCwxLDg0LDI4aDg4QTU2LjA2MzUzLDU2LjA2MzUzLDAsMCwxLDIyOCw4NFptLTUyLDQ0YTQ4LDQ4LDAsMSwwLTQ4LDQ4QTQ4LjA1NDM2LDQ4LjA1NDM2LDAsMCwwLDE3NiwxMjhabTE2LTUyYTEyLDEyLDAsMSwwLTEyLDEyQTEyLDEyLDAsMCwwLDE5Miw3NloiLz4KPC9zdmc+",b.style.cssText="height: 3rem; padding-top: 1.5rem; margin-left: 15%";const C=document.createElement("p");C.innerHTML="<a href='https://www.instagram.com/'>Instagram</a>",e.appendChild(t),e.appendChild(A),A.appendChild(n),A.appendChild(r),r.appendChild(a),a.appendChild(c),c.appendChild(d),a.appendChild(i),i.appendChild(s),i.appendChild(p),r.appendChild(l),l.appendChild(f),l.appendChild(u),u.appendChild(m),u.appendChild(g),l.appendChild(w),w.appendChild(v),w.appendChild(h),l.appendChild(T),T.appendChild(b),T.appendChild(C)})()}))})()})();