yalla.framework.addComponent("/dist/test",function(){function ComponentEvent(type,data,target,currentTarget){this.data=data,this.target=target,this.type=type,this.currentTarget=currentTarget}function initState(props){return{}}function onPropertyChange(event){}function onclick(){x=1==x?2:1,$patchChanges()}function isVisible(obj,num){return x==num?"":"hideThis"}function $render(_props,_slotView){_elementOpenStart("style",""),_elementOpenEnd("style"),_text("\n[element='dist.test'] .hideThis {display:none;}"),_elementClose("style"),_elementOpenStart("div",""),_attr("element","dist.test"),_elementOpenEnd("div");var _component=IncrementalDOM.currentElement(),_validComponent=yalla.framework.validComponentName(_component,_elementName);_component._state=_component._state&&_validComponent?_component._state:initState.bind(_component)(_props),_component._state._name=_elementName;var _self=(_component._state,{component:_component,properties:_props,state:_component._state});_validComponent&&yalla.framework.propertyCheckChanges(_component._properties,_props,onPropertyChange.bind(_self)),_component._properties=_props,_elementOpenStart("input",""),_attr("type","button"),_attr("onclick",function(event){var self={target:event.target};self.properties=_props,"elements"in self.target&&(self.elements=self.target.elements),self.currentTarget=this==event.target?self.target:_parentComponent(event.currentTarget),self.component=_component,self.component._state=self.component._state||{},self.state=self.component._state,self.emitEvent=function(eventName,data){var event=new ComponentEvent(eventName,data,self.target,self.currentTarget);"on"+eventName in _props&&_props["on"+eventName](event)},onclick.bind(self)()}),_elementOpenEnd("input"),_elementClose("input"),_elementOpenStart("form",""),_elementOpenEnd("form"),_elementOpenStart("div",""),_attr("name","hello"),_attr("class",isVisible.bind(self)(this,1)),_elementOpenEnd("div"),_elementOpenStart("input",""),_attr("type","text"),_attr("name","hello"),_attr("value","hello"),_elementOpenEnd("input"),_elementClose("input"),_elementClose("div"),_elementOpenStart("div",""),_attr("name","world"),_attr("class",isVisible.bind(self)(this,2)),_elementOpenEnd("div"),_elementOpenStart("input",""),_attr("type","text"),_attr("name","world"),_attr("value","world"),_elementOpenEnd("input"),_elementClose("input"),_elementClose("div"),_elementClose("form"),_elementClose("div")}var $patchChanges=yalla.framework.renderToScreen,$export=(yalla.framework.createInjector("/dist/test"),{}),_elementName="dist.test",_parentComponent=yalla.framework.getParentComponent,_elementClose=(yalla.utils.merge,IncrementalDOM.elementOpen,IncrementalDOM.elementClose),_elementOpenStart=IncrementalDOM.elementOpenStart,_elementOpenEnd=IncrementalDOM.elementOpenEnd,_text=(IncrementalDOM.elementVoid,IncrementalDOM.text),_attr=IncrementalDOM.attr,x=(IncrementalDOM.skip,1);return"function"==typeof $render&&($export.render=$render),$export}());