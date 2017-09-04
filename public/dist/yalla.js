!function(global){function isArray(value){return"[object Array]"===Object.prototype.toString.call(value)}function asyncFlush(){for(var i=0;i<asyncQueue.length;i++)asyncQueue[i][0](asyncQueue[i][1]);asyncQueue=[],asyncTimer=!1}function asyncCall(callback,arg){asyncQueue.push([callback,arg]),asyncTimer||(asyncTimer=!0,asyncSetTimer(asyncFlush,0))}function invokeResolver(resolver,promise){function rejectPromise(reason){reject(promise,reason)}try{resolver(function resolvePromise(value){resolve(promise,value)},rejectPromise)}catch(e){rejectPromise(e)}}function invokeCallback(subscriber){var owner=subscriber.owner,settled=owner.state_,value=owner.data_,callback=subscriber[settled],promise=subscriber.then;if("function"==typeof callback){settled=FULFILLED;try{value=callback(value)}catch(e){reject(promise,e)}}handleThenable(promise,value)||(settled===FULFILLED&&resolve(promise,value),settled===REJECTED&&reject(promise,value))}function handleThenable(promise,value){var resolved;try{if(promise===value)throw new TypeError("A promises callback cannot return that same promise.");if(value&&("function"==typeof value||"object"==typeof value)){var then=value.then;if("function"==typeof then)return then.call(value,function(val){resolved||(resolved=!0,value!==val?resolve(promise,val):fulfill(promise,val))},function(reason){resolved||(resolved=!0,reject(promise,reason))}),!0}}catch(e){return resolved||reject(promise,e),!0}return!1}function resolve(promise,value){promise!==value&&handleThenable(promise,value)||fulfill(promise,value)}function fulfill(promise,value){promise.state_===PENDING&&(promise.state_=SEALED,promise.data_=value,asyncCall(publishFulfillment,promise))}function reject(promise,reason){promise.state_===PENDING&&(promise.state_=SEALED,promise.data_=reason,asyncCall(publishRejection,promise))}function publish(promise){var callbacks=promise.then_;promise.then_=void 0;for(var i=0;i<callbacks.length;i++)invokeCallback(callbacks[i])}function publishFulfillment(promise){promise.state_=FULFILLED,publish(promise)}function publishRejection(promise){promise.state_=REJECTED,publish(promise)}function Promise(resolver){if("function"!=typeof resolver)throw new TypeError("Promise constructor takes a function argument");if(this instanceof Promise==0)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this.then_=[],invokeResolver(resolver,this)}var NativePromise=global.Promise,nativePromiseSupported=NativePromise&&"resolve"in NativePromise&&"reject"in NativePromise&&"all"in NativePromise&&"race"in NativePromise&&function(){var resolve;return new NativePromise(function(r){resolve=r}),"function"==typeof resolve}();"undefined"!=typeof exports&&exports?(exports.Promise=nativePromiseSupported?NativePromise:Promise,exports.Polyfill=Promise):"function"==typeof define&&define.amd?define(function(){return nativePromiseSupported?NativePromise:Promise}):nativePromiseSupported||(global.Promise=Promise);var asyncTimer,PENDING="pending",SEALED="sealed",FULFILLED="fulfilled",REJECTED="rejected",NOOP=function(){},asyncSetTimer="undefined"!=typeof setImmediate?setImmediate:setTimeout,asyncQueue=[];Promise.prototype={constructor:Promise,state_:PENDING,then_:null,data_:void 0,then:function(onFulfillment,onRejection){var subscriber={owner:this,then:new this.constructor(NOOP),fulfilled:onFulfillment,rejected:onRejection};return this.state_===FULFILLED||this.state_===REJECTED?asyncCall(invokeCallback,subscriber):this.then_.push(subscriber),subscriber.then},catch:function(onRejection){return this.then(null,onRejection)}},Promise.all=function(promises){var Class=this;if(!isArray(promises))throw new TypeError("You must pass an array to Promise.all().");return new Class(function(resolve,reject){for(var promise,results=[],remaining=0,i=0;i<promises.length;i++)(promise=promises[i])&&"function"==typeof promise.then?promise.then(function resolver(index){return remaining++,function(value){results[index]=value,--remaining||resolve(results)}}(i),reject):results[i]=promise;remaining||resolve(results)})},Promise.race=function(promises){var Class=this;if(!isArray(promises))throw new TypeError("You must pass an array to Promise.race().");return new Class(function(resolve,reject){for(var promise,i=0;i<promises.length;i++)(promise=promises[i])&&"function"==typeof promise.then?promise.then(resolve,reject):resolve(promise)})},Promise.resolve=function(value){var Class=this;return value&&"object"==typeof value&&value.constructor===Class?value:new Class(function(resolve){resolve(value)})},Promise.reject=function(reason){return new this(function(resolve,reject){reject(reason)})}}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this),[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach(function(item){item.hasOwnProperty("remove")||Object.defineProperty(item,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function remove(){this.parentNode.removeChild(this)}})}),function(global,factory){"object"==typeof exports&&"undefined"!=typeof module?factory(exports):"function"==typeof define&&define.amd?define(["exports"],factory):factory(global.IncrementalDOM={})}(this,function(exports){"use strict";function Blank(){}function NodeData(nodeName,key){this.attrs=createMap(),this.attrsArr=[],this.newAttrs=createMap(),this.staticsApplied=!1,this.key=key,this.keyMap=createMap(),this.keyMapValid=!0,this.focused=!1,this.nodeName=nodeName,this.text=null}function Context(){this.created=notifications.nodesCreated&&[],this.deleted=notifications.nodesDeleted&&[]}var hasOwnProperty=Object.prototype.hasOwnProperty;Blank.prototype=Object.create(null);var has=function(map,property){return hasOwnProperty.call(map,property)},createMap=function(){return new Blank},DATA_PROP="__incrementalDOMData",initData=function(node,nodeName,key){var data=new NodeData(nodeName,key);return node[DATA_PROP]=data,data},getData=function(node){return importNode(node),node[DATA_PROP]},importNode=function(node){if(!node[DATA_PROP]){var isElement=node instanceof Element,nodeName=isElement?node.localName:node.nodeName,key=isElement?node.getAttribute("key"):null,data=initData(node,nodeName,key);if(key&&(getData(node.parentNode).keyMap[key]=node),isElement)for(var attributes=node.attributes,attrs=data.attrs,newAttrs=data.newAttrs,attrsArr=data.attrsArr,i=0;i<attributes.length;i+=1){var attr=attributes[i],name=attr.name,value=attr.value;attrs[name]=value,newAttrs[name]=void 0,attrsArr.push(name),attrsArr.push(value)}for(var child=node.firstChild;child;child=child.nextSibling)importNode(child)}},getNamespaceForTag=function(tag,parent){return"svg"===tag?"http://www.w3.org/2000/svg":"foreignObject"===getData(parent).nodeName?null:parent.namespaceURI},createElement=function(doc,parent,tag,key){var namespace=getNamespaceForTag(tag,parent),el=void 0;return el=namespace?doc.createElementNS(namespace,tag):doc.createElement(tag),initData(el,tag,key),el},createText=function(doc){var node=doc.createTextNode("");return initData(node,"#text",null),node},notifications={nodesCreated:null,nodesDeleted:null};Context.prototype.markCreated=function(node){this.created&&this.created.push(node)},Context.prototype.markDeleted=function(node){this.deleted&&this.deleted.push(node)},Context.prototype.notifyChanges=function(){this.created&&this.created.length>0&&notifications.nodesCreated(this.created),this.deleted&&this.deleted.length>0&&notifications.nodesDeleted(this.deleted)};var isDocumentRoot=function(node){return node instanceof Document||node instanceof DocumentFragment},getAncestry=function(node,root){for(var ancestry=[],cur=node;cur!==root;)ancestry.push(cur),cur=cur.parentNode;return ancestry},getRoot=function(node){for(var cur=node,prev=cur;cur;)prev=cur,cur=cur.parentNode;return prev},getActiveElement=function(node){var root=getRoot(node);return isDocumentRoot(root)?root.activeElement:null},getFocusedPath=function(node,root){var activeElement=getActiveElement(node);return activeElement&&node.contains(activeElement)?getAncestry(activeElement,root):[]},moveBefore=function(parentNode,node,referenceNode){for(var insertReferenceNode=node.nextSibling,cur=referenceNode;cur!==node;){var next=cur.nextSibling;parentNode.insertBefore(cur,insertReferenceNode),cur=next}},context=null,currentNode=null,currentParent=null,doc=null,markFocused=function(focusPath,focused){for(var i=0;i<focusPath.length;i+=1)getData(focusPath[i]).focused=focused},patchFactory=function(run){return function(node,fn,data){var prevContext=context,prevDoc=doc,prevCurrentNode=currentNode,prevCurrentParent=currentParent;context=new Context,doc=node.ownerDocument,currentParent=node.parentNode;var focusPath=getFocusedPath(node,currentParent);markFocused(focusPath,!0);var retVal=run(node,fn,data);return markFocused(focusPath,!1),context.notifyChanges(),context=prevContext,doc=prevDoc,currentNode=prevCurrentNode,currentParent=prevCurrentParent,retVal}},patchInner=patchFactory(function(node,fn,data){return currentNode=node,enterNode(),fn(data),exitNode(),node}),patchOuter=patchFactory(function(node,fn,data){var startNode={nextSibling:node};return currentNode=startNode,fn(data),node!==currentNode&&node.parentNode&&removeChild(currentParent,node,getData(currentParent).keyMap),startNode===currentNode?null:currentNode}),matches=function(matchNode,nodeName,key){var data=getData(matchNode);return nodeName===data.nodeName&&key==data.key},alignWithDOM=function(nodeName,key){if(!currentNode||!matches(currentNode,nodeName,key)){var parentData=getData(currentParent),currentNodeData=currentNode&&getData(currentNode),keyMap=parentData.keyMap,node=void 0;if(key){var keyNode=keyMap[key];keyNode&&(matches(keyNode,nodeName,key)?node=keyNode:keyNode===currentNode?context.markDeleted(keyNode):removeChild(currentParent,keyNode,keyMap))}node||(node="#text"===nodeName?createText(doc):createElement(doc,currentParent,nodeName,key),key&&(keyMap[key]=node),context.markCreated(node)),getData(node).focused?moveBefore(currentParent,node,currentNode):currentNodeData&&currentNodeData.key&&!currentNodeData.focused?(currentParent.replaceChild(node,currentNode),parentData.keyMapValid=!1):currentParent.insertBefore(node,currentNode),currentNode=node}},removeChild=function(node,child,keyMap){node.removeChild(child),context.markDeleted(child);var key=getData(child).key;key&&delete keyMap[key]},clearUnvisitedDOM=function(){var node=currentParent,data=getData(node),keyMap=data.keyMap,keyMapValid=data.keyMapValid,child=node.lastChild,key=void 0;if(child!==currentNode||!keyMapValid){for(;child!==currentNode;)removeChild(node,child,keyMap),child=node.lastChild;if(!keyMapValid){for(key in keyMap)(child=keyMap[key]).parentNode!==node&&(context.markDeleted(child),delete keyMap[key]);data.keyMapValid=!0}}},enterNode=function(){currentParent=currentNode,currentNode=null},getNextNode=function(){return currentNode?currentNode.nextSibling:currentParent.firstChild},nextNode=function(){currentNode=getNextNode()},exitNode=function(){clearUnvisitedDOM(),currentNode=currentParent,currentParent=currentParent.parentNode},coreElementOpen=function(tag,key){return nextNode(),alignWithDOM(tag,key),enterNode(),currentParent},coreElementClose=function(){return exitNode(),currentNode},coreText=function(){return nextNode(),alignWithDOM("#text",null),currentNode},skipNode=nextNode,symbols={default:"__default"},getNamespace=function(name){return 0===name.lastIndexOf("xml:",0)?"http://www.w3.org/XML/1998/namespace":0===name.lastIndexOf("xlink:",0)?"http://www.w3.org/1999/xlink":void 0},applyAttr=function(el,name,value){if(null==value)el.removeAttribute(name);else{var attrNS=getNamespace(name);attrNS?el.setAttributeNS(attrNS,name,value):el.setAttribute(name,value)}},applyProp=function(el,name,value){el[name]=value},setStyleValue=function(style,prop,value){prop.indexOf("-")>=0?style.setProperty(prop,value):style[prop]=value},updateAttribute=function(el,name,value){var attrs=getData(el).attrs;attrs[name]!==value&&((attributes[name]||attributes[symbols.default])(el,name,value),attrs[name]=value)},attributes=createMap();attributes[symbols.default]=function(el,name,value){var type=typeof value;"object"===type||"function"===type?applyProp(el,name,value):applyAttr(el,name,value)},attributes.style=function(el,name,style){if("string"==typeof style)el.style.cssText=style;else{el.style.cssText="";var elStyle=el.style,obj=style;for(var prop in obj)has(obj,prop)&&setStyleValue(elStyle,prop,obj[prop])}};var argsBuilder=[],elementOpen=function(tag,key,statics){var node=coreElementOpen(tag,key),data=getData(node);if(!data.staticsApplied){if(statics)for(var _i=0;_i<statics.length;_i+=2){var name=statics[_i],value=statics[_i+1];updateAttribute(node,name,value)}data.staticsApplied=!0}for(var attrsArr=data.attrsArr,newAttrs=data.newAttrs,isNew=!attrsArr.length,i=3,j=0;i<arguments.length;i+=2,j+=2){var _attr=arguments[i];if(isNew)attrsArr[j]=_attr,newAttrs[_attr]=void 0;else if(attrsArr[j]!==_attr)break;value=arguments[i+1],(isNew||attrsArr[j+1]!==value)&&(attrsArr[j+1]=value,updateAttribute(node,_attr,value))}if(i<arguments.length||j<attrsArr.length){for(;i<arguments.length;i+=1,j+=1)attrsArr[j]=arguments[i];for(j<attrsArr.length&&(attrsArr.length=j),i=0;i<attrsArr.length;i+=2){var name=attrsArr[i],value=attrsArr[i+1];newAttrs[name]=value}for(var _attr2 in newAttrs)updateAttribute(node,_attr2,newAttrs[_attr2]),newAttrs[_attr2]=void 0}return node},elementClose=function(){return coreElementClose()};exports.patch=patchInner,exports.patchInner=patchInner,exports.patchOuter=patchOuter,exports.currentElement=function(){return currentParent},exports.currentPointer=function(){return getNextNode()},exports.skip=function(){currentNode=currentParent.lastChild},exports.skipNode=skipNode,exports.elementVoid=function(){return elementOpen.apply(null,arguments),elementClose()},exports.elementOpenStart=function(tag,key,statics){argsBuilder[0]=tag,argsBuilder[1]=key,argsBuilder[2]=statics},exports.elementOpenEnd=function(){var node=elementOpen.apply(null,argsBuilder);return argsBuilder.length=0,node},exports.elementOpen=elementOpen,exports.elementClose=elementClose,exports.text=function(value){var node=coreText(),data=getData(node);if(data.text!==value){data.text=value;for(var formatted=value,i=1;i<arguments.length;i+=1)formatted=(0,arguments[i])(formatted);node.data=formatted}return node},exports.attr=function(name,value){argsBuilder.push(name),argsBuilder.push(value)},exports.symbols=symbols,exports.attributes=attributes,exports.applyAttr=applyAttr,exports.applyProp=applyProp,exports.notifications=notifications,exports.importNode=importNode});var yalla=function(){"use strict";function showErrorInBrowser(message){var errorDiv=document.createElement("div");errorDiv.style="background:#000;color: red;padding:10px;position:fixed;bottom:0px;right:0px;left:0px;z-index:10000;";var deleteButton=document.createElement("button");deleteButton.innerText="OK",deleteButton.style="float:right;background-color: #4CAF50; /* Green */ border: none; padding:5px; color: white; text-align: center; text-decoration: none; display: inline-block; font-size: 12px;",deleteButton.onclick=function(event){event.target.parentNode.remove()};var messageDiv=document.createElement("div");messageDiv.innerText=message,messageDiv.style="font-size:20px",errorDiv.appendChild(deleteButton),errorDiv.appendChild(messageDiv),document.body.appendChild(errorDiv)}function refsRegistered(refName,component){for(var i=0;i<framework.refs.length;i++){var refInfo=framework.refs[i];if(refInfo.name==refName&&refInfo.component==component)return!0}return!1}function unregisterRef(refName,component){for(var index=-1,i=0;i<framework.refs.length;i++){var refInfo=framework.refs[i];refInfo.name==refName&&refInfo.component==component&&(index=i)}index>=0&&framework.refs.splice(index,1)}function patchGlobal(){var address=[framework.defaultComponent],addressString="";""!=window.location.hash?addressString=window.location.hash.substring(1,window.location.hash.length):0==window.location.search.indexOf("?_escaped_fragment_=")&&(addressString=decodeURIComponent(window.location.search.substring("?_escaped_fragment_=".length,window.location.search.length))),addressString&&addressString.length>0&&(address=addressString.split("/").map(function(addr){return addr&&0==addr.indexOf("!")&&addr.length>1&&(addr=addr.substring(1,addr.length)),addr}).filter(function(addr){return!!(addr&&addr.length>0&&addr.indexOf("!")<0)}));var componentAndParams=address.map(function(pathQuery){var valParams=pathQuery.split(":"),path=valParams[0].replace(/\./g,"/");return valParams.splice(0,1),{componentPath:path,params:valParams.reduce(function(current,param){var parVal=param.split("=");return current[parVal[0]]=parVal[1],current},{})}}),addressToChain=componentAndParams.map(function(item){return item.componentPath});framework.renderChain(addressToChain).then(function(){var render=componentAndParams.reduceRight(function(slotView,compAndParam){var component=compAndParam,path=framework.composePathFromBase(component.componentPath),comp=yalla.components[path];return function(slotName){!comp||void 0!=slotName&&"default"!=slotName||comp.render(component.params,slotView)}},function(){});IncrementalDOM.patch(document.querySelector(framework.domTarget),function(){render()})}).catch(function(err){log.error(err.stack)})}function lengthableObjectToArray(object){var result=[];if(object&&object.length>0)for(var i=0;i<object.length;i++){var item=object[i];result.push(item)}return result}var yalla={utils:{},framework:{},log:{},components:{}},log=yalla.log;log.debug=function(){},log.info=function(){},log.error=function(message){showErrorInBrowser(message)};var utils=yalla.utils;utils.nonEmptyArray=function(array){return Array.isArray(array)&&array.length>0},utils.firstItemInArray=function(array){return!!utils.nonEmptyArray(array)&&array[0]},utils.argumentsToArray=function(array){for(var result=[],arg=0;arg<array.length;++arg){var item=array[arg];result.push(item)}return result},utils.assertNotNull=function(){for(var i=0;i<arguments.length;i++)if(null==arguments[i]||void 0==arguments[i])return!1;return!0},utils.merge=function(objectOne,objectTwo){var result={};for(var prop in objectOne)objectOne.hasOwnProperty(prop)&&(result[prop]=objectOne[prop]);for(var prop in objectTwo)objectTwo.hasOwnProperty(prop)&&(result[prop]=objectTwo[prop]);return result},utils.dateFormat=function formatDate(date,format,utc){function ii(i,len){var s=i+"";for(len=len||2;s.length<len;)s="0"+s;return s}var MMMM=["\0","January","February","March","April","May","June","July","August","September","October","November","December"],MMM=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dddd=["","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ddd=["","Sun","Mon","Tue","Wed","Thu","Fri","Sat"],y=utc?date.getUTCFullYear():date.getFullYear();format=(format=(format=format.replace(/(^|[^\\])yyyy+/g,"$1"+y)).replace(/(^|[^\\])yy/g,"$1"+y.toString().substr(2,2))).replace(/(^|[^\\])y/g,"$1"+y);var M=(utc?date.getUTCMonth():date.getMonth())+1;format=(format=(format=(format=format.replace(/(^|[^\\])MMMM+/g,"$1"+MMMM[0])).replace(/(^|[^\\])MMM/g,"$1"+MMM[0])).replace(/(^|[^\\])MM/g,"$1"+ii(M))).replace(/(^|[^\\])M/g,"$1"+M);var d=utc?date.getUTCDate():date.getDate();format=(format=(format=(format=format.replace(/(^|[^\\])dddd+/g,"$1"+dddd[0])).replace(/(^|[^\\])ddd/g,"$1"+ddd[0])).replace(/(^|[^\\])dd/g,"$1"+ii(d))).replace(/(^|[^\\])d/g,"$1"+d);var H=utc?date.getUTCHours():date.getHours();format=(format=format.replace(/(^|[^\\])HH+/g,"$1"+ii(H))).replace(/(^|[^\\])H/g,"$1"+H);var h=H>12?H-12:0==H?12:H;format=(format=format.replace(/(^|[^\\])hh+/g,"$1"+ii(h))).replace(/(^|[^\\])h/g,"$1"+h);var m=utc?date.getUTCMinutes():date.getMinutes();format=(format=format.replace(/(^|[^\\])mm+/g,"$1"+ii(m))).replace(/(^|[^\\])m/g,"$1"+m);var s=utc?date.getUTCSeconds():date.getSeconds();format=(format=format.replace(/(^|[^\\])ss+/g,"$1"+ii(s))).replace(/(^|[^\\])s/g,"$1"+s);var f=utc?date.getUTCMilliseconds():date.getMilliseconds();format=format.replace(/(^|[^\\])fff+/g,"$1"+ii(f,3)),f=Math.round(f/10),format=format.replace(/(^|[^\\])ff/g,"$1"+ii(f)),f=Math.round(f/10),format=format.replace(/(^|[^\\])f/g,"$1"+f);var T=H<12?"AM":"PM";format=(format=format.replace(/(^|[^\\])TT+/g,"$1"+T)).replace(/(^|[^\\])T/g,"$1"+T.charAt(0));var t=T.toLowerCase();format=(format=format.replace(/(^|[^\\])tt+/g,"$1"+t)).replace(/(^|[^\\])t/g,"$1"+t.charAt(0));var tz=-date.getTimezoneOffset(),K=utc||!tz?"Z":tz>0?"+":"-";if(!utc){var tzMin=(tz=Math.abs(tz))%60;K+=ii(Math.floor(tz/60))+":"+ii(tzMin)}format=format.replace(/(^|[^\\])K/g,"$1"+K);var day=(utc?date.getUTCDay():date.getDay())+1;return format=format.replace(new RegExp(dddd[0],"g"),dddd[day]),format=format.replace(new RegExp(ddd[0],"g"),ddd[day]),format=format.replace(new RegExp(MMMM[0],"g"),MMMM[M]),format=format.replace(new RegExp(MMM[0],"g"),MMM[M]),format=format.replace(/\\(.)/g,"$1")},utils.fetch=function(url,postData){function createXMLHTTPObject(){for(var xmlhttp=!1,i=0;i<XMLHttpFactories.length;i++){try{xmlhttp=XMLHttpFactories[i]()}catch(e){continue}break}return xmlhttp}var XMLHttpFactories=[function(){return new XMLHttpRequest},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml3.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")}];return new Promise(function(resolve,reject){var req=createXMLHTTPObject();if(req.timeout=2e3,req){var method=postData?"POST":"GET";req.open(method,url,!0),postData&&req.setRequestHeader("Content-type","application/json"),req.ontimeout=function(){reject(req)},req.onreadystatechange=function(){4==req.readyState&&(200==req.status||304==req.status?resolve(req):reject(req))},4!=req.readyState&&req.send(JSON.stringify(postData))}})};var framework=yalla.framework;framework.filePrefix=".js",framework.base="src",framework.componentLoadListener={},framework.refs=[],framework.createInjector=function(componentPath){var relativePath=componentPath.substring(0,componentPath.lastIndexOf("/"));return function Injector(inject){var path=relativePath+"/"+inject;return"/"==inject.charAt(0)&&(path=framework.composePathFromBase(inject)),yalla.components[path]}},framework.addComponent=function(name,component){yalla.components[name]=component;var path=name+framework.filePrefix;path in framework.componentLoadListener&&framework.componentLoadListener[path].call()},framework.attachScriptToDocument=function(url){return url.substring(0,url.length-".js".length)in yalla.components?Promise.resolve(!0):url in framework.componentLoadListener?Promise.resolve(!0):new Promise(function(resolve){var s=document.createElement("script");s.setAttribute("src","."+url),document.head.appendChild(s),framework.componentLoadListener[url]=function(){resolve(url),delete framework.componentLoadListener[url]}})},framework.composePathFromBase=function(component){var fromRoot="/"==component.charAt(0);return"/"+framework.base+(fromRoot?"":"/")+component},framework.loadScriptAndDependency=function(component){if(component.indexOf(".")>0)return log.error("Invalid dependency : "+component),Promise.reject();var componentPath=framework.composePathFromBase(component);if(componentPath in yalla.components)return Promise.resolve(!0);var url=componentPath+framework.filePrefix;return component.substring(0,component.lastIndexOf("/")+1),new Promise(function(resolve){utils.fetch("."+url).then(function(req){var injects=(req.responseText.match(/\$inject\(.*?\)/g)||[]).map(function(inject){return inject.substring('$inject("'.length,inject.length-2)});if(utils.nonEmptyArray(injects)){var injectsPromise=injects.map(function(inject){return"/"!=inject.charAt(0)&&(inject="/"+inject),framework.loadScriptAndDependency(inject)});Promise.all(injectsPromise).then(function(){framework.attachScriptToDocument(url).then(function(){resolve(url)})})}else framework.attachScriptToDocument(url).then(function(){resolve(url)})},function(){log.error("Unable to fetch "+url)})})},framework.getParentComponent=function(node){var _node=node;do{if("element"in _node.attributes||"BODY"==_node.nodeName)return _node;_node=_node.parentNode}while(_node);return null},framework.validComponentName=function(component,componentName){return component._state&&component._state._name==componentName},framework.renderChain=function(address){return address.reduceRight(function(current,path){return current.then(function(){return new Promise(function(resolve){framework.loadScriptAndDependency(path).then(function(){resolve(!0)})})})},Promise.resolve(!1))},framework.propertyCheckChanges=function(oldProperties,newProperties,onPropertyChange){if(null!=oldProperties&&null!=newProperties&&null!=onPropertyChange){var result={},comparedProps=[];for(var prop in oldProperties)if(comparedProps.push(prop),oldProperties.hasOwnProperty(prop)){if("function"==typeof oldProperties[prop])continue;newProperties.hasOwnProperty(prop)?result[prop]={leftValue:oldProperties[prop],rightValue:newProperties[prop]}:result[prop]={leftValue:oldProperties[prop],rightValue:null}}for(var prop in newProperties)if(newProperties.hasOwnProperty(prop)&&comparedProps.indexOf(prop)<0){if("function"==typeof newProperties[prop])continue;result[prop]={leftValue:null,rightValue:newProperties[prop]}}var propertyChangesEvent={};for(var prop in result)if(result[prop].leftValue!==result[prop].rightValue){var operation="";operation=null==result[prop].leftValue?"add":null==result[prop].rightValue?"remove":"change",propertyChangesEvent[prop]={type:operation,oldValue:result[prop].leftValue,newValue:result[prop].rightValue},propertyChangesEvent.hasValue=!0}propertyChangesEvent.hasValue&&(delete propertyChangesEvent.hasValue,onPropertyChange(propertyChangesEvent))}},framework.registerRef=function(refName,component,renderFunction){return component._refName=refName,refsRegistered(refName,component)||framework.refs.push({name:refName,component:component,render:renderFunction}),renderFunction},framework.start=function(){var scripts=document.querySelector("script[src$='yalla.js']")||[];if(!utils.assertNotNull(scripts.attributes["yalla-component"],scripts.attributes["yalla-base"],scripts.attributes["yalla-domtarget"]))throw new Error("script tag should contain attributes 'yalla-component', 'yalla-base' and 'yalla-domtarget'");var component=scripts.attributes["yalla-component"].nodeValue,base=scripts.attributes["yalla-base"].nodeValue,domTarget=scripts.attributes["yalla-domtarget"].nodeValue,routingCallback=!!scripts.attributes["yalla-routing"]&&scripts.attributes["yalla-routing"].nodeValue;framework.base=base,framework.domTarget=domTarget,framework.defaultComponent=component,framework.beforeRenderToScreen=function(){return new Promise(function(resolve){if(routingCallback&&"function"==typeof window[routingCallback]){var path=window.location.hash;window[routingCallback](path).then(function(newPath){newPath&&newPath!=path?(resolve(!1),log.info("Re-routing path to new location"),window.location.hash=newPath):resolve(!0)})}else resolve(!0)})},framework.renderToScreen()},framework.renderToScreen=function(){var args=arguments;framework.beforeRenderToScreen().then(function(ok){ok&&(0==args.length?patchGlobal():2==args.length&&"function"==typeof args[1]?IncrementalDOM.patch(args[0],args[1]):args.length>0&&lengthableObjectToArray(args).forEach(function(refName){yalla.framework.refs.filter(function(refInfo){return refInfo.name===refName}).forEach(function(refInfo){IncrementalDOM.patch(refInfo.component,function(){refInfo.render()})})}))})},framework.beforeRenderToScreen=function(){return Promise.resolve(!0)};var attributes=IncrementalDOM.attributes;return["checked","selected","disabled","readonly","required","multiple","ismap"].forEach(function(key){attributes[key]=function(element,name,value){value?element.setAttribute(key,!0):element.removeAttribute(key)}}),attributes.value=function(element,name,value){element.value=value},IncrementalDOM.notifications.nodesCreated=function(nodes){nodes.forEach(function(node){node.oncreated&&node.oncreated.call(node,{target:node,currentTarget:node})})},IncrementalDOM.notifications.nodesDeleted=function(nodes){nodes.forEach(function(node){node._refName&&unregisterRef(node._refName,node),node.ondeleted&&node.ondeleted.call(node,{target:node,currentTarget:node})})},yalla}();window.onload=function(){yalla.framework.start()},"onhashchange"in window?window.onhashchange=function(){window.location.reload()}:alert("Browser not supported");