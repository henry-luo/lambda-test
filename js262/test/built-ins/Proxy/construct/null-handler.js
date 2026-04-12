

/*---
esid: sec-proxy-object-internal-methods-and-internal-slots-construct-argumentslist-newtarget
description: >
    [[Construct]] ( argumentsList, newTarget)

    2. If handler is null, throw a TypeError exception.
features: [Proxy]
---*/


var p = Proxy.revocable(function() {}, {});

p.revoke();

assert.throws(TypeError, function() {
  new p.proxy();
});
