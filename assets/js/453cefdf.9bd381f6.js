"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[321],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=m(n),u=a,h=p["".concat(s,".").concat(u)]||p[u]||l[u]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7588:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return l}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={id:"schema_embedded_objects",title:"Embedded Objects"},s="Embedded Objects",m={unversionedId:"Schema/schema_embedded_objects",id:"Schema/schema_embedded_objects",title:"Embedded Objects",description:"MVOM will work with the defined schema structure to produce an object that follows the structure of the schema. That is, a property of a schema definition can also be a schema definition. In this way, an object can be embedded in the parent object. This allows for relating data that might be semantically understood more easily if it was held in a contained object rather than being properties of the parent object.",source:"@site/docs/03 - Schema/05 - Embedded Objects.md",sourceDirName:"03 - Schema",slug:"/Schema/schema_embedded_objects",permalink:"/mvom/docs/Schema/schema_embedded_objects",draft:!1,editUrl:"https://github.com/shawnmcknight/mvom/tree/main/website/docs/03 - Schema/05 - Embedded Objects.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"schema_embedded_objects",title:"Embedded Objects"},sidebar:"docsSidebar",previous:{title:"Scalar Arrays",permalink:"/mvom/docs/Schema/schema_scalar_arrays"},next:{title:"Object Arrays",permalink:"/mvom/docs/Schema/schema_object_arrays"}},d={},l=[{value:"Example",id:"example",level:2}],p={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"embedded-objects"},"Embedded Objects"),(0,o.kt)("p",null,"MVOM will work with the defined schema structure to produce an object that follows the structure of the schema. That is, a property of a schema definition can also be a schema definition. In this way, an object can be embedded in the parent object. This allows for relating data that might be semantically understood more easily if it was held in a contained object rather than being properties of the parent object."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Consider a file containing customer information that has several attributes which represent the parts of a name: prefix/title, first/given name, middle name, last/family name, and suffix. Along with those attributes, there are several other attributes defining information about that customer. You could simply define a schema with properties such as ",(0,o.kt)("inlineCode",{parentName:"p"},"givenName")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"familyName"),", or you can create an embedded schema definition such as this example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const schemaDefinition = {\n  name: {\n    prefix: {\n      type: 'string',\n      path: 1,\n    },\n    given: {\n      type: 'string',\n      path: 2,\n    },\n    middle: {\n      type: 'string',\n      path: 3,\n    },\n    family: {\n      type: 'string',\n      path: 4,\n    },\n    suffix: {\n      type: 'string',\n      path: 5,\n    },\n  },\n  someOtherData: {\n    type: 'string',\n    path: 6,\n  },\n};\n\nconst schema = new Schema(schemaDefinition);\n")),(0,o.kt)("p",null,"This schema would transform into a data structure in the following format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  name: {\n    prefix: 'Ms.',\n    given: 'Jane',\n    middle: null,\n    family: 'Doe',\n    suffix: null,\n  },\n  someOtherData: 'some other string data'\n}\n")))}u.isMDXComponent=!0}}]);