yalla.framework.addComponent("/dist/hotel/card-hotel",function(){function ComponentEvent(type,data,target,currentTarget){this.data=data,this.target=target,this.type=type,this.currentTarget=currentTarget}function initState(){return{}}function onPropertyChange(){}function initState(props){return{readonly:props.readonly,aspopup:props.aspopup}}function getHotel(hotel){return new Promise(function(resolve){"string"==typeof hotel?dpd.hotels.get(hotel,function(hotel){resolve(hotel)}):resolve(hotel)})}function onEdit(event){this.emitEvent("edit",event)}function onDelete(event){this.emitEvent("delete",event)}function onClose(){this.emitEvent("close")}function $render(_props){_context.panel=$inject("/component/panel"),_context.panel,_context.entry=$inject("/component/entry"),_context.entry,_context.pict=$inject("/component/profile-picture/home"),_context.pict,_elementOpenStart("div",""),_attr("element","dist.hotel.card-hotel"),_elementOpenEnd("div");var _component=IncrementalDOM.currentElement(),_validComponent=yalla.framework.validComponentName(_component,_elementName);_component._state=_component._state&&_validComponent?_component._state:initState.bind(_component)(_props),_component._state._name=_elementName;var _state=_component._state,_self={component:_component,properties:_props,state:_component._state};_validComponent&&yalla.framework.propertyCheckChanges(_component._properties,_props,onPropertyChange.bind(_self)),_component._properties=_props,function(){function asyncFunc_1(data){var _params={notitle:"notitle",nofooter:"nofooter",aspopup:_props.aspopup,onclose:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onClose.bind(self)()}};_context.panel.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(slotName){if("body"===slotName){if(_elementOpenStart("div",""),_attr("class","row"),_elementOpenEnd("div"),_params={readonly:"readonly",img:"/upload/hotelphotos/"+data.id+".jpg?"+(new Date).getTime()},_context.pict.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"label",prompt:data.hotelName},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"label",prompt:"Address: "+data.address},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"label",prompt:"City: "+data.city},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"label",prompt:"Phone: "+data.phone},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_state.readonly||_state.aspopup||(_params={type:"button",value:"Edit",divClass:"col-xs-6 col-sm-6 col-md-6 col-lg-6",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onEdit.bind(self)(data.id)}},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})),!_state.readonly&&!_state.aspopup){var _params={type:"button",value:"Delete",divClass:"col-xs-6 col-sm-6 col-md-6 col-lg-6",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onDelete.bind(self)(data.id)}};_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})}_elementClose("div")}})}var node={element:IncrementalDOM.currentElement(),pointer:IncrementalDOM.currentPointer()}.element,self={target:node};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=self.target,self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state;var promise=getHotel.bind(self)(_props.hotel);promise&&"object"==typeof promise&&"then"in promise?(_skip(),promise.then(function(_result){$patchChanges(node,function(){asyncFunc_1.call(self,_result)})}).catch(function(){})):asyncFunc_1.call(self,promise)}(),_elementClose("div")}var $patchChanges=yalla.framework.renderToScreen,$inject=yalla.framework.createInjector("/dist/hotel/card-hotel"),$export={},_elementName="dist.hotel.card-hotel",_context={},_parentComponent=yalla.framework.getParentComponent,_merge=yalla.utils.merge,_elementClose=(IncrementalDOM.elementOpen,IncrementalDOM.elementClose),_elementOpenStart=IncrementalDOM.elementOpenStart,_elementOpenEnd=IncrementalDOM.elementOpenEnd,_attr=(IncrementalDOM.elementVoid,IncrementalDOM.text,IncrementalDOM.attr),_skip=IncrementalDOM.skip;return"function"==typeof $render&&($export.render=$render),$export}());