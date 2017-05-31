yalla.framework.addComponent("/dist/action/myApprovals", (function() {
  var $path = "/dist/action/myApprovals";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var $context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var $inject = yalla.framework.createInjector("/dist/action/myApprovals");

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

  var errorMessage = "";
  var alertType = "";

  function loadUserApprovals() {
    return new Promise(function(resolve) {
      var q = {
        "needApproval": {
          "$ne": null
        }
      };
      dpd.users.get(q, function(users, err) {
        if (err) {
          errorMessage = err.message;
        } else {
          resolve(users);
        }
        $patchChanges();
      });
    });
  }

  function onApprove(user, isApproved) {
    return new Promise(function(resolve) {
      if (isApproved) user.needApproval.isApproved = true;
      else user.needApproval = false;
      dpd.users.put(user.id, user, function(result, err) {
        if (err) {
          errorMessage = JSON.stringify(err);
          alertType = "error";
        }
        window.location.hash = "#app/action.myApprovals";
      });
    });
  }

  function $render(_props, _slotView) {
    $context["card-user-approvals"] = $inject("/component/card-user-approvals");
    var cardUserApprovals = $context["card-user-approvals"];
    $context["alert"] = $inject("/component/alert");
    var alert = $context["alert"];
    _elementOpenStart("link", "");
    _attr("element", "dist.action.myApprovals");
    _attr("href", "asset/css/registration.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    _elementClose("link");
    _elementOpenStart("div", "");
    _attr("element", "dist.action.myApprovals");
    _elementOpenEnd("div");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    (function(domNode) {
      var node = domNode.element;
      var self = {
        target: node
      };
      self.properties = _props;
      if ('elements' in self.target) {
        self.elements = self.target.elements;
      }
      self.currentTarget = self.target;
      self.component = __component;
      self.component.__state = self.component.__state || {};
      self.state = self.component.__state;

      function asyncFunc__1(data) {
        $context["alert"].render({
          "message": errorMessage,
          "alertType": alertType
        }, function(slotName) {});
        if (!data || data.length == 0) {
          $context["alert"].render({
            "message": 'No user needs approval for now.',
            "alertType": 'info'
          }, function(slotName) {});
        }
        var _array = data || [];
        _array.forEach(function(user) {
          _elementOpenStart("p", "");
          _elementOpenEnd("p");
          $context["card-user-approvals"].render({
            "user": user,
            "onapprove": function(event) {
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
              return onApprove.bind(self)(event, true);
            },
            "onreject": function(event) {
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
              return onApprove.bind(self)(event, false);
            }
          }, function(slotName) {});
          _elementClose("p");
        });
      }
      var promise = loadUserApprovals.bind(self)();
      if (promise && typeof promise == "object" && "then" in promise) {
        _skip();
        promise.then(function(_result) {
          $patchChanges(node, function() {
            asyncFunc__1.call(self, _result)
          });
        }).catch(function(err) {
          console.log(err);
        });
      } else {
        asyncFunc__1.call(self, promise)
      }
    })({
      element: IncrementalDOM.currentElement(),
      pointer: IncrementalDOM.currentPointer()
    });
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());