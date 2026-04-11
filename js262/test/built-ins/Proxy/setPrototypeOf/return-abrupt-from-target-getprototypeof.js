

/*---
esid: sec-proxy-object-internal-methods-and-internal-slots-setprototypeof-v
description: >
  Return abrupt from target.[[GetPrototypeOf]]()
info: |
  [[SetPrototypeOf]] (V)

  12. Let targetProto be ? target.[[GetPrototypeOf]]().
features: [Proxy]
---*/

var target = new Proxy({}, {
  getPrototypeOf: function() {
    throw new Test262Error();
  }
});

Object.preventExtensions(target);

var proxy = new Proxy(target, {
  setPrototypeOf: function() {
    return true;
  }
});

assert.throws(Test262Error, function() {
  Object.setPrototypeOf(proxy, {});
});
