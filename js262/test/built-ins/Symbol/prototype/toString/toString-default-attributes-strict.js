

/*---
es6id: 19.4
description: >
    Symbol property get and set, strict
flags: [onlyStrict]
features: [Symbol]
---*/

var sym = Symbol("66");

assert.throws(TypeError, function() {
  sym.toString = 0;
});

assert.throws(TypeError, function() {
  sym.valueOf = 0;
});
