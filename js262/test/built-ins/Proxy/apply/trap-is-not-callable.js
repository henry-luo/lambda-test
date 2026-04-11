

/*---
esid: sec-proxy-object-internal-methods-and-internal-slots-call-thisargument-argumentslist
description: >
    Throws if trap is not callable.
features: [Proxy]
---*/

var p = new Proxy(function() {}, {
  apply: {}
});

assert.throws(TypeError, function() {
  p();
});
