if(!self.define){let e,s={};const t=(t,u)=>(t=new URL(t+".js",u).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(u,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let l={};const r=e=>t(e,n),o={module:{uri:n},exports:l,require:r};s[n]=Promise.all(u.map((e=>o[e]||r(e)))).then((e=>(i(...e),l)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"nhacualua"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/vuetest/css/830.4f034e44.css",revision:null},{url:"/vuetest/css/app.b7979c71.css",revision:null},{url:"/vuetest/css/chunk-vendors.0edaf164.css",revision:null},{url:"/vuetest/img/caphe.b0889546.png",revision:null},{url:"/vuetest/img/logo.5919a104.svg",revision:null},{url:"/vuetest/img/logo.b4273d3d.png",revision:null},{url:"/vuetest/index.html",revision:"038b80f498f3a91fb248d79cf6c76c07"},{url:"/vuetest/js/830.9cb1dd78.js",revision:null},{url:"/vuetest/js/897.5a28549b.js",revision:null},{url:"/vuetest/js/app.3e452c8e.js",revision:null},{url:"/vuetest/js/chunk-vendors.946afbf6.js",revision:null},{url:"/vuetest/logo.ico",revision:"765980592bb3a8e54cdbc4e96a0a0a23"},{url:"/vuetest/logo.jpg",revision:"61ca100f93ff4a18cdf151d00a4b252b"},{url:"/vuetest/manifest.json",revision:"ffaf1c5e7ca048bb2119a94e3e10f047"},{url:"/vuetest/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map