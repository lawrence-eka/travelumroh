yalla.framework.addComponent("/dist/user/userProfile",function(){function ComponentEvent(type,data,target,currentTarget){this.data=data,this.target=target,this.type=type,this.currentTarget=currentTarget}function initState(){return{}}function onPropertyChange(){}function initState(props){props.onSaved&&props.onSaved.subscribe(onSaved.bind(this));var state={alert:new Alert(null,$patchChanges,["alert","docsTravelAgent"]),originalProfile:null,onSave:new Event,showDocsTravelAgent:!1};return state.alert.alert(props.error),infoText="",state}function onPropertyChange(event){event.error&&this.state.alert.alert(event.error.newValue)}function gotNeedApproval(profile,which){return profile.needApproval&&profile.needApproval.hasOwnProperty(which)}function loadProfile(profile){return profile=profile||{},this.state.originalProfile=profile,this.state.showDocsTravelAgent=profile.isTravelAgent||profile.needApproval&&profile.needApproval.isTravelAgent,this.state.originalProfile}function whatTitle(profile){return profile?profile.id==storage.me.read().id?"Your Profile":"User Profile":"Please Sign Up"}function onTravelAgentClick(event){this.state.showDocsTravelAgent=event.data,$patchChanges("docsTravelAgent")}function onRegister(){this.state.infoText="Saving your profile...",$patchChanges("info"),this.state.alert.alert("");var form=this.target.form;if(form.elements.password.value!=form.elements.repeatPassword.value)return this.state.infoText="",$patchChanges("info"),void this.state.alert.alert({name:"repeatPassword",message:"Please repeat your password correctly"});var profile=this.state.originalProfile;profile.id=form.elements.id.value,profile.firstName=form.elements.firstName.value,profile.lastName=form.elements.lastName.value,profile.email=form.elements.email.value,profile.phone=form.elements.phone.value,profile.username=form.elements.email.value,profile.username&&(profile.username=profile.username.toLowerCase()),""!=form.elements.password.value&&(profile.password=form.elements.password.value),profile.address1=form.elements.address1.value,profile.city=form.elements.city.value,!!profile.isAdmin!=form.elements.isAdmin.checked?profile.isAdmin=form.elements.isAdmin.checked:(delete profile.isAdmin,profile.needApproval&&delete profile.needApproval.isAdmin),!!profile.isTravelAgent!=form.elements.isTravelAgent.checked?profile.isTravelAgent=form.elements.isTravelAgent.checked:(delete profile.isTravelAgent,profile.needApproval&&delete profile.needApproval.isTravelAgent),!profile.needApproval||profile.needApproval.hasOwnProperty("isAdmin")||profile.needApproval.hasOwnProperty("isTravelAgent")||(profile.needApproval=null),register.bind(this)(profile)}function onCancel(){this.emitEvent("cancel")}function register(profile){var self=this;profile.id?dpd.users.put(profile.id,profile,function(user,err){profile.sid=storage.me.read().sid,afterSaveProfile.bind(self)(user,err,profile)}):dpd.users.post(profile,function(user,err){err?(this.state.infoText="",$patchChanges("info"),self.state.error=err,$patchChanges()):dpd.users.login({username:profile.username,password:profile.password},function(user,err){profile.sid=user.id,afterSaveProfile.bind(self)(user,err,profile)})})}function afterSaveProfile(user,err,profile){err?(this.state.infoText="",$patchChanges("info"),this.state.alert.alert(err),$patchChanges()):(profile.password=void 0,storage.me.save(profile,storage.me.isRemembered()),this.state.onSave.publish(afterSaveAttachments.bind(this)))}function afterSaveAttachments(result,error){error?(this.state.infoText="",$patchChanges("info"),this.state.alert.alert(error)):this.emitEvent("save")}function $render(_props){_context.alert=$inject("/component/alert"),_context.alert,_context.entry=$inject("/component/entry"),_context.entry,_context.panel=$inject("/component/panel"),_context.panel,_context.ppLink=$inject("/component/ppLink"),_context.ppLink,_context.attachments=$inject("/component/attachments/home"),_context.attachments,_elementOpenStart("div",""),_attr("element","dist.user.userProfile"),_elementOpenEnd("div");var _component=IncrementalDOM.currentElement(),_validComponent=yalla.framework.validComponentName(_component,_elementName);_component._state=_component._state&&_validComponent?_component._state:initState.bind(_component)(_props),_component._state._name=_elementName;var _state=_component._state,_self={component:_component,properties:_props,state:_component._state};_validComponent&&yalla.framework.propertyCheckChanges(_component._properties,_props,onPropertyChange.bind(_self)),_component._properties=_props;var _params={title:whatTitle.bind(self)(_props.profile)};_context.panel.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(slotName){if("footer"===slotName){_elementOpenStart("div",""),_elementOpenEnd("div");var _params={};_context.ppLink.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div")}"body"===slotName&&(_elementOpenStart("div",""),_elementOpenEnd("div"),function(){function asyncFunc_1(data){_elementOpenStart("form",""),_elementOpenEnd("form"),_elementOpenStart("div",""),_attr("class","row"),_elementOpenEnd("div"),yalla.framework.registerRef("alert",IncrementalDOM.currentElement(),function(){if(_elementOpenStart("input",""),_attr("type","hidden"),_attr("name","id"),_attr("value",data.id),_elementOpenEnd("input"),_elementClose("input"),_params={type:"text",prompt:"First Name",name:"firstName",value:data.firstName},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"text",prompt:"Last Name",name:"lastName",value:data.lastName},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"hidden",prompt:"username",name:"username",value:data.username},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"email",prompt:"Email",name:"email",value:data.email,alias:"username",alert:_state.alert},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"text",prompt:"Phone",name:"phone",value:data.phone},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"textarea",prompt:"Address",name:"address1",value:data.address1},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"text",prompt:"City",name:"city",value:data.city},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),gotNeedApproval(data,"isAdmin")||(_elementOpenStart("div",""),_elementOpenEnd("div"),_params={type:"checkbox",prompt:"Administrator",name:"isAdmin",checked:data.isAdmin},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div")),gotNeedApproval(data,"isAdmin")&&(_elementOpenStart("div",""),_elementOpenEnd("div"),_params={type:"checkbox",prompt:"Administrator*",name:"isAdmin",checked:data.needApproval.isAdmin},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"label",prompt:"*"+(data.needApproval.isAdmin?"Request for":"Revokal of")+" Admin Access under review"},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div")),gotNeedApproval(data,"isTravelAgent")||(_elementOpenStart("div",""),_elementOpenEnd("div"),_params={type:"checkbox",prompt:"Travel Agent",name:"isTravelAgent",checked:data.isTravelAgent,onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onTravelAgentClick.bind(self)(event)}},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div")),gotNeedApproval(data,"isTravelAgent")){_elementOpenStart("div",""),_elementOpenEnd("div"),_params={type:"checkbox",prompt:"Travel Agent*",name:"isTravelAgent",checked:data.needApproval.isTravelAgent,onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onTravelAgentClick.bind(self)(event)}},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){});var _params={type:"label",prompt:"*"+(data.needApproval.isTravelAgent?"Request for":"Revokal of")+" Travel Agent Access under review"};_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div")}})(),_elementClose("div"),_elementOpenStart("div",""),_elementOpenEnd("div"),yalla.framework.registerRef("docsTravelAgent",IncrementalDOM.currentElement(),function(){if(_state.showDocsTravelAgent){_elementOpenStart("div",""),_attr("class","row"),_elementOpenEnd("div");var _params={userId:data.id,prompt:"Proof of Travel Agency",collection:"docstravelagent",folder:"upload/docstravelagent/",onSave:_state.onSave,onsaved:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},afterSaveAttachments.bind(self)()},name:"docsTravelAgent",alert:_state.alert,maxFile:"3",maxSize:"100k"};_context.attachments.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_elementClose("div")}})(),_elementClose("div"),_elementOpenStart("div",""),_attr("class","row"),_elementOpenEnd("div"),yalla.framework.registerRef("alert",IncrementalDOM.currentElement(),function(){_params={type:"password",prompt:"Password",name:"password",value:data.password,alert:_state.alert},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"password",prompt:"Repeat Password",name:"repeatPassword",alert:_state.alert},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){}),_params={type:"button",name:"btnSave",value:_props.profile?"Save":"Register",divClass:"col-xs-6 col-sm-6 col-md-6 col-lg-6",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onRegister.bind(self)()}},_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){});var _params={type:"button",name:"btnCancel",value:"Cancel",divClass:"col-xs-6 col-sm-6 col-md-6 col-lg-6",onclick:function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onCancel.bind(self)()}};_context.entry.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})})(),_elementClose("div"),_elementClose("form"),_elementOpenStart("span",""),_elementOpenEnd("span"),yalla.framework.registerRef("alert",IncrementalDOM.currentElement(),function(){var _params={alertType:_state.alert.type.bind(self)(),message:_state.alert.text.bind(self)()};_context.alert.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})})(),_elementClose("span"),_elementOpenStart("span",""),_elementOpenEnd("span"),yalla.framework.registerRef("info",IncrementalDOM.currentElement(),function(){if(_state.infoText){var _params={alertType:"info",message:_state.infoText};_context.alert.render("object"==typeof arguments[1]?_merge(arguments[1],_params):_params,function(){})}})(),_elementClose("span")}var node={element:IncrementalDOM.currentElement(),pointer:IncrementalDOM.currentPointer()}.element,self={target:node};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=self.target,self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state;var promise=loadProfile.bind(self)(_props.profile);promise&&"object"==typeof promise&&"then"in promise?(_skip(),promise.then(function(_result){$patchChanges(node,function(){asyncFunc_1.call(self,_result)})}).catch(function(){})):asyncFunc_1.call(self,promise)}(),_elementClose("div"))}),_elementClose("div")}var $patchChanges=yalla.framework.renderToScreen,$inject=yalla.framework.createInjector("/dist/user/userProfile"),$export={},_elementName="dist.user.userProfile",_context={},_parentComponent=yalla.framework.getParentComponent,_merge=yalla.utils.merge,_elementClose=(IncrementalDOM.elementOpen,IncrementalDOM.elementClose),_elementOpenStart=IncrementalDOM.elementOpenStart,_elementOpenEnd=IncrementalDOM.elementOpenEnd,_attr=(IncrementalDOM.elementVoid,IncrementalDOM.text,IncrementalDOM.attr),_skip=IncrementalDOM.skip;return"function"==typeof $render&&($export.render=$render),$export}());