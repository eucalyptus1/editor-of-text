if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,f)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let t={};const l=e=>n(e,r),o={module:{uri:r},exports:t,require:l};i[r]=Promise.all(s.map((e=>o[e]||l(e)))).then((e=>(f(...e),t)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"8fd2886efed16d11072719da12b9c9a3"},{url:"install.bundle.js",revision:"1c1416c7befae3fa7bafb769454cf770"},{url:"install.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"main.bundle.js",revision:"ea355329162a5cc2ff41bf2d8af9f341"},{url:"main.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"main.css",revision:"55000d38b02080fb4cbf975ce66bb3a4"}],{})}));