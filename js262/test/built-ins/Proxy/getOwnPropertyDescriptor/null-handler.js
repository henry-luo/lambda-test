

/*---
es6id: 9.5.5
description: >
    Throws a TypeError exception if handler is null.
features: [Proxy]
---*/

var p = Proxy.revocable({}, {});

p.revoke();

assert.throws(TypeError, function() {
  Object.getOwnPropertyDescriptor(p.proxy);
});
