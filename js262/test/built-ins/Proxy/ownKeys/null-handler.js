

/*---
esid: sec-proxy-object-internal-methods-and-internal-slots-ownpropertykeys
description: >
    [[OwnPropertyKeys]] ( )

    2. If handler is null, throw a TypeError exception.
features: [Proxy]
---*/

var p = Proxy.revocable({}, {});

p.revoke();

assert.throws(TypeError, function() {
  Object.keys(p.proxy);
});
