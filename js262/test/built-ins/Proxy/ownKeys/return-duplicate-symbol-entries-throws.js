

/*---
esid: sec-proxy-object-internal-methods-and-internal-slots-ownpropertykeys
description: >
    The returned list must not contain any duplicate entries.
info: |
    [[OwnPropertyKeys]] ( )

    ...
    9. If trapResult contains any duplicate entries, throw a TypeError exception.
features: [Proxy, Symbol]
---*/

var s = Symbol();
var p = new Proxy({}, {
  ownKeys: function() {
    return [s, s];
  }
});

assert.throws(TypeError, function() {
  Object.keys(p);
});
