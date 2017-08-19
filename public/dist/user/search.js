yalla.framework.addComponent("/dist/user/search",function(){function ComponentEvent(type,data,target,currentTarget){this.data=data,this.target=target,this.type=type,this.currentTarget=currentTarget}function initState(){return{}}function onPropertyChange(){}function initState(props){return{recordsFound:props.recordsFound}}function onPropertyChange(props){props.recordsFound&&(this.state.recordsFound=props.recordsFound.newValue)}function onSearch(){var fe=this.target.form.elements,q={};for(var fieldName in fe)fe[fieldName].value&&fe[fieldName].name==fieldName&&"function"!=typeof fe[fieldName]&&("checkbox"==fe[fieldName].type?fe[fieldName].checked&&(q[fieldName]=!0):"button"!=fe[fieldName].type&&(q[fieldName]={$regex:fe[fieldName].value,$options:"i"}));this.emitEvent("search",q)}function $render(_props){_context.entry=$inject("/component/entry"),_context.entry,_context.home=$inject("/component/home-button"),_context.home,_context.panel=$inject("/component/panel"),_context.panel,_elementOpenStart("div",""),_attr("element","dist.user.search"),_elementOpenEnd("div");var _component=IncrementalDOM.currentElement(),_validComponent=yalla.framework.validComponentName(_component,_elementName);_component._state=_component._state&&_validComponent?_component._state:initState.bind(_component)(_props),_component._state._name=_elementName;var _state=_component._state,_self={component:_component,properties:_props,state:_component._state};_validComponent&&yalla.framework.propertyCheckChanges(_component._properties,_props,onPropertyChange.bind(_self)),_component._properties=_props;var _params={title:"Search for User",footer:_state.recordsFound};_context.panel.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(slotName){if("body"===slotName){_elementOpenStart("div",""),_elementOpenEnd("div"),_elementOpenStart("form",""),_elementOpenEnd("form"),_elementOpenStart("div",""),_attr("class","row"),_elementOpenEnd("div"),_params={type:"text",prompt:"First Name",name:"firstName"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"text",prompt:"Last Name",name:"lastName"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"email",prompt:"Email",name:"email"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"text",prompt:"Phone",name:"phone"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"textarea",prompt:"Address",name:"address1"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"text",prompt:"City",name:"city"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"checkbox",prompt:"Travel Agent",name:"isTravelAgent"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"checkbox",prompt:"Administrator",name:"isAdmin"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"button",name:"btnSearch",value:"Search",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onSearch.bind(self)()}},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){});var _params={};_context.home.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div"),_elementClose("form"),_elementClose("div")}}),_elementClose("div")}yalla.framework.renderToScreen;var $inject=yalla.framework.createInjector("/dist/user/search"),$export={},_elementName="dist.user.search",_context={},_parentComponent=yalla.framework.getParentComponent,_merge=yalla.utils.merge,_elementClose=(IncrementalDOM.elementOpen,IncrementalDOM.elementClose),_elementOpenStart=IncrementalDOM.elementOpenStart,_elementOpenEnd=IncrementalDOM.elementOpenEnd,_attr=(IncrementalDOM.elementVoid,IncrementalDOM.text,IncrementalDOM.attr);return IncrementalDOM.skip,"function"==typeof $render&&($export.render=$render),$export}());