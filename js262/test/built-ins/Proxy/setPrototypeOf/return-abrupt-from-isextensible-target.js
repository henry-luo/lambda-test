

/*---
esid: sec-proxy-object-internal-methods-and-internal-slots-setprototypeof-v
description: >
  Return abrupt from IsExtensible(target)
info: |
  [[SetPrototypeOf]] (V)

  10. Let extensibleTarget be ? IsExtensible(target).
features: [Proxy]
---*/

var target = new Proxy({}, {
  isExtensible: function() {
    throw new Test262Error();
  }
});

var proxy = new Proxy(target, {
  setPrototypeOf: function() {
    return true;
  }
});

assert.throws(Test262Error, function() {
  Object.setPrototypeOf(proxy, {});
});
