yalla.framework.addComponent("/dist/package/list",function(){function ComponentEvent(type,data,target,currentTarget){this.data=data,this.target=target,this.type=type,this.currentTarget=currentTarget}function initState(){return{}}function onPropertyChange(){}function initState(props){return{alert:new Alert,travelAgentId:props.travelAgentId}}function getPackages(){var self=this;return new Promise(function(resolve){var q={travelAgentId:self.state.travelAgentId,$sort:{travelDateFrom:-1}};dpd.packages.get(q,function(result,err){self.state.alert.alert(err),resolve(result)})})}function onEditPackage(event){this.emitEvent("editPackage",event.data)}function onShowItinerary(event){this.emitEvent("showItinerary",event.data)}function $render(_props){_context["card-package"]=$inject("/package/card-package"),_context["card-package"],_context.alert=$inject("/component/alert"),_context.alert,_elementOpenStart("div",""),_attr("element","dist.package.list"),_elementOpenEnd("div");var _component=IncrementalDOM.currentElement(),_validComponent=yalla.framework.validComponentName(_component,_elementName);_component._state=_component._state&&_validComponent?_component._state:initState.bind(_component)(_props),_component._state._name=_elementName;var _state=_component._state,_self={component:_component,properties:_props,state:_component._state};_validComponent&&yalla.framework.propertyCheckChanges(_component._properties,_props,onPropertyChange.bind(_self)),_component._properties=_props;var _params={alertType:_state.alert.type.bind(self)(),message:_state.alert.text.bind(self)()};_context.alert.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementOpenStart("span",""),_elementOpenEnd("span"),function(){function asyncFunc_1(data){(data||[]).forEach(function(pkg){_elementOpenStart("span",""),_elementOpenEnd("span");var _params={pkg:pkg,onedit:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onEditPackage.bind(self)(event)},onshowItinerary:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onShowItinerary.bind(self)(event)}};_context["card-package"].render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("span")})}var node={element:IncrementalDOM.currentElement(),pointer:IncrementalDOM.currentPointer()}.element,self={target:node};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=self.target,self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state;var promise=getPackages.bind(self)();promise&&"object"==typeof promise&&"then"in promise?(_skip(),promise.then(function(_result){$patchChanges(node,function(){asyncFunc_1.call(self,_result)})}).catch(function(){})):asyncFunc_1.call(self,promise)}(),_elementClose("span"),_elementClose("div")}var $patchChanges=yalla.framework.renderToScreen,$inject=yalla.framework.createInjector("/dist/package/list"),$export={},_elementName="dist.package.list",_context={},_parentComponent=yalla.framework.getParentComponent,_merge=yalla.utils.merge,_elementClose=(IncrementalDOM.elementOpen,IncrementalDOM.elementClose),_elementOpenStart=IncrementalDOM.elementOpenStart,_elementOpenEnd=IncrementalDOM.elementOpenEnd,_attr=(IncrementalDOM.elementVoid,IncrementalDOM.text,IncrementalDOM.attr),_skip=IncrementalDOM.skip;return"function"==typeof $render&&($export.render=$render),$export}());