

/*---
es6id: 19.1.2.5
description: >
    Frozen object contains symbol properties.
flags: [onlyStrict]
features: [Symbol]
---*/
var sym = Symbol("66");
var obj = {};
obj[sym] = 1;
Object.freeze(obj);

assert.throws(TypeError, function() {
  obj[sym] = 2;
});
