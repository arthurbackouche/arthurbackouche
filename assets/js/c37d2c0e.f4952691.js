"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5798],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>p});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),u=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),k=a,p=d["".concat(c,".").concat(k)]||d[k]||m[k]||r;return n?i.createElement(p,o(o({ref:t},s),{},{components:n})):i.createElement(p,o({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3699:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=n(7462),a=(n(7294),n(3905));const r={id:"view-link-clicks-marketing-cloud-email",sidebar_label:"How to view link clicks from emails in Marketing Cloud",image:"og/og-view-link-clicks-marketing-cloud-email.png",title:"How to view link clicks from emails in Marketing Cloud",description:"Create a solution to visualize link clicks in Marketing Cloud.",keywords:["Marketing Cloud","SFMC","Emails","Link Clicks","Data Extension"]},o="How to view link clicks from emails in Marketing Cloud",l={unversionedId:"SFMC SQL/view-link-clicks-marketing-cloud-email",id:"SFMC SQL/view-link-clicks-marketing-cloud-email",title:"How to view link clicks from emails in Marketing Cloud",description:"Create a solution to visualize link clicks in Marketing Cloud.",source:"@site/docs/SFMC SQL/How to view link clicks in Marketing Cloud.md",sourceDirName:"SFMC SQL",slug:"/SFMC SQL/view-link-clicks-marketing-cloud-email",permalink:"/docs/SFMC SQL/view-link-clicks-marketing-cloud-email",draft:!1,editUrl:"https://github.com/arthurbackouche/arthurbackouche/docs/SFMC SQL/How to view link clicks in Marketing Cloud.md",tags:[],version:"current",frontMatter:{id:"view-link-clicks-marketing-cloud-email",sidebar_label:"How to view link clicks from emails in Marketing Cloud",image:"og/og-view-link-clicks-marketing-cloud-email.png",title:"How to view link clicks from emails in Marketing Cloud",description:"Create a solution to visualize link clicks in Marketing Cloud.",keywords:["Marketing Cloud","SFMC","Emails","Link Clicks","Data Extension"]},sidebar:"tutorialSidebar",previous:{title:"How to create a Data Extension that contains Unsubscribers",permalink:"/docs/SFMC SQL/How to create a Data Extension that contains unsubscriber"}},c={},u=[{value:"Create a Target Data Extension",id:"create-a-target-data-extension",level:2},{value:"Create a new Automation",id:"create-a-new-automation",level:2},{value:"Create the SQL Query",id:"create-the-sql-query",level:2},{value:"Test and Save your Automation",id:"test-and-save-your-automation",level:2},{value:"Watch my video tutorial",id:"watch-my-video-tutorial",level:2}],s={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-view-link-clicks-from-emails-in-marketing-cloud"},"How to view link clicks from emails in Marketing Cloud"),(0,a.kt)("p",null,"In this tutorial we will create an SQL Automation that allows us to see all the links that are clicked from emails in Marketing Cloud. "),(0,a.kt)("h2",{id:"create-a-target-data-extension"},"Create a Target Data Extension"),(0,a.kt)("p",null,"Create a Target Data Extension ",(0,a.kt)("inlineCode",{parentName:"p"},"EmailLinkClicks")," that have similar attributes with the _Click data view and add the EmailName field to it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"[EmailName]\n[AccountID]\n[OYBAccountID]\n[JobID]\n[ListID]\n[BatchID]\n[SubscriberID]\n[SubscriberKey]\n[EventDate]\n[Domain]\n[URL]\n[LinkName]\n[LinkContent]\n[IsUnique]\n[TriggererSendDefinitionObjectID]\n[TriggeredSendCustomerKey]\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"To avoid an error in Automation Studio, make sure to remove the value associated with the Length of the following fields: OYBAccountID, BatchID, URL, LinkName, LinkContent, TriggererSendDefinitionObjectID,TriggeredSendCustomerKey")),(0,a.kt)("h2",{id:"create-a-new-automation"},"Create a new Automation"),(0,a.kt)("p",null,"After creating your Targeted Data Extension, go in ",(0,a.kt)("inlineCode",{parentName:"p"},"Automation Studio")," and create a ",(0,a.kt)("inlineCode",{parentName:"p"},"New Automation"),".\nAs we want our data about the link clicks from emails to be updated frequently, we will Drag&Drop the widget ",(0,a.kt)("inlineCode",{parentName:"p"},"Schedule")," as a Starting Source. We will set the widget schedule to trigger the automation ",(0,a.kt)("inlineCode",{parentName:"p"},"every 1 hour")," and it will ",(0,a.kt)("inlineCode",{parentName:"p"},"never end"),"."),(0,a.kt)("h2",{id:"create-the-sql-query"},"Create the SQL Query"),(0,a.kt)("p",null,"We will now Drag&Drop the ",(0,a.kt)("inlineCode",{parentName:"p"},"SQL Query Activity")," in the canvas and click ",(0,a.kt)("inlineCode",{parentName:"p"},"Choose")," and then click ",(0,a.kt)("inlineCode",{parentName:"p"},"Create New Query Activity"),". After giving generic information about the Query Activity such as Name, External Key and Description we write the SQL Query."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\nc.AccountID,\nc.OYBAccountID,\nc.JobID,\nc.ListID,\nc.BatchID,\nc.SubscriberID,\nc.SubscriberKey,\nc.EventDate,\nc.Domain,\nc.URL,\nc.LinkName,\nc.[LinkContent],\nc.IsUnique,\nc.TriggererSendDefinitionObjectID,\nc.TriggeredSendCustomerKey,\nj.EmailName\nFROM [_click] c\nJOIN [_Job] j\nON j.JobID = c.JobID\n")),(0,a.kt)("h2",{id:"test-and-save-your-automation"},"Test and Save your Automation"),(0,a.kt)("p",null,"After creating the SQL Query, you can click ",(0,a.kt)("inlineCode",{parentName:"p"},"Next")," and select the target data extension that you initially created ",(0,a.kt)("inlineCode",{parentName:"p"},"EmailLinkClicks"),". Regarding the Data Action, select ",(0,a.kt)("inlineCode",{parentName:"p"},"Append")," as we want to add more Data to the Data Extension after each run. Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Next")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Finish"),". You can now click ",(0,a.kt)("inlineCode",{parentName:"p"},"Run Once")," and test the Automation to make sure it is working as expected. If the test is completed successfully, you should be able to see the results related to Email Links Click in your target Data Extension. You can now Save Your Data Extension."),(0,a.kt)("h2",{id:"watch-my-video-tutorial"},"Watch my video tutorial"),(0,a.kt)("iframe",{width:"100%",height:"444",src:"https://www.youtube.com/embed/Ly2CWI7TqII",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))}d.isMDXComponent=!0}}]);