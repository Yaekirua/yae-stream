if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>n(e,i),f={module:{uri:i},exports:c,require:r};s[i]=Promise.all(a.map((e=>f[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts("/fallback-ce627215c0e4a9af.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0e5ce63c-aa934cfd95b4c9f5.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/2135-d63a6ac0731caade.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/2418.4db0750ee3de2aa8.js",revision:"4db0750ee3de2aa8"},{url:"/_next/static/chunks/2510-84eeecbb00eb62e3.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/2611.5c9739cebd098557.js",revision:"5c9739cebd098557"},{url:"/_next/static/chunks/2931-3cbb8994280bda3e.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/3294.fa4df53aa008fd88.js",revision:"fa4df53aa008fd88"},{url:"/_next/static/chunks/3458-b976e2c41dabb815.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/4061.3fb12977e6e66f04.js",revision:"3fb12977e6e66f04"},{url:"/_next/static/chunks/4154.6923cf3e3bc820a0.js",revision:"6923cf3e3bc820a0"},{url:"/_next/static/chunks/41739739-6c131a962a5b7d6e.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/4295.2c454fe7a4c7834e.js",revision:"2c454fe7a4c7834e"},{url:"/_next/static/chunks/4394-6112a46e177500cf.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/479ba886-fb2556cc270d1f05.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/4937.fbc8b545112ee703.js",revision:"fbc8b545112ee703"},{url:"/_next/static/chunks/5190-64770cbf8662b979.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/5392-8e8707c78dd0c1f6.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/5633.cbcddac7622854b8.js",revision:"cbcddac7622854b8"},{url:"/_next/static/chunks/5723-f602a9ab3235327a.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/5811-6756813a847d9f52.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/6027-de7f4e7052716ced.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/6319.7c3a11b7966eb8bd.js",revision:"7c3a11b7966eb8bd"},{url:"/_next/static/chunks/6647-9291a08c6235902e.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/6648-62877780b83912c2.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/6774-dcec8058c7bf4299.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/7294-5d624cf9ff9d7600.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/7406.ebdbee5f2005526c.js",revision:"ebdbee5f2005526c"},{url:"/_next/static/chunks/7424-97eb87e07b151f1b.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/7611-23abcb9222c7c09f.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/7659-53b096e68c7cb8f8.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/7792.a15ff6b72c353966.js",revision:"a15ff6b72c353966"},{url:"/_next/static/chunks/7922.7b3b58d9622955bf.js",revision:"7b3b58d9622955bf"},{url:"/_next/static/chunks/8884.08d2120be0fc875a.js",revision:"08d2120be0fc875a"},{url:"/_next/static/chunks/9344.552b33a7c6408f4d.js",revision:"552b33a7c6408f4d"},{url:"/_next/static/chunks/app/_not-found/page-defefca1f0809916.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/app/catalog/page-40401008b16eb057.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/app/dmca/page-e49b4d088d36eeb2.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/app/info/%5Bid%5D/page-5485aa5149d220f3.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/app/layout-1a7703cc61715869.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/app/offline/page-9ca004760adc28ad.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/app/page-52ed5b08cd590984.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/app/privacy/page-c8d7ed15119116de.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/app/settings/page-c5904af2e10250d6.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/app/terms/page-97478d97366b70ff.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/app/watch/%5Bid%5D/page-7cb9d7e745ece393.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/e37a0b60-70bbcd6b3bc795d5.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/f8e4659f-fb2d950f8e77d941.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/fd9d1056-158ac2c9d594a992.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/framework-8e0e0f4a6b83a956.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/main-app-da5fad66cc500c03.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/main-f06b599c9522bdb8.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/pages/_app-f870474a17b7f2fd.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/pages/_error-f896a40d8c81e1c7.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-b5ccc865524c66b1.js",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/_next/static/css/6142ac9dd30a747f.css",revision:"6142ac9dd30a747f"},{url:"/_next/static/css/65d3ba42d2ae0741.css",revision:"65d3ba42d2ae0741"},{url:"/_next/static/css/a87bb07a5a06a746.css",revision:"a87bb07a5a06a746"},{url:"/_next/static/efUt6S6N8NI1H11YnMTQo/_buildManifest.js",revision:"4a6f05f224da1dc65bacf02bdab075d2"},{url:"/_next/static/efUt6S6N8NI1H11YnMTQo/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/5f1343702accbb98-s.p.woff2",revision:"93e4c5de2c649968a5f3b52d373f98ad"},{url:"/_next/static/media/7499d1fd488b7c5a-s.p.woff2",revision:"d1373aa0007e7dc24444d65c6e149d33"},{url:"/_next/static/media/83b078698f446a08-s.p.woff2",revision:"d57a00c3aa577e9065f30f3ec1826f21"},{url:"/_next/static/media/a2e9a53c90d0af0f-s.p.woff2",revision:"d81e990c8e753c20177f87d2e616c842"},{url:"/_next/static/media/ee9982dce2c87a23-s.p.woff2",revision:"e4dd285be40498eb7bdd736d64f3af1b"},{url:"/android-chrome-192x192.png",revision:"f0974e88a642a53bc6832b1a46008d1f"},{url:"/android-chrome-512x512.png",revision:"6f7fdcc479506c2349d7b02eb6df3a07"},{url:"/apple-touch-icon.png",revision:"af3b0369b07dde196b07b3181b67aa3c"},{url:"/browserconfig.xml",revision:"68c9044fa4a08749efb85bb2a4edaede"},{url:"/fallback-ce627215c0e4a9af.js",revision:"a5281aa1504c5d6bcd7ba1097870376a"},{url:"/favicon-16x16.png",revision:"6d5bf74376fabd922f320912ca40706e"},{url:"/favicon-32x32.png",revision:"be019a84f10b750e610b8e7fc827613b"},{url:"/mstile-150x150.png",revision:"9dcb96e5c2359ffab5f3458544f1d359"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/offline",revision:"efUt6S6N8NI1H11YnMTQo"},{url:"/site.webmanifest",revision:"749f824712c7154985ff7ed8bb35d436"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e},{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
