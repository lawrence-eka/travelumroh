yalla.framework.addComponent("/dist/test-event/event",function(){yalla.framework.renderToScreen,yalla.framework.createInjector("/dist/test-event/event");var $export={};return yalla.framework.getParentComponent,yalla.utils.merge,$export={listeners:[],publish:function(data){this.listeners.forEach(function(listener){listener(data)})},subscribe:function(listener){this.listeners.push(listener)},unsubscribe:function(listener){this.listeners.splice(this.listeners.indexOf(listener),1)}},"function"==typeof $render&&($export.render=$render),$export}());