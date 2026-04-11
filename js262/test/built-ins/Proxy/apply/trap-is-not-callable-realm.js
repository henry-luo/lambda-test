

/*---
esid: sec-proxy-object-internal-methods-and-internal-slots-call-thisargument-argumentslist
description: >
  Throws if trap is not callable (honoring the Realm of the current execution
  context)
features: [cross-realm, Proxy]
---*/

var OProxy = $262.createRealm().global.Proxy;
var p = new OProxy(function() {}, {
  apply: {}
});

assert.throws(TypeError, function() {
  p();
});
