yalla.framework.addComponent("/dist/search-package/list",function(){function ComponentEvent(type,data,target,currentTarget){this.data=data,this.target=target,this.type=type,this.currentTarget=currentTarget}function initState(){return{}}function onPropertyChange(){}function initState(props){return{alert:new Alert(null,$patchChanges,"alert"),startDate:new Date(props.startDate),endDate:new Date(props.endDate),onRecordsFound:props.onRecordsFound}}function onPropertyChange(props){for(var key in this.state)props.hasOwnProperty(key)&&(this.state[key]=props[key].newValue)}function queryPackages(){var self=this;return new Promise(function(resolve){""!=self.state.startDate&&""!=self.state.endDate||resolve([]);var startDate=new Date(self.state.startDate).setHours(0,0,0,0),endDate=new Date(self.state.endDate).setHours(23,59,59,999),query={};query.isPublished="true",query.validUntil={$gte:startDate},query.$and=[{travelDateFrom:{$gte:startDate}},{travelDateFrom:{$lte:endDate}}],query.$sort={travelDateFrom:1},dpd.packages.get(query,function(pkg,err){if(self.state.alert.alert(err),!err){var recordsFound=(pkg.length>0?pkg.length.toString()+" package"+(1==pkg.length?"":"s"):"No package")+" found";self.state.onRecordsFound.publish(recordsFound)}resolve(pkg)})})}function onClick(event){this.emitEvent("click",event.data)}function $render(_props){_context["card-package"]=$inject("/package/card-package"),_context["card-package"],_context.alert=$inject("/component/alert"),_context.alert,_elementOpenStart("div",""),_attr("element","dist.search-package.list"),_elementOpenEnd("div");var _component=IncrementalDOM.currentElement(),_validComponent=yalla.framework.validComponentName(_component,_elementName);_component._state=_component._state&&_validComponent?_component._state:initState.bind(_component)(_props),_component._state._name=_elementName;var _state=_component._state,_self={component:_component,properties:_props,state:_component._state};_validComponent&&yalla.framework.propertyCheckChanges(_component._properties,_props,onPropertyChange.bind(_self)),_component._properties=_props,_elementOpenStart("span",""),_elementOpenEnd("span"),yalla.framework.registerRef("alert",IncrementalDOM.currentElement(),function(){var _params={alertType:_state.alert.type.bind(self)(),message:_state.alert.text.bind(self)()};_context.alert.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})})(),_elementClose("span"),_elementOpenStart("div",""),_elementOpenEnd("div"),function(){function asyncFunc_1(data){(data||[]).forEach(function(pkg){_elementOpenStart("div",""),_elementOpenEnd("div");var _params={onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onClick.bind(self)(event)},pkg:pkg};_context["card-package"].render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div")})}var node={element:IncrementalDOM.currentElement(),pointer:IncrementalDOM.currentPointer()}.element,self={target:node};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=self.target,self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state;var promise=queryPackages.bind(self)();promise&&"object"==typeof promise&&"then"in promise?(_skip(),promise.then(function(_result){$patchChanges(node,function(){asyncFunc_1.call(self,_result)})}).catch(function(){})):asyncFunc_1.call(self,promise)}(),_elementClose("div"),_elementClose("div")}var $patchChanges=yalla.framework.renderToScreen,$inject=yalla.framework.createInjector("/dist/search-package/list"),$export={},_elementName="dist.search-package.list",_context={},_parentComponent=yalla.framework.getParentComponent,_merge=yalla.utils.merge,_elementClose=(IncrementalDOM.elementOpen,IncrementalDOM.elementClose),_elementOpenStart=IncrementalDOM.elementOpenStart,_elementOpenEnd=IncrementalDOM.elementOpenEnd,_attr=(IncrementalDOM.elementVoid,IncrementalDOM.text,IncrementalDOM.attr),_skip=IncrementalDOM.skip;return"function"==typeof $render&&($export.render=$render),$export}());