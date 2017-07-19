yalla.framework.addComponent("/dist/booking/card-booking",function(){function ComponentEvent(type,data,target,currentTarget){this.data=data,this.target=target,this.type=type,this.currentTarget=currentTarget}function initState(){return{}}function onPropertyChange(){}function initState(props){return{booking:props.booking,flow:(new Utils).flow.booking,showOnly:props.showOnly,alert:new Alert(null,$patchChanges,"alert")}}function onPropertyChange(props){props.booking&&(this.state.booking=props.booking.newValue,this.state.status=(new Utils).bookings.status(props.booking.newValue)),props.showOnly&&(this.state.showOnly=props.showOnly.newValue)}function onClick(){this.emitEvent("click",this.state.booking)}function onShowPaymentDetail(){window.location.hash="#app/booking.paymentDetails:bookingId="+this.state.booking.id}function onEditPassenger(){window.location.hash="#app/passenger.home:bookingId="+this.state.booking.id}function onSaveBooking(){this.emitEvent("saved")}function onCancelBooking(){var self=this;return new Promise(function(resolve){"DPS"==self.state.booking.bookingStatus?dpd.bookings.del(self.state.booking.id,function(){self.state.alert.alert(null),self.emitEvent("cancelled"),resolve(null)}):(self.state.booking.isCancelled=!0,self.state.booking.bookingStatus=self.state.flow.move(self.state.booking.bookingStatus,"cancellation"),dpd.bookings.put(self.state.booking.id,self.state.booking,function(res,err){self.state.alert.alert(err),err||self.emitEvent("cancelled"),resolve(null)}))})}function $render(_props){_context.card=$inject("/component/panel"),_context.card,_context.alert=$inject("/component/alert"),_context.alert,_context.entry=$inject("/component/entry"),_context.entry,_elementOpenStart("div",""),_attr("element","dist.booking.card-booking"),_elementOpenEnd("div");var _component=IncrementalDOM.currentElement(),_validComponent=yalla.framework.validComponentName(_component,_elementName);_component._state=_component._state&&_validComponent?_component._state:initState.bind(_component)(_props),_component._state._name=_elementName;var _state=_component._state,_self={component:_component,properties:_props,state:_component._state};_validComponent&&yalla.framework.propertyCheckChanges(_component._properties,_props,onPropertyChange.bind(_self)),_component._properties=_props;var _params={onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onClick.bind(self)()},title:_state.booking.package.packageName};_context.card.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(slotName){if("body"===slotName){if(_elementOpenStart("div",""),_elementOpenEnd("div"),_elementOpenStart("div",""),_attr("class","row"),_elementOpenEnd("div"),_params={type:"label",prompt:"Booking No: "+_state.booking.bookingNo,innerDivClass:"custom-label-margin"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"label",prompt:"Travel Date: "+_state.booking.package.travelDateFrom.toStringDateRange(_state.booking.package.travelDateUntil),innerDivClass:"custom-label-margin"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"label",prompt:"Operator: "+_state.booking.travelAgent.travelAgentName,innerDivClass:"custom-label-margin"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"label",prompt:"Land Arrangements: "+(_state.booking.costLandArrangements?_state.booking.costLandArrangements.toFormattedString():""),innerDivClass:"custom-label-margin"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"label",prompt:"Tickets: "+(_state.booking.costTickets?_state.booking.costTickets.toFormattedString():""),innerDivClass:"custom-label-margin"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"label",prompt:"Total passenger: "+(_state.booking.numberOfPassengers?_state.booking.numberOfPassengers:""),innerDivClass:"custom-label-margin"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"label",prompt:"Total Price: "+(_state.booking.totalPrice-_state.booking.uniqueCode?(_state.booking.totalPrice-_state.booking.uniqueCode).toFormattedString():""),innerDivClass:"custom-label-margin"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"label",prompt:"Unique Code: "+(_state.booking.uniqueCode?_state.booking.uniqueCode:""),innerDivClass:"custom-label-margin"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"label",prompt:"Grand Total: "+(_state.booking.totalPrice?_state.booking.totalPrice.toFormattedString():""),innerDivClass:"custom-label-margin"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"label",prompt:"Expiry Date: "+(_state.booking.waitingForPaymentUntil?_state.booking.waitingForPaymentUntil.toDateComponents(!1,!0):"")},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div"),!_state.showOnly){if(_elementOpenStart("div",""),_attr("class","row"),_elementOpenEnd("div"),_params={type:"button",name:"btnSave",value:"Save & Close",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onSaveBooking.bind(self)()}},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"button",name:"btnPassengers",value:"Passengers...",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onEditPassenger.bind(self)()}},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_state.booking.uniqueCode&&(_params={type:"button",name:"btnPaymentDetail",value:"Payment Detail",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onShowPaymentDetail.bind(self)()}},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})),_state.flow.isTransitionAllowed(_state.booking.bookingStatus,"DPS")&&(_params={type:"button",name:"btnRedefinePassengers",value:"Redefine Passengers",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onRedefinePassengers.bind(self)()}},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})),_state.flow.isTransitionAllowed(_state.booking.bookingStatus,"WFP","paymentCancellation")&&(_params={type:"button",name:"btnCancelPayment",value:"Cancel Payment",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onRedefinePassengers.bind(self)()}},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})),_state.flow.isTransitionAllowed(_state.booking.bookingStatus,"CCL")){var _params={type:"button",name:"btnCancel",value:"Cancel Booking",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onCancelBooking.bind(self)()}};_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})}_elementClose("div")}_elementClose("div")}"footer"===slotName&&(_elementOpenStart("div",""),_elementOpenEnd("div"),_elementOpenStart("strong",""),_elementOpenEnd("strong"),_text("Status: "+_state.flow.status(_state.booking.bookingStatus)),_elementClose("strong"),_elementClose("div"))}),_elementOpenStart("span",""),_elementOpenEnd("span"),yalla.framework.registerRef("alert",IncrementalDOM.currentElement(),function(){var _params={alertType:_state.alert.type.bind(self)(),message:_state.alert.text.bind(self)()};_context.alert.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})})(),_elementClose("span"),_elementClose("div")}var $patchChanges=yalla.framework.renderToScreen,$inject=yalla.framework.createInjector("/dist/booking/card-booking"),$export={},_elementName="dist.booking.card-booking",_context={},_parentComponent=yalla.framework.getParentComponent,_merge=yalla.utils.merge,_elementClose=(IncrementalDOM.elementOpen,IncrementalDOM.elementClose),_elementOpenStart=IncrementalDOM.elementOpenStart,_elementOpenEnd=IncrementalDOM.elementOpenEnd,_text=(IncrementalDOM.elementVoid,IncrementalDOM.text),_attr=IncrementalDOM.attr;return IncrementalDOM.skip,"function"==typeof $render&&($export.render=$render),$export}());