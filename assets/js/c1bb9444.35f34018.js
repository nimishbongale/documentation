(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{270:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),i=r(7),a=(r(0),r(344)),o={title:"1.22.7",sidebar_label:"1.22.7"},c={unversionedId:"release-notes/1.22.7",id:"release-notes/1.22.7",isDocsHomePage:!1,title:"1.22.7",description:"General",source:"@site/../docs/release-notes/1.22.7.md",sourceDirName:"release-notes",slug:"/release-notes/1.22.7",permalink:"/documentation/release-notes/1.22.7",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1620227222,formattedLastUpdatedAt:"5/5/2021",sidebar_label:"1.22.7",frontMatter:{title:"1.22.7",sidebar_label:"1.22.7"}},u=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]},{value:"Bugs",id:"bugs-1",children:[]}]}],s={toc:u};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"general"},"General"),Object(a.b)("h3",{id:"enhancements"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Authentication & Authorisation: Default identity not transferred end to end ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3627"},"#3627")),Object(a.b)("li",{parentName:"ul"},"Clients: list-rules --file should show an appropriate error if the DID does not exist ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3617"},"#3617")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: Bulk get_metadata method ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3645"},"#3645")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: remove all non-essential parameters from the heartbeat executable ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3646"},"#3646")),Object(a.b)("li",{parentName:"ul"},"Documentation: REST API documentation does not reflect some actual endpoints ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3630"},"#3630")),Object(a.b)("li",{parentName:"ul"},"Documentation: Fix spelling errors in documentation ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3673"},"#3673")),Object(a.b)("li",{parentName:"ul"},"Subscriptions: Subscription client does not allow listing subscriptions by name only ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3582"},"#3582")),Object(a.b)("li",{parentName:"ul"},"Testing: Travis syntax test fails for forked repositories ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3640"},"#3640")),Object(a.b)("li",{parentName:"ul"},"Transfers: Multihop resolve query inefficient in case of not-connected RSEs ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3261"},"#3261"))),Object(a.b)("h3",{id:"bugs"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Core & Internals: Bad exception when failing to set global account limit ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3199"},"#3199")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: rucio-admin rse update removes default RSE-Tag ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3608"},"#3608")),Object(a.b)("li",{parentName:"ul"},"Deletion: reaper2 crashes on python3 ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3644"},"#3644")),Object(a.b)("li",{parentName:"ul"},"Monitoring & Logging: monitor.py fails with non-default metrics_port ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3623"},"#3623")),Object(a.b)("li",{parentName:"ul"},"Recovery: necromancer do not work if there is more than 1 thread ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3610"},"#3610")),Object(a.b)("li",{parentName:"ul"},"Transfers: __sort_link_ranking in conveyor is done in wrong order ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3340"},"#3340"))),Object(a.b)("h2",{id:"clients"},"Clients"),Object(a.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: Double slash when uploading with xrootd. ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3670"},"#3670")),Object(a.b)("li",{parentName:"ul"},"Rules: List all rules does not have a python equivalent, only REST ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3666"},"#3666"))),Object(a.b)("h3",{id:"bugs-1"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Authentication & Authorisation: OAuth2/OIDC: fix Rucio Client import with auth_type oidc in 1.22.6 ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3609"},"#3609")),Object(a.b)("li",{parentName:"ul"},"Authentication & Authorisation: OAuth2/OIDC: compatibility with Python3 (raw_input/input) ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3637"},"#3637")),Object(a.b)("li",{parentName:"ul"},"Clients: Use quote_plus for rule client ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3135"},"#3135")),Object(a.b)("li",{parentName:"ul"},"RSE Manager: Rucio upload does not honour write_lan ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3626"},"#3626"))))}l.isMDXComponent=!0},344:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,h=b["".concat(o,".").concat(m)]||b[m]||p[m]||a;return r?i.a.createElement(h,c(c({ref:t},s),{},{components:r})):i.a.createElement(h,c({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);