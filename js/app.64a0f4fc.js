(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],f=0,l=[];f<u.length;f++)o=u[f],a[o]&&l.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(l.length)l.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0146895a":"340d9ffa","chunk-09346f80":"e5c22ac2","chunk-1743cdb8":"82103340","chunk-24345e60":"31745978","chunk-753df26a":"742a810a","chunk-98dc5c6c":"396240ca","chunk-d449898e":"458066bc","chunk-ff0608bc":"9a3a1416"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-09346f80":1,"chunk-98dc5c6c":1,"chunk-ff0608bc":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0146895a":"31d6cfe0","chunk-09346f80":"763c1d4c","chunk-1743cdb8":"31d6cfe0","chunk-24345e60":"31d6cfe0","chunk-753df26a":"31d6cfe0","chunk-98dc5c6c":"bccabbd3","chunk-d449898e":"31d6cfe0","chunk-ff0608bc":"0e344002"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===a))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],f=s.getAttribute("data-href");if(f===r||f===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],p.parentNode.removeChild(p),n(c)},p.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(p)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=c);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e),s=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");c.type=r,c.request=o,n[1](c)}a[e]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:f})},12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-admin/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=f;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=n("8c4f"),a=n("2f62"),c=(n("6762"),n("2fdb"),function(e){return new Promise(function(t){return setTimeout(t,e)})}),u=function e(t,n,r,o){var a=[];r+=1;for(var c=0;c<t.length;c++){if(t[c].path===n){o[r]={path:t[c].path,title:t[c].title},a=o;break}if(t[c].children&&(o[r]={path:t[c].path,title:t[c].title},a=e(t[c].children,n,r,o),a.includes(n)))return a}return a},i=function e(t,n){for(var r=0;r<t.length;r++){if(t[r].path===n)return{title:t[r].title,path:t[r].path};if(t[r].children)return e(t[r].children,n);if(t[r].path===n)return{title:t[r].title,path:t[r].path}}},s={namespaced:!0,state:{token:sessionStorage["TOKEN"],loading:!1},mutations:{SET_TOKEN:function(e,t){return e.token=t},SET_LOADING:function(e,t){return e.loading=t}},actions:{ASYNC_LOGIN:function(e,t){var n=e.commit;n("SET_LOADING",!0),c(1e3).then(function(){n("SET_LOADING",!1),n("SET_TOKEN",t),sessionStorage["TOKEN"]=t,W.$route.query.redirect?W.$router.push(W.$route.query.redirect):W.$router.push("/")})}}},f=(n("8e6e"),n("ac6a"),n("456d"),n("75fc")),l=n("bd86"),p={isCollapse:!0,isLogoFixed:!0,isHeaderFixed:!0,isTabsFixed:!0};function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach(function(t){Object(l["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var b={namespaced:!0,state:d({},p,{historys:[{title:"仪表盘",path:"/dashboard"}],menuActive:"",breadcrumbs:[]}),mutations:{SET_IS_COLLAPSE:function(e,t){return e.isCollapse=t},SET_MENU_ACTIVE:function(e,t){return e.menuActive=t},SET_BREADCRUMB:function(e,t){return e.breadcrumbs=t},SET_HISTORYS:function(e,t){return e.historys=t}},actions:{ACTIONS_HISTORY:function(e,t){var n=e.commit,r=e.state;r.historys.map(function(e){return e.path}).includes(t.path)||n("SET_HISTORYS",[].concat(Object(f["a"])(r.historys),[t]))}}};r["default"].use(a["a"]);var m=new a["a"].Store({modules:{auth:s,layout:b},strict:!1}),O=n("323e"),y=n.n(O),g=(n("a5d8"),n("dc4a"));r["default"].use(o["a"]),y.a.configure({showSpinner:!1});var v=new o["a"]({mode:"hash",routes:[{path:"/",redirect:"/dashboard",component:function(){return n.e("chunk-ff0608bc").then(n.bind(null,"a59d"))},meta:{auth:!0},children:g["a"].flat(1/0)},{path:"/login",name:"login",component:function(){return n.e("chunk-98dc5c6c").then(n.bind(null,"d448"))}}]});v.beforeEach(function(e,t,n){if(e.path!==t.path&&y.a.start(),e.meta.auth&&!m.state.auth.token)return n({path:"/login",query:{redirect:e.fullPath}});n()}),v.afterEach(function(e){y.a.done(),m.commit("layout/SET_MENU_ACTIVE",e.path),m.commit("layout/SET_BREADCRUMB",u(g["a"],e.path,-1,[])),m.dispatch("layout/ACTIONS_HISTORY",i(g["a"],e.path))});var j=v,S=n("bc3a"),k=n.n(S),w=k.a.create({baseURL:""});w.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)}),w.interceptors.response.use(function(e){return e},function(e){return Promise.reject(e)});var E=w,P=n("4328"),T=n.n(P),_=n("5c96"),A=n.n(_),D=n("4897"),N=n.n(D),C=n("a925"),I=n("b2d6"),L=n.n(I);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(n,!0).forEach(function(t){Object(l["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var M=R({message:{hello:"hello, world"}},L.a),q=M,B=n("f0d9"),$=n.n(B);function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(n,!0).forEach(function(t){Object(l["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var K=U({message:{hello:"你好，世界"}},$.a),Y=K,F={en:q,cn:Y};r["default"].use(C["a"]);var G=new C["a"]({locale:localStorage["lang"]||"cn",messages:F});N.a.i18n(function(e,t){return G.t(e,t)});var J=G,V=n("77a0"),z=n.n(V),Q=n("3f08");n("0fae"),n("abe2");r["default"].config.productionTip=!1,r["default"].prototype.$=E,r["default"].prototype.$qs=T.a,r["default"].use(A.a),r["default"].use(z.a),r["default"].use(Q["a"].Plugin);var W=t["default"]=new r["default"]({router:j,store:m,i18n:J,render:function(e){return e("router-view")}}).$mount("#app")},abe2:function(e,t,n){},dc4a:function(e,t,n){"use strict";t["a"]=[{path:"/dashboard",icon:"el-icon-orange",title:"仪表盘",name:"dashboard",meta:{auth:!0},component:function(){return n.e("chunk-0146895a").then(n.bind(null,"ed52"))}},{path:"/test",icon:"el-icon-menu",title:"测试",name:"test",component:function(){return n.e("chunk-09346f80").then(n.bind(null,"2d8b"))},meta:{auth:!0},children:[{path:"/test/test1",icon:"el-icon-menu",title:"测试-1",name:"test-1",component:function(){return n.e("chunk-d449898e").then(n.bind(null,"bdb6"))},meta:{auth:!0}},{path:"/test/test2",icon:"el-icon-menu",title:"测试-2",name:"test-2",component:function(){return n.e("chunk-753df26a").then(n.bind(null,"1fa0"))},meta:{auth:!0}},{path:"/test/test3",icon:"el-icon-menu",title:"测试-3",name:"test-3",component:function(){return n.e("chunk-24345e60").then(n.bind(null,"0d94"))},meta:{auth:!0}},{path:"/test/test4",icon:"el-icon-menu",title:"测试-4",name:"test-4",component:function(){return n.e("chunk-1743cdb8").then(n.bind(null,"a5b9"))},meta:{auth:!0}}]}]}});
//# sourceMappingURL=app.64a0f4fc.js.map