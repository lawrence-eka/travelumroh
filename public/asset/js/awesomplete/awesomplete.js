!function(){function Suggestion(data){var o=Array.isArray(data)?{label:data[0],value:data[1]}:"object"==typeof data&&"label"in data&&"value"in data?data:{label:data,value:data};this.label=o.label||o.value,this.value=o.value}function configure(instance,properties,o){for(var i in properties){var initial=properties[i],attrValue=instance.input.getAttribute("data-"+i.toLowerCase());"number"==typeof initial?instance[i]=parseInt(attrValue):!1===initial?instance[i]=null!==attrValue:initial instanceof Function?instance[i]=null:instance[i]=attrValue,instance[i]||0===instance[i]||(instance[i]=i in o?o[i]:initial)}}function $(expr,con){return"string"==typeof expr?(con||document).querySelector(expr):expr||null}function $$(expr,con){return slice.call((con||document).querySelectorAll(expr))}function init(){$$("input.awesomplete").forEach(function(input){new _(input)})}var _=function(input,o){var me=this;this.isOpened=!1,this.input=$(input),this.input.setAttribute("autocomplete","off"),this.input.setAttribute("aria-autocomplete","list"),o=o||{},configure(this,{minChars:2,maxItems:10,autoFirst:!1,data:_.DATA,filter:_.FILTER_CONTAINS,sort:!1!==o.sort&&_.SORT_BYLENGTH,item:_.ITEM,replace:_.REPLACE},o),this.index=-1,this.container=$.create("div",{className:"awesomplete",around:input}),this.ul=$.create("ul",{hidden:"hidden",inside:this.container}),this.status=$.create("span",{className:"visually-hidden",role:"status","aria-live":"assertive","aria-relevant":"additions",inside:this.container}),this._events={input:{input:this.evaluate.bind(this),blur:this.close.bind(this,{reason:"blur"}),keydown:function(evt){var c=evt.keyCode;me.opened&&(13===c&&me.selected?(evt.preventDefault(),me.select()):27===c?me.close({reason:"esc"}):38!==c&&40!==c||(evt.preventDefault(),me[38===c?"previous":"next"]()))}},form:{submit:this.close.bind(this,{reason:"submit"})},ul:{mousedown:function(evt){var li=evt.target;if(li!==this){for(;li&&!/li/i.test(li.nodeName);)li=li.parentNode;li&&0===evt.button&&(evt.preventDefault(),me.select(li,evt.target))}}}},$.bind(this.input,this._events.input),$.bind(this.input.form,this._events.form),$.bind(this.ul,this._events.ul),this.input.hasAttribute("list")?(this.list="#"+this.input.getAttribute("list"),this.input.removeAttribute("list")):this.list=this.input.getAttribute("data-list")||o.list||[],_.all.push(this)};_.prototype={set list(list){if(Array.isArray(list))this._list=list;else if("string"==typeof list&&list.indexOf(",")>-1)this._list=list.split(/\s*,\s*/);else if((list=$(list))&&list.children){var items=[];slice.apply(list.children).forEach(function(el){if(!el.disabled){var text=el.textContent.trim(),value=el.value||text,label=el.label||text;""!==value&&items.push({label:label,value:value})}}),this._list=items}document.activeElement===this.input&&this.evaluate()},get selected(){return this.index>-1},get opened(){return this.isOpened},close:function(o){this.opened&&(this.ul.setAttribute("hidden",""),this.isOpened=!1,this.index=-1,$.fire(this.input,"awesomplete-close",o||{}))},open:function(){this.ul.removeAttribute("hidden"),this.isOpened=!0,this.autoFirst&&-1===this.index&&this.goto(0),$.fire(this.input,"awesomplete-open")},destroy:function(){$.unbind(this.input,this._events.input),$.unbind(this.input.form,this._events.form);var parentNode=this.container.parentNode;parentNode.insertBefore(this.input,this.container),parentNode.removeChild(this.container),this.input.removeAttribute("autocomplete"),this.input.removeAttribute("aria-autocomplete");var indexOfAwesomplete=_.all.indexOf(this);-1!==indexOfAwesomplete&&_.all.splice(indexOfAwesomplete,1)},next:function(){var count=this.ul.children.length;this.goto(this.index<count-1?this.index+1:count?0:-1)},previous:function(){var count=this.ul.children.length,pos=this.index-1;this.goto(this.selected&&-1!==pos?pos:count-1)},goto:function(i){var lis=this.ul.children;this.selected&&lis[this.index].setAttribute("aria-selected","false"),this.index=i,i>-1&&lis.length>0&&(lis[i].setAttribute("aria-selected","true"),this.status.textContent=lis[i].textContent,this.ul.scrollTop=lis[i].offsetTop-this.ul.clientHeight+lis[i].clientHeight,$.fire(this.input,"awesomplete-highlight",{text:this.suggestions[this.index]}))},select:function(selected,origin){if(selected?this.index=$.siblingIndex(selected):selected=this.ul.children[this.index],selected){var suggestion=this.suggestions[this.index];$.fire(this.input,"awesomplete-select",{text:suggestion,origin:origin||selected})&&(this.replace(suggestion),this.close({reason:"select"}),$.fire(this.input,"awesomplete-selectcomplete",{text:suggestion}))}},evaluate:function(){var me=this,value=this.input.value;value.length>=this.minChars&&this._list.length>0?(this.index=-1,this.ul.innerHTML="",this.suggestions=this._list.map(function(item){return new Suggestion(me.data(item,value))}).filter(function(item){return me.filter(item,value)}),!1!==this.sort&&(this.suggestions=this.suggestions.sort(this.sort)),this.suggestions=this.suggestions.slice(0,this.maxItems),this.suggestions.forEach(function(text){me.ul.appendChild(me.item(text,value))}),0===this.ul.children.length?this.close({reason:"nomatches"}):this.open()):this.close({reason:"nomatches"})}},_.all=[],_.FILTER_CONTAINS=function(text,input){return RegExp($.regExpEscape(input.trim()),"i").test(text)},_.FILTER_STARTSWITH=function(text,input){return RegExp("^"+$.regExpEscape(input.trim()),"i").test(text)},_.SORT_BYLENGTH=function(a,b){return a.length!==b.length?a.length-b.length:a<b?-1:1},_.ITEM=function(text,input){var html=""===input.trim()?text:text.replace(RegExp($.regExpEscape(input.trim()),"gi"),"<mark>$&</mark>");return $.create("li",{innerHTML:html,"aria-selected":"false"})},_.REPLACE=function(text){this.input.value=text.value},_.DATA=function(item){return item},Object.defineProperty(Suggestion.prototype=Object.create(String.prototype),"length",{get:function(){return this.label.length}}),Suggestion.prototype.toString=Suggestion.prototype.valueOf=function(){return""+this.label};var slice=Array.prototype.slice;$.create=function(tag,o){var element=document.createElement(tag);for(var i in o){var val=o[i];if("inside"===i)$(val).appendChild(element);else if("around"===i){var ref=$(val);ref.parentNode.insertBefore(element,ref),element.appendChild(ref)}else i in element?element[i]=val:element.setAttribute(i,val)}return element},$.bind=function(element,o){if(element)for(var event in o){var callback=o[event];event.split(/\s+/).forEach(function(event){element.addEventListener(event,callback)})}},$.unbind=function(element,o){if(element)for(var event in o){var callback=o[event];event.split(/\s+/).forEach(function(event){element.removeEventListener(event,callback)})}},$.fire=function(target,type,properties){var evt=document.createEvent("HTMLEvents");evt.initEvent(type,!0,!0);for(var j in properties)evt[j]=properties[j];return target.dispatchEvent(evt)},$.regExpEscape=function(s){return s.replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&")},$.siblingIndex=function(el){for(var i=0;el=el.previousElementSibling;i++);return i},"undefined"!=typeof Document&&("loading"!==document.readyState?init():document.addEventListener("DOMContentLoaded",init)),_.$=$,_.$$=$$,"undefined"!=typeof self&&(self.Awesomplete=_),"object"==typeof module&&module.exports&&(module.exports=_)}();