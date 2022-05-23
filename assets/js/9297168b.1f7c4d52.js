"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[238],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return y}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),y=n,d=p["".concat(s,".").concat(y)]||p[y]||m[y]||o;return r?a.createElement(d,i(i({ref:t},u),{},{components:r})):a.createElement(d,i({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1493:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return m}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],c={id:"schema_object_arrays",title:"Object Arrays"},s="Object Arrays",l={unversionedId:"Schema/schema_object_arrays",id:"Schema/schema_object_arrays",title:"Object Arrays",description:'MVOM allows schema definitions which produce arrays of objects. In MultiValue terminology, these structures are generally referred to as "associations". They are generally structured as parallel associative arrays where each array index from an attribute is related to the same index in one or more other attributes.',source:"@site/docs/03 - Schema/06 - Object Arrays.md",sourceDirName:"03 - Schema",slug:"/Schema/schema_object_arrays",permalink:"/mvom/docs/Schema/schema_object_arrays",draft:!1,editUrl:"https://github.com/shawnmcknight/mvom/tree/main/website/docs/03 - Schema/06 - Object Arrays.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"schema_object_arrays",title:"Object Arrays"},sidebar:"docsSidebar",previous:{title:"Embedded Objects",permalink:"/mvom/docs/Schema/schema_embedded_objects"},next:{title:"Encryption",permalink:"/mvom/docs/Schema/schema_encryption"}},u={},m=[{value:"Example",id:"example",level:2}],p={toc:m};function y(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"object-arrays"},"Object Arrays"),(0,o.kt)("p",null,'MVOM allows schema definitions which produce arrays of objects. In MultiValue terminology, these structures are generally referred to as "associations". They are generally structured as parallel associative arrays where each array index from an attribute is related to the same index in one or more other attributes.'),(0,o.kt)("p",null,"When transforming to and from the MultiValue array structures, MVOM will produce an array of objects. Although you ",(0,o.kt)("em",{parentName:"p"},"could")," simply map each of the attributes as arrays and handle the associations manually (as you likely would in MultiValue BASIC), it is far more convenient to treat these associations as a single cohesive unit rather than working with arrays by index position."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Consider a file with two attributes, each containing an array where each multivalue is associated to the same array index in the other attribute. For example, the data might look like this, with ",(0,o.kt)("inlineCode",{parentName:"p"},"{vm}")," representing value marks:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"0001  foo{vm}bar{vm}baz\n0002  123{vm}234{vm}345\n")),(0,o.kt)("p",null,"You can create an object array by adding a property to a schema definition which is an array containing another schema definition. The above file structure could be defined as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const schemaDefinition = {\n  objectArrayProperty: [\n    {\n      associativeProperty1: {\n        type: 'string',\n        path: 1,\n        dictionary: 'STRING_ASSOC_PROP1',\n        required: true,\n      },\n    },\n    {\n      associativeProperty2: {\n        type: 'number',\n        path: 2,\n        dictionary: 'NUMBER_ASSOC_PROP2',\n        dbDecimals: 2,\n        required: true,\n      },\n    },\n  ],\n};\n")),(0,o.kt)("p",null,"The data format above would be transformed into an object-array in the following format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  objectArrayProperty: [\n    {\n      associativeProperty1: 'foo',\n      associativeProperty2: 1.23,\n    },\n    {\n      associativeProperty1: 'bar',\n      associativeProperty2: 2.34,\n    },\n    {\n      associativeProperty1: 'baz',\n      associativeProperty2: 3.45,\n    },\n  ];\n}\n")))}y.isMDXComponent=!0}}]);