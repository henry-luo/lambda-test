

/*---
es6id: 9.5.9
description: >
    [[Set]] ( P, V, Receiver)

    3. If handler is null, throw a TypeError exception.
features: [Proxy]
---*/

var p = Proxy.revocable({}, {});

p.revoke();

assert.throws(TypeError, function() {
  p.proxy.attr = 1;
});

assert.throws(TypeError, function() {
  p.proxy['attr'] = 1;
});
