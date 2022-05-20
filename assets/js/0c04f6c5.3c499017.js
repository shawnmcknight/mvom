"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[639],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3178:function(e,t,n){n.r(t),n.d(t,{assets:function(){return w},contentTitle:function(){return k},default:function(){return E},frontMatter:function(){return g},metadata:function(){return O},toc:function(){return I}});var r=n(7462),a=n(3366),o=n(7294),l=n(3905),i=n(2389),u=n(7392),c=n(7094),s=n(2466),p=n(6010),m="tabList_uSqn",d="tabItem_LplD";function f(e){var t,n,a,l=e.lazy,i=e.block,f=e.defaultValue,v=e.values,b=e.groupId,y=e.className,h=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=v?v:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,u.l)(g,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var O=null===f?f:null!=(t=null!=f?f:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=h[0])?void 0:a.props.value;if(null!==O&&!g.some((function(e){return e.value===O})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+O+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,c.U)(),I=w.tabGroupChoices,T=w.setTabGroupChoices,E=(0,o.useState)(O),j=E[0],N=E[1],x=[],P=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var D=I[b];null!=D&&D!==j&&g.some((function(e){return e.value===D}))&&N(D)}var C=function(e){var t=e.currentTarget,n=x.indexOf(t),r=g[n].value;r!==j&&(P(t),N(r),null!=b&&T(b,r))},M=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,p.Z)("tabs-container",m)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":i},y)},g.map((function(e){var t=e.value,n=e.label,a=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return x.push(e)},onKeyDown:M,onFocus:C,onClick:C},a,{className:(0,p.Z)("tabs__item",d,null==a?void 0:a.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),l?(0,o.cloneElement)(h.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function v(e){var t=(0,i.Z)();return o.createElement(f,(0,r.Z)({key:String(t)},e))}var b="tabItem_OmH5";function y(e){var t=e.children,n=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",className:(0,p.Z)(b,r),hidden:n},t)}var h=["components"],g={id:"installation",title:"Installation"},k="Installation",O={unversionedId:"Introduction/installation",id:"Introduction/installation",title:"Installation",description:"MVOM is available as an npm package. Install using your favorite package manager:",source:"@site/docs/01 - Introduction/02 - Installation.md",sourceDirName:"01 - Introduction",slug:"/Introduction/installation",permalink:"/mvom/docs/Introduction/installation",draft:!1,editUrl:"https://github.com/shawnmcknight/mvom/tree/main/website/docs/01 - Introduction/02 - Installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"installation",title:"Installation"},sidebar:"docsSidebar",previous:{title:"What is MVOM?",permalink:"/mvom/docs/Introduction/what_is_mvom"},next:{title:"Setup and Configuration",permalink:"/mvom/docs/Introduction/setup_and_configuration"}},w={},I=[],T={toc:I};function E(e){var t=e.components,n=(0,a.Z)(e,h);return(0,l.kt)("wrapper",(0,r.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installation"},"Installation"),(0,l.kt)("p",null,"MVOM is available as an ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm")," package. Install using your favorite package manager:"),(0,l.kt)(v,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(y,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save mvom\n"))),(0,l.kt)(y,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add mvom\n")))))}E.isMDXComponent=!0}}]);