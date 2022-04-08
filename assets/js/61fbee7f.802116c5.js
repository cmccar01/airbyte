"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[8441],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,y=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return n?o.createElement(y,a(a({ref:t},p),{},{components:n})):o.createElement(y,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12834:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var o=n(87462),r=n(63366),l=(n(67294),n(3905)),a=["components"],i={},u="Local Deployment",s={unversionedId:"deploying-airbyte/local-deployment",id:"deploying-airbyte/local-deployment",title:"Local Deployment",description:'{% hint style="info" %}',source:"@site/../docs/deploying-airbyte/local-deployment.md",sourceDirName:"deploying-airbyte",slug:"/deploying-airbyte/local-deployment",permalink:"/deploying-airbyte/local-deployment",editUrl:"https://github.com/airbytehq/airbyte/blob/gitbook/v1/README.md/../docs/deploying-airbyte/local-deployment.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Set up a Connection",permalink:"/quickstart/set-up-a-connection"},next:{title:"On AWS \\(EC2\\)",permalink:"/deploying-airbyte/on-aws-ec2"}},p={},c=[{value:"Setup &amp; launch Airbyte",id:"setup--launch-airbyte",level:2},{value:"Deploy on Windows",id:"deploy-on-windows",level:2},{value:"Setup Guide",id:"setup-guide",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,l.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"local-deployment"},"Local Deployment"),(0,l.kt)("p",null,'{% hint style="info" %}\nThese instructions have been tested on MacOS, Windows 10 and Ubuntu 20.04.\n{% endhint %}'),(0,l.kt)("h2",{id:"setup--launch-airbyte"},"Setup & launch Airbyte"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Install Docker on your workstation ","(","see ",(0,l.kt)("a",{parentName:"li",href:"https://www.docker.com/products/docker-desktop"},"instructions"),")",". Make sure you're on the latest version of ",(0,l.kt)("inlineCode",{parentName:"li"},"docker-compose"),"."),(0,l.kt)("li",{parentName:"ul"},"After Docker is installed, you can immediately get started locally by running:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/airbytehq/airbyte.git\ncd airbyte\ndocker-compose up\n")),(0,l.kt)("p",null,'{% hint style="info" %}'),(0,l.kt)("p",null,"If you're using Mac M1 ","(","Apple Silicon",")"," machines, you must ",(0,l.kt)("a",{parentName:"p",href:"/contributing-to-airbyte/developing-locally"},"build and run Airbyte locally in dev mode"),".\nSome users using Macs with an M1 chip are facing problems running Airbyte even with a locally built version of the platform.\nYou can subscribe to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/2017"},"Issue ","#","2017")," and get updates on M1-related issues."),(0,l.kt)("p",null,"{% endhint %}"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In your browser, just visit ",(0,l.kt)("a",{parentName:"li",href:"http://localhost:8000"},"http://localhost:8000")),(0,l.kt)("li",{parentName:"ul"},"Start moving some data!")),(0,l.kt)("h2",{id:"deploy-on-windows"},"Deploy on Windows"),(0,l.kt)("p",null,"After installing the WSL 2 backend and Docker you should be able to run containers using Windows PowerShell. Additionally, as we note frequently, you will need ",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose")," to build Airbyte from source. The suggested guide already installs ",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose")," on Windows."),(0,l.kt)("h3",{id:"setup-guide"},"Setup Guide"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1. Check out system requirements from ",(0,l.kt)("a",{parentName:"strong",href:"https://docs.docker.com/desktop/windows/install/"},"Docker documentation"),".")),(0,l.kt)("p",null,"Follow the steps on the system requirements, and necessarily, download and install the Linux kernel update package."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"2. Install Docker Desktop on Windows.")),(0,l.kt)("p",null,"Install ",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/windows/install/"},"Docker Desktop")," from here."),(0,l.kt)("p",null,"Make sure to select the options:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("em",{parentName:"li"},"Enable Hyper-V Windows Features")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("em",{parentName:"li"},"Install required Windows components for WSL 2"),"\\\nwhen prompted. After installation, it will require to reboot your computer.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"3. You're done!")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/airbytehq/airbyte.git\ncd airbyte\ndocker-compose up\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In your browser, just visit ",(0,l.kt)("a",{parentName:"li",href:"http://localhost:8000"},"http://localhost:8000")),(0,l.kt)("li",{parentName:"ul"},"Start moving some data!")),(0,l.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,l.kt)("p",null,"If you encounter any issues, just connect to our ",(0,l.kt)("a",{parentName:"p",href:"https://slack.airbyte.io"},"Slack"),". Our community will help! We also have a ",(0,l.kt)("a",{parentName:"p",href:"/troubleshooting/on-deploying"},"troubleshooting")," section in our docs for common problems."))}m.isMDXComponent=!0}}]);