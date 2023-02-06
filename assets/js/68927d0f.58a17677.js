"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[51],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,i(i({ref:t},l),{},{components:n})):a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6885:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={title:"How to create a Data Extension that contains Unsubscribers",description:"Learn how to create a data Extension that contains the list of Unsubcribers in Marketing Cloud",keywords:["Marketing Cloud","SFMC","Data Extension","DE","SQL","Automation Studio"]},i="How to create a Data Extension that contains unsubscribers",s={unversionedId:"SFMC SQL/How to create a Data Extension that contains unsubscriber",id:"SFMC SQL/How to create a Data Extension that contains unsubscriber",title:"How to create a Data Extension that contains Unsubscribers",description:"Learn how to create a data Extension that contains the list of Unsubcribers in Marketing Cloud",source:"@site/docs/SFMC SQL/How to create a Data Extension that contains unsubscriber.md",sourceDirName:"SFMC SQL",slug:"/SFMC SQL/How to create a Data Extension that contains unsubscriber",permalink:"/docs/SFMC SQL/How to create a Data Extension that contains unsubscriber",draft:!1,editUrl:"https://github.com/arthurbackouche/arthurbackouche/docs/SFMC SQL/How to create a Data Extension that contains unsubscriber.md",tags:[],version:"current",frontMatter:{title:"How to create a Data Extension that contains Unsubscribers",description:"Learn how to create a data Extension that contains the list of Unsubcribers in Marketing Cloud",keywords:["Marketing Cloud","SFMC","Data Extension","DE","SQL","Automation Studio"]},sidebar:"tutorialSidebar",previous:{title:"How to copy records from a Data extension to another DE with an SQL Query",permalink:"/docs/SFMC SQL/How to copy records from a Data extension to another DE with an SQL Query"},next:{title:"How to view link clicks from emails in Marketing Cloud",permalink:"/docs/SFMC SQL/view-link-clicks-marketing-cloud-email"}},c={},u=[{value:"Create a Target Data Extension",id:"create-a-target-data-extension",level:2},{value:"Create an SQL Query in Automation Studio",id:"create-an-sql-query-in-automation-studio",level:2},{value:"Test and Activate the Automation",id:"test-and-activate-the-automation",level:2}],l={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-create-a-data-extension-that-contains-unsubscribers"},"How to create a Data Extension that contains unsubscribers"),(0,r.kt)("p",null,"The objective of this feature is to create a Data Extension that contains information related to the users that are unsubscribing from Marketing Cloud. We will use the Data View: Unsubscribe that allows us to pull these information. Add the following field to the Data Extension:"),(0,r.kt)("h2",{id:"create-a-target-data-extension"},"Create a Target Data Extension"),(0,r.kt)("p",null,"We need to store somewhere the information related to users that are unsubscribing from Marketing Cloud. We will create a Data Extension with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"MasterUnsubscribers"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[SubscriberKey][Text + Primary Key]\n[EventDate][Text]\n[JobID][Text]\n[ListID][Text]\n[BatchID][Text]\n")),(0,r.kt)("h2",{id:"create-an-sql-query-in-automation-studio"},"Create an SQL Query in Automation Studio"),(0,r.kt)("p",null,"The first step is to create an SQL Query in Automation Studio. From the Marketing Cloud home page we are going in Journey Builder and then ",(0,r.kt)("inlineCode",{parentName:"p"},"Automation Studio"),". From there we can click on the button ",(0,r.kt)("inlineCode",{parentName:"p"},"New Automation")," and then we will Drag&Drop the widget ",(0,r.kt)("inlineCode",{parentName:"p"},"Schedule")," as an Starting Source. We want this Automation to be refreshed on a ",(0,r.kt)("inlineCode",{parentName:"p"},"hourly basis")," and it should ",(0,r.kt)("inlineCode",{parentName:"p"},"never end"),". Next, we can Drag&Drop the ",(0,r.kt)("inlineCode",{parentName:"p"},"SQL Query")," widget and click ",(0,r.kt)("inlineCode",{parentName:"p"},"Choose")," and then ",(0,r.kt)("inlineCode",{parentName:"p"},"Create New Query Activty"),"."),(0,r.kt)("p",null,"After Giving generic information to the Query such as Name, External Key, Folder Location and Description. "),(0,r.kt)("p",null,"Please find below the code of the Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\nSubscriberKey AS SubscriberKey,\nEventDate AS EventDate,\nJobID AS JobID,\nListID AS ListID,\nBatchID AS BatchID\nFROM _Unsubscribe\n")),(0,r.kt)("p",null,"You can now save the Automation. Don't forget to select ",(0,r.kt)("inlineCode",{parentName:"p"},"Overwrite")," as the way of pushing the data in the Target Data Extension.\nFinally you can save the Automation give it a ",(0,r.kt)("inlineCode",{parentName:"p"},"Name"),", a ",(0,r.kt)("inlineCode",{parentName:"p"},"Description")," and an ",(0,r.kt)("inlineCode",{parentName:"p"},"External Key")," and click ",(0,r.kt)("inlineCode",{parentName:"p"},"Save"),"."),(0,r.kt)("h2",{id:"test-and-activate-the-automation"},"Test and Activate the Automation"),(0,r.kt)("p",null,"Once you saved your Automation, you can click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Run Once"),", then click ",(0,r.kt)("inlineCode",{parentName:"p"},"Select All Activities")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Run"),".\nNow go in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Activity")," tab of your Automation. You should see the test running with the SQL Query widget in Blue."),(0,r.kt)("p",null,"If the SQL Query is blue the test is running.\nIf the SQL Query is red the test is errored.\nIf the SQL Query is green the test is complete."),(0,r.kt)("p",null,"Once the test is complete, you can go in your Target Data Extension ",(0,r.kt)("inlineCode",{parentName:"p"},"MasterUnsubscribers")," and check the results."))}d.isMDXComponent=!0}}]);