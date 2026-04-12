

/*---
es6id: 9.5.9
description: >
    [[Set]] ( P, V, Receiver)

    Throws a TypeError when target property is not configurable neither writable
    and its value is not strictly equal to V.
info: |
    14. If targetDesc is not undefined, then
        a. If IsDataDescriptor(targetDesc) and targetDesc.[[Configurable]] is
        false and targetDesc.[[Writable]] is false, then
            i. If SameValue(V, targetDesc.[[Value]]) is false, throw a TypeError
            exception.
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
  writable: false,
  value: 'foo'
});

assert.throws(TypeError, function() {
  p.attr = 'bar';
});

assert.throws(TypeError, function() {
  p['attr'] = 'bar';
});
