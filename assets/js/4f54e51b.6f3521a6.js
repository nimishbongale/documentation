(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{148:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(377)),i=["components"],s={title:"1.16.0.post1",sidebar_label:"1.16.0.post1"},c={unversionedId:"release-notes/1.16.0.post1",id:"release-notes/1.16.0.post1",isDocsHomePage:!1,title:"1.16.0.post1",description:"General",source:"@site/../docs/release-notes/1.16.0.post1.md",sourceDirName:"release-notes",slug:"/release-notes/1.16.0.post1",permalink:"/documentation/release-notes/1.16.0.post1",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.16.0.post1.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1644949796,formattedLastUpdatedAt:"2/15/2022",sidebar_label:"1.16.0.post1",frontMatter:{title:"1.16.0.post1",sidebar_label:"1.16.0.post1"}},u=[{value:"General",id:"general",children:[{value:"Bugs",id:"bugs",children:[]}]}],l={toc:u};function p(e){var t=e.components,r=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"general"},"General"),Object(a.b)("h3",{id:"bugs"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Transfer:  Regression in fts3 transfertool due to private variables ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1093"},"#1093")),Object(a.b)("li",{parentName:"ul"},"Transfer:  Regression in bulk_group_transfer due to missing key ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1092"},"#1092"))))}p.isMDXComponent=!0},377:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),b=n,d=p["".concat(i,".").concat(b)]||p[b]||f[b]||a;return r?o.a.createElement(d,s(s({ref:t},u),{},{components:r})):o.a.createElement(d,s({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);