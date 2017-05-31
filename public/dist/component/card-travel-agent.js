yalla.framework.addComponent("/dist/component/card-travel-agent", (function() {
  var $path = "/dist/component/card-travel-agent";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var $context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var $inject = yalla.framework.createInjector("/dist/component/card-travel-agent");

  function ComponentEvent(type, data, target, currentTarget) {
    this.data = data;
    this.target = target;
    this.type = type;
    this.currentTarget = currentTarget;
  }

  var _elementOpen = IncrementalDOM.elementOpen,
    _elementClose = IncrementalDOM.elementClose,
    _elementOpenStart = IncrementalDOM.elementOpenStart,
    _elementOpenEnd = IncrementalDOM.elementOpenEnd,
    _elementVoid = IncrementalDOM.elementVoid,
    _text = IncrementalDOM.text,
    _attr = IncrementalDOM.attr,
    _skip = IncrementalDOM.skip;

  function initState(props) {
    return {}
  };

  function onClickEdit(travelAgentId) {
    this.emitEvent('editTA', travelAgentId);
  }

  function onClickPackages(travelAgentId) {
    this.emitEvent('showPackages', travelAgentId);
  }




  function $render(_props, _slotView) {
    _elementOpenStart("link", "");
    _attr("element", "dist.component.card-travel-agent");
    _attr("href", "asset/css/custom-style.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    _elementClose("link");
    $context["card"] = $inject("/component/card");
    var card = $context["card"];
    $context["entry"] = $inject("/component/entry");
    var entry = $context["entry"];
    _elementOpenStart("div", "");
    _attr("element", "dist.component.card-travel-agent");
    _elementOpenEnd("div");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    $context["card"].render({
      "title": _props.travelAgent.travelAgentName
    }, function(slotName) {
      _elementOpenStart("div", "");
      _elementOpenEnd("div");
      _text("Address: " + (_props.travelAgent.address) + "");
      _elementOpenStart("br", "");
      _elementOpenEnd("br");
      _elementClose("br");
      _text("City: " + (_props.travelAgent.city) + "");
      _elementOpenStart("div", "");
      _attr("class", "row");
      _elementOpenEnd("div");
      $context["entry"].render({
        "type": "button",
        "value": "Edit Info",
        "name": "btnEdit",
        "divClass": "col-xs-6 col-sm-6 col-md-6 col-lg-6",
        "onclick": function(event) {
          var self = {
            target: event.target
          };
          self.properties = _props;
          if ('elements' in self.target) {
            self.elements = self.target.elements;
          }
          self.currentTarget = this == event.target ? self.target : _parentComponent(event.currentTarget);
          self.component = __component;
          self.component.__state = self.component.__state || {};
          self.state = self.component.__state;
          self.emitEvent = function(eventName, data) {
            var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
            if ('on' + eventName in _props) {
              _props['on' + eventName](event);
            }
          };
          return onClickEdit.bind(self)(_props.travelAgent.id);
        }
      }, function(slotName) {});
      $context["entry"].render({
        "type": "button",
        "value": "Packages...",
        "name": "btnPackages",
        "divClass": "col-xs-6 col-sm-6 col-md-6 col-lg-6",
        "onclick": function(event) {
          var self = {
            target: event.target
          };
          self.properties = _props;
          if ('elements' in self.target) {
            self.elements = self.target.elements;
          }
          self.currentTarget = this == event.target ? self.target : _parentComponent(event.currentTarget);
          self.component = __component;
          self.component.__state = self.component.__state || {};
          self.state = self.component.__state;
          self.emitEvent = function(eventName, data) {
            var event = new ComponentEvent(eventName, data, self.target, self.currentTarget);
            if ('on' + eventName in _props) {
              _props['on' + eventName](event);
            }
          };
          return onClickPackages.bind(self)(_props.travelAgent.id);
        }
      }, function(slotName) {});
      _elementClose("div");
      _elementClose("div");
    });
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());