

/*---
es6id: 9.5.10
description: >
    [[Delete]] (P)

    3. If handler is null, throw a TypeError exception.
features: [Proxy]
---*/

var p = Proxy.revocable({
  attr: 1
}, {});

p.revoke();

assert.throws(TypeError, function() {
  delete p.proxy.attr;
});
