(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),i=(n(0),n(167)),a={title:"Install",sidebar_position:1},c={unversionedId:"utils/minio/install",id:"utils/minio/install",isDocsHomePage:!1,title:"Install",description:"https://min.io/",source:"@site/docs/utils/minio/install.md",sourceDirName:"utils/minio",slug:"/utils/minio/install",permalink:"/credot-docs/docs/utils/minio/install",editUrl:"https://github.com/skynocover/credot-docs/tree/documentation/docs/utils/minio/install.md",version:"current",sidebarPosition:1,frontMatter:{title:"Install",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"node \u5957\u4ef6",permalink:"/credot-docs/docs/utils/ftp/node"},next:{title:"Node",permalink:"/credot-docs/docs/utils/minio/Node"}},l=[{value:"Install",id:"install",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("a",{parentName:"p",href:"https://min.io/"},"https://min.io/"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Amazon S3 \u958b\u6e90\u7248")),Object(i.b)("h2",{id:"install"},"Install"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"docker-compose.yaml")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'version: "3.7"\n\nservices:\n  app:\n    image: minio/minio\n    command: server /data --console-address ":9001"\n    ports:\n      - 6060:9000\n      - 6061:9001\n    volumes:\n      - /home/cd83207153/minio/data:/data\n    environment:\n      MINIO_ROOT_USER: admin\n      MINIO_ROOT_PASSWORD: 123456\n      MINIO_BROWSER_REDIRECT_URL: "\u7ba1\u7406\u4ecb\u9762\u7db2\u5740"\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"9000: API\u7db2\u5740,\u9810\u89bd\u5716\u6a94\u7db2\u5740"),Object(i.b)("li",{parentName:"ul"},"9001: \u7ba1\u7406\u4ecb\u9762\u7db2\u5740")))}u.isMDXComponent=!0},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,b=p["".concat(a,".").concat(d)]||p[d]||m[d]||i;return n?o.a.createElement(b,c(c({ref:t},s),{},{components:n})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);