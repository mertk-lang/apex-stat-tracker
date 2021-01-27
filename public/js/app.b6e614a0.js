(function(e){function t(t){for(var r,i,s=t[0],l=t[1],c=t[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},o=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0132":function(e,t,a){e.exports=a.p+"img/apexLogo.badc059d.png"},"034f":function(e,t,a){"use strict";a("85ec")},"1ac8":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("HeaderComponent"),a("router-view")],1)},o=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",[a("img",{attrs:{src:e.image}})])},s=[],l={name:"header",data:function(){return{image:a("0132")}}},c=l,u=(a("fdb0"),a("2877")),p=Object(u["a"])(c,i,s,!1,null,"c8b9e860",null),f=p.exports,m={name:"App",components:{HeaderComponent:f}},d=m,g=(a("034f"),Object(u["a"])(d,n,o,!1,null,null,null)),v=g.exports,b=a("8c4f"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"search"},[a("h1",[e._v("View Player Stats")]),a("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"platform"}},[e._v("Platform")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.platform,expression:"platform"}],attrs:{name:"platform",id:"platform"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.platform=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"psn"}},[e._v("Playstation")]),a("option",{attrs:{value:"xbl"}},[e._v("Xbox")]),a("option",{attrs:{value:"Origin"}},[e._v("Origin")])])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"gamertag"}},[e._v("Gamertag")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.gamertag,expression:"gamertag"}],attrs:{type:"text",name:"text",id:"gamertag",placeholder:"PSN ID, Origin ID or Xbox live gamertag"},domProps:{value:e.gamertag},on:{input:function(t){t.target.composing||(e.gamertag=t.target.value)}}})]),e._m(0)])])},_=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-group"},[a("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})])}],y=(a("99af"),{name:"Search",data:function(){return{platform:"psn",gamertag:""}},beforeCreate:function(){document.body.className="body-bg-image"},methods:{onSubmit:function(){this.gamertag?this.$router.push("/profile/".concat(this.platform,"/").concat(this.gamertag)):this.$toasted.show("Please enter a gamertag",{duration:3e3})}}}),x=y,w=Object(u["a"])(x,h,_,!1,null,"6fde7d0e",null),O=w.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[e.loading?a("div",[a("h3",[e._v("Loading...")])]):e._e(),e.error?a("div",[a("h1",[e._v(e._s(e.error))]),a("router-link",{attrs:{to:"/"}},[e._v("Go Back")])],1):e._e(),e.profileData?a("div",{staticClass:"container"},[a("h1",{staticClass:"gamertag"},[a("img",{staticClass:"platform-avatar",attrs:{src:e.profileData.platformInfo.avatarUrl,alt:""}}),e._v(" "+e._s(e.profileData.platformInfo.platformUserId)+" ")]),a("div",{staticClass:"grid"},[a("div",[a("img",{attrs:{src:e.profileData.segments[1].metadata.imageUrl,alt:""}})]),a("div",[a("ul",[a("li",[a("h4",[e._v("Selected Legend")]),a("p",[e._v(e._s(e.profileData.metadata.activeLegendName))])]),e.profileData.segments[0].stats.season7Wins?a("li",[e._v(" "+e._s(e.profileData.segments[0].stats.season2Wins.displayValue)+" ")]):e._e(),e.profileData.segments[0].stats.level.value?a("li",[a("h4",[e._v("Level")]),e._v(" "+e._s(e.profileData.segments[0].stats.level.value)+" ")]):e._e(),e.profileData.segments[0].stats.kills.displayValue?a("li",[a("h4",[e._v("Kills")]),a("p",[e._v(" "+e._s(e.profileData.segments[0].stats.kills.displayValue)+" ")])]):e._e()])])]),a("router-link",{attrs:{to:"/"}},[e._v("Go Back")])],1):e._e()])},j=[],C=(a("96cf"),a("1da1")),P=a("bc3a"),S=a.n(P),k={name:"Profile",data:function(){return{loading:!1,error:null,profileData:null}},beforeCreate:function(){document.body.className="body-bg-no-image"},created:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,S.a.get("/api/v1/profile/".concat(e.$route.params.platform,"/").concat(e.$route.params.gamertag));case 4:a=t.sent,e.profileData=a.data.data,console.log(e.profileData),e.loading=!1,t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](1),e.loading=!1,e.error=t.t0.response.data.message;case 14:case"end":return t.stop()}}),t,null,[[1,10]])})))()}},$=k,N=(a("9b25"),Object(u["a"])($,D,j,!1,null,"a20cdc1e",null)),E=N.exports;r["a"].use(b["a"]);var I=new b["a"]({mode:"history",routes:[{path:"/",name:"search",component:O},{path:"/profile/:platform/:gamertag",name:"profile",component:E}]}),L=a("a65d"),M=a.n(L);r["a"].config.productionTip=!1,r["a"].use(M.a),new r["a"]({router:I,render:function(e){return e(v)}}).$mount("#app")},"85ec":function(e,t,a){},"9b25":function(e,t,a){"use strict";a("1ac8")},b017:function(e,t,a){},fdb0:function(e,t,a){"use strict";a("b017")}});
//# sourceMappingURL=app.b6e614a0.js.map