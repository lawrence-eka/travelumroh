yalla.framework.addComponent("/dist/travel-agent/card-travel-agent",function(){function e(e,t,n,a){this.data=t,this.target=n,this.type=e,this.currentTarget=a}function t(e){return{}}function n(e){}function a(e){this.emitEvent("editTA",e)}function r(e){this.emitEvent("showPackages",e)}function o(o,c){v("link",""),f("element","dist.travel-agent.card-travel-agent"),f("href","asset/css/custom-style.css"),f("rel","stylesheet"),p("link"),g("link"),s.panel=l("/component/panel");s.panel;s.entry=l("/component/entry");s.entry;v("div",""),f("element","dist.travel-agent.card-travel-agent"),p("div");var y=IncrementalDOM.currentElement(),k=yalla.framework.validComponentName(y,i);y._state=y._state&&k?y._state:t.bind(y)(o),y._state._name=i;var b=(y._state,{component:y,properties:o,state:y._state});k&&yalla.framework.propertyCheckChanges(y._properties,o,n.bind(b)),y._properties=o;var _={title:o.travelAgent.travelAgentName,nofooter:"nofooter"};s.panel.render("object"==typeof arguments[1]?d(arguments[1],_):_,function(t,n){if("body"===t){v("div",""),p("div"),u("Address: "+o.travelAgent.address),v("br",""),p("br"),g("br"),u("City: "+o.travelAgent.city),v("div",""),f("class","row"),p("div");var l={type:"button",value:"Edit Info",name:"btnEdit",divClass:"col-xs-6 col-sm-6 col-md-6 col-lg-6",onclick:function(t){var n={target:t.target};n.properties=o,"elements"in n.target&&(n.elements=n.target.elements),n.currentTarget=this==t.target?n.target:m(t.currentTarget),n.component=y,n.component._state=n.component._state||{},n.state=n.component._state,n.emitEvent=function(t,a){var r=new e(t,a,n.target,n.currentTarget);"on"+t in o&&o["on"+t](r)},a.bind(n)(o.travelAgent.id)}};s.entry.render("object"==typeof arguments[1]?d(arguments[1],l):l,function(e,t){});var l={type:"button",value:"Packages...",name:"btnPackages",divClass:"col-xs-6 col-sm-6 col-md-6 col-lg-6",onclick:function(t){var n={target:t.target};n.properties=o,"elements"in n.target&&(n.elements=n.target.elements),n.currentTarget=this==t.target?n.target:m(t.currentTarget),n.component=y,n.component._state=n.component._state||{},n.state=n.component._state,n.emitEvent=function(t,a){var r=new e(t,a,n.target,n.currentTarget);"on"+t in o&&o["on"+t](r)},r.bind(n)(o.travelAgent.id)}};s.entry.render("object"==typeof arguments[1]?d(arguments[1],l):l,function(e,t){}),g("div"),g("div")}}),g("div")}var l=(yalla.framework.renderToScreen,yalla.framework.createInjector("/dist/travel-agent/card-travel-agent")),c={},i="dist.travel-agent.card-travel-agent",s={},m=yalla.framework.getParentComponent,d=yalla.utils.merge,g=(IncrementalDOM.elementOpen,IncrementalDOM.elementClose),v=IncrementalDOM.elementOpenStart,p=IncrementalDOM.elementOpenEnd,u=(IncrementalDOM.elementVoid,IncrementalDOM.text),f=IncrementalDOM.attr;IncrementalDOM.skip;return"function"==typeof o&&(c.render=o),c}());