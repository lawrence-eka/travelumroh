yalla.framework.addComponent("/dist/component/panel",function(){function e(e,t,n,a){this.data=t,this.target=n,this.type=e,this.currentTarget=a}function t(e){return{}}function n(e){}function t(e){return{}}function a(){this.emitEvent("click")}function o(){return this.properties&&this.properties.onclick?"cursor:pointer":""}function r(r,i){d("link",""),v("element","dist.component.panel"),v("href","asset/css/custom-style.css"),v("rel","stylesheet"),m("link"),c("link"),d("div",""),v("element","dist.component.panel"),m("div");var u=IncrementalDOM.currentElement(),f=yalla.framework.validComponentName(u,l);u._state=u._state&&f?u._state:t.bind(u)(r),u._state._name=l;var y=(u._state,{component:u,properties:r,state:u._state});f&&yalla.framework.propertyCheckChanges(u._properties,r,n.bind(y)),u._properties=r,d("div",""),v("class","container custom-container-layout"),v("onclick",function(t){var n={target:t.target};n.properties=r,"elements"in n.target&&(n.elements=n.target.elements),n.currentTarget=this==t.target?n.target:s(t.currentTarget),n.component=u,n.component._state=n.component._state||{},n.state=n.component._state,n.emitEvent=function(t,a){var o=new e(t,a,n.target,n.currentTarget);"on"+t in r&&r["on"+t](o)},a.bind(n)()}),v("style",o.bind(self)()),m("div"),d("div",""),v("class","row centered-form no-top-margin"),m("div"),d("div",""),v("class","form-panel col-xs-12 col-sm-12 col-md-12 col-lg-12"),m("div"),d("div",""),v("class","panel panel-default "),m("div"),(r.test||!r.notitle||r.title)&&(d("div",""),v("class","panel-heading custom-panel-layout"),m("div"),d("h3",""),v("class","panel-title"),m("h3"),p(""+(r.title?r.title:"")),r.test&&(d("div",""),m("div"),p("PANEL HEADER"),c("div")),c("h3"),i("title",{}),c("div")),d("div",""),v("class","panel-body custom-panel-layout"),m("div"),p(""+(r.body?r.body:"")),r.test&&(d("div",""),m("div"),p("PANEL BODY"),c("div")),i("body",{}),c("div"),(r.test||!r.nofooter||r.footer)&&(d("div",""),v("class","panel-footer custom-panel-layout"),m("div"),p(""+(r.footer?r.footer:"")),r.test&&(d("div",""),m("div"),p("PANEL FOOTER"),c("div")),i("footer",{}),c("div")),c("div"),c("div"),c("div"),c("div"),c("div")}var i=(yalla.framework.renderToScreen,yalla.framework.createInjector("/dist/component/panel"),{}),l="dist.component.panel",s=yalla.framework.getParentComponent,c=(yalla.utils.merge,IncrementalDOM.elementOpen,IncrementalDOM.elementClose),d=IncrementalDOM.elementOpenStart,m=IncrementalDOM.elementOpenEnd,p=(IncrementalDOM.elementVoid,IncrementalDOM.text),v=IncrementalDOM.attr;IncrementalDOM.skip;return"function"==typeof r&&(i.render=r),i}());