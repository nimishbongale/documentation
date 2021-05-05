(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{170:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),i=(r(0),r(344)),c={title:"1.21.7",sidebar_label:"1.21.7"},o={unversionedId:"release-notes/1.21.7",id:"release-notes/1.21.7",isDocsHomePage:!1,title:"1.21.7",description:"General",source:"@site/../docs/release-notes/1.21.7.md",sourceDirName:"release-notes",slug:"/release-notes/1.21.7",permalink:"/documentation/release-notes/1.21.7",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1620227222,formattedLastUpdatedAt:"5/5/2021",sidebar_label:"1.21.7",frontMatter:{title:"1.21.7",sidebar_label:"1.21.7"}},l=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]}]}],s={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: PanDA prefers different return from list_dataset_replicas_vp ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3257"},"#3257")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Add quote/rule approvers to CMS ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3272"},"#3272")),Object(i.b)("li",{parentName:"ul"},"Transfers: Copy_pin_lifetime values in FTS ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3035"},"#3035"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: Undertaker can not delete did with Generic Metadata ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2840"},"#2840")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: There should not be VP replicas if there are no xrootd accessible replicas ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3258"},"#3258")),Object(i.b)("li",{parentName:"ul"},"Deletion: Fix variable initialization in delete_replica ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3275"},"#3275")),Object(i.b)("li",{parentName:"ul"},"Rebalancing: BB8 in decommission mode does not check whether a rule already has a child rule ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3253"},"#3253")),Object(i.b)("li",{parentName:"ul"},"Recovery: Bug when a file with no available replicas is declared ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2960"},"#2960"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: StoRM protocol verbosity ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3262"},"#3262"))))}u.isMDXComponent=!0},344:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||i;return r?a.a.createElement(m,o(o({ref:t},s),{},{components:r})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);