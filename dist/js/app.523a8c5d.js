(function(e){function t(t){for(var n,o,s=t[0],c=t[1],l=t[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==i[c]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},i={app:0},a=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0b95":function(e,t,r){"use strict";var n=r("e9e6"),i=r.n(n);i.a},"143c":function(e,t,r){},"18be":function(e,t,r){},1916:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("router-view")],1)},a=[],o=r("2877"),s={},c=Object(o["a"])(s,i,a,!1,null,null,null),l=c.exports,u=r("8c4f"),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"landing-wrapper"},[r("div",{staticClass:"navbar"},[r("navbar",{on:{"smooth-scroll-to":e.smoothScrollTo}})],1),r("div",{staticClass:"email-section"},[r("email-section")],1),r("div",{staticClass:"features",attrs:{id:"features"}},e._l(e.features,(function(e){return r("features",{key:e.id,attrs:{icon:e.icon,title:e.title,description:e.description}})})),1),r("div",{staticClass:"video",attrs:{id:"video"}},[r("Video")],1),r("div",{staticClass:"pricing",attrs:{id:"pricing"}},e._l(e.products,(function(e,t){return r("Pricing",{key:t,attrs:{title:e.title,price:e.price,description:e.description}})})),1),r("Footer")],1)},f=[],p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"header",attrs:{id:"header"}},[e._m(0),r("ul",{staticClass:"main-nav",attrs:{id:"nav-bar"}},[r("li",[r("a",{attrs:{href:"#features"},on:{click:function(t){return t.preventDefault(),e.smoothScrollTo("#features")}}},[e._v("Features")])]),r("li",[r("a",{attrs:{href:"#video"},on:{click:function(t){return t.preventDefault(),e.smoothScrollTo("#video")}}},[e._v("How It Works")])]),r("li",[r("a",{attrs:{href:"#pricing"},on:{click:function(t){return t.preventDefault(),e.smoothScrollTo("#pricing")}}},[e._v("Pricing")])])])])},v=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",{staticClass:"logo"},[r("a",{attrs:{href:"#"}},[e._v("Northstar Fashion")])])}],h={name:"Navbar",methods:{smoothScrollTo:function(e){this.$emit("smooth-scroll-to",e)}}},m=h,b=(r("763e"),Object(o["a"])(m,p,v,!1,null,"2eb285dc",null)),_=b.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("img",{staticClass:"logo",attrs:{src:e.logo,alt:"Northstar Fashion Logo"}}),r("div",{staticClass:"title-description"},[e._v("A place where fashionistas come to life")]),e._m(0)])},g=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",[r("input",{attrs:{type:"text",placeholder:"Enter your email address",required:""}}),r("button",{staticClass:"button"},[e._v("Get Started")])])}],w=r("b640"),C=r.n(w),S={name:"EmailSection",computed:{logo:function(){return C.a}}},O=S,j=(r("d6d9"),Object(o["a"])(O,y,g,!1,null,"0898f77a",null)),x=j.exports,F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"inner-feature"},[r("div",{staticClass:"icon-section"},[r("font-awesome-icon",{staticClass:"fa-icon",attrs:{icon:e.icon}})],1),r("div",{staticClass:"description-section"},[r("div",{staticClass:"feature-title"},[e._v(e._s(e.title))]),r("div",{staticClass:"feature-description"},[e._v(e._s(e.description))])])])},k=[],E={name:"Features",props:{icon:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,required:!0}}},P=E,$=(r("aefe"),Object(o["a"])(P,F,k,!1,null,"6b9267ba",null)),T=$.exports,q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("iframe",{staticClass:"iframe-video",attrs:{src:"https://www.youtube.com/embed/7m16dFI1AF8",height:"300px",width:"100%",frameborder:"0",allowfullscreen:""}})},M=[],D={name:"Video"},A=D,N=(r("e9f9"),Object(o["a"])(A,q,M,!1,null,"19375e3e",null)),I=N.exports,V=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"product"},[r("div",{staticClass:"level"},[e._v(e._s(e.title))]),r("h2",{staticClass:"applied-font"},[e._v("From $"+e._s(e.price))]),r("ul",{staticClass:"applied-font"},e._l(e.description,(function(t){return r("li",{key:t},[e._v(e._s(t))])})),0),r("button",{staticClass:"btn applied-font"},[e._v("Select")])])},J=[],L=(r("a9e3"),{name:"Pricing",props:{title:{type:String,required:!0},price:{type:Number,required:!0},description:{type:Array,required:!0}}}),W=L,H=(r("0b95"),Object(o["a"])(W,V,J,!1,null,"2fe8d0a5",null)),B=H.exports,G=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Q=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",[r("ul",[r("li",[r("a",{attrs:{href:""}},[e._v("Privacy")])]),r("li",[r("a",{attrs:{href:""}},[e._v("Terms")])]),r("li",[r("a",{attrs:{href:""}},[e._v("Contact")])])]),r("span",[e._v("Developed By P Yutasane")])])}],Y={name:"Footer"},z=Y,K=(r("dee3"),Object(o["a"])(z,G,Q,!1,null,"59a21174",null)),R=K.exports,U=[{id:1,icon:"tshirt",title:"Premium Quality",description:"Combining high-quality materials, affordability, and flattering styles, our company makes the better basics you'll want to wear every day."},{id:2,icon:"ship",title:"Imported From Thailand",description:"All our products are imported from Thailand of the highest qualities."},{id:3,icon:"shipping-fast",title:"Fast Delivery",description:"Our same day delivery service can deliver your urgent documents and parcels to the door, anywhere in Australia as soon as possible, 24 hours a day, 7 days a week."}],X=[{title:"Men Fashion",price:15,description:["Sweater","Shirt","Jeans","Suit","Much more..."]},{title:"Women Fashion",price:50,description:["Skirts","Dresses","Neckwear","Headbands","Much more..."]},{title:"Children Fashion",price:40,description:["Designer Clothing","Casual Wear","Footwear","Accessories","Much more..."]}],Z={name:"Landing",components:{EmailSection:x,Navbar:_,Features:T,Video:I,Pricing:B,Footer:R},created:function(){this.features=U,this.products=X},methods:{smoothScrollTo:function(e){document.querySelector(e).scrollIntoView({behavior:"smooth"})}}},ee=Z,te=(r("cbf6"),Object(o["a"])(ee,d,f,!1,null,null,null)),re=te.exports;n["a"].use(u["a"]);var ne=[{path:"/",name:"Landing",component:re}],ie=new u["a"]({mode:"history",base:"/",routes:ne}),ae=ie,oe=r("ecee"),se=r("c074"),ce=r("ad3d");oe["c"].add(se["c"],se["a"],se["b"]),n["a"].component("font-awesome-icon",ce["a"]),n["a"].component("font-awesome-layers",ce["b"]),n["a"].component("font-awesome-layers-text",ce["c"]),n["a"].config.productionTip=!1,new n["a"]({router:ae,render:function(e){return e(l)}}).$mount("#app")},"67d0":function(e,t,r){},"763e":function(e,t,r){"use strict";var n=r("1916"),i=r.n(n);i.a},aefe:function(e,t,r){"use strict";var n=r("f1d7"),i=r.n(n);i.a},b640:function(e,t,r){e.exports=r.p+"img/logo.9708b8ac.jpg"},ba20:function(e,t,r){},cbf6:function(e,t,r){"use strict";var n=r("18be"),i=r.n(n);i.a},d6d9:function(e,t,r){"use strict";var n=r("ba20"),i=r.n(n);i.a},dee3:function(e,t,r){"use strict";var n=r("143c"),i=r.n(n);i.a},e9e6:function(e,t,r){},e9f9:function(e,t,r){"use strict";var n=r("67d0"),i=r.n(n);i.a},f1d7:function(e,t,r){}});
//# sourceMappingURL=app.523a8c5d.js.map