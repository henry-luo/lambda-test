

/*---
es6id: 9.5.9
description: >
    [[Set]] ( P, V, Receiver)

    Returns true if trap returns true and target property accessor is not
    configurable and set is not undefined.
features: [Proxy, Reflect, Reflect.set]
---*/

var target = {};
var handler = {
  set: function(t, prop, value, receiver) {
    return true;
  }
};
var p = new Proxy(target, handler);

Object.defineProperty(target, 'attr', {
  configurable: false,
  set: function(value) {
    return value;
  }
});

assert(Reflect.set(p, "attr", 1));
