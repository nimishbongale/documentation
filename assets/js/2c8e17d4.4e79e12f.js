(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{111:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),c=(r(0),r(344)),o={title:"1.20.3rc2",sidebar_label:"1.20.3rc2"},i={unversionedId:"release-notes/1.20.3rc2",id:"release-notes/1.20.3rc2",isDocsHomePage:!1,title:"1.20.3rc2",description:"General",source:"@site/../docs/release-notes/1.20.3rc2.md",sourceDirName:"release-notes",slug:"/release-notes/1.20.3rc2",permalink:"/documentation/release-notes/1.20.3rc2",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1620227222,formattedLastUpdatedAt:"5/5/2021",sidebar_label:"1.20.3rc2",frontMatter:{title:"1.20.3rc2",sidebar_label:"1.20.3rc2"}},s=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]}],l={toc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"general"},"General"),Object(c.b)("h3",{id:"enhancements"},"Enhancements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Core & Internals: Replace use of RSE names with ids in core ",Object(c.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2500"},"#2500")),Object(c.b)("li",{parentName:"ul"},"Core & Internals: small enhancements for data import ",Object(c.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2725"},"#2725")),Object(c.b)("li",{parentName:"ul"},"Traces: Kronos needs rse_id update ",Object(c.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2737"},"#2737"))),Object(c.b)("h3",{id:"bugs"},"Bugs"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Core & Internals: Incorrectly passing strings to SQLAlchemy without an explicit text() declaration ",Object(c.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2732"},"#2732")),Object(c.b)("li",{parentName:"ul"},"Core & Internals: Daemon crashes in 1.20.3rc1 ",Object(c.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2747"},"#2747"))))}u.isMDXComponent=!0},344:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,f=p["".concat(o,".").concat(m)]||p[m]||b[m]||c;return r?a.a.createElement(f,i(i({ref:t},l),{},{components:r})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);