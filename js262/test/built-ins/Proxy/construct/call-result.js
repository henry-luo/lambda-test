

/*---
esid: sec-proxy-object-internal-methods-and-internal-slots-construct-argumentslist-newtarget
description: >
    Return the result from the trap method.
info: |
    [[Construct]] ( argumentsList, newTarget)

    12. Return newObj
features: [Proxy]
---*/

var P = new Proxy(function() {
  throw new Test262Error('target should not be called');
}, {
  construct: function(t, c, args) {
    return {
      sum: 42
    };
  }
});

assert.sameValue((new P(1, 2)).sum, 42);
