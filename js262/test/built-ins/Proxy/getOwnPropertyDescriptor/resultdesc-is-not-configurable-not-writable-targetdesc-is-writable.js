

/*---
esid: sec-proxy-object-internal-methods-and-internal-slots-getownproperty-p
description: >
    Throws a TypeError exception if resultDesc is both non-configurable and
    non-writable, while targetDesc is writable.
info: |
    [[GetOwnProperty]] (P)

    ...
    17. If resultDesc.[[Configurable]] is false, then
        ...
        b. If resultDesc has a [[Writable]] field and resultDesc.[[Writable]] is
        false, then
            i. If targetDesc.[[Writable]] is true, throw a TypeError exception.
    ...
features: [Proxy, proxy-missing-checks]
---*/

var trapCalls = 0;
var p = new Proxy({}, {
  getOwnPropertyDescriptor: function(t, prop) {
    Object.defineProperty(t, prop, {
      configurable: false,
      writable: true,
    });

    trapCalls++;
    return {
      configurable: false,
      writable: false,
    };
  },
});

assert.throws(TypeError, function() {
  Object.getOwnPropertyDescriptor(p, "prop");
});
assert.sameValue(trapCalls, 1);
