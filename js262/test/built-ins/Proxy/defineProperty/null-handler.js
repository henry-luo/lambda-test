

/*---
es6id: 9.5.6
description: >
    Throws a TypeError exception if handler is null.
features: [Proxy]
---*/

var p = Proxy.revocable({}, {});

p.revoke();

assert.throws(TypeError, function() {
  Object.defineProperty(p.proxy, "foo", {
    configurable: true,
    enumerable: true
  });
});
