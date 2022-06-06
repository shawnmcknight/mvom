"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[720],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),u=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,i(i({ref:e},c),{},{components:r})):n.createElement(f,i({ref:e},c))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7421:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={id:"what_is_mvom",title:"What is MVOM?"},l="What is MVOM?",u={unversionedId:"Introduction/what_is_mvom",id:"Introduction/what_is_mvom",title:"What is MVOM?",description:"MVOM (MultiValue Object Mapper) is a library which provides the ability to access Multivalue databases (e.g. Unidata, Universe) using applications written for Node.js.",source:"@site/docs/01 - Introduction/01 - What is MVOM.md",sourceDirName:"01 - Introduction",slug:"/Introduction/what_is_mvom",permalink:"/mvom/docs/Introduction/what_is_mvom",draft:!1,editUrl:"https://github.com/STORIS/mvom/tree/main/website/docs/01 - Introduction/01 - What is MVOM.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"what_is_mvom",title:"What is MVOM?"},sidebar:"docsSidebar",next:{title:"Installation",permalink:"/mvom/docs/Introduction/installation"}},c={},p=[{value:"How it works",id:"how-it-works",level:2},{value:"Features",id:"features",level:2}],m={toc:p};function d(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-is-mvom"},"What is MVOM?"),(0,o.kt)("p",null,"MVOM (",(0,o.kt)("strong",{parentName:"p"},"M"),"ulti",(0,o.kt)("strong",{parentName:"p"},"V"),"alue ",(0,o.kt)("strong",{parentName:"p"},"O"),"bject ",(0,o.kt)("strong",{parentName:"p"},"M"),"apper) is a library which provides the ability to access Multivalue databases (e.g. ",(0,o.kt)("a",{parentName:"p",href:"https://www.rocketsoftware.com/products/rocket-unidata-0"},"Unidata"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.rocketsoftware.com/products/rocket-universe-0"},"Universe"),") using applications written for Node.js."),(0,o.kt)("h2",{id:"how-it-works"},"How it works"),(0,o.kt)("p",null,"MVOM works with the ",(0,o.kt)("a",{parentName:"p",href:"https://www.rocketsoftware.com/products/rocket-multivalue-integration-server"},"Rocket MultiValue Integration Server")," (MVIS) to proxy requests from your Node.js application to the MultiValue database server. MVIS maintains connectivity to one or more MultiValue database servers and/or accounts using the standard UniRPC protocol and allows client requests from a variety of different protocols. In the case of MVOM, it relies on MVIS' REST server functionality to issue http requests to MVIS which executes UniBasic subroutines on the database server. The responses from these subroutines is then processed by MVOM and returned to the client application."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Declarative database schema mapping"),(0,o.kt)("li",{parentName:"ul"},"MultiValue to/from Object data transformations",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"String"),(0,o.kt)("li",{parentName:"ul"},"Number"),(0,o.kt)("li",{parentName:"ul"},"Boolean"),(0,o.kt)("li",{parentName:"ul"},"Date"),(0,o.kt)("li",{parentName:"ul"},"Time"),(0,o.kt)("li",{parentName:"ul"},"Date-Time"),(0,o.kt)("li",{parentName:"ul"},"Scalar arrays"),(0,o.kt)("li",{parentName:"ul"},"Associative arrays"))),(0,o.kt)("li",{parentName:"ul"},"Data Validations",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Required value validation"),(0,o.kt)("li",{parentName:"ul"},"Foreign key constraint validation"),(0,o.kt)("li",{parentName:"ul"},"Data type validation and coercion"))),(0,o.kt)("li",{parentName:"ul"},"Database operations",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Read"),(0,o.kt)("li",{parentName:"ul"},"Write"),(0,o.kt)("li",{parentName:"ul"},"Delete"),(0,o.kt)("li",{parentName:"ul"},"Query")))))}d.isMDXComponent=!0}}]);