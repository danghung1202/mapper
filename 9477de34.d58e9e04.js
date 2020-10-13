(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{125:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(0),r(182)),i={id:"author-use-case",title:"Author's Use-case",sidebar_label:"Author's use-case"},c={unversionedId:"introduction/author-use-case",id:"version-6.0.0/introduction/author-use-case",isDocsHomePage:!1,title:"Author's Use-case",description:"At, ArchitectNow where I work, we utilize OpenAPI Specification to document our API days in days out, on every projects that we see fit.",source:"@site/versioned_docs/version-6.0.0/introduction/author-use-case.md",slug:"/introduction/author-use-case",permalink:"/docs/6.0.0/introduction/author-use-case",editUrl:"https://github.com/nartc/mapper/edit/master/automapper-docusaurus/versioned_docs/version-6.0.0/introduction/author-use-case.md",version:"6.0.0",sidebar_label:"Author's use-case",sidebar:"version-6.0.0/docs",previous:{title:"AutoMapper Anti-pitch",permalink:"/docs/6.0.0/introduction/anti-pitch"},next:{title:"Problems with TypeScript",permalink:"/docs/6.0.0/introduction/problems-with-typescript"}},p=[],s={rightToc:p};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"At, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://architectnow.net"}),"ArchitectNow")," where I work, we utilize ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://swagger.io/docs/specification/about/"}),"OpenAPI Specification")," to document our ",Object(o.b)("strong",{parentName:"p"},"API")," days in days out, on every projects that we see fit.\nCombined with a tool like ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/RicoSuter/NSwag"}),"NSwag")," or ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/swagger-api/swagger-codegen"}),"SwaggerCodegen"),", we have an automation pipeline to generate\n",Object(o.b)("strong",{parentName:"p"},"HTTP calls")," for client-side applications whether it is an ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://angular.io"}),"Angular")," web application, a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://facebook.github.io/react-native/"}),"React Native")," mobile application, or an ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/"}),"Xamarin.Forms")," app.\nAt a high level, we have ",Object(o.b)("strong",{parentName:"p"},"Domain Models")," which are the shape of data that will go in the Database and multiple ",Object(o.b)("em",{parentName:"p"},"conventionally matching")," ",Object(o.b)("strong",{parentName:"p"},"View Models")," that will be exposed to the Client instead of the ",Object(o.b)("strong",{parentName:"p"},"Domain Models")," counterparts.\nWithout ",Object(o.b)("strong",{parentName:"p"},"AutoMapper"),", we would have to manually map a lot of data back and forth on every single API calls."),Object(o.b)("p",null,"Now in ",Object(o.b)("strong",{parentName:"p"},"C#"),", you have ",Object(o.b)("strong",{parentName:"p"},"AutoMapper"),". Not so much in the ",Object(o.b)("strong",{parentName:"p"},"NodeJS")," world. For ",Object(o.b)("strong",{parentName:"p"},"NodeJS")," projects, we leverage an awesome framework called ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://nestjs.com"}),"NestJS")," \ud83c\udf87. ",Object(o.b)("strong",{parentName:"p"},"NestJS"),"\ntakes on ",Object(o.b)("em",{parentName:"p"},"Angular-like")," architecture which helps so much with building maintainable and scalable server-side applications. When working with ",Object(o.b)("strong",{parentName:"p"},"NestJS"),", we take the same approach as we build a ",Object(o.b)("strong",{parentName:"p"},".NET Core")," application.\nUnfortunately, there is not one ",Object(o.b)("strong",{parentName:"p"},"AutoMapper for TypeScript")," solution that is good enough for us which I mention in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/6.0.0/introduction/alternatives"}),"Alternatives")," section. That's why ",Object(o.b)("inlineCode",{parentName:"p"},"@nartc/automapper")," is born."))}u.isMDXComponent=!0},182:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=u(r),m=n,h=b["".concat(i,".").concat(m)]||b[m]||l[m]||o;return r?a.a.createElement(h,c(c({ref:t},s),{},{components:r})):a.a.createElement(h,c({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);