yalla.framework.addComponent("/dist/itinerary/card-itineraryList",function(){function ComponentEvent(type,data,target,currentTarget){this.data=data,this.target=target,this.type=type,this.currentTarget=currentTarget}function initState(){return{}}function onPropertyChange(){}function initState(){return{me:storage.me.read()}}function onBook(){this.emitEvent("book")}function onBack(){this.emitEvent("close")}function $render(_props){_context.panel=$inject("/component/panel"),_context.panel,_context.entry=$inject("/component/entry"),_context.entry,_context.home=$inject("/component/home-button"),_context.home,_context.card=$inject("/itinerary/card-itinerary-bulleted"),_context.card,_elementOpenStart("div",""),_attr("element","dist.itinerary.card-itineraryList"),_elementOpenEnd("div");var _component=IncrementalDOM.currentElement(),_validComponent=yalla.framework.validComponentName(_component,_elementName);_component._state=_component._state&&_validComponent?_component._state:initState.bind(_component)(_props),_component._state._name=_elementName;var _state=_component._state,_self={component:_component,properties:_props,state:_component._state};_validComponent&&yalla.framework.propertyCheckChanges(_component._properties,_props,onPropertyChange.bind(_self)),_component._properties=_props;var _params={notitle:"notitle"};_context.panel.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(slotName){if("body"===slotName&&(_elementOpenStart("div",""),_elementOpenEnd("div"),(_props.itinerary||[]).forEach(function(itr){_elementOpenStart("div",""),_elementOpenEnd("div");var _params={itr:itr};_context.card.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div")}),_elementClose("div")),"footer"===slotName){_elementOpenStart("div",""),_elementOpenEnd("div"),_elementOpenStart("div",""),_attr("class","row"),_elementOpenEnd("div"),_state.me&&(_params={type:"button",value:"Book This!",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onBook.bind(self)()}},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}));var _params={home:"#app/search-package.home",onback:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onBack.bind(self)()}};_context.home.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div"),_elementClose("div")}}),_elementClose("div")}yalla.framework.renderToScreen;var $inject=yalla.framework.createInjector("/dist/itinerary/card-itineraryList"),$export={},_elementName="dist.itinerary.card-itineraryList",_context={},_parentComponent=yalla.framework.getParentComponent,_merge=yalla.utils.merge,_elementClose=(IncrementalDOM.elementOpen,IncrementalDOM.elementClose),_elementOpenStart=IncrementalDOM.elementOpenStart,_elementOpenEnd=IncrementalDOM.elementOpenEnd,_attr=(IncrementalDOM.elementVoid,IncrementalDOM.text,IncrementalDOM.attr);return IncrementalDOM.skip,"function"==typeof $render&&($export.render=$render),$export}());