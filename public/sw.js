if(!self.define){let e,s={};const c=(c,n)=>(c=new URL(c+".js",n).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let t={};const r=e=>c(e,a),d={module:{uri:a},exports:t,require:r};s[a]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/YY7O6FaT_igPzWTzCLQOZ/_buildManifest.js",revision:"ec00c2834c4f7f2cc8bc1204ec97122f"},{url:"/_next/static/YY7O6FaT_igPzWTzCLQOZ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1119.d2d26e806c02bd5e.js",revision:"d2d26e806c02bd5e"},{url:"/_next/static/chunks/1362-adb26256b72dd5cc.js",revision:"adb26256b72dd5cc"},{url:"/_next/static/chunks/1488.42459f8c7d4ddd99.js",revision:"42459f8c7d4ddd99"},{url:"/_next/static/chunks/1548.89e842c2f16d35e1.js",revision:"89e842c2f16d35e1"},{url:"/_next/static/chunks/1675.0830719f4bf8eb0a.js",revision:"0830719f4bf8eb0a"},{url:"/_next/static/chunks/2024.2782dde7011def78.js",revision:"2782dde7011def78"},{url:"/_next/static/chunks/2139.bdbfdb77a233f3ad.js",revision:"bdbfdb77a233f3ad"},{url:"/_next/static/chunks/2328.6118322762883c04.js",revision:"6118322762883c04"},{url:"/_next/static/chunks/2532.2f203bcd21074af8.js",revision:"2f203bcd21074af8"},{url:"/_next/static/chunks/2592.c964623cd8a5d7a5.js",revision:"c964623cd8a5d7a5"},{url:"/_next/static/chunks/2610.b1d3457c33240875.js",revision:"b1d3457c33240875"},{url:"/_next/static/chunks/2632.bd080ba3e63c8790.js",revision:"bd080ba3e63c8790"},{url:"/_next/static/chunks/2876.1a04a3b4c6aacf36.js",revision:"1a04a3b4c6aacf36"},{url:"/_next/static/chunks/3028.534a66ceaa897ba7.js",revision:"534a66ceaa897ba7"},{url:"/_next/static/chunks/3199.4029b01edd9cacd7.js",revision:"4029b01edd9cacd7"},{url:"/_next/static/chunks/3269.7b84b44b0f531b70.js",revision:"7b84b44b0f531b70"},{url:"/_next/static/chunks/3565.fb5464bf14b9a14e.js",revision:"fb5464bf14b9a14e"},{url:"/_next/static/chunks/3781.23adb62b9feac377.js",revision:"23adb62b9feac377"},{url:"/_next/static/chunks/3792.d22028be910b0b22.js",revision:"d22028be910b0b22"},{url:"/_next/static/chunks/404.55a4b9919bb2c4bb.js",revision:"55a4b9919bb2c4bb"},{url:"/_next/static/chunks/4244-79ff15dc75ce49c2.js",revision:"79ff15dc75ce49c2"},{url:"/_next/static/chunks/4247.4043c6e5bac6b5be.js",revision:"4043c6e5bac6b5be"},{url:"/_next/static/chunks/425.bb00afee39344f5e.js",revision:"bb00afee39344f5e"},{url:"/_next/static/chunks/4309.33c15b4c36e5b692.js",revision:"33c15b4c36e5b692"},{url:"/_next/static/chunks/44.96d1e066598b98a5.js",revision:"96d1e066598b98a5"},{url:"/_next/static/chunks/4506.bfe29b5281fd9412.js",revision:"bfe29b5281fd9412"},{url:"/_next/static/chunks/4513.89bf5075172ad67e.js",revision:"89bf5075172ad67e"},{url:"/_next/static/chunks/4654.25768ab7497ecbc6.js",revision:"25768ab7497ecbc6"},{url:"/_next/static/chunks/5236.07e838469b8d259e.js",revision:"07e838469b8d259e"},{url:"/_next/static/chunks/579.7d93c1cb5a2068d1.js",revision:"7d93c1cb5a2068d1"},{url:"/_next/static/chunks/5811.2395cdaaa7c9afa0.js",revision:"2395cdaaa7c9afa0"},{url:"/_next/static/chunks/5883.e4477e9126daa625.js",revision:"e4477e9126daa625"},{url:"/_next/static/chunks/6044.0f2fb408b4754c33.js",revision:"0f2fb408b4754c33"},{url:"/_next/static/chunks/6081.476e77e380df8cf3.js",revision:"476e77e380df8cf3"},{url:"/_next/static/chunks/6164.c16a1412c44063ff.js",revision:"c16a1412c44063ff"},{url:"/_next/static/chunks/6423.6e9353fe71fb46f3.js",revision:"6e9353fe71fb46f3"},{url:"/_next/static/chunks/6562.18e599382635c4c8.js",revision:"18e599382635c4c8"},{url:"/_next/static/chunks/6648.5c5f42a4a82cc0d6.js",revision:"5c5f42a4a82cc0d6"},{url:"/_next/static/chunks/6733.b35f571e6d535c19.js",revision:"b35f571e6d535c19"},{url:"/_next/static/chunks/7410.9cf536f970bf3dba.js",revision:"9cf536f970bf3dba"},{url:"/_next/static/chunks/7753.a7e6528a075e6a69.js",revision:"a7e6528a075e6a69"},{url:"/_next/static/chunks/7833.f6f163e2e51e08d6.js",revision:"f6f163e2e51e08d6"},{url:"/_next/static/chunks/7891.dc7891aa6add1107.js",revision:"dc7891aa6add1107"},{url:"/_next/static/chunks/8110.a315ece2430152e5.js",revision:"a315ece2430152e5"},{url:"/_next/static/chunks/8332.6ace697024e9b994.js",revision:"6ace697024e9b994"},{url:"/_next/static/chunks/8670.24f4da0da1d47f75.js",revision:"24f4da0da1d47f75"},{url:"/_next/static/chunks/8692.8f2fd438e41b973d.js",revision:"8f2fd438e41b973d"},{url:"/_next/static/chunks/8777.049cc6d93d6c5f29.js",revision:"049cc6d93d6c5f29"},{url:"/_next/static/chunks/8997.3952b6c307910999.js",revision:"3952b6c307910999"},{url:"/_next/static/chunks/9695.bc574f43a6c7f86a.js",revision:"bc574f43a6c7f86a"},{url:"/_next/static/chunks/9736.0f43b677bfaa91c9.js",revision:"0f43b677bfaa91c9"},{url:"/_next/static/chunks/9821.d307d48fadef028d.js",revision:"d307d48fadef028d"},{url:"/_next/static/chunks/fb7d5399.a827a2c20944c6e1.js",revision:"a827a2c20944c6e1"},{url:"/_next/static/chunks/framework-ce84985cd166733a.js",revision:"ce84985cd166733a"},{url:"/_next/static/chunks/main-3596d33c4cb81bc9.js",revision:"3596d33c4cb81bc9"},{url:"/_next/static/chunks/pages/_error-82b79221b9ed784b.js",revision:"82b79221b9ed784b"},{url:"/_next/static/chunks/pages/index-cd6c51be87b7b013.js",revision:"cd6c51be87b7b013"},{url:"/_next/static/chunks/pages/marketplace-87cdd0f5623700cd.js",revision:"87cdd0f5623700cd"},{url:"/_next/static/chunks/pages/nft-a9a191ae67b7757d.js",revision:"a9a191ae67b7757d"},{url:"/_next/static/chunks/pages/profile-970280608c02a2a7.js",revision:"970280608c02a2a7"},{url:"/_next/static/chunks/pages/tickets-858edd7bb2d3c41e.js",revision:"858edd7bb2d3c41e"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-b8c2d85c94ab1f2d.js",revision:"b8c2d85c94ab1f2d"},{url:"/favicon.ico",revision:"c2bdab8da799dc162c7745978faf12bf"},{url:"/icon-192x192.png",revision:"bb4ca4ae3430da76bc9585412ca0ce2e"},{url:"/icon-256x256.png",revision:"5b72862a260b8993deba7c1f5ccabd88"},{url:"/icon-384x384.png",revision:"dbd607be8b8a45b2535b11cf075d3428"},{url:"/icon-512x512.png",revision:"f5175104923789787f196c043cd41339"},{url:"/icons/calendar.svg",revision:"fc9f6f2f1cef78e78e22985255e7eb14"},{url:"/icons/dropdown.svg",revision:"ba56cb751129ddd035c640f1ff14668d"},{url:"/icons/marketplace-active.svg",revision:"ff470898fccec4d640b18e19c014e7e5"},{url:"/icons/marketplace-inactive.svg",revision:"7d5b5f90d40510991a00374ab2915d0d"},{url:"/icons/profile-active.svg",revision:"de31e653530adcbd740ada2e14464365"},{url:"/icons/profile-inactive.svg",revision:"372fab6fa003d149a21be13013795f72"},{url:"/icons/tickets-active.svg",revision:"53388000d69fa2345aa2e00e83f80f19"},{url:"/icons/tickets-inactive.svg",revision:"9536ce9864d3e67caae29f110b635d85"},{url:"/logo.svg",revision:"21f6e732e6c952b100774aea1355e27d"},{url:"/manifest.json",revision:"b8ffa9c06fb3997c4960471118be9e58"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
