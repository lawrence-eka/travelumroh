yalla.framework.addComponent("/dist/travel-agent/list",function(){function ComponentEvent(type,data,target,currentTarget){this.data=data,this.target=target,this.type=type,this.currentTarget=currentTarget}function initState(props){return{}}function onPropertyChange(event){}function initState(props){return{alert:new Alert(null,$patchChanges,"alert")}}function getTravelAgents(){var self=this;return new Promise(function(resolve){var me=storage.me.read(),q={contactPersonId:me.id};dpd.travelagents.get(q,function(ta,err){self.state.alert.alert(err),resolve(ta)})})}function onEditTA(event){this.emitEvent("editTA",event.data)}function onShowPackages(event){this.emitEvent("showPackages",event.data)}function $render(_props,_slotView){_context["card-travel-agent"]=$inject("/travel-agent/card-travel-agent");_context["card-travel-agent"];_context.alert=$inject("/component/alert");_context.alert;_elementOpenStart("div",""),_attr("element","dist.travel-agent.list"),_elementOpenEnd("div");var _component=IncrementalDOM.currentElement(),_validComponent=yalla.framework.validComponentName(_component,_elementName);_component._state=_component._state&&_validComponent?_component._state:initState.bind(_component)(_props),_component._state._name=_elementName;var _state=_component._state,_self={component:_component,properties:_props,state:_component._state};_validComponent&&yalla.framework.propertyCheckChanges(_component._properties,_props,onPropertyChange.bind(_self)),_component._properties=_props,_elementOpenStart("span",""),_elementOpenEnd("span"),yalla.framework.registerRef("alert",IncrementalDOM.currentElement(),function(){var _params={alertType:_state.alert.type.bind(self)(),message:_state.alert.text.bind(self)()};_context.alert.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(slotName,slotProps){})})(),_elementClose("span"),_elementOpenStart("span",""),_elementOpenEnd("span"),function(domNode){function asyncFunc_1(data){var _array=data||[];_array.forEach(function(ta){_elementOpenStart("span",""),_elementOpenEnd("span");var _params={travelAgent:ta,oneditTA:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onEditTA.bind(self)(event)},onshowPackages:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onShowPackages.bind(self)(event)}};_context["card-travel-agent"].render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(slotName,slotProps){}),_elementClose("span")})}var node=domNode.element,self={target:node};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=self.target,self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state;var promise=getTravelAgents.bind(self)();promise&&"object"==typeof promise&&"then"in promise?(_skip(),promise.then(function(_result){$patchChanges(node,function(){asyncFunc_1.call(self,_result)})}).catch(function(err){console.log(err)})):asyncFunc_1.call(self,promise)}({element:IncrementalDOM.currentElement(),pointer:IncrementalDOM.currentPointer()}),_elementClose("span"),_elementClose("div")}var $patchChanges=yalla.framework.renderToScreen,$inject=yalla.framework.createInjector("/dist/travel-agent/list"),$export={},_elementName="dist.travel-agent.list",_context={},_parentComponent=yalla.framework.getParentComponent,_merge=yalla.utils.merge,_elementClose=(IncrementalDOM.elementOpen,IncrementalDOM.elementClose),_elementOpenStart=IncrementalDOM.elementOpenStart,_elementOpenEnd=IncrementalDOM.elementOpenEnd,_attr=(IncrementalDOM.elementVoid,IncrementalDOM.text,IncrementalDOM.attr),_skip=IncrementalDOM.skip;return"function"==typeof $render&&($export.render=$render),$export}());