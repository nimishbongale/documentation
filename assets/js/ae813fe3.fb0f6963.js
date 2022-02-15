(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{265:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),i=(n(0),n(377)),a=["components"],c={id:"contributing-improvements",title:"Contributing Improvements",sidebar_label:"Contributing Improvements"},u={unversionedId:"contributing-improvements",id:"contributing-improvements",isDocsHomePage:!1,title:"Contributing Improvements",description:"There are two types of documentation hosted on Rucio as detailed",source:"@site/../docs/Contributing-Improvements.md",sourceDirName:".",slug:"/contributing-improvements",permalink:"/documentation/contributing-improvements",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/Contributing-Improvements.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1644949796,formattedLastUpdatedAt:"2/15/2022",sidebar_label:"Contributing Improvements",frontMatter:{id:"contributing-improvements",title:"Contributing Improvements",sidebar_label:"Contributing Improvements"},sidebar:"docs",previous:{title:"Types of Pages",permalink:"/documentation/page-types"},next:{title:"New Content Contribution Guide",permalink:"/documentation/new-content-contribution-guide"}},s=[{value:"API Documentation",id:"api-documentation",children:[]},{value:"Markdown documentation",id:"markdown-documentation",children:[]}],p={toc:s};function b(e){var t=e.components,n=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There are two types of documentation hosted on Rucio as detailed\nin the ",Object(i.b)("a",{parentName:"p",href:"page-types"},Object(i.b)("strong",{parentName:"a"},"Types of Pages"))," section. Should you wish to\ncontribute improvements to any of them, kindly follow the\nguidelines below per the section."),Object(i.b)("h2",{id:"api-documentation"},"API Documentation"),Object(i.b)("p",null,"The source for this section lives in the\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/rucio/rucio/"},Object(i.b)("inlineCode",{parentName:"a"},"rucio/rucio"))," GitHub repository. Below are\nthe two sub-categories that we maintain documentation for:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/tree/master/lib/rucio/web/rest/flaskapi/v1"},Object(i.b)("strong",{parentName:"a"},"Rest API"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/tree/master/lib/rucio/client"},Object(i.b)("strong",{parentName:"a"},"Client API")))),Object(i.b)("p",null,"Since the documentation is directly derived from the source, any change to the\ndocumentation needs to be made in the Source code.  Please submit an issue or\npull request to the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/rucio/rucio/"},Object(i.b)("inlineCode",{parentName:"a"},"rucio/rucio")),"\nrepository with your suggestions for contribution.  Once the changes have been\napproved & pushed into the main branch, the changes will be available at\n",Object(i.b)("a",{parentName:"p",href:"https://rucio.cern.ch/documentation"},"https://rucio.cern.ch/documentation")," on the next day."),Object(i.b)("h2",{id:"markdown-documentation"},"Markdown documentation"),Object(i.b)("p",null,"The source for this section lives in the ",Object(i.b)("inlineCode",{parentName:"p"},"docs")," folder within the main branch\nof the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/rucio/documentation"},Object(i.b)("inlineCode",{parentName:"a"},"rucio/documentation"))," GitHub\nrepository. Improvements may be suggested by submitting an issue or pull request\nto the ",Object(i.b)("strong",{parentName:"p"},"main")," branch of the repository.  Once the changes are approved, GitHub\nActions will trigger the build process and publish on to GitHub pages."))}b.isMDXComponent=!0},377:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},l=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),b=p(n),l=r,d=b["".concat(a,".").concat(l)]||b[l]||m[l]||i;return n?o.a.createElement(d,c(c({ref:t},s),{},{components:n})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=l;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"}}]);