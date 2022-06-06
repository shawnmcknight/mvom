"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(a),u=r,h=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return a?n.createElement(h,l(l({ref:t},s),{},{components:a})):n.createElement(h,l({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8891:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={id:"schema_basics",title:"Schema Basics"},p="Schema Basics",d={unversionedId:"Schema/schema_basics",id:"Schema/schema_basics",title:"Schema Basics",description:"The Schema class allows you to define your data definition for your MultiValue files. This definition is used to transform MultiValue data between the database and a JavaScript object. Additionally, it allows you to define data validation requirements to aid in ensuring data validity upon writing to the database.",source:"@site/docs/03 - Schema/01 - Basics.md",sourceDirName:"03 - Schema",slug:"/Schema/schema_basics",permalink:"/mvom/docs/Schema/schema_basics",draft:!1,editUrl:"https://github.com/STORIS/mvom/tree/main/website/docs/03 - Schema/01 - Basics.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"schema_basics",title:"Schema Basics"},sidebar:"docsSidebar",previous:{title:"Connection",permalink:"/mvom/docs/connection"},next:{title:"String",permalink:"/mvom/docs/Schema/Scalar Schema Types/schema_type_string"}},s={},m=[{value:"Creating a schema",id:"creating-a-schema",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Schema Definition",id:"schema-definition",level:2},{value:"Properties common to all schema definition types",id:"properties-common-to-all-schema-definition-types",level:3},{value:"Mandatory properties",id:"mandatory-properties",level:3},{value:"Type property",id:"type-property",level:4},{value:"Path property",id:"path-property",level:4},{value:"Attribute based paths",id:"attribute-based-paths",level:5},{value:"Value based paths",id:"value-based-paths",level:5},{value:"Subvalue based paths",id:"subvalue-based-paths",level:5},{value:"Optional Properties",id:"optional-properties",level:3},{value:"Dictionary property",id:"dictionary-property",level:4},{value:"Required property",id:"required-property",level:4},{value:"Encrypted",id:"encrypted",level:4},{value:"Example",id:"example",level:3}],c={toc:m};function u(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"schema-basics"},"Schema Basics"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Schema")," class allows you to define your data definition for your MultiValue files. This definition is used to transform MultiValue data between the database and a JavaScript object. Additionally, it allows you to define data validation requirements to aid in ensuring data validity upon writing to the database."),(0,i.kt)("h2",{id:"creating-a-schema"},"Creating a schema"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Schema")," class is exported from MVOM as a named export. To create a schema object, you should use the ",(0,i.kt)("inlineCode",{parentName:"p"},"new")," operator."),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"constructor(definition: SchemaDefinition, options?: SchemaConstructorOptions): Schema\n")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"definition"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"object")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("a",{parentName:"td",href:"#schema-definition"},"definition")," for the schema")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"options"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"object")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"./schema_options"},"Options object")," (see link)")))),(0,i.kt)("h2",{id:"schema-definition"},"Schema Definition"),(0,i.kt)("p",null,"The schema definition is an object which describes the layout of the JavaScript object structure, how it will be accessed from a MultiValue file, and what validations will be performed when writing to a MultiValue record. You can define your own property names and give each property a mapping to a particular location in the file. Depending on what type of data is being mapped there will be different options available in the schema definition."),(0,i.kt)("h3",{id:"properties-common-to-all-schema-definition-types"},"Properties common to all schema definition types"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Mandatory"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},'"string"'),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},'"number"'),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},'"boolean"'),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},'"ISOCalendarDate"'),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},'"ISOTime"'),(0,i.kt)("br",null),(0,i.kt)("inlineCode",{parentName:"td"},'"ISOCalendarDateTime"')),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"A string identifying the data type of the value represented by this definition")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"path")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("a",{parentName:"td",href:"#path-property"},"path")," to the location of the data")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"dictionary")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The dictionary name to use for query conditionals for this property")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"required")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"Indicate whether this property is mandatory")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"encrypted")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"Indicate whether this property should be encrypted")))),(0,i.kt)("h3",{id:"mandatory-properties"},"Mandatory properties"),(0,i.kt)("p",null,"All mapped properties in a schema definition require two properties regardless of what type of data they are mapping. These properties are the ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," properties. The ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," property defines the data type of the data being mapped and the ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," property defines the location of the data in the file."),(0,i.kt)("h4",{id:"type-property"},"Type property"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," property can be any of the supported schema types: ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ISOCalendarDate"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ISOTime"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"ISOCalendarDateTime"),"."),(0,i.kt)("h4",{id:"path-property"},"Path property"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," property can be either a string or a number and it defines the location of the data in the MultiValue file. Data can be located at a specified attribute, attribute + value, or attribute + value + subvalue."),(0,i.kt)("h5",{id:"attribute-based-paths"},"Attribute based paths"),(0,i.kt)("p",null,"For data located in an attribute, the ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," can either be an integer number or a integer number like string. This value represents the 1-indexed position of the data in the file. For instance, if the data is located in the third attribute of a file, the ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," can either be ",(0,i.kt)("inlineCode",{parentName:"p"},"3")," or ",(0,i.kt)("inlineCode",{parentName:"p"},'"3"'),"."),(0,i.kt)("h5",{id:"value-based-paths"},"Value based paths"),(0,i.kt)("p",null,"For data located in a specific value of an attribute, the ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," will be a dot-delimited string of integers with two parts. That is, the format of the string will be ",(0,i.kt)("inlineCode",{parentName:"p"},'"n.n"')," where ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," represents an integer. For instance, if the data is located in the second value of the third attribute of a file, the ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," would be defined as ",(0,i.kt)("inlineCode",{parentName:"p"},'"3.2"'),"."),(0,i.kt)("h5",{id:"subvalue-based-paths"},"Subvalue based paths"),(0,i.kt)("p",null,"For data located in a specific subvalue of a value of an attribute, the ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," will be a dot-delimited string of integers with three parts. That is, the format of the string will be ",(0,i.kt)("inlineCode",{parentName:"p"},'"n.n.n"')," where ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," represents an integer value. For instance, If the data is locatated in the first subvalue of the second value of the third attribute of a file, the ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," would be defined as ",(0,i.kt)("inlineCode",{parentName:"p"},'"3.2.1"'),"."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It's very likely that if you have data defined using subvalue based paths that there is either a better way to describe that data in MVOM or you might be employing a schema anti-pattern. Although this mechanism is supported by MVOM, it may be best to evaluate if there is another way to describe your schema or consider refactoring your physical database structures."))),(0,i.kt)("h3",{id:"optional-properties"},"Optional Properties"),(0,i.kt)("h4",{id:"dictionary-property"},"Dictionary property"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"dictionary")," property indicates the MultiValue dictionary that is associated with the data indicated in the definition. It is used for the purposes of query execution. The ",(0,i.kt)("inlineCode",{parentName:"p"},"dictionary")," property is necessary if you wish to use the property for conditionals in a query, but is otherwise optional."),(0,i.kt)("h4",{id:"required-property"},"Required property"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"required")," property indicates that a value must be present when saving. If the value is ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),", or empty string (string types only) then an error will be thrown when saving."),(0,i.kt)("h4",{id:"encrypted"},"Encrypted"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"encrypted")," property indicates that a value should be encrypted on save and decrypted on access. See the ",(0,i.kt)("a",{parentName:"p",href:"./schema_encryption"},"encryption")," topic for more information."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"The below is a relatively trivial example of mapping a simple file structure in MVOM. Suppose you had a file shaped like:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Attribute Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Data type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"Customer ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"integer")),(0,i.kt)("td",{parentName:"tr",align:null},"Open receivables balance")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"date")),(0,i.kt)("td",{parentName:"tr",align:null},"Last activity date (internal MultiValue format)")))),(0,i.kt)("p",null,"A schema definition for this structure might look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const schemaDefinition = {\n  customerId: { type: 'string', path: 1 },\n  openBalance: { type: 'number', path: 2 },\n  lastActivityDate: { type: 'ISOCalendarDate', path: 3 },\n};\n\nconst schema = new Schema(schemaDefinition);\n")),(0,i.kt)("p",null,"More detailed examples will follow later in the discussion of the various schema types."))}u.isMDXComponent=!0}}]);