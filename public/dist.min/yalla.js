!function(e){function t(e){return"[object Array]"===Object.prototype.toString.call(e)}function n(){for(var e=0;e<T.length;e++)T[e][0](T[e][1]);T=[],g=!1}function r(e,t){T.push([e,t]),g||(g=!0,M(n,0))}function o(e,t){function n(e){c(t,e)}function r(e){l(t,e)}try{e(n,r)}catch(e){r(e)}}function a(e){var t=e.owner,n=t.state_,r=t.data_,o=e[n],a=e.then;if("function"==typeof o){n=w;try{r=o(r)}catch(e){l(a,e)}}i(a,r)||(n===w&&c(a,r),n===b&&l(a,r))}function i(e,t){var n;try{if(e===t)throw new TypeError("A promises callback cannot return that same promise.");if(t&&("function"==typeof t||"object"==typeof t)){var r=t.then;if("function"==typeof r)return r.call(t,function(r){n||(n=!0,t!==r?c(e,r):u(e,r))},function(t){n||(n=!0,l(e,t))}),!0}}catch(t){return n||l(e,t),!0}return!1}function c(e,t){e!==t&&i(e,t)||u(e,t)}function u(e,t){e.state_===v&&(e.state_=y,e.data_=t,r(s,e))}function l(e,t){e.state_===v&&(e.state_=y,e.data_=t,r(d,e))}function f(e){var t=e.then_;e.then_=void 0;for(var n=0;n<t.length;n++)a(t[n])}function s(e){e.state_=w,f(e)}function d(e){e.state_=b,f(e)}function p(e){if("function"!=typeof e)throw new TypeError("Promise constructor takes a function argument");if(this instanceof p==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this.then_=[],o(e,this)}var h=e.Promise,m=h&&"resolve"in h&&"reject"in h&&"all"in h&&"race"in h&&function(){var e;return new h(function(t){e=t}),"function"==typeof e}();"undefined"!=typeof exports&&exports?(exports.Promise=m?h:p,exports.Polyfill=p):"function"==typeof define&&define.amd?define(function(){return m?h:p}):m||(e.Promise=p);var g,v="pending",y="sealed",w="fulfilled",b="rejected",x=function(){},M="undefined"!=typeof setImmediate?setImmediate:setTimeout,T=[];p.prototype={constructor:p,state_:v,then_:null,data_:void 0,then:function(e,t){var n={owner:this,then:new this.constructor(x),fulfilled:e,rejected:t};return this.state_===w||this.state_===b?r(a,n):this.then_.push(n),n.then},catch:function(e){return this.then(null,e)}},p.all=function(e){var n=this;if(!t(e))throw new TypeError("You must pass an array to Promise.all().");return new n(function(t,n){function r(e){return i++,function(n){a[e]=n,--i||t(a)}}for(var o,a=[],i=0,c=0;c<e.length;c++)o=e[c],o&&"function"==typeof o.then?o.then(r(c),n):a[c]=o;i||t(a)})},p.race=function(e){var n=this;if(!t(e))throw new TypeError("You must pass an array to Promise.race().");return new n(function(t,n){for(var r,o=0;o<e.length;o++)r=e[o],r&&"function"==typeof r.then?r.then(t,n):t(r)})},p.resolve=function(e){var t=this;return e&&"object"==typeof e&&e.constructor===t?e:new t(function(t){t(e)})},p.reject=function(e){var t=this;return new t(function(t,n){n(e)})}}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this),function(e){e.forEach(function(e){e.hasOwnProperty("remove")||Object.defineProperty(e,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})}([Element.prototype,CharacterData.prototype,DocumentType.prototype]),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.IncrementalDOM={})}(this,function(e){"use strict";function t(){}function n(e,t){this.attrs=i(),this.attrsArr=[],this.newAttrs=i(),this.staticsApplied=!1,this.key=t,this.keyMap=i(),this.keyMapValid=!0,this.focused=!1,this.nodeName=e,this.text=null}function r(){this.created=h.nodesCreated&&[],this.deleted=h.nodesDeleted&&[]}var o=Object.prototype.hasOwnProperty;t.prototype=Object.create(null);var a=function(e,t){return o.call(e,t)},i=function(){return new t},c="__incrementalDOMData",u=function(e,t,r){var o=new n(t,r);return e[c]=o,o},l=function(e){return f(e),e[c]},f=function(e){if(!e[c]){var t=e instanceof Element,n=t?e.localName:e.nodeName,r=t?e.getAttribute("key"):null,o=u(e,n,r);if(r&&(l(e.parentNode).keyMap[r]=e),t)for(var a=e.attributes,i=o.attrs,s=o.newAttrs,d=o.attrsArr,p=0;p<a.length;p+=1){var h=a[p],m=h.name,g=h.value;i[m]=g,s[m]=void 0,d.push(m),d.push(g)}for(var v=e.firstChild;v;v=v.nextSibling)f(v)}},s=function(e,t){return"svg"===e?"http://www.w3.org/2000/svg":"foreignObject"===l(t).nodeName?null:t.namespaceURI},d=function(e,t,n,r){var o=s(n,t),a=void 0;return a=o?e.createElementNS(o,n):e.createElement(n),u(a,n,r),a},p=function(e){var t=e.createTextNode("");return u(t,"#text",null),t},h={nodesCreated:null,nodesDeleted:null};r.prototype.markCreated=function(e){this.created&&this.created.push(e)},r.prototype.markDeleted=function(e){this.deleted&&this.deleted.push(e)},r.prototype.notifyChanges=function(){this.created&&this.created.length>0&&h.nodesCreated(this.created),this.deleted&&this.deleted.length>0&&h.nodesDeleted(this.deleted)};var m=function(e){return e instanceof Document||e instanceof DocumentFragment},g=function(e,t){for(var n=[],r=e;r!==t;)n.push(r),r=r.parentNode;return n},v=function(e){for(var t=e,n=t;t;)n=t,t=t.parentNode;return n},y=function(e){var t=v(e);return m(t)?t.activeElement:null},w=function(e,t){var n=y(e);return n&&e.contains(n)?g(n,t):[]},b=function(e,t,n){for(var r=t.nextSibling,o=n;o!==t;){var a=o.nextSibling;e.insertBefore(o,r),o=a}},x=null,M=null,T=null,P=null,O=function(e,t){for(var n=0;n<e.length;n+=1)l(e[n]).focused=t},A=function(e){var t=function(t,n,o){var a=x,i=P,c=M,u=T;x=new r,P=t.ownerDocument,T=t.parentNode;var l=w(t,T);O(l,!0);var f=e(t,n,o);return O(l,!1),x.notifyChanges(),x=a,P=i,M=c,T=u,f};return t},C=A(function(e,t,n){return M=e,E(),t(n),V(),e}),k=A(function(e,t,n){var r={nextSibling:e};return M=r,t(n),e!==M&&e.parentNode&&N(T,e,l(T).keyMap),r===M?null:M}),D=function(e,t,n){var r=l(e);return t===r.nodeName&&n==r.key},S=function(e,t){if(!M||!D(M,e,t)){var n=l(T),r=M&&l(M),o=n.keyMap,a=void 0;if(t){var i=o[t];i&&(D(i,e,t)?a=i:i===M?x.markDeleted(i):N(T,i,o))}a||(a="#text"===e?p(P):d(P,T,e,t),t&&(o[t]=a),x.markCreated(a)),l(a).focused?b(T,a,M):r&&r.key&&!r.focused?(T.replaceChild(a,M),n.keyMapValid=!1):T.insertBefore(a,M),M=a}},N=function(e,t,n){e.removeChild(t),x.markDeleted(t);var r=l(t).key;r&&delete n[r]},_=function(){var e=T,t=l(e),n=t.keyMap,r=t.keyMapValid,o=e.lastChild,a=void 0;if(o!==M||!r){for(;o!==M;)N(e,o,n),o=e.lastChild;if(!r){for(a in n)o=n[a],o.parentNode!==e&&(x.markDeleted(o),delete n[a]);t.keyMapValid=!0}}},E=function(){T=M,M=null},$=function(){return M?M.nextSibling:T.firstChild},j=function(){M=$()},V=function(){_(),M=T,T=T.parentNode},I=function(e,t){return j(),S(e,t),E(),T},L=function(){return V(),M},R=function(){return j(),S("#text",null),M},F=function(){return T},U=function(){return $()},H=function(){M=T.lastChild},B=j,X={default:"__default"},z=function(e){return 0===e.lastIndexOf("xml:",0)?"http://www.w3.org/XML/1998/namespace":0===e.lastIndexOf("xlink:",0)?"http://www.w3.org/1999/xlink":void 0},J=function(e,t,n){if(null==n)e.removeAttribute(t);else{var r=z(t);r?e.setAttributeNS(r,t,n):e.setAttribute(t,n)}},q=function(e,t,n){e[t]=n},Y=function(e,t,n){t.indexOf("-")>=0?e.setProperty(t,n):e[t]=n},G=function(e,t,n){if("string"==typeof n)e.style.cssText=n;else{e.style.cssText="";var r=e.style,o=n;for(var i in o)a(o,i)&&Y(r,i,o[i])}},K=function(e,t,n){var r=typeof n;"object"===r||"function"===r?q(e,t,n):J(e,t,n)},W=function(e,t,n){var r=l(e),o=r.attrs;if(o[t]!==n){var a=Z[t]||Z[X.default];a(e,t,n),o[t]=n}},Z=i();Z[X.default]=K,Z.style=G;var Q=3,ee=[],te=function(e,t,n,r){var o=I(e,t),a=l(o);if(!a.staticsApplied){if(n)for(var i=0;i<n.length;i+=2){var c=n[i],u=n[i+1];W(o,c,u)}a.staticsApplied=!0}for(var f=a.attrsArr,s=a.newAttrs,d=!f.length,p=Q,h=0;p<arguments.length;p+=2,h+=2){var m=arguments[p];if(d)f[h]=m,s[m]=void 0;else if(f[h]!==m)break;var u=arguments[p+1];(d||f[h+1]!==u)&&(f[h+1]=u,W(o,m,u))}if(p<arguments.length||h<f.length){for(;p<arguments.length;p+=1,h+=1)f[h]=arguments[p];for(h<f.length&&(f.length=h),p=0;p<f.length;p+=2){var c=f[p],u=f[p+1];s[c]=u}for(var g in s)W(o,g,s[g]),s[g]=void 0}return o},ne=function(e,t,n){ee[0]=e,ee[1]=t,ee[2]=n},re=function(e,t){ee.push(e),ee.push(t)},oe=function(){var e=te.apply(null,ee);return ee.length=0,e},ae=function(e){var t=L();return t},ie=function(e,t,n,r){return te.apply(null,arguments),ae(e)},ce=function(e,t){var n=R(),r=l(n);if(r.text!==e){r.text=e;for(var o=e,a=1;a<arguments.length;a+=1){var i=arguments[a];o=i(o)}n.data=o}return n};e.patch=C,e.patchInner=C,e.patchOuter=k,e.currentElement=F,e.currentPointer=U,e.skip=H,e.skipNode=B,e.elementVoid=ie,e.elementOpenStart=ne,e.elementOpenEnd=oe,e.elementOpen=te,e.elementClose=ae,e.text=ce,e.attr=re,e.symbols=X,e.attributes=Z,e.applyAttr=J,e.applyProp=q,e.notifications=h,e.importNode=f});var yalla=function(){"use strict";function e(e){var t=document.createElement("div");t.style="background:#000;color: red;padding:10px;position:fixed;bottom:0px;right:0px;left:0px;z-index:10000;";var n=document.createElement("button");n.innerText="OK",n.style="float:right;background-color: #4CAF50; /* Green */ border: none; padding:5px; color: white; text-align: center; text-decoration: none; display: inline-block; font-size: 12px;",n.onclick=function(e){e.target.parentNode.remove()};var r=document.createElement("div");r.innerText=e,r.style="font-size:20px",t.appendChild(n),t.appendChild(r),document.body.appendChild(t)}function t(e,t){for(var n=0;n<u.refs.length;n++){var r=u.refs[n];if(r.name==e&&r.component==t)return!0}return!1}function n(e,t){for(var n=-1,r=0;r<u.refs.length;r++){var o=u.refs[r];o.name==e&&o.component==t&&(n=r)}n>=0&&(u.refs.splice(n,1),console.log("unregistered component"))}function r(){var e=[u.defaultComponent],t="",n="?_escaped_fragment_=";""!=window.location.hash?t=window.location.hash.substring(1,window.location.hash.length):0==window.location.search.indexOf(n)&&(t=decodeURIComponent(window.location.search.substring(n.length,window.location.search.length))),t&&t.length>0&&(e=t.split("/").map(function(e){return e&&0==e.indexOf("!")&&e.length>1&&(e=e.substring(1,e.length)),e}).filter(function(e){return!!(e&&e.length>0&&e.indexOf("!")<0)}));var r=e.map(function(e){var t=e.split(":"),n=t[0].replace(/\./g,"/");t.splice(0,1);var r=t.reduce(function(e,t){var n=t.split("=");return e[n[0]]=n[1],e},{});return{componentPath:n,params:r}}),o=r.map(function(e){return e.componentPath});u.renderChain(o).then(function(){var e=r.reduceRight(function(e,t){var n=t,r=u.composePathFromBase(n.componentPath),o=a.components[r];return function(t){!o||void 0!=t&&"default"!=t||o.render(n.params,e)}},function(){});IncrementalDOM.patch(document.querySelector(u.domTarget),function(){e()})}).catch(function(e){i.error(e.stack)})}function o(e){var t=[];if(e&&e.length>0)for(var n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}var a={utils:{},framework:{},log:{},components:{}},i=a.log;i.debug=function(e){console.log("%c"+e,"font-size:0.9em;color:#999999;font-family=verdana")},i.info=function(e){console.log("%c"+e,"font-size:1.2em;color:#666666;font-family=verdana")},i.error=function(t){console.log("%c"+t,"font-size:1.2em;color:red;font-family=verdana"),e(t)};var c=a.utils;c.nonEmptyArray=function(e){return Array.isArray(e)&&e.length>0},c.firstItemInArray=function(e){return!!c.nonEmptyArray(e)&&e[0]},c.argumentsToArray=function(e){for(var t=[],n=0;n<e.length;++n){var r=e[n];t.push(r)}return t},c.assertNotNull=function(){for(var e=0;e<arguments.length;e++)if(null==arguments[e]||void 0==arguments[e])return!1;return!0},c.merge=function(e,t){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=e[r]);for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r]);return n},c.dateFormat=function(e,t,n){function r(e,t){var n=e+"";for(t=t||2;n.length<t;)n="0"+n;return n}var o=["\0","January","February","March","April","May","June","July","August","September","October","November","December"],a=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],i=["","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],c=["","Sun","Mon","Tue","Wed","Thu","Fri","Sat"],u=n?e.getUTCFullYear():e.getFullYear();t=t.replace(/(^|[^\\])yyyy+/g,"$1"+u),t=t.replace(/(^|[^\\])yy/g,"$1"+u.toString().substr(2,2)),t=t.replace(/(^|[^\\])y/g,"$1"+u);var l=(n?e.getUTCMonth():e.getMonth())+1;t=t.replace(/(^|[^\\])MMMM+/g,"$1"+o[0]),t=t.replace(/(^|[^\\])MMM/g,"$1"+a[0]),t=t.replace(/(^|[^\\])MM/g,"$1"+r(l)),t=t.replace(/(^|[^\\])M/g,"$1"+l);var f=n?e.getUTCDate():e.getDate();t=t.replace(/(^|[^\\])dddd+/g,"$1"+i[0]),t=t.replace(/(^|[^\\])ddd/g,"$1"+c[0]),t=t.replace(/(^|[^\\])dd/g,"$1"+r(f)),t=t.replace(/(^|[^\\])d/g,"$1"+f);var s=n?e.getUTCHours():e.getHours();t=t.replace(/(^|[^\\])HH+/g,"$1"+r(s)),t=t.replace(/(^|[^\\])H/g,"$1"+s);var d=s>12?s-12:0==s?12:s;t=t.replace(/(^|[^\\])hh+/g,"$1"+r(d)),t=t.replace(/(^|[^\\])h/g,"$1"+d);var p=n?e.getUTCMinutes():e.getMinutes();t=t.replace(/(^|[^\\])mm+/g,"$1"+r(p)),t=t.replace(/(^|[^\\])m/g,"$1"+p);var h=n?e.getUTCSeconds():e.getSeconds();t=t.replace(/(^|[^\\])ss+/g,"$1"+r(h)),t=t.replace(/(^|[^\\])s/g,"$1"+h);var m=n?e.getUTCMilliseconds():e.getMilliseconds();t=t.replace(/(^|[^\\])fff+/g,"$1"+r(m,3)),m=Math.round(m/10),t=t.replace(/(^|[^\\])ff/g,"$1"+r(m)),m=Math.round(m/10),t=t.replace(/(^|[^\\])f/g,"$1"+m);var g=s<12?"AM":"PM";t=t.replace(/(^|[^\\])TT+/g,"$1"+g),t=t.replace(/(^|[^\\])T/g,"$1"+g.charAt(0));var v=g.toLowerCase();t=t.replace(/(^|[^\\])tt+/g,"$1"+v),t=t.replace(/(^|[^\\])t/g,"$1"+v.charAt(0));var y=-e.getTimezoneOffset(),w=n||!y?"Z":y>0?"+":"-";if(!n){y=Math.abs(y);var b=Math.floor(y/60),x=y%60;w+=r(b)+":"+r(x)}t=t.replace(/(^|[^\\])K/g,"$1"+w);var M=(n?e.getUTCDay():e.getDay())+1;return t=t.replace(new RegExp(i[0],"g"),i[M]),t=t.replace(new RegExp(c[0],"g"),c[M]),t=t.replace(new RegExp(o[0],"g"),o[l]),t=t.replace(new RegExp(a[0],"g"),a[l]),t=t.replace(/\\(.)/g,"$1")},c.fetch=function(e,t){function n(){for(var e=!1,t=0;t<r.length;t++){try{e=r[t]()}catch(e){continue}break}return e}var r=[function(){return new XMLHttpRequest},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml3.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")}];return new Promise(function(r,o){var a=n();if(a.timeout=2e3,a){var i=t?"POST":"GET";a.open(i,e,!0),t&&a.setRequestHeader("Content-type","application/json"),a.ontimeout=function(e){o(a)},a.onreadystatechange=function(){if(4==a.readyState)return 200!=a.status&&304!=a.status?void o(a):void r(a)},4!=a.readyState&&a.send(JSON.stringify(t))}})};var u=a.framework;u.filePrefix=".js",u.base="src",u.componentLoadListener={},u.refs=[],u.createInjector=function(e){function t(e){var t=n+"/"+e;return"/"==e.charAt(0)&&(t=u.composePathFromBase(e)),a.components[t]}var n=e.substring(0,e.lastIndexOf("/"));return t},u.addComponent=function(e,t){a.components[e]=t;var n=e+u.filePrefix;n in u.componentLoadListener&&u.componentLoadListener[n].call()},u.attachScriptToDocument=function(e){var t=e.substring(0,e.length-".js".length);return t in a.components?Promise.resolve(!0):e in u.componentLoadListener?Promise.resolve(!0):new Promise(function(t){var n=document.createElement("script");n.setAttribute("src","."+e),document.head.appendChild(n),u.componentLoadListener[e]=function(){t(e),delete u.componentLoadListener[e]}})},u.composePathFromBase=function(e){var t="/"==e.charAt(0);return"/"+u.base+(t?"":"/")+e},u.loadScriptAndDependency=function(e){if(e.indexOf(".")>0)return i.error("Invalid dependency : "+e),Promise.reject();var t=u.composePathFromBase(e);if(t in a.components)return Promise.resolve(!0);var n=t+u.filePrefix;e.substring(0,e.lastIndexOf("/")+1);return new Promise(function(e){c.fetch("."+n).then(function(t){var r=(t.responseText.match(/\$inject\(.*?\)/g)||[]).map(function(e){return e.substring('$inject("'.length,e.length-2)});if(c.nonEmptyArray(r)){var o=r.map(function(e){return"/"!=e.charAt(0)&&(e="/"+e),u.loadScriptAndDependency(e)});Promise.all(o).then(function(){u.attachScriptToDocument(n).then(function(){e(n)})})}else u.attachScriptToDocument(n).then(function(){e(n)})},function(){i.error("Unable to fetch "+n)})})},u.getParentComponent=function(e){var t=e;do{if("element"in t.attributes||"BODY"==t.nodeName)return t;t=t.parentNode}while(t);return null},u.validComponentName=function(e,t){return e._state&&e._state._name==t},u.renderChain=function(e){return e.reduceRight(function(e,t){return e.then(function(){return new Promise(function(e){u.loadScriptAndDependency(t).then(function(){e(!0)})})})},Promise.resolve(!1))},u.propertyCheckChanges=function(e,t,n){if(null!=e&&null!=t&&null!=n){var r={},o=[];for(var a in e)if(o.push(a),e.hasOwnProperty(a)){if("function"==typeof e[a])continue;t.hasOwnProperty(a)?r[a]={leftValue:e[a],rightValue:t[a]}:r[a]={leftValue:e[a],rightValue:null}}for(var a in t)if(t.hasOwnProperty(a)&&o.indexOf(a)<0){if("function"==typeof t[a])continue;r[a]={leftValue:null,rightValue:t[a]}}var i={};for(var a in r)if(r[a].leftValue!==r[a].rightValue){var c="";c=null==r[a].leftValue?"add":null==r[a].rightValue?"remove":"change",i[a]={type:c,oldValue:r[a].leftValue,newValue:r[a].rightValue},i.hasValue=!0}i.hasValue&&(delete i.hasValue,n(i))}},u.registerRef=function(e,n,r){return n._refName=e,t(e,n)||u.refs.push({name:e,component:n,render:r}),r},u.start=function(){var e=document.querySelector("script[src$='yalla.js']")||[];if(!c.assertNotNull(e.attributes["yalla-component"],e.attributes["yalla-base"],e.attributes["yalla-domtarget"]))throw new Error("script tag should contain attributes 'yalla-component', 'yalla-base' and 'yalla-domtarget'");var t=e.attributes["yalla-component"].nodeValue,n=e.attributes["yalla-base"].nodeValue,r=e.attributes["yalla-domtarget"].nodeValue,o=!!e.attributes["yalla-routing"]&&e.attributes["yalla-routing"].nodeValue;u.base=n,u.domTarget=r,u.defaultComponent=t,u.beforeRenderToScreen=function(){return new Promise(function(e){if(o&&"function"==typeof window[o]){var t=window.location.hash;window[o](t).then(function(n){n&&n!=t?(e(!1),i.info("Re-routing path to new location"),window.location.hash=n):e(!0)})}else e(!0)})},u.renderToScreen()},u.renderToScreen=function(){var e=arguments;u.beforeRenderToScreen().then(function(t){if(t)if(0==e.length)r();else if(2==e.length&&"function"==typeof e[1])IncrementalDOM.patch(e[0],e[1]);else if(e.length>0){var n=o(e);n.forEach(function(e){a.framework.refs.filter(function(t){return t.name===e}).forEach(function(e){IncrementalDOM.patch(e.component,function(){e.render()})})})}})},u.beforeRenderToScreen=function(){return Promise.resolve(!0)};var l=IncrementalDOM.attributes;return["checked","selected","disabled","readonly","required","multiple","ismap"].forEach(function(e){l[e]=function(t,n,r){r?t.setAttribute(e,!0):t.removeAttribute(e)}}),l.value=function(e,t,n){e.value=n},IncrementalDOM.notifications.nodesCreated=function(e){e.forEach(function(e){e.oncreated&&e.oncreated.call(e,{target:e,currentTarget:e})})},IncrementalDOM.notifications.nodesDeleted=function(e){console.log("nodes deleted"),e.forEach(function(e){e._refName&&n(e._refName,e),e.ondeleted&&e.ondeleted.call(e,{target:e,currentTarget:e})})},a}();window.onload=function(){yalla.framework.start()},"onhashchange"in window?window.onhashchange=function(){window.location.reload()}:alert("Browser not supported");