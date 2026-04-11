

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: sec-async-function-constructor
description: >
  %AsyncFunction% is a subclass of Function
---*/
async function foo() {};
var AsyncFunction = foo.constructor;
assert.sameValue(Object.getPrototypeOf(AsyncFunction), Function, "Prototype of constructor is Function");
assert.sameValue(Object.getPrototypeOf(AsyncFunction.prototype), Function.prototype, "Prototype of constructor's prototype is Function.prototype");
assert(foo instanceof Function, 'async function instance is instanceof Function');
