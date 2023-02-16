"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5581],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={id:"inject-contact-journey-builder-rest-api-marketing-cloud",title:"How to inject a contact in a journey using REST API.",description:"Discover how to inject a contact in Marketing Cloud with Postman",keywords:["Marketing Cloud","SFMC","REST API","POSTMAN"]},i="How to inject a contact in a journey using REST API.",c={unversionedId:"config/inject-contact-journey-builder-rest-api-marketing-cloud",id:"config/inject-contact-journey-builder-rest-api-marketing-cloud",title:"How to inject a contact in a journey using REST API.",description:"Discover how to inject a contact in Marketing Cloud with Postman",source:"@site/docs/config/How to inject a contact in a journey using REST API.md",sourceDirName:"config",slug:"/config/inject-contact-journey-builder-rest-api-marketing-cloud",permalink:"/docs/config/inject-contact-journey-builder-rest-api-marketing-cloud",draft:!1,editUrl:"https://github.com/arthurbackouche/arthurbackouche/docs/config/How to inject a contact in a journey using REST API.md",tags:[],version:"current",frontMatter:{id:"inject-contact-journey-builder-rest-api-marketing-cloud",title:"How to inject a contact in a journey using REST API.",description:"Discover how to inject a contact in Marketing Cloud with Postman",keywords:["Marketing Cloud","SFMC","REST API","POSTMAN"]},sidebar:"tutorialSidebar",previous:{title:"How to capture leads from Facebook Ads in Marketing Cloud",permalink:"/docs/config/capture-leads-facebook-ads-appexchange-marketing-cloud"},next:{title:"What is Marketing Cloud Personalization",permalink:"/docs/personalization/what-is-marketing-cloud-personalization"}},l={},u=[{value:"Create a API Package",id:"create-a-api-package",level:2},{value:"Create a Data Extension",id:"create-a-data-extension",level:2},{value:"Create a Journey",id:"create-a-journey",level:2},{value:"Create the POST Request in Postman",id:"create-the-post-request-in-postman",level:2},{value:"Test the API",id:"test-the-api",level:2},{value:"Watch my video tutorial",id:"watch-my-video-tutorial",level:2}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-inject-a-contact-in-a-journey-using-rest-api"},"How to inject a contact in a journey using REST API."),(0,r.kt)("h2",{id:"create-a-api-package"},"Create a API Package"),(0,r.kt)("p",null,"To inject a contact to a Journey throughout API we first need to set-up an API Package. In Marketing Cloud, go to ",(0,r.kt)("inlineCode",{parentName:"p"},"set-up > Apps > Installed Packages"),". Create a new Package, and then click ",(0,r.kt)("inlineCode",{parentName:"p"},"Add Component"),". Choose the Component Type ",(0,r.kt)("inlineCode",{parentName:"p"},"API Integration")," and select ",(0,r.kt)("inlineCode",{parentName:"p"},"Server to Server"),"."),(0,r.kt)("p",null,"The server-to-server Properties to check are: ",(0,r.kt)("inlineCode",{parentName:"p"},"Email: Read"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Journey: Read, Write, Execute"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Data Extensions: Read, Write"),"."),(0,r.kt)("h2",{id:"create-a-data-extension"},"Create a Data Extension"),(0,r.kt)("p",null,"When injecting a contact into a journey, it\u2019s important to keep track of the records. In this case we will create a Data Extension to store the contacts injected into the journey."),(0,r.kt)("p",null,"The Data Extension fields are:\n\u2018\u2019\u2019\n","[CustomerID][EmailID]","\n","[FirstName][LastName]","\n\u2018\u2019\u2019"),(0,r.kt)("h2",{id:"create-a-journey"},"Create a Journey"),(0,r.kt)("p",null,"In Journey Builder, create a Multi-step Journey that uses the widget ",(0,r.kt)("inlineCode",{parentName:"p"},"API Event")," as entry source. You can also add the Email widget to send an email to a subscriber that enters the journey."),(0,r.kt)("p",null,"Within the ",(0,r.kt)("inlineCode",{parentName:"p"},"API Event")," widget, select the Data Extension that you created in the first step."),(0,r.kt)("p",null,"Finally copy the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"Event Definition Key")," it should be a string like this one ",(0,r.kt)("inlineCode",{parentName:"p"},"APIEvent-7bac0d0d-1ab9-b1ec-1226-94bf459d020f")," and click done."),(0,r.kt)("h2",{id:"create-the-post-request-in-postman"},"Create the POST Request in Postman"),(0,r.kt)("p",null,"Postman is an API platform to help developers testing their API and software integrations."),(0,r.kt)("p",null,"After installing the marketing cloud API package. Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Collection")," and then:"),(0,r.kt)("p",null,"At the project workspace level ",(0,r.kt)("inlineCode",{parentName:"p"},"Salesforce Marketing Cloud APIs")," click the tab ",(0,r.kt)("inlineCode",{parentName:"p"},"variables")," and add value to ",(0,r.kt)("inlineCode",{parentName:"p"},"et_subdomain"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"et_clientId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"et_clientSecret"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"et_mid"),".\nIn the folder ",(0,r.kt)("inlineCode",{parentName:"p"},"Auth")," go to ",(0,r.kt)("inlineCode",{parentName:"p"},"Request SFMC Token")," and click ",(0,r.kt)("inlineCode",{parentName:"p"},"Send")," to collect the Token needed to run the ",(0,r.kt)("inlineCode",{parentName:"p"},"Fire Entry Event"),"."),(0,r.kt)("p",null,"Then"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Salesforce Marketing Cloud APIs > Messaging & Journeys > REST > Interactions (Journey Builder) > Journeys > Fire Entry Event")),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Body")," tab of Fire Entry Event, replace the fields Contact Keys, EventDefinitionKey and SubscriberKey."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "ContactKey": "098765432",\n    "EventDefinitionKey":"APIEvent-7bac0d0d-1ab9-b1ec-1226-94bf459d020f",\n    "Data": {\n        "FirstName":"Arthur",\n        "LastName":"Backouche",\n        "CustomerID":"098765432",\n        "EmailID":"arthur@skie.com.au"}\n}\n')),(0,r.kt)("h2",{id:"test-the-api"},"Test the API"),(0,r.kt)("p",null,"The Data Extension that you build in the first step of this tutorial should contain the record injected throughout Postman. The record injected should also receive the email that we added into the Journey."),(0,r.kt)("h2",{id:"watch-my-video-tutorial"},"Watch my video tutorial"),(0,r.kt)("iframe",{width:"100%",height:"444",src:"https://www.youtube.com/embed/SjI5RnJur_4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))}p.isMDXComponent=!0}}]);