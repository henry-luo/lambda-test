

/*---
es6id: 9.5.9
description: >
    [[Set]] ( P, V, Receiver)

    11. If booleanTrapResult is false, return false.
features: [Proxy, Reflect, Reflect.set]
---*/

var target = {};
var handler = {
  set: function(t, prop, value, receiver) {
    return undefined;
  }
};
var p = new Proxy(target, handler);

assert.sameValue(Reflect.set(p, "attr", "foo"), false);
