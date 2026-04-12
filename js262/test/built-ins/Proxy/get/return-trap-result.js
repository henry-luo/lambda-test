

/*---
es6id: 9.5.8
description: >
    [[Get]] (P, Receiver)

    14. Return trapResult.
features: [Proxy]
---*/

var target = {
  attr: 1
};
var p = new Proxy(target, {
  get: function() {
    return 2;
  }
});

assert.sameValue(p.attr, 2);
assert.sameValue(p.foo, 2);

assert.sameValue(p['attr'], 2);
assert.sameValue(p['foo'], 2);
