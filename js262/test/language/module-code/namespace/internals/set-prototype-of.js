

/*---
esid: sec-module-namespace-exotic-objects-setprototypeof
description: The [[SetPrototypeOf]] internal method returns `false`
flags: [module]
---*/

import * as ns from './set-prototype-of.js';
var newProto = {};

assert.sameValue(typeof Object.setPrototypeOf, 'function');

assert.throws(TypeError, function() {
  Object.setPrototypeOf(ns, newProto);
});
