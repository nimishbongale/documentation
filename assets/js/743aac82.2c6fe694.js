(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{215:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(411)),i=["components"],c={title:"Subscriptions"},l={unversionedId:"subscriptions",id:"subscriptions",isDocsHomePage:!1,title:"Subscriptions",description:"Rucio Subscriptions exist for the purpose of making data placement",source:"@site/../docs/subscriptions.md",sourceDirName:".",slug:"/subscriptions",permalink:"/documentation/subscriptions",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/subscriptions.md",version:"current",lastUpdatedBy:"Joel Dierkes",lastUpdatedAt:1653393835,formattedLastUpdatedAt:"5/24/2022",frontMatter:{title:"Subscriptions"},sidebar:"docs",previous:{title:"Notifications",permalink:"/documentation/notifications"},next:{title:"Typical Replica Workflow",permalink:"/documentation/replica_workflow"}},p=[],u={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Rucio Subscriptions exist for the purpose of making data placement\ndecisions before the actual data has been created. Subscriptions\ngenerate rules for new datasets based on matching metadata at\nregistration time. Subscriptions are owned by an account and can only\ngenerate rules for that account. Policies may have a lifetime, after\nwhich they will expire."),Object(o.b)("p",null,"An example of a subscription is given below:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Attribute"),Object(o.b)("th",{parentName:"tr",align:null},"Value"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Owner"),Object(o.b)("td",{parentName:"tr",align:null},"tzero")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"match"),Object(o.b)("td",{parentName:"tr",align:null},"project=data11 7TeV, dataType=RAW, stream=physics","*")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"rule"),Object(o.b)("td",{parentName:"tr",align:null},"1\\@CERNTAPE, 1\\@T1TAPE")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"lifetime"),Object(o.b)("td",{parentName:"tr",align:null},"2012-01-01 00:00")))))}s.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);