yalla.framework.addComponent("/dist/user/reset-password",function(){function ComponentEvent(type,data,target,currentTarget){this.data=data,this.target=target,this.type=type,this.currentTarget=currentTarget}function initState(){return{}}function onPropertyChange(){}function initState(props){return{alert:new Alert(null,$patchChanges,"alert"),uuid:props.id,user:null,success:!1}}function getUser(){var self=this;return new Promise(function(resolve){var q={uuid:self.state.uuid};dpd.resetpassword.get(q,function(user,err){self.state.alert.alert(err),resolve(err?null:user)})})}function onChangePassword(){var self=this,q={password:this.target.form.elements.password.value},self=this;dpd.resetpassword.put({uuid:self.state.uuid},q,function(result,err){self.state.alert.alert(err),err||(self.state.success=!0,$patchChanges())})}function onCancel(){window.location.hash="#app/user.login-form"}function onLogIn(){window.location.hash="#app/user.login-form"}function $render(_props){_context.profile=$inject("/user/userProfile"),_context.profile,_context.panel=$inject("/component/panel"),_context.panel,_context.entry=$inject("/component/entry"),_context.entry,_context.alert=$inject("/component/alert"),_context.alert,_elementOpenStart("div",""),_attr("element","dist.user.reset-password"),_attr("class","container small-margin-top"),_elementOpenEnd("div");var _component=IncrementalDOM.currentElement(),_validComponent=yalla.framework.validComponentName(_component,_elementName);_component._state=_component._state&&_validComponent?_component._state:initState.bind(_component)(_props),_component._state._name=_elementName;var _state=_component._state,_self={component:_component,properties:_props,state:_component._state};if(_validComponent&&yalla.framework.propertyCheckChanges(_component._properties,_props,onPropertyChange.bind(_self)),_component._properties=_props,_state.success||(_elementOpenStart("span",""),_elementOpenEnd("span"),function(){function asyncFunc_1(data){if(data){var _params={nofooter:"nofooter"};_context.panel.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(slotName){if("title"===slotName&&(_elementOpenStart("div",""),_elementOpenEnd("div"),_elementOpenStart("strong",""),_elementOpenEnd("strong"),_text("Reset Your Password"),_elementClose("strong"),_elementClose("div")),"body"===slotName){_elementOpenStart("div",""),_elementOpenEnd("div"),_elementOpenStart("form",""),_elementOpenEnd("form"),_elementOpenStart("div",""),_attr("class","row"),_elementOpenEnd("div"),_params={type:"label",prompt:"Hello, "+data.firstName+" "+data.lastName},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"password",name:"password",required:"required",prompt:"Your New Password"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"password",name:"retypePassword",required:"required",prompt:"Re-type Your New Password"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"button",value:"Reset Password",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onChangePassword.bind(self)()}},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){});var _params={type:"button",value:"Cancel",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onCancel.bind(self)()}};_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div"),_elementClose("form"),_elementClose("div")}})}}var node={element:IncrementalDOM.currentElement(),pointer:IncrementalDOM.currentPointer()}.element,self={target:node};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=self.target,self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state;var promise=getUser.bind(self)();promise&&"object"==typeof promise&&"then"in promise?(_skip(),promise.then(function(_result){$patchChanges(node,function(){asyncFunc_1.call(self,_result)})}).catch(function(){})):asyncFunc_1.call(self,promise)}(),_elementClose("span")),_state.success){_elementOpenStart("span",""),_elementOpenEnd("span");var _params={nofooter:"nofooter"};_context.panel.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(slotName){if("title"===slotName&&(_elementOpenStart("div",""),_elementOpenEnd("div"),_elementOpenStart("strong",""),_elementOpenEnd("strong"),_text("Reset Your Password"),_elementClose("strong"),_elementClose("div")),"body"===slotName){_elementOpenStart("div",""),_elementOpenEnd("div"),_elementOpenStart("div",""),_elementOpenEnd("div"),_params={message:"Your password has been changed.",alertType:"info"},_context.alert.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div"),_elementOpenStart("div",""),_attr("class","row"),_elementOpenEnd("div");var _params={type:"button",value:"Log In",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onLogIn.bind(self)()}};_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div"),_elementClose("div")}}),_elementClose("span")}_elementOpenStart("span",""),_elementOpenEnd("span"),yalla.framework.registerRef("alert",IncrementalDOM.currentElement(),function(){var _params={alertType:_state.alert.type.bind(self)(),message:_state.alert.text.bind(self)()};_context.alert.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})})(),_elementClose("span"),_elementClose("div")}var $patchChanges=yalla.framework.renderToScreen,$inject=yalla.framework.createInjector("/dist/user/reset-password"),$export={},_elementName="dist.user.reset-password",_context={},_parentComponent=yalla.framework.getParentComponent,_merge=yalla.utils.merge,_elementClose=(IncrementalDOM.elementOpen,IncrementalDOM.elementClose),_elementOpenStart=IncrementalDOM.elementOpenStart,_elementOpenEnd=IncrementalDOM.elementOpenEnd,_text=(IncrementalDOM.elementVoid,IncrementalDOM.text),_attr=IncrementalDOM.attr,_skip=IncrementalDOM.skip;return"function"==typeof $render&&($export.render=$render),$export}());