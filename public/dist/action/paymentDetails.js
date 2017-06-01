yalla.framework.addComponent("/dist/action/paymentDetails", (function() {
  var $path = "/dist/action/paymentDetails";
  var $patchChanges = yalla.framework.renderToScreen;
  var $export = {};
  var $context = {};
  var _parentComponent = yalla.framework.getParentComponent;
  var $inject = yalla.framework.createInjector("/dist/action/paymentDetails");

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

  var dates = $inject('/common/dates');
  var numbers = $inject('/common/numbers');
  var errorMessage = "";

  var package = {};
  var booking = {};

  function setPackage(pkg) {
    package = pkg;
  }

  function getPackage() {
    return package;
  }

  function setBooking(bkg) {
    booking = bkg;
  }

  function getBooking() {
    return booking;
  }

  function paymentConfirmation() {
    debugger;
    var form = this.target.form;
    booking.fromBank = form.elements.fromBank.value;
    booking.fromBranch = form.elements.fromBranch.value;
    booking.fromAccountNumber = form.elements.fromAccountNumber.value;
    booking.fromAccountHolder = form.elements.fromAccountHolder.value;
    booking.actualPayment = form.elements.actualPayment.value;
    booking.paymentDate = (new Date(form.elements.paymentDate.value)).getTime();
    doPaymentConfirmation();
    return false;
  }

  function doPaymentConfirmation() {
    return new Promise(function(resolve) {
      dpd.bookings.put(booking, function(bkg, err) {
        if (err) {
          errorMessage = JSON.stringify(err);
          $patchChanges();
        } else {
          window.location.hash = '#app/action.paymentConfirmation:bookingId=' + booking.id;
        }
      });
    });
  }

  function queryTravelAgent(id) {
    return new Promise(function(resolve) {
      dpd.travelagents.get(id, function(agent, err) {
        if (err) {
          errorMessage = JSON.stringify(err);
          $patchChanges();
        } else {
          resolve(agent);
        }
      });
    });
  }

  function queryPackage(id) {

    return new Promise(function(resolve) {
      dpd.packages.get(id, function(pkg, err) {
        if (err) {
          errorMessage = JSON.stringify(err);
          $patchChanges();
        } else {
          queryTravelAgent(pkg.travelAgentId).then(function(agent) {
            pkg.agent = agent;
            resolve(pkg);
          });
        }
      });
    });
  }

  function getPaymentDetails(bookingId) {
    return new Promise(function(resolve) {
      dpd.bookings.get(bookingId, function(bkg, err) {
        if (err) {
          errorMessage = JSON.stringify(err);
          $patchChanges();
        } else {
          setBooking(bkg);
          queryPackage(bkg.packageId).then(function(pkg) {
            setPackage(pkg);
            bkg.package = pkg;
            //debugger;
            resolve(bkg);
          });
        }
      });

    });
  }

  function $render(_props, _slotView) {
    $context["card-booking"] = $inject("/component/card-booking");
    var cardBooking = $context["card-booking"];
    $context["card"] = $inject("/component/panel");
    var card = $context["card"];
    _elementOpenStart("link", "");
    _attr("element", "dist.action.paymentDetails");
    _attr("href", "asset/css/custom-style.css");
    _attr("rel", "stylesheet");
    _elementOpenEnd("link");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    _elementClose("link");
    $context["entry"] = $inject("/component/entry");
    var entry = $context["entry"];
    _elementOpenStart("div", "");
    _attr("element", "dist.action.paymentDetails");
    _elementOpenEnd("div");
    // The component of this object
    var __component = IncrementalDOM.currentElement();
    __component.__state = __component.__state || initState.bind(__component)(_props);
    var __state = __component.__state;
    _elementOpenStart("div", "");
    _elementOpenEnd("div");
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
        $context["card-booking"].render({
          "bkg": data
        }, function(slotName) {});
        $context["card"].render({
          "title": "Payment Info",
          "footer": "Please make the payment before booking expires to avoid automatic cancellation of your booking"
        }, function(slotName) {
          if (slotName == "body") {
            _elementOpenStart("div", "");
            _elementOpenEnd("div");
            _text("Total: " + ((booking.totalPrice + booking.uniqueCode).toFormattedString()) + "");
            _elementOpenStart("br", "");
            _elementOpenEnd("br");
            _elementClose("br");
            _text("Bank: Bank Central Asia");
            _elementOpenStart("br", "");
            _elementOpenEnd("br");
            _elementClose("br");
            _text("Branch: Sidoarjo");
            _elementOpenStart("br", "");
            _elementOpenEnd("br");
            _elementClose("br");
            _text("Account No:1234567890");
            _elementOpenStart("br", "");
            _elementOpenEnd("br");
            _elementClose("br");
            _text("Name: PT Pete Tbk.");
            _elementOpenStart("br", "");
            _elementOpenEnd("br");
            _elementClose("br");
            _elementClose("div");
          }
        });
      }
      var promise = getPaymentDetails.bind(self)(_props.bookingId);
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
    $context["card"].render({
      "title": "Payment Confirmation",
      "nofooter": "nofooter"
    }, function(slotName) {
      if (slotName == "body") {
        _elementOpenStart("div", "");
        _elementOpenEnd("div");
        _elementOpenStart("form", "");
        _elementOpenEnd("form");
        _elementOpenStart("div", "");
        _attr("class", "row");
        _elementOpenEnd("div");
        $context["entry"].render({
          "type": "text",
          "prompt": "Bank Name",
          "name": "fromBank"
        }, function(slotName) {});
        $context["entry"].render({
          "type": "text",
          "prompt": "Bank Branch",
          "name": "fromBranch"
        }, function(slotName) {});
        $context["entry"].render({
          "type": "text",
          "prompt": "Account Number",
          "name": "fromAccountNumber"
        }, function(slotName) {});
        $context["entry"].render({
          "type": "text",
          "prompt": "Account Holder",
          "name": "fromAccountHolder"
        }, function(slotName) {});
        $context["entry"].render({
          "type": "number",
          "prompt": "Amount Transfered",
          "name": "actualPayment"
        }, function(slotName) {});
        $context["entry"].render({
          "type": "datetime-local",
          "prompt": "Transfer Date & Time",
          "name": "paymentDate"
        }, function(slotName) {});
        $context["entry"].render({
          "type": "button",
          "name": "btnPaymentConfirmation",
          "value": "Payment Confirmation",
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
            return paymentConfirmation.bind(self)();
          }
        }, function(slotName) {});
        _elementClose("div");
        _elementClose("form");
        _elementClose("div");
      }
    });
    _elementClose("div");
  }
  if (typeof $render === "function") {
    $export.render = $render;
  }
  return $export;
})());