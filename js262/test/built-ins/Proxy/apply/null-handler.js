

/*---
esid: sec-proxy-object-internal-methods-and-internal-slots-call-thisargument-argumentslist
description: >
    [[Call]] (thisArgument, argumentsList)

    2. If handler is null, throw a TypeError exception.
features: [Proxy]
---*/


var p = Proxy.revocable(function() {}, {});

p.revoke();

assert.throws(TypeError, function() {
  p.proxy();
});
