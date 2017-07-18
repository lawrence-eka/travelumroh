yalla.framework.addComponent("/dist/package/edit-package",function(){function ComponentEvent(type,data,target,currentTarget){this.data=data,this.target=target,this.type=type,this.currentTarget=currentTarget}function initState(){return{}}function onPropertyChange(){}function initState(props){return{datePair:new DatePair($patchChanges),packageId:props.packageId,travelAgentId:props.travelAgentId,alert:new Alert}}function getOnePackage(id){var self=this;return new Promise(function(resolve){if(id)dpd.packages.get(id,function(pkg,err){self.state.alert.alert(err),err?pkg={}:pkg||(pkg={travelAgentId:self.state.travelAgentId}),resolve(pkg)});else{var pkg={travelAgentId:self.state.travelAgentId};resolve(pkg)}})}function onSave(){var form=this.target.form,self=this,package={};package.id=form.elements.id.value,package.travelAgentId=form.elements.travelAgentId.value,package.packageName=form.elements.packageName.value,package.tourLeader=form.elements.tourLeader.value,package.validFrom=new Date(form.elements.validFrom.value).getTime(),package.validUntil=new Date(form.elements.validUntil.value).getTime(),package.costLandArrangements=form.elements.costLandArrangements.value,package.costTickets=form.elements.costTickets.value,package.isPublished=form.elements.isPublished.checked,""==form.elements.id.value?dpd.packages.post(package,function(result,err){cleanupAfterSave(0,err,self)}):dpd.packages.put(form.elements.id.value,package,function(result,err){cleanupAfterSave(0,err,self)})}function cleanupAfterSave(result,err,self){var form=self.target.form;self.state.alert.alert(err),err||(form.elements.id.value="",form.elements.travelAgentId.value="",form.elements.packageName.value="",form.elements.tourLeader.value="",form.elements.validFrom.value="",form.elements.validUntil.value="",form.elements.costLandArrangements.value="",form.elements.costTickets.value="",form.elements.isPublished.checked=!1,self.state.alert.alert(null),self.state.travelAgentId=null,self.emitEvent("close")),$patchChanges()}function onCancel(){this.emitEvent("close")}function $render(_props){_context.alert=$inject("/component/alert"),_context.alert,_context.entry=$inject("/component/entry"),_context.entry,_context.panel=$inject("/component/panel"),_context.panel,_elementOpenStart("div",""),_attr("element","dist.package.edit-package"),_elementOpenEnd("div");var _component=IncrementalDOM.currentElement(),_validComponent=yalla.framework.validComponentName(_component,_elementName);_component._state=_component._state&&_validComponent?_component._state:initState.bind(_component)(_props),_component._state._name=_elementName;var _state=_component._state,_self={component:_component,properties:_props,state:_component._state};_validComponent&&yalla.framework.propertyCheckChanges(_component._properties,_props,onPropertyChange.bind(_self)),_component._properties=_props;var _params={title:_state.packageId&&-1!=_state.packageId?"Edit Package Info":"New Package",nofooter:"nofooter"};_context.panel.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(slotName){"body"===slotName&&(_elementOpenStart("div",""),_elementOpenEnd("div"),function(domNode){function asyncFunc_1(data){_elementOpenStart("form",""),_elementOpenEnd("form"),_params={type:"hidden",name:"id",value:data.id},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"hidden",name:"travelAgentId",value:data.travelAgentId},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementOpenStart("div",""),_attr("class","row"),_elementOpenEnd("div"),_params={type:"text",name:"packageName",prompt:"Package Name",value:data.packageName},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"text",name:"tourLeader",prompt:"Tour Leader",value:data.tourLeader},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"hidden",name:"validFrom",naked:"naked",value:data.validFrom?data.validFrom.toYYYYMMDD():_state.datePair.defaultStartDate(),min:_state.datePair.minStartDate.bind(self)(),onfocusout:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},_state.datePair.onStartDateFocusOut.bind(self)("validUntil")}},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementOpenStart("span",""),_elementOpenEnd("span"),yalla.framework.registerRef("validUntil",IncrementalDOM.currentElement(),function(){var _params={type:"date",name:"validUntil",prompt:"Registeration Open Until",value:data.validUntil?data.validUntil.toYYYYMMDD():_state.datePair.defaultEndDate(),min:_state.datePair.minEndDate.bind(self)()};_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})})(),_elementClose("span"),_params={type:"number",name:"costLandArrangements",prompt:"Land Arrangements (Rp)",value:data.costLandArrangements},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"number",name:"costTickets",prompt:"Tickets (Rp)",value:data.costTickets},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"checkbox",name:"isPublished",prompt:"Published",checked:data.isPublished},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"button",value:_state.packageId?"Save":"Register",divClass:"col-xs-6 col-sm-6 col-md-6 col-lg-6",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onSave.bind(self)()}},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"button",value:"Cancel",divClass:"col-xs-6 col-sm-6 col-md-6 col-lg-6",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onCancel.bind(self)()}},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div");var _params={alertType:_state.alert.type.bind(self)(),message:_state.alert.text.bind(self)()};_context.alert.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("form")}var node=domNode.element,self={target:node};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=self.target,self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state;var promise=getOnePackage.bind(self)(_state.packageId);promise&&"object"==typeof promise&&"then"in promise?(_skip(),promise.then(function(_result){$patchChanges(node,function(){asyncFunc_1.call(self,_result)})}).catch(function(){})):asyncFunc_1.call(self,promise)}({element:IncrementalDOM.currentElement(),pointer:IncrementalDOM.currentPointer()}),_elementClose("div"))}),_elementClose("div")}var $patchChanges=yalla.framework.renderToScreen,$inject=yalla.framework.createInjector("/dist/package/edit-package"),$export={},_elementName="dist.package.edit-package",_context={},_parentComponent=yalla.framework.getParentComponent,_merge=yalla.utils.merge,_elementClose=(IncrementalDOM.elementOpen,IncrementalDOM.elementClose),_elementOpenStart=IncrementalDOM.elementOpenStart,_elementOpenEnd=IncrementalDOM.elementOpenEnd,_attr=(IncrementalDOM.elementVoid,IncrementalDOM.text,IncrementalDOM.attr),_skip=IncrementalDOM.skip;return"function"==typeof $render&&($export.render=$render),$export}());