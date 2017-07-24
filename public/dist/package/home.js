yalla.framework.addComponent("/dist/package/home",function(){function ComponentEvent(type,data,target,currentTarget){this.data=data,this.target=target,this.type=type,this.currentTarget=currentTarget}function initState(){return{}}function onPropertyChange(){}function initState(props){return{travelAgentId:props.travelAgentId,editPackageId:null,isEditMode:!1,alert:new Alert}}function onPropertyChange(props){props.isEditMode&&(this.state.isEditMode=props.isEditMode.newValue)}function getTravelAgent(){var self=this;return new Promise(function(resolve){dpd.travelagents.get(self.state.travelAgentId,function(ta,err){self.state.alert.alert(err),resolve(ta)})})}function onCloseEditor(){this.state.editPackageId=null,this.state.isEditMode=!1,$patchChanges()}function onEditPackage(packageId){this.state.editPackageId=packageId.data,this.state.isEditMode=!0,$patchChanges()}function onShowItinerary(packageId){window.location.hash="#app/itinerary.home:packageId="+packageId.data}function onAddPackage(){this.state.editPackageId=null,this.state.isEditMode=!0,$patchChanges()}function $render(_props){_context.list=$inject("/package/list"),_context.list,_context["edit-package"]=$inject("/package/edit-package"),_context["edit-package"],_context.entry=$inject("/component/entry"),_context.entry,_context.panel=$inject("/component/panel"),_context.panel,_elementOpenStart("div",""),_attr("element","dist.package.home"),_elementOpenEnd("div");var _component=IncrementalDOM.currentElement(),_validComponent=yalla.framework.validComponentName(_component,_elementName);_component._state=_component._state&&_validComponent?_component._state:initState.bind(_component)(_props),_component._state._name=_elementName;var _state=_component._state,_self={component:_component,properties:_props,state:_component._state};_validComponent&&yalla.framework.propertyCheckChanges(_component._properties,_props,onPropertyChange.bind(_self)),_component._properties=_props,function(){function asyncFunc_1(data){if(_state.isEditMode&&(_params={travelAgentId:_state.travelAgentId,packageId:_state.editPackageId,onclose:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onCloseEditor.bind(self)()}},_context["edit-package"].render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})),!_state.isEditMode){_elementOpenStart("span",""),_elementOpenEnd("span"),_params={title:data.travelAgentName,nofooter:"nofooter"},_context.panel.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(slotName){if("body"===slotName){_elementOpenStart("span",""),_elementOpenEnd("span");var _params={type:"button",naked:"naked",value:"Add New Package",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onAddPackage.bind(self)()}};_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("span")}});var _params={travelAgentId:_state.travelAgentId,oneditPackage:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onEditPackage.bind(self)(event)},onshowItinerary:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onShowItinerary.bind(self)(event)}};_context.list.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("span")}}var node={element:IncrementalDOM.currentElement(),pointer:IncrementalDOM.currentPointer()}.element,self={target:node};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=self.target,self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state;var promise=getTravelAgent.bind(self)();promise&&"object"==typeof promise&&"then"in promise?(_skip(),promise.then(function(_result){$patchChanges(node,function(){asyncFunc_1.call(self,_result)})}).catch(function(){})):asyncFunc_1.call(self,promise)}(),_elementClose("div")}var $patchChanges=yalla.framework.renderToScreen,$inject=yalla.framework.createInjector("/dist/package/home"),$export={},_elementName="dist.package.home",_context={},_parentComponent=yalla.framework.getParentComponent,_merge=yalla.utils.merge,_elementClose=(IncrementalDOM.elementOpen,IncrementalDOM.elementClose),_elementOpenStart=IncrementalDOM.elementOpenStart,_elementOpenEnd=IncrementalDOM.elementOpenEnd,_attr=(IncrementalDOM.elementVoid,IncrementalDOM.text,IncrementalDOM.attr),_skip=IncrementalDOM.skip;return"function"==typeof $render&&($export.render=$render),$export}());