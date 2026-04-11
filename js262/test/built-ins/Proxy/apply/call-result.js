

/*---
esid: sec-proxy-object-internal-methods-and-internal-slots-call-thisargument-argumentslist
description: >
    Return the result from the trap method.
info: |
    [[Call]] (thisArgument, argumentsList)

    9. Return Call(trap, handler, «target, thisArgument, argArray»).
features: [Proxy]
---*/

var result = {};
var p = new Proxy(function() {
  throw new Test262Error('target should not be called');
}, {
  apply: function(t, c, args) {
    return result;
  },
});

assert.sameValue(p.call(), result);
