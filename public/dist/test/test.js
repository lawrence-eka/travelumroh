yalla.framework.addComponent("/dist/test/test",function(){function ComponentEvent(type,data,target,currentTarget){this.data=data,this.target=target,this.type=type,this.currentTarget=currentTarget}function initState(){return{}}function onPropertyChange(){}function initState(props){var state={};return state.name=props.name,state.entries=props.entries,state}function initAwesomplete(value){var as=new Awesomplete(this.target,{list:this.state.entries});if(this.target.addEventListener("awesomplete-select",onAwesompleteSelect.bind(this)),as.replace=awesompleteReplace,as._list[0].label&&as._list[0].value){var item=as._list.find(function(x){return x.value==value});as.input.value=item?item.label:""}else as.input.value=value}function awesompleteReplace(text){this.input.value=text}function onAwesompleteSelect(event){document.getElementsByName(this.state.name)[0].value=event.text.value?event.text.value:event.text}function $render(_props){_elementOpenStart("div",""),_attr("element","dist.test.test"),_elementOpenEnd("div");var _component=IncrementalDOM.currentElement(),_validComponent=yalla.framework.validComponentName(_component,_elementName);_component._state=_component._state&&_validComponent?_component._state:initState.bind(_component)(_props),_component._state._name=_elementName;var _state=_component._state,_self={component:_component,properties:_props,state:_component._state};_validComponent&&yalla.framework.propertyCheckChanges(_component._properties,_props,onPropertyChange.bind(_self)),_component._properties=_props,_elementOpenStart("input",""),_attr("class","form-control input-sm"),_attr("name",_state.name+"-display"),_attr("data-minchars","1"),_attr("required",_props.required),_attr("oncreated",function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},initAwesomplete.bind(self)(_props.value)}),_elementOpenEnd("input"),_elementClose("input"),_elementOpenStart("input",""),_attr("name",_state.name),_attr("value",_props.value),_attr("type","hidden"),_elementOpenEnd("input"),_elementClose("input"),_elementClose("div")}yalla.framework.renderToScreen,yalla.framework.createInjector("/dist/test/test");var $export={},_elementName="dist.test.test",_parentComponent=yalla.framework.getParentComponent,_elementClose=(yalla.utils.merge,IncrementalDOM.elementOpen,IncrementalDOM.elementClose),_elementOpenStart=IncrementalDOM.elementOpenStart,_elementOpenEnd=IncrementalDOM.elementOpenEnd,_attr=(IncrementalDOM.elementVoid,IncrementalDOM.text,IncrementalDOM.attr);return IncrementalDOM.skip,"function"==typeof $render&&($export.render=$render),$export}());