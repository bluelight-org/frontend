(function(){var e={3090:function(e,t,r){"use strict";r(6992),r(8674),r(9601),r(7727);var n=r(144),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view"),r("notifications",{attrs:{group:"notification",position:"bottom right"}}),r("ThemeToggler")],1)},a=[],i=r(8345),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"card align-content-center",style:{background:e.cardColor}},[r("div",{staticClass:"card-body",style:{background:e.cardColor}},[r("h1",{staticClass:"card-title"},[e._v("Login")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.usernameValue,expression:"usernameValue"}],staticClass:"form-control",style:{background:e.inputColor,borderColor:e.inputBorderColor,color:e.textColor},attrs:{placeholder:"Username",type:"text"},domProps:{value:e.usernameValue},on:{input:function(t){t.target.composing||(e.usernameValue=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordValue,expression:"passwordValue"}],staticClass:"form-control",style:{background:e.inputColor,borderColor:e.inputBorderColor,color:e.textColor},attrs:{placeholder:"Password",type:"password"},domProps:{value:e.passwordValue},on:{input:function(t){t.target.composing||(e.passwordValue=t.target.value)}}}),r("div",{staticClass:"d-flex flex-column"},[r("button",{staticClass:"btn btn-primary",style:{backgroundColor:e.buttonColor,borderColor:e.buttonColor},on:{click:function(t){return e.login(e.usernameValue,e.passwordValue)}}},[e._v(" Anmelden ")]),r("a",{attrs:{href:"/register"}},[e._v("Register")])])])])])},u=[],c=r(1165),l=function e(){(0,c.Z)(this,e),this.background="white",this.textColor="black",this.cardColor="white",this.inputColor="white",this.inputBorderColor="#ced4da",this.buttonColor="#007bff",this.navbarColor="#EA0000",this.themeTogglerColor="#3e3e3e"},d=function e(){(0,c.Z)(this,e),this.background="#161616",this.textColor="white",this.cardColor="#222222",this.inputColor="#2d2d2d",this.inputBorderColor="#2d2d2d",this.buttonColor="#03397e",this.navbarColor="#AD0202",this.themeTogglerColor="#cdcdcd"};function p(){var e=localStorage.getItem("color-scheme");return null!=e?"dark"==e?new d:new l:(localStorage.setItem("color-scheme","dark"),new d)}var h=r(5199),f=r(6018),v=(r(5666),r(1539),r(2222),"/api"),m=function(){function e(){(0,c.Z)(this,e)}return(0,f.Z)(e,[{key:"login",value:function(){var e=(0,h.Z)(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:throw new Error("Method not implemented.");case 1:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"register",value:function(){var e=(0,h.Z)(regeneratorRuntime.mark((function e(t,r,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:throw new Error("Method not implemented.");case 1:case"end":return e.stop()}}),e)})));function t(t,r,n){return e.apply(this,arguments)}return t}()},{key:"createMission",value:function(e,t,r,n,o,a){throw new Error("Method not implemented.")}},{key:"createProfile",value:function(e,t,r){throw new Error("Method not implemented.")}},{key:"createStation",value:function(e,t,r){throw new Error("Method not implemented.")}},{key:"createVehicle",value:function(e,t,r){throw new Error("Method not implemented.")}},{key:"deleteAllMissions",value:function(){throw new Error("Method not implemented.")}},{key:"deleteAllStations",value:function(){throw new Error("Method not implemented.")}},{key:"deleteAllVehicles",value:function(e){throw new Error("Method not implemented.")}},{key:"deleteMission",value:function(e){throw new Error("Method not implemented.")}},{key:"deleteProfile",value:function(){throw new Error("Method not implemented.")}},{key:"deleteStation",value:function(e){throw new Error("Method not implemented.")}},{key:"getAllMissions",value:function(){throw new Error("Method not implemented.")}},{key:"getAllStations",value:function(){throw new Error("Method not implemented.")}},{key:"getAllVehicles",value:function(e){throw new Error("Method not implemented.")}},{key:"getMission",value:function(e){throw new Error("Method not implemented.")}},{key:"getStation",value:function(e){throw new Error("Method not implemented.")}},{key:"updateMission",value:function(e,t,r,n,o,a,i){throw new Error("Method not implemented.")}},{key:"updateProfile",value:function(e,t){throw new Error("Method not implemented.")}},{key:"updateStation",value:function(e,t,r){throw new Error("Method not implemented.")}}],[{key:"getAccessToken",value:function(){return this.get("/auth/accesstoken?username="+localStorage.getItem("username"))}},{key:"get",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return this.req("GET",e,void 0,void 0,t,0,r)}},{key:"post",value:function(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";return this.req("POST",e,t,n,r)}},{key:"req",value:function(){var e=(0,h.Z)(regeneratorRuntime.mark((function e(t,r,n){var o,a,i,s,u,c,l,d,p,h=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o=h.length>3&&void 0!==h[3]?h[3]:"application/json",a=!(h.length>4&&void 0!==h[4])||h[4],i=h.length>5&&void 0!==h[5]?h[5]:0,s=h.length>6&&void 0!==h[6]&&h[6],!(this.accessToken&&new Date(1e3*+this.accessToken.deadline)<new Date)){e.next=18;break}if(e.prev=5,!(i>3)){e.next=8;break}return e.abrupt("return","expired");case 8:return e.next=10,this.getAccessToken();case 10:return this.accessToken=e.sent,u=i+1,e.abrupt("return",this.req(t,r,n,o,a,u,s));case 15:throw e.prev=15,e.t0=e["catch"](5),e.t0;case 18:return c=void 0,n&&(c="string"!==typeof n&&"application/json"===o?JSON.stringify(n):n),l={},"multipart/form-data"!==o&&(l["content-type"]=o),this.accessToken&&(l["authorization"]="accessToken "+this.accessToken.token),e.next=25,window.fetch("".concat(v).concat(r),{method:t,headers:l,body:c,credentials:"include",mode:"same-origin"});case 25:if(d=e.sent,401!==d.status){e.next=55;break}if(e.prev=27,s){e.next=43;break}return e.next=31,d.json();case 31:if(p=e.sent,"invalid access token"!==p.error.message[0]){e.next=41;break}return e.next=35,this.getAccessToken();case 35:if(this.accessToken=e.sent,!(i<3)){e.next=40;break}return e.abrupt("return",this.req(t,r,n,o,a,i+1,s));case 40:return e.abrupt("return",p);case 41:e.next=51;break;case 43:return e.next=45,this.getAccessToken();case 45:if(this.accessToken=e.sent,!(i<3)){e.next=50;break}return e.abrupt("return",this.req(t,r,n,o,a,i+1,s));case 50:return e.abrupt("return",null);case 51:e.next=55;break;case 53:e.prev=53,e.t1=e["catch"](27);case 55:if(204!==d.status&&"0"!==d.headers.get("content-length")){e.next=57;break}return e.abrupt("return",{});case 57:if(!s){e.next=63;break}return e.next=60,d.blob();case 60:return e.abrupt("return",e.sent);case 63:return e.abrupt("return",d.json());case 64:case"end":return e.stop()}}),e,this,[[5,15],[27,53]])})));function t(t,r,n){return e.apply(this,arguments)}return t}()}]),e}(),g=function(){function e(){(0,c.Z)(this,e),this.service=new m}return(0,f.Z)(e,[{key:"register",value:function(){var e=(0,h.Z)(regeneratorRuntime.mark((function e(t,r,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.service.register(t,r,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(t,r,n){return e.apply(this,arguments)}return t}()},{key:"login",value:function(){var e=(0,h.Z)(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.service.login(t,r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"createMission",value:function(){var e=(0,h.Z)(regeneratorRuntime.mark((function e(t,r,n,o,a,i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.service.createMission(t,r,n,o,a,i);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(t,r,n,o,a,i){return e.apply(this,arguments)}return t}()},{key:"createProfile",value:function(){var e=(0,h.Z)(regeneratorRuntime.mark((function e(t,r,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.service.createProfile(t,r,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(t,r,n){return e.apply(this,arguments)}return t}()},{key:"createStation",value:function(){var e=(0,h.Z)(regeneratorRuntime.mark((function e(t,r,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.service.createStation(t,r,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(t,r,n){return e.apply(this,arguments)}return t}()},{key:"createVehicle",value:function(){var e=(0,h.Z)(regeneratorRuntime.mark((function e(t,r,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.service.createVehicle(t,r,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(t,r,n){return e.apply(this,arguments)}return t}()},{key:"deleteAllMissions",value:function(){var e=(0,h.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.service.deleteAllMissions();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"deleteAllStations",value:function(){var e=(0,h.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.service.deleteAllStations();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"deleteAllVehicles",value:function(){var e=(0,h.Z)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.service.deleteAllVehicles(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"deleteMission",value:function(){var e=(0,h.Z)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.service.deleteMission(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"deleteProfile",value:function(){var e=(0,h.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.service.deleteProfile();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"deleteStation",value:function(){var e=(0,h.Z)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.service.deleteStation(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getAllMissions",value:function(){var e=(0,h.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.service.getAllMissions();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getAllStations",value:function(){var e=(0,h.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.service.getAllStations();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getAllVehicles",value:function(){var e=(0,h.Z)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.service.getAllVehicles(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getMission",value:function(){var e=(0,h.Z)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.service.getMission(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getStation",value:function(){var e=(0,h.Z)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.service.getStation(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateMission",value:function(){var e=(0,h.Z)(regeneratorRuntime.mark((function e(t,r,n,o,a,i,s){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.service.updateMission(t,r,n,o,a,i,s);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(t,r,n,o,a,i,s){return e.apply(this,arguments)}return t}()},{key:"updateProfile",value:function(){var e=(0,h.Z)(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.service.updateProfile(t,r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"updateStation",value:function(){var e=(0,h.Z)(regeneratorRuntime.mark((function e(t,r,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.service.updateStation(t,r,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));function t(t,r,n){return e.apply(this,arguments)}return t}()}]),e}(),w=n.default.extend({name:"Login",data:function(){var e=p();return{cardColor:e.cardColor,inputColor:e.inputColor,inputBorderColor:e.inputBorderColor,buttonColor:e.buttonColor,textColor:e.textColor,usernameValue:"",passwordValue:""}},methods:{login:function(e,t){var r=this;(new g).login(e,t).then((function(e){e?location.href="/dashboard":r.$notify({group:"notification",title:"login failed",text:"wrong login credentials",type:"error",duration:1e3})}))}}}),b=w,y=r(5961),k=(0,y.Z)(b,s,u,!1,null,"f7e3a6fc",null),C=k.exports,x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"card align-content-center",style:{background:e.cardColor}},[r("div",{staticClass:"card-body",style:{background:e.cardColor}},[r("h1",{staticClass:"card-title"},[e._v("Register")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.usernameValue,expression:"usernameValue"}],staticClass:"form-control",style:{background:e.inputColor,borderColor:e.inputBorderColor,color:e.textColor},attrs:{placeholder:"Username",type:"text"},domProps:{value:e.usernameValue},on:{input:function(t){t.target.composing||(e.usernameValue=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordValue,expression:"passwordValue"}],staticClass:"form-control",style:{background:e.inputColor,borderColor:e.inputBorderColor,color:e.textColor},attrs:{placeholder:"password",type:"password"},domProps:{value:e.passwordValue},on:{input:function(t){t.target.composing||(e.passwordValue=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordRetypeValue,expression:"passwordRetypeValue"}],staticClass:"form-control",style:{background:e.inputColor,borderColor:e.inputBorderColor,color:e.textColor},attrs:{placeholder:"retype password",type:"password"},domProps:{value:e.passwordRetypeValue},on:{input:function(t){t.target.composing||(e.passwordRetypeValue=t.target.value)}}}),r("div",{staticClass:"d-flex flex-column"},[r("button",{staticClass:"btn btn-primary",style:{backgroundColor:e.buttonColor,borderColor:e.buttonColor},on:{click:function(t){return e.register(e.usernameValue,e.passwordValue,e.passwordRetypeValue)}}},[e._v(" register ")]),r("a",{attrs:{href:"/login"}},[e._v("Login")])])])])])},R=[],_=n.default.extend({name:"Register",data:function(){var e=p();return{cardColor:e.cardColor,inputColor:e.inputColor,inputBorderColor:e.inputBorderColor,buttonColor:e.buttonColor,textColor:e.textColor,usernameValue:"",passwordValue:"",passwordRetypeValue:""}},methods:{register:function(e,t,r){var n=this;(new g).register(e,t,r).then((function(e){e[0]?n.$notify({group:"notification",title:"registration was successful",text:e[1],type:"success",duration:1e3}):n.$notify({group:"notification",title:"registration failed",text:e[1],type:"error",duration:1e3})}))}}}),Z=_,M=(0,y.Z)(Z,x,R,!1,null,"77dcbfca",null),V=M.exports,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{staticClass:"not-found-text"},[e._v("404 page not found")])},A=[],E={name:"NotFound"},T=E,P=(0,y.Z)(T,S,A,!1,null,"2094b38e",null),B=P.exports,I=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("navbar",{attrs:{active:"dashboard"}})},O=[],$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"navbar navbar-expand-lg navbar-dark",style:{backgroundColor:e.navbarColor}},[e._m(0),e._m(1),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarColor01"}},[r("ul",{staticClass:"navbar-nav mr-auto"},[r("li",{class:["nav-item","dashboard"===this.active?"active":""]},[r("a",{staticClass:"nav-link",attrs:{href:e.hrefBase+"dashboard"}},[e._v("Dashboard "),r("span",{staticClass:"sr-only"},[e._v("(current)")])])]),r("li",{class:["nav-item","alert"===this.active?"active":""]},[r("a",{staticClass:"nav-link",attrs:{href:e.hrefBase+"alert"}},[e._v("Alert "),r("span",{staticClass:"sr-only"},[e._v("(current)")])])])])])])},j=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"navbar-brand",attrs:{href:"/dashboard"}},[n("img",{staticClass:"img-radius",attrs:{src:r(8257),width:"50",height:"50",alt:"",loading:"lazy"}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})])}],N=n.default.extend({name:"Navbar",data:function(){var e=p();return{navbarColor:e.navbarColor,hrefBase:"/frontend/"}},methods:{},props:{active:{type:String,required:!0}}}),D=N,F=(0,y.Z)(D,$,j,!1,null,"57f52474",null),q=F.exports,z=n.default.extend({components:{Navbar:q},name:"Dashboard",data:function(){var e=p();return{navbarColor:e.navbarColor}},methods:{}}),L=z,G=(0,y.Z)(L,I,O,!1,null,"cab65074",null),U=G.exports,H=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("navbar",{attrs:{active:"alert"}}),e._m(0)],1)},J=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("label",[e._v(" Einsatzstichwort: "),r("input",{staticClass:"form-control",attrs:{type:"text",id:"commitment-keyword",placeholder:"RD 1 - Stichverletzung"}})]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("label",[e._v(" Adresse: "),r("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Poststraße 7"}})])]),r("div",{staticClass:"col-md-6"},[r("label",[e._v(" Ort: "),r("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"25746 Heide"}})])])]),r("div")])}],K=n.default.extend({name:"Alert",components:{Navbar:q},data:function(){var e=p(),t=new g;return{navbarColor:e.navbarColor,APISerice:t}},methods:{getAvailibleVehicles:function(){var e=this;return(0,h.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.APISerice.getAllVehicles(1);case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}}),t)})))()}}}),Q=K,W=(0,y.Z)(Q,H,J,!1,null,"fbad7edc",null),X=W.exports,Y=new i.Z({mode:"history",base:"/frontend/",routes:[{path:"/login",name:"Login",component:C},{path:"/register",name:"Register",component:V},{path:"/dashboard",name:"Dashboard",component:U},{path:"/",name:"Dashboard",component:U},{path:"/alert",name:"Alert",component:X},{path:"*",name:"NotFound",component:B}]}),ee=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"togglerCard",style:"background: "+e.togglerColor},[r("button",{staticClass:"togglerButton",style:"background: "+e.togglerColor+";filter: "+e.getToggleButtonFilter("light")+";color: "+e.getIconColor(),on:{click:function(t){return e.changeTheme("light")}}},[r("font-awesome-icon",{attrs:{icon:e.lightIcon,size:"2x"}})],1),r("button",{staticClass:"togglerButton",style:"background: "+e.togglerColor+";filter: "+e.getToggleButtonFilter("dark")+";color: "+e.getIconColor(),on:{click:function(t){return e.changeTheme("dark")}}},[r("font-awesome-icon",{attrs:{icon:e.darkIcon,size:"2x"}})],1)])},te=[],re=r(1436),ne=n.default.extend({name:"ThemeToggler",data:function(){var e=p();return{togglerColor:e.themeTogglerColor,lightIcon:re.enB,darkIcon:re.DBF}},methods:{getActiveColorScheme:function(){var e=localStorage.getItem("color-scheme");return null===e?"light":e},getToggleButtonFilter:function(e){return this.getActiveColorScheme()===e?"brightness(1.6)":"none"},getIconColor:function(){return"dark"===this.getActiveColorScheme()?"black":"white"},changeTheme:function(e){this.getActiveColorScheme()!==e&&(localStorage.setItem("color-scheme",e),location.reload())}}}),oe=ne,ae=(0,y.Z)(oe,ee,te,!1,null,"5ccef391",null),ie=ae.exports,se={name:"app",components:{ThemeToggler:ie},created:function(){var e=p();document.body.style.backgroundColor=e.background,document.body.style.color=e.textColor},router:Y},ue=se,ce=(0,y.Z)(ue,o,a,!1,null,null,null),le=ce.exports,de=r(9960),pe=r(4104),he=r(4765),fe=r.n(he),ve=r(7810),me=r(8947);function ge(){me.vI.add(re.DBF),me.vI.add(re.enB)}n.default.use(de.ZPm),n.default.use(i.Z),n.default.use(pe.ZP),n.default.use(fe()),n.default.component("font-awesome-icon",ve.GN),ge(),n.default.config.productionTip=!1,new n.default({render:function(e){return e(le)}}).$mount("#app")},8257:function(e,t,r){e.exports=r.p+"img/logo.800a8b42.png"},6608:function(){}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,n,o,a){if(!n){var i=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],a=e[c][2];for(var s=!0,u=0;u<n.length;u++)(!1&a||i>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[u])}))?n.splice(u--,1):(s=!1,a<i&&(i=a));s&&(e.splice(c--,1),t=o())}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,o,a]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/frontend/"}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,i=n[0],s=n[1],u=n[2],c=0;for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(u)var l=u(r);for(t&&t(n);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[i[c]]=0;return r.O(l)},n=self["webpackChunkvue_ts"]=self["webpackChunkvue_ts"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(3090)}));n=r.O(n)})();
//# sourceMappingURL=app-legacy.b78a1188.js.map