(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),i=n(7),a=(n(0),n(357)),c=["components"],o={title:"1.15.3",sidebar_label:"1.15.3"},s={unversionedId:"release-notes/1.15.3",id:"release-notes/1.15.3",isDocsHomePage:!1,title:"1.15.3",description:"General",source:"@site/../docs/release-notes/1.15.3.md",sourceDirName:"release-notes",slug:"/release-notes/1.15.3",permalink:"/documentation/release-notes/1.15.3",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.15.3.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1630944616,formattedLastUpdatedAt:"9/6/2021",sidebar_label:"1.15.3",frontMatter:{title:"1.15.3",sidebar_label:"1.15.3"}},u=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]},{value:"Bugs",id:"bugs-1",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Enhancements",id:"enhancements-2",children:[]}]}],l={toc:u};function b(e){var t=e.components,n=Object(i.a)(e,c);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"general"},"General"),Object(a.b)("h3",{id:"enhancements"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Documentation: Fixing some typos in documentation ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/867"},"#867")),Object(a.b)("li",{parentName:"ul"},"Release management: generate release notes script limited to github api page limit ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/862"},"#862")),Object(a.b)("li",{parentName:"ul"},"Release management: Commit message hook does not work with CLI message ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/870"},"#870"))),Object(a.b)("h3",{id:"bugs"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Core & Internals: importlib not python 2.6 compatible ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/875"},"#875")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: dids: setting events with set_metadata fails ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/943"},"#943")),Object(a.b)("li",{parentName:"ul"},"Documentation: Fixing grammatical errors in the documentation ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/886"},"#886")),Object(a.b)("li",{parentName:"ul"},"Documentation: RSE expressions link not working  ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/910"},"#910"))),Object(a.b)("h2",{id:"clients"},"Clients"),Object(a.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: Sorting of replicas in list_replicas ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/668"},"#668")),Object(a.b)("li",{parentName:"ul"},"Clients: Fix client dependencies for python3 ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/930"},"#930")),Object(a.b)("li",{parentName:"ul"},"Clients:  Add more python version support in setup_rucio_client.py ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/938"},"#938"))),Object(a.b)("h3",{id:"bugs-1"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: Rucio Upload Should Respect verify_checksum Flag ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/847"},"#847"))),Object(a.b)("h2",{id:"webui"},"WebUI"),Object(a.b)("h3",{id:"enhancements-2"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"WebUI: Pretty print json in subscriptions table ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/913"},"#913"))))}b.isMDXComponent=!0},357:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,h=b["".concat(c,".").concat(m)]||b[m]||p[m]||a;return n?i.a.createElement(h,o(o({ref:t},u),{},{components:n})):i.a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var u=2;u<a;u++)c[u]=n[u];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);