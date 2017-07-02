yalla.framework.addComponent("/dist/user/userProfile",function(){function e(e,t,n,r){this.data=t,this.target=n,this.type=e,this.currentTarget=r}function t(e){return{}}function n(e){}function t(e){e.onSaved&&e.onSaved.subscribe(c.bind(this));var t={alert:new Alert(null,m,"alert"),originalProfile:null,onSave:new Event,showDocsTravelAgent:!1};return t.alert.alert(e.error),t}function n(e){e.error&&this.state.alert.alert(e.error.newValue)}function r(e,t){return e.needApproval&&e.needApproval.hasOwnProperty(t)}function a(e){return e=e?e:{},this.state.originalProfile=e,this.state.showDocsTravelAgent=e.isTravelAgent||e.needApproval&&e.needApproval.isTravelAgent,this.state.originalProfile}function o(e){return e?e.id==storage.me.read().id?"Your Profile":"User Profile":"Please Sign Up"}function i(e){this.state.showDocsTravelAgent=e.data,m("docsTravelAgent")}function s(){this.state.alert.alert("");var e=this.target.form;if(e.elements.password.value!=e.elements.repeatPassword.value)return void this.state.alert.alert({name:"repeatPassword",message:"Please repeat your password correctly"});var t=this.state.originalProfile;t.id=e.elements.id.value,t.firstName=e.elements.firstName.value,t.lastName=e.elements.lastName.value,t.email=e.elements.email.value,t.phone=e.elements.phone.value,t.username=e.elements.email.value,t.username&&(t.username=t.username.toLowerCase()),""!=e.elements.password.value&&(t.password=e.elements.password.value),t.address1=e.elements.address1.value,t.city=e.elements.city.value,!!t.isAdmin!=e.elements.isAdmin.checked?t.isAdmin=e.elements.isAdmin.checked:(delete t.isAdmin,t.needApproval&&delete t.needApproval.isAdmin),!!t.isTravelAgent!=e.elements.isTravelAgent.checked?t.isTravelAgent=e.elements.isTravelAgent.checked:(delete t.isTravelAgent,t.needApproval&&delete t.needApproval.isTravelAgent),!t.needApproval||t.needApproval.hasOwnProperty("isAdmin")||t.needApproval.hasOwnProperty("isTravelAgent")||(t.needApproval=null),t.id&&c(),this.emitEvent("save",t)}function l(){this.emitEvent("cancel")}function c(){this._state.onSave.publish()}function p(c,p){h("link",""),w("element","dist.user.userProfile"),w("href","asset/css/custom-style.css"),w("rel","stylesheet"),b("link"),A("link"),f.alert=d("/component/alert");f.alert;f.entry=d("/component/entry");f.entry;f.panel=d("/component/panel");f.panel;f.ppLink=d("/component/ppLink");f.ppLink;f.attachments=d("/component/attachments/home");f.attachments;h("div",""),w("element","dist.user.userProfile"),b("div");var v=IncrementalDOM.currentElement(),k=yalla.framework.validComponentName(v,u);v._state=v._state&&k?v._state:t.bind(v)(c),v._state._name=u;var P=v._state,_={component:v,properties:c,state:v._state};k&&yalla.framework.propertyCheckChanges(v._properties,c,n.bind(_)),v._properties=c;var j={title:o.bind(self)(c.profile)};f.panel.render("object"==typeof arguments[1]?y(arguments[1],j):j,function(t,n){if("footer"===t){h("div",""),b("div");var o={};f.ppLink.render("object"==typeof arguments[1]?y(arguments[1],o):o,function(e,t){}),A("div")}"body"===t&&(h("div",""),b("div"),function(t){function n(t){h("form",""),b("form"),h("div",""),w("class","row"),b("div"),yalla.framework.registerRef("alert",IncrementalDOM.currentElement(),function(){h("input",""),w("type","hidden"),w("name","id"),w("value",t.id),b("input"),A("input");var n={type:"text",prompt:"First Name",name:"firstName",value:t.firstName};f.entry.render("object"==typeof arguments[1]?y(arguments[1],n):n,function(e,t){});var n={type:"text",prompt:"Last Name",name:"lastName",value:t.lastName};f.entry.render("object"==typeof arguments[1]?y(arguments[1],n):n,function(e,t){});var n={type:"hidden",prompt:"username",name:"username",value:t.username};f.entry.render("object"==typeof arguments[1]?y(arguments[1],n):n,function(e,t){});var n={type:"email",prompt:"Email",name:"email",value:t.email,alias:"username",alert:P.alert};f.entry.render("object"==typeof arguments[1]?y(arguments[1],n):n,function(e,t){});var n={type:"text",prompt:"Phone",name:"phone",value:t.phone};f.entry.render("object"==typeof arguments[1]?y(arguments[1],n):n,function(e,t){});var n={type:"textarea",prompt:"Address",name:"address1",value:t.address1};f.entry.render("object"==typeof arguments[1]?y(arguments[1],n):n,function(e,t){});var n={type:"text",prompt:"City",name:"city",value:t.city};if(f.entry.render("object"==typeof arguments[1]?y(arguments[1],n):n,function(e,t){}),!r(t,"isAdmin")){h("div",""),b("div");var n={type:"checkbox",prompt:"Administrator",name:"isAdmin",checked:t.isAdmin};f.entry.render("object"==typeof arguments[1]?y(arguments[1],n):n,function(e,t){}),A("div")}if(r(t,"isAdmin")){h("div",""),b("div");var n={type:"checkbox",prompt:"Administrator*",name:"isAdmin",checked:t.needApproval.isAdmin};f.entry.render("object"==typeof arguments[1]?y(arguments[1],n):n,function(e,t){});var n={type:"label",prompt:"*"+(t.needApproval.isAdmin?"Request for":"Revokal of")+" Admin Access under review"};f.entry.render("object"==typeof arguments[1]?y(arguments[1],n):n,function(e,t){}),A("div")}if(!r(t,"isTravelAgent")){h("div",""),b("div");var n={type:"checkbox",prompt:"Travel Agent",name:"isTravelAgent",checked:t.isTravelAgent,onclick:function(t){var n={target:t.target};n.properties=c,"elements"in n.target&&(n.elements=n.target.elements),n.currentTarget=this==t.target?n.target:g(t.currentTarget),n.component=v,n.component._state=n.component._state||{},n.state=n.component._state,n.emitEvent=function(t,r){var a=new e(t,r,n.target,n.currentTarget);"on"+t in c&&c["on"+t](a)},i.bind(n)(t)}};f.entry.render("object"==typeof arguments[1]?y(arguments[1],n):n,function(e,t){}),A("div")}if(r(t,"isTravelAgent")){h("div",""),b("div");var n={type:"checkbox",prompt:"Travel Agent*",name:"isTravelAgent",checked:t.needApproval.isTravelAgent,onclick:function(t){var n={target:t.target};n.properties=c,"elements"in n.target&&(n.elements=n.target.elements),n.currentTarget=this==t.target?n.target:g(t.currentTarget),n.component=v,n.component._state=n.component._state||{},n.state=n.component._state,n.emitEvent=function(t,r){var a=new e(t,r,n.target,n.currentTarget);"on"+t in c&&c["on"+t](a)},i.bind(n)(t)}};f.entry.render("object"==typeof arguments[1]?y(arguments[1],n):n,function(e,t){});var n={type:"label",prompt:"*"+(t.needApproval.isTravelAgent?"Request for":"Revokal of")+" Travel Agent Access under review"};f.entry.render("object"==typeof arguments[1]?y(arguments[1],n):n,function(e,t){}),A("div")}})(),A("div"),h("div",""),b("div"),yalla.framework.registerRef("docsTravelAgent",IncrementalDOM.currentElement(),function(){if(P.showDocsTravelAgent){h("div",""),w("class","row"),b("div");var e={userId:t.id,prompt:"Proof of Travel Agency",collection:"docstravelagent",onSave:P.onSave};f.attachments.render("object"==typeof arguments[1]?y(arguments[1],e):e,function(e,t){}),A("div")}})(),A("div"),h("div",""),w("class","row"),b("div"),yalla.framework.registerRef("alert",IncrementalDOM.currentElement(),function(){var n={type:"password",prompt:"Password",name:"password",value:t.password,alert:P.alert};f.entry.render("object"==typeof arguments[1]?y(arguments[1],n):n,function(e,t){});var n={type:"password",prompt:"Repeat Password",name:"repeatPassword",alert:P.alert};f.entry.render("object"==typeof arguments[1]?y(arguments[1],n):n,function(e,t){});var n={type:"button",name:"btnSave",value:c.profile?"Save":"Register",divClass:"col-xs-6 col-sm-6 col-md-6 col-lg-6",onclick:function(t){var n={target:t.target};n.properties=c,"elements"in n.target&&(n.elements=n.target.elements),n.currentTarget=this==t.target?n.target:g(t.currentTarget),n.component=v,n.component._state=n.component._state||{},n.state=n.component._state,n.emitEvent=function(t,r){var a=new e(t,r,n.target,n.currentTarget);"on"+t in c&&c["on"+t](a)},s.bind(n)()}};f.entry.render("object"==typeof arguments[1]?y(arguments[1],n):n,function(e,t){});var n={type:"button",name:"btnCancel",value:"Cancel",divClass:"col-xs-6 col-sm-6 col-md-6 col-lg-6",onclick:function(t){var n={target:t.target};n.properties=c,"elements"in n.target&&(n.elements=n.target.elements),n.currentTarget=this==t.target?n.target:g(t.currentTarget),n.component=v,n.component._state=n.component._state||{},n.state=n.component._state,n.emitEvent=function(t,r){var a=new e(t,r,n.target,n.currentTarget);"on"+t in c&&c["on"+t](a)},l.bind(n)()}};f.entry.render("object"==typeof arguments[1]?y(arguments[1],n):n,function(e,t){})})(),A("div"),A("form");var n={alertType:P.alert.type.bind(p)(),message:P.alert.text.bind(p)()};f.alert.render("object"==typeof arguments[1]?y(arguments[1],n):n,function(e,t){})}var o=t.element,p={target:o};p.properties=c,"elements"in p.target&&(p.elements=p.target.elements),p.currentTarget=p.target,p.component=v,p.component._state=p.component._state||{},p.state=p.component._state;var d=a.bind(p)(c.profile);d&&"object"==typeof d&&"then"in d?(T(),d.then(function(e){m(o,function(){n.call(p,e)})}).catch(function(e){console.log(e)})):n.call(p,d)}({element:IncrementalDOM.currentElement(),pointer:IncrementalDOM.currentPointer()}),A("div"))}),A("div")}var m=yalla.framework.renderToScreen,d=yalla.framework.createInjector("/dist/user/userProfile"),v={},u="dist.user.userProfile",f={},g=yalla.framework.getParentComponent,y=yalla.utils.merge,A=(IncrementalDOM.elementOpen,IncrementalDOM.elementClose),h=IncrementalDOM.elementOpenStart,b=IncrementalDOM.elementOpenEnd,w=(IncrementalDOM.elementVoid,IncrementalDOM.text,IncrementalDOM.attr),T=IncrementalDOM.skip;return"function"==typeof p&&(v.render=p),v}());