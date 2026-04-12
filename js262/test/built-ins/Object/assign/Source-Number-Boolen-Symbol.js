

/*---
description: >
  Number,Boolean,Symbol cannot have own enumerable properties,
  So cannot be Assigned.Here result should be original object.
esid: sec-object.assign
features: [Symbol]
---*/

var target = new Object();
var result = Object.assign(target, 123, true, Symbol('foo'));

assert.sameValue(result, target, 'The value of result is expected to equal the value of target');
