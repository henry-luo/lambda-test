

/*---
es6id: 26.2.2
description: >
    The value of the [[Prototype]] internal slot of the Proxy
    constructor is the intrinsic object %FunctionPrototype% (19.2.3).
features: [Proxy]
---*/

assert.sameValue(
  Object.getPrototypeOf(Proxy),
  Function.prototype,
  "`Object.getPrototypeOf(Proxy)` returns `Function.prototype`"
);
