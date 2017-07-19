yalla.framework.addComponent("/dist/itinerary/edit-itinerary",function(){function ComponentEvent(type,data,target,currentTarget){this.data=data,this.target=target,this.type=type,this.currentTarget=currentTarget}function initState(){return{}}function onPropertyChange(){}function initState(props){return{entryType:props.entryType,itineraryId:props.itineraryId,packageId:props.packageId,datePair:{departure:new DatePair($patchChanges),checkIn:new DatePair($patchChanges,null,1)},transportType:"",alert:new Alert}}function getItinerary(){var self=this;return new Promise(function(resolve){(new Utils).itineraries.recommendedNewDates(self.state.packageId).then(function(data){if(self.state.datePair.departure.setDefaults(null,null,data),self.state.datePair.checkIn.setDefaults(null,null,data),self.state.itineraryId){var q={packageId:self.state.packageId,id:self.state.itineraryId};dpd.itineraries.get(q,function(itr,err){self.state.alert.alert(err),itr&&(self.state.entryType=itr.entry.transport?"Transport":"Hotel",resolve(itr))})}else resolve({packageId:self.state.packageId,entry:{}})})})}function onTransportTypeChange(){this.state.transportType=this.target.value,$patchChanges("spanTransport")}function whatTransportType(){return"Plane"==this.state.transportType?"Airline":this.state.transportType+" Info"}function onCancel(){this.emitEvent("close")}function onSave(event,itinerary){var form=this.target.form;(itinerary={}).id=form.elements.id.value,itinerary.packageId=form.elements.packageId.value,itinerary.entry={},itinerary.remarks=form.elements.remarks.value,"Hotel"==this.state.entryType?(itinerary.entry.hotel=form.elements.hotel.value,itinerary.entry.city=form.elements.city.value,itinerary.entry.checkIn=new Date(form.elements.checkIn.value).setHours(12,0,1),itinerary.entry.checkOut=new Date(form.elements.checkOut.value).setHours(11,59,59)):(itinerary.entry.transport=form.elements.transport.value,itinerary.entry.transportType=form.elements.transportType.value,itinerary.entry.departFrom=form.elements.departFrom.value,itinerary.entry.arriveAt=form.elements.arriveAt.value,itinerary.entry.departure=new Date(form.elements.departure.value).getTime(),itinerary.entry.arrival=new Date(form.elements.arrival.value).getTime());var self=this;""==itinerary.id?dpd.itineraries.post(itinerary,function(result,err){self.state.alert.alert(err),result&&self.emitEvent("close"),$patchChanges()}):dpd.itineraries.put(itinerary.id,itinerary,function(result,err){self.state.alert.alert(err),result&&self.emitEvent("close"),$patchChanges()})}function isVisible(group){return this.state.entryType==group?"":"custom-set-hidden"}function $render(_props){_context.entry=$inject("/component/entry"),_context.entry,_context.alert=$inject("/component/alert"),_context.alert,_context.panel=$inject("/component/panel"),_context.panel,_elementOpenStart("div",""),_attr("element","dist.itinerary.edit-itinerary"),_elementOpenEnd("div");var _component=IncrementalDOM.currentElement(),_validComponent=yalla.framework.validComponentName(_component,_elementName);_component._state=_component._state&&_validComponent?_component._state:initState.bind(_component)(_props),_component._state._name=_elementName;var _state=_component._state,_self={component:_component,properties:_props,state:_component._state};_validComponent&&yalla.framework.propertyCheckChanges(_component._properties,_props,onPropertyChange.bind(_self)),_component._properties=_props;var _params={title:(_state.itineraryId?"Edit":"New")+" Entry",nofooter:"nofooter"};_context.panel.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(slotName){"body"===slotName&&(_elementOpenStart("div",""),_elementOpenEnd("div"),function(){function asyncFunc_1(data){_elementOpenStart("form",""),_elementOpenEnd("form"),_elementOpenStart("input",""),_attr("type","hidden"),_attr("name","id"),_attr("value",data.id),_elementOpenEnd("input"),_elementClose("input"),_elementOpenStart("input",""),_attr("type","hidden"),_attr("name","packageId"),_attr("value",data.packageId),_elementOpenEnd("input"),_elementClose("input"),_elementOpenStart("div",""),_attr("class",isVisible.bind(self)("Transport")),_elementOpenEnd("div"),_elementOpenStart("div",""),_attr("class","row"),_elementOpenEnd("div"),_params={type:"select",name:"transportType",value:data.entry.transportType,prompt:"Transport",entries:["Plane","Bus","Train","Car","Ship"],onchange:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onTransportTypeChange.bind(self)()}},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div"),_elementOpenStart("div",""),_attr("class","row"),_elementOpenEnd("div"),_elementOpenStart("div",""),_elementOpenEnd("div"),yalla.framework.registerRef("spanTransport",IncrementalDOM.currentElement(),function(){var _params={type:"text",name:"transport",prompt:whatTransportType.bind(self)(),value:data.entry.transport};_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})})(),_elementClose("div"),_params={type:"datetime-local",name:"departure",prompt:"Departure",value:data.entry.departure?data.entry.departure.toYYYYMMDD(!0):_state.datePair.departure.defaultStartDate(!0),min:_state.datePair.departure.minStartDate.bind(self)(!0),onfocusout:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},_state.datePair.departure.onStartDateFocusOut.bind(self)("arrival")}},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"text",name:"departFrom",prompt:"Depart From",value:data.entry.departFrom},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementOpenStart("div",""),_elementOpenEnd("div"),yalla.framework.registerRef("arrival",IncrementalDOM.currentElement(),function(){var _params={type:"datetime-local",name:"arrival",prompt:"Arrival",value:data.entry.arrival?data.entry.arrival.toYYYYMMDD(!0):_state.datePair.departure.defaultEndDate(!0),min:_state.datePair.departure.minEndDate.bind(self)(!0)};_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})})(),_elementClose("div"),_params={type:"text",name:"arriveAt",prompt:"Arrive At",value:data.entry.arriveAt},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div"),_elementClose("div"),_elementOpenStart("div",""),_attr("class",isVisible.bind(self)("Hotel")),_elementOpenEnd("div"),_elementOpenStart("div",""),_attr("class","row"),_elementOpenEnd("div"),_params={type:"date",name:"checkIn",class:"form-control input-sm",prompt:"Check In",value:data.entry.checkIn?data.entry.checkIn.toYYYYMMDD():_state.datePair.checkIn.defaultStartDate(),min:_state.datePair.checkIn.minStartDate.bind(self)(),onfocusout:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},_state.datePair.checkIn.onStartDateFocusOut.bind(self)("checkOut")}},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementOpenStart("span",""),_elementOpenEnd("span"),yalla.framework.registerRef("checkOut",IncrementalDOM.currentElement(),function(){var _params={type:"date",name:"checkOut",class:"form-control input-sm",prompt:"Check Out",value:data.entry.checkOut?data.entry.checkOut.toYYYYMMDD():_state.datePair.checkIn.defaultEndDate(),min:_state.datePair.checkIn.minEndDate.bind(self)()};_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})})(),_elementClose("span"),_params={type:"text",name:"hotel",prompt:"Hotel",value:data.entry.hotel},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"text",name:"city",prompt:"City",value:data.entry.city},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div"),_elementClose("div"),_elementOpenStart("div",""),_attr("class","row"),_elementOpenEnd("div"),_params={type:"textarea",name:"remarks",prompt:"Remarks",value:data.remarks},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div"),_params={alertType:_state.alert.type.bind(self)(),message:_state.alert.text.bind(self)()},_context.alert.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementOpenStart("div",""),_attr("class","row"),_elementOpenEnd("div"),_params={type:"button",value:"Save",divClass:"col-xs-6 col-sm-6 col-md-6 col-lg-6",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onSave.bind(self)()}},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){});var _params={type:"button",value:"Cancel",divClass:"col-xs-6 col-sm-6 col-md-6 col-lg-6",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onCancel.bind(self)()}};_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div"),_elementClose("form")}var node={element:IncrementalDOM.currentElement(),pointer:IncrementalDOM.currentPointer()}.element,self={target:node};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=self.target,self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state;var promise=getItinerary.bind(self)();promise&&"object"==typeof promise&&"then"in promise?(_skip(),promise.then(function(_result){$patchChanges(node,function(){asyncFunc_1.call(self,_result)})}).catch(function(){})):asyncFunc_1.call(self,promise)}(),_elementClose("div"))}),_elementClose("div")}var $patchChanges=yalla.framework.renderToScreen,$inject=yalla.framework.createInjector("/dist/itinerary/edit-itinerary"),$export={},_elementName="dist.itinerary.edit-itinerary",_context={},_parentComponent=yalla.framework.getParentComponent,_merge=yalla.utils.merge,_elementClose=(IncrementalDOM.elementOpen,IncrementalDOM.elementClose),_elementOpenStart=IncrementalDOM.elementOpenStart,_elementOpenEnd=IncrementalDOM.elementOpenEnd,_attr=(IncrementalDOM.elementVoid,IncrementalDOM.text,IncrementalDOM.attr),_skip=IncrementalDOM.skip;return"function"==typeof $render&&($export.render=$render),$export}());