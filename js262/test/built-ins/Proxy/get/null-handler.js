

/*---
es6id: 9.5.8
description: >
    [[Get]] (P, Receiver)

    2. If handler is null, throw a TypeError exception.
features: [Proxy]
---*/

var p = Proxy.revocable({}, {});

p.revoke();

assert.throws(TypeError, function() {
  p.proxy.attr;
});

assert.throws(TypeError, function() {
  p.proxy['attr'];
});
