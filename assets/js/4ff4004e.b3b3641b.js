"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9949],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=o,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8102:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={id:"how-to-edit-handlebars-marketing-cloud-personalisation",title:"How to edit Handlebars in Marketing Cloud Personalisation?",description:"Learn how to format & edit HandleBars in Marketing Cloud Personalization",keywords:["Handlebars","Web Templates","Interaction Studio","Marketing Cloud Personalization","Personalization"]},i="How to edit Handlebars in Marketing Cloud Personalisation?",l={unversionedId:"personalization/how-to-edit-handlebars-marketing-cloud-personalisation",id:"personalization/how-to-edit-handlebars-marketing-cloud-personalisation",title:"How to edit Handlebars in Marketing Cloud Personalisation?",description:"Learn how to format & edit HandleBars in Marketing Cloud Personalization",source:"@site/docs/personalization/How to edit Handlebars in Marketing Cloud Personalisation.md",sourceDirName:"personalization",slug:"/personalization/how-to-edit-handlebars-marketing-cloud-personalisation",permalink:"/docs/personalization/how-to-edit-handlebars-marketing-cloud-personalisation",draft:!1,editUrl:"https://github.com/arthurbackouche/arthurbackouche/docs/personalization/How to edit Handlebars in Marketing Cloud Personalisation.md",tags:[],version:"current",frontMatter:{id:"how-to-edit-handlebars-marketing-cloud-personalisation",title:"How to edit Handlebars in Marketing Cloud Personalisation?",description:"Learn how to format & edit HandleBars in Marketing Cloud Personalization",keywords:["Handlebars","Web Templates","Interaction Studio","Marketing Cloud Personalization","Personalization"]},sidebar:"tutorialSidebar",previous:{title:"Personalization",permalink:"/docs/category/personalization"},next:{title:"How to use Open Time Email in Marketing Cloud Personalisation",permalink:"/docs/personalization/how-to-use-open-time-email"}},c={},s=[{value:"How to format a date HandleBar in Marketing Cloud Personalization",id:"how-to-format-a-date-handlebar-in-marketing-cloud-personalization",level:2},{value:"Creating a const variable to format the Date",id:"creating-a-const-variable-to-format-the-date",level:2},{value:"Creating a for to loop through each catalog object displayed in the web template",id:"creating-a-for-to-loop-through-each-catalog-object-displayed-in-the-web-template",level:2},{value:"Formating the Catalog Object Attribute with the const",id:"formating-the-catalog-object-attribute-with-the-const",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Watch my video tutorial",id:"watch-my-video-tutorial",level:2}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-edit-handlebars-in-marketing-cloud-personalisation"},"How to edit Handlebars in Marketing Cloud Personalisation?"),(0,o.kt)("p",null,"In Marketing Cloud Personalization, when creating a Web Template Campaign, you will have the possibility to display content from the Object Catalog (i.e Products, Articles) by using Handlebars in the Handlebars Tab of your Template Editor. "),(0,o.kt)("p",null,"In the HandleBars world, you are usually able to proceed, format, compare Handlebars by using the function registerHelper (i.e. IF {{HandleBarA}} > {{HandleBarB}} THEN do something). Unfortunately Marketing Cloud Personalization doesn\u2019t support the function registerHelper (Handlebars doesn\u2019t accept Javascript in Personalization), and hence adding code in the ClientSide Tab of your Template Editor is required to proceed or format HandleBars variables."),(0,o.kt)("p",null,"In this tutorial we will modify the data in the client-side code section and add overwrite data (attributes) into the context object so that it can be used in the handlebars template."),(0,o.kt)("h2",{id:"how-to-format-a-date-handlebar-in-marketing-cloud-personalization"},"How to format a date HandleBar in Marketing Cloud Personalization"),(0,o.kt)("p",null,"Using a HandleBar variable, display the Date Field from your Object Catalog in the HandleBars Tab Editor. Then Click in the ClientSide Tab of the Template Editor. Most of the edits will happen in the function Apply()."),(0,o.kt)("p",null,"As you can see, the function Apply() takes the parameters template and context. Context in Marketing Cloud Personalization represents the root (master folder) that contains all your catalog objects and catalog objects articles. So to access a specific attribute of your object catalog, you will need to write something like this: context.articles","[i]",".attributes.publishDate.value."),(0,o.kt)("h2",{id:"creating-a-const-variable-to-format-the-date"},"Creating a const variable to format the Date"),(0,o.kt)("p",null,"As we are formatting a date in this example, we will declare a new const variable fmt."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"    function apply(context, template) {\n        const contentZoneSelector = SalesforceInteractions.mcis.getContentZoneSelector(context.contentZone);\nconst fmt = new Intl.DateTimeFormat('default', {day: 'numeric', month: 'short', year: 'numeric'})\n\n        return SalesforceInteractions.DisplayUtils\n            .bind(buildBindId(context))\n            .pageElementLoaded(contentZoneSelector)\n            .then((element) => {\n                const html = template(context);\n                SalesforceInteractions.cashDom(element).html(html);\n            });\n    }\n")),(0,o.kt)("p",null,"The objective of the const fmt is format the Object Catalog Attribute Date (context.articles","[i]",".attributes.publishDate.value) in this way: 13 Apr 2022 thanks to the JavaScript function \u201cIntl.DateTimeFormat\u201d."),(0,o.kt)("h2",{id:"creating-a-for-to-loop-through-each-catalog-object-displayed-in-the-web-template"},"Creating a for to loop through each catalog object displayed in the web template"),(0,o.kt)("p",null,"In Order to achieve this formatting we will create a loop that goes through each article displayed in the web template. Here\u2019s the snippet of code once the loop is added with a counter ","[i]",":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"\n    function apply(context, template) {\n        const contentZoneSelector = SalesforceInteractions.mcis.getContentZoneSelector(context.contentZone);\n        const fmt = new Intl.DateTimeFormat('default', {day: 'numeric', month: 'short', year: 'numeric'})\n                        for ( i=0; i<context.Articles.length; i++) {\n                }\n\n        return SalesforceInteractions.DisplayUtils\n            .bind(buildBindId(context))\n            .pageElementLoaded(contentZoneSelector)\n            .then((element) => {\n                const html = template(context);\n                SalesforceInteractions.cashDom(element).html(html);\n            }); \n    }\n")),(0,o.kt)("h2",{id:"formating-the-catalog-object-attribute-with-the-const"},"Formating the Catalog Object Attribute with the const"),(0,o.kt)("p",null,"Finally, we will directly replace the variable object catalog attribute (context.articles","[i]",".attributes.publishDate.value) by the same variable BUT formatted with the fmt const we declared in step 1 (in fact, the function Intl.DateTimeFormat). Here\u2019s the function Apply() updated: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"\n    function apply(context, template) {\n        const contentZoneSelector = SalesforceInteractions.mcis.getContentZoneSelector(context.contentZone);\n        const fmt = new Intl.DateTimeFormat('default', {day: 'numeric', month: 'short', year: 'numeric'})\n                        for ( i=0; i<context.BNarticles.length; i++) {\n                context.Articles[i].attributes.publishDate.value = fmt.format(context.Aarticles[i].attributes.publishDate.value);\n                }\n\n        return SalesforceInteractions.DisplayUtils\n            .bind(buildBindId(context))\n            .pageElementLoaded(contentZoneSelector)\n            .then((element) => {\n                const html = template(context);\n                SalesforceInteractions.cashDom(element).html(html);\n            }); \n    }\n\n")),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"This workaround allows you to modify the content of a HandleBar, use a Comparison operator between 2 Handlebars and more. "),(0,o.kt)("h2",{id:"watch-my-video-tutorial"},"Watch my video tutorial"),(0,o.kt)("iframe",{width:"100%",height:"444",src:"https://www.youtube.com/embed/nbI74wujBVQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))}u.isMDXComponent=!0}}]);