"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[3192],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>y});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},l=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,c=t.parentName,l=a(t,["components","mdxType","originalType","parentName"]),d=p(n),y=o,m=d["".concat(c,".").concat(y)]||d[y]||u[y]||i;return n?r.createElement(m,s(s({ref:e},l),{},{components:n})):r.createElement(m,s({ref:e},l))}));function y(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=t,a.mdxType="string"==typeof t?t:o,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59928:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={},s="Step 8: Test Connector",a={unversionedId:"connector-development/tutorials/cdk-tutorial-python-http/test-your-connector",id:"connector-development/tutorials/cdk-tutorial-python-http/test-your-connector",title:"Step 8: Test Connector",description:"Unit Tests",source:"@site/../docs/connector-development/tutorials/cdk-tutorial-python-http/8-test-your-connector.md",sourceDirName:"connector-development/tutorials/cdk-tutorial-python-http",slug:"/connector-development/tutorials/cdk-tutorial-python-http/test-your-connector",permalink:"/connector-development/tutorials/cdk-tutorial-python-http/test-your-connector",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/tutorials/cdk-tutorial-python-http/8-test-your-connector.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"mySidebar",previous:{title:"Step 7: Use the Connector in Airbyte",permalink:"/connector-development/tutorials/cdk-tutorial-python-http/use-connector-in-airbyte"},next:{title:"Building a Python Source",permalink:"/connector-development/tutorials/building-a-python-source"}},c={},p=[{value:"Unit Tests",id:"unit-tests",level:2},{value:"Integration Tests",id:"integration-tests",level:2},{value:"Standard Tests",id:"standard-tests",level:2}],l={toc:p};function u(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"step-8-test-connector"},"Step 8: Test Connector"),(0,o.kt)("h2",{id:"unit-tests"},"Unit Tests"),(0,o.kt)("p",null,"Add any relevant unit tests to the ",(0,o.kt)("inlineCode",{parentName:"p"},"unit_tests")," directory. Unit tests should ",(0,o.kt)("strong",{parentName:"p"},"not")," depend on any secrets."),(0,o.kt)("p",null,"You can run the tests using ",(0,o.kt)("inlineCode",{parentName:"p"},"python -m pytest -s unit_tests"),"."),(0,o.kt)("h2",{id:"integration-tests"},"Integration Tests"),(0,o.kt)("p",null,"Place any integration tests in the ",(0,o.kt)("inlineCode",{parentName:"p"},"integration_tests")," directory such that they can be ",(0,o.kt)("a",{parentName:"p",href:"https://docs.pytest.org/en/6.2.x/goodpractices.html#conventions-for-python-test-discovery"},"discovered by pytest"),"."),(0,o.kt)("p",null,"Run integration tests using ",(0,o.kt)("inlineCode",{parentName:"p"},"python -m pytest -s integration_tests"),"."),(0,o.kt)("p",null,"More information on integration testing can be found on ",(0,o.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/connector-development/testing-connectors/#running-integration-tests"},"the Testing Connectors doc"),"."),(0,o.kt)("h2",{id:"standard-tests"},"Standard Tests"),(0,o.kt)("p",null,"Standard tests are a fixed set of tests Airbyte provides that every Airbyte source connector must pass. While they're only required if you intend to submit your connector to Airbyte, you might find them helpful in any case. See ",(0,o.kt)("a",{parentName:"p",href:"../../testing-connectors/"},"Testing your connectors")),(0,o.kt)("p",null,"If you want to submit this connector to become a default connector within Airbyte, follow steps 8 onwards from the ",(0,o.kt)("a",{parentName:"p",href:"/connector-development/tutorials/building-a-python-source#step-8-set-up-standard-tests"},"Python source checklist")))}u.isMDXComponent=!0}}]);