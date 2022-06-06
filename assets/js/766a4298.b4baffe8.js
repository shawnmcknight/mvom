"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[571],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9530:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"model_version",title:"The __v Property"},c="The __v Property",d={unversionedId:"Model/Advanced Topics/model_version",id:"Model/Advanced Topics/model_version",title:"The __v Property",description:'The v property of a Model instance is a special internal value which indicates the "version" of the data that the Model was instantiated from during database read operations. It is generated by calculating a hash of the record after it was read from disk. The v property exists on all Model instances and is accessible to consumers of the Model.',source:"@site/docs/04 - Model/07 - Advanced Topics/01 - The __v Property.md",sourceDirName:"04 - Model/07 - Advanced Topics",slug:"/Model/Advanced Topics/model_version",permalink:"/mvom/docs/Model/Advanced Topics/model_version",draft:!1,editUrl:"https://github.com/shawnmcknight/mvom/tree/main/website/docs/04 - Model/07 - Advanced Topics/01 - The __v Property.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"model_version",title:"The __v Property"},sidebar:"docsSidebar",previous:{title:"Sorting",permalink:"/mvom/docs/Model/Querying/model_query_sorting"},next:{title:"Projection",permalink:"/mvom/docs/Model/Advanced Topics/model_projection"}},l={},p=[{value:"How Its Used",id:"how-its-used",level:2}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-__v-property"},"The ","_","_","v Property"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"__v")," property of a ",(0,a.kt)("inlineCode",{parentName:"p"},"Model"),' instance is a special internal value which indicates the "version" of the data that the ',(0,a.kt)("inlineCode",{parentName:"p"},"Model")," was instantiated from during database read operations. It is generated by calculating a hash of the record after it was read from disk. The ",(0,a.kt)("inlineCode",{parentName:"p"},"__v")," property exists on all ",(0,a.kt)("inlineCode",{parentName:"p"},"Model")," instances and is accessible to consumers of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Model"),"."),(0,a.kt)("h2",{id:"how-its-used"},"How Its Used"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"__v")," property is primarily used during save operations in order to ensure that the current state of the data has not changed since the ",(0,a.kt)("inlineCode",{parentName:"p"},"Model")," was instantiated. In order to ensure data integrity, MVOM will reject saves where the contents of a record has changed between the time a ",(0,a.kt)("inlineCode",{parentName:"p"},"Model")," instance was created and the time the record is written to disk. If MVOM detects that a record has changed it will abort the save attempt and throw a ",(0,a.kt)("inlineCode",{parentName:"p"},"DocumentVersionMismatchError"),"."),(0,a.kt)("p",null,"Related: ",(0,a.kt)("a",{parentName:"p",href:"../model_saving"},"Saving a Model")))}m.isMDXComponent=!0}}]);