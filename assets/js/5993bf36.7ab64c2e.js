(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{107:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return d}));var n=t(3),o=t(7),c=(t(0),t(167)),a={title:"docker",sidebar_position:1},i={unversionedId:"install/docker",id:"install/docker",isDocsHomePage:!1,title:"docker",description:"link",source:"@site/docs/install/docker.md",sourceDirName:"install",slug:"/install/docker",permalink:"/credot-docs/docs/install/docker",editUrl:"https://github.com/skynocover/credot-docs/tree/documentation/docs/install/docker.md",version:"current",sidebarPosition:1,frontMatter:{title:"docker",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"ngrok",permalink:"/credot-docs/docs/utils/ngrok"},next:{title:"node",permalink:"/credot-docs/docs/install/node"}},l=[{value:"\u57fa\u672c\u5de5\u5177\u5b89\u88dd",id:"\u57fa\u672c\u5de5\u5177\u5b89\u88dd",children:[]},{value:"docker key",id:"docker-key",children:[]},{value:"release version",id:"release-version",children:[]},{value:"docker install",id:"docker-install",children:[]},{value:"docker-compose",id:"docker-compose",children:[]}],s={toc:l};function d(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/ubuntu/"},"link")),Object(c.b)("h2",{id:"\u57fa\u672c\u5de5\u5177\u5b89\u88dd"},"\u57fa\u672c\u5de5\u5177\u5b89\u88dd"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"sudo apt-get update\nsudo apt-get install \\\n    apt-transport-https \\\n    ca-certificates \\\n    curl \\\n    gnupg \\\n    lsb-release\n")),Object(c.b)("h2",{id:"docker-key"},"docker key"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\n")),Object(c.b)("h2",{id:"release-version"},"release version"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'echo \\\n  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \\\n  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\n')),Object(c.b)("h2",{id:"docker-install"},"docker install"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"sudo apt-get update\nsudo apt-get install docker-ce docker-ce-cli containerd.io\n")),Object(c.b)("h2",{id:"docker-compose"},"docker-compose"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"link")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'sudo curl -L "https://github.com/docker/compose/releases/download/1.29.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\n')),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"sudo chmod +x /usr/local/bin/docker-compose\ndocker-compose --version\n")))}d.isMDXComponent=!0},167:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),d=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=d(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(t),b=n,m=p["".concat(a,".").concat(b)]||p[b]||u[b]||c;return t?o.a.createElement(m,i(i({ref:r},s),{},{components:t})):o.a.createElement(m,i({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,a=new Array(c);a[0]=b;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<c;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);