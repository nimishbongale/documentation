(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{208:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var i=r(3),a=r(7),n=(r(0),r(388)),o=["components"],s={title:'1.27.0 "Batdonkey v Superdonkey"',sidebar_label:'1.27.0 "Batdonkey v Superdonkey"'},c={unversionedId:"release-notes/1.27.0",id:"release-notes/1.27.0",isDocsHomePage:!1,title:'1.27.0 "Batdonkey v Superdonkey"',description:"Upgrade Instructions",source:"@site/../docs/release-notes/1.27.0.md",sourceDirName:"release-notes",slug:"/release-notes/1.27.0",permalink:"/documentation/release-notes/1.27.0",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.27.0.md",version:"current",lastUpdatedBy:"Joel Dierkes",lastUpdatedAt:1650638116,formattedLastUpdatedAt:"4/22/2022",sidebar_label:'1.27.0 "Batdonkey v Superdonkey"',frontMatter:{title:'1.27.0 "Batdonkey v Superdonkey"',sidebar_label:'1.27.0 "Batdonkey v Superdonkey"'}},u=[{value:"Upgrade Instructions",id:"upgrade-instructions",children:[]},{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Features",id:"features-1",children:[]},{value:"Enhancements",id:"enhancements-1",children:[]},{value:"Bugs",id:"bugs-1",children:[]}]}],l={toc:u};function b(e){var t=e.components,r=Object(a.a)(e,o);return Object(n.b)("wrapper",Object(i.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),Object(n.b)("p",null,"This feature release requires a database schema upgrade. Please consult the ",Object(n.b)("a",{parentName:"p",href:"https://rucio.cern.ch/documentation/database/"},"documentation")," about upgrading your\ndatabase schema."),Object(n.b)("p",null,"The following changes are necessary and are covered by the ",Object(n.b)("inlineCode",{parentName:"p"},"alembic upgrade head")," command:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Introduction of the ",Object(n.b)("inlineCode",{parentName:"li"},"virtual_placements")," table for optional virtual placement feature. (Alembic revision ",Object(n.b)("inlineCode",{parentName:"li"},"9a45bc4ea66d"),")")),Object(n.b)("h2",{id:"general"},"General"),Object(n.b)("h3",{id:"features"},"Features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Core & Internals: rucio.cfg vs config table ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2630"},"#2630")),Object(n.b)("li",{parentName:"ul"},"Core & Internals: Support DID metadata queries with inequality operators: ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3750"},"#3750")),Object(n.b)("li",{parentName:"ul"},"Core & Internals: Support API to return dataset locks for a given container name ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4807"},"#4807")),Object(n.b)("li",{parentName:"ul"},"Release management: Remove the ",Object(n.b)("inlineCode",{parentName:"li"},"sonar")," daemon ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4957"},"#4957")),Object(n.b)("li",{parentName:"ul"},"Rules: Extend get_dataset_locks API to support requests in bulk ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3982"},"#3982")),Object(n.b)("li",{parentName:"ul"},"Transfers: Certificate selection for Multi_VO conveyor daemons ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4731"},"#4731"))),Object(n.b)("h3",{id:"enhancements"},"Enhancements"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Core & Internals: Non optimal rule reevaluation when attach_dids_to_dids is used with ignore_duplicate option\n",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4178"},"#4178")),Object(n.b)("li",{parentName:"ul"},"Core & Internals: Correct and Avoid redefining of built-in function ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4466"},"#4466")),Object(n.b)("li",{parentName:"ul"},"Core & Internals: Naming restrictions should be enforced for LFN2PFN and SURL algorithms in policy packages\n",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4830"},"#4830")),Object(n.b)("li",{parentName:"ul"},"Core & Internals: New method to set metadata on a list of dids ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4973"},"#4973")),Object(n.b)("li",{parentName:"ul"},"Database: New procedure for accounting ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4983"},"#4983")),Object(n.b)("li",{parentName:"ul"},"Monitoring & Logging: Logging review ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4220"},"#4220")),Object(n.b)("li",{parentName:"ul"},"Recovery: Implement fair share for the Necromancer ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4893"},"#4893")),Object(n.b)("li",{parentName:"ul"},"Rules: request two extensions to move-rule ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4855"},"#4855")),Object(n.b)("li",{parentName:"ul"},"Testing: increase verbosity of logger when running pytests ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5005"},"#5005")),Object(n.b)("li",{parentName:"ul"},"Transfers: Writing to tape: Destination file exists and overwrite is not enable ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4447"},"#4447")),Object(n.b)("li",{parentName:"ul"},"Transfers: Deprecate conveyor-poller-latest ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4762"},"#4762")),Object(n.b)("li",{parentName:"ul"},"Transfers: Requests to unavailable RSEs ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4896"},"#4896")),Object(n.b)("li",{parentName:"ul"},"Transfers: Conveyor-submitter optional partitioning on ",Object(n.b)("inlineCode",{parentName:"li"},"rule_id")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4915"},"#4915")),Object(n.b)("li",{parentName:"ul"},"Transfers: Avoid increasing source ranking on submission failure ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4916"},"#4916")),Object(n.b)("li",{parentName:"ul"},"Transfers: SRM to HTTPS optional compatibility ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4944"},"#4944"))),Object(n.b)("h3",{id:"bugs"},"Bugs"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Authentication & Authorisation: Token cleanup issue ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5032"},"#5032")),Object(n.b)("li",{parentName:"ul"},"Core & Internals: Datasetlocks not properly deleted when detaching datasets from containers ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1860"},"#1860")),Object(n.b)("li",{parentName:"ul"},"Deletion: Deletion timeout does not work on GridFTP ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4994"},"#4994")),Object(n.b)("li",{parentName:"ul"},"Transfers: source ranking never updated correctly for multihop ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4970"},"#4970")),Object(n.b)("li",{parentName:"ul"},"Transfers: regression in conveyor database partition variable name ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5043"},"#5043"))),Object(n.b)("h2",{id:"clients"},"Clients"),Object(n.b)("h3",{id:"features-1"},"Features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Clients: Allow client to choose data access library ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4730"},"#4730")),Object(n.b)("li",{parentName:"ul"},"Clients: Use kebab-case for all command-line options ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4865"},"#4865"))),Object(n.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Clients: list-file-repicas --all-states should show the states ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3431"},"#3431")),Object(n.b)("li",{parentName:"ul"},"Clients: Add dump of request URI and parameters to client in debug mode ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4784"},"#4784")),Object(n.b)("li",{parentName:"ul"},"Clients: Skip updating replica in uploadclient if register_after_upload is true ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4828"},"#4828")),Object(n.b)("li",{parentName:"ul"},"Clients: RuntimeError being thrown on a client side when a config file missing. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4868"},"#4868")),Object(n.b)("li",{parentName:"ul"},"Clients: Dirac interface: make an extract_scope default algorithm variable ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4886"},"#4886")),Object(n.b)("li",{parentName:"ul"},"Clients: pass logger down to the Client ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4920"},"#4920")),Object(n.b)("li",{parentName:"ul"},"Clients: Add an option not to raise NoFilesDownloaded or NotAllFilesDownloaded in downloadclient ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4924"},"#4924")),Object(n.b)("li",{parentName:"ul"},"Clients: Rename command-line option --expiration-date ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4931"},"#4931")),Object(n.b)("li",{parentName:"ul"},"Clients: Add ",Object(n.b)("inlineCode",{parentName:"li"},"ignore_availability")," option to the upload client ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4985"},"#4985"))),Object(n.b)("h3",{id:"bugs-1"},"Bugs"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},'Clients: Incomplete download looks "complete" when restricting RSEs ',Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3824"},"#3824")),Object(n.b)("li",{parentName:"ul"},"Clients: list-file-replicas rses and missing incompatibility ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5007"},"#5007")),Object(n.b)("li",{parentName:"ul"},"Clients: Rucio breaks DIRAC run ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5041"},"#5041"))))}b.isMDXComponent=!0},388:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var i=r(0),a=r.n(i);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=l(r),m=i,h=b["".concat(o,".").concat(m)]||b[m]||p[m]||n;return r?a.a.createElement(h,s(s({ref:t},u),{},{components:r})):a.a.createElement(h,s({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<n;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);