yalla.framework.addComponent("/dist/travel-agent/home",function(){function e(e,t,n,a){this.data=t,this.target=n,this.type=e,this.currentTarget=a}function t(e){return{}}function n(e){}function t(e){return{alert:new Alert,editTravelAgentId:null,isEditMode:!1}}function a(){this.state.editTravelAgentId=null,this.state.isEditMode=!0,l()}function r(){this.state.editTravelAgentId=null,this.state.isEditMode=!1,l()}function o(e){this.state.editTravelAgentId=e.data,this.state.isEditMode=!0,l()}function i(e){window.location.hash="#app/package.home:travelAgentId="+e.data}function s(s,l){d.list=c("/travel-agent/list");d.list;d["edit-travel-agent"]=c("/travel-agent/edit-travel-agent");d["edit-travel-agent"];d.entry=c("/component/entry");d.entry;d.panel=c("/component/panel");d.panel;f("link",""),y("element","dist.travel-agent.home"),y("href","asset/css/custom-style.css"),y("rel","stylesheet"),h("link"),v("link"),f("div",""),y("element","dist.travel-agent.home"),h("div");var m=IncrementalDOM.currentElement(),T=yalla.framework.validComponentName(m,g);m._state=m._state&&T?m._state:t.bind(m)(s),m._state._name=g;var _=m._state,I={component:m,properties:s,state:m._state};if(T&&yalla.framework.propertyCheckChanges(m._properties,s,n.bind(I)),m._properties=s,_.isEditMode){var k={travelAgentId:_.editTravelAgentId,onclose:function(t){var n={target:t.target};n.properties=s,"elements"in n.target&&(n.elements=n.target.elements),n.currentTarget=this==t.target?n.target:p(t.currentTarget),n.component=m,n.component._state=n.component._state||{},n.state=n.component._state,n.emitEvent=function(t,a){var r=new e(t,a,n.target,n.currentTarget);"on"+t in s&&s["on"+t](r)},r.bind(n)()}};d["edit-travel-agent"].render("object"==typeof arguments[1]?u(arguments[1],k):k,function(e,t){})}if(!_.isEditMode){f("span",""),h("span");var k={nofooter:"nofooter",title:"My Travel Agencies"};d.panel.render("object"==typeof arguments[1]?u(arguments[1],k):k,function(t,n){if("body"===t){f("span",""),h("span");var r={type:"button",naked:"naked",value:"Add New Travel Agency",onclick:function(t){var n={target:t.target};n.properties=s,"elements"in n.target&&(n.elements=n.target.elements),n.currentTarget=this==t.target?n.target:p(t.currentTarget),n.component=m,n.component._state=n.component._state||{},n.state=n.component._state,n.emitEvent=function(t,a){var r=new e(t,a,n.target,n.currentTarget);"on"+t in s&&s["on"+t](r)},a.bind(n)()}};d.entry.render("object"==typeof arguments[1]?u(arguments[1],r):r,function(e,t){}),v("span")}});var k={oneditTA:function(t){var n={target:t.target};n.properties=s,"elements"in n.target&&(n.elements=n.target.elements),n.currentTarget=this==t.target?n.target:p(t.currentTarget),n.component=m,n.component._state=n.component._state||{},n.state=n.component._state,n.emitEvent=function(t,a){var r=new e(t,a,n.target,n.currentTarget);"on"+t in s&&s["on"+t](r)},o.bind(n)(t)},onshowPackages:function(t){var n={target:t.target};n.properties=s,"elements"in n.target&&(n.elements=n.target.elements),n.currentTarget=this==t.target?n.target:p(t.currentTarget),n.component=m,n.component._state=n.component._state||{},n.state=n.component._state,n.emitEvent=function(t,a){var r=new e(t,a,n.target,n.currentTarget);"on"+t in s&&s["on"+t](r)},i.bind(n)(t)}};d.list.render("object"==typeof arguments[1]?u(arguments[1],k):k,function(e,t){}),v("span")}v("div")}var l=yalla.framework.renderToScreen,c=yalla.framework.createInjector("/dist/travel-agent/home"),m={},g="dist.travel-agent.home",d={},p=yalla.framework.getParentComponent,u=yalla.utils.merge,v=(IncrementalDOM.elementOpen,IncrementalDOM.elementClose),f=IncrementalDOM.elementOpenStart,h=IncrementalDOM.elementOpenEnd,y=(IncrementalDOM.elementVoid,IncrementalDOM.text,IncrementalDOM.attr);IncrementalDOM.skip;return"function"==typeof s&&(m.render=s),m}());