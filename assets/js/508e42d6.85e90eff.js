(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{156:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(388)),i=["components"],c={title:"1.19.3",sidebar_label:"1.19.3"},l={unversionedId:"release-notes/1.19.3",id:"release-notes/1.19.3",isDocsHomePage:!1,title:"1.19.3",description:"General",source:"@site/../docs/release-notes/1.19.3.md",sourceDirName:"release-notes",slug:"/release-notes/1.19.3",permalink:"/documentation/release-notes/1.19.3",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.19.3.md",version:"current",lastUpdatedBy:"Joel Dierkes",lastUpdatedAt:1650638116,formattedLastUpdatedAt:"4/22/2022",sidebar_label:"1.19.3",frontMatter:{title:"1.19.3",sidebar_label:"1.19.3"}},s=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Bugs",id:"bugs-1",children:[]}]}],u={toc:s};function b(e){var t=e.components,r=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"general"},"General"),Object(o.b)("h3",{id:"enhancements"},"Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Core & Internals: remove leftovers of dict.iteritems for python3 compatibility ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2207"},"#2207")),Object(o.b)("li",{parentName:"ul"},"Rules: Relay of constituent rule to archive rule should not consider temporary unavailable replicas ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2233"},"#2233"))),Object(o.b)("h3",{id:"bugs"},"Bugs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Core & Internals: generic metadata problems ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2141"},"#2141")),Object(o.b)("li",{parentName:"ul"},"Core & Internals: Detection of client location fails on IPv6-only node ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2245"},"#2245")),Object(o.b)("li",{parentName:"ul"},"Recovery: Minos is not able to handle PFNs with different schemes ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2221"},"#2221"))),Object(o.b)("h2",{id:"clients"},"Clients"),Object(o.b)("h3",{id:"bugs-1"},"Bugs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Clients: missing default value for filter options in downloadclient ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2249"},"#2249"))))}b.isMDXComponent=!0},388:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return r?a.a.createElement(m,c(c({ref:t},s),{},{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);