yalla.framework.addComponent("/dist/component/panel",function(){function ComponentEvent(type,data,target,currentTarget){this.data=data,this.target=target,this.type=type,this.currentTarget=currentTarget}function initState(){return{}}function onPropertyChange(){}function initState(props){return{aspopup:null!=props.aspopup,popupPanel:null}}function doClose(){this.emitEvent("close")}function onClosePopup(){this.state.popupPanel.className+=" custom-fadeout-anim",document.getElementsByName("popup")[0].style.visibility="hidden",document.getElementsByName("motherNature")[0].className="not-blur",setTimeout(doClose.bind(this),250)}function onCreated(){if(this.state.aspopup){this.state.popupPanel=this.target;var popup=document.getElementsByName("popup")[0];popup.style.visibility="visible",popup.appendChild(this.target),document.getElementsByName("motherNature")[0].className="blur"}}function onDeleted(){this.state.aspopup&&(document.getElementsByName("motherNature")[0].className="not-blur")}function onClick(){"A"!=this.target.nodeName&&this.emitEvent("click")}function isClickable(){return this.properties&&this.properties.onclick?"cursor:pointer":""}function $render(_props,_slotView){_context.entry=$inject("/component/entry"),_context.entry,_elementOpenStart("div",""),_attr("element","dist.component.panel"),_attr("oncreated",function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onCreated.bind(self)()}),_attr("ondeleted",function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onDeleted.bind(self)()}),_elementOpenEnd("div");var _component=IncrementalDOM.currentElement(),_validComponent=yalla.framework.validComponentName(_component,_elementName);_component._state=_component._state&&_validComponent?_component._state:initState.bind(_component)(_props),_component._state._name=_elementName;var _state=_component._state,_self={component:_component,properties:_props,state:_component._state};if(_validComponent&&yalla.framework.propertyCheckChanges(_component._properties,_props,onPropertyChange.bind(_self)),_component._properties=_props,_elementOpenStart("div",""),_attr("class","container custom-container-layout custom-std-anim"),_attr("style",isClickable.bind(self)()),_elementOpenEnd("div"),_elementOpenStart("div",""),_attr("class","row centered-form no-top-margin"),_elementOpenEnd("div"),_elementOpenStart("div",""),_attr("class","form-panel col-xs-12 col-sm-12 col-md-12 col-lg-12"),_elementOpenEnd("div"),_elementOpenStart("div",""),_attr("class","panel panel-default "),_attr("onclick",function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onClick.bind(self)()}),_elementOpenEnd("div"),(_props.test||!_props.notitle||_props.title)&&(_elementOpenStart("div",""),_attr("class","panel-heading custom-panel-layout"),_elementOpenEnd("div"),_elementOpenStart("h3",""),_attr("class","panel-title"),_elementOpenEnd("h3"),_text(""+(_props.title?_props.title:"")),_props.test&&(_elementOpenStart("div",""),_elementOpenEnd("div"),_text("PANEL HEADER"),_elementClose("div")),_elementClose("h3"),_slotView("title",{}),_elementClose("div")),_elementOpenStart("div",""),_attr("class","panel-body custom-panel-layout"),_attr("style",_props.style),_elementOpenEnd("div"),_text(""+(_props.body?_props.body:"")),_props.test&&(_elementOpenStart("div",""),_elementOpenEnd("div"),_text("PANEL BODY"),_elementClose("div")),_slotView("body",{}),_elementClose("div"),_state.aspopup||_props.test||!_props.nofooter||_props.footer){if(_elementOpenStart("div",""),_attr("class","panel-footer custom-panel-layout"),_elementOpenEnd("div"),_state.aspopup||(_elementOpenStart("div",""),_elementOpenEnd("div"),_text(""+(_props.footer?_props.footer:"")),_props.test&&(_elementOpenStart("div",""),_elementOpenEnd("div"),_text("PANEL FOOTER"),_elementClose("div")),_slotView("footer",{}),_elementClose("div")),_state.aspopup){_elementOpenStart("div",""),_attr("class","row"),_elementOpenEnd("div");var _params={type:"button",value:"Close",divClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onClosePopup.bind(self)()}};_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div")}_elementClose("div")}_elementClose("div"),_elementClose("div"),_elementClose("div"),_elementClose("div"),_elementClose("div")}yalla.framework.renderToScreen;var $inject=yalla.framework.createInjector("/dist/component/panel"),$export={},_elementName="dist.component.panel",_context={},_parentComponent=yalla.framework.getParentComponent,_merge=yalla.utils.merge,_elementClose=(IncrementalDOM.elementOpen,IncrementalDOM.elementClose),_elementOpenStart=IncrementalDOM.elementOpenStart,_elementOpenEnd=IncrementalDOM.elementOpenEnd,_text=(IncrementalDOM.elementVoid,IncrementalDOM.text),_attr=IncrementalDOM.attr;return IncrementalDOM.skip,"function"==typeof $render&&($export.render=$render),$export}());