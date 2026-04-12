

/*---
es6id: 9.5.9
description: >
    [[Set]] ( P, V, Receiver)

    Throws a TypeError when target property is an accessor not configurable and
    and set is undefined.
info: |
    14. If targetDesc is not undefined, then
        b. If IsAccessorDescriptor(targetDesc) and targetDesc.[[Configurable]] is false, then
            i. If targetDesc.[[Set]] is undefined, throw a TypeError exception.

features: [Proxy]
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
  set: undefined
});

assert.throws(TypeError, function() {
  p.attr = 'bar';
});

assert.throws(TypeError, function() {
  p['attr'] = 'bar';
});
