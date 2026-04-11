

/*---
esid: sec-proxy-object-internal-methods-and-internal-slots-construct-argumentslist-newtarget
description: >
    Throws a TypeError if trap result is not an Object: undefined
info: |
    [[Construct]] ( argumentsList, newTarget)

    11. If Type(newObj) is not Object, throw a TypeError exception.
features: [Proxy]
---*/

var P = new Proxy(function() {
  throw new Test262Error('target should not be called');
}, {
  construct: function() {}
});

assert.throws(TypeError, function() {
  new P();
});
