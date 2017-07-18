yalla.framework.addComponent("/dist/booking/bookPackage",function(){function ComponentEvent(type,data,target,currentTarget){this.data=data,this.target=target,this.type=type,this.currentTarget=currentTarget}function initState(){return{}}function onPropertyChange(){}function setBooking(bkg){var nop=booking.numberOfPassengers?booking.numberOfPassengers:0;(booking=bkg).numberOfPassengers=nop}function setNumberOfPassengers(numberOfPassengers){booking.numberOfPassengers=numberOfPassengers}function calculatePaymentDetail(bookingId){booking.uniqueCode=Math.floor(1e3*Math.random()),booking.waitingForPaymentUntil=(new Date).getTime()+108e5,dpd.bookings.put(booking,function(bkg,err){err?errorMessage=err.message:window.location.hash="#app/booking.paymentDetails:bookingId="+bookingId,$patchChanges()})}function getPassengers(bookingId){return new Promise(function(resolve){dpd.passengers.get({bookingId:bookingId},function(passengers,err){err?errorMessage=JSON.stringify(err):(setNumberOfPassengers(passengers.length),resolve(passengers))})})}function registerPassenger(){booking.totalPrice=booking.numberOfPassengers*(booking.costTickets+booking.costLandArrangements),dpd.bookings.put(booking,function(booking,err){err&&(errorMessage=err.message,$patchChanges())});var form=this.target.form,q={};return q.bookingId=form.elements.bookingId.value,q.firstName=form.elements.firstName.value,q.middleName=form.elements.middleName.value,q.lastName=form.elements.lastName.value,q.birthPlace=form.elements.birthPlace.value,q.birthday=new Date(form.elements.birthday.value).getTime(),q.passportNumber=form.elements.passportNumber.value,q.passportIssuer=form.elements.passportIssuer.value,q.passportIssueDate=new Date(form.elements.passportIssueDate.value).getTime(),q.passportExpiryDate=new Date(form.elements.passportExpiryDate.value).getTime(),form.elements.firstName.value="",form.elements.middleName.value="",form.elements.lastName.value="",form.elements.birthPlace.value="",form.elements.birthday.value="",form.elements.passportNumber.value="",form.elements.passportIssuer.value="",form.elements.passportIssueDate.value="",form.elements.passportExpiryDate.value="",dpd.passengers.post(q,function(user,err){err&&(errorMessage=JSON.stringify(err)),$patchChanges()}),!1}function queryBooking(id){return new Promise(function(resolve){dpd.bookings.get(id,function(bkg,err){err?errorMessage=JSON.stringify(err):(resolve(bkg),setBooking(bkg))})})}function $render(_props){_context["card-booking"]=$inject("/booking/card-booking"),_context["card-booking"],_context["card-passenger"]=$inject("/booking/card-passenger"),_context["card-passenger"],_context.alert=$inject("/component/alert"),_context.alert,_context.entry=$inject("/component/entry"),_context.entry,_context.panel=$inject("/component/panel"),_context.panel,_context.ppLink=$inject("/component/ppLink"),_context.ppLink,_elementOpenStart("div",""),_attr("element","dist.booking.bookPackage"),_elementOpenEnd("div");var _component=IncrementalDOM.currentElement(),_validComponent=yalla.framework.validComponentName(_component,_elementName);_component._state=_component._state&&_validComponent?_component._state:initState.bind(_component)(_props),_component._state._name=_elementName,_component._state;var _self={component:_component,properties:_props,state:_component._state};_validComponent&&yalla.framework.propertyCheckChanges(_component._properties,_props,onPropertyChange.bind(_self)),_component._properties=_props,_elementOpenStart("div",""),_elementOpenEnd("div"),function(domNode){function asyncFunc_1(data){var _params={bkg:data};_context["card-booking"].render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})}var node=domNode.element,self={target:node};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=self.target,self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state;var promise=queryBooking.bind(self)(_props.bookingId);promise&&"object"==typeof promise&&"then"in promise?(_skip(),promise.then(function(_result){$patchChanges(node,function(){asyncFunc_1.call(self,_result)})}).catch(function(){})):asyncFunc_1.call(self,promise)}({element:IncrementalDOM.currentElement(),pointer:IncrementalDOM.currentPointer()}),_elementClose("div");var _params={title:"Passenger Detail"};_context.panel.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(slotName){if("body"===slotName){_elementOpenStart("div",""),_elementOpenEnd("div"),_elementOpenStart("form",""),_attr("role","form"),_elementOpenEnd("form"),"footer"===slotName&&(_elementOpenStart("div",""),_elementOpenEnd("div"),_params={},_context.ppLink.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div")),_elementOpenStart("div",""),_attr("class","row"),_elementOpenEnd("div"),_params={type:"hidden",name:"bookingId",value:_props.bookingId},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"text",prompt:"First Name",name:"firstName"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"text",prompt:"Middle Name",name:"middleName"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"text",prompt:"Last Name",name:"lastName"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"text",prompt:"Birth Place",name:"birthPlace"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"date",prompt:"Birthday",name:"birthday",value:(new Date).toYYYYMMDD(),max:(new Date).toYYYYMMDD()},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"text",prompt:"Passport Number",name:"passportNumber"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"date",prompt:"Passport Issue Date",name:"passportIssueDate",value:(new Date).toYYYYMMDD(),max:(new Date).toYYYYMMDD()},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"date",prompt:"Passport Expiry Date",name:"passportExpiryDate",value:(new Date).toYYYYMMDD(),min:(new Date).toYYYYMMDD()},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"text",prompt:"Passport Issuer",name:"passportIssuer"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"button",name:"btnRegister",value:"Register",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},registerPassenger.bind(self)(_props.bookingId)}},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){});var _params={type:"button",name:"btnPaymentDetail",value:"Payment Detail",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},calculatePaymentDetail.bind(self)(_props.bookingId)}};_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div"),_elementClose("form"),_elementClose("div")}}),_elementOpenStart("div",""),_elementOpenEnd("div"),function(domNode){function asyncFunc_1(data){(data||[]).forEach(function(psg){_elementOpenStart("p",""),_elementOpenEnd("p");var _params={passenger:psg};_context["card-passenger"].render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("p")})}var node=domNode.element,self={target:node};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=self.target,self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state;var promise=getPassengers.bind(self)(_props.bookingId);promise&&"object"==typeof promise&&"then"in promise?(_skip(),promise.then(function(_result){$patchChanges(node,function(){asyncFunc_1.call(self,_result)})}).catch(function(){})):asyncFunc_1.call(self,promise)}({element:IncrementalDOM.currentElement(),pointer:IncrementalDOM.currentPointer()}),_elementClose("div"),_elementClose("div")}var $patchChanges=yalla.framework.renderToScreen,$inject=yalla.framework.createInjector("/dist/booking/bookPackage"),$export={},_elementName="dist.booking.bookPackage",_context={},_parentComponent=yalla.framework.getParentComponent,_merge=yalla.utils.merge,_elementClose=(IncrementalDOM.elementOpen,IncrementalDOM.elementClose),_elementOpenStart=IncrementalDOM.elementOpenStart,_elementOpenEnd=IncrementalDOM.elementOpenEnd,_attr=(IncrementalDOM.elementVoid,IncrementalDOM.text,IncrementalDOM.attr),_skip=IncrementalDOM.skip,booking={},errorMessage="";return"function"==typeof $render&&($export.render=$render),$export}());