

/*---
esid: sec-proxy-object-internal-methods-and-internal-slots-ownpropertykeys
description: >
    If target is not extensible, the result must contain all the keys of the own
    properties of the target object.
info: |
    [[OwnPropertyKeys]] ( )

    ...
    19. For each key that is an element of targetConfigurableKeys, do
        a. If key is not an element of uncheckedResultKeys, throw a TypeError
        exception.
features: [Proxy]
---*/

var target = {
  foo: 1,
  bar: 2
};

var p = new Proxy(target, {
  ownKeys: function() {
    return ["foo"];
  }
});

Object.preventExtensions(target);

assert.throws(TypeError, function() {
  Object.keys(p);
});
