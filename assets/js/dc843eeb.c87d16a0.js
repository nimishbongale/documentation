(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{359:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(411)),c=["components"],i={title:"1.17.2",sidebar_label:"1.17.2"},l={unversionedId:"release-notes/1.17.2",id:"release-notes/1.17.2",isDocsHomePage:!1,title:"1.17.2",description:"General",source:"@site/../docs/release-notes/1.17.2.md",sourceDirName:"release-notes",slug:"/release-notes/1.17.2",permalink:"/documentation/release-notes/1.17.2",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.17.2.md",version:"current",lastUpdatedBy:"Joel Dierkes",lastUpdatedAt:1653393835,formattedLastUpdatedAt:"5/24/2022",sidebar_label:"1.17.2",frontMatter:{title:"1.17.2",sidebar_label:"1.17.2"}},s=[{value:"General",id:"general",children:[{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements",children:[]}]}],u={toc:s};function p(e){var t=e.components,r=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"general"},"General"),Object(o.b)("h3",{id:"bugs"},"Bugs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Core & Internals: core: archive replicas have wrong RSE ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1305"},"#1305"))),Object(o.b)("h2",{id:"clients"},"Clients"),Object(o.b)("h3",{id:"enhancements"},"Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Clients: core+client: switch to enable archive listing ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1306"},"#1306")),Object(o.b)("li",{parentName:"ul"},"RSE Manager: Handle RSEChecksumUnavailable for protocols without renaming ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1299"},"#1299"))))}p.isMDXComponent=!0},411:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return r?a.a.createElement(f,i(i({ref:t},s),{},{components:r})):a.a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);