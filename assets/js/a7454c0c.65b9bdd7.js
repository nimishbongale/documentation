(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{276:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return a})),n.d(t,"default",(function(){return s}));var o=n(3),l=n(7),c=(n(0),n(411)),r=["components"],b={title:"AccountLimitClient"},i={unversionedId:"client_api/accountlimitclient",id:"client_api/accountlimitclient",isDocsHomePage:!1,title:"AccountLimitClient",description:"set\\account\\limit",source:"@site/../docs/client_api/accountlimitclient.md",sourceDirName:"client_api",slug:"/client_api/accountlimitclient",permalink:"/documentation/client_api/accountlimitclient",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/client_api/accountlimitclient.md",version:"current",frontMatter:{title:"AccountLimitClient"},sidebar:"docs",previous:{title:"AccountClient",permalink:"/documentation/client_api/accountclient"},next:{title:"BaseClient",permalink:"/documentation/client_api/baseclient"}},a=[{value:"set_account_limit",id:"set_account_limit",children:[]},{value:"delete_account_limit",id:"delete_account_limit",children:[]},{value:"set_local_account_limit",id:"set_local_account_limit",children:[]},{value:"delete_local_account_limit",id:"delete_local_account_limit",children:[]},{value:"set_global_account_limit",id:"set_global_account_limit",children:[]},{value:"delete_global_account_limit",id:"delete_global_account_limit",children:[]}],u={toc:a};function s(e){var t=e.components,n=Object(l.a)(e,r);return Object(c.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"set_account_limit"},"set","_","account","_","limit"),Object(c.b)("span",{style:{"white-space":"pre"}},Object(c.b)("p",null,"Sets an account limit for a given limit scope."),Object(c.b)("table",{style:{border:"none"}},Object(c.b)("tbody",null,Object(c.b)("tr",{style:{border:"none"}},Object(c.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Arguments"),":")),Object(c.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"account"),": The name of the account."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"rse"),": The rse name."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"bytes_"),": An integer with the limit in bytes."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"locality"),": The scope of the account limit. 'local' or 'global'."))),Object(c.b)("tr",{style:{border:"none"}},Object(c.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns"),":")),Object(c.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(c.b)("p",null,"  True if quota was created successfully else False.")))))),Object(c.b)("h2",{id:"delete_account_limit"},"delete","_","account","_","limit"),Object(c.b)("span",{style:{"white-space":"pre"}},Object(c.b)("p",null,"Deletes an account limit for a given limit scope."),Object(c.b)("table",{style:{border:"none"}},Object(c.b)("tbody",null,Object(c.b)("tr",{style:{border:"none"}},Object(c.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Arguments"),":")),Object(c.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"account"),": The name of the account."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"rse"),": The rse name."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"locality"),": The scope of the account limit. 'local' or 'global'."))),Object(c.b)("tr",{style:{border:"none"}},Object(c.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns"),":")),Object(c.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(c.b)("p",null,"  True if quota was created successfully else False.")))))),Object(c.b)("h2",{id:"set_local_account_limit"},"set","_","local","_","account","_","limit"),Object(c.b)("span",{style:{"white-space":"pre"}},Object(c.b)("p",null,"Sends the request to set an account limit for an account."),Object(c.b)("table",{style:{border:"none"}},Object(c.b)("tbody",null,Object(c.b)("tr",{style:{border:"none"}},Object(c.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Arguments"),":")),Object(c.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"account"),": The name of the account."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"rse"),": The rse name."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"bytes_"),": An integer with the limit in bytes."))),Object(c.b)("tr",{style:{border:"none"}},Object(c.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns"),":")),Object(c.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(c.b)("p",null,"  True if quota was created successfully else False.")))))),Object(c.b)("h2",{id:"delete_local_account_limit"},"delete","_","local","_","account","_","limit"),Object(c.b)("span",{style:{"white-space":"pre"}},Object(c.b)("p",null,"Sends the request to remove an account limit."),Object(c.b)("table",{style:{border:"none"}},Object(c.b)("tbody",null,Object(c.b)("tr",{style:{border:"none"}},Object(c.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Arguments"),":")),Object(c.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"account"),": The name of the account."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"rse"),": The rse name."))),Object(c.b)("tr",{style:{border:"none"}},Object(c.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Raises"),":")),Object(c.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"AccountNotFound"),": if account doesn't exist."))),Object(c.b)("tr",{style:{border:"none"}},Object(c.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns"),":")),Object(c.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(c.b)("p",null,"  True if quota was removed successfully. False otherwise.")))))),Object(c.b)("h2",{id:"set_global_account_limit"},"set","_","global","_","account","_","limit"),Object(c.b)("span",{style:{"white-space":"pre"}},Object(c.b)("p",null,"Sends the request to set a global account limit for an account."),Object(c.b)("table",{style:{border:"none"}},Object(c.b)("tbody",null,Object(c.b)("tr",{style:{border:"none"}},Object(c.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Arguments"),":")),Object(c.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"account"),": The name of the account."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"rse_expression"),": The rse expression."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"bytes_"),": An integer with the limit in bytes."))),Object(c.b)("tr",{style:{border:"none"}},Object(c.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns"),":")),Object(c.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(c.b)("p",null,"  True if quota was created successfully else False.")))))),Object(c.b)("h2",{id:"delete_global_account_limit"},"delete","_","global","_","account","_","limit"),Object(c.b)("span",{style:{"white-space":"pre"}},Object(c.b)("p",null,"Sends the request to remove a global account limit."),Object(c.b)("table",{style:{border:"none"}},Object(c.b)("tbody",null,Object(c.b)("tr",{style:{border:"none"}},Object(c.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Arguments"),":")),Object(c.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"account"),": The name of the account."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"rse_expression"),": The rse expression."))),Object(c.b)("tr",{style:{border:"none"}},Object(c.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Raises"),":")),Object(c.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"AccountNotFound"),": if account doesn't exist."))),Object(c.b)("tr",{style:{border:"none"}},Object(c.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns"),":")),Object(c.b)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},Object(c.b)("p",null,"  True if quota was removed successfully. False otherwise.")))))))}s.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var o=n(0),l=n.n(o);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var a=l.a.createContext({}),u=function(e){var t=l.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=u(e.components);return l.a.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,r=e.parentName,a=i(e,["components","mdxType","originalType","parentName"]),s=u(n),d=o,O=s["".concat(r,".").concat(d)]||s[d]||p[d]||c;return n?l.a.createElement(O,b(b({ref:t},a),{},{components:n})):l.a.createElement(O,b({ref:t},a))}));function O(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,r=new Array(c);r[0]=d;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:o,r[1]=b;for(var a=2;a<c;a++)r[a]=n[a];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);