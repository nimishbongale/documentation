(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),o=(n(0),n(411)),c=["components"],l={title:"LifetimeClient"},a={unversionedId:"client_api/lifetimeclient",id:"client_api/lifetimeclient",isDocsHomePage:!1,title:"LifetimeClient",description:"list\\_exceptions",source:"@site/../docs/client_api/lifetimeclient.md",sourceDirName:"client_api",slug:"/client_api/lifetimeclient",permalink:"/documentation/client_api/lifetimeclient",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/client_api/lifetimeclient.md",version:"current",frontMatter:{title:"LifetimeClient"},sidebar:"docs",previous:{title:"ImportClient",permalink:"/documentation/client_api/importclient"},next:{title:"LockClient",permalink:"/documentation/client_api/lockclient"}},p=[{value:"list_exceptions",id:"list_exceptions",children:[]},{value:"add_exception",id:"add_exception",children:[]}],b={toc:p};function u(e){var t=e.components,n=Object(i.a)(e,c);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"list_exceptions"},"list","_","exceptions"),Object(o.b)("span",{style:{"white-space":"pre"}},Object(o.b)("p",null,"List exceptions to Lifetime Model."),Object(o.b)("table",{style:{border:"none"}},Object(o.b)("tbody",null,Object(o.b)("tr",{style:{border:"none"}},Object(o.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Arguments"),":")),Object(o.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"id"),": The id of the exception"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"states"),": The states to filter")))))),Object(o.b)("h2",{id:"add_exception"},"add","_","exception"),Object(o.b)("span",{style:{"white-space":"pre"}},Object(o.b)("p",null,"Add exceptions to Lifetime Model."),Object(o.b)("table",{style:{border:"none"}},Object(o.b)("tbody",null,Object(o.b)("tr",{style:{border:"none"}},Object(o.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Arguments"),":")),Object(o.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"dids"),": The list of dids"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"account"),": The account of the requester."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"pattern"),": The account."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"comments"),": The comments associated to the exception."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"expires_at"),": The expiration date of the exception.\nreturns:            The id of the exception.")))))))}u.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),b=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||s[d]||o;return n?i.a.createElement(m,l(l({ref:t},p),{},{components:n})):i.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var p=2;p<o;p++)c[p]=n[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);