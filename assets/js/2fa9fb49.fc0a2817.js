"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[4855],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,k=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(k,r(r({ref:t},u),{},{components:n})):a.createElement(k,r({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},54116:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],l={},s="On AWS (EC2)",c={unversionedId:"deploying-airbyte/on-aws-ec2",id:"deploying-airbyte/on-aws-ec2",title:"On AWS (EC2)",description:"The instructions have been tested on Amazon Linux 2 AMI (HVM)",source:"@site/../docs/deploying-airbyte/on-aws-ec2.md",sourceDirName:"deploying-airbyte",slug:"/deploying-airbyte/on-aws-ec2",permalink:"/deploying-airbyte/on-aws-ec2",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/deploying-airbyte/on-aws-ec2.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Local Deployment",permalink:"/deploying-airbyte/local-deployment"},next:{title:"On AWS ECS (Coming Soon)",permalink:"/deploying-airbyte/on-aws-ecs"}},u={},m=[{value:"Create a new instance",id:"create-a-new-instance",level:2},{value:"Install environment",id:"install-environment",level:2},{value:"Install &amp; start Airbyte",id:"install--start-airbyte",level:2},{value:"Connect to Airbyte",id:"connect-to-airbyte",level:2},{value:"Pushing Airbyte logs to CloudWatch",id:"pushing-airbyte-logs-to-cloudwatch",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],p={toc:m};function d(e){var t=e.components,l=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"on-aws-ec2"},"On AWS (EC2)"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The instructions have been tested on ",(0,i.kt)("inlineCode",{parentName:"p"},"Amazon Linux 2 AMI (HVM)")))),(0,i.kt)("h2",{id:"create-a-new-instance"},"Create a new instance"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Launch a new instance")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(79644).Z,width:"851",height:"207"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select instance AMI")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(67079).Z,width:"1032",height:"195"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select instance type",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For testing out Airbyte, a ",(0,i.kt)("inlineCode",{parentName:"li"},"t2.medium")," instance is likely sufficient. Airbyte uses a lot of disk space with images and logs, so make sure to provision at least 30GBs of disk per node."),(0,i.kt)("li",{parentName:"ul"},"For long-running Airbyte installations, we recommend a ",(0,i.kt)("inlineCode",{parentName:"li"},"t2.large")," instance.")))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(54975).Z,width:"1230",height:"93"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Next: Configure Instance Details")," ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You can tune parameters or keep the defaults"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Next: Add Storage"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You can tune parameters or keep the defaults"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Next: Add Tags"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You can tune parameters or keep the defaults"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Next: Configure Security Groups"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"We are going to allow network for ",(0,i.kt)("inlineCode",{parentName:"li"},"ssh")," ")))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(50026).Z,width:"1235",height:"382"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Review and Launch")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Launch")),(0,i.kt)("li",{parentName:"ul"},"Create a ssh key so you can connect to the instance",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Download the key ","(","and don't lose it or you won't be able to connect to the instance",")")))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(14652).Z,width:"694",height:"505"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Launch Instances"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(24878).Z,width:"1317",height:"97"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Wait for the instance to become ",(0,i.kt)("inlineCode",{parentName:"li"},"Running"))),(0,i.kt)("h2",{id:"install-environment"},"Install environment"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Note: The following commands will be entered either on your local terminal or in your ssh session on the instance terminal. The comments above each command block will indicate where to enter the commands."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Connect to your instance")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# In your workstation terminal\nSSH_KEY=~/Downloads/airbyte-key.pem # or wherever you've downloaded the key\nINSTANCE_IP=REPLACE_WITH_YOUR_INSTANCE_IP\nchmod 400 $SSH_KEY # or ssh will complain that the key has the wrong permissions\nssh -i $SSH_KEY ec2-user@$INSTANCE_IP\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install ",(0,i.kt)("inlineCode",{parentName:"li"},"docker"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# In your ssh session on the instance terminal\nsudo yum update -y\nsudo yum install -y docker\nsudo service docker start\nsudo usermod -a -G docker $USER\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install ",(0,i.kt)("inlineCode",{parentName:"li"},"docker-compose"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# In your ssh session on the instance terminal\nsudo wget https://github.com/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m) -O /usr/local/bin/docker-compose\nsudo chmod +x /usr/local/bin/docker-compose\ndocker-compose --version\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Close the ssh connection to ensure the group modification is taken into account")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# In your ssh session on the instance terminal\nlogout\n")),(0,i.kt)("h2",{id:"install--start-airbyte"},"Install & start Airbyte"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Connect to your instance")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# In your workstation terminal\nssh -i $SSH_KEY ec2-user@$INSTANCE_IP\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install Airbyte")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# In your ssh session on the instance terminal\nmkdir airbyte && cd airbyte\nwget https://raw.githubusercontent.com/airbytehq/airbyte/master/{.env,docker-compose.yaml}\ndocker-compose up -d\n")),(0,i.kt)("h2",{id:"connect-to-airbyte"},"Connect to Airbyte"),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For security reasons, we strongly recommend to not expose Airbyte on Internet available ports. Future versions will add support for SSL & Authentication."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create ssh tunnel for port 8000")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you want to use different ports you will need to modify ",(0,i.kt)("inlineCode",{parentName:"p"},"API_URL")," in your ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file and restart Airbyte."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# In your workstation terminal\nssh -i $SSH_KEY -L 8000:localhost:8000 -N -f ec2-user@$INSTANCE_IP\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Just visit ",(0,i.kt)("a",{parentName:"li",href:"http://localhost:8000"},"http://localhost:8000")," in your browser and start moving some data!")),(0,i.kt)("h2",{id:"pushing-airbyte-logs-to-cloudwatch"},"Pushing Airbyte logs to CloudWatch"),(0,i.kt)("p",null,"If you want to get your logs from your Airbyte Docker containers in CloudWatch, simply follow ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/pt/premiumsupport/knowledge-center/cloudwatch-docker-container-logs-proxy/"},"this")," guide to do so."),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"If you encounter any issues, just connect to our ",(0,i.kt)("a",{parentName:"p",href:"https://slack.airbyte.io"},"Slack"),". Our community will help! We also have a ",(0,i.kt)("a",{parentName:"p",href:"/troubleshooting/on-deploying"},"FAQ")," section in our docs for common problems."))}d.isMDXComponent=!0},67079:function(e,t,n){t.Z=n.p+"assets/images/aws_ec2_ami-b374eb781f75f807ac3f1c5cb628056a.png"},54975:function(e,t,n){t.Z=n.p+"assets/images/aws_ec2_instance_type-f1ee46f9d485c76ccb322786cca87f21.png"},24878:function(e,t,n){t.Z=n.p+"assets/images/aws_ec2_instance_view-ced51b997a0ee6be955d2377a8444644.png"},79644:function(e,t,n){t.Z=n.p+"assets/images/aws_ec2_launch-5afed41454f07aee271b33d7f43c663c.png"},50026:function(e,t,n){t.Z=n.p+"assets/images/aws_ec2_security_group-1573ecd2b678ddde6335f0c8a7feee9e.png"},14652:function(e,t,n){t.Z=n.p+"assets/images/aws_ec2_ssh_key-9f083d91a4424347653cb0acd8ce9794.png"}}]);