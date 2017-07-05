yalla.framework.addComponent("/dist/booking/home",function(){function ComponentEvent(type,data,target,currentTarget){this.data=data,this.target=target,this.type=type,this.currentTarget=currentTarget}function initState(){return{}}function onPropertyChange(){}function initState(props){return{alert:new Alert(null,$patchChanges,"alert"),editedBooking:props.booking,passengerId:null}}function loadBooking(id){var self=this;return new Promise(function(resolve){id?dpd.bookings.get(id,function(bkg,err){self.state.alert.alert(err),self.state.editedBooking=bkg,resolve(bkg)}):resolve(null)})}function onEditBooking(event){this.state.editedBooking=event.data,$patchChanges()}function onBookingSaved(){this.state.editedBooking=null,$patchChanges()}function onBookingCancelled(){this.state.editedBooking=null,$patchChanges()}function $render(_props){_context.list=$inject("/booking/list"),_context.list,_context["card-booking"]=$inject("/booking/card-booking"),_context["card-booking"],_context.alert=$inject("/component/alert"),_context.alert,_context.entry=$inject("/component/entry"),_context.entry,_context.panel=$inject("/component/panel"),_context.panel,_context.ppLink=$inject("/component/ppLink"),_context.ppLink,_elementOpenStart("div",""),_attr("element","dist.booking.home"),_elementOpenEnd("div");var _component=IncrementalDOM.currentElement(),_validComponent=yalla.framework.validComponentName(_component,_elementName);_component._state=_component._state&&_validComponent?_component._state:initState.bind(_component)(_props),_component._state._name=_elementName;var _state=_component._state,_self={component:_component,properties:_props,state:_component._state};_validComponent&&yalla.framework.propertyCheckChanges(_component._properties,_props,onPropertyChange.bind(_self)),_component._properties=_props,function(domNode){function asyncFunc_1(){if(_elementOpenStart("span",""),_elementOpenEnd("span"),yalla.framework.registerRef("alert",IncrementalDOM.currentElement(),function(){var _params={message:_state.alert.text.bind(self)(),alertType:_state.alert.type.bind(self)()};_context.alert.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})})(),_elementClose("span"),_state.editedBooking){_elementOpenStart("div",""),_elementOpenEnd("div");var _params={booking:_state.editedBooking,onsaved:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onBookingSaved.bind(self)()},oncancelled:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onBookingCancelled.bind(self)()}};_context["card-booking"].render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div")}if(!_state.editedBooking){_elementOpenStart("div",""),_elementOpenEnd("div");var _params={oneditBooking:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onEditBooking.bind(self)(event)}};_context.list.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div")}}var node=domNode.element,self={target:node};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=self.target,self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state;var promise=loadBooking.bind(self)(_props.bookingId);promise&&"object"==typeof promise&&"then"in promise?(_skip(),promise.then(function(_result){$patchChanges(node,function(){asyncFunc_1.call(self,_result)})}).catch(function(err){})):asyncFunc_1.call(self,promise)}({element:IncrementalDOM.currentElement(),pointer:IncrementalDOM.currentPointer()}),_elementClose("div")}var $patchChanges=yalla.framework.renderToScreen,$inject=yalla.framework.createInjector("/dist/booking/home"),$export={},_elementName="dist.booking.home",_context={},_parentComponent=yalla.framework.getParentComponent,_merge=yalla.utils.merge,_elementClose=(IncrementalDOM.elementOpen,IncrementalDOM.elementClose),_elementOpenStart=IncrementalDOM.elementOpenStart,_elementOpenEnd=IncrementalDOM.elementOpenEnd,_attr=(IncrementalDOM.elementVoid,IncrementalDOM.text,IncrementalDOM.attr),_skip=IncrementalDOM.skip;return"function"==typeof $render&&($export.render=$render),$export}());